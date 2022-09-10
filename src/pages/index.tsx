import Layout from '@src/components/ui/layout/Main'
import PageList from '@src/components/PageList'
import { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <h1>title</h1>
      <PageList />
    </div>
  )
}
Home.getLayout = Layout

export default Home
