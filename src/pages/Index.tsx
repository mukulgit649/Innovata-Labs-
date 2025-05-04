
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import PlanetBackground from '@/components/PlanetBackground';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Brain, FileText, GraduationCap } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const Index = () => {
  return (
    <div className="min-h-screen">
      <PlanetBackground />
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Products Section */}
      <section className="py-20 relative" id="products">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-cyber-purple/10 border border-cyber-purple/20">
              <Sparkles className="h-4 w-4 text-cyber-purple" />
              <span className="text-sm font-jetbrains text-cyber-purple">Our Innovation Suite</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sora font-bold mb-6 gradient-text">Our Universe of Products</h2>
            <p className="text-lg text-text-grey">
              Discover our ecosystem of AI-powered platforms designed to enhance different aspects of human experience
            </p>
          </div>
          
          {/* Product Cards Section */}
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
            <Button className="btn-primary group">
              View All Products <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-neon-mint/10 blur-3xl"></div>
      </section>
      
      {/* Features Carousel */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 mb-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-sora font-bold mb-4">
              Flagship <span className="text-neon-mint">Products</span>
            </h2>
            <p className="text-text-grey max-w-2xl mx-auto">
              Our innovative AI-powered platforms are designed to enhance different aspects of human experience
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="glass-panel p-8 backdrop-blur-xl">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-16 h-16 rounded-full bg-cyber-purple/20 flex items-center justify-center shrink-0">
                      <Brain className="h-8 w-8 text-cyber-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-sora font-bold text-cyber-purple mb-2">Serene</h3>
                      <p className="text-text-grey">
                        A compassionate AI-driven mental health companion that helps users cope with 
                        anxiety, depression, loneliness, and burnout. Serene listens, understands emotions, 
                        and responds with empathy, mindfulness tools, and daily support.
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="glass-panel p-8 backdrop-blur-xl">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-16 h-16 rounded-full bg-neon-mint/20 flex items-center justify-center shrink-0">
                      <FileText className="h-8 w-8 text-neon-mint" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-sora font-bold text-neon-mint mb-2">ResuGenius</h3>
                      <p className="text-text-grey">
                        An AI-powered resume builder and analyzer that's miles ahead. From real-time keyword 
                        optimization and job description matching to AI coaching and role-based resume suggestions 
                        — ResuGenius helps you stand out and succeed.
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="glass-panel p-8 backdrop-blur-xl">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-16 h-16 rounded-full bg-dreamy-pink/20 flex items-center justify-center shrink-0">
                      <GraduationCap className="h-8 w-8 text-dreamy-pink" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-sora font-bold text-dreamy-pink mb-2">Edutians</h3>
                      <p className="text-text-grey">
                        A smart learning ecosystem that transforms how students absorb, retain, and apply knowledge. 
                        From video summarization and lecture notes to personalized revision schedules — Edutians is 
                        built for today's learners and tomorrow's leaders.
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-4" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </div>
        
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-dreamy-pink/10 blur-3xl"></div>
      </section>
      
      {/* About Section */}
      <section className="py-20 relative" id="about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center justify-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-neon-mint/10 border border-neon-mint/20">
                <Sparkles className="h-4 w-4 text-neon-mint" />
                <span className="text-sm font-jetbrains text-neon-mint">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6">Our Mission to <span className="gradient-text">Transform</span> the Future</h2>
              <p className="text-text-grey mb-6 text-lg">
                At Innovata Labs, we're revolutionizing how people interact with technology through our suite of AI-powered platforms, each designed to enhance human potential.
              </p>
              <p className="text-text-grey mb-8">
                From personalized learning to mental wellness and spiritual insights, our AI solutions are built to create meaningful impacts on individual lives and society as a whole.
              </p>
              <Button className="btn-primary group">
                About Our Journey <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="glass-panel p-8 animate-pulse-glow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-neon-mint/20 to-cyber-purple/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-dreamy-pink/20 to-neon-mint/20 rounded-full blur-xl"></div>
                
                <div className="grid grid-cols-2 gap-8">
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
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-cyber-purple/10 blur-3xl"></div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="glass-panel p-10 md:p-16 text-center max-w-4xl mx-auto relative z-10 border border-white/5 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 via-transparent to-dreamy-pink/10 z-[-1] opacity-50"></div>
            
            <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-dreamy-pink/10 border border-dreamy-pink/20 mx-auto">
              <Sparkles className="h-4 w-4 text-dreamy-pink" />
              <span className="text-sm font-jetbrains text-dreamy-pink">Join Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-sora font-bold mb-6">
              Ready to Explore the Future with Us?
            </h2>
            <p className="text-text-grey mb-10 max-w-2xl mx-auto text-lg">
              Join thousands of users already experiencing the power of our AI platforms. Discover which solution is right for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="btn-primary text-lg py-6 px-8 group">
                Get Started for Free <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-secondary text-lg py-6 px-8">
                Schedule a Demo
              </Button>
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
