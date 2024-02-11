import type { StarlightPlugin } from "@astrojs/starlight/types";

/** VitePress theme Starlight plugin. */
export default function starpress(): StarlightPlugin {
  return {
    name: "starpress",
    hooks: {
      setup: ({ config, updateConfig }) => {
        const customCss = config.customCss ?? [];
        updateConfig({
          customCss: [...customCss, "starpress/styles.css"],
        });
      },
    },
  };
}
