import { motion } from 'motion/react';
import { LOGO_URL, HERO_BG } from '../constants';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* High-Res Background Image - Lightened for dark logo visibility */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_BG} 
          alt="Tło DreamDeco" 
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        {/* Light overlay to ensure the black logo is perfectly visible */}
        <div className="absolute inset-0 bg-white/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-white/40 to-white/70" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center h-full pt-10">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative flex flex-col items-center leading-none mb-4 z-10"
        >
          <img
            src={LOGO_URL}
            alt="DreamDeco Logo"
            className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-auto object-contain relative z-10 drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Main Heading - Literally under the logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-center w-full flex flex-col items-center relative z-20"
        >
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-3">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-[#B59882]" />
            <p className="text-[10px] md:text-xs text-[#8C7A6B] font-sans tracking-[0.4em] uppercase leading-none font-medium">
              Kalisz & Okolice
            </p>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-[#B59882]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#4A3B32] drop-shadow-sm flex flex-col md:flex-row items-center justify-center leading-tight tracking-wide gap-x-3">
            <span className="mb-1 md:mb-0">Tworzymy chwile</span>
            <span className="italic bg-gradient-to-r from-[#B59882] to-[#8C7A6B] bg-clip-text text-transparent drop-shadow-none">z sercem i duszą</span>
          </h1>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-text-main/60 font-sans text-[10px] uppercase tracking-[0.3em]">Odkryj</span>
        <ChevronDown className="text-text-main/60 animate-bounce" size={24} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
