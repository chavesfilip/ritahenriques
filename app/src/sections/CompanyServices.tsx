import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Settings, TrendingUp, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Users,
    title: 'Consultoria em RH e Gestão de Pessoas',
    description:
      'Assessoria estratégica completa em Recursos Humanos para MPMEs, desde a estruturação da área até a gestão do capital humano.',
  },
  {
    icon: Search,
    title: 'Hunting / Recrutamento e Seleção',
    description:
      'Recrutamento especializado para MPMEs. Encontramos os talentos certos que se alinham à cultura e necessidades da sua empresa.',
  },
  {
    icon: Settings,
    title: 'Implantação de Processos de RH',
    description:
      'Estruturação e otimização de processos de RH, incluindo descrição de cargos, avaliação de desempenho e planos de carreira.',
  },
  {
    icon: TrendingUp,
    title: 'Desenvolvimento de Liderança e Equipes',
    description:
      'Programas de desenvolvimento de competências de liderança e fortalecimento de equipes de alta performance.',
  },
  {
    icon: Target,
    title: 'Cultura Organizacional e Avaliação de Desempenho',
    description:
      'Construção de cultura organizacional alinhada aos valores da empresa e implementação de sistemas de avaliação de desempenho.',
  },
];

export default function CompanyServices() {
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
    <section id="empresas" className="py-20 bg-brand-navy relative">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-brand-gold text-sm uppercase tracking-[0.1em] font-body font-medium">
            SOLUÇÕES PARA EMPRESAS
          </span>
          <h2
            ref={titleRef}
            className="font-display font-bold text-3xl md:text-4xl text-white mt-3"
          >
            Serviços Empresariais
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all hover:border-white/30"
            >
              <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center mb-5 transition-colors group-hover:bg-brand-burgundy">
                <service.icon size={28} className="text-white" />
              </div>

              <h3 className="font-body font-semibold text-lg text-white mb-3">
                {service.title}
              </h3>

              <p className="text-white/70 font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
