"use client";
import React from 'react';
import styles from './Header.module.css';
import { useFadeInAnimation } from '../../hooks/useAnimation';

const Header = () => {
  const ref = useFadeInAnimation();

  return (
    <header className={styles.header} ref={ref}>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
