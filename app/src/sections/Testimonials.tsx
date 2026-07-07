import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      'A Rita Henriques transformou completamente nosso processo de recrutamento. Em poucos meses, reduzimos a turnover em 40% e encontramos profissionais que realmente se encaixam na nossa cultura.',
    name: 'Ana Silva',
    role: 'Diretora de RH, Construtora Luanda',
    initial: 'A',
  },
  {
    quote:
      'Graças à mentoria de carreira da Rita, consegui fazer a transição para a área de gestão em apenas 6 meses. A orientação foi fundamental para o meu crescimento profissional.',
    name: 'Carlos Mendes',
    role: 'Gerente de Projetos',
    initial: 'C',
  },
  {
    quote:
      'A consultoria académica foi essencial para a conclusão da minha dissertação de mestrado. A Rita me orientou com paciência e expertise de forma excepcional.',
    name: 'Maria Fernandes',
    role: 'Mestranda em Gestão',
    initial: 'M',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
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

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const goTo = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    startAutoPlay();
  };

  const goPrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startAutoPlay();
  };

  const goNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    startAutoPlay();
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-brand-red text-sm uppercase tracking-[0.1em] font-body font-medium">
            DEPOIMENTOS
          </span>
          <h2
            ref={titleRef}
            className="font-display font-bold text-3xl md:text-4xl text-[#1E1E1E] mt-3"
          >
            O que dizem nossos clientes
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="max-w-3xl mx-auto"
              >
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm relative">
                  <Quote
                    size={48}
                    className="text-brand-red/20 absolute top-6 left-6"
                  />

                  <p className="text-[#1E1E1E] font-body text-base md:text-lg leading-relaxed italic relative z-10 pt-8">
                    "{testimonials[current].quote}"
                  </p>

                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#E8E8E8]">
                    <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                      <span className="font-body font-semibold text-brand-red text-lg">
                        {testimonials[current].initial}
                      </span>
                    </div>
                    <div>
                      <div className="font-body font-medium text-[#1E1E1E] text-sm">
                        {testimonials[current].name}
                      </div>
                      <div className="font-body text-[#888888] text-sm">
                        {testimonials[current].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white hover:bg-brand-burgundy transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? 'bg-brand-red' : 'bg-[#D9D9D9]'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white hover:bg-brand-burgundy transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
