import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://infonavigator.org',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // /go/ links are affiliate redirects — never indexed
      filter: (page) => !page.includes('/go/'),
      changefreq: 'weekly',
      lastmod: new Date('2026-09-27'),
    }),
  ],
});
