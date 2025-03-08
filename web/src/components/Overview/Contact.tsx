import styles from "./Contact.module.css";
export function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <span className={styles.row}>
        <a
          href="mailto:benjamincash88@gmail.com"
          style={{ overflow: "hidden", textWrap: "nowrap", textOverflow: "ellipsis" }}
        >
          benjamincash88@gmail.com
        </a>
      </span>
    </>
  );
}
