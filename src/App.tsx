import { ReactComponent as Logo } from './assets/AnnounceItLogo.svg'
import { ReactComponent as NewspaperIcon } from './assets/newspaper-rounded-symbolic 1.svg'
import SimpleSlider from './components/Slider'

const features = [
  'title',
  'example',
  'uwu'
]

const buttons = [
  { description: 'Invite the bot to your server.', title: 'Invite the bot' },
  { description: 'Contribute to the bot souce code on GitHub.', title: 'Contribute' },
  { description: 'Contribute to the project financialy', title: 'Donate money.' }
]

function App () {
  return (
    <>
      <main className='min-h-screen font-sans bg-[#2D283C] overflow-hidden'>
        <div className='flex justify-center items-center gap-4 m-auto p-20 bg-blurple-500'>
          <Logo className='p-1 h-16' />
          <h1 className='text-4xl text-white font-bold'>AnnounceIt</h1>
        </div>
        <div className='flex flex-col mt-7 max-w-[60ch] m-auto mb-40'>
          <section className='px-3'>
            <h2 className='text-lg font-bold text-gray-100 my-2'>Publishes announcements in various languages</h2>
            <p className='text-sm text-gray-300 text-justify' style={{ hyphens: 'auto' }}>
              AnnounceIt is a Discord bot designed to facilitate communication in servers with a variety of languages. It allows posting messages with support for multiple languages and provides a button to switch between languages, ensuring that all users can understand important announcements.
            </p>
            <h3 className='text-base font-medium text-gray-200 my-2'>Features:</h3>
            <ul className='list-disc list-inside'>
              {features?.map((feature, index) => {
                return <li key={index} className='text-gray-300 leading-none pl-4'>{feature}</li>
              })}
            </ul>
          </section>
          <section>
            <h2 className='text-lg font-semibold text-gray-100 my-2 mt-6'>Get involved</h2>
            <div className='grid gap-1 grid-cols-2'>
              {buttons?.map(({ description, title }) => {
                return (
                  <a key={title} className='flex gap-4 p-4 rounded-lg hover:bg-blurple-700 hover:bg-opacity-20 transition-colors duration-[.2s] ease-in' href='#'>
                    <div className='rounded-full p-2 bg-blurple-500 w-[60px] h-[60px] flex justify-center items-center'>
                      <NewspaperIcon className='w-[50px] p-1' />
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
              <SimpleSlider />
            </div>
          </section>
          <section>
            <h2 className='text-lg font-semibold text-gray-100 my-2'>Get to know the creator</h2>
          </section>
          <section>
            <h2 className='text-lg font-semibold text-gray-100 my-2'>More information</h2>
          </section>
          <footer />
        </div>
      </main>
    </>
  )
}

export default App
