// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import keystatic  from '@keystatic/astro';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [
    tailwind(),
    react(),
    mdx({
      optimize: true,
      remarkPlugins: [],
      rehypePlugins: []
    }),
    sitemap({
      filter: (page) => !page.includes('/admin'),
      changefreq: 'weekly',
      lastmod: new Date()
    }),
    keystatic(),
    icon({
      include: {
        lucide: ['*'],
        ph: ['*']
      },
      svgoOptions: {
        multipass: true,
        plugins: ['preset-default']
      }
    })
  ],
  output: 'hybrid',
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    ssr: {
      noExternal: ['@keystatic/core']
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'lodash']
    }
  }
});
