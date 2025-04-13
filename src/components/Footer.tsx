
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-space-black/80 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-sora font-bold tracking-tight">
                <span className="text-white">Innovata</span>
                <span className="text-neon-mint">Labs</span>
              </span>
            </Link>
            <p className="text-text-grey text-sm mt-4 mb-6 max-w-xs">
              Pioneering the future of AI technology across education, wellness, and spiritual insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-grey hover:text-neon-mint transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-text-grey hover:text-neon-mint transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-text-grey hover:text-neon-mint transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-text-grey hover:text-neon-mint transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-white font-sora text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-text-grey hover:text-neon-mint transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-text-grey hover:text-neon-mint transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-text-grey hover:text-neon-mint transition-colors">Products</Link></li>
              <li><Link to="/careers" className="text-text-grey hover:text-neon-mint transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-text-grey hover:text-neon-mint transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="col-span-1">
            <h3 className="text-white font-sora text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-text-grey hover:text-neon-mint transition-colors">Edutians</a></li>
              <li><a href="#" className="text-text-grey hover:text-neon-mint transition-colors">Serene</a></li>
              <li><a href="#" className="text-text-grey hover:text-neon-mint transition-colors">Astro AI</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-white font-sora text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-text-grey text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-space-black/60 border border-white/20 rounded-l-md px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-neon-mint"
              />
              <button className="bg-neon-mint text-space-black px-4 py-2 rounded-r-md text-sm font-medium hover:bg-neon-mint/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-grey text-sm">
            © {new Date().getFullYear()} Innovata Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-text-grey text-sm hover:text-neon-mint transition-colors">Privacy Policy</a>
            <a href="#" className="text-text-grey text-sm hover:text-neon-mint transition-colors">Terms of Service</a>
            <a href="#" className="text-text-grey text-sm hover:text-neon-mint transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
