
export default function ({ content }) {
  return (
    <section
      className='text-base text-gray-300 text-justify prose prose-lg leading-[1.2em] list-disc list-inside'
      style={{ hyphens: 'auto' }}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
