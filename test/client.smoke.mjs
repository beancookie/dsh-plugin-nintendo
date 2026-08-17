import { JSDOM } from 'jsdom'
import { readFileSync } from 'node:fs'

const dom = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>', { url: 'http://localhost/' })
const { window } = dom
const { document } = window

window.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 0)
window.fetch = async () => ({ ok: false })
window.setInterval = () => 0
window.clearInterval = () => {}
if (!window.navigator.platform) Object.defineProperty(window.navigator, 'platform', { value: 'Win32' })

globalThis.window = window
globalThis.document = document
globalThis.localStorage = window.localStorage
globalThis.Node = window.Node
globalThis.HTMLElement = window.HTMLElement
globalThis.Event = window.Event
globalThis.MouseEvent = window.MouseEvent
globalThis.KeyboardEvent = window.KeyboardEvent
globalThis.DragEvent = window.DragEvent || window.Event
globalThis.File = window.File || class {}

const code = readFileSync(new URL('../lib/client.js', import.meta.url), 'utf8')
window.__ModuleLoader__ = {
  load: (h) => {
    const exports = h.factory(() => { throw new Error('unexpected require') })
    globalThis.__clientExports = exports
  },
}
const fn = new Function('window', code + '; return window.__ModuleLoader__;')
fn(window)

const { name, apply } = globalThis.__clientExports
if (name !== 'dsh-plugin-nintendo-client') throw new Error(`unexpected client name: ${name}`)

let cleanup
const ctx = { effect: (fn) => { const r = fn(); cleanup = r; return r } }
apply(ctx)

const toggle = () => new window.KeyboardEvent('keydown', { key: 'n', ctrlKey: true, altKey: true, bubbles: true, cancelable: true })
const query = (sel) => document.querySelector(sel)

window.dispatchEvent(toggle())
if (!query('[data-dsh-nintendo-root]')) throw new Error('shortcut did not open the popup')

window.dispatchEvent(toggle())
const hiddenRoot = query('[data-dsh-nintendo-root]')
if (!hiddenRoot || hiddenRoot.style.display !== 'none') throw new Error('shortcut did not hide the popup')

window.dispatchEvent(toggle())
const panel = query('[data-dsh-nintendo-panel]')
if (!panel) throw new Error('panel missing')
if (panel.style.display === 'none') throw new Error('shortcut did not reopen the popup')
if (document.querySelectorAll('[data-dsh-nintendo-btn]').length !== 8) throw new Error('toolbar buttons missing')
if (!query('[data-dsh-nintendo-shortcut]')?.textContent?.includes('Ctrl+Alt+N')) throw new Error('shortcut label missing')

panel.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }))
const escRoot = query('[data-dsh-nintendo-root]')
if (!escRoot || escRoot.style.display !== 'none') throw new Error('Escape did not hide the popup')

cleanup()
if (query('[data-dsh-nintendo-root]')) throw new Error('dispose left the overlay behind')
if (document.getElementById('dsh-nintendo-style')) throw new Error('dispose left the style tag behind')

console.log('client smoke test passed')
