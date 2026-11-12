// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical, hreflang and sitemap links. Change it (and public/robots.txt) if you add a custom domain.
  site: 'https://siteweb-cv.pages.dev',
  integrations: [
    // Only the two home pages are listed; the printable CV and the share-image page are not.
    sitemap({ filter: (page) => !/\/(cv|og)\/$/.test(page) }),
  ],
  build: {
    // Styles always go to files, never inline, so the Content-Security-Policy can forbid inline styles.
    inlineStylesheets: 'never',
  },
  vite: {
    plugins: [tailwindcss()],
    // Same for scripts: emit them as files instead of inlining small ones.
    build: { assetsInlineLimit: 0 },
  },
});
