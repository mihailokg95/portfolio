import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression'
import { VitePWA } from 'vite-plugin-pwa'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), 
    react(),
    // Gzip compression
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024, // Only compress files > 1KB
      deleteOriginFile: false,
    }),
    // Brotli compression (better compression than gzip)
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false,
    }),
    // PWA support for offline functionality and caching
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'assets/*.svg', 'assets/*.png', 'assets/*.jpg'],
      manifest: {
        name: 'Mihailo Stojkovic - Full Stack Developer',
        short_name: 'MS Portfolio',
        description: 'Full Stack Developer specializing in React, Next.js, Node.js, and AWS',
        theme_color: '#0a192f',
        background_color: '#0a192f',
        display: 'standalone',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // Increase maximum file size for large images
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
        // Cache strategy
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
              }
            }
          },
          {
            urlPattern: /\.(?:js|css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 7 // 7 days
              }
            }
          }
        ],
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp,woff,woff2}']
      }
    }),
    // Bundle analyzer - generates stats.html
    visualizer({
      open: false,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    })
  ],
  assetsInclude: ['**/*.svg'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'process.env': {},
  },
  build: {
    target: 'es2020',
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // More granular chunking
          if (id.includes('node_modules')) {
            // Split node_modules by package
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            if (id.includes('gsap')) {
              return 'gsap';
            }
            if (id.includes('@tsparticles')) {
              return 'particles';
            }
            if (id.includes('@iconify')) {
              return 'iconify';
            }
            if (id.includes('styled-components')) {
              return 'styled-components';
            }
            // All other node_modules go to vendor
            return 'vendor';
          }
          // Split components by route/section
          if (id.includes('/src/components/Timeline')) {
            return 'timeline';
          }
          if (id.includes('/src/components/About')) {
            return 'about';
          }
          if (id.includes('/src/components/Contact')) {
            return 'contact';
          }
          if (id.includes('/src/components/TechStack')) {
            return 'techstack';
          }
        },
        // Optimize chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Chunk size warning limit
    chunkSizeWarningLimit: 600,
    // Enable minification with esbuild (faster than terser)
    minify: 'esbuild',
    // Source maps for debugging (optional, remove for smaller builds)
    sourcemap: false,
    // Reduce CSS
    cssMinify: true,
    // Report compressed size
    reportCompressedSize: true,
    // Asset inlining threshold (smaller assets will be inlined as base64)
    assetsInlineLimit: 4096, // 4KB
  },
  // Optimize deps
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'framer-motion',
      '@iconify/react',
      '@tsparticles/react',
      '@tsparticles/slim'
    ],
    exclude: ['@google-recaptcha/react']
  },
  // Server optimizations
  server: {
    hmr: {
      overlay: false
    }
  }
})

