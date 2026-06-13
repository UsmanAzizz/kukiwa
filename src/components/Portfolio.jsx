import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Heart, Clapperboard, Sparkles } from 'lucide-react';

const Portfolio = () => {
  const items = [
    { title: "Graduation", icon: <Sparkles className="w-6 h-6" />, img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800", color: "bg-[#FFB5A7]" },
    { title: "Wedding", icon: <Heart className="w-6 h-6" />, img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800", color: "bg-[#9BF6FF]" },
    { title: "Casual", icon: <ImageIcon className="w-6 h-6" />, img: "https://images.unsplash.com/photo-1623091410901-00e2d268901f?q=80&w=800", color: "bg-[#CAFFBF]" },
    { title: "Video", icon: <Clapperboard className="w-6 h-6" />, img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800", color: "bg-[#FDFFB6]" }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-forest-dark text-white border-t-4 border-forest-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 text-mint drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Galeri Kece
          </h2>
          <p className="text-lg md:text-xl font-bold max-w-2xl mx-auto">
            Gak usah banyak teori, langsung cek aja hasil jepretan aslinya.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              key={idx} 
              className="group cursor-pointer"
            >
              <div className="bg-white border-4 border-black rounded-[2rem] overflow-hidden shadow-[6px_6px_0px_#F5FFFA] aspect-[3/4] relative mb-4 hover:-translate-y-2 transition-transform duration-300">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
                <div className={`absolute top-4 left-4 ${item.color} border-2 border-black rounded-full p-2 shadow-[2px_2px_0px_#000] text-black`}>
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase text-center">{item.title}</h3>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <button className="bg-mint border-4 border-black rounded-2xl px-10 py-4 font-black text-black text-xl hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(245,255,250,1)] transition-all active:translate-y-0 active:shadow-[2px_2px_0px_rgba(245,255,250,1)]">
            Muat Lebih Banyak
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
