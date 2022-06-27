import React from 'react';
import styles from './styles.module.scss';

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <p>© Carter Simonson 2021</p>
        <span className={styles.divider}>|</span>
        <p>Developed with <span className={styles.heartIcon}>❤</span> using Next.js</p>
      </footer>
    );
}