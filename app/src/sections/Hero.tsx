import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import gsap from 'gsap';

const stats = [
  { value: 10, suffix: '+', label: 'Anos de experiência' },
  { value: 500, suffix: '+', label: 'Profissionais impactados' },
  { value: 100, suffix: '+', label: 'Empresas atendidas' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          gsap.to(
            { val: 0 },
            {
              val: value,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                setCount(Math.floor(this.targets()[0].val));
              },
            }
          );
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      +{count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-background.jpg"
          alt="Escritório moderno"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,22,40,0.7) 0%, rgba(10,22,40,0.5) 50%, rgba(10,22,40,0.85) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center pt-20">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="font-display font-bold text-white text-4xl md:text-5xl lg:text-[48px] leading-tight tracking-tight"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          Gestão de Pessoas e
          <br />
          <span className="relative inline-block">
            Carreiras Profissionais
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-0.5 bg-brand-red" />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-white/85 text-base md:text-lg max-w-[600px] mx-auto leading-relaxed font-body"
        >
          Consultoria completa para empresas que querem contratar e manter os melhores
          talentos. Apoio a profissionais que desejam se posicionar positivamente em suas
          carreiras.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/244952002797"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 mt-8 bg-brand-red text-white font-body font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full hover:bg-brand-burgundy transition-colors shadow-lg hover:shadow-xl"
          style={{ boxShadow: '0 6px 20px rgba(188,30,35,0.4)' }}
        >
          <Phone size={20} />
          FALE CONOSCO PELO WHATSAPP
        </motion.a>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-brand-gold font-body font-bold text-4xl md:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-sm uppercase tracking-wider mt-1 font-body font-medium">
                  {stat.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-white/20" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
