import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://olcmethod.com',
  output: 'static',
  adapter: vercel(),
  integrations: [
    tailwind(),
    // sitemap() removed — @astrojs/sitemap crashes with this Astro version (undefined pages reduce bug)
    // Re-add after upgrading @astrojs/sitemap or Astro
  ],
});
