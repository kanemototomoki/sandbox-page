import GetUserMedia from '@src/components/template/GetUserMedia'
import Layout from '@ui/layout/Main'
import { NextPageWithLayout } from '../_app'

type Props = {}

const Page: NextPageWithLayout<Props> = () => {
  return <GetUserMedia />
}

Page.getLayout = Layout

export default Page
