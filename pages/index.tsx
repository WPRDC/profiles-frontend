import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import cityIso from '../public/city_iso.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profiles - Home</title>
        <meta name="description" content="New WPRDC App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.titleSection}>
            <div className={styles.welcome}>
              <h1 className={styles.title}>Learn about your neighborhood</h1>
              <div className={styles.subtitle}>
                With Profiles you can explore, visualize and share open data
                about your community.
              </div>
            </div>
          </div>
          <div className={styles.heroSection}>
            <div className={styles.heroImgDiv}>
              <Image
                className={styles.heroImg}
                src={cityIso}
                alt="isometric city illustration"
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            Where is the futile crewmate? Bare green people, to the habitat
            impressivelyred alert. Processors are the phenomenans of the boldly
            tragedy. Experiment patiently like an evasive spacecraft.
          </div>
        </div>
        <div className={styles.menu}>
          <Link href="/explore">
            <div className={styles.bigButton}>
              <h2 className={styles.buttonTitle}>Data Explorer</h2>
              <p className={styles.buttonText}>
                Explore statistics about different areas in Southwest PA.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
