import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import IndustrySection from './components/IndustrySection';
import LabSection from './components/LabSection';
import ProtectionSection from './components/ProtectionSection';
import DistributionSection from "./components/DistributionSection";
import TechnicalService from './components/TechnicalService';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  useEffect(() => {
    // Inicializar la biblioteca de animaciones
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <IndustrySection />
        <LabSection />
        <ProtectionSection />
        <DistributionSection />
        <TechnicalService />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton /> {/* Añadido aquí */}
    </div>
  );
}

export default App;