import { defineConfig } from 'astro/config';

import config from './src/config/config.json';

import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import compressor from 'astro-compressor';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: config.site.base_url ?? 'http://localhost:3000',
  base: config.site.base_path ?? '/',
  trailingSlash: config.site.trailing_slash ? 'always' : 'ignore',
  prefetch: true,
  image: {
    domains: [],
  },
  integrations: [
    tailwind(),
    compressor({
      gzip: false,
      brotli: true,
    }),
    sitemap(),
  ],
  output: 'server',
  adapter: netlify(),
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
});
