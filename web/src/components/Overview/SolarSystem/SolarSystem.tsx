import { useEffect } from "react";
import styles from "./SolarSystem.module.css";

export function SolarSystem() {
  useEffect(() => {
    const now = new Date();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    function getPlanetRotation(orbitalSpeed: number) {
      const totalSeconds = minute * 60 + second;
      const percentage = (totalSeconds % orbitalSpeed) / orbitalSpeed;
      return percentage * 360;
    }

    orbitalSpeeds.forEach((speed, planet) => {
      const rotation = getPlanetRotation(speed);
      const planetElement = document.querySelector(`.${styles[planet]}`);

      if (planetElement && planetElement instanceof HTMLElement) {
        planetElement.style.setProperty("--initial-rotation", `${-rotation}deg`);
      }
    });
  }, []);

  return (
    <div className={styles.solarSystemContainer}>
      <div className={styles.solarSystem}>
        <div className={styles.sun}></div>

        <div className={`${styles.orbit} ${styles.mercury}`}>
          <div className={`${styles.planet} ${styles.mercuryPlanet}`}></div>
        </div>

        <div className={`${styles.orbit} ${styles.venus}`}>
          <div className={`${styles.planet} ${styles.venusPlanet}`}></div>
        </div>

        <div className={`${styles.orbit} ${styles.earth}`}>
          <div className={`${styles.planet} ${styles.earthPlanet}`}>
            <div className={styles.moonOrbit}>
              <div className={styles.moon}></div>
            </div>
          </div>
        </div>

        <div className={`${styles.orbit} ${styles.mars}`}>
          <div className={`${styles.planet} ${styles.marsPlanet}`}></div>
        </div>

        <div className={`${styles.orbit} ${styles.jupiter}`}>
          <div className={`${styles.planet} ${styles.jupiterPlanet}`}></div>
        </div>

        <div className={`${styles.orbit} ${styles.saturn}`}>
          <div className={`${styles.planet} ${styles.saturnPlanet}`}></div>
        </div>

        <div className={`${styles.orbit} ${styles.uranus}`}>
          <div className={`${styles.planet} ${styles.uranusPlanet}`}></div>
        </div>

        <div className={`${styles.orbit} ${styles.neptune}`}>
          <div className={`${styles.planet} ${styles.neptunePlanet}`}></div>
        </div>
      </div>
    </div>
  );
}

const orbitalSpeeds = new Map<string, number>([
  ["mercury", 5.2633],
  ["venus", 13.457],
  ["earth", 21.831],
  ["mars", 41.1],
  ["jupiter", 259.159],
  ["saturn", 643.502],
  ["uranus", 1835.408],
  ["neptune", 3600]
]);
