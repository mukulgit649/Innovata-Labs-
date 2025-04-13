
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlanetBackground from '@/components/PlanetBackground';
import { Mail, MapPin, Phone, MessageSquare, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond shortly.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      <PlanetBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-sora font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-text-grey">
              Have questions about our products or want to learn more about Innovata Labs?
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-panel p-6 text-center">
              <Mail className="w-8 h-8 text-neon-mint mx-auto mb-4" />
              <h3 className="text-lg font-sora font-semibold mb-2">Email Us</h3>
              <a href="mailto:info@innovatalabs.com" className="text-text-grey hover:text-neon-mint transition-colors">
                info@innovatalabs.com
              </a>
            </div>
            
            <div className="glass-panel p-6 text-center">
              <MapPin className="w-8 h-8 text-cyber-purple mx-auto mb-4" />
              <h3 className="text-lg font-sora font-semibold mb-2">Visit Us</h3>
              <p className="text-text-grey">
                350 Tech Avenue<br />
                San Francisco, CA 94107
              </p>
            </div>
            
            <div className="glass-panel p-6 text-center">
              <Phone className="w-8 h-8 text-dreamy-pink mx-auto mb-4" />
              <h3 className="text-lg font-sora font-semibold mb-2">Call Us</h3>
              <a href="tel:+14155552671" className="text-text-grey hover:text-dreamy-pink transition-colors">
                +1 (415) 555-2671
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Chat */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="glass-panel p-8 animate-pulse-glow">
              <h2 className="text-2xl font-sora font-semibold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-text-grey mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-space-black/60 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:border-neon-mint"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-text-grey mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-space-black/60 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:border-neon-mint"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-text-grey mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-space-black/60 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:border-neon-mint"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-text-grey mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-space-black/60 border border-white/20 rounded-md px-4 py-2 text-white focus:outline-none focus:border-neon-mint"
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
            
            {/* AI Chatbot */}
            <div className="glass-panel p-8 flex flex-col h-[600px]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-mint to-cyber-purple flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-sora font-semibold">AI Assistant</h2>
                  <p className="text-text-grey text-sm">Ask about our products or company</p>
                </div>
              </div>
              
              <div className="flex-grow bg-space-black/40 rounded-lg p-4 mb-4 overflow-y-auto">
                {/* Chat messages would go here */}
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-mint to-cyber-purple flex-shrink-0 flex items-center justify-center text-xs text-white">
                    AI
                  </div>
                  <div className="glass-panel p-3 max-w-[80%]">
                    <p className="text-text-white text-sm">
                      Hello! I'm the Innovata Labs AI assistant. How can I help you today?
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3 mb-4">
                  <div className="glass-panel p-3 max-w-[80%] border-dreamy-pink/30">
                    <p className="text-text-white text-sm">
                      Can you tell me more about Edutians?
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-dreamy-pink/20 flex-shrink-0 flex items-center justify-center text-xs text-dreamy-pink">
                    You
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-mint to-cyber-purple flex-shrink-0 flex items-center justify-center text-xs text-white">
                    AI
                  </div>
                  <div className="glass-panel p-3 max-w-[80%]">
                    <p className="text-text-white text-sm">
                      Edutians is our AI-powered learning platform that creates personalized education experiences. It adapts to your learning style, tracks your progress, and makes complex subjects easier to understand through interactive lessons and smart feedback.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full bg-space-black/60 border border-white/20 rounded-md pl-4 pr-12 py-3 text-white focus:outline-none focus:border-neon-mint"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neon-mint hover:text-white transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-sora font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-text-grey">
              Find quick answers to common questions about our platforms and services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="glass-panel p-6">
              <h3 className="text-xl font-sora font-semibold mb-3">How does Innovata Labs' AI technology work?</h3>
              <p className="text-text-grey">
                Our AI systems use advanced machine learning algorithms, natural language processing, and personalization engines to create adaptive experiences tailored to each user's unique needs and preferences.
              </p>
            </div>
            
            <div className="glass-panel p-6">
              <h3 className="text-xl font-sora font-semibold mb-3">Are your platforms available worldwide?</h3>
              <p className="text-text-grey">
                Yes, our platforms are accessible globally. We currently offer full support in English, with additional language support planned for future releases.
              </p>
            </div>
            
            <div className="glass-panel p-6">
              <h3 className="text-xl font-sora font-semibold mb-3">Do you offer enterprise solutions?</h3>
              <p className="text-text-grey">
                Yes, we provide customized enterprise packages for organizations looking to integrate our AI platforms into their existing systems or develop bespoke solutions. Contact our sales team for more information.
              </p>
            </div>
            
            <div className="glass-panel p-6">
              <h3 className="text-xl font-sora font-semibold mb-3">How do you protect user privacy?</h3>
              <p className="text-text-grey">
                We take privacy seriously. All personal data is encrypted, and we follow strict data protection protocols. We never sell user data to third parties, and users maintain control over their information through our comprehensive privacy settings.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
