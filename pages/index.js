import Head from 'next/head';

import Footer from 'components/Footer';
import Badge from 'components/Badge';

import styles from 'styles/Home.module.scss'

import { jobExperience } from 'config/job-experience';
import { frameworks, languages } from 'config/skills';
import ContactForm from 'components/ContactForm';
import TwitterIcon from 'components/TwitterIcon';
import LinkedinIcon from 'components/LinkedinIcon';
import GithubIcon from 'components/GithubIcon';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carter Simonson - Portfolio</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.startSection}>
          <div className={styles.imageContainer}>
            <img src="assets/mugshot.webp" alt="Self portrait"></img>
          </div>

          <h1 className={styles.title}>
            Carter Simonson
          </h1>
          <h2 className={`${styles.subtitle}`}>Software Engineer specializing in web technologies</h2>

          <div className={styles.socialsContainer}>
            <a href="https://twitter.com/carter_simonson" target="_blank" rel="noopener">
              <span className={styles.socialIcon}><TwitterIcon/></span>
            </a>

            <a href="https://www.linkedin.com/in/carter-simonson-1298a5166/" target="_blank" rel="noopener">
              <span className={styles.socialIcon}><LinkedinIcon/></span>
            </a>

            <a href="https://github.com/CarterSimonson" target="_blank" rel="noopener">
              <span className={styles.socialIcon}><GithubIcon/></span>
            </a>
          </div>
        </div>

        <div className="margin-bottom-xl">
          <h2 className="section-header">ABOUT ME</h2>
          <p>
            My introduction to software development came as a byproduct of my obsession with video games as a child.
            It was a goal of mine to create a game like those that I was sinking all of my free time into.
            This led me to begin tinkering with Python when I was in middle school.
            I was (and still am) fascinated by the ability to create something cool out of nothing other than time spent tinkering away in a code editor.
            <br/>
            <br/>
            With that limited programming experience and an eagerness to learn in hand,
            I was offered a part-time position helping out at a local software company named <a href="https://www.leumtech.com/" target="_blank" rel="noopener">Leum Technologies</a>.
            At this new position, I was motivated to learn new things such as web development, API architecture, and mobile development.
            <br/>
            <br/>
            After graduating high school I decided to forgo pursuing formal education in the field, at least for the time being.
            I felt competent enough in my abilities to dive head-on into a full-time software engineering position.
            I made the move to Madison, WI, and have been working full-time ever since - starting with a position
            at <a href="https://www.mobile22.com/" target="_blank" rel="noopener">Mobile22</a> and more recently landing
            a front-end development position at <a href="https://www.zendesk.com/" target="_blank" rel="noopener">Zendesk</a>.
          </p>
        </div>

        <div className={`${styles.projectsSection} margin-bottom-xl`}>
          <h2 className="section-header">PROJECTS</h2>
          <img src="/assets/projects/kenshimap.webp" alt="Kenshi Map Screenshot"/>
          <h3>Kenshi Interactive Map</h3>
          <p>
            An interactive map application for the video game Kenshi by Lo-Fi Games. This originated in early 2019 as a weekend project which I built using
            Angular (Ionic), Leaflet.js, and Firebase. More recently I've rewritten it in React (Ionic) and have implemented a WebGL renderer to increase performance.
            {' '}<a href="https://kenshimap.com" target="_blank" rel="noopener">It can be found here</a>.
          </p>
        </div>

        <div className={`${styles.experienceSection} margin-bottom-xl`}>
          <h2 className="section-header">EXPERIENCE</h2>

          {
            jobExperience.map(job => <div key={job.company}>
              <h3 className={styles.company}>{ job.company }</h3>
              <div className={styles.details}>{ job.title }, { job.dates }</div>
              <p>{ job.description }</p>
            </div>)
          }
        </div>

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

        <div className="margin-bottom-xl">
          <h2 className="section-header">Contact</h2>
          <ContactForm/>
      </div>  
      </main>
        
      <Footer />
    </div>
  )
}
