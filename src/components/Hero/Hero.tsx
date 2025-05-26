import { BrowserRouter } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import Illustration from "../../assets/Untitled.svg";

// Custom Hero styles
import "./Hero.css";

export function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
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
      <div className="hero-text">
        <motion.div variants={itemVariants}>
          <p>Hello 👋, my name is</p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h1>Mihailo Stojkovic</h1>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h3>Software Engineer</h3>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="small-resume">
            I am a software engineer specialized in building exceptional digital experiences.
            <br />
            Currently i am focused on building accessible, human-centered products in
            <br />
            cutting edge technologies.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <BrowserRouter>
            <NavHashLink 
              smooth 
              to="#contact" 
              className="button"
            >
              Contact
            </NavHashLink>
          </BrowserRouter>
        </motion.div>
      </div>
      
      <motion.div 
        className="hero-image"
        variants={{
          hidden: { x: 50, opacity: 0 },
          visible: { 
            x: 0, 
            opacity: 1,
            transition: { delay: 0.8, duration: 0.6 }
          }
        }}
      >
        <img src={Illustration} alt="Illustration" />
      </motion.div>
    </motion.section>
  );
}