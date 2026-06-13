import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-32 bg-mint-dark relative overflow-hidden">
      {/* Decorative floating elements */}
      <div 
        className="absolute -top-20 -right-20 w-96 h-96 bg-mint rounded-full opacity-30"
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[3/4] w-full md:w-4/5 ml-auto relative">
              <div className="absolute inset-0 bg-forest-dark/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" 
                alt="Filosofi Kukiwa" 
                className="w-full h-full object-cover rounded-2xl relative z-10 opacity-90"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-10 -left-10 bg-mint p-8 rounded-xl shadow-xl z-20 w-64 hidden md:block"
              >
                <p className="font-serif italic text-forest-dark text-xl">"Menangkap warna tanpa harus mengubah maknanya."</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-px bg-forest-dark"></div>
              <span className="text-forest tracking-[0.2em] uppercase text-xs font-medium">Filosofi Kami</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-forest-dark mb-8 leading-tight">
              Harmoni Warna <br /> <span className="italic font-light">dan Makna</span>
            </h2>
            
            <div className="space-y-6 text-forest-dark/70 font-light leading-relaxed text-lg">
              <p>
                <strong>Kukiwa</strong> merupakan perpaduan elemen keteduhan dan warna. Kami fokus menangkap momen sebagaimana adanya, natural, dan tanpa banyak arahan yang dipaksakan.
              </p>
              <p>
                Pendekatan kami mengutamakan kenyamanan dan nilai kesopanan (<em>modesty</em>) dalam setiap sesi. Memastikan klien tetap menjadi diri sendiri, sehingga hasil akhirnya terasa lebih personal dan autentik.
              </p>
              <p>
                Bagi kami, dokumentasi visual bukan sekadar gambar estetis, melainkan jejak memori yang bisa dinikmati dengan rasa yang sama bertahun-tahun kemudian.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-12"
            >
              <img src="/signature-placeholder.png" alt="" className="h-12 opacity-40" />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
