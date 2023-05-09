import GoBackButton from '../../_components/GoBackButton.jsx';
import Head from './partials/Head.jsx'
import { existsSync } from "https://deno.land/std/fs/mod.ts";

// todo: reset tailwind styles in project body content

export default ({ title, name, projects, buttons, content, contributorsData, headline, comp, featuresGifs, logo, ...args }) => {
  const contributors = contributorsData.get(name)

  return (
    <html>
      <Head />
      <body>
        <main className='min-h-screen font-sans bg-gray-800 overflow-hidden'>
          <GoBackButton></GoBackButton>
          <div className='flex flex-row flex-wrap justify-center items-center gap-4 m-auto p-20 bg-blurple-500'>
            <img className='p-1 h-16' src={existsSync(`src/assets/logo-${name.toLowerCase()}.svg`) ? `/assets/logo-${name.toLowerCase()}.svg` : logo} alt='logo' />
            <h1 className='text-4xl text-white font-bold'>{name}</h1>
          </div>
          <div className='flex flex-col max-w-[60ch] m-auto mb-20 p-5'>
            <section>
              <h2 className='text-lg font-bold text-gray-100 my-2'>{headline}</h2>
              <comp.Content content={content}></comp.Content>
            </section>
            {
              buttons && (
                <section>
                  <h2 className='text-lg font-semibold text-gray-100 my-2 mt-6'>Get involved</h2>
                  <comp.Buttons buttons={buttons} />
                </section>
              )
            }
            {
              featuresGifs && (
                <section>
                  <h2 className='text-lg font-semibold text-gray-100 my-2'>Explore the features</h2>
                  <div className='p-4'>
                    <comp.Slider elements={featuresGifs} />
                  </div>
                </section>
              )
            }
            {
              (contributors?.length > 0) && (
                <section>
                  <h2 className='text-lg font-semibold text-gray-100 my-2'>Get to know us</h2>
                  <comp.Contributors contributors={contributors} />
                </section>
              )
            }
            <section>
              <h2 className='text-lg font-semibold text-gray-100 my-2'>More information</h2>
            </section>
          </div>
        </main>
      </body>
    </html >
  )
}
