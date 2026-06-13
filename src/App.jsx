import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-mint selection:bg-forest selection:text-mint font-sans overflow-x-hidden">
        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
        <main>
          <Hero />
          <Philosophy />
          <Portfolio />
          <Services />
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <motion.a 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/6281234567890" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-8 right-8 bg-forest text-mint border-2 md:border-4 border-forest-dark w-14 h-14 rounded-full flex items-center justify-center shadow-[4px_4px_0px_#1a6a1a] hover:translate-y-1 hover:shadow-none transition-all z-50 group"
          aria-label="Chat with us on WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825-.001 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z"/>
          </svg>
        </motion.a>
      </div>
      
      {/* Overlay Halaman Booking */}
      <Booking isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </AnimatePresence>
  );
}

export default App;
