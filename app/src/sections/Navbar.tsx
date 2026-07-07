import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram, Linkedin, Facebook } from 'lucide-react';

const navLinks = [
  { label: 'Para Empresas', href: '#empresas' },
  { label: 'Para Profissionais', href: '#profissionais' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Contato', href: '#contato' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/rh_consultoriaonline_su/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/ritahenriques-rh', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/consultoriaritahenriquesrh/', label: 'Facebook' },
];

// TikTok icon component since lucide doesn't have it
const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.28 8.28 0 0 0 4.83 1.54v-3.5a4.85 4.85 0 0 1-1.07-.07z"/>
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['empresas', 'profissionais', 'quem-somos', 'contato'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] bg-brand-red transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex-shrink-0"
          >
            <img
              src="/images/ativo_13.png"
              alt="Rita Henriques Consultoria Online"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative text-white text-sm font-medium tracking-wide transition-opacity hover:opacity-80 ${
                  activeSection === link.href.replace('#', '') ? 'opacity-100' : 'opacity-90'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-70 transition-opacity"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
            <a
              href="https://www.tiktok.com/@ritahenriquesconsultoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-red pt-[72px]"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-white text-2xl font-display font-bold"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-6 mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-70 transition-opacity"
                  >
                    <social.icon size={28} />
                  </a>
                ))}
                <a
                  href="https://www.tiktok.com/@ritahenriquesconsultoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:opacity-70 transition-opacity"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
