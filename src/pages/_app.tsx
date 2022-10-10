import '@code-hike/mdx/dist/index.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'

export type GetLayout = (page: ReactElement) => ReactNode
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Noto+Sans+JP' rel='stylesheet' />
      </Head>
      <Component {...pageProps} />
    </>,
  )
}

export default MyApp
