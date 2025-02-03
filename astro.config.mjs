import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import remarkWikiLink from "remark-wiki-link"
import wordProcessing from "./src/word-processing"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [
      [
        remarkWikiLink,
        {
          aliasDivider: "|",
          pageResolver: (name) => [name.replace(/ /g, "-")],
          hrefTemplate: (href) => `/${href}`,
        },
      ],
      wordProcessing,
    ],
  },
})
