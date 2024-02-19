import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starpress from "starpress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "🌟 StarPress",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", link: "/guides/getting-started/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      plugins: [starpress()],
    }),
  ],
});
