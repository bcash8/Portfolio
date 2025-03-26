import { Welcome } from "../../components/Overview/Welcome";
import { About } from "../../components/Overview/About";
import styles from "./Overview.module.css";
import { Interests } from "../../components/Overview/Interests";
import { Projects } from "../../components/Overview/Projects";
import { Contact } from "../../components/Overview/Contact";
import { Now } from "../../components/Overview/Now";
export function Overview() {
  return (
    <main className={styles.layout}>
      <div className={`panel ${styles.welcome}`}>
        <Welcome />
      </div>
      <div className={`panel ${styles.about}`}>
        <About />
      </div>
      <div className={`panel ${styles.contact}`}>
        <Contact />
      </div>
      <div className={`panel ${styles.projects}`}>
        <Projects />
      </div>
      <div className={`panel ${styles.interests}`}>
        <Interests />
      </div>
      <div className={`panel ${styles.now}`}>
        <Now />
      </div>
    </main>
  );
}
