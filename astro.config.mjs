import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://wxastrotutorial.netlify.app/",
  integrations: [preact()],
});