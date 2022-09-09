import { ReactElement } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import styles from './style.module.css'

const Layout = ({ children }: { children: ReactElement[] }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
