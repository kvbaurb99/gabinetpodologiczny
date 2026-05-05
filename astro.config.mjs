import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://podologjaworze.pl",
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
  integrations: [react()],
  image: {
    domains: ["podologjaworze.pl"],
  },
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
