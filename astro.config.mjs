import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import nodejs from '@astrojs/node';
import vercel from '@astrojs/vercel/serverless';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
   integrations: [svelte(), tailwind()],
   adapter: vercel(),
   output: 'hybrid',
});