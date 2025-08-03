// hooks/useAnimation.ts
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useFadeInAnimation = (stagger = false) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: stagger ? 0.2 : 0,
      }
    );
  }, [stagger]);

  return ref;
};
