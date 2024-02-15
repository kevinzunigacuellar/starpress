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
          expressiveCode: {
            themes: ["min-dark", "min-light"],
            styleOverrides: {
              borderRadius: "0.5rem",
              frames: {
                shadowColor: "transparent",
              },
            },
          },
        });
      },
    },
  };
}
