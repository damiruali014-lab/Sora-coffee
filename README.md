# Sora Coffee — concept landing page

One-page demo site for a **fictional** specialty coffee bar in Almaty, built as the example for the
Basic (1-page) web package by Damir Uali. React + Vite + TypeScript + Tailwind CSS v4, no backend.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check, build, prerender the page into dist/index.html
npm run preview    # serve dist/
```

## Where things live

| What | File |
| --- | --- |
| Phone, WhatsApp, Instagram, address, map pin | `src/config.ts` |
| Menu items and prices | `src/data/menu.ts` |
| Opening hours + live "Open now" logic (Asia/Almaty) | `src/lib/hours.ts` |
| Brand colours and fonts (Tailwind `@theme` tokens) | `src/index.css` |
| Logo / favicon | `src/components/Logo.tsx`, `public/favicon.svg` |

## Images

Originals live in `public/images/` (hero, banner-wide, interior, latte-art, pastries, barista,
insta-1…6, og). After adding or replacing a photo run `npm run images` — it writes the responsive
sizes to `public/images/r/`, the `og.jpg` share image, the PNG icons and `src/data/image-sizes.json`.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project**, import the repo. The Vite preset is detected
   (build `npm run build`, output `dist`); no environment variables are needed.
3. After the first deploy, update the canonical / `og:url` / `og:image` URLs in `index.html`
   if the domain is not `sora-coffee.vercel.app`, and redeploy.

Or from the terminal: `npx vercel` (preview) then `npx vercel --prod`.
