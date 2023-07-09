import Head from './partials/Head.jsx'
import { existsSync } from "https://deno.land/std/fs/mod.ts";

export default function ({ page, content, comp }) {
  const projects = Object.values(page.data.projects)

  return (
    <html>
      <Head />
      <body className='min-h-screen bg-gray-800 max-w-[70ch] m-auto p-5'>
        <main className='font-sans'>
          <h1 className='text-lg text-gray-100 font-bold'>My projects</h1>
          <comp.Content content={content} />
          <section>
            <comp.Buttons
              buttons={
                projects.map(({ name, logo, headline }) => ({
                  description: headline,
                  title: name,
                  icon: logo ?? `logo-${name.toLowerCase()}`,
                  url: `/projects/${name.replaceAll('.', '')}`,
                  openSelf: true
                }))
              }
            />
          </section>
        </main>
      </body>
    </html>
  )
}
