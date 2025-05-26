import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from './../../@types/projects';
import { ExternalLink, Eye } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  openProjectModal: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, openProjectModal, index }) => {
  const isEven = index % 2 === 0;
  const alignmentClass = isEven ? 'md:ml-auto md:mr-28' : 'md:mr-auto md:ml-28';
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={`cursor-pointer project-card glassmorphism rounded-xl overflow-hidden w-full min-w-[225px] max-w-[80%] md:max-w-[50%] ${alignmentClass} group`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative" onClick={() => openProjectModal(project)}>
        <div className="overflow-hidden">
          <img 
            src={project.image}     
            alt={project.title} 
            className="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" 
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70" />
        <div className="absolute top-4 right-4 bg-[#1a1a1a] backdrop-opacity-10 px-3 py-1 rounded-full text-[16px]">
          {project.year}
        </div>
      </div>
      
      <div className="p-6 transition-colors duration-300 group-hover:text-[rgb(0,200,255)]">
        <h3 className="text-[24px] font-bold mb-2 transition-colors duration-300">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-[16px] transition-colors duration-300 group-hover:text-gray-200">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="text-[12px] px-3 py-1 rounded-full bg-[#1a1a1a] backdrop-opacity-10 border-gray-700 border transition-colors duration-300 group-hover:border-[rgb(0,200,255)] group-hover:text-gray-200"
            >
              {tech.name}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <motion.button
            onClick={() => openProjectModal(project)}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer justify-center text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Eye size={16} />
            <span>View More</span>
          </motion.button>

          <motion.a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;