/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { InlineConfig } from 'vitest';
import type { UserConfig } from 'vite';
import path from 'path';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

type ViteConfig = UserConfig & { test: InlineConfig };
const config: ViteConfig = {
  // other config
  test: {
    environment: 'jsdom',
  },
  plugins: [TanStackRouterVite(), react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};
export default defineConfig(config);
// https://vitejs.dev/config/
// export default defineConfig({
//   test: vitestConfig.test,
//   plugins: [TanStackRouterVite(), react()],

//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// });
