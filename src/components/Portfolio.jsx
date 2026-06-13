import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", title: "Eternity" },
    { src: "https://images.unsplash.com/photo-1525258946800-98ccdeacde9f?auto=format&fit=crop&q=80&w=800", title: "Harmoni" },
    { src: "https://images.unsplash.com/photo-1623091410901-00e2d268901f?auto=format&fit=crop&q=80&w=800", title: "Momentum" },
    { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800", title: "Kehangatan" },
    { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800", title: "Ketulusan" },
    { src: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?auto=format&fit=crop&q=80&w=800", title: "Kenangan" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="portfolio" className="py-32 bg-mint">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-forest tracking-[0.2em] uppercase text-xs font-medium block mb-4">Galeri Kukiwa</span>
          <h2 className="text-4xl md:text-5xl font-serif text-forest-dark mb-6">Jejak Karya Visual</h2>
          <p className="text-forest-dark/70 max-w-2xl mx-auto font-light">
            Kumpulan narasi visual yang diabadikan dengan kelembutan dan estetika tinggi.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        >
          {images.map((img, index) => (
            <motion.div 
              variants={item}
              key={index} 
              className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-white cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <motion.span 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-mint font-serif text-2xl tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                >
                  {img.title}
                </motion.span>
                <span className="text-mint/70 text-xs tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Lihat Detail
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 text-center"
        >
          <button className="relative overflow-hidden border border-forest-dark text-forest-dark px-10 py-4 rounded-full transition-all duration-300 group hover:text-mint">
            <span className="relative z-10 tracking-widest text-xs uppercase font-medium">Lihat Arsip Lengkap</span>
            <div className="absolute inset-0 bg-forest-dark w-0 group-hover:w-full transition-all duration-500 ease-out z-0"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
