import React from 'react';
import styles from 'styles/Home.module.scss'
import { frameworks, languages } from 'config/skills';
import Badge from './Badge';

export default function Skills() {
  return (
    <div className={`${styles.skillsSection} margin-bottom-xl`}>
      <h2 className="section-header">SKILLS</h2>
      <h3>Frameworks and Tools</h3>
      <div className={styles.skillBadgeContainer}>
        {
          frameworks.map(skill => <Badge className={styles.skillBadge} icon={skill.icon} color={skill.color} href={skill.href} key={skill.name}>{ skill.name }</Badge>)
        }
      </div>

      <h3>Languages</h3>
      <div className={styles.skillBadgeContainer}>
        {
          languages.map(skill => <Badge className={styles.skillBadge} icon={skill.icon} color={skill.color} href={skill.href} key={skill.name}>{ skill.name }</Badge>)
        }
      </div>
    </div>
  );
}