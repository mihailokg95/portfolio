import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import { motion } from 'framer-motion';

import './Header.css';

const CurriculumVitae = '/assets/cv_ms.pdf';

export function Header() {
  const [isActive, setActive] = useState(false);
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    const html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
    setIsDark(!isDark);
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <header className="header-container">
      <Router>
        <HashLink smooth to="#home" className="header-logo">
          <span className="logo-initial">M</span>
          <span className="logo-name">ihailo</span>
        </HashLink>
        
        <nav className={`header-nav ${isActive ? 'header-nav-active' : ''}`}>
          <NavHashLink 
            smooth 
            to="#home" 
            onClick={closeMenu}
            className="nav-link"
          >
            Home
          </NavHashLink>
          <NavHashLink 
            smooth 
            to="#about" 
            onClick={closeMenu}
            className="nav-link"
          >
            About me
          </NavHashLink>
          <NavHashLink 
            smooth 
            to="#portfolio" 
            onClick={closeMenu}
            className="nav-link"
          >
            Projects
          </NavHashLink>
          <NavHashLink 
            smooth 
            to="#contact" 
            onClick={closeMenu}
            className="nav-link"
          >
            Contact
          </NavHashLink>
          
          <div className="theme-toggle-container">
            <motion.button
              className="theme-toggle"
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <motion.div
                className="theme-toggle-indicator"
                animate={{
                  x: isDark ? 0 : 20
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
              />
            </motion.button>
          </div>
          
          <motion.a 
            href={CurriculumVitae} 
            download 
            className="cv-button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span>Download CV</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="7,10 12,15 17,10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </nav>

        <motion.div
          className={`mobile-menu-toggle ${isActive ? 'mobile-menu-active' : ''}`}
          onClick={() => setActive(!isActive)}
          whileTap={{ scale: 0.95 }}
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </motion.div>
      </Router>
    </header>
  );
}