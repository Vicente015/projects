
export const css = `
.content h2 {
  margin-top: 1em;
  font-weight: bold;
}

.content li {
  list-style-type: disc;
  list-style-position: inside;
  margin-left: 0.5em;
}

.content bold {
  font-weight: bold;
}
`

export default function ({ content }) {
  return (
    <section
      className='content text-base text-gray-300 text-justify prose prose-lg leading-[1.2em]'
      style={{ hyphens: 'auto' }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
