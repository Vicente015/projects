
function App () {
  return (
    <>
      <main className='min-h-screen font-sans bg-[#2D283C]'>
        <div className='flex justify-center m-auto p-24 bg-blurple-500'>
          <div className='logo'>
            <p>logito</p>
          </div>
          <h1 className='text-4xl text-white font-bold'>AnnounceIt</h1>
        </div>
        <div className='flex flex-col mt-2 p-3 max-w-[70ch] m-auto'>
          <section>
            <h2 className='text-xl font-semibold text-gray-100'>Publishes announcements in various languages</h2>
            <p className='text-sm text-gray-200'>
              AnnounceIt is a Discord bot designed to facilitate communication in servers with a variety of languages. It allows posting messages with support for multiple languages and provides a button to switch between languages, ensuring that all users can understand important announcements.
            </p>
            <p className='text-lg font-semibold text-gray-100 mt-2'>Features:</p>
            <ul className='list-disc list-inside'>
              <li className='text-gray-200'>title</li>
            </ul>
          </section>
          <section>
            <h2>Get involved</h2>
            <div className='grid'>
              <div className='container flex'>
                <div className='svg' />
                <div className='right'>
                  <h3>Get the app</h3>
                  <p>Lorem</p>
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
