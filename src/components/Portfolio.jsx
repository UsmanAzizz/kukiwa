import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Heart, Clapperboard, Sparkles, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const items = [
    { title: "Graduation", icon: <Sparkles className="w-6 h-6" />, img: "/asset_kukiwa/foto1.png", color: "bg-[#FFB5A7]" },
    { title: "Wedding", icon: <Heart className="w-6 h-6" />, img: "/asset_kukiwa/foto2.png", color: "bg-[#9BF6FF]" },
    { title: "Casual", icon: <ImageIcon className="w-6 h-6" />, img: "/asset_kukiwa/foto3.png", color: "bg-[#CAFFBF]" },
    { title: "Pre-Wed", icon: <Heart className="w-6 h-6" />, img: "/asset_kukiwa/foto4.png", color: "bg-[#FFC6FF]" },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-forest-dark text-white border-y-4 border-forest-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 text-mint drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            Galeri Kece
          </h2>
          <p className="text-lg md:text-xl font-bold max-w-2xl mx-auto text-mint/80">
            Geser ke kanan buat liat hasil jepretan aslinya.
          </p>
        </div>

        {/* Horizontal Scroll / Slider */}
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {items.map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
              key={idx} 
              className="flex-shrink-0 w-72 md:w-80 snap-center group cursor-pointer"
            >
              <div className="bg-white border-4 border-black rounded-[2rem] overflow-hidden shadow-[6px_6px_0px_#F5FFFA] aspect-[3/4] relative mb-4 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0px_#F5FFFA] transition-all duration-300">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" />
                <div className={`absolute top-4 left-4 ${item.color} border-2 border-black rounded-full p-2 shadow-[2px_2px_0px_#000] text-black`}>
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-black uppercase text-center">{item.title}</h3>
            </motion.div>
          ))}
          
          {/* See More Card */}
          <div className="flex-shrink-0 w-72 md:w-80 snap-center flex items-center justify-center p-4">
            <button className="bg-mint border-4 border-black rounded-[2rem] w-full h-full min-h-[300px] flex flex-col items-center justify-center font-black text-black text-2xl hover:-translate-y-2 hover:shadow-[8px_8px_0px_rgba(245,255,250,1)] transition-all active:translate-y-0 shadow-[4px_4px_0px_rgba(245,255,250,1)] group">
              <span>Liat Semua</span>
              <ArrowRight className="w-12 h-12 mt-4 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
      
      {/* CSS to hide scrollbar but keep functionality */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default Portfolio;
