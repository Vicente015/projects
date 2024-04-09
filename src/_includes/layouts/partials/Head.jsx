
export default function Head ({ metas }) {
  return (
    <head>
      <title>{metas.title}</title>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel="icon" href={metas.icon} />
      <link rel="stylesheet" href="/styles/blaze.css" />
      <link rel='stylesheet' href='/styles/styles.css' />
      <link rel='stylesheet' href='/components.css' />
      <link as='font' crossOrigin='anonymous' href='/assets/Cantarell-Regular.woff2' rel='preload' />
      <script src='https://unpkg.com/blaze-slider@latest/dist/blaze-slider.min.js' />
      <script src='/assets/script.js' defer />
    </head>
  )
}
