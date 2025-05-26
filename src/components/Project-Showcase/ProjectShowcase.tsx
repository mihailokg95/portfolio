import React from 'react';
import {   ArrowUpRight, ListChecks, ExternalLink, Folder } from 'lucide-react';
import TechnologyBadge from '../Technology-Badge/TechnologyBadge';
import VideoPlayer from '../Video-Player/VideoPlayer';
import type { Project } from '../../@types/projects';

interface ProjectShowcaseProps {
  project: Project;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project }) => {
  return (
    <div className="flex flex-col h-full bg-gray-900">
      <div className="w-full h-[50vh] bg-gray-800 relative">
        <div className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
        </div>
        
        <div className="relative h-full flex items-center justify-center p-4">
          {project.video ? (
            <div className="w-full max-w-4xl aspect-video mt-12 pt-10">
              <VideoPlayer url={project.video} />
            </div>
          ) : (
            <img 
              src={project.image} 
              alt={project.title} 
              className="h-full w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
          )}
        </div>
        
        <div className="absolute top-4 left-4 px-3 py-1 bg-gray-900/60 backdrop-blur-sm text-white text-xs font-medium rounded-full">
          {project.year}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="max-w-4xl mx-auto p-6 md:p-8">
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-400">{project.description}</p>
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-blue-500/20"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Visit
                </a>
              )}
            </div>
            
            <div className="prose prose-sm max-w-none text-gray-300 mb-8">
              {project.description}
            </div>
            
            <div className="mb-8">
              <h3 className="flex items-center text-lg font-semibold mb-4 text-white">
                <ListChecks size={18} className="mr-2 text-blue-400" /> 
                Key Features
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {project.features && project.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-start bg-gray-800/50 rounded-lg p-3"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeIn 0.5s ease forwards',
                      opacity: 0
                    }}
                  >
                    <span className="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-blue-500/20 text-blue-400 text-xs">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-white">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <TechnologyBadge key={index} technology={tech} index={index} />
              ))}
            </div>
          </div>
          
          <div className="flex gap-3 pt-4 border-t border-gray-800">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Folder size={16} className="mr-1" />
                View Source
                <ArrowUpRight size={14} className="ml-1" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectShowcase;