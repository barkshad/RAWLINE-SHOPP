
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Bridges the environment variable to the client code with a fallback to avoid syntax errors
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
});
