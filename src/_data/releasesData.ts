import { z } from "zod"
import { Endpoints } from "@octokit/types"
import json from './projects.json' assert { type: "json" }

const GH_API_TOKEN = Deno.env.get('GH_API_TOKEN')

const latestReleaseURL = (repoName: string) => `https://api.github.com/repos/Vicente015/${repoName}/releases/latest`

const LatestReleaseSchema = z.object({
  name: z.string(),
  body: z.string(),
  published_at: z.string(),
  html_url: z.string()
})

export type LatestReleaseSchemaType = z.infer<typeof LatestReleaseSchema>
export type LatestReleaseDataGet = Endpoints["GET /repos/{owner}/{repo}/releases/latest"]["response"]["data"]

const fetchLatestReleases = async ({ projects }: { projects: string[] }) => {
  const finalData = new Map()

  for (const repoName of projects) {
    if (repoName === '') return finalData
    try {
      const headers: Headers = {
        Accept: 'application/vnd.github+json',
        Authorization: GH_API_TOKEN
      }

      const response = await fetch(`${latestReleaseURL(repoName)}`, { headers })
      const data: LatestReleaseDataGet = await response.json()
      console.debug('release data', repoName, data)
      if (!response.ok) continue

      finalData.set(repoName, LatestReleaseSchema.parse(data))
    } catch (err) {
      console.error(err)
    }
  }
  return finalData
}

const data = await fetchLatestReleases({ projects: Object.keys(json) })
export default data
