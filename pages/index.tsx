import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import heroImage from '../public/city_iso.png';

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
              <h1 className={styles.title}>
                Find information about your neighborhood.
              </h1>
              <div className={styles.subtitle}>
                With Profiles you can explore, visualize and share open data
                about your community.
              </div>
            </div>
          </div>
          <div className={styles.heroSection}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            This is a work in progress. Please check back often for updates.{' '}
          </div>
        </div>
        <div className={styles.menu}>
          <h2 className={styles.sectionTitle}>Apps</h2>
          <div className={styles.appsMenu}>
            <Link href="/explore">
              <div className={styles.bigButton}>
                <div className={styles.buttonTitle}>Data Explorer</div>
                <p className={styles.buttonText}>
                  Explore data and statistics about different areas in Southwest
                  PA.
                </p>
              </div>
            </Link>
            <a href="https://tools.wprdc.org/greenprint">
              <div className={styles.bigButton}>
                <div className={styles.buttonTitle}>Greenprint</div>
                <p className={styles.buttonText}>
                  Make maps with environmental data.
                </p>
              </div>
            </a>
            <a href="https://assets.wprdc.org">
              <div className={styles.bigButton}>
                <div className={styles.buttonTitle}>Asset Map</div>
                <p className={styles.buttonText}>
                  Explore community asset and place of interest data.
                </p>
              </div>
            </a>
          </div>

          <h2 className={styles.sectionTitle}>Tools</h2>
          <div className={styles.toolsMenu}>
            <a href="https://api.profiles.wprdc.org">
              <div className={styles.toolButton}>
                <div className={styles.buttonTitle}>API</div>
                <p className={styles.toolButtonText}>
                  Build or enhance your app with open civic data.
                </p>
              </div>
            </a>
            <a href="https://api.profiles.wprdc.org/tiles/index.json">
              <div className={styles.toolButton}>
                <div className={styles.buttonTitle}>Map Tile Server</div>
                <p className={styles.toolButtonText}>
                  Use our data layers in your maps or apps!
                </p>
              </div>
            </a>
            <a href="https://profiles.wprdc.org/components/">
              <div className={styles.toolButton}>
                <div className={styles.buttonTitle}>Component Library</div>
                <p className={styles.toolButtonText}>
                  UI components with connections to WPRDC data.
                </p>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
