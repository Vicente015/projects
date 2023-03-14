import { useCallback, useState } from 'react'
import { z } from 'zod'
import { fetchContributors } from '../services/contributors'

export const schema = z.object({
  repoName: z.string().nonempty()
})

export type Options = z.infer<typeof schema>

export function useContributors () {
  const [contributors, setContributors] = useState([])
  const [loading, setLoading] = useState(false)

  const getContributors = useCallback(async ({ repoName }: Options) => {
    try {
      setLoading(true)
      const newContributors = await fetchContributors({ repoName })
      setContributors(newContributors)
    } catch {
      // throw new Error(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return { contributors, getContributors, loading }
}
