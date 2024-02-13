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
              codeBackground: ({ theme }) =>
                theme.type === "dark"
                  ? "var(--sl-color-gray-6)"
                  : "var(--sl-color-gray-7)",
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
