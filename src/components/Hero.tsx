import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 md:pt-24 overflow-hidden relative">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="flex flex-col items-center justify-center text-center gap-4 md:gap-6 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sora font-bold leading-tight">
            <span className="gradient-text">Innovating</span> The Future
            <br />
            <span className="inline-block mt-2">of AI Technology</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-text-grey max-w-2xl mx-auto px-4">
            Pioneering breakthrough AI solutions through our specialized platforms 
            for education, wellness, and spiritual insights
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-8 px-4">
            <Link to="/products" className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto">
              Explore Our Products
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn-secondary w-full sm:w-auto">
              About Our Mission
            </Link>
          </div>

          {/* Floating badges */}
          <div className="relative w-full h-[400px] md:h-[500px] mt-8 md:mt-12">
            <div className="absolute left-2 md:left-4 top-2 glass-panel p-3 md:p-4 animate-float">
              <span className="text-xs md:text-sm font-jetbrains text-neon-mint">01. Edutians</span>
              <p className="text-[10px] md:text-xs mt-1">Smart AI Learning Platform</p>
            </div>
            
            <div className="absolute right-2 md:right-4 top-10 glass-panel p-3 md:p-4 animate-float" style={{ animationDelay: "1s" }}>
              <span className="text-xs md:text-sm font-jetbrains text-cyber-purple">02. Serene</span>
              <p className="text-[10px] md:text-xs mt-1">Mindfulness & Well-being AI</p>
            </div>
            
            <div className="absolute left-1/4 bottom-4 glass-panel p-3 md:p-4 animate-float" style={{ animationDelay: "2s" }}>
              <span className="text-xs md:text-sm font-jetbrains text-dreamy-pink">03. Astro AI</span>
              <p className="text-[10px] md:text-xs mt-1">Astrology & Tarot Intelligence</p>
            </div>
            
            <div className="absolute right-1/4 bottom-8 glass-panel p-3 md:p-4 animate-float" style={{ animationDelay: "2.5s" }}>
              <span className="text-xs md:text-sm font-jetbrains text-neon-mint">04. Resuminate</span>
              <p className="text-[10px] md:text-xs mt-1">AI Resume & Career Builder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-32 -left-32 w-32 md:w-64 h-32 md:h-64 rounded-full bg-cyber-purple/20 blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-32 md:w-64 h-32 md:h-64 rounded-full bg-dreamy-pink/20 blur-3xl"></div>
    </section>
  );
};

export default Hero;
