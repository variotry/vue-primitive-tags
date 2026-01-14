import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: path.resolve('./src/index.ts'),
            name: 'VtPrimitiveTags',
            fileName: (format) => `vt-primitive-tags.${format}.js`,
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['vue', '@inertiajs/vue3'],
            output: {
                globals: {
                    vue: 'Vue',
                    '@inertiajs/vue3': 'InertiaVue3'
                }
            }
        }
    }
})