import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 py-4 px-6 md:px-10 bg-space-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/brain-bulb-icon.svg"
              alt="Innovata Labs Logo"
              className="h-10 w-auto mr-3 drop-shadow-lg"
              style={{ display: 'inline-block' }}
            />
            <span className="text-2xl font-sora font-bold tracking-tight">
              <span className="text-white">Innovata</span>
              <span className="text-neon-mint">Labs</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/products" className="nav-item">Products</Link>
            <button className="btn-primary">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-space-black/95 backdrop-blur-md border-b border-white/10 py-4">
            <div className="flex flex-col items-center gap-4">
              <Link to="/" className="nav-item py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/about" className="nav-item py-2" onClick={toggleMenu}>About</Link>
              <Link to="/products" className="nav-item py-2" onClick={toggleMenu}>Products</Link>
              <button className="btn-primary w-3/4 mt-2">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
