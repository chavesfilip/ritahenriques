import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clientLogos = [
  { src: '/images/client-logo-1.jpg', alt: 'Techangola' },
  { src: '/images/client-logo-2.jpg', alt: 'Luanda Corp' },
  { src: '/images/client-logo-3.jpg', alt: 'Construir+' },
  { src: '/images/client-logo-4.jpg', alt: 'Financas SA' },
  { src: '/images/client-logo-5.jpg', alt: 'Agro Angola' },
  { src: '/images/client-logo-6.jpg', alt: 'Educar' },
];

// Duplicate for seamless loop
const allLogos = [...clientLogos, ...clientLogos];

export default function Clients() {
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <span
          ref={titleRef}
          className="block text-center text-brand-red text-sm uppercase tracking-[0.1em] font-body font-medium mb-10"
        >
          EMPRESAS QUE CONFIAM EM NÓS
        </span>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex animate-marquee"
        >
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                style={{ maxWidth: '160px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
