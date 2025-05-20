import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  glowColor: string;
  comingSoon?: boolean;
  category?: string;
  website?: string;
  features?: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  icon, 
  color, 
  glowColor,
  comingSoon = false,
  category,
  website,
  features
}) => {
  return (
    <div 
      className="glass-panel p-6 h-full transition-all duration-300 hover:translate-y-[-5px] group"
      style={{ 
        borderColor: `${color}40`,
        boxShadow: `0 0 20px ${glowColor}20`
      }}
    >
      <div className="flex flex-col h-full">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-lg"
          style={{ 
            backgroundColor: `${color}20`,
            boxShadow: `0 0 10px ${glowColor}30`
          }}
        >
          <span className="text-xl">{icon}</span>
        </div>
        
        {category && (
          <div className="mb-2">
            <span 
              className="text-xs px-2 py-1 rounded-full" 
              style={{ 
                backgroundColor: `${color}20`,
                color: color 
              }}
            >
              {category}
            </span>
          </div>
        )}
        
        <h3 className="text-xl font-sora font-semibold mb-2" style={{ color }}>
          {title}
        </h3>
        
        <p className="text-text-grey text-sm mb-4 flex-grow">
          {description}
        </p>

        {features && features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span style={{ color }} className="text-xs mt-1">✓</span>
                <span className="text-text-grey text-xs">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto">
          {comingSoon ? (
            <span className="inline-block px-3 py-1 text-xs rounded-full border border-white/20 text-white/60">
              Coming Soon
            </span>
          ) : (
            <a 
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-all hover:gap-3 cursor-pointer"
              style={{ color }}
            >
              Explore Platform <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
