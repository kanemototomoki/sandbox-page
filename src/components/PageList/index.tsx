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
  const createLinks = ({ text, path, nest }: Path) => {
    return (
      <li key={text}>
        <NextLink href={path}>
          <a>{text}</a>
        </NextLink>
        {nest ? (
          <ul>
            {nest.map((arg) => {
              return createLinks(arg)
            })}
          </ul>
        ) : null}
      </li>
    )
  }

  return (
    <ul>
      {pageList.map((paths: Path) => {
        return createLinks(paths)
      })}
    </ul>
  )
}

export default PageList
