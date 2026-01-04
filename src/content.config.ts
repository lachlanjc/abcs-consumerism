import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const wordsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/words" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["noun", "verb"]).default("noun"),
  }),
})

export const collections = {
  words: wordsCollection,
}
