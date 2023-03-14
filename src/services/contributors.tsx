import { z } from 'zod'

const apiURL = (repoName: string) => `https://api.github.com/repos/Vicente015/${repoName}/contributors`
const GH_API_TOKEN = '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'

const ContributorSchema = z.object({
  avatarUrl: z.string().url(),
  contributions: z.number(),
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
    const response = await fetch(`${apiURL(repoName)}?${queryParameters}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: GH_API_TOKEN
        // 'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    const responseData = await response.json()

    // console.debug(responseData)
    return ResponseSchema.parse(responseData?.map((contributor: any) => ({
      avatarUrl: contributor.avatar_url,
      contributions: contributor.contributions,
      username: contributor.login
    })))
  } catch {
    throw new Error('Error :/')
  }
}
