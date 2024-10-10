import React from "react";
import { projectImage } from "./styles.module.scss";
import Link from "next/link";

function Project({ title, img, link, alt, children, className }) {
  return (
    <div className={className}>
      <Link href={link} target="_blank" rel="noopener">
        <img className={projectImage} src={img} alt={alt} />
      </Link>

      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="margin-bottom-xl">
      <h2 className="section-header">PROJECTS</h2>

      <Project
        title="Chopbop"
        img="/assets/projects/chopbop.webp"
        link="https://chopbop.com"
        alt="Chopbop Screenshot"
        className="margin-bottom-lg"
      >
        <p>
          Chopbop is a recipe management application that allows users to save
          and manage their recipes without the hastle of excessive popups, ads,
          and filler text. Users are able to save, sync, and customize their
          recipe collection across all of their devices. I built the mobile app
          on React Native paired with a Firebase backend.{" "}
          <a href="https://chopbop.com" target="_blank" rel="noopener">
            It can be found here
          </a>
          .
        </p>
      </Project>

      <Project
        title="Kenshi Interactive Map"
        img="/assets/projects/kenshimap.webp"
        link="https://kenshimap.com"
        alt="Kenshi Map Screenshot"
      >
        <p>
          I built Kenshi Interactive Map to have an easy-to-use reference guide
          for finding in-game items and locations. It's powered by React,
          Firebase, and MapLibre and has grown to 10,000 monthly users since
          launch!{" "}
          <a href="https://kenshimap.com" target="_blank" rel="noopener">
            It can be found here
          </a>
          .
        </p>
      </Project>
    </div>
  );
}
