import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"
import { parseString } from "fast-csv"
import { readFileSync } from "node:fs"
import { resolve } from "node:path"

const wordsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/words" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["noun", "verb"]).default("noun"),
  }),
})

const booksCollection = defineCollection({
  loader: () => {
    const text = readFileSync(
      resolve("src/content/books/books.csv"),
      "utf-8"
    )
    return new Promise<any[]>((resolve, reject) => {
      const rows: any[] = []
      parseString(text, { headers: true })
        .on("error", (error) => reject(error))
        .on("data", (row) => {
          row.id = row.title
            ? row.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "")
            : Math.random().toString(36).substring(2, 9)
          rows.push(row)
        })
        .on("end", () => resolve(rows))
    })
  },
  schema: z.object({
    id: z.string(),
    cover: z.string().url(),
    title: z.string(),
    author: z.string(),
    yearPublished: z.coerce.number(),
    bookshopUrl: z.string().url(),
    blurb: z.string(),
  }),
})

export const collections = {
  words: wordsCollection,
  books: booksCollection,
}
