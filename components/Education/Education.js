import React from "react";
import styles from "./styles.module.scss";

export default function Education({ school, title, children }) {
  return (
    <div>
      <h3 className={styles.company}>{school}</h3>
      <div className={styles.details} key={title}>
        {title}
      </div>
      {children}
    </div>
  );
}
