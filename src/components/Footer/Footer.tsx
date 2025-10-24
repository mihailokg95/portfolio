import { motion } from "framer-motion";
import './Footer.css';

const reactIcon = '/assets/react-icon.svg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const smoothScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.footer 
      className="footer-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="footer-bg-elements">
        <div className="footer-orb footer-orb-1" />
        <div className="footer-orb footer-orb-2" />
      </div>

      <div className="footer-content">
        <div className="footer-top">
          <motion.div variants={itemVariants} className="footer-brand">
            <button 
              onClick={() => smoothScrollTo('home')} 
              className="footer-logo"
              type="button"
            >
              <span className="logo-initial">M</span>
              <span className="logo-name">ihailo</span>
            </button>
            <p className="footer-tagline">
              Building exceptional digital experiences with passion and precision.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="footer-links">
            <div className="footer-nav">
              <h4>Navigation</h4>
              <div className="nav-links">
                <button 
                  onClick={() => smoothScrollTo('home')} 
                  className="footer-link"
                  type="button"
                >
                  Home
                </button>
                <button 
                  onClick={() => smoothScrollTo('about')} 
                  className="footer-link"
                  type="button"
                >
                  About
                </button>
                <button 
                  onClick={() => smoothScrollTo('portfolio')} 
                  className="footer-link"
                  type="button"
                >
                  Projects
                </button>
                <button 
                  onClick={() => smoothScrollTo('contact')} 
                  className="footer-link"
                  type="button"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="footer-connect">
              <h4>Let's Connect</h4>
              <div className="social-links">
                <motion.a 
                  href="https://github.com/mihailokg95" 
                  className="social-link" 
                  aria-label="GitHub"
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/mihailo-stojkovic/" 
                  className="social-link" 
                  aria-label="LinkedIn"
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                
                <motion.a 
                  href="mailto:mstojkovic955@gmail.com" 
                  className="social-link" 
                  aria-label="Email"
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="footer-divider" />

        <motion.div variants={itemVariants} className="footer-bottom">
          <div className="footer-credits">
            <p>
              Coded with 
              <motion.img 
                src={reactIcon} 
                alt="React" 
                className="react-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              and <span className="heart">❤️</span> by Mihailo Stojkovic
            </p>
          </div>
          
          <div className="footer-copyright">
            <p>&copy; {currentYear} All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}