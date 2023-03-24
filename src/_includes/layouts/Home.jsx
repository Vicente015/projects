import Head from './partials/Head.jsx'
import Content from './components/Content.jsx'
import Buttons from './components/Buttons.jsx'

export default function ({ page, content }) {
  const projects = Object.values(page.data.projects)

  return (
    <html>
      <Head />
      <body className='min-h-screen bg-greeny-600 max-w-[70ch] m-auto p-5'>
        <main className='font-sans'>
          <h1 className='text-lg text-gray-100 font-bold'>My projects</h1>
          <Content content={content} />
          <section>
            <Buttons
              buttons={
                projects.map(({ name, headline }) => ({
                  description: headline,
                  title: name,
                  icon: `logo-${name.toLowerCase()}`,
                  url: `/projects/${name}`
                }))
              }
            />
          </section>
        </main>
      </body>
    </html>
  )
}
