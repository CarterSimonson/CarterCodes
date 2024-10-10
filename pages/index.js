import Head from "next/head";

import styles from "styles/Home.module.scss";

import Intro from "components/Intro";
import About from "components/About";
import Projects from "components/Projects";
import Experience from "components/Experience";
import Skills from "components/Skills";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Education from "components/Education";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carter Simonson - Portfolio</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
