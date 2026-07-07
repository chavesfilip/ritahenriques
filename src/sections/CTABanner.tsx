import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function CTABanner() {
  return (
    <section id="contato" className="py-20 bg-brand-red">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl md:text-4xl text-white"
        >
          Dúvidas? Vamos conversar!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-white/80 font-body text-base md:text-lg max-w-[500px] mx-auto"
        >
          Aguardamos o seu contato! Estamos prontos para ajudar você e sua empresa a
          alcançar novos patamares.
        </motion.p>

        <motion.a
          href="https://wa.me/244952002797"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 mt-8 bg-white text-brand-red font-body font-semibold text-sm uppercase tracking-wider px-10 py-4 rounded-full hover:bg-[#F5F5F5] transition-colors"
        >
          <Phone size={20} />
          ENTRE EM CONTATO CONOSCO
        </motion.a>
      </div>
    </section>
  );
}
