import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Header.module.css'

const Header = () => {
  const router = useRouter()
  const isHome = router.pathname === '/'

  const goBack = event => {
    event.preventDefault()
    router.back()
  }

  return (
    <div className={styles.nav}>
      {!isHome && (
        <a href='#' onClick={goBack} className={styles.back}>
          {'<'} Back
        </a>
      )}
      <div className={styles.title}>
        <Link href='/'>
          <a>
            <h1>The E-Commerce</h1>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Header
