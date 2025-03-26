import styles from "./Projects.module.css";
import TTScreenshot from "../../assets/projects/TTScreenshot.png";
import SvelteStateMachineScreenshot from "../../assets/projects/SvelteStateMachineScreenshot.png";
import { Link } from "react-router";
import { PersonSimpleRun } from "@phosphor-icons/react";
export function ProjectsPage() {
  return (
    <main className={styles.layout}>
      <ul>
        <li>
          <Link to="tribal-triumph">
            <div className={`panel ${styles.project}`}>
              <div className={styles.imageContainer}>
                <img src={TTScreenshot} alt="Screenshot of Tribal Triumph" />
              </div>
              <h2>Tribal Triumph</h2>
              <p>
                Tribal Triumph is a fantasy league game for the popular reality show{" "}
                <a
                  href="https://www.cbs.com/shows/survivor/"
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Survivor
                </a>
                .
              </p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="svelte-state-machine">
            <div className={`panel ${styles.project}`}>
              <div className={styles.imageContainer}>
                <img src={SvelteStateMachineScreenshot} alt="Screenshot of Svelte State Machine" />
              </div>
              <h2>Svelte State Machine</h2>
              <p>A state machine simulator built with Svelte.</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="lax-stats">
            <div className={`panel ${styles.project}`}>
              <div className={styles.imageContainer}>
                <PersonSimpleRun size={160} />
              </div>
              <h2>Lax Stats (WIP)</h2>
              <p>A stat keeping app for womens lacrosse.</p>
            </div>
          </Link>
        </li>
      </ul>
    </main>
  );
}
