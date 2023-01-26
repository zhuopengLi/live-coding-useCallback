import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          }
        }
      }
    },
    server: {
      fs: {
        allow: ['E:/repos/CODING/webDev/js-tutorial/react-tutorial-new/']
      }
    }
  }
});