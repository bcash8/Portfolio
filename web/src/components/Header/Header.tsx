import { Link } from "react-router";
import styles from "./Header.module.css";
import { Planet } from "@phosphor-icons/react";
export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="">
              <Planet weight={"bold"} />
            </Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
