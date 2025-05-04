
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlanetBackground from '@/components/PlanetBackground';
import { ArrowRight, Brain, FileText, GraduationCap, Sparkles } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const About = () => {
  return (
    <div className="min-h-screen">
      <PlanetBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-sora font-bold mb-6">About Innovata Labs</h1>
            <p className="text-xl text-text-grey">
              A future-forward digital innovation company dedicated to solving real-world problems using the power of AI, emotional intelligence, and intuitive design.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-panel p-8 animate-pulse-glow">
              <h2 className="text-2xl font-sora font-bold mb-6 text-neon-mint">Our Mission</h2>
              <p className="text-text-grey mb-6">
                We're not just building tools—we're crafting intelligent ecosystems that enhance lives, elevate human potential, and unlock the future.
              </p>
              <p className="text-text-grey">
                We bring together empathy, technology, and vision to create products that lead in their industries — from career acceleration and mental wellness to personalized learning and astrology-based self-discovery.
              </p>
            </div>
            
            <div className="glass-panel p-8 animate-pulse-glow" style={{ animationDelay: "1s" }}>
              <h2 className="text-2xl font-sora font-bold mb-6 text-cyber-purple">Our Vision</h2>
              <p className="text-text-grey mb-6">
                To become the most impactful innovation lab of the next decade — empowering millions through problem-solving products that matter.
              </p>
              <p className="text-text-grey">
                We envision AI as a partner in human growth and development, breaking down barriers to education, wellness, and spiritual understanding.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-sora font-bold mb-10 text-center">Why Choose Innovata Labs</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint font-sora font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-sora font-semibold mb-3">AI With Purpose</h3>
                  <p className="text-text-grey">
                    All our products use AI to enhance human lives, not replace them. We believe that AI should serve humanity by amplifying our capabilities.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple font-sora font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-sora font-semibold mb-3">Design-First Thinking</h3>
                  <p className="text-text-grey">
                    We obsess over user experience, UI, and emotional connection. Our products are designed with humans at the center.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-dreamy-pink/20 flex items-center justify-center text-dreamy-pink font-sora font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-sora font-semibold mb-3">Privacy-Focused</h3>
                  <p className="text-text-grey">
                    We never compromise user trust. Full transparency, always. Our products are built with strong privacy protections by design.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint font-sora font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-sora font-semibold mb-3">Built to Scale</h3>
                  <p className="text-text-grey">
                    Designed for growth, backed by robust technology. Our platforms are engineered to grow with you and adapt to changing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-sora font-bold mb-10 text-center">Our Flagship Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              title="Serene" 
              description="Your AI companion for mental wellness. Helps users cope with anxiety, depression, loneliness, and burnout with empathy and mindfulness tools."
              icon="🧠"
              color="#7A5FFF"
              glowColor="rgba(122,95,255,0.5)"
            />
            
            <ProductCard 
              title="ResuGenius" 
              description="The smartest resume builder on Earth with real-time keyword optimization, job description matching, and AI coaching."
              icon="📄"
              color="#12F7D6"
              glowColor="rgba(18,247,214,0.5)"
            />
            
            <ProductCard 
              title="Edutians" 
              description="Revolutionizing learning intelligently. Transform how students absorb, retain, and apply knowledge with personalized learning tools."
              icon="🎓"
              color="#FF70A6"
              glowColor="rgba(255,112,166,0.5)"
            />
            
            <ProductCard 
              title="AstroWhisper" 
              description="Let the stars whisper your truth. AI spiritual guide combining astrology, tarot, moon cycles, and rituals for deeply personal insights."
              icon="✨"
              color="#12F7D6"
              glowColor="rgba(18,247,214,0.5)"
            />
          </div>
          
          <div className="mt-16">
            <div className="glass-panel p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-sora font-bold mb-6 text-center">Product Directory</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 text-neon-mint">Product</th>
                      <th className="text-left py-3 px-4 text-neon-mint">Category</th>
                      <th className="text-left py-3 px-4 text-neon-mint">Website</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 text-white">Serene</td>
                      <td className="py-3 px-4 text-text-grey">Mental Wellness AI</td>
                      <td className="py-3 px-4 text-cyber-purple">serene.innovatalabs.ai</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 text-white">ResuGenius</td>
                      <td className="py-3 px-4 text-text-grey">Career Tools</td>
                      <td className="py-3 px-4 text-cyber-purple">resumegenius.innovatalabs.ai</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 text-white">Edutians</td>
                      <td className="py-3 px-4 text-text-grey">Smart Learning</td>
                      <td className="py-3 px-4 text-cyber-purple">edutians.innovatalabs.ai</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white">AstroWhisper</td>
                      <td className="py-3 px-4 text-text-grey">Astrology & Tarot</td>
                      <td className="py-3 px-4 text-cyber-purple">astro.innovatalabs.ai</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-panel p-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-sora font-bold mb-6">Let's Build the Future Together</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button className="btn-primary">Contact Us</button>
              <button className="btn-secondary">Join Our Waitlist</button>
              <button className="btn-secondary">Partnerships & Hiring</button>
            </div>
            <p className="text-text-grey">
              Ready to experience the future of AI-powered solutions? Reach out to learn more about our products.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
