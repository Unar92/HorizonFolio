"use client";
import React from 'react';
import styles from './Projects.module.css';
import { useFadeInAnimation } from '../../hooks/useAnimation';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of the first project.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of the second project.',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of the third project.',
    link: '#',
  },
];

const Projects = () => {
  const ref = useFadeInAnimation(true);

  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectGrid} ref={ref}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
