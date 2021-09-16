import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profiles - Maps</title>
        <meta name="description" content="Catalogue of map data on at WPRDC." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Maps</h1>
        <p>This is the maps page!</p>
      </main>
    </div>
  )
}
