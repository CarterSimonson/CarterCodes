import React from 'react';
import { projectImage } from './styles.module.scss'

export default function Projects() {
  return (
    <div className='margin-bottom-xl'>
      <h2 className='section-header'>PROJECTS</h2>
      <img className={projectImage} src='/assets/projects/kenshimap.webp' alt='Kenshi Map Screenshot'/>
      <h3>Kenshi Interactive Map</h3>
      <p>
        An interactive map application for the video game Kenshi by Lo-Fi Games. This originated in early 2019 as a weekend project which I built using
        Angular (Ionic), Leaflet.js, and Firebase. More recently I've rewritten it in React (Ionic) and have implemented a WebGL renderer to increase performance.
        {' '}<a href='https://kenshimap.com' target='_blank' rel='noopener'>It can be found here</a>.
      </p>
    </div>
  );
}