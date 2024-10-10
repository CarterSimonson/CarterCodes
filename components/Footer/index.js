import React from "react";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Developed with <span className={styles.heartIcon}>❤</span> using
        Next.js
      </p>
    </footer>
  );
}
