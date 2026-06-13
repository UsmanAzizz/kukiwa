import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-16 md:py-24 bg-forest text-mint border-y-4 border-forest-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="order-2 lg:order-1 relative">
          <motion.div 
            initial={{ rotate: -5, scale: 0.9 }}
            whileInView={{ rotate: -2, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="bg-white border-4 border-forest-dark p-4 rounded-3xl shadow-[8px_8px_0px_#1a6a1a] transform -rotate-2 w-full max-w-md mx-auto"
          >
            <img 
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800" 
              alt="Our Vibe" 
              className="w-full h-auto rounded-2xl border-2 border-forest-dark"
            />
            <div className="mt-4 text-center">
              <span className="font-black text-forest-dark text-xl uppercase tracking-widest">Kukiwa Vibe</span>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <div className="inline-block bg-mint text-forest-dark border-4 border-forest-dark font-black px-4 py-2 rounded-full shadow-[4px_4px_0px_#1a6a1a] transform rotate-2">
            KENAPA KAMI BEDA?
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-[1.1] drop-shadow-[4px_4px_0px_#1a6a1a]">
            Santai Saja, <br/> Kita Nangkap Momen Asli.
          </h2>
          
          <div className="text-lg md:text-xl font-bold leading-relaxed space-y-4 text-mint/90 bg-forest-dark p-5 md:p-6 rounded-2xl border-4 border-black shadow-[6px_6px_0px_#000]">
            <p>
              Gak ada yang namanya disuruh pose aneh-aneh sampai pegal. Kukiwa itu soal bikin kalian nyaman dan jadi diri sendiri.
            </p>
            <p>
              Hasilnya? Foto dan video yang 100% natural, jujur, tapi tetep proper dan sopan buat dipajang di ruang tamu keluarga.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
