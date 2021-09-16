import styles from './Navbar.module.css';
import { Button } from '@wprdc/test-components';

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <div className={styles.title}>Profiles</div>
        <div className={styles.subtitle}>
          neighborhood statistics at your fingertips
        </div>
      </div>
      <div className={styles.filler} />
      <div className={styles.menu}></div>
    </div>
  );
}
