import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import svgo from "lume/plugins/svgo.ts";
import { MarkdownEngine } from "lume/plugins/markdown.ts";
import { Page } from "lume/core.ts";

const site = lume({
  prettyUrls: true,
  src: './src/',
});

site
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
            }
          }
        },
        fontFamily: { sans: ['Cantarell', 'sans-serif'] }
      }
    }
  }))
  .use(postcss())
  .use(svgo())

const markdownToHtml = (pages: Page[]) => pages.forEach((page) => {
  page.data.body = site.hooks.markdownIt((engine: MarkdownEngine) => engine.render(page.data.body.toString()).trim())
})

site.preprocessAll([".html", ".md", ".jsx", ".md"], markdownToHtml)

export default site;
