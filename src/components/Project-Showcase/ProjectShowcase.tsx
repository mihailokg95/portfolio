import React from 'react';
import { ArrowUpRight, ListChecks, ExternalLink, Folder, Calendar } from 'lucide-react';
import TechnologyBadge from '../Technology-Badge/TechnologyBadge';
import VideoPlayer from '../Video-Player/VideoPlayer';
import type { Project } from '../../@types/projects';

interface ProjectShowcaseProps {
  project: Project;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project }) => {
  return (
    <div 
      className="flex flex-col h-full overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, rgba(15, 15, 23, 0.98) 0%, rgba(30, 30, 45, 0.98) 100%),
          radial-gradient(circle at 20% 30%, rgba(103, 232, 249, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(255, 99, 132, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 60% 90%, rgba(103, 232, 249, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 10% 80%, rgba(255, 99, 132, 0.05) 0%, transparent 45%)
        `
      }}
    >
      <div className="relative w-full h-[55vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-10"
          />
          <div 
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(135deg, rgba(15, 15, 23, 0.9) 0%, rgba(30, 30, 45, 0.8) 100%),
                radial-gradient(circle at 30% 40%, rgba(103, 232, 249, 0.2) 0%, transparent 60%),
                radial-gradient(circle at 70% 60%, rgba(255, 99, 132, 0.15) 0%, transparent 60%)
              `
            }}
          />
        </div>
        
        <div className="relative h-full flex items-center justify-center p-6">
          {project.video ? (
            <div className="w-full h-full max-w-5xl">
              <div 
                className="w-full h-full rounded-2xl overflow-hidden border-2 shadow-2xl"
                style={{
                  borderColor: 'rgba(103, 232, 249, 0.3)',
                  boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(103, 232, 249, 0.2)'
                }}
              >
                <VideoPlayer url={project.video} />
              </div>
            </div>
          ) : (
            <div 
              className="rounded-2xl overflow-hidden border-2 shadow-2xl max-h-full"
              style={{
                borderColor: 'rgba(103, 232, 249, 0.3)',
                boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(103, 232, 249, 0.2)'
              }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="h-full w-auto max-w-full object-contain"
              />
            </div>
          )}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div 
          className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        />
        
        <div className="max-w-6xl mx-auto p-8 space-y-8">
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                    {project.title}
                  </h2>
                  <div 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-white text-sm font-medium backdrop-blur-md border"
                    style={{
                      background: 'rgba(15, 15, 23, 0.8)',
                      borderColor: 'rgba(103, 232, 249, 0.3)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <Calendar className="w-3.5 h-3.5 text-cyan-300" />
                    {project.year}
                  </div>
                </div>
                <p className="text-lg text-white/85 leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm text-white border cursor-pointer relative overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(15, 15, 23, 0.9), rgba(30, 30, 45, 0.8))',
                      borderColor: 'rgba(103, 232, 249, 0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontFamily: 'Red Hat Display, sans-serif',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(103, 232, 249, 0.2)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-300 group-hover:text-cyan-200 group-hover:translate-y-[-2px] transition-all duration-300" />
                    <span>Visit Project</span>
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(103, 232, 249, 0.15), rgba(255, 99, 132, 0.1))'
                      }}
                    />
                  </a>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-medium text-sm text-white/90 border transition-all duration-300 hover:scale-105 hover:border-cyan-400/50 hover:bg-white/5 group"
                    style={{
                      background: 'rgba(15, 15, 23, 0.6)',
                      borderColor: 'rgba(103, 232, 249, 0.3)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <Folder className="w-4 h-4 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
                    <span>View Source</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform duration-300" />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {project.features && project.features.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-400/15 border border-cyan-400/30">
                  <ListChecks className="w-6 h-6 text-cyan-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Key Features</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      background: 'rgba(15, 15, 23, 0.5)',
                      borderColor: 'rgba(103, 232, 249, 0.25)',
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.6s ease forwards',
                      opacity: 0,
                      transform: 'translateY(20px)'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-semibold flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, rgba(103, 232, 249, 0.2), rgba(255, 99, 132, 0.2))',
                          border: '1px solid rgba(103, 232, 249, 0.3)',
                          color: 'rgb(103, 232, 249)'
                        }}
                      >
                        {index + 1}
                      </div>
                      <span className="text-white/90 group-hover:text-white transition-colors leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-400/15 border border-cyan-400/30">
                <div className="w-6 h-6 text-cyan-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16,18 22,12 16,6" />
                    <polyline points="8,6 2,12 8,18" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white">Technologies</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animation: 'fadeInScale 0.5s ease forwards',
                    opacity: 0,
                    transform: 'scale(0.8)'
                  }}
                >
                  <TechnologyBadge technology={tech} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Custom Scrollbar */
        .flex-1::-webkit-scrollbar {
          width: 6px;
        }
        
        .flex-1::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .flex-1::-webkit-scrollbar-thumb {
          background: rgba(103, 232, 249, 0.3);
          border-radius: 3px;
        }
        
        .flex-1::-webkit-scrollbar-thumb:hover {
          background: rgba(103, 232, 249, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ProjectShowcase;