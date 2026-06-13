import React from 'react';
import { Camera, Video, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const packages = [
    {
      title: "Paket Potret",
      price: "500k",
      icon: <Camera className="w-10 h-10 text-black" strokeWidth={2.5} />,
      color: "bg-[#9BF6FF]",
      desc: "Cocok buat wisuda, prewed kasual, atau sekadar gaya-gayaan bareng bestie.",
      features: ["Sesi seru maksimal 2 Jam", "50+ Foto diedit kece", "Semua file resolusi tinggi", "Gaya bebas tapi tetap sopan"]
    },
    {
      title: "Paket Sinema",
      price: "1.500k",
      icon: <Video className="w-10 h-10 text-black" strokeWidth={2.5} />,
      color: "bg-[#FDFFB6]",
      desc: "Bikin video cinematic pendek buat momen spesial kamu. Bisa untuk IG Reels/TikTok.",
      features: ["1 Videografer asik", "Film pendek 1-3 Menit", "Bisa format vertikal", "Dapat semua file mentah"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F5F5F0]">
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="mb-12 md:mb-16 flex flex-col items-center">
          <div className="bg-white border-4 border-black rounded-[2rem] px-8 py-4 shadow-[6px_6px_0px_#000] mb-6 transform -rotate-2 hover:rotate-0 transition-transform">
            <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight">
              Pilih Paketmu
            </h2>
          </div>
          <p className="text-lg md:text-xl font-bold text-black/80">
            Harga jelas, transparan <br /> gak pake ribet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-12 max-w-4xl mx-auto pt-4 md:pt-0">
          {packages.map((pkg, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              key={idx} 
              className={`${pkg.color} text-slate-800 border-4 border-black rounded-[2rem] p-6 md:p-8 shadow-[8px_8px_0px_#000] relative transform hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="bg-white border-4 border-black rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-[4px_4px_0px_#000] absolute -top-8 md:-top-10 right-4 md:right-8 transform rotate-6">
                {pkg.icon}
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black uppercase mt-4 mb-2 tracking-tight">
                <span className="text-black">{pkg.title.split(' ')[0]} </span>
                <span className="text-white drop-shadow-[2px_2px_0px_#000]" style={{ WebkitTextStroke: '1px black' }}>{pkg.title.split(' ')[1]}</span>
              </h3>
              <div className="flex items-baseline gap-1 mb-6 border-b-4 border-black pb-4 md:pb-6 text-black">
                <span className="text-base md:text-lg font-bold text-black/60">Mulai dari IDR</span>
                <span className="text-4xl md:text-5xl font-black">{pkg.price}</span>
              </div>
              
              <p className="text-base md:text-lg font-bold text-slate-700 mb-6 leading-snug">
                {pkg.desc}
              </p>
              
              <ul className="space-y-4 mb-10 text-slate-800">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center font-bold text-lg">
                    <div className="bg-white border-2 border-black text-black rounded-full p-1 mr-3 shadow-[2px_2px_0px_#000]">
                      <Check className="w-4 h-4" strokeWidth={4} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-white border-4 border-black rounded-xl py-4 font-black text-xl flex items-center justify-center shadow-[6px_6px_0px_#000] hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] hover:bg-black hover:text-white transition-all active:translate-y-2 active:shadow-none">
                Gas Pilih Ini <ArrowRight className="ml-2 w-6 h-6" strokeWidth={3} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
