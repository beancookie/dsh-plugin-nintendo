import type { Context } from '@deepseek-ai/cordis'
import { Browser, Controller } from 'jsnes'
import type { ButtonKey, ControllerId, NES } from 'jsnes'

export const name = 'dsh-plugin-nintendo-client'

const STYLE_ID = 'dsh-nintendo-style'
const ROOT_ATTR = 'data-dsh-nintendo-root'
const SHORTCUT_KEY = 'dsh.nintendo.shortcut.v1'
const SAVE_PREFIX = 'dsh.nintendo.save.'
const MUTE_KEY = 'dsh.nintendo.muted.v1'

const CSS = `
[data-dsh-nintendo-root] { position: fixed; inset: 0; z-index: 2147483000; display: grid; place-items: center; background: rgba(8, 10, 16, .52); backdrop-filter: blur(6px); font-family: ui-sans-serif, system-ui, -apple-system, sans-serif; }
[data-dsh-nintendo-panel] { width: min(600px, calc(100vw - 28px)); max-height: calc(100vh - 28px); overflow: auto; border: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.12)); border-radius: 18px; background: var(--dsw-alias-bg-overlay, #17191f); color: var(--dsw-alias-label-primary, #f5f7fb); box-shadow: 0 24px 80px rgba(0,0,0,.42); }
[data-dsh-nintendo-header] { display: flex; align-items: center; gap: 10px; padding: 14px 16px 12px; border-bottom: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.1)); }
[data-dsh-nintendo-title] { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 650; white-space: nowrap; }
[data-dsh-nintendo-rom] { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--dsw-alias-label-secondary, #9aa1b0); font-size: 12px; }
[data-dsh-nintendo-close] { border: 0; padding: 4px 8px; border-radius: 8px; background: transparent; color: inherit; font-size: 16px; line-height: 1; cursor: pointer; }
[data-dsh-nintendo-close]:hover { background: rgba(255,255,255,.08); }
[data-dsh-nintendo-screen] { position: relative; width: 512px; max-width: 100%; aspect-ratio: 256 / 240; margin: 14px auto 0; border-radius: 10px; overflow: hidden; background: #000; box-shadow: 0 8px 28px rgba(0,0,0,.35); }
[data-dsh-nintendo-screen] canvas { display: block; margin: auto; image-rendering: pixelated; image-rendering: crisp-edges; }
[data-dsh-nintendo-empty] { position: absolute; inset: 0; display: grid; place-items: center; text-align: center; color: var(--dsw-alias-label-secondary, #8f96a3); font-size: 13px; line-height: 1.7; pointer-events: none; padding: 24px; }
[data-dsh-nintendo-toolbar] { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; padding: 12px 16px 4px; }
[data-dsh-nintendo-btn] { border: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.12)); border-radius: 9px; padding: 7px 12px; background: rgba(255,255,255,.05); color: inherit; font-size: 13px; cursor: pointer; }
[data-dsh-nintendo-btn]:hover { background: rgba(255,255,255,.1); }
[data-dsh-nintendo-btn]:disabled { opacity: .45; cursor: default; }
[data-dsh-nintendo-status] { padding: 8px 16px 4px; text-align: center; color: var(--dsw-alias-label-secondary, #9aa1b0); font-size: 12px; }
[data-dsh-nintendo-footer] { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; padding: 10px 16px 12px; border-top: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.08)); color: var(--dsw-alias-label-secondary, #8f96a3); font-size: 11px; }
[data-dsh-nintendo-hints] { display: flex; flex-direction: column; gap: 4px; align-items: flex-start; }
[data-dsh-nintendo-p1], [data-dsh-nintendo-p2] { display: flex; flex-wrap: wrap; gap: 6px 14px; align-items: center; }
[data-dsh-nintendo-hints] b { color: var(--dsw-alias-label-primary, #f5f7fb); font-weight: 650; }
[data-dsh-nintendo-hints] kbd { padding: 1px 5px; border: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.14)); border-radius: 5px; background: rgba(255,255,255,.04); font: inherit; }
[data-dsh-nintendo-controls] { display: flex; align-items: center; gap: 10px; }
[data-dsh-nintendo-shortcut], [data-dsh-nintendo-shortcut-reset] { border: 0; padding: 0; background: transparent; color: inherit; font: inherit; cursor: pointer; }
[data-dsh-nintendo-shortcut]:hover, [data-dsh-nintendo-shortcut-reset]:hover { color: var(--dsw-alias-label-primary, #f5f7fb); }
[data-dsh-nintendo-shortcut][data-recording="true"] { color: var(--dsw-alias-label-primary, #f5f7fb); }
[data-dsh-nintendo-root].dsh-nintendo-drag { outline: 2px dashed var(--dsw-alias-brand-primary, #4d6bfe); outline-offset: -4px; }
[data-dsh-nintendo-library] { position: fixed; inset: 0; z-index: 2147483001; display: grid; place-items: center; background: rgba(8,10,16,.45); }
[data-dsh-nintendo-library-card] { width: min(460px, calc(100vw - 48px)); max-height: 70vh; display: flex; flex-direction: column; border: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.12)); border-radius: 14px; background: var(--dsw-alias-bg-overlay, #17191f); color: var(--dsw-alias-label-primary, #f5f7fb); box-shadow: 0 20px 60px rgba(0,0,0,.45); overflow: hidden; }
[data-dsh-nintendo-library-head] { padding: 12px 16px; font-size: 14px; font-weight: 650; border-bottom: 1px solid var(--dsw-alias-border-l1, rgba(255,255,255,.1)); }
[data-dsh-nintendo-library-list] { overflow: auto; padding: 8px; display: flex; flex-direction: column; gap: 4px; }
[data-dsh-nintendo-library-item] { display: flex; justify-content: space-between; gap: 12px; align-items: center; padding: 9px 12px; border: 0; border-radius: 8px; background: transparent; color: inherit; text-align: left; font-size: 13px; cursor: pointer; }
[data-dsh-nintendo-library-item]:hover { background: color-mix(in srgb, var(--dsw-alias-brand-primary, #4d6bfe) 16%, transparent); }
[data-dsh-nintendo-library-size] { color: var(--dsw-alias-label-secondary, #9aa1b0); font-size: 12px; flex: none; }
[data-dsh-nintendo-library-empty] { padding: 24px 16px; text-align: center; color: var(--dsw-alias-label-secondary, #9aa1b0); font-size: 12px; line-height: 1.7; }
@media (prefers-reduced-motion: no-preference) { [data-dsh-nintendo-panel] { animation: dsh-nintendo-in .12s ease-out; } @keyframes dsh-nintendo-in { from { opacity: 0; transform: translateY(-8px) scale(.985); } } }
`

interface Shortcut {
  key: string
  metaKey: boolean
  ctrlKey: boolean
  altKey: boolean
  shiftKey: boolean
}

const DEFAULT_SHORTCUT: Shortcut = { key: 'n', metaKey: false, ctrlKey: true, altKey: true, shiftKey: false }
const MODIFIER_KEYS = new Set(['alt', 'control', 'meta', 'shift'])

type GameKey = [ControllerId, ButtonKey]

const GAME_KEYS: Record<string, GameKey> = {
  KeyW: [1, Controller.BUTTON_UP],
  KeyS: [1, Controller.BUTTON_DOWN],
  KeyA: [1, Controller.BUTTON_LEFT],
  KeyD: [1, Controller.BUTTON_RIGHT],
  KeyX: [1, Controller.BUTTON_A],
  KeyZ: [1, Controller.BUTTON_B],
  Enter: [1, Controller.BUTTON_START],
  ControlRight: [1, Controller.BUTTON_SELECT],
  ArrowUp: [2, Controller.BUTTON_UP],
  ArrowDown: [2, Controller.BUTTON_DOWN],
  ArrowLeft: [2, Controller.BUTTON_LEFT],
  ArrowRight: [2, Controller.BUTTON_RIGHT],
  Digit1: [2, Controller.BUTTON_A],
  Digit2: [2, Controller.BUTTON_B],
  Digit3: [2, Controller.BUTTON_START],
  Digit4: [2, Controller.BUTTON_SELECT],
}

type ShortcutEvent = Pick<KeyboardEvent, 'key' | 'metaKey' | 'ctrlKey' | 'altKey' | 'shiftKey'>
type AudioOpts = { opts: { onAudioSample: ((left: number, right: number) => void) | null } }

interface NintendoState {
  root?: HTMLElement
  screen?: HTMLElement
  empty?: HTMLElement
  status?: HTMLElement
  buttons: Record<string, HTMLButtonElement>
  fileInput?: HTMLInputElement
  browser?: Browser
  originalAudioSample?: ((left: number, right: number) => void) | null
  romName?: string
  romKey?: string
  lastRomBytes?: Uint8Array
  lastRomName?: string
  paused: boolean
  muted: boolean
  shortcut: Shortcut
  recording: boolean
  previousFocus?: HTMLElement
  lastUpdatedAt?: number
  resizeHandler?: () => void
  statusInitialized: boolean
  library?: HTMLElement
  hidden: boolean
}

function normalizedKey(key: string): string {
  return key.length === 1 ? key.toLocaleLowerCase() : key
}

function shortcutFromEvent(event: ShortcutEvent): Shortcut | undefined {
  const key = normalizedKey(event.key)
  if (key === '' || MODIFIER_KEYS.has(key.toLocaleLowerCase())) return undefined
  if (!event.metaKey && !event.ctrlKey && !event.altKey) return undefined
  return { key, metaKey: event.metaKey, ctrlKey: event.ctrlKey, altKey: event.altKey, shiftKey: event.shiftKey }
}

function parseShortcut(value: unknown): Shortcut | undefined {
  if (typeof value !== 'object' || value === null) return undefined
  const c = value as Partial<Shortcut>
  if (typeof c.key !== 'string'
    || typeof c.metaKey !== 'boolean'
    || typeof c.ctrlKey !== 'boolean'
    || typeof c.altKey !== 'boolean'
    || typeof c.shiftKey !== 'boolean') return undefined
  return shortcutFromEvent(c as ShortcutEvent)
}

function formatShortcut(shortcut: Shortcut, applePlatform: boolean): string {
  const parts: string[] = []
  if (shortcut.ctrlKey) parts.push(applePlatform ? '⌃' : 'Ctrl+')
  if (shortcut.altKey) parts.push(applePlatform ? '⌥' : 'Alt+')
  if (shortcut.shiftKey) parts.push(applePlatform ? '⇧' : 'Shift+')
  if (shortcut.metaKey) parts.push(applePlatform ? '⌘' : 'Meta+')
  const key = shortcut.key === ' ' ? 'Space' : shortcut.key.length === 1 ? shortcut.key.toLocaleUpperCase() : shortcut.key
  return `${parts.join('')}${key}`
}

function isShortcutMatch(event: ShortcutEvent, shortcut: Shortcut): boolean {
  return normalizedKey(event.key) === normalizedKey(shortcut.key)
    && event.metaKey === shortcut.metaKey
    && event.ctrlKey === shortcut.ctrlKey
    && event.altKey === shortcut.altKey
    && event.shiftKey === shortcut.shiftKey
}

function hashBytes(bytes: Uint8Array): string {
  let h1 = 0x811c9dc5
  let h2 = 0x01000193
  for (const b of bytes) {
    h1 = Math.imul(h1 ^ b, 16777619)
    h2 = Math.imul(h2 + b, 31)
  }
  return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0')
}

export function apply(ctx: Context): void {
  ctx.effect(() => {
    const dispose = mountNintendo(document, window)
    return () => {
      dispose()
    }
  })
}

function mountNintendo(document: Document, window: Window): () => void {
  const body = document.body
  if (body === null) return () => undefined

  const state: NintendoState = {
    buttons: {},
    paused: false,
    muted: false,
    shortcut: DEFAULT_SHORTCUT,
    recording: false,
    statusInitialized: false,
    hidden: false,
  }

  let ownsStyle = false
  if (document.getElementById(STYLE_ID) === null) {
    const style = document.createElement('style')
    style.id = STYLE_ID
    style.textContent = CSS
    document.head.appendChild(style)
    ownsStyle = true
  }

  const applePlatform = new RegExp('Mac|iPhone|iPad', 'i').test(window.navigator.platform)
  try {
    state.shortcut = parseShortcut(JSON.parse(window.localStorage.getItem(SHORTCUT_KEY) ?? 'null')) ?? DEFAULT_SHORTCUT
  } catch {
    state.shortcut = DEFAULT_SHORTCUT
  }
  try {
    state.muted = window.localStorage.getItem(MUTE_KEY) === '1'
  } catch {
    state.muted = false
  }

  const saveShortcut = (next: Shortcut | undefined): void => {
    state.shortcut = next ?? DEFAULT_SHORTCUT
    try {
      if (next === undefined) window.localStorage.removeItem(SHORTCUT_KEY)
      else window.localStorage.setItem(SHORTCUT_KEY, JSON.stringify(next))
    } catch {}
  }

  const setStatus = (text: string): void => {
    if (state.status) state.status.textContent = text
  }

  const setMuted = (muted: boolean): void => {
    state.muted = muted
    try {
      window.localStorage.setItem(MUTE_KEY, muted ? '1' : '0')
    } catch {}
    if (state.browser) {
      const nes = state.browser.nes as NES & AudioOpts
      nes.opts.onAudioSample = muted ? null : state.originalAudioSample ?? null
    }
    if (state.buttons.mute) {
      state.buttons.mute.textContent = muted ? '🔇 声音' : '🔊 静音'
    }
  }

  const updateButtons = (): void => {
    const hasRom = state.browser !== undefined
    for (const key of ['reset', 'pause', 'mute', 'save', 'load', 'shot']) {
      if (state.buttons[key]) state.buttons[key].disabled = !hasRom
    }
    if (state.buttons.pause) {
      state.buttons.pause.textContent = state.paused ? '▶ 继续' : '⏸ 暂停'
    }
  }

  const renderShortcut = (): void => {
    if (!state.root) return
    const btn = state.root.querySelector<HTMLElement>('[data-dsh-nintendo-shortcut]')
    if (!btn) return
    btn.textContent = state.recording
      ? '请按新快捷键…'
      : `快捷键 ${formatShortcut(state.shortcut, applePlatform)}`
    btn.setAttribute('data-recording', String(state.recording))
  }

  const destroyBrowser = (): void => {
    if (state.browser) {
      state.browser.destroy()
      state.browser = undefined
    }
    state.romName = undefined
    state.romKey = undefined
    state.paused = false
  }

  const loadRom = (data: Uint8Array | ArrayBuffer, name: string): void => {
    const bytes = data instanceof Uint8Array ? data : new Uint8Array(data)
    if (state.root === undefined) open()
    if (state.screen === undefined) return

    destroyBrowser()
    if (state.empty) state.empty.style.display = 'none'
    state.screen.textContent = ''

    const browser = new Browser({
      container: state.screen,
      onError: (error) => {
        setStatus(`模拟器出错：${error.message}`)
        console.error('[dsh-plugin-nintendo]', error)
      },
    })
    state.browser = browser
    state.originalAudioSample = (browser.nes as NES & AudioOpts).opts.onAudioSample
    const keyboard = browser.keyboard as unknown as {
      handleKeyDown: EventListener
      handleKeyUp: EventListener
      handleKeyPress: EventListener
    }
    document.removeEventListener('keydown', keyboard.handleKeyDown)
    document.removeEventListener('keyup', keyboard.handleKeyUp)
    document.removeEventListener('keypress', keyboard.handleKeyPress)

    // Browser.loadROM accepts string | Uint8Array | ArrayBuffer at runtime.
    browser.loadROM(bytes as unknown as string)
    state.romName = name
    state.romKey = hashBytes(bytes)
    state.lastRomBytes = bytes
    state.lastRomName = name
    state.paused = false

    setMuted(state.muted)
    requestAnimationFrame(() => browser.fitInParent())
    updateButtons()

    const romEl = state.root?.querySelector<HTMLElement>('[data-dsh-nintendo-rom]')
    if (romEl) romEl.textContent = `🎮 ${name}`

    const save = window.localStorage.getItem(SAVE_PREFIX + state.romKey)
    if (save) {
      try {
        browser.stop()
        browser.nes.fromJSON(JSON.parse(save))
        browser.start()
        setStatus(`已恢复 ${name} 的存档`)
      } catch {
        setStatus(`正在运行 ${name}`)
      }
    } else {
      setStatus(`正在运行 ${name}`)
    }
  }

  const saveState = (): void => {
    if (!state.browser || !state.romKey) return
    try {
      const data = state.browser.nes.toJSON()
      window.localStorage.setItem(SAVE_PREFIX + state.romKey, JSON.stringify(data))
      setStatus('已保存当前进度（本地）')
    } catch {
      setStatus('存档失败')
    }
  }

  const loadState = (): void => {
    if (!state.browser || !state.romKey) return
    const save = window.localStorage.getItem(SAVE_PREFIX + state.romKey)
    if (!save) {
      setStatus('该 ROM 没有存档')
      return
    }
    try {
      state.browser.stop()
      state.browser.nes.fromJSON(JSON.parse(save))
      state.browser.start()
      setStatus('已读档')
    } catch {
      setStatus('读档失败')
    }
  }

  const hide = (): void => {
    state.recording = false
    state.hidden = true
    closeLibrary()
    if (state.browser) state.browser.stop()
    if (state.root) state.root.style.display = 'none'
    if (state.previousFocus?.isConnected === true) state.previousFocus.focus({ preventScroll: true })
    state.previousFocus = undefined
  }

  const close = (): void => {
    state.recording = false
    if (state.resizeHandler) {
      window.removeEventListener('resize', state.resizeHandler)
      state.resizeHandler = undefined
    }
    destroyBrowser()
    state.root?.remove()
    state.root = undefined
    state.hidden = false
    state.library = undefined
    if (state.previousFocus?.isConnected === true) state.previousFocus.focus({ preventScroll: true })
    state.previousFocus = undefined
  }

  const tryLoadHostRom = async (): Promise<void> => {
    try {
      const statusRes = await fetch('/nes/status')
      if (!statusRes.ok) return
      const status = await statusRes.json()
      const rom = status?.rom as { name?: string } | null | undefined
      if (!rom) return
      const romRes = await fetch('/nes/rom')
      if (!romRes.ok) return
      const bytes = new Uint8Array(await romRes.arrayBuffer())
      if (state.root === undefined) return
      loadRom(bytes, rom.name ?? 'unknown')
    } catch {
      // host routes unavailable; ignore
    }
  }

  const closeLibrary = (): void => {
    state.library?.remove()
    state.library = undefined
  }

  const loadRomFromLibrary = async (name: string): Promise<void> => {
    closeLibrary()
    try {
      const res = await fetch('/nes/rom?file=' + encodeURIComponent(name))
      if (!res.ok) {
        setStatus(`加载 "${name}" 失败（${res.status}）`)
        return
      }
      const bytes = new Uint8Array(await res.arrayBuffer())
      loadRom(bytes, name)
    } catch (error) {
      setStatus(`加载 "${name}" 失败：${(error as Error).message}`)
    }
  }

  const showLibrary = async (): Promise<void> => {
    if (!state.root) return
    if (state.library) {
      closeLibrary()
      return
    }
    const overlay = document.createElement('div')
    overlay.setAttribute('data-dsh-nintendo-library', '')
    const card = document.createElement('div')
    card.setAttribute('data-dsh-nintendo-library-card', '')
    const head = document.createElement('div')
    head.setAttribute('data-dsh-nintendo-library-head', '')
    head.textContent = '🎮 游戏库'
    const list = document.createElement('div')
    list.setAttribute('data-dsh-nintendo-library-list', '')
    list.textContent = '加载中…'
    card.append(head, list)
    overlay.appendChild(card)
    state.root.appendChild(overlay)
    state.library = overlay

    overlay.addEventListener('mousedown', (event) => {
      if (event.target === overlay) closeLibrary()
    })
    overlay.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
        closeLibrary()
      }
    })

    try {
      const res = await fetch('/nes/roms')
      if (!res.ok) {
        list.textContent = '未配置 ROM 目录'
        return
      }
      const data = await res.json()
      const roms = data?.roms as Array<{ name: string; size: number }> | undefined
      if (!roms || roms.length === 0) {
        list.innerHTML = '<div data-dsh-nintendo-library-empty>roms 目录为空<br>把 .nes 文件放进插件 roms 目录后重试</div>'
        return
      }
      list.textContent = ''
      for (const rom of roms) {
        const row = document.createElement('button')
        row.type = 'button'
        row.setAttribute('data-dsh-nintendo-library-item', '')
        const nameEl = document.createElement('span')
        nameEl.textContent = rom.name
        const sizeEl = document.createElement('span')
        sizeEl.setAttribute('data-dsh-nintendo-library-size', '')
        sizeEl.textContent = `${(rom.size / 1024).toFixed(0)} KB`
        row.append(nameEl, sizeEl)
        row.addEventListener('click', () => {
          void loadRomFromLibrary(rom.name)
        })
        list.appendChild(row)
      }
    } catch {
      list.textContent = '无法连接主机'
    }
  }

  const open = (): void => {
    if (state.root !== undefined) {
      if (state.hidden) {
        state.hidden = false
        state.root.style.display = ''
        state.previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : undefined
        if (state.browser && !state.paused) state.browser.start()
      }
      return
    }
    document.querySelector<HTMLElement>(`[${ROOT_ATTR}]`)?.remove()
    state.previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : undefined

    const overlay = document.createElement('div')
    overlay.setAttribute(ROOT_ATTR, '')
    overlay.setAttribute('role', 'dialog')
    overlay.setAttribute('aria-modal', 'true')
    overlay.setAttribute('aria-label', 'NES 模拟器')
    state.root = overlay

    const panel = document.createElement('section')
    panel.setAttribute('data-dsh-nintendo-panel', '')

    const header = document.createElement('header')
    header.setAttribute('data-dsh-nintendo-header', '')
    const title = document.createElement('span')
    title.setAttribute('data-dsh-nintendo-title', '')
    title.textContent = '🕹️ NES 模拟器'
    const romEl = document.createElement('span')
    romEl.setAttribute('data-dsh-nintendo-rom', '')
    const closeBtn = document.createElement('button')
    closeBtn.type = 'button'
    closeBtn.setAttribute('data-dsh-nintendo-close', '')
    closeBtn.setAttribute('aria-label', '隐藏')
    closeBtn.textContent = '✕'
    closeBtn.addEventListener('click', hide)
    header.append(title, romEl, closeBtn)

    const screen = document.createElement('div')
    screen.setAttribute('data-dsh-nintendo-screen', '')
    state.screen = screen
    const empty = document.createElement('div')
    empty.setAttribute('data-dsh-nintendo-empty', '')
    empty.innerHTML = '拖拽 ROM 文件到此处加载<br>或点击下方「打开 ROM」'
    state.empty = empty
    screen.appendChild(empty)

    const status = document.createElement('div')
    status.setAttribute('data-dsh-nintendo-status', '')
    state.status = status

    const toolbar = document.createElement('div')
    toolbar.setAttribute('data-dsh-nintendo-toolbar', '')

    const makeButton = (id: string, label: string, onClick: () => void): void => {
      const button = document.createElement('button')
      button.type = 'button'
      button.setAttribute('data-dsh-nintendo-btn', '')
      button.textContent = label
      button.addEventListener('click', onClick)
      state.buttons[id] = button
      toolbar.appendChild(button)
    }

    makeButton('library', '🎮 游戏库', () => {
      void showLibrary()
    })
    makeButton('open', '📂 打开 ROM', () => state.fileInput?.click())
    makeButton('reset', '🔁 重置', () => {
      if (state.browser) {
        state.browser.nes.reset()
        setStatus('已重置')
      }
    })
    makeButton('pause', '⏸ 暂停', () => {
      if (!state.browser) return
      state.paused = !state.paused
      if (state.paused) state.browser.stop()
      else state.browser.start()
      updateButtons()
    })
    makeButton('mute', '🔊 静音', () => setMuted(!state.muted))
    makeButton('save', '💾 存档', saveState)
    makeButton('load', '📥 读档', loadState)
    makeButton('shot', '📷 截图', () => {
      if (!state.browser) return
      const img = state.browser.screenshot()
      const a = document.createElement('a')
      a.href = img.src
      a.download = `nes-${state.romName ?? 'game'}.png`
      a.click()
    })

    const footer = document.createElement('footer')
    footer.setAttribute('data-dsh-nintendo-footer', '')
    const hints = document.createElement('span')
    hints.setAttribute('data-dsh-nintendo-hints', '')
    hints.innerHTML = '<span data-dsh-nintendo-p1><b>P1</b> <kbd>WASD</kbd> 移动</span><span><kbd>X</kbd> A</span><span><kbd>Z</kbd> B</span><span><kbd>Enter</kbd> Start</span><span><kbd>右 Ctrl</kbd> Select</span><span data-dsh-nintendo-p2><b>P2</b> <kbd>↑↓←→</kbd> 移动</span><span><kbd>1</kbd> A</span><span><kbd>2</kbd> B</span><span><kbd>3</kbd> Start</span><span><kbd>4</kbd> Select</span>'
    const controls = document.createElement('span')
    controls.setAttribute('data-dsh-nintendo-controls', '')
    const shortcutBtn = document.createElement('button')
    shortcutBtn.type = 'button'
    shortcutBtn.setAttribute('data-dsh-nintendo-shortcut', '')
    shortcutBtn.setAttribute('aria-label', '设置开关快捷键')
    const resetShortcut = document.createElement('button')
    resetShortcut.type = 'button'
    resetShortcut.setAttribute('data-dsh-nintendo-shortcut-reset', '')
    resetShortcut.setAttribute('aria-label', '恢复默认快捷键')
    resetShortcut.textContent = '恢复默认'
    controls.append(shortcutBtn, resetShortcut)
    footer.append(hints, controls)

    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = '.nes,.unf,.fds'
    fileInput.style.display = 'none'
    state.fileInput = fileInput
    fileInput.addEventListener('change', () => {
      const file = fileInput.files?.[0]
      if (!file) return
      file.arrayBuffer().then((buffer) => {
        loadRom(new Uint8Array(buffer), file.name)
        fileInput.value = ''
      }).catch((error) => {
        setStatus(`读取文件失败：${error.message}`)
      })
    })

    overlay.appendChild(panel)
    panel.append(header, screen, status, toolbar, footer, fileInput)
    body.appendChild(overlay)

    overlay.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
        if (state.library) closeLibrary()
        else hide()
      }
    })

    const onDragOver = (event: DragEvent): void => {
      event.preventDefault()
      overlay.classList.add('dsh-nintendo-drag')
    }
    const onDragLeave = (): void => {
      overlay.classList.remove('dsh-nintendo-drag')
    }
    const onDrop = (event: DragEvent): void => {
      event.preventDefault()
      overlay.classList.remove('dsh-nintendo-drag')
      const file = event.dataTransfer?.files?.[0]
      if (!file) return
      file.arrayBuffer().then((buffer) => {
        loadRom(new Uint8Array(buffer), file.name)
      }).catch((error) => {
        setStatus(`读取文件失败：${error.message}`)
      })
    }
    overlay.addEventListener('dragover', onDragOver)
    overlay.addEventListener('dragleave', onDragLeave)
    overlay.addEventListener('drop', onDrop)

    overlay.addEventListener('mousedown', (event) => {
      if (event.target === overlay) hide()
    })

    const onResize = (): void => {
      state.browser?.fitInParent()
    }
    state.resizeHandler = onResize
    window.addEventListener('resize', onResize)

    shortcutBtn.addEventListener('click', () => {
      state.recording = true
      renderShortcut()
      shortcutBtn.focus({ preventScroll: true })
    })
    shortcutBtn.addEventListener('keydown', (event) => {
      event.preventDefault()
      event.stopPropagation()
      if (event.key === 'Escape') {
        state.recording = false
        renderShortcut()
        return
      }
      const next = shortcutFromEvent(event)
      if (next === undefined) return
      saveShortcut(next)
      state.recording = false
      renderShortcut()
    })
    resetShortcut.addEventListener('click', () => {
      saveShortcut(undefined)
      state.recording = false
      renderShortcut()
    })

    renderShortcut()
    updateButtons()

    if (state.lastRomBytes && state.lastRomName) {
      loadRom(state.lastRomBytes, state.lastRomName)
    } else {
      setStatus('拖拽 ROM 到这里，或点击「打开 ROM」加载游戏')
      void tryLoadHostRom()
    }
  }

  const pollStatus = async (): Promise<void> => {
    try {
      const res = await fetch('/nes/status')
      if (!res.ok) return
      const data = await res.json()
      const rom = data?.rom as { name?: string; updatedAt?: number } | null | undefined
      const autoOpenEnabled = data?.autoOpen !== false
      const updatedAt = rom?.updatedAt ?? 0
      if (!state.statusInitialized) {
        state.statusInitialized = true
        state.lastUpdatedAt = updatedAt
        return
      }
      if (!rom || updatedAt === state.lastUpdatedAt) return
      state.lastUpdatedAt = updatedAt
      if (!autoOpenEnabled && (state.root === undefined || state.hidden)) return
      const romRes = await fetch('/nes/rom')
      if (!romRes.ok) return
      const bytes = new Uint8Array(await romRes.arrayBuffer())
      if (state.root === undefined || state.hidden) {
        state.lastRomBytes = undefined
        state.lastRomName = undefined
        open()
      }
      loadRom(bytes, rom.name ?? 'unknown')
    } catch {
      // host routes unavailable; ignore
    }
  }

  const pollTimer = window.setInterval(() => {
    void pollStatus()
  }, 1500)

  const onGlobalShortcut = (event: KeyboardEvent): void => {
    if (state.recording) return
    if (!isShortcutMatch(event, state.shortcut)) return
    event.preventDefault()
    event.stopPropagation()
    if (state.root === undefined || state.hidden) open()
    else hide()
  }
  window.addEventListener('keydown', onGlobalShortcut, true)

  const handleGameKeyDown = (event: KeyboardEvent): void => {
    if (state.root === undefined || state.hidden || state.browser === undefined) return
    const mapping = GAME_KEYS[event.code]
    if (!mapping) return
    event.preventDefault()
    state.browser.nes.buttonDown(mapping[0], mapping[1])
  }

  const handleGameKeyUp = (event: KeyboardEvent): void => {
    if (state.root === undefined || state.hidden || state.browser === undefined) return
    const mapping = GAME_KEYS[event.code]
    if (!mapping) return
    event.preventDefault()
    state.browser.nes.buttonUp(mapping[0], mapping[1])
  }

  document.addEventListener('keydown', handleGameKeyDown)
  document.addEventListener('keyup', handleGameKeyUp)

  const dispose = (): void => {
    window.clearInterval(pollTimer)
    window.removeEventListener('keydown', onGlobalShortcut, true)
    document.removeEventListener('keydown', handleGameKeyDown)
    document.removeEventListener('keyup', handleGameKeyUp)
    close()
    if (ownsStyle) document.getElementById(STYLE_ID)?.remove()
  }

  return dispose
}
