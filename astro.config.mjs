// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
   output: 'static',
   base: '/test/',
   site: "https://github.com/NithyaPriya-Muniyandi/Astro-website.github.io",
   prefetch: {
  prefetchAll: true
},
  vite: {
    plugins: [tailwindcss()]
  }
});