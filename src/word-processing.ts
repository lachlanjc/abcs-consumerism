export default function wordProcessing() {
  // All remark and rehype plugins return a separate function
  return function (tree, file) {
    file.data.astro.frontmatter.layout =
      file.data.astro.frontmatter.layout || "./src/layouts/Word.astro"
  }
}
