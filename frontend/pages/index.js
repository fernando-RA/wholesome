import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wholesome DAO</title>
        <meta name="description" content="wholesomeDAO descentralized autonomous organization" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Wholesome DAO</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/frag997/wholesomedao"
          target="_blank"
          rel="noopener noreferrer"
        >
          open source code at github
        </a>
      </footer>
    </div>
  )
}
