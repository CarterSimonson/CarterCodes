import React from "react";
import JobExperience from "./JobExperience";

export default function Experience() {
  return (
    <div className="margin-bottom-xl">
      <h2 className="section-header">EXPERIENCE</h2>

      <JobExperience
        company="Zendesk"
        titles={[
          "Senior Software Engineer, Mar 2023 - Current",
          "Software Engineer, Dec 2020 - Mar 2023",
        ]}
      >
        <p>
          Focused on shipping improvements to the initial customer onboarding
          experience for Zendesk's customers with modern web tooling.
        </p>
        <ul>
          <li>
            Developed and launched an in-product support panel with Next.js,
            allowing users to access setup guide content without leaving the
            application, improving user go-live rates.
          </li>
          <li>
            Optimized shopping cart performance with lazy loading, tree shaking,
            and caching strategies, reducing the net bundle size by 70%.
          </li>
          <li>
            Designed and developed a modular, React-based product tour
            framework, enabling cross-product feature education.
          </li>
        </ul>
      </JobExperience>

      <JobExperience
        company="Mobile22"
        titles={["Software Engineer, Jan 2020 - Dec 2020"]}
      >
        <p>
          Contributed to Mobile22’s goal of creating a unified taxi management
          platform. Utilized React, Node.js, Postgres, and Jest to reliably
          build, test, and deliver web applications.
        </p>
        <ul>
          <li>
            Architected and implemented a single sign-on (SSO) mechanism across
            the application suite, reducing login friction and improving
            security.
          </li>
          <li>
            Led the development of a React-based call center application with a
            Node.js backend and PostgreSQL database, while onboarding an intern,
            delivering the product ahead of a tight deadline.
          </li>
          <li>
            Established static analysis, automated testing, and deployment
            pipelines to ensure feature stability and maintain code quality.
          </li>
        </ul>
      </JobExperience>

      <JobExperience
        company="OpenForge"
        titles={["Software Engineer (Contract), Oct 2019 - Jan 2020"]}
      >
        <p>
          Contributed to web and mobile applications utilizing Angular, Ionic,
          Node.js, and Firebase.
        </p>
        <ul>
          <li>
            Implemented biometric authentication in an Ionic-based mobile
            banking app, leveraging native APIs to enhance security and user
            experience.
          </li>
        </ul>
      </JobExperience>

      <JobExperience
        company="Leum Technologies"
        titles={["Software Engineer, Jun 2017 - Oct 2019"]}
      >
        <p>
          Architected new mobile and web applications for local businesses,
          using native mobile technologies (Java and Swift) and hybrid web
          technologies (Ionic and Angular).
        </p>
        <ul>
          <li>
            Developed a Xamarin-based mobile application for a local taxi
            company, streamlining dispatch operations, enhancing real-time
            communication, and automating reporting and payment processes.
          </li>
          <li>
            Engineered a custom microcontroller-based time clock system,
            including both hardware and software components, streamlining
            payroll processes and reducing manual data entry errors.
          </li>
        </ul>
      </JobExperience>
    </div>
  );
}
