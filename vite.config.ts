import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig as defineVitestConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  test: {
    environment: 'jsdom',  // ✅ Use jsdom for React component testing
    setupFiles: "./src/setupTests.ts",
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      reportsDirectory: 'coverage',
      exclude: [
        'vite.config.ts',
        'postcss.config.js',
        'tailwind.config.js',
        'src/main.tsx',
        'src/App.tsx'
      ],
    },
  },
});

