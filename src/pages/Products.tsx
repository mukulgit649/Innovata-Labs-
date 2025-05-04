
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlanetBackground from '@/components/PlanetBackground';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card,
  CardContent, 
  CardHeader
} from '@/components/ui/card';

const Products = () => {
  return (
    <div className="min-h-screen">
      <PlanetBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-neon-mint/10 border border-neon-mint/20">
              <Sparkles className="h-4 w-4 text-neon-mint" />
              <span className="text-sm font-jetbrains text-neon-mint">Innovata Labs Products</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-sora font-bold mb-6 gradient-text">Our AI Products</h1>
            <p className="text-xl text-text-grey max-w-3xl mx-auto">
              Explore our ecosystem of AI platforms designed to enhance different aspects of human experience 
              with innovative technology and intuitive design
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-10 w-40 h-40 rounded-full bg-neon-mint/10 blur-3xl"></div>
        <div className="absolute top-1/4 right-10 w-40 h-40 rounded-full bg-dreamy-pink/10 blur-3xl"></div>
      </section>
      
      {/* Products Showcase */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          {/* Edutians */}
          <Card className="mb-32 glass-panel border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
                <div className="order-2 lg:order-1 p-8 lg:p-12">
                  <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-neon-mint/10 border border-neon-mint/20">
                    <span className="text-xs font-jetbrains text-neon-mint">01. SMART LEARNING</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-sora font-bold mt-2 mb-6">
                    <span className="text-neon-mint">Edutians</span> — Personalized AI Learning
                  </h2>
                  <p className="text-text-grey mb-8 leading-relaxed">
                    Edutians revolutionizes education by adapting to each user's unique learning style, pace, and interests. 
                    Our AI creates personalized learning pathways that make education more engaging and effective.
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="text-white font-medium text-lg">Adaptive Learning Paths</h4>
                        <p className="text-text-grey">Personalized curriculum that adjusts to your progress and learning style</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="text-white font-medium text-lg">Interactive Study Sessions</h4>
                        <p className="text-text-grey">Engaging AI-guided sessions that make complex topics accessible</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="text-white font-medium text-lg">Progress Analytics</h4>
                        <p className="text-text-grey">Detailed insights into your learning journey and improvement areas</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="btn-primary group">
                    Explore Edutians <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="order-1 lg:order-2 bg-gradient-to-br from-neon-mint/20 to-transparent p-8 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-space-black/80"></div>
                  <div className="relative z-10 aspect-square w-full max-w-md flex items-center justify-center animate-pulse-glow" style={{ boxShadow: "0 0 30px rgba(18,247,214,0.2)" }}>
                    <div className="bg-neon-mint/10 rounded-full w-full h-full p-16 flex items-center justify-center">
                      <span className="text-8xl">🧠</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Serene */}
          <Card className="mb-32 glass-panel border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
                <div className="bg-gradient-to-bl from-cyber-purple/20 to-transparent p-8 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-space-black/80"></div>
                  <div className="relative z-10 aspect-square w-full max-w-md flex items-center justify-center animate-pulse-glow" style={{ boxShadow: "0 0 30px rgba(122,95,255,0.2)" }}>
                    <div className="bg-cyber-purple/10 rounded-full w-full h-full p-16 flex items-center justify-center">
                      <span className="text-8xl">🧘</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-cyber-purple/10 border border-cyber-purple/20">
                    <span className="text-xs font-jetbrains text-cyber-purple">02. MINDFULNESS & WELL-BEING</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-sora font-bold mt-2 mb-6">
                    <span className="text-cyber-purple">Serene</span> — AI Wellness Companion
                  </h2>
                  <p className="text-text-grey mb-8 leading-relaxed">
                    Serene brings mindfulness and mental wellness into everyday life through AI-guided practices 
                    tailored to your emotional state, stress levels, and personal goals.
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="text-white font-medium text-lg">Personalized Meditation</h4>
                        <p className="text-text-grey">AI-guided sessions adapted to your current emotional state</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="text-white font-medium text-lg">Stress Management</h4>
                        <p className="text-text-grey">Real-time techniques to reduce anxiety and improve focus</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="text-white font-medium text-lg">Sleep Enhancement</h4>
                        <p className="text-text-grey">Customized routines to improve sleep quality and consistency</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="btn-primary group" style={{ background: "linear-gradient(to right, #7A5FFF, #A78BFF)" }}>
                    Explore Serene <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Astro AI */}
          <Card className="glass-panel border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
                <div className="order-2 lg:order-1 p-8 lg:p-12">
                  <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-dreamy-pink/10 border border-dreamy-pink/20">
                    <span className="text-xs font-jetbrains text-dreamy-pink">03. ASTROLOGY & TAROT</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-sora font-bold mt-2 mb-6">
                    <span className="text-dreamy-pink">Astro AI</span> — Spiritual Insights
                  </h2>
                  <p className="text-text-grey mb-8 leading-relaxed">
                    Astro AI combines ancient wisdom with cutting-edge artificial intelligence to provide 
                    personalized astrological insights and tarot readings that resonate with your unique spiritual journey.
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-dreamy-pink/20 flex items-center justify-center text-dreamy-pink shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="text-white font-medium text-lg">Personalized Birth Charts</h4>
                        <p className="text-text-grey">Detailed analysis of your astrological influences and potentials</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-dreamy-pink/20 flex items-center justify-center text-dreamy-pink shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="text-white font-medium text-lg">AI Tarot Readings</h4>
                        <p className="text-text-grey">Intuitive card interpretations tailored to your specific questions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-dreamy-pink/20 flex items-center justify-center text-dreamy-pink shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="text-white font-medium text-lg">Cosmic Forecasting</h4>
                        <p className="text-text-grey">Predictive insights based on planetary movements and personal transits</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="btn-primary group" style={{ background: "linear-gradient(to right, #FF70A6, #FFA6C7)" }}>
                    Explore Astro AI <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="order-1 lg:order-2 bg-gradient-to-br from-dreamy-pink/20 to-transparent p-8 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-space-black/80"></div>
                  <div className="relative z-10 aspect-square w-full max-w-md flex items-center justify-center animate-pulse-glow" style={{ boxShadow: "0 0 30px rgba(255,112,166,0.2)" }}>
                    <div className="bg-dreamy-pink/10 rounded-full w-full h-full p-16 flex items-center justify-center">
                      <span className="text-8xl">✨</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-10 w-40 h-40 rounded-full bg-neon-mint/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-60 h-60 rounded-full bg-cyber-purple/5 blur-3xl"></div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="glass-panel p-10 md:p-16 text-center max-w-4xl mx-auto relative z-10 backdrop-blur-xl border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-mint/10 via-cyber-purple/5 to-dreamy-pink/10 z-[-1] opacity-50"></div>
            
            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-neon-mint/10 border border-neon-mint/20">
              <Sparkles className="h-4 w-4 text-neon-mint" />
              <span className="text-sm font-jetbrains text-neon-mint">Join Us Today</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sora font-bold mb-6">
              Ready to Transform Your Experience?
            </h2>
            <p className="text-text-grey mb-10 max-w-2xl mx-auto text-lg">
              Choose the AI platform that resonates with your needs or try our personalized recommendation tool to find your perfect match.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="btn-primary text-lg py-6 px-8 group">
                Get Started for Free <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-secondary text-lg py-6 px-8">
                Find My AI Match
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-neon-mint/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-dreamy-pink/10 blur-3xl"></div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;
