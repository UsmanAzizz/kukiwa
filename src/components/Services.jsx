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
    <section id="services" className="py-24 bg-[#F5F5F0] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tight mb-4">
            Pilih Paketmu
          </h2>
          <p className="text-xl font-bold text-black/80">
            Harga jelas, transparan, gak pake ribet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {packages.map((pkg, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              key={idx} 
              className={`${pkg.color} border-4 border-black rounded-[2rem] p-8 shadow-[8px_8px_0px_#000] relative transform hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="bg-white border-4 border-black rounded-full w-20 h-20 flex items-center justify-center shadow-[4px_4px_0px_#000] absolute -top-10 right-8 transform rotate-6">
                {pkg.icon}
              </div>
              
              <h3 className="text-4xl font-black uppercase text-black mt-4 mb-2">{pkg.title}</h3>
              <div className="flex items-baseline gap-1 mb-6 border-b-4 border-black pb-6">
                <span className="text-xl font-bold">Mulai dari IDR</span>
                <span className="text-5xl font-black">{pkg.price}</span>
              </div>
              
              <p className="text-lg font-bold text-black/80 mb-6 leading-snug">
                {pkg.desc}
              </p>
              
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center font-bold text-lg">
                    <div className="bg-black text-white rounded-full p-1 mr-3">
                      <Check className="w-4 h-4" strokeWidth={4} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-white border-4 border-black rounded-xl py-4 font-black text-xl flex items-center justify-center hover:bg-black hover:text-white transition-colors">
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
