import { SolarSystem } from "./SolarSystem/SolarSystem";
import styles from "./Welcome.module.css";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.content}>
        <p className={styles.intro}>
          Hi, I'm <b>Ben Cash</b> - a developer focused on building the best full stack applications possible. My work
          spans across web development, database managment, and creative problem solving.
        </p>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            aria-label="Github Profile"
            onClick={() => window.open("https://github.com/bcash8", "_blank")}
          >
            <GithubLogo size={23} />
          </button>
          <button
            className={styles.button}
            aria-label="Github Profile"
            onClick={() => window.open("https://www.linkedin.com/in/benjamin-cash-679180238/", "_blank")}
          >
            <LinkedinLogo size={23} />
          </button>
        </div>
      </div>
      <div className={styles.solarSystemContainer}>
        <SolarSystem />
      </div>
    </div>
  );
}
