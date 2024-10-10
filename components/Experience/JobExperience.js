import React from "react";
import styles from "./styles.module.scss";

export default function JobExperience({ company, titles, children }) {
  return (
    <div>
      <h3 className={styles.company}>{company}</h3>
      {titles.map(title => (
        <div className={styles.details} key={title}>
          {title}
        </div>
      ))}
      {children}
    </div>
  );
}
