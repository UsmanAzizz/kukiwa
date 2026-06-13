import React, { useState, useEffect } from 'react';
import { Video, ArrowRight, Camera, Lightbulb, Clapperboard, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const iconVariations = [
  <path key="1" d="M5 12h14 M12 5v14" />, // Plus
  <circle key="2" cx="12" cy="12" r="10" fill="none" />, // Circle Outline
  <circle key="3" cx="12" cy="12" r="10" fill="currentColor" />, // Circle Fill
  <rect key="4" width="18" height="18" x="3" y="3" fill="none" rx="2" />, // Square Outline
  <rect key="5" width="18" height="18" x="3" y="3" fill="currentColor" rx="2" />, // Square Fill
  <path key="6" d="M3 20h18L12 4z" fill="none" />, // Triangle Outline
  <path key="7" d="M3 20h18L12 4z" fill="currentColor" />, // Triangle Fill
  <path key="8" d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z" fill="currentColor" />, // Sparkle
  <path key="9" d="M4 12c2-4 6-4 8 0s6 4 8 0" fill="none" />, // Squiggle
  <g key="10" fill="currentColor"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></g>, // Dots
  <path key="11" d="M21.3 15.3l-8.6 8.6c-.8.8-2.1.8-2.8 0l-7.2-7.2c-.8-.8-.8-2.1 0-2.8l8.6-8.6c.8-.8 2.1-.8 2.8 0l7.2 7.2c.8.8.8 2.1 0 2.8z M14.5 5.5l4 4 M12 8l4 4 M9.5 10.5l4 4 M7 13l4 4" fill="none" />, // Ruler
  <g key="12"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" fill="none" /><circle cx="12" cy="13" r="3" fill="none" /></g>, // Camera
  <path key="13" d="M3 12h3c1.5 0 2.5-1.5 4-3 2-3 4-3 6 0 1.5 1.5 2.5 3 4 3h3" fill="none" />, // Spring
  <path key="14" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />, // Classic Star
];

const RandomDoodles = () => {
  const [doodles, setDoodles] = useState([]);

  useEffect(() => {
    const newDoodles = [];
    const numDoodles = 35; // Banyak ikon
    for (let i = 0; i < numDoodles; i++) {
      newDoodles.push({
        id: i,
        size: Math.floor(Math.random() * 40) + 16, // Ukuran random 16px - 56px (tidak terlalu besar)
        left: Math.floor(Math.random() * 140) - 20, // -20% to 120% letak acak
        top: Math.floor(Math.random() * 140) - 20,
        rotation: Math.floor(Math.random() * 360),
        iconIndex: Math.floor(Math.random() * iconVariations.length),
        opacity: (Math.floor(Math.random() * 15) + 5) / 100, // 0.05 to 0.20
        isBlack: Math.random() > 0.5
      });
    }
    setDoodles(newDoodles);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-visible pointer-events-none">
      {doodles.map(d => (
        <div 
          key={d.id} 
          className={`absolute ${d.isBlack ? 'text-black' : 'text-forest-dark'}`}
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            transform: `rotate(${d.rotation}deg)`,
            opacity: d.opacity,
            width: `${d.size}px`,
            height: `${d.size}px`
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {iconVariations[d.iconIndex]}
          </svg>
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-20 md:pt-32 pb-16 md:pb-20 bg-[#F5F5F0] min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
        
        {/* TEXT FIRST ON MOBILE */}
        <div className="order-1 flex flex-col items-start space-y-6 md:space-y-8 z-10 mt-4 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 10, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="bg-white border-2 border-forest-dark rounded-full px-4 py-1.5 md:px-5 md:py-2 font-bold text-xs md:text-sm shadow-[2px_2px_0px_#1a6a1a] md:shadow-[4px_4px_0px_#1a6a1a] flex items-center gap-2"
          >
            <Video className="w-4 h-4 md:w-5 md:h-5 text-forest" strokeWidth={2.5} />
            Fotografi & Sinema Kece
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-black text-forest-dark uppercase leading-[1.05] tracking-tight"
          >
            Nangkep <br />
            <span className="text-white relative inline-block my-1 md:my-2">
              <span className="absolute inset-0 bg-forest rounded-xl md:rounded-2xl transform rotate-1"></span>
              <span className="relative z-10 px-3 md:px-4">Momen</span>
            </span> <br />
            Natural.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg font-bold text-forest-dark/80 max-w-sm md:max-w-md leading-relaxed"
          >
            Gak perlu kaku. Kami bikin momen bahagiamu tetap nyata, seru, dan pastinya sopan dilihat bareng keluarga.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <a href="#portfolio" className="bg-forest border-2 border-forest-dark rounded-xl md:rounded-2xl px-6 py-3 md:px-8 md:py-4 font-bold text-mint text-base md:text-lg flex items-center justify-center hover:-translate-y-1 hover:shadow-[4px_4px_0px_#1a6a1a] md:hover:shadow-[6px_6px_0px_#1a6a1a] transition-all active:translate-y-0 active:shadow-none w-full sm:w-auto group">
              Lihat Karya <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
            </a>
            <a href="https://wa.me/6281392313836" className="bg-white border-2 border-forest-dark rounded-xl md:rounded-2xl px-6 py-3 md:px-8 md:py-4 font-bold text-forest-dark text-base md:text-lg flex items-center justify-center hover:-translate-y-1 hover:shadow-[4px_4px_0px_#1a6a1a] md:hover:shadow-[6px_6px_0px_#1a6a1a] transition-all active:translate-y-0 active:shadow-none w-full sm:w-auto">
              Tanya Harga
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3 pt-4 w-full justify-center sm:justify-start"
          >
            <a href="https://web.facebook.com/KAMPOENG.GUCI.videography.Photography" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border-2 border-forest-dark rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-[4px_4px_0px_#1a6a1a] transition-all text-forest-dark">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/sonobae?igsh=MWhmaXdwd2J5aG9mbA==" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border-2 border-forest-dark rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-[4px_4px_0px_#1a6a1a] transition-all text-forest-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a href="https://www.youtube.com/@sonobae8917" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border-2 border-forest-dark rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-[4px_4px_0px_#1a6a1a] transition-all text-forest-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
            </a>
            <a href="https://www.tiktok.com/@sonobae234?_r=1&_t=ZS-97ASpKifnVA" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white border-2 border-forest-dark rounded-full flex items-center justify-center hover:-translate-y-1 hover:shadow-[4px_4px_0px_#1a6a1a] transition-all text-forest-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
          </motion.div>
        </div>

        {/* SINGLE IMAGE SECOND ON MOBILE */}
        <div className="order-2 relative w-full max-w-[280px] sm:max-w-md mx-auto lg:max-w-none mt-8 md:-mt-8 lg:-mt-12">
          
          {/* Fully Randomized Mass Background Doodles */}
          <RandomDoodles />

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="group bg-white border-2 md:border-4 border-forest-dark rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[6px_6px_0px_#1a6a1a] md:shadow-[10px_10px_0px_#1a6a1a] aspect-[4/5] relative z-10 transition-transform duration-300"
          >
            <img 
              src="/asset_kukiwa/owner.png" 
              alt="Momen Bahagia" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
