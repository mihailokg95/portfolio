import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from './../../@types/projects';
import { ExternalLink, Eye, Calendar, Code2 } from 'lucide-react';
import "./project-card.css"

interface ProjectCardProps {
  project: Project;
  index: number;
  openProjectModal: (project: Project) => void;
  disableViewportAnimation?: boolean; // New prop to disable framer motion animations
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  openProjectModal, 
  index, 
  disableViewportAnimation = false 
}) => {
  const isEven = index % 2 === 0;
  const alignmentClass = isEven ? 'md:ml-auto md:mr-28' : 'md:mr-auto md:ml-28';
  
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.15,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  const contentVariants = {
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" as const }
    }
  };

  const animationProps = disableViewportAnimation ? {
    whileHover: "hover"
  } : {
    variants: cardVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.3 },
    whileHover: "hover"
  };

  return (
    <motion.div 
      className={`cursor-pointer project-card relative rounded-2xl overflow-hidden w-full min-w-[280px] max-w-[85%] md:max-w-[50%] ${alignmentClass} group`}
      {...animationProps}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl group-hover:border-cyan-400/30 transition-all duration-500" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-transparent to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
      <div className="relative z-10" onClick={() => openProjectModal(project)}>
        <div className="relative overflow-hidden rounded-t-2xl">
          <motion.img 
            src={project.image}     
            alt={project.title} 
            className="w-full h-64 object-cover" 
            variants={imageVariants}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 right-4 backdrop-blur-md bg-black/40 border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 group-hover:border-cyan-400/50 transition-all duration-300">
            <Calendar size={14} className="text-gray-300" />
            <span className="text-sm font-medium text-white">{project.year}</span>
          </div>
          <div className="absolute top-4 left-4 backdrop-blur-md bg-cyan-400/20 border border-cyan-400/30 px-3 py-1 rounded-full">
            <Code2 size={14} className="text-cyan-300" />
          </div>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
            <div className="flex gap-4">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  openProjectModal(project);
                }}
                className="cursor-pointer backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 rounded-full p-3 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={20} className="text-white" />
              </motion.button>
              <motion.a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-pink-400/50 rounded-full p-3 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={20} className="text-white" />
              </motion.a>
            </div>
          </div>
        </div>
        <motion.div 
          className="p-6 relative"
          variants={contentVariants}
        >
          <h3 className="text-3xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
            {project.title}
          </h3>
          <p className="text-gray-300 group-hover:text-gray-200 mb-6 text-lg leading-relaxed transition-colors duration-300">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => (
              <motion.span 
                key={i} 
                className="tech-tag text-sm px-4 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-cyan-400/10 transition-all duration-300 cursor-default font-medium"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        .light .project-card .absolute:first-child {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 100%);
          border-color: rgba(1, 111, 185, 0.2);
        }
        
        .light .project-card:hover .absolute:first-child {
          border-color: rgba(1, 111, 185, 0.4);
        }
        
        .light .project-card h3 {
          color: var(--black);
        }
        
        .light .project-card:hover h3 {
          background: linear-gradient(135deg, var(--darkBlue) 0%, var(--pink) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .light .project-card p {
          color: rgba(33, 33, 33, 0.8);
        }
        
        .light .project-card:hover p {
          color: rgba(33, 33, 33, 0.9);
        }
        
        .light .project-card span {
          background: rgba(1, 111, 185, 0.1);
          border-color: rgba(1, 111, 185, 0.2);
          color: var(--darkBlue);
        }
        
        .light .project-card span:hover {
          background: rgba(1, 111, 185, 0.2);
          border-color: rgba(1, 111, 185, 0.4);
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;