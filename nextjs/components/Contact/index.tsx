"use client";
import React from 'react';
import styles from './Contact.module.css';
import { useFadeInAnimation } from '../../hooks/useAnimation';

const Contact = () => {
  const ref = useFadeInAnimation();

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <h2>Contact Me</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
