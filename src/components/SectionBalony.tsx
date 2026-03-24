import { motion } from 'motion/react';
import { BALLOON_WALLS } from '../constants';

export default function SectionBalony() {
  return (
    <section id="balony" className="py-32 bg-bg-secondary relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Designer Split Layout Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#B59882]" />
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#8C7A6B] font-medium">
                Celebracje
              </span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#B59882] lg:hidden" />
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-[#4A3B32] font-light leading-[1.1] mb-8 drop-shadow-sm">
              Ścianki <br />
              <span className="italic bg-gradient-to-r from-[#B59882] to-[#8C7A6B] bg-clip-text text-transparent drop-shadow-none">Balonowe</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative text-center lg:text-left"
          >
            <div className="absolute left-1/2 lg:left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#B59882] to-transparent rounded-full -translate-x-1/2 lg:translate-x-0 hidden lg:block" />
            <div className="lg:pl-8 py-2">
              <p className="text-[#5A4A42] font-light text-xl md:text-2xl leading-relaxed italic">
                Nowoczesne, efektowne i dopracowane w każdym calu. 
              </p>
              <p className="text-[#7A6B5D] font-light mt-6 text-base md:text-lg leading-relaxed">
                Nasze ścianki balonowe to idealne tło do zdjęć i niezapomniana atrakcja, która zachwyci Twoich gości. Tworzymy unikalne kompozycje dopasowane do charakteru każdej uroczystości.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Asymmetrical Sleek Gallery with Arches */}
        <div className="flex flex-col gap-20 md:gap-32 mt-20">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:col-span-5 md:col-start-2 order-2 md:order-1 text-center md:text-left relative"
            >
              <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-serif italic text-white/50 whitespace-nowrap pointer-events-none z-0 select-none scale-y-150 tracking-widest">
                Celebracje
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-serif text-[#3A2B22] mb-4 drop-shadow-sm">Urodziny & Jubileusze</h3>
                <p className="text-[#3A2B22] font-medium leading-relaxed drop-shadow-sm">
                  Niezależnie od tego, czy to roczek, osiemnastka, czy okrągłe urodziny. Nasze dekoracje sprawią, że ten dzień będzie wyglądał zjawiskowo na każdym zdjęciu.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:col-span-5 order-1 md:order-2"
            >
              <div className="aspect-[4/5] overflow-hidden shadow-2xl image-arch group">
                <img src={BALLOON_WALLS[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:col-span-5 md:col-start-2"
            >
              <div className="aspect-[4/5] overflow-hidden shadow-2xl image-arch group">
                <img src={BALLOON_WALLS[1]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="md:col-span-4 md:col-start-8 text-center md:text-left relative"
            >
              <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4rem] md:text-[5rem] lg:text-[5.5rem] font-serif italic text-white/50 whitespace-nowrap pointer-events-none z-0 select-none scale-y-150 tracking-widest">
                Radość
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-serif text-[#3A2B22] mb-4 drop-shadow-sm">Baby Shower & Chrzciny</h3>
                <p className="text-[#3A2B22] font-medium leading-relaxed drop-shadow-sm">
                  Delikatne, pastelowe barwy i urocze detale. Tworzymy bajkowe tła, które idealnie wpisują się w radosny klimat powitania nowego członka rodziny.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full Width Gallery of remaining balloons - 2x2 Grid */}
      <div className="w-full px-4 mt-32 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {BALLOON_WALLS.slice(2, 6).map((src, idx) => {
            let shapeClass = idx < 2 ? 'image-arch' : 'image-arch-bottom';
            if (idx === 1 || idx === 2) {
              shapeClass += ' max-md:!rounded-none max-md:aspect-square';
            }
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx % 4) * 0.1 }}
                className={`aspect-[4/5] overflow-hidden group shadow-xl ${shapeClass}`}
              >
                <img src={src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
