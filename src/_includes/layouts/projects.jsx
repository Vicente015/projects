import Logo from './components/Logo.jsx'
import NewspaperIcon from './components/NewspaperIcon.jsx'
import SimpleSlider from './components/Slider.jsx'

const buttons = [
  { description: 'Invite the bot to your server.', title: 'Invite the bot' },
  { description: 'Contribute to the bot souce code on GitHub.', title: 'Contribute' },
  { description: 'Contribute to the project financialy', title: 'Donate money.' }
]

export default ({ title, children, project, projects, content }) => {
  console.debug({title, project, projects, children, content, buttons})
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="styles/styles.css" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <main className='min-h-screen font-sans bg-[#2D283C] overflow-hidden'>
          <div className='flex justify-center items-center gap-4 m-auto p-20 bg-blurple-500'>
            <Logo />
            <h1 className='text-4xl text-white font-bold'>{projects[project].name}</h1>
          </div>
          <div className='flex flex-col mt-7 max-w-[60ch] m-auto mb-20'>
            <section className='px-3'>
              <h2 className='text-lg font-bold text-gray-100 my-2'>{projects[project].headline}</h2>
              <div className='text-sm text-gray-300 text-justify'
                style={{ hyphens: 'auto' }}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </section>
            <section>
              <h2 className='text-lg font-semibold text-gray-100 my-2 mt-6'>Get involved</h2>
              <div className='grid gap-1 grid-cols-2'>
                {buttons?.map(({ description, title }) => {
                  return (
                    <a key={title} className='flex gap-4 p-4 rounded-lg hover:bg-blurple-700 hover:bg-opacity-20 transition-colors duration-[.2s] ease-in' href='#'>
                      <div className='rounded-full p-2 bg-blurple-500 w-[60px] h-[60px] flex justify-center items-center'>
                        <div className='w-[50px] p-1'>
                          <NewspaperIcon />
                        </div>
                      </div>
                      <div className=''>
                        <h3 className='text-base font-semibold text-gray-200 leading-none pb-1'>{title}</h3>
                        <p className='text-sm text-gray-300 leading-4'>{description}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </section>
            <section>
              <h2 className='text-lg font-semibold text-gray-100 my-2'>Explore the features</h2>
              <div className='p-4'>
                <SimpleSlider/>
              </div>
            </section>
            <section>
              <h2 className='text-lg font-semibold text-gray-100 my-2'>Get to know us</h2>
            </section>
            <section>
              <h2 className='text-lg font-semibold text-gray-100 my-2'>More information</h2>
            </section>
          </div>
        </main>
      </body>
    </html>
  )
}