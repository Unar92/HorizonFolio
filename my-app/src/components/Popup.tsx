import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup = ({ isOpen, onClose, children }: PopupProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Show overlay first
      gsap.set(overlayRef.current, {
        display: 'block',
        opacity: 0
      });
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3
      });

      // Animate container
      gsap.fromTo(containerRef.current, 
        {
          y: '100%',
          scale: 0.7,
          opacity: 0
        },
        {
          duration: 0.7,
          y: '0%',
          scale: 1,
          opacity: 1,
          visibility: 'visible',
          ease: 'power2.inOut'
        }
      );
    } else {
      // Animate container out
      gsap.to(containerRef.current, {
        duration: 0.7,
        y: '100%',
        scale: 0.7,
        opacity: 0,
        visibility: 'hidden',
        ease: 'power2.inOut'
      });

      // Fade out overlay
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          gsap.set(overlayRef.current, {
            display: 'none'
          });
        }
      });
    }
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <>
      <div 
        className="popup-overlay" 
        ref={overlayRef} 
        onClick={handleOverlayClick}
      />
      <div className="popup-container" ref={containerRef}>
        <div className="popup-content">
          {children}
        </div>
        <button 
          className="popup-close" 
          onClick={onClose}
          aria-label="Close popup"
        />
      </div>
    </>
  );
};

export default Popup;
