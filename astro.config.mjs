import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'http://localhost:3000',
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify(),
});