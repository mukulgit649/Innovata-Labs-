import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlanetBackground from '@/components/PlanetBackground';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            <div className="glass-panel p-6 backdrop-blur-xl">
              <h3 className="text-white font-medium mb-2 text-lg">🧠 AI With Purpose</h3>
              <p className="text-text-grey text-sm">All our products use AI to enhance human lives, not replace them.</p>
            </div>
            
            <div className="glass-panel p-6 backdrop-blur-xl">
              <h3 className="text-white font-medium mb-2 text-lg">🎨 Design-First Thinking</h3>
              <p className="text-text-grey text-sm">We obsess over user experience, UI, and emotional connection.</p>
            </div>
            
            <div className="glass-panel p-6 backdrop-blur-xl">
              <h3 className="text-white font-medium mb-2 text-lg">🔒 Privacy-Focused</h3>
              <p className="text-text-grey text-sm">We never compromise user trust. Full transparency, always.</p>
            </div>
            
            <div className="glass-panel p-6 backdrop-blur-xl">
              <h3 className="text-white font-medium mb-2 text-lg">🛠️ Built to Scale</h3>
              <p className="text-text-grey text-sm">Designed for growth, backed by robust technology.</p>
            </div>
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
                    A smart learning ecosystem that transforms how students absorb, retain, and apply knowledge. 
                    From video summarization and lecture notes to personalized revision schedules — Edutians is 
                    built for today's learners and tomorrow's leaders.
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
                  
                  <div className="flex items-center gap-2 text-text-grey text-sm mb-8">
                    <span className="text-neon-mint">🌐</span>
                    <span>edutians.innovatalabs.ai</span>
                  </div>
                  
                  <a
                    className="btn-primary group flex items-center gap-2 mt-8"
                    href="https://edutians.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    Explore Edutians <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                <div className="order-1 lg:order-2 bg-gradient-to-br from-neon-mint/20 to-transparent p-8 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-space-black/80"></div>
                  <div className="relative z-10 aspect-square w-full max-w-md flex items-center justify-center animate-pulse-glow" style={{ boxShadow: "0 0 30px rgba(18,247,214,0.2)" }}>
                    <div className="bg-neon-mint/10 rounded-full w-full h-full p-16 flex items-center justify-center">
                      <span className="text-8xl">🎓</span>
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
                    A compassionate AI-driven mental health companion that helps users cope with anxiety, depression, loneliness, 
                    and burnout. Serene listens, understands emotions, and responds with empathy, mindfulness tools, and daily support.
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
                  
                  <div className="flex items-center gap-2 text-text-grey text-sm mb-8">
                    <span className="text-cyber-purple">🌐</span>
                    <span>serene.innovatalabs.ai</span>
                  </div>
                  
                  <a
                    className="btn-primary group flex items-center gap-2 mt-8"
                    href="https://serenehere.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: 'linear-gradient(to right, #7A5FFF, #A78BFF)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    Explore Serene <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Resuminate */}
          <Card className="mb-32 glass-panel border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
                <div className="order-2 lg:order-1 p-8 lg:p-12">
                  <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-neon-mint/10 border border-neon-mint/20">
                    <span className="text-xs font-jetbrains text-neon-mint">03. CAREER TOOLS</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-sora font-bold mt-2 mb-6">
                    <span className="text-neon-mint">Resuminate</span> — AI Resume Builder
                  </h2>
                  <p className="text-text-grey mb-8 leading-relaxed">
                    An AI-powered resume builder and analyzer that's miles ahead. From real-time keyword optimization and 
                    job description matching to AI coaching and role-based resume suggestions — Resuminate helps you stand out and succeed.
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="text-white font-medium text-lg">Keyword Optimization</h4>
                        <p className="text-text-grey">Real-time analysis to help your resume match job requirements</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="text-white font-medium text-lg">AI Coaching</h4>
                        <p className="text-text-grey">Personalized suggestions to improve your resume's impact</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint shrink-0 mt-1">✓</div>
                      <div>
                        <h4 className="text-white font-medium text-lg">Role-Based Templates</h4>
                        <p className="text-text-grey">Industry-specific formats that highlight relevant skills</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-text-grey text-sm mb-8">
                    <span className="text-neon-mint">🌐</span>
                    <span>resumegenius.innovatalabs.ai</span>
                  </div>
                  
                  <a
                    className="btn-primary group flex items-center gap-2 mt-8"
                    href="https://resuminate.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    Explore Resuminate <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                
                <div className="order-1 lg:order-2 bg-gradient-to-br from-neon-mint/20 to-transparent p-8 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-space-black/80"></div>
                  <div className="relative z-10 aspect-square w-full max-w-md flex items-center justify-center animate-pulse-glow" style={{ boxShadow: "0 0 30px rgba(18,247,214,0.2)" }}>
                    <div className="bg-neon-mint/10 rounded-full w-full h-full p-16 flex items-center justify-center">
                      <span className="text-8xl">📄</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Astro AI / AstroWhisper */}
          <Card className="glass-panel border-none overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
                <div className="bg-gradient-to-bl from-dreamy-pink/20 to-transparent p-8 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-space-black/80"></div>
                  <div className="relative z-10 aspect-square w-full max-w-md flex items-center justify-center animate-pulse-glow" style={{ boxShadow: "0 0 30px rgba(255,112,166,0.2)" }}>
                    <div className="bg-dreamy-pink/10 rounded-full w-full h-full p-16 flex items-center justify-center">
                      <span className="text-8xl">✨</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-dreamy-pink/10 border border-dreamy-pink/20">
                    <span className="text-xs font-jetbrains text-dreamy-pink">04. ASTROLOGY & TAROT</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-sora font-bold mt-2 mb-6">
                    <span className="text-dreamy-pink">AstroWhisper</span> — Spiritual Insights
                  </h2>
                  <p className="text-text-grey mb-8 leading-relaxed">
                    An elegant AI spiritual guide combining astrology, tarot, moon cycles, and rituals. AstroWhisper offers 
                    deeply personal insights, cosmic compatibility, and manifestation journeys — all powered by ancient wisdom and modern AI.
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
                  
                  <div className="flex items-center gap-2 text-text-grey text-sm mb-8">
                    <span className="text-dreamy-pink">🌐</span>
                    <span>astro.innovatalabs.ai</span>
                  </div>
                  
                  <a
                    className="btn-primary group flex items-center gap-2 mt-8"
                    href="https://astrowhisper.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: 'linear-gradient(to right, #FF70A6, #FFA6C7)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    Explore AstroWhisper <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-10 w-40 h-40 rounded-full bg-neon-mint/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-60 h-60 rounded-full bg-cyber-purple/5 blur-3xl"></div>
      </section>
      
      {/* Product Directory Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="glass-panel p-10 backdrop-blur-xl">
            <h2 className="text-2xl font-sora font-bold mb-8 text-center">Product Directory</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-neon-mint">Product</th>
                    <th className="px-4 py-3 text-neon-mint">Category</th>
                    <th className="px-4 py-3 text-neon-mint">Website</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 text-white">Serene</td>
                    <td className="px-4 py-4 text-text-grey">Mental Wellness AI</td>
                    <td className="px-4 py-4 text-text-grey">serene.innovatalabs.ai</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 text-white">Resuminate</td>
                    <td className="px-4 py-4 text-text-grey">Career Tools</td>
                    <td className="px-4 py-4 text-text-grey">resumegenius.innovatalabs.ai</td>
                  </tr>
                  <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 text-white">Edutians</td>
                    <td className="px-4 py-4 text-text-grey">Smart Learning</td>
                    <td className="px-4 py-4 text-text-grey">edutians.innovatalabs.ai</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 text-white">AstroWhisper</td>
                    <td className="px-4 py-4 text-text-grey">Astrology & Tarot</td>
                    <td className="px-4 py-4 text-text-grey">astro.innovatalabs.ai</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
              Let's Build the Future Together
            </h2>
            <p className="text-text-grey mb-10 max-w-2xl mx-auto text-lg">
              Choose the AI platform that resonates with your needs or try our personalized recommendation tool to find your perfect match.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="btn-primary text-lg py-6 px-8 group">
                Join Our Waitlist <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-secondary text-lg py-6 px-8">
                Partner With Us
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
