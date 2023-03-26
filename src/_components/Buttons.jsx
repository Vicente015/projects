
export default function ({ buttons }) {
  return (
    <div
      className='grid gap-1 grid-cols-2 my-2'
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
    >
      {buttons?.map(({ description, title, icon, url, openSelf }) => {
        return (
          <a key={title} className='flex gap-4 p-4 rounded-lg hover:bg-blurple-700 hover:bg-opacity-20 transition-colors duration-[.2s] ease-in' href={url} target={openSelf ? '_self' : '_blank'} rel='noreferrer'>
            <div className='rounded-full p-2 bg-blurple-500 w-[60px] h-[60px] flex justify-center items-center'>
              <div className='w-[50px] p-1'>
                <img className='w-full p-0' src={`/assets/${icon ?? 'plus-symbolic'}.svg`} alt='' />
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
  )
}
