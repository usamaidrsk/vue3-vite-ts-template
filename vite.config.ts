/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig, PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
// @ts-ignore
import vuetify from 'vite-plugin-vuetify';
import { resolve } from 'path';
// @ts-ignore
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig({
  base: './',
  build: {
    chunkSizeWarningLimit: 700,
  },
  plugins: [
    vue() as PluginOption,
    visualizer() as PluginOption,
    vuetify({ autoImport: true }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  server: { port: 8080 },
});
