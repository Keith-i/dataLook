import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // map '@' to './src'
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styleScss/global.scss";',
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: '8092',
    proxy: {
      '/offapi': {
        // target: "http://mf178.cn/api",
        target: 'http://3840387kj0.zicp.vip',
        // target: 'http://45.40.234.31:10090',
        changeOrigin: true,
        cors: true,
        rewrite: (path) => path.replace(/^\/offapi/, ''),
      },
    },
  },
})
