
export default function* ({ projects }) {
  for (const project of Object.values(projects)) {
    let body = ''
    try {
      body = Deno.readTextFileSync(`src/_projects/${project.name}.md`)
    } catch {
      body = ''
    }

    yield {
      url: `/projects/${project.name}.html`,
      title: project.name,
      body: body,
      layout: 'layouts/main.jsx',
      ...project
    }
  }
}
