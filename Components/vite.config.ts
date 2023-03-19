/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      exclude: [...configDefaults.coverage.exclude, 'src/main.tsx'],
      all: true,
      src: ['src'],
      provider: 'c8',
      reporter: ['text'],
    },
  },
});
