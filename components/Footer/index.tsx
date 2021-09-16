import styles from './Footer.module.css';
import { Link } from '@wprdc/test-components';

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.copyright}>
        &copy; Western Pennsylvania Regional Data Center, University Center for
        Social and Urban Research, University of Pittsburgh
      </div>
      <div className={styles.spacer} />
      <div className={styles.links}>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/wprdc/neighborhood-simulacrum"
        >
          GitHub
        </Link>
      </div>
    </div>
  );
}
