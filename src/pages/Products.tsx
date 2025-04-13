
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlanetBackground from '@/components/PlanetBackground';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  return (
    <div className="min-h-screen">
      <PlanetBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-sora font-bold mb-6">Our AI Products</h1>
            <p className="text-xl text-text-grey">
              Explore our ecosystem of AI platforms designed to enhance different aspects of human experience
            </p>
          </div>
        </div>
      </section>
      
      {/* Products Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Edutians */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="order-2 lg:order-1">
              <span className="text-neon-mint font-jetbrains text-sm">01. SMART LEARNING</span>
              <h2 className="text-3xl md:text-4xl font-sora font-bold mt-2 mb-6">
                <span className="text-neon-mint">Edutians</span> — Personalized AI Learning
              </h2>
              <p className="text-text-grey mb-6">
                Edutians revolutionizes education by adapting to each user's unique learning style, pace, and interests. Our AI creates personalized learning pathways that make education more engaging and effective.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-medium">Adaptive Learning Paths</h4>
                    <p className="text-text-grey text-sm">Personalized curriculum that adjusts to your progress and learning style</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-medium">Interactive Study Sessions</h4>
                    <p className="text-text-grey text-sm">Engaging AI-guided sessions that make complex topics accessible</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-medium">Progress Analytics</h4>
                    <p className="text-text-grey text-sm">Detailed insights into your learning journey and improvement areas</p>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary flex items-center gap-2">
                Explore Edutians <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="order-1 lg:order-2 glass-panel p-6 animate-pulse-glow" style={{ boxShadow: "0 0 30px rgba(18,247,214,0.2)" }}>
              <div className="aspect-video bg-neon-mint/20 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🧠</span>
              </div>
            </div>
          </div>
          
          {/* Serene */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="glass-panel p-6 animate-pulse-glow" style={{ boxShadow: "0 0 30px rgba(122,95,255,0.2)" }}>
              <div className="aspect-video bg-cyber-purple/20 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🧘</span>
              </div>
            </div>
            
            <div>
              <span className="text-cyber-purple font-jetbrains text-sm">02. MINDFULNESS & WELL-BEING</span>
              <h2 className="text-3xl md:text-4xl font-sora font-bold mt-2 mb-6">
                <span className="text-cyber-purple">Serene</span> — AI Wellness Companion
              </h2>
              <p className="text-text-grey mb-6">
                Serene brings mindfulness and mental wellness into everyday life through AI-guided practices tailored to your emotional state, stress levels, and personal goals.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-medium">Personalized Meditation</h4>
                    <p className="text-text-grey text-sm">AI-guided sessions adapted to your current emotional state</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-medium">Stress Management</h4>
                    <p className="text-text-grey text-sm">Real-time techniques to reduce anxiety and improve focus</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-medium">Sleep Enhancement</h4>
                    <p className="text-text-grey text-sm">Customized routines to improve sleep quality and consistency</p>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary flex items-center gap-2" style={{ background: "linear-gradient(to right, #7A5FFF, #A78BFF)" }}>
                Explore Serene <ArrowRight size={18} />
              </button>
            </div>
          </div>
          
          {/* Astro AI */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-dreamy-pink font-jetbrains text-sm">03. ASTROLOGY & TAROT</span>
              <h2 className="text-3xl md:text-4xl font-sora font-bold mt-2 mb-6">
                <span className="text-dreamy-pink">Astro AI</span> — Spiritual Insights
              </h2>
              <p className="text-text-grey mb-6">
                Astro AI combines ancient wisdom with cutting-edge artificial intelligence to provide personalized astrological insights and tarot readings that resonate with your unique spiritual journey.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dreamy-pink/20 flex items-center justify-center text-dreamy-pink mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-medium">Personalized Birth Charts</h4>
                    <p className="text-text-grey text-sm">Detailed analysis of your astrological influences and potentials</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dreamy-pink/20 flex items-center justify-center text-dreamy-pink mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-medium">AI Tarot Readings</h4>
                    <p className="text-text-grey text-sm">Intuitive card interpretations tailored to your specific questions</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-dreamy-pink/20 flex items-center justify-center text-dreamy-pink mt-1">✓</div>
                  <div>
                    <h4 className="text-white font-medium">Cosmic Forecasting</h4>
                    <p className="text-text-grey text-sm">Predictive insights based on planetary movements and personal transits</p>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary flex items-center gap-2" style={{ background: "linear-gradient(to right, #FF70A6, #FFA6C7)" }}>
                Explore Astro AI <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="order-1 lg:order-2 glass-panel p-6 animate-pulse-glow" style={{ boxShadow: "0 0 30px rgba(255,112,166,0.2)" }}>
              <div className="aspect-video bg-dreamy-pink/20 rounded-lg flex items-center justify-center">
                <span className="text-6xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="glass-panel p-8 md:p-12 text-center max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">
              Ready to Transform Your Experience?
            </h2>
            <p className="text-text-grey mb-8 max-w-2xl mx-auto">
              Choose the AI platform that resonates with your needs or try our personalized recommendation tool to find your perfect match.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn-primary">Get Started for Free</button>
              <button className="btn-secondary">Find My AI Match</button>
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

export default Products;
