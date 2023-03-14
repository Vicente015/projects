import { type PropsWithChildren } from 'react'
import { type ContributionsSchemaType } from '../services/contributors'

export function Contributors ({ children, ...properties }: PropsWithChildren<{ contributors: ContributionsSchemaType }>) {
  const { contributors } = properties

  return (
    <div className='flex flex-row gap-16'>
      {
        contributors.map(({ avatarUrl, contributions, username }) => {
          return (
            <div key={username} className='flex flex-row gap-4'>
              <div className='w-20 h-20'>
                <img className='rounded-full w-full' src={avatarUrl} alt='' />
              </div>
              <div>
                <p className='p-1 m-0 rounded-md bg-slate-400 text-slate-100 font-bold text-sm uppercase'>Maintainer</p>
                <p className='text-slate-50 font-medium text-base'>{username}</p>
                <p className='text-slate-200'>{contributions}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
