import React from 'react';
import { Video, ArrowRight, Camera, Lightbulb, Clapperboard } from 'lucide-react';
import { motion } from 'framer-motion';

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
            <a href="#contact" className="bg-white border-2 border-forest-dark rounded-xl md:rounded-2xl px-6 py-3 md:px-8 md:py-4 font-bold text-forest-dark text-base md:text-lg flex items-center justify-center hover:-translate-y-1 hover:shadow-[4px_4px_0px_#1a6a1a] md:hover:shadow-[6px_6px_0px_#1a6a1a] transition-all active:translate-y-0 active:shadow-none w-full sm:w-auto">
              Tanya Harga
            </a>
          </motion.div>
        </div>

        {/* SINGLE IMAGE SECOND ON MOBILE */}
        <div className="order-2 relative w-full max-w-[280px] sm:max-w-md mx-auto lg:max-w-none mt-4 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 1 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="group bg-white border-2 md:border-4 border-forest-dark rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[6px_6px_0px_#1a6a1a] md:shadow-[10px_10px_0px_#1a6a1a] aspect-[4/5] relative z-10 hover:rotate-0 transition-transform duration-300"
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
