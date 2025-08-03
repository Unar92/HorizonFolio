"use client";
import React from 'react';
import styles from './About.module.css';
import { useFadeInAnimation } from '../../hooks/useAnimation';

const About = () => {
  const ref = useFadeInAnimation();

  return (
    <section id="about" className={styles.about} ref={ref}>
      <h2>About Me</h2>
      <p>
        I am a passionate web developer with experience in creating modern and
        responsive web applications. I specialize in front-end technologies
        like React and Next.js, and I am always eager to learn new things.
      </p>
    </section>
  );
};

export default About;
