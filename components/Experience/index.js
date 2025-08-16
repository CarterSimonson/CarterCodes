import React from "react";
import JobExperience from "./JobExperience";

export default function Experience() {
  return (
    <div className="margin-bottom-xl">
      <h2 className="section-header">EXPERIENCE</h2>

      <JobExperience
        company="Samsara"
        titles={["Senior Software Engineer, Dec 2024 - Present"]}
      >
        <ul>
          <li>
            Contributing to safety-critical systems on Samsara's Worker Safety
            team
          </li>
        </ul>
      </JobExperience>

      <JobExperience
        company="Zendesk"
        titles={[
          "Senior Software Engineer, Mar 2023 - Dec 2024",
          "Software Engineer, Dec 2020 - Mar 2023",
        ]}
      >
        <ul>
          <li>
            Launched a React-based in-product onboarding and help wizard,
            driving an increase in trial customer go-live rate by 4%.
          </li>
          <li>
            Optimized frontend shopping cart performance with lazy loading, tree
            shaking, and caching strategies, reducing net bundle size by 70%.
          </li>
          <li>
            Shipped a modular React framework for in-product onboarding tours,
            reducing friction for new customers.
          </li>
        </ul>
      </JobExperience>

      <JobExperience
        company="Mobile22"
        titles={["Software Engineer, Jan 2020 - Dec 2020"]}
      >
        <ul>
          <li>
            Integrated a single sign-on (SSO) mechanism across the application
            suite, reducing login friction while improving security.
          </li>
          <li>
            Architected and delivered a full-stack call center application
            (React, Node.js, Postgres) while mentoring an intern, delivering
            ahead of a tight deadline.
          </li>
        </ul>
      </JobExperience>

      <JobExperience
        company="OpenForge"
        titles={["Software Engineer (Contract), Oct 2019 - Jan 2020"]}
      >
        <ul>
          <li>
            Implemented biometric authentication in an Ionic-based mobile
            banking application, leveraging native APIs to enhance security and
            user experience.
          </li>
        </ul>
      </JobExperience>

      <JobExperience
        company="Leum Technologies"
        titles={["Software Engineer, Jun 2017 - Oct 2019"]}
      >
        <ul>
          <li>
            Developed a cross-platform mobile application for a local taxi
            company, streamlining dispatch, communication, and payment
            automation; processing 2000+ rides daily across 20+ cities.
          </li>
          <li>
            Built a custom cross-platform employee app for a local taxi company,
            featuring employee scheduling, messaging, and video assessments for
            250+ employees.
          </li>
        </ul>
      </JobExperience>
    </div>
  );
}
