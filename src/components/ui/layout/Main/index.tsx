import Footer from '../../Footer'
import Header from '../../Header'
import styles from './style.module.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
