
export default function ({ contributors }) {
  if (!contributors) return

  return (
    <div
      className='grid gap-4 grid-cols-2'
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
    >
      {
        contributors?.map(({ avatarUrl, contributions, socialAccounts, username }) => {
          return (
            <div key={username} className='flex flex-row gap-4 '>
              <div className='w-20 h-20 shadow-md'>
                <img className='rounded-full w-full' src={avatarUrl} alt='' />
              </div>
              <div className='w-max m-0 leading-5'>
                <p
                  className='p-1 m-0 w-fit rounded-md bg-blurple-400 text-gray-100 font-bold text-xs uppercase'
                >
                  {username === 'Vicente015' ? 'Maintainer' : 'Contributor'}
                </p>
                <p className='text-slate-50 font-semibold text-base'>{username}</p>
                <p className='text-slate-200 font-normal text-sm'>{contributions} {contributions < 2 ? 'contribution' : 'contributions'}</p>
                <ul className='flex flex-row gap-4 text-sm'>
                  {
                    socialAccounts?.map((social) => {
                      return (
                        <li key={social.provider}>
                          <a className='text-sm text-slate-300 font-normal underline decoration-wavy' href={social.url}>{social.provider}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
