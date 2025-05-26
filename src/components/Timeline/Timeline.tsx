import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/projects';
import ProjectCard from '../Project-Card/ProjectCard';
import type { Project } from '../../@types/projects';
import { useModal } from '../../context/ModalContext';
import Modal from '../Modal/Modal';
import ProjectShowcase from '../Project-Showcase/ProjectShowcase';

gsap.registerPlugin(ScrollTrigger);

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  const { openModal, setCurrentProjectId } = useModal();
const { currentProjectId } = useModal();
  
  const currentProject = projects.find(p => p.id === currentProjectId);

  const handleClick = (project: Project) => {
    setCurrentProjectId(project.id);
    openModal();
  };
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const sections = gsap.utils.toArray<HTMLElement>('.timeline-section');
    
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        toggleClass: { targets: section, className: "active" }
      });
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="timeline-container py-20" id="portfolio" >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of innovative solutions across various technologies and domains
          </p>
        </motion.div>
      </div>
      
      <div className="relative">
        <div ref={timelineRef} className="timeline-line">
          <motion.div 
            className="h-full w-full bg-gradient-to-b from-[var(--accent-cyan)] to-[var(--accent-red)]"
            style={{ height: lineHeight, originY: 0 }}
          />
        </div>
        
        {projects.map((project, index) => (
          <div key={project.id} className="timeline-section md:px-40">
            <ProjectCard project={project} index={index} openProjectModal={handleClick} />
          </div>
        ))}
      <Modal>
        {currentProject && <ProjectShowcase project={currentProject} />}
      </Modal>
      </div>
    </div>
  );
};

export default Timeline;