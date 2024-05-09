import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
  adapter: vercel(),
  build: {
    format: 'file',
  },
  integrations: [
    sitemap(),
  ],
  output: 'hybrid',
  site: 'https://sitemap-trailing-slash.patrickreiner.com',
  trailingSlash: 'never',
})
