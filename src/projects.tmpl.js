
/**
 * Generates /projects/{name} routes dynamically
 * https://lume.land/docs/core/multiple-pages/
 */
export default function* ({ projects }) {
  for (const project of Object.values(projects)) {
    const name = project.name.replaceAll('.', '')
    let content = ''
    try {
      content = Deno.readTextFileSync(`src/_projects/${name}.md`)
    } catch (err) {
      console.error('Project markdown file not found, using empty body', err)
    }

    yield {
      url: `/projects/${project.name.replace('.', '')}.html`,
      layout: 'layouts/Project.jsx',
      metas: {
        title: project.name,
        description: project.headline,
        icon: `/assets/${project.logo ?? 'logo-' + project.name.toLowerCase()}.svg`
      },
      content,
      ...project
    }
  }
}
