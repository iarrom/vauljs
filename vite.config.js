import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'vauljs',
      fileName: 'vauljs',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      output: {
        globals: {
          // Если библиотека будет использовать зависимости, указываем их тут
        },
      },
    },
  },
});
