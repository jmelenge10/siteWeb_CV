// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Used for canonical and hreflang links. Change it if you add a custom domain.
  site: 'https://siteweb-cv.pages.dev',
  vite: { plugins: [tailwindcss()] },
});
