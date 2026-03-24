import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text-main text-bg-primary py-16 border-t border-text-main/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="inline-block">
              <span className="font-serif text-3xl tracking-wider text-bg-primary">
                Dream<span className="italic font-light opacity-80">Deco</span>
              </span>
            </a>
            <p className="text-bg-primary/60 font-light text-sm leading-relaxed max-w-xs">
              Tworzymy chwile z sercem i duszą. Profesjonalne dekoracje kościelne, ścianki balonowe i kwiaciarnia w Kaliszu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-sans tracking-widest uppercase text-xs font-medium text-bg-primary/80">Menu</h4>
            <ul className="space-y-3">
              {['Kwiaciarnia', 'Ceremonie', 'Celebracje', 'Kontakt'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-bg-primary/60 hover:text-bg-primary transition-colors text-sm font-light">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Legal */}
          <div className="space-y-6">
            <h4 className="font-sans tracking-widest uppercase text-xs font-medium text-bg-primary/80">Obserwuj nas</h4>
            <div className="flex gap-4">
              <a href="#" className="text-bg-primary/60 hover:text-bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-bg-primary/60 hover:text-bg-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-bg-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-bg-primary/40 text-xs font-light">
            &copy; {new Date().getFullYear()} DreamDeco. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-bg-primary/40 text-xs font-light">
            Projekt z sercem i duszą
          </p>
        </div>
      </div>
    </footer>
  );
}
