import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env': {}
    },
    resolve: {
        preserveSymlinks: true,
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
    },
    build: {
        outDir: 'dist/dist',
    },
    server: {
        host: true,
        port: 80,
        strictPort: true,
        watch: {
            usePolling: true,
        },
        hmr: {
          clientPort: process.env.DEV_HTTP_PORT,
        },
    },
    css: {
        devSourcemap: true,
    },
    plugins: [vue()],
})
