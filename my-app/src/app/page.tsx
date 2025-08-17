'use client';

import { useState, useEffect, useRef } from 'react';
import Section from '@/components/Section';
import Popup from '@/components/Popup';
import PopupContent from '@/components/PopupContent';
import { popupData } from '@/data/popupData';
import SmoothScroll from '@/components/SmoothScroll';

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
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSectionClick = (sectionId: string) => {
    setSelectedSectionId(sectionId);
    setIsPopupOpen(true);
  };

  const handleCtaClick = () => {
    // Handle CTA button click
    console.log('CTA clicked for section:', selectedSectionId);
  };

  return (
    <SmoothScroll isPaused={isPopupOpen}>
      <main className="js-main-container">
        <div 
          ref={containerRef}
          className="container main-container" 
        >
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
    </SmoothScroll>
  );
}