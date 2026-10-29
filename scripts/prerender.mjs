// Build-time prerender: puts the rendered page into dist/index.html so the hero (the LCP)
// and all content are in the first HTML response for crawlers and slow phones.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const shell = readFileSync('dist/index.html', 'utf8')
const { render } = await import(pathToFileURL('dist-ssr/entry-server.js').href)
const html = render()
writeFileSync('dist/index.html', shell.replace('<div id="root"></div>', `<div id="root">${html}</div>`))
rmSync('dist-ssr', { recursive: true, force: true })
console.log(`Prerendered / (${(html.length / 1024).toFixed(1)} kB of HTML)`)
