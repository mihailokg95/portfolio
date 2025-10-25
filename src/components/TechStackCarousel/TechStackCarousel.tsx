import { useEffect, useState, useRef } from 'react';

const TechStackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const techStack = [
    {
      name: 'React',
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-32 h-32">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      ),
      color: '#61dafb'
    },
    {
      name: 'Next.js',
      icon: (
        <svg viewBox="0 0 180 180" className="w-32 h-32">
          <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="white"/>
          </mask>
          <g mask="url(#mask0)">
            <circle cx="90" cy="90" r="90" fill="currentColor"/>
            <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 0 0 9.509-7.325Z" fill="url(#paint0_linear)"/>
            <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      color: '#ffffff'
    },
    {
      name: 'Node.js',
      icon: (
        <svg viewBox="0 0 256 289" className="w-32 h-32">
          <path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.156.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385zm32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.045 8.215 20.936 36.306 20.936 22.261 0 31.802-5.035 31.802-16.96 0-6.891-2.65-11.926-37.367-15.372-28.886-2.915-46.907-9.275-46.907-32.33 0-21.467 18.021-34.186 48.232-34.186 33.921 0 50.617 11.796 52.737 37.101 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.686 3.445 10.07 36.306 14.31 32.597 4.24 47.967 10.336 47.967 33.127-.265 23.321-19.345 36.571-53.002 36.571z" fill="currentColor"/>
        </svg>
      ),
      color: '#539E43'
    },
    {
      name: 'NestJS',
      icon: (
        <svg viewBox="0 0 256 256" className="w-32 h-32">
          <g fill="currentColor">
            <path d="M138.31 0a218.57 218.57 0 0 0-9.08.4c-28.94 2.92-56.2 14.87-77.82 34.05C22.1 62.19 4.85 100.24.9 141.4c-4.37 45.48 8.47 92.16 35.17 127.94 20.98 28.09 50.93 48.65 84.88 58.14a177.86 177.86 0 0 0 65.82 5.42c37.88-4.85 73.17-22.18 100.55-49.38 36.43-36.16 57.17-85.48 58.1-137.95.53-29.85-5.28-59.53-16.93-86.7C310.77 18.08 275.95-4.12 236.24.38c-17.22 1.96-33.61 9.03-46.58 20.08a7.89 7.89 0 0 0-2.94 6.12v42.23c0 3.53 2.35 6.64 5.75 7.61a7.92 7.92 0 0 0 9.07-4.09c6.69-13.43 21.05-22.14 36.44-22.14 22.58 0 40.94 18.36 40.94 40.94 0 22.58-18.36 40.94-40.94 40.94-16.15 0-30.16-9.4-36.76-22.95a7.92 7.92 0 0 0-9.24-3.79 7.89 7.89 0 0 0-5.56 7.53v155.6c0 4.37 3.54 7.91 7.91 7.91s7.91-3.54 7.91-7.91v-66.93c11.75 5.56 24.87 8.67 38.74 8.67 50.09 0 90.76-40.67 90.76-90.76S288.7 38.3 238.62 38.3c-28.39 0-53.78 13.07-70.45 33.54V7.91c0-4.37-3.54-7.91-7.91-7.91A219.44 219.44 0 0 0 138.31 0z"/>
            <circle cx="160.26" cy="90.13" r="15.82"/>
          </g>
        </svg>
      ),
      color: '#E0234E'
    },
    {
      name: 'TypeScript',
      icon: (
        <svg viewBox="0 0 256 256" className="w-32 h-32">
          <rect width="256" height="256" fill="currentColor" rx="28"/>
          <path d="M56.611 128.85l-.081 10.483h33.32v94.68h23.568v-94.68h33.321v-10.28c0-5.69-.122-10.444-.284-10.566-.122-.162-20.4-.244-44.983-.203l-44.739.122-.122 10.443zm149.955-10.742c6.501 1.626 11.459 4.51 16.01 9.224 2.357 2.52 5.851 7.111 6.136 8.208.08.325-11.053 7.802-17.798 11.988-.244.162-1.22-.894-2.317-2.52-3.291-4.795-6.745-6.868-12.028-7.233-7.76-.528-12.759 3.535-12.718 10.321 0 1.992.284 3.17 1.097 4.795 1.707 3.536 4.876 5.649 14.832 9.956 18.326 7.883 26.168 13.084 31.045 20.48 5.445 8.249 6.664 21.415 2.966 31.208-4.063 10.646-14.14 17.879-28.323 20.276-4.388.772-14.79.65-19.504-.203-10.28-1.829-20.033-6.908-26.047-13.572-2.357-2.601-6.949-9.387-6.664-9.875.122-.162 1.178-.812 2.356-1.503 1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267 1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305 8.167 4.308 19.383 3.698 24.909-1.26 2.357-2.153 3.332-4.388 3.332-7.68 0-2.966-.366-4.266-1.91-6.5-1.99-2.845-6.054-5.243-17.595-10.24-13.206-5.69-18.895-9.224-24.096-14.832-3.007-3.25-5.852-8.452-7.03-12.8-.975-3.617-1.22-12.678-.447-16.335 2.723-12.76 12.353-21.658 26.25-24.3 4.51-.853 14.994-.528 19.424.57z" fill="#FFF"/>
        </svg>
      ),
      color: '#3178C6'
    },
    {
      name: 'PostgreSQL',
      icon: (
        <svg viewBox="0 0 256 264" className="w-32 h-32">
          <path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.555 8.16-3.702 2.09-7.882 5.118-12.517 9.08-17.49-9.284-38.604-5.587-47.399-.811-13.79 7.478-17.706 21.658-18.27 32.607-.854 16.522 8.037 35.213 11.495 41.449C21.162 108.648 13.854 122.622 7.87 137.03c-6.767 16.315-11.35 33.48-10.74 48.588.893 22.02 13.746 39.054 35.08 46.53 14.828 5.2 32.054 4.172 53.013.3 10.58-1.954 20.428-4.232 29.332-6.726v5.86c0 .43.144 24.21 9.757 39.198 5.468 8.517 12.774 14.48 21.676 17.716 9.16 3.33 19.716 4.027 31.41 2.077 1.463-.244 2.82-.628 4.095-1.137l.07-.03.05-.022c.85-.384 1.634-.84 2.351-1.357 3.537-2.55 6.28-6.086 8.122-10.482 1.963-4.682 3.02-10.34 3.02-16.863V78.333c.15-.05.3-.1.454-.148 2.73-.857 8.582-2.684 11.704-3.684 2.426-.777 4.663-1.496 6.754-2.15l.005-.002c-.002.002-.004.004-.005.006 3.14-1.073 5.94-2.04 8.474-2.927 1.215-.425 3.033-.945 5.55-1.518 2.555-.582 5.975-1.11 10.35-1.5 4.395-.394 9.932-.582 16.815-.5 13.863.164 19.71 1.898 24.787 3.9 2.49 1.31 4.906 3.04 8.026 5.628 6.384 5.302 15.14 12.57 28.88 21.903 5.3 3.6 7.24 10.725 4.353 16.473L255.008 158.086z" fill="currentColor"/>
          <path d="M161.096 185.227c-3.509 3.509-8.08 5.672-13.056 6.28-2.163.223-4.358.335-6.553.335-2.194 0-4.389-.112-6.552-.335-4.976-.608-9.547-2.771-13.056-6.28-3.509-3.509-5.672-8.08-6.28-13.056-.223-2.163-.335-4.358-.335-6.553 0-2.194.112-4.389.335-6.552.608-4.976 2.771-9.547 6.28-13.056 3.509-3.509 8.08-5.672 13.056-6.28 2.163-.223 4.358-.335 6.552-.335 2.195 0 4.39.112 6.553.335 4.976.608 9.547 2.771 13.056 6.28 3.509 3.509 5.672 8.08 6.28 13.056.223 2.163.335 4.358.335 6.552 0 2.195-.112 4.39-.335 6.553-.608 4.976-2.771 9.547-6.28 13.056z" fill="currentColor"/>
        </svg>
      ),
      color: '#336791'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? techStack.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === techStack.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) / 100;
    
    if (Math.abs(walk) > 0.5) {
      if (walk > 0) {
        handlePrev();
      } else {
        handleNext();
      }
      setStartX(e.pageX - containerRef.current.offsetLeft);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-8 overflow-hidden">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Main Tech Stack
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div 
          ref={containerRef}
          className="relative flex items-center justify-center py-16 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="relative flex items-center justify-center w-full h-96">
            {techStack.map((tech, index) => {
              const offset = index - currentIndex;
              const absOffset = Math.abs(offset);
              const isCenter = offset === 0;
              
              const scale = isCenter ? 1.2 : Math.max(0.6, 1 - absOffset * 0.2);
              const translateX = offset * 280;
              const translateZ = isCenter ? 0 : -absOffset * 100;
              const opacity = isCenter ? 1 : Math.max(0.3, 1 - absOffset * 0.3);
              const blur = isCenter ? 0 : absOffset * 2;

              return (
                <div
                  key={tech.name}
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
                    opacity: opacity,
                    filter: `blur(${blur}px)`,
                    zIndex: isCenter ? 20 : 10 - absOffset,
                    pointerEvents: isCenter ? 'auto' : 'none'
                  }}
                >
                  <div className="relative flex flex-col items-center justify-center p-12 rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                    <div 
                      className={`absolute inset-0 rounded-3xl transition-opacity duration-700 ${
                        isCenter ? 'opacity-100' : 'opacity-0'
                      } blur-2xl`}
                      style={{
                        background: `radial-gradient(circle at center, ${tech.color}60, transparent 70%)`
                      }}
                    ></div>
                    
                    <div 
                      className={`absolute inset-0 rounded-3xl transition-opacity duration-700 ${
                        isCenter ? 'opacity-30' : 'opacity-0'
                      }`}
                      style={{
                        boxShadow: `0 0 80px ${tech.color}, inset 0 0 80px ${tech.color}20`
                      }}
                    ></div>

                    <div 
                      className={`relative z-10 mb-6 transition-all duration-700 ${
                        isCenter ? 'scale-110' : 'scale-100'
                      }`}
                      style={{
                        color: isCenter ? tech.color : '#666'
                      }}
                    >
                      <div 
                        className={`absolute inset-0 transition-opacity duration-700 ${
                          isCenter ? 'opacity-70' : 'opacity-0'
                        }`}
                        style={{ 
                          background: tech.color,
                          filter: 'blur(40px)'
                        }}
                      ></div>
                      {tech.icon}
                    </div>

                    <h3 
                      className={`relative z-10 text-2xl font-semibold transition-all duration-700 ${
                        isCenter ? 'text-white' : 'text-gray-600'
                      }`}
                      style={{
                        textShadow: isCenter ? `0 0 30px ${tech.color}` : 'none'
                      }}
                    >
                      {tech.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-gray-800/80 border border-gray-700 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-gray-800/80 border border-gray-700 text-white hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {techStack.map((tech, index) => (
            <button
              key={tech.name}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-12 h-3 rounded-full' 
                  : 'w-3 h-3 rounded-full'
              }`}
              style={{
                backgroundColor: index === currentIndex ? tech.color : '#4B5563',
                boxShadow: index === currentIndex ? `0 0 20px ${tech.color}` : 'none'
              }}
              aria-label={`Go to ${tech.name}`}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Building modern, scalable applications with cutting-edge technologies
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Use arrow keys or drag to navigate
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechStackCarousel;

