import React from 'react';
import styles from 'styles/Home.module.scss'
import { jobExperience } from 'config/job-experience';
import JobExperience from './JobExperience';

export default function Experience() {
  return (
    <div className={`${styles.experienceSection} margin-bottom-xl`}>
      <h2 className="section-header">EXPERIENCE</h2>

      { jobExperience.map((job, index) => <JobExperience key={index} {...job} />) }
    </div>
  );
}