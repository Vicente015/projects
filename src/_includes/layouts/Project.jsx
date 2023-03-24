import SimpleSlider from './components/Slider.jsx'
import Contributors from './components/Contributors.jsx'
import Buttons from './components/Buttons.jsx'
import Head from './partials/Head.jsx'

// todo: reset tailwind styles in project body content

export default ({ title, name, projects, buttons, content, contributorsData, headline, ...args }) => {
  const contributors = contributorsData.get(name)

  return (
    <html>
      <Head />
      <body>
        <main className='min-h-screen font-sans bg-gray-800 overflow-hidden'>
          <div className='flex flex-wrap justify-center items-center gap-4 m-auto p-20 bg-blurple-500'>
            <img className='p-1 h-16' src={`/assets/logo-${name.toLowerCase()}.svg`} alt='logo' />
            <h1 className='text-4xl text-white font-bold'>{name}</h1>
          </div>
          <div className='flex flex-col max-w-[60ch] m-auto mb-20 p-5'>
            <section>
              <h2 className='text-lg font-bold text-gray-100 my-2'>{headline}</h2>
              <div
                className='text-sm text-gray-300 text-justify prose prose-lg'
                style={{ hyphens: 'auto' }}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </section>
            <section>
              <h2 className='text-lg font-semibold text-gray-100 my-2 mt-6'>Get involved</h2>
              <Buttons buttons={buttons} />
            </section>
            <section>
              <h2 className='text-lg font-semibold text-gray-100 my-2'>Explore the features</h2>
              <div className='p-4'>
                <SimpleSlider />
              </div>
            </section>
            <section>
              <h2 className='text-lg font-semibold text-gray-100 my-2'>Get to know us</h2>
              <Contributors contributors={contributors} />
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
