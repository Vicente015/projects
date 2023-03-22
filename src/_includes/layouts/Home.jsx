import Head from "./partials/Head.jsx";

export default function ({ page, content }) {
  const projects = Object.values(page.data.projects)
  console.debug({page, projects})
  return (
    <html>
      <Head />
      <body>
        <main className='min-h-screen font-sans bg-[#2D283C] overflow-hidden flex justify-center items-center'>
          <section className='text-sm text-gray-300 text-justify prose prose-lg'
            style={{ hyphens: 'auto' }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <section>
            <ul>
              {projects.map((project) => {
                return (
                  <li><a href={`/projects/${project.name}`}>{project.name}</a></li>
              )
            })}
            </ul>
          </section>
        </main>
      </body>
    </html>
  )
}
