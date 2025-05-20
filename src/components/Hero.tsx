import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 overflow-hidden relative">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center justify-center text-center gap-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-sora font-bold leading-tight">
            <span className="gradient-text">Innovating</span> The Future
            <br />
            <span className="inline-block mt-2">of AI Technology</span>
          </h1>

          <p className="text-lg md:text-xl text-text-grey max-w-2xl mx-auto">
            Pioneering breakthrough AI solutions through our specialized platforms 
            for education, wellness, and spiritual insights
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link to="/products" className="btn-primary flex items-center justify-center gap-2">
              Explore Our Products
              <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn-secondary">
              About Our Mission
            </Link>
          </div>

          {/* Floating badges */}
          <div className="relative w-full h-64 md:h-80 mt-8">
            <div className="absolute left-4 top-2 glass-panel p-4 animate-float">
              <span className="text-sm font-jetbrains text-neon-mint">01. Edutians</span>
              <p className="text-xs mt-1">Smart AI Learning Platform</p>
            </div>
            
            <div className="absolute right-4 top-10 glass-panel p-4 animate-float" style={{ animationDelay: "1s" }}>
              <span className="text-sm font-jetbrains text-cyber-purple">02. Serene</span>
              <p className="text-xs mt-1">Mindfulness & Well-being AI</p>
            </div>
            
            <div className="absolute left-1/4 bottom-4 glass-panel p-4 animate-float" style={{ animationDelay: "2s" }}>
              <span className="text-sm font-jetbrains text-dreamy-pink">03. Astro AI</span>
              <p className="text-xs mt-1">Astrology & Tarot Intelligence</p>
            </div>
            
            <div className="absolute right-1/4 bottom-8 glass-panel p-4 animate-float" style={{ animationDelay: "2.5s" }}>
              <span className="text-sm font-jetbrains text-neon-mint">04. Resuminate</span>
              <p className="text-xs mt-1">AI Resume & Career Builder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-cyber-purple/20 blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-dreamy-pink/20 blur-3xl"></div>
    </section>
  );
};

export default Hero;
