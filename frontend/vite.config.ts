import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        preserveSymlinks: true,
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
