import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mint">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 opacity-15"
        >
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" alt="Hero Background" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-mint/50 via-mint/80 to-mint"></div>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-20"
      >
        <motion.span variants={itemVariants} className="text-forest tracking-[0.3em] uppercase text-xs mb-8 block font-medium">
          Kukiwa Visuals &bull; Est. 2024
        </motion.span>
        
        <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-serif text-forest-dark mb-8 leading-[1.1] tracking-tight">
          Mengabadikan Rasa,<br />
          <span className="italic font-light text-forest">Merawat Waktu.</span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-forest-dark/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Menangkap ketulusan dan kehangatan dalam bingkai harmoni. Karena setiap detik adalah cerita yang layak dikenang selamanya.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a href="#portfolio" className="relative group overflow-hidden bg-forest-dark text-mint px-10 py-4 rounded-full transition-all duration-300">
            <span className="relative z-10 tracking-widest text-xs uppercase font-medium">Jelajahi Karya</span>
            <div className="absolute inset-0 bg-forest w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest text-forest/50 mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-forest/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
