import NextLink from 'next/link'

type Path = {
  text: string
  path: string
  nest?: Path[]
}

export const pageList: Path[] = [
  {
    text: 'intersectionObserver',
    path: 'intersection-observer',
  },
  { text: 'resizeObserver', path: 'resize-observer' },
  { text: 'grid', path: 'grid' },
  {
    text: 'mediaStream',
    path: 'media-stream',
    nest: [
      { text: 'getUserMedia', path: 'media-stream/get-user-media' },
      { text: 'applyConstraints', path: 'media-stream/apply-constraints' },
    ],
  },
  { text: 'zod', path: 'zod' },
]

const PageList = () => {
  return (
    <ul>
      {pageList.map(({ text, path, nest }) => {
        return (
          <li key={text}>
            <NextLink href={path}>
              <a>{text}</a>
            </NextLink>
            {nest ? (
              <ul>
                {nest.map(({ text, path, nest }) => {
                  return (
                    <li key={text}>
                      <NextLink href={path}>
                        <a>{text}</a>
                      </NextLink>
                    </li>
                  )
                })}
              </ul>
            ) : null}
          </li>
        )
      })}
    </ul>
  )
}

export default PageList
