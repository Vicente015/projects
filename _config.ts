import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import metas from "lume/plugins/metas.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import svgo from "lume/plugins/svgo.ts";
import { MarkdownEngine } from "lume/plugins/markdown.ts";
import { Page } from "lume/core.ts";

const site = lume({
  prettyUrls: true,
  src: './src/',
})

site.remoteFile('styles/blaze.css', 'https://unpkg.com/blaze-slider@latest/dist/blaze.css')

site
  .copy('assets/script.js')
  .copy('assets/Cantarell-Regular.woff2')
  .copy('assets/')
  .copy('styles/')

site
  .use(jsx())
  .use(tailwindcss({
    extensions: [".html", ".jsx"],
    options: {
      theme: {
        extend: {
          colors: {
            blurple: {
              50: '#f7f7fe',
              100: '#eef0fe',
              200: '#d5d9fc',
              300: '#bcc1fa',
              400: '#8a93f6',
              500: '#5865f2',
              600: '#4f5bda',
              700: '#424cb6',
              800: '#353d91',
              900: '#2b3177'
            },
            greeny: {
              50: "#E7ECEE",
              100: "#CDD7DA",
              200: "#9EB2B8",
              300: "#6B8A94",
              400: "#475B61",
              500: "#232D30",
              600: "#1C2426",
              700: "#151C1E",
              800: "#0F1315",
              900: "#060809"
            }
          }
        },
        fontFamily: { sans: ['Cantarell', 'sans-serif'] }
      }
    }
  }))
  .use(postcss())
  .use(svgo())
  .use(metas())

const markdownToHtml = (pages: Page[]) => {
  for (const page of pages) {
    const pageContent: string = (page.data.content as string).toString()
    site.hooks.markdownIt((engine: MarkdownEngine) => {
      page.data.content = engine.render(pageContent.toString()).trim()
    })
  }
}

site.preprocessAll([".md", ".html"], markdownToHtml)

export default site;
