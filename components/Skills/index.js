import React from "react";
import { badgeContainer } from "./styles.module.scss";
import { frameworks, languages } from "config/skills";
import Badge from "./Badge";

export default function Skills() {
  return (
    <div className="margin-bottom-xl">
      <h2 className="section-header">SKILLS</h2>
      <h3>Frameworks and Tools</h3>
      <div className={badgeContainer}>
        {frameworks.map((skill, index) => (
          <Badge {...skill} key={index}>
            {skill.name}
          </Badge>
        ))}
      </div>

      <h3>Languages</h3>
      <div className={badgeContainer}>
        {languages.map((skill, index) => (
          <Badge {...skill} key={index}>
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
