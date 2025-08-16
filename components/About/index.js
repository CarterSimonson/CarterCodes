import React from "react";

export default function About() {
  return (
    <div className="margin-bottom-xl">
      <h2 className="section-header">ABOUT ME</h2>
      <p>
        My introduction to software development came as a byproduct of my
        childhood passion for video games. Driven by curiosity, I set out to
        learn how the games I was sinking all my time into were created. I was
        (and still am) fascinated by the ability to create something cool out of
        nothing more than time spent tinkering in a code editor.
        <br />
        <br />
        With that limited programming experience and an eagerness to learn, I
        landed a position at a local software company,{" "}
        <a href="https://www.leumtech.com/" target="_blank" rel="noopener">
          Leum Technologies
        </a>
        . This role motivated me to expand my skills, delving into web
        development, API architecture, and mobile development to solve impactful
        small-business problems with software.
        <br />
        <br />
        I've been very fortunate to have the opportunity to contribute to some
        very interesting projects since:
        <br />
        <ul>
          <li>
            Working with a small team to bootstrap a taxi management platform
            SaaS at Mobile22
          </li>
          <li>
            Optimizing customer onboarding experiences on Zendesk's Growth and
            Monetization team
          </li>
          <li>
            Most recently, contributing to safety-critical systems on Samsara's
            Worker Safety team
          </li>
        </ul>
      </p>
    </div>
  );
}
