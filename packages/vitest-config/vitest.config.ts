import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // чтобы не импортировать describe, it, expect
    // environment: 'jsdom', // для тестирования DOM
    setupFiles: './setup.ts', // файл с настройками
    css: true, // обработка CSS
  },
});
