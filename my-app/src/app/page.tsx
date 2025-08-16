'use client';

import { useState, useEffect, useRef } from 'react';
import Section from '@/components/Section';
import Popup from '@/components/Popup';
import PopupContent from '@/components/PopupContent';
import { popupData } from '@/data/popupData';

const sections = [
  {
    number: '01',
    sectionId: 'section-1',
    title: 'Custom Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    imageAlt: 'Web Development'
  },
  {
    number: '02',
    sectionId: 'section-2',
    title: 'E-Commerce Solutions',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    imageAlt: 'E-Commerce'
  },
  {
    number: '03',
    sectionId: 'section-3',
    title: 'Our Recent Projects',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    imageAlt: 'Our Projects'
  },
  {
    number: '04',
    sectionId: 'section-4',
    title: "Let's Build Something Great",
    imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    imageAlt: 'Contact Us'
  }
];

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle horizontal scrolling with mouse wheel
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    e.preventDefault();
    
    const scrollAmount = e.deltaY || e.deltaX;
    containerRef.current.scrollLeft += scrollAmount;
  };

  // Handle keyboard arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      
      const scrollAmount = window.innerWidth; // Scroll one viewport width
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault(); // Prevent default scroll behavior
        
        const direction = e.key === 'ArrowRight' ? 1 : -1;
        const targetScroll = containerRef.current.scrollLeft + (scrollAmount * direction);
        
        containerRef.current.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    };

    // Add the event listener to the document instead of window
    document.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle drag scrolling
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.classList.add('dragging');
  };

  const handleMouseUp = () => {
    if (!containerRef.current) return;
    setIsDragging(false);
    containerRef.current.classList.remove('dragging');
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    
    const dx = e.pageX - startX;
    containerRef.current.scrollLeft = scrollLeft - dx;
  };

  useEffect(() => {
    // Handle mouse up event outside the container
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    setSelectedSectionId(sectionId);
    setIsPopupOpen(true);
  };

  const handleCtaClick = () => {
    // Handle CTA button click
    console.log('CTA clicked for section:', selectedSectionId);
  };

  return (
    <main className="js-main-container">
      <div 
        ref={containerRef}
        className="container main-container" 
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}>
        {sections.map((section) => (
          <Section
            key={section.sectionId}
            {...section}
            onSectionClick={handleSectionClick}
          />
        ))}
      </div>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        {selectedSectionId && popupData[selectedSectionId] && (
          <PopupContent
            data={popupData[selectedSectionId]}
            onCtaClick={handleCtaClick}
          />
        )}
      </Popup>
    </main>
  );
}