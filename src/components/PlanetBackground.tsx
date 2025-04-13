
import React, { useEffect, useRef } from 'react';

const PlanetBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Star properties
    const stars: {x: number, y: number, radius: number, opacity: number, speed: number}[] = [];
    const createStars = () => {
      const numStars = Math.floor(canvas.width * canvas.height / 2000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05
        });
      }
    };

    // Planet properties
    const planets = [
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.2,
        radius: 50,
        color: '#7A5FFF',
        glow: '#7A5FFF',
        orbitSpeed: 0.0005,
        orbitRadius: 0,
        orbitAngle: 0
      },
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.7,
        radius: 30,
        color: '#12F7D6',
        glow: '#12F7D6',
        orbitSpeed: 0.0008,
        orbitRadius: 0,
        orbitAngle: 0
      },
      {
        x: canvas.width * 0.6,
        y: canvas.height * 0.8,
        radius: 20,
        color: '#FF70A6',
        glow: '#FF70A6',
        orbitSpeed: 0.001,
        orbitRadius: 0,
        orbitAngle: 0
      }
    ];

    createStars();

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Move stars
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Draw planets
      planets.forEach(planet => {
        // Update orbit position
        planet.orbitAngle += planet.orbitSpeed;
        
        // Create gradient for planet
        const gradient = ctx.createRadialGradient(
          planet.x, planet.y, 0,
          planet.x, planet.y, planet.radius
        );
        gradient.addColorStop(0, planet.color);
        gradient.addColorStop(1, 'rgba(13, 13, 13, 0.8)');
        
        // Draw glow
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(planet.glow)}, 0.1)`;
        ctx.fill();
        
        // Draw planet
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };

    // Helper to convert hex to rgb
    function hexToRgb(hex: string): string {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r}, ${g}, ${b}`;
    }

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-space-black"
    />
  );
};

export default PlanetBackground;
