import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionKwiaciarnia from './components/SectionKwiaciarnia';
import SectionKosciol from './components/SectionKosciol';
import SectionBalony from './components/SectionBalony';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary selection:bg-accent/30">
      <Navbar />
      <Hero />
      <SectionKwiaciarnia />
      <SectionKosciol />
      <SectionBalony />
      <Contact />
      <Footer />
    </div>
  );
}
