import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Preload the two Latin font files (their names are hashed) so they arrive before first paint
// and the text doesn't reflow — and push the hero photo down — when they swap in.
function preloadFonts(): Plugin {
  return {
    name: 'preload-fonts',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        return Object.keys(ctx.bundle ?? {})
          .filter((f) => /(unbounded|dm-sans)-latin-wght-normal-.*\.woff2$/.test(f))
          .map((f) => ({
            tag: 'link',
            attrs: { rel: 'preload', href: `/${f}`, as: 'font', type: 'font/woff2', crossorigin: '' },
            injectTo: 'head-prepend' as const,
          }))
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), preloadFonts()],
})
