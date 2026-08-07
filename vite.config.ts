import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({

  plugins: [

    react(),

    VitePWA({

      registerType: "autoUpdate",

      injectRegister: "auto",

      devOptions: {

        enabled: false,

      },

      workbox: {

        cleanupOutdatedCaches: true,

        clientsClaim: true,

        skipWaiting: true,

      },

      manifest: {

        name: "Welcome to the Good Life",

        short_name: "Good Life",

        description:
          "Suivi sportif, hydratation et bien-être",

        theme_color: "#355F4B",

        background_color: "#ffffff",

        display: "standalone",

        start_url: "/",

        icons: [

          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },

          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },

        ],

      },

    }),

  ],

});