
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  glowColor: string;
  comingSoon?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  icon, 
  color, 
  glowColor,
  comingSoon = false
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
        
        <h3 className="text-xl font-sora font-semibold mb-2" style={{ color }}>
          {title}
        </h3>
        
        <p className="text-text-grey text-sm mb-4 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto">
          {comingSoon ? (
            <span className="inline-block px-3 py-1 text-xs rounded-full border border-white/20 text-white/60">
              Coming Soon
            </span>
          ) : (
            <button 
              className="flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
              style={{ color }}
            >
              Explore Platform <ArrowUpRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
