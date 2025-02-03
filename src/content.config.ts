import { defineCollection, z } from "astro:content"
import { glob, file } from "astro/loaders" // Not available with legacy API

const wordsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/words" }),
})

export const collections = {
  words: wordsCollection,
}
