import { defineConfig } from 'vite';
import { cloudflare } from '@cloudflare/vite-plugin';
// ... import your framework plugin, e.g., tanstack/react-start

export default defineConfig({
  plugins: [
    cloudflare({
      viteEnvironment: { name: 'ssr' }
    }),
    // ... your framework plugin here (e.g., tanStackStartVite())
  ],
});
