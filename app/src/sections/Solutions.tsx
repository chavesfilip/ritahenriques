import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const professionalFeatures = [
  'Consultoria Académica (TCC, Dissertações, Artigos)',
  'Mentoria de Carreira e Recolocação Profissional',
  'Preparação de Currículo e LinkedIn',
];

const companyFeatures = [
  'Consultoria em RH e Gestão de Pessoas',
  'Hunting / Recrutamento e Seleção especializado',
  'Desenvolvimento de Liderança e Equipes',
];

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const chars = titleRef.current.textContent?.split('') || [];
    titleRef.current.innerHTML = chars.map((c) => `<span class="inline-block">${c === ' ' ? '&nbsp;' : c}</span>`).join('');

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

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-brand-red text-sm uppercase tracking-[0.1em] font-body font-medium">
            SOLUÇÕES EFETIVAS PARA
          </span>
          <h2
            ref={titleRef}
            className="font-display font-bold text-3xl md:text-4xl text-[#1E1E1E] mt-3"
          >
            Como podemos ajudar?
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Professionals Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -4 }}
            className="relative bg-[#F5F5F5] rounded-2xl p-10 transition-shadow hover:shadow-lg"
          >
            <span className="absolute top-6 right-6 bg-brand-red text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
              01
            </span>

            <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center mb-6">
              <GraduationCap size={28} className="text-white" />
            </div>

            <h3 className="font-body font-semibold text-xl text-[#1E1E1E] mb-3">
              Para Profissionais
            </h3>

            <p className="text-[#1E1E1E]/75 font-body text-base mb-6 leading-relaxed">
              Destaque-se no mercado de trabalho com nossas soluções personalizadas para
              carreira e desenvolvimento académico.
            </p>

            <ul className="space-y-3 mb-8">
              {professionalFeatures.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-[#1E1E1E]/80 font-body text-sm"
                >
                  <Check size={18} className="text-brand-red flex-shrink-0 mt-0.5" />
                  <span>➜ {feature}</span>
                </motion.li>
              ))}
            </ul>

            <button
              onClick={() => handleScrollTo('profissionais')}
              className="bg-brand-red text-white font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:bg-brand-burgundy transition-colors"
            >
              QUERO DESTACAR-ME
            </button>
          </motion.div>

          {/* Companies Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="relative bg-[#F5F5F5] rounded-2xl p-10 transition-shadow hover:shadow-lg"
          >
            <span className="absolute top-6 right-6 bg-brand-navy text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
              02
            </span>

            <div className="w-14 h-14 bg-brand-navy rounded-full flex items-center justify-center mb-6">
              <Building2 size={28} className="text-white" />
            </div>

            <h3 className="font-body font-semibold text-xl text-[#1E1E1E] mb-3">
              Para Empresas
            </h3>

            <p className="text-[#1E1E1E]/75 font-body text-base mb-6 leading-relaxed">
              Soluções completas em Gestão de Pessoas para MPMEs que buscam excelência no
              seu capital humano.
            </p>

            <ul className="space-y-3 mb-8">
              {companyFeatures.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="flex items-start gap-3 text-[#1E1E1E]/80 font-body text-sm"
                >
                  <Check size={18} className="text-brand-red flex-shrink-0 mt-0.5" />
                  <span>➜ {feature}</span>
                </motion.li>
              ))}
            </ul>

            <button
              onClick={() => handleScrollTo('empresas')}
              className="bg-brand-navy text-white font-body font-semibold text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#0d1f3c] transition-colors"
            >
              QUERO CONSULTORIA EMPRESARIAL
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
