import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    federation({
      name: "host",

      remotes: {
        remote: {
          type: "module",
          name: "remote",
          entry: "http://localhost:5174/remoteEntry.js",
          entryGlobalName: "remote",
          shareScope: "default",
        },
      },

      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
      },

      dts: false,
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 5173,
  },

  build: {
    target: "esnext",
  },
});