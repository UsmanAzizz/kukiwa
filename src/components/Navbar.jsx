import React from 'react';
import { Camera } from 'lucide-react';

const Navbar = ({ onOpenBooking }) => {
  return (
    <nav className="fixed w-full z-50 p-3 md:p-4">
      <div className="max-w-7xl mx-auto bg-mint border-2 border-forest-dark rounded-xl md:rounded-2xl shadow-[2px_2px_0px_#1a6a1a] md:shadow-[4px_4px_0px_#1a6a1a] px-4 md:px-8 py-2 md:py-3 flex justify-between items-center transition-transform hover:-translate-y-0.5">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="bg-white p-1.5 rounded-md md:rounded-lg border-2 border-forest-dark transform -rotate-3">
            <Camera className="w-4 h-4 md:w-5 md:h-5 text-forest-dark" strokeWidth={2.5} />
          </div>
          <h1 className="text-xl md:text-2xl font-black tracking-tight text-forest-dark uppercase">KUKIWA</h1>
        </div>
        <div className="hidden md:flex space-x-8 font-bold text-sm uppercase">
          <a href="#home" className="hover:text-forest transition-colors relative group">
            Beranda
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-forest-dark rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#portfolio" className="hover:text-forest transition-colors relative group">
            Karya
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-forest-dark rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#services" className="hover:text-forest transition-colors relative group">
            Layanan
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-forest-dark rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </div>
        <button 
          onClick={onOpenBooking} 
          className="bg-[#FFD166] border-2 border-forest-dark rounded-lg md:rounded-xl px-4 py-1.5 md:px-5 md:py-2.5 font-black text-xs md:text-sm text-forest-dark hover:-translate-y-1 hover:shadow-[2px_2px_0px_#1a6a1a] transition-all active:translate-y-0 active:shadow-none uppercase tracking-widest shadow-[2px_2px_0px_#1a6a1a] hover:bg-[#FFC6FF]"
        >
          JADWALIN!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
