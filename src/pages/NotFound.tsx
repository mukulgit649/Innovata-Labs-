
import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlanetBackground from '@/components/PlanetBackground';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <PlanetBackground />
      <Navbar />
      
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-sora font-bold gradient-text mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-sora font-bold mb-4">Lost in Space</h2>
        <p className="text-text-grey max-w-md mb-8">
          The cosmic coordinates you're looking for don't exist in our universe. Let's navigate back to familiar territory.
        </p>
        
        <Link to="/" className="btn-primary flex items-center gap-2">
          <Home size={18} />
          Return to Home
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
