import { useCallback, useMemo, useState } from 'react'
import { z } from 'zod'
import { type ContributionsSchemaType, fetchContributors } from '../services/contributors'

export const schema = z.object({
  repoName: z.string().nonempty()
})
export type Options = z.infer<typeof schema>

export function useContributors () {
  const [contributors, setContributors] = useState<ContributionsSchemaType>([])
  const [loading, setLoading] = useState(false)

  console.log('useContributors')

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

  const sortedContributors = useMemo(() => {
    return [...contributors].sort((a, b) => a.contributions >= b.contributions)
  }, [contributors])

  return { contributors: sortedContributors, getContributors, loading }
}
