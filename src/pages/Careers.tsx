
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlanetBackground from '@/components/PlanetBackground';
import { ArrowRight } from 'lucide-react';

const Careers = () => {
  // Sample job listings
  const jobListings = [
    {
      id: 1,
      title: "AI Research Scientist",
      department: "R&D",
      location: "San Francisco, CA (Remote Optional)",
      type: "Full-time",
      description: "Join our AI research team to develop cutting-edge algorithms for our educational platform Edutians."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Work on the next generation of our wellness platform Serene, building features that help users achieve mindfulness."
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      description: "Create intuitive and beautiful interfaces for our Astro AI platform, making spiritual insights accessible to all."
    },
    {
      id: 4,
      title: "Data Scientist",
      department: "Data",
      location: "Remote",
      type: "Full-time",
      description: "Analyze user interaction data to improve personalization algorithms across all platforms."
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Lead product development for new features in our AI ecosystem, from conception to launch."
    }
  ];

  return (
    <div className="min-h-screen">
      <PlanetBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-sora font-bold mb-6">Join Our Mission</h1>
            <p className="text-xl text-text-grey">
              Be part of a team that's building the future of AI technology
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-sora font-bold mb-6">Why Work With Us</h2>
            <p className="text-text-grey">
              At Innovata Labs, we're more than just a tech company. We're a community of innovators committed to creating AI that enhances human experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint mx-auto mb-6">
                🚀
              </div>
              <h3 className="text-xl font-sora font-semibold mb-4">Cutting-Edge Innovation</h3>
              <p className="text-text-grey">
                Work on breakthrough AI technology that's reshaping how people learn, find well-being, and connect with spiritual insights.
              </p>
            </div>
            
            <div className="glass-panel p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple mx-auto mb-6">
                🌍
              </div>
              <h3 className="text-xl font-sora font-semibold mb-4">Remote-First Culture</h3>
              <p className="text-text-grey">
                Enjoy the flexibility of our distributed team structure with teammates across the globe, united by our shared mission.
              </p>
            </div>
            
            <div className="glass-panel p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-dreamy-pink/20 flex items-center justify-center text-dreamy-pink mx-auto mb-6">
                🌱
              </div>
              <h3 className="text-xl font-sora font-semibold mb-4">Growth & Development</h3>
              <p className="text-text-grey">
                Benefit from our commitment to continuous learning, with dedicated time for skill development and research.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-sora font-bold mb-10">Open Positions</h2>
            
            <div className="space-y-6">
              {jobListings.map((job) => (
                <div key={job.id} className="glass-panel p-6 hover:shadow-[0_0_15px_rgba(18,247,214,0.2)] transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-sora font-semibold text-white">{job.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm">
                        <span className="text-neon-mint">{job.department}</span>
                        <span className="hidden sm:inline text-text-grey">•</span>
                        <span className="text-text-grey">{job.location}</span>
                        <span className="hidden sm:inline text-text-grey">•</span>
                        <span className="text-text-grey">{job.type}</span>
                      </div>
                      <p className="text-text-grey mt-3">{job.description}</p>
                    </div>
                    <button className="btn-secondary whitespace-nowrap self-start md:self-center">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-text-grey mb-6">Don't see a position that matches your skills?</p>
              <button className="btn-primary">
                Send Open Application
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Culture */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-sora font-bold mb-6">Our Culture</h2>
                <p className="text-text-grey mb-6">
                  We've built a company culture based on collaboration, creativity, and care for the human impact of our technology.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint mt-1">✓</div>
                    <span className="text-text-grey">Flexible working hours and locations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint mt-1">✓</div>
                    <span className="text-text-grey">Regular team retreats and virtual social events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint mt-1">✓</div>
                    <span className="text-text-grey">Continuous learning opportunities and conference attendance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-neon-mint/20 flex items-center justify-center text-neon-mint mt-1">✓</div>
                    <span className="text-text-grey">Competitive compensation and equity packages</span>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gradient-to-br from-neon-mint/20 to-cyber-purple/20 rounded-lg"></div>
                <div className="aspect-square bg-gradient-to-br from-cyber-purple/20 to-dreamy-pink/20 rounded-lg"></div>
                <div className="aspect-square bg-gradient-to-br from-dreamy-pink/20 to-neon-mint/20 rounded-lg"></div>
                <div className="aspect-square bg-gradient-to-br from-neon-mint/20 to-dreamy-pink/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-cyber-purple/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-dreamy-pink/10 blur-3xl"></div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-sora font-bold mb-6">
              Ready to Shape the Future of AI?
            </h2>
            <p className="text-text-grey mb-8">
              Join our team of innovators, creators, and visionaries. Check out our open positions or send us your resume.
            </p>
            <button className="btn-primary flex items-center gap-2 mx-auto">
              View All Positions <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;
