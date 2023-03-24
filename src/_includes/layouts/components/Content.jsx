
export default function Content ({ content }) {
  return (
    <section
      className='text-base text-gray-300 text-justify prose prose-lg leading-[1.2em]'
      style={{ hyphens: 'auto' }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
