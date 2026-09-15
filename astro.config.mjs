// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nailedits.site/',
  output: 'static',
  integrations: [sitemap()],
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});