import React from 'react';
import styles from 'styles/Home.module.scss'

import TwitterIcon from './TwitterIcon';
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';

export default function Intro() {
  return (
    <div className={styles.startSection}>
      <div className={styles.imageContainer}>
        <img src="assets/mugshot.webp" alt="Self portrait"></img>
      </div>

      <h1>Carter Simonson</h1>
      <h2 className={`${styles.subtitle}`}>
        Software Engineer specializing in web technologies
      </h2>

      <div className={styles.socialsContainer}>
        <a href="https://twitter.com/carter_simonson" target="_blank" rel="noopener">
          <span className={styles.socialIcon}>
            <TwitterIcon/>
          </span>
        </a>

        <a href="https://www.linkedin.com/in/carter-simonson-1298a5166/" target="_blank" rel="noopener">
          <span className={styles.socialIcon}>
            <LinkedinIcon/>
          </span>
        </a>

        <a href="https://github.com/CarterSimonson" target="_blank" rel="noopener">
          <span className={styles.socialIcon}>
            <GithubIcon/>
          </span>
        </a>
      </div>
    </div>
  );
}