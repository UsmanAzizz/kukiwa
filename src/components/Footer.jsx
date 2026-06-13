import React from 'react';
import { Mail, MessageCircle, Camera, Video, Sparkles, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#9BF6FF] text-black pt-16 md:pt-24 pb-12 border-t-4 border-black relative overflow-hidden">
      {/* Decorative background stars */}
      <Star className="absolute top-10 left-10 w-12 h-12 text-black opacity-20" />
      <Star className="absolute bottom-40 right-10 w-16 h-16 text-black opacity-20" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Epic CTA Section */}
        <div className="bg-[#FFC6FF] border-4 border-black rounded-[2rem] p-8 md:p-16 shadow-[8px_8px_0px_#000] md:shadow-[16px_16px_0px_#000] text-center mb-16 md:mb-20 transform rotate-1 hover:rotate-0 transition-transform relative overflow-hidden group">
          {/* Decorative shapes inside CTA */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full border-4 border-black opacity-50 group-hover:scale-110 transition-transform"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-mint rounded-full border-4 border-black opacity-50 group-hover:scale-110 transition-transform"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white border-4 border-black rounded-full p-4 shadow-[4px_4px_0px_#000] mb-6 transform -rotate-12 group-hover:rotate-12 transition-transform">
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-black" strokeWidth={2.5} />
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Udah Siap Bikin <br className="hidden md:block"/> Momen Epic?
            </h2>
            
            <p className="text-xl md:text-2xl font-bold mb-8 max-w-2xl mx-auto text-black/80">
              Gak perlu nunggu momen yang pas. Kita yang bikin momen itu jadi luar biasa.
            </p>
            
            <a href="https://wa.me/6281234567890" className="inline-flex items-center bg-[#FDFFB6] border-4 border-black px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-xl sm:text-2xl md:text-3xl hover:bg-black hover:text-[#FDFFB6] transition-colors shadow-[6px_6px_0px_#000] md:shadow-[8px_8px_0px_#000] hover:shadow-[0px_0px_0px_#000] hover:translate-y-2 group-hover:animate-pulse">
              <MessageCircle className="mr-3 w-8 h-8 md:w-10 md:h-10" strokeWidth={3} /> Chat Sekarang
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t-4 border-black pt-12">
          
          <div className="col-span-1">
            <h3 className="text-3xl font-black uppercase mb-4">KUKIWA</h3>
            <p className="font-bold text-lg max-w-xs">
              Studio visual asik yang bikin momen kamu terekam senatural mungkin.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-black uppercase mb-4 border-b-4 border-black inline-block pb-1">Menu Bebas</h4>
            <ul className="space-y-3 font-bold text-lg">
              <li><a href="#home" className="hover:underline decoration-4 underline-offset-4">Beranda</a></li>
              <li><a href="#portfolio" className="hover:underline decoration-4 underline-offset-4">Karya Kece</a></li>
              <li><a href="#services" className="hover:underline decoration-4 underline-offset-4">Harga Paket</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black uppercase mb-4 border-b-4 border-black inline-block pb-1">Kepo-in Kita</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white border-4 border-black p-3 rounded-xl shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all">
                <Camera className="w-6 h-6" strokeWidth={2.5} />
              </a>
              <a href="#" className="bg-white border-4 border-black p-3 rounded-xl shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all">
                <Video className="w-6 h-6" strokeWidth={2.5} />
              </a>
              <a href="mailto:hello@kukiwa.com" className="bg-white border-4 border-black p-3 rounded-xl shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all">
                <Mail className="w-6 h-6" strokeWidth={2.5} />
              </a>
            </div>
          </div>

        </div>
        
        <div className="mt-16 text-center font-black uppercase border-t-4 border-black pt-8">
          <p>&copy; {new Date().getFullYear()} Kukiwa. All Rights Reserved Coy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
