import styles from "./Overview.module.css";

export function Overview() {
  return (
    <main className={styles.layout}>
      <div className={`${styles.panel} ${styles.span3} ${styles.rowSpan4}`}>Overview</div>
      <div className={`${styles.panel} ${styles.span1} ${styles.rowSpan7}`}>About</div>
      <div className={`${styles.panel} ${styles.span1} ${styles.rowSpan4}`}>Contact</div>
      <div className={`${styles.panel} ${styles.span1} ${styles.rowSpan3}`}>Projects</div>
      <div className={`${styles.panel} ${styles.span1} ${styles.rowSpan3}`}>Interests</div>
      <div className={`${styles.panel} ${styles.span2} ${styles.rowSpan1}`}>Cool animation</div>
      <div className={`${styles.panel} ${styles.span1} ${styles.rowSpan1}`}>Now</div>
    </main>
  );
}
