import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.background} />
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}
