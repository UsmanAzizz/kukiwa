import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-mint/95 shadow-sm py-4' : 'bg-transparent py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-3xl font-serif font-bold tracking-widest text-forest-dark cursor-pointer">
              KUKIWA
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex space-x-10"
          >
            {[
              { name: 'Beranda', link: 'home' },
              { name: 'Filosofi', link: 'philosophy' },
              { name: 'Karya', link: 'portfolio' },
              { name: 'Layanan', link: 'services' }
            ].map((item, i) => (
              <a 
                key={item.name} 
                href={`#${item.link}`} 
                className="text-xs uppercase tracking-[0.2em] text-forest-dark hover:text-forest transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-forest transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex"
          >
            <a href="#contact" className="border border-forest-dark text-forest-dark px-7 py-2.5 rounded-full hover:bg-forest-dark hover:text-mint transition-all duration-300 tracking-wider text-xs uppercase overflow-hidden relative group">
              <span className="relative z-10">Jadwalkan</span>
              <div className="absolute inset-0 bg-forest-dark w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
