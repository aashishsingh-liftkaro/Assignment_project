import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    federation({
      name: "remote",
      filename: "remoteEntry.js",

      exposes: {
        "./Testimonial": "./src/pages/Testinomial.tsx",
        "./Footer":"./src/pages/Footer.tsx"
      },

      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 5174,
  },

  build: {
    target: "esnext",
    cssCodeSplit: false,
  },
});