import styles from '@/styles/Navigation.module.css';

interface NavigationProps {
  onScroll: (direction: 'next' | 'prev') => void;
}

const Navigation = ({ onScroll }: NavigationProps) => {
  return (
    <div className={styles.navigation}>
      <button 
        className={`${styles.navButton} ${styles.prevButton}`} 
        onClick={() => onScroll('prev')}
      >
        &#8593;
      </button>
      <button 
        className={`${styles.navButton} ${styles.nextButton}`} 
        onClick={() => onScroll('next')}
      >
        &#8595;
      </button>
    </div>
  );
};

export default Navigation;
