import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), 
    react()
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
    // Enable code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion-vendor': ['framer-motion', 'gsap'],
          'particles-vendor': ['@tsparticles/react', '@tsparticles/slim', '@tsparticles/engine'],
          'iconify-vendor': ['@iconify/react'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'esbuild', // Use esbuild for faster builds
  },
  // Optimize deps
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'framer-motion',
      '@iconify/react'
    ],
  },
})

