import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="bg-mint text-forest-dark pt-32 pb-10 border-t border-forest/10 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-forest/5 to-transparent pointer-events-none rounded-b-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-forest-dark mb-8 leading-tight">
            Mari Merangkai <br /> <span className="italic font-light">Cerita Bersama</span>
          </h2>
          <a href="mailto:hello@kukiwa.com" className="inline-block text-2xl md:text-3xl font-light hover:text-forest transition-colors border-b border-forest-dark pb-2">
            hello@kukiwa.com
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-forest-dark/10 pt-16 mb-16">
          
          <div className="col-span-1">
            <h3 className="text-2xl font-serif font-bold text-forest-dark tracking-widest mb-6 uppercase">Kukiwa</h3>
            <p className="text-forest-dark/60 max-w-sm text-sm leading-relaxed">
              Studio visual berbasis di Indonesia. Melayani pembuatan karya fotografi dan sinematografi yang elegan, timeless, dan bermakna tinggi.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase font-bold mb-6 text-forest">Navigasi</h4>
            <ul className="space-y-4">
              {['Beranda', 'Filosofi', 'Karya', 'Layanan'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-forest-dark/70 hover:text-forest transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase font-bold mb-6 text-forest">Terhubung</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="text-forest-dark/70 hover:text-forest transition-colors text-sm block">
                  WhatsApp (+62 812 3456 7890)
                </a>
              </li>
              <li>
                <a href="#" className="text-forest-dark/70 hover:text-forest transition-colors text-sm block">
                  Instagram (@kukiwavisuals)
                </a>
              </li>
              <li>
                <a href="#" className="text-forest-dark/70 hover:text-forest transition-colors text-sm block">
                  YouTube (Kukiwa)
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-forest-dark/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Kukiwa Visuals.</p>
          <p className="mt-4 md:mt-0">Design with Elegance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
