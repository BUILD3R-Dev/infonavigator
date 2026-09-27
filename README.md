# BestPianoApp.com

Data-driven piano app rankings and comparisons. Built with Astro, deployed on Cloudflare Pages.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build -> dist/
```

## Deploy

Production deploys automatically via the Cloudflare Pages GitHub integration on every push to `main`.

- Build command: `npm run build`
- Output directory: `dist`

## Content

Page content and app data live in `src/data/` — monthly price/score updates shouldn't need template changes. See `bestpianoapp-blueprint.md` (in the studio workspace) for the full launch spec.
