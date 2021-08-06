import { defineConfig } from 'vite';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'build',
    },
    resolve: {
        alias: {
            '@apis': path.resolve(__dirname, './src/services/api'),
            '@actions': path.resolve(__dirname, './src/store/actions'),
            '@reducers': path.resolve(__dirname, './src/store/reducers'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@icon': path.resolve(__dirname, './src/assets/icon'),
            '@route': path.resolve(__dirname, './src/route'),
            '@component': path.resolve(__dirname, './src/resources/component'),
            '@page': path.resolve(__dirname, './src/pages'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@config': path.resolve(__dirname, './src/config'),
        },
    },
});
