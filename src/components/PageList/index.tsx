import NextLink from 'next/link'

export const pageList: {
  text: string
  path: string
}[] = [
  {
    text: 'intersectionObserver',
    path: 'intersection-observer',
  },
  { text: 'resizeObserver', path: 'resize-observer' },
  { text: 'grid', path: 'grid' },
  { text: 'getUserMedia', path: 'get-user-media' },
  { text: 'zod', path: 'zod' },
]

const PageList = () => {
  return (
    <ul>
      {pageList.map(({ text, path }) => {
        return (
          <li key={text}>
            <NextLink href={path}>
              <a>{text}</a>
            </NextLink>
          </li>
        )
      })}
    </ul>
  )
}

export default PageList
