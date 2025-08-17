'use client';

import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

interface SmoothScrollProps {
  children: React.ReactNode;
  isPaused?: boolean;
}

const SmoothScroll = ({ children, isPaused = false }: SmoothScrollProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isPaused || isMobile) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      orientation: 'horizontal',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const scrollFn = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      // Clean up GSAP ticker
      gsap.ticker.remove((time) => {
        if (lenisRef.current) {
          lenisRef.current.raf(time * 1000);
        }
      });
    };
  }, [isPaused, isMobile]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMobile) {
        // Handle vertical scrolling on mobile
        const sections = document.querySelectorAll('.main-section');
        const currentSection = Array.from(sections).findIndex(section => {
          const rect = section.getBoundingClientRect();
          return rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3;
        });

        if (e.key === 'ArrowUp' && currentSection > 0) {
          sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
        } else if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
          sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
        }
      } else if (lenisRef.current) {
        // Handle horizontal scrolling on desktop
        const currentScroll = lenisRef.current.progress * document.documentElement.scrollWidth;
        
        if (e.key === 'ArrowLeft') {
          lenisRef.current.scrollTo(currentScroll - window.innerWidth);
        } else if (e.key === 'ArrowRight') {
          lenisRef.current.scrollTo(currentScroll + window.innerWidth);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobile]);

  return <>{children}</>;
};

export default SmoothScroll;