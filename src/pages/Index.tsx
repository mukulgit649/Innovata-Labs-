
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import PlanetBackground from '@/components/PlanetBackground';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <PlanetBackground />
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Products Section */}
      <section className="py-16 relative" id="products">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">Our Universe of Products</h2>
            <p className="text-text-grey">
              Discover our ecosystem of AI-powered platforms designed to enhance different aspects of human experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              title="Edutians" 
              description="Personalized AI learning platform that adapts to your unique learning style, making education more engaging and effective."
              icon="🧠"
              color="#12F7D6"
              glowColor="rgba(18,247,214,0.5)"
            />
            
            <ProductCard 
              title="Serene" 
              description="AI-driven mindfulness and well-being companion that helps you maintain balance and reduce stress in your daily life."
              icon="🧘"
              color="#7A5FFF"
              glowColor="rgba(122,95,255,0.5)"
            />
            
            <ProductCard 
              title="Astro AI" 
              description="Advanced astrological insights and tarot readings powered by AI, providing spiritual guidance tailored to your personal journey."
              icon="✨"
              color="#FF70A6"
              glowColor="rgba(255,112,166,0.5)"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button className="btn-secondary">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-neon-mint/10 blur-3xl"></div>
      </section>
      
      {/* About Section */}
      <section className="py-16 relative" id="about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">Our Mission to <span className="gradient-text">Transform</span> the Future</h2>
              <p className="text-text-grey mb-6">
                At Innovata Labs, we're revolutionizing how people interact with technology through our suite of AI-powered platforms, each designed to enhance human potential.
              </p>
              <p className="text-text-grey mb-8">
                From personalized learning to mental wellness and spiritual insights, our AI solutions are built to create meaningful impacts on individual lives and society as a whole.
              </p>
              <Button className="btn-primary">About Our Journey</Button>
            </div>
            
            <div className="glass-panel p-8 animate-pulse-glow">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-neon-mint text-4xl font-sora font-bold">3+</h3>
                  <p className="text-text-grey text-sm mt-2">AI Platforms</p>
                </div>
                <div className="text-center">
                  <h3 className="text-cyber-purple text-4xl font-sora font-bold">10k+</h3>
                  <p className="text-text-grey text-sm mt-2">Active Users</p>
                </div>
                <div className="text-center">
                  <h3 className="text-dreamy-pink text-4xl font-sora font-bold">98%</h3>
                  <p className="text-text-grey text-sm mt-2">Satisfaction Rate</p>
                </div>
                <div className="text-center">
                  <h3 className="text-neon-mint text-4xl font-sora font-bold">24/7</h3>
                  <p className="text-text-grey text-sm mt-2">AI Assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-cyber-purple/10 blur-3xl"></div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="glass-panel p-8 md:p-12 text-center max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">
              Ready to Explore the Future with Us?
            </h2>
            <p className="text-text-grey mb-8 max-w-2xl mx-auto">
              Join thousands of users already experiencing the power of our AI platforms. Discover which solution is right for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-primary">Get Started for Free</Button>
              <Button className="btn-secondary">Schedule a Demo</Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-mint/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-dreamy-pink/10 blur-3xl"></div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
