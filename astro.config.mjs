// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
// Note: Cloudflare adapter not needed for static builds
// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-starter-template.vishnu-111.workers.dev",
  // Removed base path - will add back when setting up Worker routing
  // base: "/1pd-ops",
  output: "static",
  integrations: [mdx(), sitemap(), react()],
  // Removed Cloudflare adapter for static builds
  // adapter: cloudflare({
  //   platformProxy: {
  //     enabled: true,
  //   },
  // }),
});
