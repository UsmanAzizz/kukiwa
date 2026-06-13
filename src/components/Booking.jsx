import React from 'react';
import { Calendar, Clock, MapPin, Send } from 'lucide-react';

const Booking = () => {
  return (
    <section id="booking" className="py-16 md:py-24 bg-mint text-forest-dark border-t-4 border-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 drop-shadow-[4px_4px_0px_#1a6a1a]">
            Booking Jadwal
          </h2>
          <p className="text-lg md:text-xl font-bold max-w-2xl mx-auto text-forest-dark/80">
            Isi form simpel ini buat nge-tag tanggal spesial kamu biar nggak keduluan yang lain.
          </p>
        </div>

        <div className="bg-white border-4 border-black rounded-[2rem] p-6 md:p-10 shadow-[8px_8px_0px_#000] max-w-3xl mx-auto transform hover:-translate-y-1 transition-transform duration-300">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-black uppercase text-lg">Nama Panggilan</label>
                <input type="text" placeholder="Misal: Budi" className="w-full bg-[#F5F5F0] border-4 border-black rounded-xl p-4 font-bold outline-none focus:bg-[#FDFFB6] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="font-black uppercase text-lg">Nomor WhatsApp</label>
                <input type="tel" placeholder="0812..." className="w-full bg-[#F5F5F0] border-4 border-black rounded-xl p-4 font-bold outline-none focus:bg-[#FDFFB6] transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-black uppercase text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5" /> Tanggal
                </label>
                <input type="date" className="w-full bg-[#F5F5F0] border-4 border-black rounded-xl p-4 font-bold outline-none focus:bg-[#FDFFB6] transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="font-black uppercase text-lg flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Lokasi (Kota)
                </label>
                <input type="text" placeholder="Misal: Bandung" className="w-full bg-[#F5F5F0] border-4 border-black rounded-xl p-4 font-bold outline-none focus:bg-[#FDFFB6] transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-black uppercase text-lg flex items-center gap-2">
                Pilih Paket
              </label>
              <select className="w-full bg-[#F5F5F0] border-4 border-black rounded-xl p-4 font-bold outline-none focus:bg-[#FDFFB6] transition-colors appearance-none cursor-pointer">
                <option value="">-- Pilih Paket Dulu --</option>
                <option value="potret">Paket Potret (500k)</option>
                <option value="sinema">Paket Sinema (1.500k)</option>
                <option value="custom">Custom (Bisa Diomongin)</option>
              </select>
            </div>

            <button type="button" className="w-full bg-[#9BF6FF] border-4 border-black rounded-xl py-4 mt-4 font-black text-xl flex items-center justify-center shadow-[6px_6px_0px_#000] hover:translate-y-1 hover:shadow-[2px_2px_0px_#000] hover:bg-[#FFC6FF] transition-all active:translate-y-2 active:shadow-none uppercase">
              Kirim Jadwal <Send className="ml-3 w-6 h-6" strokeWidth={3} />
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Booking;
