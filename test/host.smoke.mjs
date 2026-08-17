import { readFileSync } from 'node:fs'
import { EventEmitter } from 'node:events'

const mod = await import('../lib/index.js')

const routes = new Map()
let cleanup
const ctx = {
  effect: (fn) => { const r = fn(); cleanup = r; return r },
  webServer: {
    register: (route) => { routes.set(route.path, route); return () => routes.delete(route.path) },
    port: 0,
  },
  tools: { register: (def) => { tools = def } },
}
let tools

mod.apply(ctx, {})
if (typeof cleanup !== 'function') throw new Error('effect disposer missing')

const assert = (cond, msg) => { if (!cond) throw new Error(msg) }

const makeRes = (onEnd) => {
  const chunks = []
  const res = new EventEmitter()
  res.writeHead = (status) => { res.status = status }
  res.write = (c) => { chunks.push(Buffer.from(c)) }
  res.end = (c) => { if (c) chunks.push(Buffer.from(c)); onEnd?.(res.status, Buffer.concat(chunks)) }
  res.destroy = () => {}
  return { res, chunks }
}

// /nes/roms lists the bundled roms directory
const romsRoute = routes.get('/nes/roms')
assert(!!romsRoute, '/nes/roms route missing')
let romsRes
const roms = await new Promise((resolve, reject) => {
  const res = { writeHead: () => {}, end: (body) => resolve(JSON.parse(body)) }
  romsRoute.handler({ url: '/nes/roms' }, res).catch(reject)
})
const list = roms.roms.map((r) => r.name)
assert(list.includes('Contra (USA).nes'), `roms listing missing Contra: ${list.join(', ')}`)
console.log('roms listing:', list.join(' | '))

// /nes/rom without file and no current loaded -> 404
const romRoute = routes.get('/nes/rom')
assert(!!romRoute, '/nes/rom route missing')
const none = await new Promise((resolve) => {
  const { res } = makeRes((status) => resolve(status))
  romRoute.handler({ url: '/nes/rom' }, res)
})
assert(none === 404, `no-current rom should be 404, got ${none}`)
console.log('no current rom ->', none)

// /nes/rom?file= serves the named ROM bytes
const file = await new Promise((resolve) => {
  const { res } = makeRes((status, body) => resolve({ status, body }))
  romRoute.handler({ url: '/nes/rom?file=' + encodeURIComponent('Contra (USA).nes') }, res)
})
assert(file.status === 200, `rom file status was ${file.status}`)
assert(file.body.length > 0, 'rom file empty')
assert(file.body.length === readFileSync(new URL('../roms/Contra (USA).nes', import.meta.url)).length, 'rom file size mismatch')
assert(file.body[0] === 0x4e && file.body[1] === 0x45 && file.body[2] === 0x53, 'rom does not start with NES magic')
console.log(`served Contra: ${file.body.length} bytes, NES magic OK`)

// path traversal rejected
const bad = await new Promise((resolve) => {
  const { res } = makeRes((status) => resolve(status))
  romRoute.handler({ url: '/nes/rom?file=' + encodeURIComponent('../index.js') }, res)
})
assert(bad === 404, `traversal should be 404, got ${bad}`)
console.log('path traversal rejected:', bad)

// nes_play tool resolves relative names against romsDir
assert(typeof tools?.execute === 'function', 'tool not registered')
const result = await tools.execute({ path: 'Contra (USA).nes' })
assert(typeof result === 'string' && result.includes('Contra'), 'tool relative path failed')
console.log('nes_play relative:', result)
let threw = false
try { await tools.execute({ path: 'missing.nes' }) } catch { threw = true }
assert(threw, 'nes_play missing file should throw')
console.log('nes_play missing file throws: OK')

cleanup()
console.log('host smoke test passed')
