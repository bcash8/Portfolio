import { Welcome } from "../../components/Overview/Welcome";
import { About } from "../../components/Overview/About";
import styles from "./Overview.module.css";
import { Interests } from "../../components/Overview/Interests";
import { Projects } from "../../components/Overview/Projects";
import { Contact } from "../../components/Overview/Contact";

export function Overview() {
  return (
    <main className={styles.layout}>
      <div className={`${styles.panel} ${styles.welcome}`}>
        <Welcome />
      </div>
      <div className={`${styles.panel} ${styles.about}`}>
        <About />
      </div>
      <div className={`${styles.panel} ${styles.contact}`}>
        <Contact />
      </div>
      <div className={`${styles.panel} ${styles.projects}`}>
        <Projects />
      </div>
      <div className={`${styles.panel} ${styles.interests}`}>
        <Interests />
      </div>
      <div className={`${styles.panel} ${styles.animation}`}>Cool animation</div>
      <div className={`${styles.panel} ${styles.now}`}>Now</div>
    </main>
  );
}
