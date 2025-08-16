import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { PopupData } from '../data/popupData';

interface SectionProps {
  number: string;
  sectionId: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  onSectionClick: (sectionId: string) => void;
}

const Section = ({ 
  number, 
  sectionId,
  title, 
  imageUrl, 
  imageAlt,
  onSectionClick 
}: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  

  // Separate useEffect for horizontal scroll to ensure DOM is ready
 

  const handleClick = () => {
    onSectionClick(sectionId);
  };

  return (
    <div 
      className={`main-section section ${sectionId}`} 
      ref={sectionRef}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <div className="content">
        <span className="section-number">{number}</span>
        <h1 className="main-title">{title}</h1>
        <div className="section-image">
          <Image 
            src={imageUrl} 
            alt={imageAlt}
            width={450}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Section;
