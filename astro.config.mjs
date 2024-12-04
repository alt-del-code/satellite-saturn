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
  site: 'https:///alt-del-code.github.io',
  base: '/satellite-saturn',
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
  output: 'static',
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    ssr: {
      noExternal: ['@keystatic/core', '@keystatic/astro']
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    optimizeDeps: {
      include: [
        '@keystatic/core',
        '@keystatic/core/ui',
        // Add other Keystatic dependencies
      ],
      exclude: ['@keystatic/astro']
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify('production')
    },
    build: {
      minify: true,
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
});
