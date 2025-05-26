import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { Technology } from '../../@types/projects';

interface TechnologyBadgeProps {
  technology: Technology;
  index: number;
}

const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({ technology, index }) => {
  const IconComponent =
    ((LucideIcons as unknown) as Record<string, React.FC<React.SVGProps<SVGSVGElement>>>)[technology.icon] ||
    LucideIcons.Code;

  return (
    <div 
      className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animation: 'slideInUp 0.5s ease forwards',
        opacity: 0,
        transform: 'translateY(10px)'
      }}
    >
      <IconComponent width={16} height={16} className={technology.color} />
      <span className="text-sm font-medium text-gray-300">{technology.name}</span>
      
      <style >{`
        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TechnologyBadge;