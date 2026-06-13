import React from 'react';
import { Mail, MessageCircle, Camera, Video } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#9BF6FF] text-black pt-16 md:pt-24 pb-12 border-t-4 border-black">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="bg-white border-4 border-black rounded-[2rem] p-6 md:p-12 shadow-[8px_8px_0px_#000] md:shadow-[12px_12px_0px_#000] text-center mb-16 md:mb-20 transform -rotate-1 hover:rotate-0 transition-transform">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase mb-6 md:mb-8 leading-tight">
            Udah Siap Bikin <br/> Momen Epic?
          </h2>
          <a href="https://wa.me/6281234567890" className="inline-flex items-center bg-[#FDFFB6] border-4 border-black px-6 py-3 md:px-8 md:py-4 rounded-2xl font-black text-lg sm:text-xl md:text-2xl hover:bg-black hover:text-[#FDFFB6] transition-colors shadow-[4px_4px_0px_#000] md:shadow-[6px_6px_0px_#000] hover:shadow-[0px_0px_0px_#000] hover:translate-y-1">
            <MessageCircle className="mr-2 md:mr-3 w-6 h-6 md:w-8 md:h-8" strokeWidth={3} /> Chat Sekarang
          </a>
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
