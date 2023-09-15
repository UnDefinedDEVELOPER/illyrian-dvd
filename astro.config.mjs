import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
   integrations: [svelte(), tailwind()],
   site: 'https://illyriandvd.vercel.app',
   build: {
      copy: [
        {
          from: 'public/CV_eng.pdf', // Replace with the actual path to your PDF file in the public folder
          to: 'dist/CV_eng.pdf',     // Specify the destination path in the output folder
        },
      ],
    },
});