import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, FileText, Briefcase } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: GraduationCap,
    title: 'Consultoria Académica',
    description:
      'Apoio completo em TCC, Dissertações, Artigos, Relatórios, Slides e Preparação para Defesa. Orientação especializada para o sucesso académico.',
  },
  {
    icon: Compass,
    title: 'Mentoria de Carreira',
    description:
      'Orientação personalizada para desenvolvimento profissional, definição de objetivos de carreira e criação de planos de ação para alcançá-los.',
  },
  {
    icon: FileText,
    title: 'Preparação de Currículo e LinkedIn',
    description:
      'Criação e otimização de currículos e perfis do LinkedIn para aumentar sua visibilidade e atrair oportunidades no mercado angolano.',
  },
  {
    icon: Briefcase,
    title: 'Recolocação Profissional',
    description:
      'Programa estruturado de recolocação profissional, incluindo preparação para entrevistas, networking e estratégias de busca de emprego.',
  },
];

export default function ProfessionalServices() {
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
    <section id="profissionais" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-brand-red text-sm uppercase tracking-[0.1em] font-body font-medium">
            SOLUÇÕES PARA PROFISSIONAIS
          </span>
          <h2
            ref={titleRef}
            className="font-display font-bold text-3xl md:text-4xl text-[#1E1E1E] mt-3"
          >
            Serviços para Profissionais
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group bg-[#F5F5F5] border border-[#E8E8E8] rounded-2xl p-8 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center mb-5 transition-colors group-hover:bg-brand-burgundy">
                <service.icon size={28} className="text-white" />
              </div>

              <h3 className="font-body font-semibold text-lg text-[#1E1E1E] mb-3">
                {service.title}
              </h3>

              <p className="text-[#1E1E1E]/75 font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
