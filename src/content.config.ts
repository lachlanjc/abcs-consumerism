import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const wordsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/words" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["noun", "verb"]).default("noun"),
  }),
})

const booksCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/books" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      yearPublished: z.coerce.number(),
      bookshopUrl: z.string().url(),
      cover: image(),
    }),
})

export const collections = {
  words: wordsCollection,
  books: booksCollection,
}
