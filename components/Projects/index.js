import React from 'react';
import { projectImage } from './styles.module.scss'

function Project({ title, img, alt, children, className }) {
  return (
    <div className={className}>
        <img className={projectImage} src={img} alt={alt} />
        <h3>{ title }</h3>
        { children }
    </div>
  );
}

export default function Projects() {
  return (
    <div className='margin-bottom-xl'>
      <h2 className='section-header'>PROJECTS</h2>

      <Project
        title='Kenshi Interactive Map'
        img='/assets/projects/kenshimap.webp'
        alt='Kenshi Map Screenshot'
        className='margin-bottom-lg'
      >
        <p>
          An interactive map application for the video game Kenshi by Lo-Fi Games. This originated in early 2019 as a weekend project which I built using
          Angular (Ionic), Leaflet.js, and Firebase. More recently I've rewritten it in React (Ionic) and have implemented a WebGL renderer to increase performance.
          {' '}<a href='https://kenshimap.com' target='_blank' rel='noopener'>It can be found here</a>.
        </p>
      </Project>

      <Project
        title='URL Shortener'
        img='/assets/projects/miniurl.webp'
        alt='URL Shortener Screenshot'
      >
        <p>
          A basic URL shortener implementation written with Flask, SQLite, and vanilla HTML/CSS/JS. The service is configured with Github actions to automatically build and deploy
          to a DigitalOcean Droplet on each commit. My goal with this project was to refresh my knowledge of Python, SQL, Docker, Nginx, and Github Actions.
          A live demo can be found at <a href='https://shorten.minidev.io' target='_blank' rel='noopener'>shorten.minidev.io</a>.
          The source code can be found <a href='https://github.com/CarterSimonson/miniurl' target='_blank' rel='noopener'>here</a>.
        </p>
      </Project>
    </div>
  );
}