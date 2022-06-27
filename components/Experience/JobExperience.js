import React from 'react';
import styles from 'styles/Home.module.scss'

export default function JobExperience({ company, title, dates, description }) {
  return (
    <div>
      <h3 className={styles.company}>{ company }</h3>
      <div className={styles.details}>{ title }, { dates }</div>
      <p>{ description }</p>
    </div>
  );
}