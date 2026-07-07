import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const chars = titleRef.current.textContent?.split('') || [];
    titleRef.current.innerHTML = chars
      .map((c) => `<span class="inline-block">${c === ' ' ? '&nbsp;' : c}</span>`)
      .join('');

    gsap.fromTo(
      titleRef.current.querySelectorAll('span'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.02,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section id="quem-somos" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[45%_55%] gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="absolute left-0 top-4 bottom-4 w-1 bg-brand-red rounded-full" />
            <img
              src="/images/about-rita.jpg"
              alt="Rita Henriques - Consultora de RH"
              className="w-full rounded-2xl shadow-lg ml-2"
              style={{ aspectRatio: '4/5', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-brand-red text-sm uppercase tracking-[0.1em] font-body font-medium">
              QUEM SOMOS
            </span>

            <h2
              ref={titleRef}
              className="font-display font-bold text-3xl md:text-4xl text-[#1E1E1E] mt-3 mb-6"
            >
              Conheça Rita Henriques
            </h2>

            <div className="space-y-4 text-[#1E1E1E]/85 font-body text-base leading-[1.7]">
              <p>
                Sou Rita Henriques, Consultora de Gestão de Pessoas e Carreiras. Ajudo
                profissionais a se posicionarem positivamente no mercado de trabalho e
                empresas a contratarem e manterem os melhores talentos.
              </p>
              <p>
                Com mais de 10 anos de experiência em Recursos Humanos, Desenvolvimento
                Humano e Planejamento de Carreira, ofereço soluções personalizadas e
                eficientes tanto para empresas quanto para profissionais em Angola.
              </p>
              <p>
                Minha missão é transformar vidas através da consultoria especializada,
                conectando talentos às oportunidades certas e ajudando organizações a
                construírem equipes de alta performance.
              </p>
            </div>

            <motion.a
              href="https://wa.me/244952002797"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 mt-8 bg-brand-red text-white font-body font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full hover:bg-brand-burgundy transition-colors"
            >
              <Phone size={18} />
              ENTRE EM CONTATO CONOSCO
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
