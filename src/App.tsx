import { ReactComponent as Logo } from './assets/AnnounceItLogo.svg'
import {ReactComponent as NewspaperIcon } from './assets/newspaper-rounded-symbolic 1.svg'

const features = [
  'title',
  'example',
  'uwu'
]

function App () {
  return (
    <>
      <main className='min-h-screen font-sans bg-[#2D283C]'>
        <div className='flex justify-center items-center gap-3 m-auto p-20 bg-blurple-500'>
          <Logo className='p-1 h-14' />
          <h1 className='text-4xl text-white font-bold'>AnnounceIt</h1>
        </div>
        <div className='flex flex-col mt-2 p-3 max-w-[70ch] m-auto'>
          <section>
            <h2 className='text-xl font-semibold text-gray-100'>Publishes announcements in various languages</h2>
            <p className='text-sm text-gray-200'>
              AnnounceIt is a Discord bot designed to facilitate communication in servers with a variety of languages. It allows posting messages with support for multiple languages and provides a button to switch between languages, ensuring that all users can understand important announcements.
            </p>
            <p className='text-lg font-semibold text-gray-100 mt-2'>Features:</p>
            <ul className='list-disc list-inside mb-5'>
              {features && features.map((feature, index) => {
                return <li key={index} className='text-gray-200 p-0 m-0'>{feature}</li>
              })}
            </ul>
          </section>
          <section>
            <h2 className='text-xl font-semibold text-gray-100'>Get involved</h2>
            <div className='grid gap-2 grid-cols-2'>
              <div className='container flex gap-2'>
                <div className='rounded-full p-2 bg-blurple-500'>
                  <NewspaperIcon className='h-9 w-9 p-1' />
                </div>
                <div>
                  <h3 className='text-lg font-medium text-gray-200'>Get the app</h3>
                  <p className='text-sm text-gray-300'>Lorem</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
