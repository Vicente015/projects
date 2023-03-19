
import { z } from "zod"
import { Endpoints } from "@octokit/types"

const GH_API_TOKEN = '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'

const contributorsURL = (repoName: string) => `https://api.github.com/repos/Vicente015/${repoName}/contributors`
const socialsURL = (username: string) => `https://api.github.com/users/${username}/social_accounts`

const SocialAccountsSchema = z.array(z.object({
    provider: z.string(),
    url: z.string().url()
  })).optional()
const ContributorSchema = z.object({
  avatarUrl: z.string().url(),
  contributions: z.number(),
  socialAccounts: SocialAccountsSchema,
  username: z.string()
})
const ResponseSchema = z.array(ContributorSchema)

export type ContributionsSchemaType = z.infer<typeof ResponseSchema>
export type SocialAccountsSchemaType = z.infer<typeof SocialAccountsSchema>
export type RepoContributorsAndSocials = Endpoints["GET /repos/{owner}/{repo}/contributors"]["response"]["data"][0] & { socials: SocialAccountsSchemaType }
export type GetRepoContributorsResponse = RepoContributorsAndSocials[]

const fetchContributors = async ({ project: repoName }: { project: string }) => {
  console.debug('repoName')
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
    const repoData: GetRepoContributorsResponse = await repoResponse.json()
    for (const contributor of repoData) {
      if (!contributor.login) continue
      const socialsResponse = await fetch(`${socialsURL(contributor.login)}`, { headers })
      const socialsData: SocialAccountsSchemaType = await socialsResponse.json()
      contributor.socials = socialsData
    }

    return ResponseSchema.parse(repoData?.map((contributor) => ({
      avatarUrl: contributor.avatar_url,
      contributions: contributor.contributions,
      socialAccounts: contributor.socials,
      username: contributor.login
    })))
  } catch {
    throw new Error('Error :/')
  }
}

const data = await fetchContributors({ project: 'AnnounceIt' })
export default data
