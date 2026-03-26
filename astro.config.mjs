// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
    devToolbar: {
    enabled: false
  },
  site: "https://boisterous-begonia-2e9726.netlify.app/",
  integrations: [preact()]
});