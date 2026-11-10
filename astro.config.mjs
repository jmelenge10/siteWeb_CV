// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with your real domain once you have one (used for SEO/sitemap)
  site: 'https://example.pages.dev',
  vite: { plugins: [tailwindcss()] },
});
