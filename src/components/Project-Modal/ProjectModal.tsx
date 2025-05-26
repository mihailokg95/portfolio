import React, { useState, useEffect, type ReactNode } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface Technology {
  name: string;
  icon?: React.ElementType;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string | ReactNode;
  responsibilities?: string;
  technologies?: Technology[];
  videoUrl?: string | null;
}

const Badge = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-800 dark:text-zinc-200 ${className}`}>
    {children}
  </span>
);

const ScrollArea = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`overflow-auto ${className}`}>
    {children}
  </div>
);

const Card = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`bg-transparent shadow-none ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`p-6 space-y-6 ${className}`}>
    {children}
  </div>
);

const ModalOverlay = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <div 
        className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
        onClick={onClick}
      ></div>
      
      <div 
        className="fixed inset-0 z-[90] bg-black opacity-50"
        onClick={onClick}
      ></div>
    </>
  );
};

const ProjectModal = ({
  isOpen,
  onClose,
  title,
  description,
  responsibilities,
  technologies = [],
  videoUrl = null
}: ProjectModalProps) => {
  const [videoId, setVideoId] = useState<string | null>(null);
  const [videoError, setVideoError] = useState(false);
  
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      setIsAnimating(false);
      // Restore body scrolling when modal is closed
      document.body.style.overflow = '';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setVideoError(false);
    
    if (videoUrl) {
      try {
        if (videoUrl.includes('youtu.be/')) {
          const urlParts = videoUrl.split('/');
          const potentialId = urlParts[urlParts.length - 1].split('?')[0];
          if (potentialId && potentialId.length === 11) {
            setVideoId(potentialId);
            return;
          }
        }
        
        const url = new URL(videoUrl);
        if (url.hostname.includes('youtube.com')) {
          const searchParams = new URLSearchParams(url.search);
          const vParam = searchParams.get('v');
          if (vParam) {
            setVideoId(vParam);
            return;
          }
          
          if (url.pathname.includes('/embed/')) {
            const embedId = url.pathname.split('/embed/')[1];
            if (embedId) {
              setVideoId(embedId);
              return;
            }
          }
        }
        
        const videoIdMatch = 
          // eslint-disable-next-line no-useless-escape
          videoUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        console.log(videoIdMatch);
        if (videoIdMatch && videoIdMatch[1]) {
          setVideoId(videoIdMatch[1]);
        } else {
          setVideoId(null);
        }
      } catch (error) {
        console.error("Error parsing YouTube URL:", error);
        setVideoId(null);
      }
    } else {
      setVideoId(null);
    }
  }, [videoUrl]);
  
  if (!isOpen) return null;

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 isolation-layer" style={{ zIndex: 9999 }}>
      <ModalOverlay onClick={onClose} />
      
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none">
        <div 
          onClick={handleModalClick}
          className={`relative w-full max-w-3xl bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden pointer-events-auto transition-all duration-300 ease-out ${
            isAnimating 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-90'
          }`}
        >
          <button
            className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800 dark:hover:text-white"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </button>
          
          <ScrollArea className="h-[80vh]">
            <Card>
              <CardContent>
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                    {title}
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                    {typeof description === 'string' ? description : description}
                  </p>
                </div>
                
                {responsibilities && responsibilities.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                      Responsibilities
                    </h4>
                    <ul className="mt-2 space-y-1 text-zinc-700 dark:text-zinc-300">
                        <li  className="flex items-start">
                          <span className="mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500 dark:bg-zinc-400"></span>
                          <span>{responsibilities}</span>
                        </li>
                    </ul>
                  </div>
                )}
                
                {technologies && technologies.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {technologies.map((tech, idx) => (
                        <Badge key={idx}>
                          {tech.icon && React.createElement(tech.icon, { className: "inline mr-1 h-4 w-4" })} 
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {videoId && (
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                      Project Demo
                    </h4>
                    {videoError ? (
                      <div className="border border-zinc-300 dark:border-zinc-700 rounded-xl p-4 text-center">
                        <p className="mb-2 text-zinc-700 dark:text-zinc-300">
                          Could not load the embedded video. 
                        </p>
                        <a 
                          href={`https://www.youtube.com/watch?v=${videoId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Open video on YouTube <ExternalLink size={16} className="ml-1" />
                        </a>
                      </div>
                    ) : (
                      <div className="aspect-video w-full rounded-xl overflow-hidden">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?origin=${window.location.origin}`}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Project Demo Video"
                          onError={() => setVideoError(true)}
                        ></iframe>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;