import { motion } from 'motion/react';
import { SHOP_IMAGE, FLOWERS } from '../constants';

export default function SectionKwiaciarnia() {
  return (
    <section id="kwiaciarnia" className="py-32 bg-bg-primary relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#B59882]" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#8C7A6B] font-medium">
              Kwiaciarnia DreamDeco
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#B59882]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#4A3B32] font-light leading-[1.1] drop-shadow-sm"
          >
            Przestrzeń pełna <br />
            <span className="italic bg-gradient-to-r from-[#B59882] to-[#8C7A6B] bg-clip-text text-transparent drop-shadow-none">życia i natury</span>
          </motion.h2>
        </div>

        {/* Editorial Layout for Shop Info with Overlapping Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Shop Image - Arched */}
            <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden image-arch shadow-2xl relative z-10 border-b-8 border-bg-secondary bg-bg-primary">
              <img 
                src={SHOP_IMAGE} 
                alt="Kwiaciarnia DreamDeco" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Overlapping Detail Image - Circle with thin border */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -bottom-12 -right-4 md:-right-12 w-2/3 md:w-3/5 aspect-square rounded-full border-2 border-bg-primary overflow-hidden shadow-2xl z-20 bg-bg-primary"
            >
              <img 
                src={FLOWERS[0]} 
                alt="Detal kwiatowy" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5 lg:col-start-8 mt-12 lg:mt-0 relative"
          >
            {/* Decorative Card */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#B59882]/10 to-transparent rounded-[40px] -z-10 blur-xl" />
            <div className="bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[32px] p-8 md:p-12 relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#B59882]/20 to-transparent rounded-bl-full -z-10" />
              
              <h3 className="text-3xl md:text-4xl font-serif text-[#4A3B32] mb-8 italic drop-shadow-sm">Tworzymy z pasją</h3>
              <p className="text-[#5A4A42] font-light leading-relaxed mb-6 text-lg md:text-xl">
                Od niedawna zapraszamy do naszej własnej kwiaciarni w Kaliszu. To tutaj, w otoczeniu najpiękniejszych zapachów i barw, powstają unikalne kompozycje florystyczne.
              </p>
              <p className="text-[#7A6B5D] font-light leading-relaxed text-base">
                Każdy bukiet tworzymy z niezwykłą starannością, dobierając najświeższe kwiaty, aby idealnie oddać Twoje uczucia i podkreślić wagę każdej chwili. Oferujemy bukiety okolicznościowe, kompozycje w naczyniach oraz pełną florystykę ślubną.
              </p>
              
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gradient-to-r from-[#B59882] to-transparent" />
                <span className="font-serif italic text-xl text-[#4A3B32]">Odwiedź nas</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Zjawiskowe Realizacje Kwiatowe - Full Width Gallery */}
      <div className="w-full px-0 mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#4A3B32] drop-shadow-sm">
            Nasze realizacje <span className="italic bg-gradient-to-r from-[#B59882] to-[#8C7A6B] bg-clip-text text-transparent drop-shadow-none">kwiatowe</span>
          </h3>
          <p className="mt-6 text-[#8C7A6B] font-light tracking-widest uppercase text-xs">Sztuka układania kwiatów</p>
        </motion.div>
        
        {/* 4-Column Grid on PC (2 rows), Original on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full px-4 lg:px-12 xl:px-16 mx-auto items-center">
          
          {/* 1. Zaokrąglone na górze */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="aspect-[4/5] image-arch overflow-hidden group order-1 lg:order-1">
            <img src={FLOWERS[1]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </motion.div>

          {/* 2. Kwadratowe */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="aspect-square overflow-hidden group self-center order-2 lg:order-3">
            <img src={FLOWERS[2]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </motion.div>

          {/* 3. Zaokrąglone na dole */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="aspect-[4/5] image-arch-bottom overflow-hidden group order-3 lg:order-4">
            <img src={FLOWERS[3]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </motion.div>

          {/* 4. Koło */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="aspect-square rounded-full overflow-hidden group self-center border border-bg-secondary p-1 order-4 lg:order-2">
            <img src={FLOWERS[4]} className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </motion.div>

          {/* 5. Zaokrąglone na górze */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="aspect-[4/5] image-arch overflow-hidden group order-5 lg:order-8">
            <img src={FLOWERS[5]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </motion.div>

          {/* 6. Kwadratowe */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="aspect-square overflow-hidden group self-center order-6 lg:order-6">
            <img src={FLOWERS[6]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </motion.div>

          {/* 7. Zaokrąglone na dole */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="aspect-[4/5] image-arch-bottom overflow-hidden group order-7 lg:order-5">
            <img src={FLOWERS[7]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </motion.div>

          {/* 8. Koło (Tylko PC) */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }} className="hidden lg:block aspect-square rounded-full overflow-hidden group self-center border border-bg-secondary p-1 lg:order-7">
            <img src="https://raw.githubusercontent.com/kidiee558/DreamDeco-Podglad/main/628506232_869265365933014_2075948337651421657_n.jpg" className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
