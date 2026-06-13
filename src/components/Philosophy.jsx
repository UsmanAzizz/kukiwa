import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-16 md:py-24 bg-forest text-mint border-y-4 border-forest-dark overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-8 relative z-10">
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring" }}
          className="inline-block bg-mint text-forest-dark border-4 border-forest-dark font-black px-6 py-2 rounded-full shadow-[4px_4px_0px_#1a6a1a] transform -rotate-2"
        >
          KENAPA KAMI BEDA?
        </motion.div>
        
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.1 }}
          className="text-4xl md:text-6xl font-black uppercase leading-[1.1] drop-shadow-[4px_4px_0px_#1a6a1a]"
        >
          Santai Saja, <br className="hidden md:block"/> Kita Nangkap Momen Asli. 
          <Camera className="inline-block w-10 h-10 md:w-14 md:h-14 ml-2 md:ml-4 text-[#FFD166] drop-shadow-[2px_2px_0px_#1a6a1a] align-text-bottom -mt-2" strokeWidth={3} />
        </motion.h2>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="text-lg md:text-xl font-bold leading-relaxed space-y-4 text-mint/90 bg-forest-dark p-6 md:p-8 rounded-2xl border-4 border-black shadow-[8px_8px_0px_#000]"
        >
          <p>
            Gak ada yang namanya disuruh pose aneh-aneh sampai pegal. Kukiwa itu soal bikin kalian nyaman dan jadi diri sendiri.
          </p>
          <p>
            Hasilnya? Foto dan video yang 100% natural, jujur, tapi tetep proper dan sopan buat dipajang di ruang tamu keluarga.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Philosophy;
