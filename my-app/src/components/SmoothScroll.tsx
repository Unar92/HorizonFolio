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
    const keyState: { [key: string]: boolean } = {};
    let animationFrameId: number;

    const scrollLoop = () => {
      if (isMobile) return;

      let deltaY = 0;
      if (keyState['ArrowLeft']) {
        deltaY = -40; // Simulate wheel delta (vertical gesture for horizontal scroll)
      }
      if (keyState['ArrowRight']) {
        deltaY = 40; // Simulate wheel delta
      }

      if (deltaY !== 0) {
        // Dispatch a synthetic wheel event to be handled by Lenis
        const wheelEvent = new WheelEvent('wheel', {
          deltaX: 0,
          deltaY: deltaY,
          bubbles: true,
        });
        window.dispatchEvent(wheelEvent);
      }

      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMobile || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return;
      e.preventDefault(); // Prevent default browser action for arrow keys

      if (!keyState[e.key]) {
        keyState[e.key] = true;
        // Start the animation loop only when the first arrow key is pressed
        if (Object.keys(keyState).length === 1) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(scrollLoop);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (isMobile || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return;
      
      delete keyState[e.key];
      // Stop the animation loop when the last arrow key is released
      if (Object.keys(keyState).length === 0) {
        cancelAnimationFrame(animationFrameId);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  return <>{children}</>;
};

export default SmoothScroll;