import { type PropsWithChildren } from 'react'
import { type ContributionsSchemaType } from '../services/contributors'

export function Contributors ({ children, ...properties }: PropsWithChildren<{ contributors: ContributionsSchemaType }>) {
  const { contributors } = properties

  return (
    <div className='flex flex-row gap-16'>
      {
        contributors.map(({ avatarUrl, contributions, socialAccounts, username }) => {
          return (
            <div key={username} className='flex flex-row gap-4 '>
              <div className='w-20 h-20'>
                <img className='rounded-full w-full' src={avatarUrl} alt='' />
              </div>
              <div className='w-max'>
                <p className='p-1 m-0 rounded-md bg-blurple-400 text-blurple-100 font-bold text-sm uppercase'>
                  {username === 'Vicente015' ? 'Maintainer' : 'Contributor'}
                </p>
                <p className='text-slate-50 font-semibold'>{username}</p>
                <p className='text-slate-200 font-normal'>{contributions} contributions</p>
                <ul className='flex flex-row gap-4'>
                  {
                    socialAccounts?.map((social) => {
                      return (
                        <li key={social.provider}>
                          <a className='text-slate-300 font-normal underline decoration-wavy' href={social.url}>{social.provider}</a>
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
