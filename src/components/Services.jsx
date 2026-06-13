import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Services = () => {
  const packages = [
    {
      name: "Momentum",
      desc: "Sebuah perayaan pencapaian. Cocok untuk kelulusan atau perayaan personal.",
      price: "500k",
      features: [
        "Sesi dokumentasi 2 jam",
        "50+ karya visual terkurasi",
        "Resolusi tinggi (Soft file)",
        "Arahan gaya (Modest approach)"
      ]
    },
    {
      name: "Eternity",
      desc: "Penyatuan dua cerita. Dokumentasi hari bahagia yang elegan dan tak lekang waktu.",
      price: "2.500k",
      features: [
        "2 Profesional Kukiwa",
        "Sesi penuh (Hari H)",
        "Album fisik premium eksklusif",
        "Drive penyimpanan khusus",
        "150+ karya visual retouched"
      ],
      highlight: true
    },
    {
      name: "Cinematic",
      desc: "Menangkap emosi bergerak menjadi sebuah film pendek yang puitis.",
      price: "1.500k",
      features: [
        "1 Videografer spesialis",
        "Film pendek 1-3 menit",
        "Dokumentasi arsip mentah",
        "Format vertikal (Social Media)"
      ]
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <section id="services" className="py-32 bg-forest-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop')] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-soft-gold tracking-[0.2em] uppercase text-xs font-medium block mb-4">Investasi Kenangan</span>
          <h2 className="text-4xl md:text-5xl font-serif text-mint mb-6">Layanan Kukiwa</h2>
          <p className="text-mint/60 max-w-2xl mx-auto font-light leading-relaxed">
            Pilih paket yang paling merepresentasikan kebutuhan narasi visual Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, idx) => (
            <motion.div 
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              key={idx} 
              whileHover={{ y: -10 }}
              className={`rounded-xl p-10 relative overflow-hidden transition-all duration-300 ${
                pkg.highlight 
                  ? 'bg-mint text-forest-dark shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-100 md:scale-105 z-10' 
                  : 'bg-forest text-mint border border-mint/10 backdrop-blur-sm'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 right-0 bg-soft-gold text-forest-dark text-[10px] uppercase tracking-widest font-bold py-1 px-4 rounded-bl-xl">
                  Rekomendasi
                </div>
              )}
              
              <h3 className="text-3xl font-serif mb-3">{pkg.name}</h3>
              <p className={`mb-8 text-sm font-light leading-relaxed h-16 ${pkg.highlight ? 'text-forest-dark/70' : 'text-mint/60'}`}>{pkg.desc}</p>
              
              <div className="flex items-baseline mb-8 pb-8 border-b border-opacity-20 border-current">
                <span className="text-sm mr-1">IDR</span>
                <span className="text-4xl font-serif">{pkg.price}</span>
              </div>
              
              <ul className="space-y-5 mb-10">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`w-4 h-4 mr-3 mt-0.5 shrink-0 ${pkg.highlight ? 'text-forest' : 'text-soft-gold'}`} />
                    <span className="text-sm font-light leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-full font-medium tracking-wide text-sm transition-all duration-300 hover:shadow-lg ${
                  pkg.highlight 
                    ? 'bg-forest-dark text-mint hover:bg-forest' 
                    : 'bg-mint/10 text-mint hover:bg-soft-gold hover:text-forest-dark'
                }`}
              >
                Pilih {pkg.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
