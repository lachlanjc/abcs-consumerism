export default function wordProcessing() {
  // All remark and rehype plugins return a separate function
  return function (_: unknown, file: unknown) {
    // @ts-expect-error haven't typed the file object
    file.data.astro.frontmatter.layout ??= "../layouts/Word.astro"
  }
}
