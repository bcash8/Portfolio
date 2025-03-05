import { Envelope } from "@phosphor-icons/react";
import styles from "./Contact.module.css";
export function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <span className={styles.row}>
        <Envelope style={{ flexShrink: 0 }} size={20} />
        <a href="mailto:benjamincash88@gmail.com">Email Me</a>
      </span>
    </>
  );
}
