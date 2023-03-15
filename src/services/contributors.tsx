import { z } from 'zod'
const GH_API_TOKEN = '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'

const contributorsURL = (repoName: string) => `https://api.github.com/repos/Vicente015/${repoName}/contributors`
const socialsURL = (username: string) => `https://api.github.com/users/${username}/social_accounts`

const ContributorSchema = z.object({
  avatarUrl: z.string().url(),
  contributions: z.number(),
  socialAccounts: z.array(z.object({
    provider: z.string(),
    url: z.string().url()
  })).optional(),
  username: z.string()
})
const ResponseSchema = z.array(ContributorSchema).nonempty()
export type ContributionsSchemaType = z.infer<typeof ResponseSchema>

export async function fetchContributors ({ repoName }: { repoName: string }) {
  if (repoName === '') return

  try {
    const queryParameters = new URLSearchParams({
      per_page: '3'
    })
    const headers = {
      Accept: 'application/vnd.github+json',
      Authorization: GH_API_TOKEN
    }
    const repoResponse = await fetch(`${contributorsURL(repoName)}?${queryParameters}`, { headers })
    const repoData = await repoResponse.json()
    for (const contributor of repoData) {
      const socialsResponse = await fetch(`${socialsURL(contributor.login)}`, { headers })
      const socialsData = await socialsResponse.json()
      contributor.socials = socialsData
      console.debug('owo', socialsData)
    }

    console.debug('repo', repoData)
    return ResponseSchema.parse(repoData?.map((contributor: any) => ({
      avatarUrl: contributor.avatar_url,
      contributions: contributor.contributions,
      socialAccounts: contributor.socials,
      username: contributor.login
    })))
  } catch {
    throw new Error('Error :/')
  }
}
