import Grid from '@template/grid'
import Layout from '@ui/layout/Main'
import { NextPageWithLayout } from '../_app'

type Props = {}

const Page: NextPageWithLayout<Props> = () => {
  return <Grid />
}

Page.getLayout = Layout

export default Page
