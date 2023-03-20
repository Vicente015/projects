import { z } from "zod"
import { Endpoints } from "@octokit/types"
import json from './projects.json' assert { type: "json" }

const GH_API_TOKEN = Deno.env.get('GH_API_TOKEN')

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

const fetchContributors = async ({ projects }: { projects: string[] }) => {
  const finalData = new Map()

  for (const repoName of projects) {
    if (repoName === '') return finalData
    try {
      const queryParameters = new URLSearchParams({
        per_page: '3'
      })
      const headers: Headers = {
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
      if (!repoResponse.ok) return finalData

      finalData.set(repoName, ResponseSchema.parse(repoData?.map((contributor) => ({
        avatarUrl: contributor.avatar_url,
        contributions: contributor.contributions,
        socialAccounts: contributor.socials,
        username: contributor.login
      }))))
    } catch (err) {
      console.error(err)
    }
  }
  return finalData
}

const data = await fetchContributors({ projects: Object.keys(json) })
export default data
