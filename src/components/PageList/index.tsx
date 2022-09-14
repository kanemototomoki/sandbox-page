import NextLink from 'next/link'

export const pageList = [
  {
    text: 'intersectionObserver',
    path: 'intersection-observer',
  },
  { text: 'resizeObserver', path: 'resize-observer' },
  { text: 'grid', path: 'grid' },
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
