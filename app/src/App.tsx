import { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Solutions from './sections/Solutions';
import About from './sections/About';
import CompanyServices from './sections/CompanyServices';
import ProfessionalServices from './sections/ProfessionalServices';
import Testimonials from './sections/Testimonials';
import CTABanner from './sections/CTABanner';
import Clients from './sections/Clients';
import Footer from './sections/Footer';
import WhatsAppFloat from './sections/WhatsAppFloat';

function App() {
  useEffect(() => {
    // SEO: Set document title and meta description
    document.title = 'Rita Henriques Consultoria Online (SU), LDA | RH | Carreiras | Luanda, Angola';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Consultoria em RH e Gestão de Pessoas em Angola. Recrutamento especializado para MPMEs, Mentoria de Carreira, Consultoria Académica e Preparação de Currículo. Rita Henriques - Luanda, Angola.');
    }

    // Add lang attribute for SEO
    document.documentElement.lang = 'pt-AO';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <About />
        <CompanyServices />
        <ProfessionalServices />
        <Testimonials />
        <CTABanner />
        <Clients />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
