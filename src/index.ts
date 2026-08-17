import type { Context } from '@deepseek-ai/cordis'
import { defineTool } from '@deepseek-ai/dsh-tools'
import Schema from '@deepseek-ai/schemastery'
import { createReadStream } from 'node:fs'
import { existsSync } from 'node:fs'
import { readdir, stat } from 'node:fs/promises'
import type { IncomingMessage, ServerResponse } from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

declare module '@deepseek-ai/cordis' {
  interface Context {
    webServer: {
      register(route: {
        kind: 'exact' | 'prefix'
        path: string
        handler: (req: IncomingMessage, res: ServerResponse) => void | Promise<void>
      }): () => void
      readonly port: number
    }
  }
}

export const name = 'dsh-plugin-nintendo'

export const inject = ['tools', 'webServer']

const ROM_EXTENSIONS = new Set(['.nes', '.unf', '.fds'])

const pluginRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const bundledRomsDir = path.join(pluginRoot, 'roms')

interface RomFile {
  path: string
  name: string
  size: number
}

interface CurrentRom extends RomFile {
  updatedAt: number
}

let current: CurrentRom | undefined
let autoOpen = true

export const Config = Schema.object({
  romsDir: Schema.string().description('NES ROM 目录；缺省时使用插件自带的 roms 目录（如存在）。/nes/roms 会列出其中的游戏供弹窗选择'),
  maxRomBytes: Schema.natural().min(1).default(4 * 1024 * 1024).description('允许加载的 ROM 最大字节数'),
  autoOpen: Schema.boolean().default(true).description('Agent 调用 nes_play 后是否自动弹出模拟器窗口'),
})

export type Config = Schemastery.TypeT<typeof Config>

function sendJson(res: ServerResponse, status: number, body: unknown): void {
  const data = JSON.stringify(body)
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(data),
  })
  res.end(data)
}

function sendError(res: ServerResponse, status: number, message: string): void {
  sendJson(res, status, { error: message })
}

function serveRomFile(res: ServerResponse, rom: RomFile): void {
  res.writeHead(200, {
    'content-type': 'application/octet-stream',
    'content-disposition': `attachment; filename="${encodeURIComponent(rom.name)}"`,
    'content-length': rom.size,
  })
  createReadStream(rom.path).on('error', () => {
    res.destroy()
  }).pipe(res)
}

function resolveRomInDir(dir: string | undefined, name: string): RomFile | undefined {
  if (!dir) return undefined
  if (name.includes('/') || name.includes('\\') || name === '.' || name === '..') return undefined
  const target = path.resolve(dir, name)
  if (target !== path.join(dir, name)) return undefined
  if (!ROM_EXTENSIONS.has(path.extname(name).toLowerCase())) return undefined
  if (!existsSync(target)) return undefined
  return { path: target, name, size: 0 }
}

export function apply(ctx: Context, config: Config): void {
  const maxRomBytes = config.maxRomBytes ?? 4 * 1024 * 1024
  autoOpen = config.autoOpen ?? true

  const romsDir = config.romsDir
    ? path.resolve(config.romsDir)
    : existsSync(bundledRomsDir) ? bundledRomsDir : undefined

  ctx.effect(() => {
    const disposers: Array<() => void> = []

    disposers.push(ctx.webServer.register({
      kind: 'exact',
      path: '/nes/status',
      handler: (req, res) => {
        sendJson(res, 200, {
          rom: current ? { name: current.name, size: current.size, updatedAt: current.updatedAt } : null,
          autoOpen,
          romsDir: romsDir ?? null,
        })
      },
    }))

    disposers.push(ctx.webServer.register({
      kind: 'exact',
      path: '/nes/rom',
      handler: async (req, res) => {
        try {
          let url: URL
          try {
            url = new URL(req.url ?? '/', 'http://x')
          } catch {
            sendError(res, 400, 'bad request url')
            return
          }
          const file = url.searchParams.get('file')
          if (file) {
            const rom = resolveRomInDir(romsDir, file)
            if (!rom) {
              sendError(res, 404, 'rom not found')
              return
            }
            const st = await stat(rom.path)
            serveRomFile(res, { ...rom, size: st.size })
            return
          }
          if (current === undefined) {
            sendError(res, 404, 'no rom loaded')
            return
          }
          serveRomFile(res, current)
        } catch (error) {
          sendError(res, 500, (error as Error).message)
        }
      },
    }))

    if (romsDir) {
      disposers.push(ctx.webServer.register({
        kind: 'exact',
        path: '/nes/roms',
        handler: async (req, res) => {
          try {
            const dir = romsDir!
            const entries = await readdir(dir, { withFileTypes: true })
            const roms: Array<{ name: string; size: number }> = []
            for (const entry of entries) {
              if (!entry.isFile()) continue
              if (!ROM_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) continue
              try {
                const st = await stat(path.join(dir, entry.name))
                roms.push({ name: entry.name, size: st.size })
              } catch {
                // skip unreadable entries
              }
            }
            roms.sort((a, b) => a.name.localeCompare(b.name))
            sendJson(res, 200, { roms })
          } catch (error) {
            sendError(res, 500, (error as Error).message)
          }
        },
      }))
    }

    return () => {
      for (const dispose of disposers) dispose()
    }
  })

  ctx.tools.register(defineTool({
    name: 'nes_play',
    description: '在 NES 模拟器弹窗中加载并运行一个 NES ROM 文件（.nes / .unf）。可传绝对路径，或在插件 roms 目录内的文件名（如 nes_play("Contra (USA).nes")）。会弹出模拟器页面，也可用 Ctrl+Alt+N 手动打开或关闭。',
    parameters: {
      path: { type: 'string', required: true, description: 'NES ROM 文件的绝对路径，或 roms 目录中的文件名' },
    },
    output: {
      schema: { type: 'string' },
      render: (_args, value) => [{ type: 'text', text: value }],
    },
    isConcurrencySafe: () => true,
    async execute(args) {
      let target = args.path
      if (!path.isAbsolute(target) && romsDir) target = path.join(romsDir, target)
      target = path.resolve(target)
      const ext = path.extname(target).toLowerCase()
      if (!ROM_EXTENSIONS.has(ext)) {
        throw new Error(`不支持的文件类型 "${ext}"，仅支持 ${[...ROM_EXTENSIONS].join(', ')}`)
      }
      let st
      try {
        st = await stat(target)
      } catch {
        throw new Error(`无法读取 "${target}"：文件不存在或不可访问`)
      }
      if (!st.isFile()) {
        throw new Error(`"${target}" 不是文件`)
      }
      if (st.size > maxRomBytes) {
        throw new Error(`ROM 大小 ${st.size} 字节超过上限 ${maxRomBytes} 字节`)
      }
      current = { path: target, name: path.basename(target), size: st.size, updatedAt: Date.now() }
      return `已加载 ROM "${current.name}"（${st.size} 字节）。模拟器弹窗即将打开，按 Ctrl+Alt+N 可手动开关。`
    },
  }))
}
