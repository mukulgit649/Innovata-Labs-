
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlanetBackground from '@/components/PlanetBackground';
import { ArrowRight } from 'lucide-react';

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
              Pioneers in developing AI technology that enhances human potential across education, wellness, and spiritual insights.
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
                To harness the power of artificial intelligence to create transformative experiences that enhance human potential, foster personal growth, and improve quality of life.
              </p>
              <p className="text-text-grey">
                We believe that AI should serve humanity by amplifying our capabilities, supporting our well-being, and helping us connect with ourselves and others more deeply.
              </p>
            </div>
            
            <div className="glass-panel p-8 animate-pulse-glow" style={{ animationDelay: "1s" }}>
              <h2 className="text-2xl font-sora font-bold mb-6 text-cyber-purple">Our Vision</h2>
              <p className="text-text-grey mb-6">
                A world where AI-powered tools are seamlessly integrated into daily life, enhancing human experiences rather than replacing them, and making specialized knowledge accessible to everyone.
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
            <h2 className="text-3xl font-sora font-bold mb-10 text-center">Our Philosophy</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint font-sora font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-sora font-semibold mb-3">Human-Centered AI</h3>
                  <p className="text-text-grey">
                    Our technology is designed to amplify human capabilities and creativity, not replace them. We build AI that works alongside people, respecting human agency and enhancing what makes us human.
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
                  <h3 className="text-xl font-sora font-semibold mb-3">Ethical Innovation</h3>
                  <p className="text-text-grey">
                    We hold ourselves to the highest ethical standards in AI development, prioritizing transparency, fairness, and responsible use. Our products are built with strong privacy protections and designed to avoid bias.
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
                  <h3 className="text-xl font-sora font-semibold mb-3">Accessible Technology</h3>
                  <p className="text-text-grey">
                    We believe that advanced AI should be accessible to all, not just a privileged few. We design our platforms to be intuitive, affordable, and available to diverse users regardless of technical expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-sora font-bold mb-4">Our Leadership Team</h2>
            <p className="text-text-grey">
              Meet the visionaries behind Innovata Labs who are shaping the future of AI technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member cards would go here */}
            <div className="glass-panel p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-mint to-cyber-purple mx-auto mb-4"></div>
              <h3 className="text-xl font-sora font-semibold mb-1">Alexandra Chen</h3>
              <p className="text-neon-mint text-sm mb-4">CEO & Founder</p>
              <p className="text-text-grey text-sm">
                Former AI research lead at Tech Innovators with a passion for ethical AI development and accessibility.
              </p>
            </div>
            
            <div className="glass-panel p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyber-purple to-dreamy-pink mx-auto mb-4"></div>
              <h3 className="text-xl font-sora font-semibold mb-1">Marcus Wilson</h3>
              <p className="text-cyber-purple text-sm mb-4">CTO</p>
              <p className="text-text-grey text-sm">
                AI systems architect with 15+ years experience building scalable machine learning solutions.
              </p>
            </div>
            
            <div className="glass-panel p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-dreamy-pink to-neon-mint mx-auto mb-4"></div>
              <h3 className="text-xl font-sora font-semibold mb-1">Sophia Patel</h3>
              <p className="text-dreamy-pink text-sm mb-4">Head of Product</p>
              <p className="text-text-grey text-sm">
                Former product lead at Global Tech with expertise in user-centered design and product strategy.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-secondary inline-flex items-center gap-2">
              Join Our Team <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
