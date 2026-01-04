import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import remarkWikiLink from "remark-wiki-link"

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "ABCDailySlab",
        cssVariable: "--font-serif",
        variants: [
          {
            src: ["./src/fonts/ABCDailySlabVariableEdu-Light.woff2"],
          },
        ],
      },
      {
        provider: "local",
        name: "ABCDailySlabMono",
        cssVariable: "--font-mono",
        variants: [
          {
            src: ["./src/fonts/ABCDailySlabMonoEdu-Light.woff2"],
          },
        ],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [
      [
        remarkWikiLink,
        {
          aliasDivider: "|",
          pageResolver: (name) => [name.toLowerCase().replace(/ /g, "-")],
          hrefTemplate: (permalink) => `/${permalink}`,
        },
      ],
    ],
  },
})
