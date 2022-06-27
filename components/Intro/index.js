import React from 'react';

import TwitterIcon from './TwitterIcon';
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';

import { introSection, imageContainer, socialsContainer } from './styles.module.scss';
import IconLink from './IconLink';

const LINKS = Object.freeze({
  twitter: 'https://twitter.com/carter_simonson',
  linkedin: 'https://www.linkedin.com/in/carter-simonson-1298a5166/',
  github: 'https://github.com/CarterSimonson'
});

export default function Intro() {
  return (
    <div className={introSection}>
      <div className={imageContainer}>
        <img src='assets/mugshot.webp' alt='Self portrait'></img>
      </div>

      <h1>Carter Simonson</h1>
      <h2>
        Software Engineer specializing in web technologies
      </h2>

      <div className={socialsContainer}>
        <IconLink href={LINKS.twitter}>
          <TwitterIcon />
        </IconLink>

        <IconLink href={LINKS.linkedin}>
          <LinkedinIcon />
        </IconLink>

        <IconLink href={LINKS.github}>
          <GithubIcon />
        </IconLink>
      </div>
    </div>
  );
}