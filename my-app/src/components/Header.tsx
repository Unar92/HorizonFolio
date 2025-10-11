'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.header')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className="header">
        <Link href="/" className="logo">
          <Image 
            src="/assets/img/logo.png"
            alt="logo" 
            width={150}
            height={50}
            priority
          />
        </Link>
        <a 
          href="https://wa.me/447492262894" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-icon"
          aria-label="Contact us on WhatsApp"
        >
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.607 2.137 8.055L.04 31.96l8.055-2.098A15.938 15.938 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.36c-2.48 0-4.906-.689-7.02-1.992l-.504-.298-5.22 1.36 1.392-5.088-.328-.52A13.3 13.3 0 012.64 16c0-7.357 5.983-13.34 13.34-13.34 7.357 0 13.34 5.983 13.34 13.34 0 7.357-5.983 13.36-13.32 13.36zm7.309-9.98c-.4-.2-2.368-1.168-2.735-1.301-.368-.133-.636-.2-.904.2-.268.4-1.037 1.301-1.271 1.569-.234.268-.469.301-.869.1-.4-.2-1.688-.622-3.215-1.984-1.188-1.06-1.99-2.368-2.224-2.768-.234-.4-.025-.616.176-.816.18-.18.4-.469.601-.703.2-.234.268-.4.4-.668.133-.268.067-.502-.033-.703-.1-.2-.904-2.18-1.238-2.984-.334-.804-.668-.668-.904-.668h-.769c-.268 0-.702.1-1.07.502-.368.4-1.404 1.37-1.404 3.35s1.437 3.884 1.637 4.152c.2.268 2.801 4.286 6.788 6.01.948.401 1.688.636 2.266.836.952.3 1.817.258 2.501.157.762-.117 2.368-.969 2.702-1.904.334-.936.334-1.738.234-1.904-.1-.167-.368-.268-.769-.469z" 
              fill="currentColor"
            />
          </svg>
        </a>
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="dropdown-nav">
          {menuItems.map((item, index) => (
            <Link
              key={item.path}
              href={item.path}
              className="dropdown-item"
              onClick={closeMenu}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Header;
