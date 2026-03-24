import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="kontakt" className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-text-main" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-text-main font-medium">
              Kontakt
            </span>
            <div className="h-[1px] w-12 bg-text-main" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-text-main font-light"
          >
            Porozmawiajmy o <br />
            <span className="italic text-text-muted">Twoim wydarzeniu</span>
          </motion.h2>
        </div>

        <div className="flex justify-center">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12 max-w-2xl w-full flex flex-col items-center text-center"
          >
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-full border border-text-main/20 flex items-center justify-center text-text-main group-hover:bg-text-main group-hover:text-bg-primary transition-colors duration-300 shrink-0">
                <MapPin size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-serif text-text-main mb-2">Nasza Kwiaciarnia</h4>
                <p className="text-text-muted font-light text-lg">
                  Kalisz<br />
                  (Zadzwoń po dokładny adres)
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-full border border-text-main/20 flex items-center justify-center text-text-main group-hover:bg-text-main group-hover:text-bg-primary transition-colors duration-300 shrink-0">
                <Phone size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-serif text-text-main mb-2">Telefon</h4>
                <p className="text-text-muted font-light text-lg">
                  +48 123 456 789<br />
                  <span className="text-base opacity-70">Pon - Pt: 9:00 - 17:00</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-full border border-text-main/20 flex items-center justify-center text-text-main group-hover:bg-text-main group-hover:text-bg-primary transition-colors duration-300 shrink-0">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-2xl font-serif text-text-main mb-2">E-mail</h4>
                <p className="text-text-muted font-light text-lg">
                  kontakt@dreamdeco.pl
                </p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-text-main/10 flex gap-6 justify-center w-full max-w-xs">
              <a href="#" className="w-12 h-12 rounded-full border border-text-main/20 flex items-center justify-center text-text-main hover:bg-text-main hover:text-bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-text-main/20 flex items-center justify-center text-text-main hover:bg-text-main hover:text-bg-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
