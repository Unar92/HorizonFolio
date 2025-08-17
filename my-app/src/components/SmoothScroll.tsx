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

    const content = document.querySelector('.main-container');
    if (!content) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      wrapper: window,
      content: content as HTMLElement,
      orientation: 'horizontal',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      smoothTouch: true,
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
      gsap.ticker.remove(scrollFn);
    };
  }, [isPaused, isMobile]);

  useEffect(() => {
    let isScrolling = false;
    const scrollTimeout = 1200;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling || isMobile || !lenisRef.current) return;

      const sections = document.querySelectorAll('.main-section');
      if (sections.length === 0) return;

      let minDistance = Infinity;
      let currentSectionIndex = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.left);
        if (distance < minDistance) {
          minDistance = distance;
          currentSectionIndex = index;
        }
      });

      const handleScroll = (targetIndex: number) => {
        if (targetIndex < 0 || targetIndex >= sections.length) return;

        isScrolling = true;
        const targetSection = sections[targetIndex] as HTMLElement;
        lenisRef.current?.scrollTo(targetSection, {
          offset: 0,
          duration: 1.0,
          easing: (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x)), // easeOutExpo
        });

        setTimeout(() => {
          isScrolling = false;
        }, scrollTimeout);
      };

      if (e.key === 'ArrowLeft') {
        if (currentSectionIndex > 0) {
          handleScroll(currentSectionIndex - 1);
        } else {
          // If at the first section, explicitly scroll to the beginning
          handleScroll(0);
        }
      } else if (e.key === 'ArrowRight') {
        if (currentSectionIndex < sections.length - 1) {
          handleScroll(currentSectionIndex + 1);
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