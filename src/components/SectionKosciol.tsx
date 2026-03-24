import { motion } from 'motion/react';
import { CHURCH_BG, CHURCH_DECORATIONS } from '../constants';

export default function SectionKosciol() {
  return (
    <section id="kosciol" className="relative bg-bg-primary py-32 overflow-hidden">
      
      {/* Background Image - Fixed visibility and zoom */}
      <div className="absolute top-0 left-0 w-full h-[700px] md:h-[900px] z-0 pointer-events-none">
        <img 
          src={CHURCH_BG} 
          alt="Dekoracje Kościelne Tło" 
          className="w-full h-full object-cover object-center opacity-40"
          referrerPolicy="no-referrer"
        />
        {/* Smooth fade out at the top to blend with previous section */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-bg-primary via-bg-primary/80 to-transparent" />
        {/* Smooth fade out at the bottom to blend with current section */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent" />
        {/* Side fades for softer edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/50 via-transparent to-bg-primary/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#B59882]" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#8C7A6B] font-medium">
              Ceremonie
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#B59882]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#4A3B32] font-light leading-[1.1] drop-shadow-sm"
          >
            Dekoracje <br />
            <span className="italic bg-gradient-to-r from-[#B59882] to-[#8C7A6B] bg-clip-text text-transparent drop-shadow-none">Kościelne i Sal</span>
          </motion.h2>
        </div>

        {/* Intro Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24 relative px-4"
        >
          <div className="absolute left-1/2 -translate-x-1/2 -top-12 text-8xl text-[#B59882]/20 font-serif leading-none">"</div>
          <p className="text-[#5A4A42] font-light leading-relaxed text-xl md:text-3xl font-serif italic drop-shadow-sm relative z-10">
            Tworzymy magiczną atmosferę w najważniejszych momentach Twojego życia. 
            Nasze dekoracje to połączenie elegancji, subtelności i dbałości o każdy detal.
          </p>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#B59882] to-transparent mx-auto mt-10" />
        </motion.div>
      </div>

      {/* 4 Images Grid - 2x2 */}
      <div className="w-full px-4 relative z-10 mt-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          
          {/* 1. Arch */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] overflow-hidden image-arch group shadow-xl"
          >
            <img src={CHURCH_DECORATIONS[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </motion.div>

          {/* 2. Arch (Square on mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-md:aspect-square max-md:!rounded-2xl md:aspect-[4/5] overflow-hidden image-arch group shadow-xl"
          >
            <img src={CHURCH_DECORATIONS[1]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </motion.div>

          {/* 3. Arch Bottom (Square on mobile) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-md:aspect-square max-md:!rounded-2xl md:aspect-[4/5] overflow-hidden image-arch-bottom group shadow-xl"
          >
            <img src={CHURCH_DECORATIONS[2]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </motion.div>

          {/* 4. Arch Bottom */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="aspect-[4/5] overflow-hidden image-arch-bottom group shadow-xl"
          >
            <img src={CHURCH_DECORATIONS[3]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
