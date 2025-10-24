import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import "./Hero.css";

const Illustration = "/assets/Untitled.svg";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typewriterText, setTypewriterText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Software Engineer";

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= fullText.length) {
          setTypewriterText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          // Hide cursor after typing is complete
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, 100); // Adjust speed here (lower = faster)

      return () => clearInterval(typeInterval);
    }, 1500); // Delay before starting typewriter effect

    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.15
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: { 
      x: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        delay: 0.6, 
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <motion.section 
      id="home" 
      className="hero-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="hero-bg-elements">
        <motion.div 
          className="hero-orb hero-orb-1"
          animate={{
            x: mousePosition.x * 0.1,
            y: mousePosition.y * 0.1,
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.1 }}
        />
        <motion.div 
          className="hero-orb hero-orb-2"
          animate={{
            x: mousePosition.x * -0.05,
            y: mousePosition.y * -0.05,
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.1 }}
        />
        <motion.div 
          className="hero-orb hero-orb-3"
          animate={{
            x: mousePosition.x * 0.08,
            y: mousePosition.y * 0.08,
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.1 }}
        />
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <motion.div variants={itemVariants} className="hero-greeting">
            <span className="wave">👋</span>
            <p>Hello, my name is</p>
          </motion.div>
          
          <motion.div variants={titleVariants} className="hero-name">
            <h1>
              <span className="name-highlight">Mihailo</span>
              <br />
              <span className="name-primary">Stojkovic</span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hero-role">
            <h3>
              <span className="role-text">{typewriterText}</span>
              {showCursor && (
                <motion.span 
                  className="role-cursor"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </h3>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hero-description">
            <p>
              I am a software engineer specialized in building 
              <span className="highlight-text"> exceptional digital experiences</span>.
              Currently focused on creating accessible, human-centered products using
              <span className="highlight-text"> cutting-edge technologies</span>.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-actions">
            <BrowserRouter>
              <NavHashLink 
                smooth 
                to="#contact" 
                className="hero-button primary"
              >
                <span>Get In Touch</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavHashLink>
              <NavHashLink 
                smooth 
                to="#portfolio" 
                className="hero-button secondary"
              >
                <span>View My Work</span>
              </NavHashLink>
            </BrowserRouter>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-social">
            <div className="social-links">
              <a href="https://github.com/mihailokg95" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mihailo-stojkovic/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:mstojkovic955@gmail.com" className="social-link" aria-label="Email" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-image"
          variants={imageVariants}
          animate={floatingAnimation}
        >
          <div className="image-container">
            <div className="image-glow"></div>
            <img src={Illustration} alt="Mihailo Stojkovic - Software Engineer" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div 
          className="scroll-line"
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span>Scroll to explore</span>
      </motion.div>
    </motion.section>
  );
}