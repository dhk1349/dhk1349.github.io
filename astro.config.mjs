import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dhk1349.github.io',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
