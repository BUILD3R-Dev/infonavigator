# infonavigator.org

Data-driven buying guides. Rankings are computed from public ratings data (MetaScore methodology) — never sponsored, always disclosed.

## Verticals

- **3D printers** (`/3d-printers/`) — live. 8 printers ranked, 8 head-to-head comparisons, 3 use-case guides.
- **Robot vacuums** — under evaluation.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build -> dist/
```

## Deploy

Production deploys automatically via the Cloudflare Pages GitHub integration on every push to `master`.

- Build command: `npm run build`
- Output directory: `dist`

## Content

Page content and product data live in `src/data/` — monthly price/score updates shouldn't need template changes. See `infonavigator-blueprint.md` (in the studio workspace) for the full launch spec.
