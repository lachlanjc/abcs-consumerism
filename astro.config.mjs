import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import remarkWikiLink from "remark-wiki-link"

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
          pageResolver: (name) => [name.toLowerCase().replace(/ /g, "-")],
          hrefTemplate: (permalink) => `/${permalink}`,
        },
      ],
    ],
  },
})
