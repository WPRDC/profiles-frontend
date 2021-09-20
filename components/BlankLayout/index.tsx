import styles from './BlankLayout.module.css';

export default function Index({ children }) {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
