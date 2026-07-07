import { Instagram, Linkedin, Facebook } from 'lucide-react';

const companyLinks = [
  'Cultura Organizacional',
  'Recrutamento e Seleção',
  'Desenvolvimento de Pessoas',
  'Preparação para Liderança',
  'Gestão de Desempenho',
];

const professionalLinks = [
  'Consultoria LinkedIn e Currículo',
  'Mentoria de Carreira',
  'Banco de Vagas',
];

// TikTok icon
const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.72a8.28 8.28 0 0 0 4.83 1.54v-3.5a4.85 4.85 0 0 1-1.07-.07z" />
  </svg>
);

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy">
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - Company Solutions */}
          <div>
            <h4 className="text-white font-body font-semibold text-sm mb-4">
              Soluções para empresas
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleScrollTo('empresas')}
                    className="text-white/70 font-body text-sm hover:text-white transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Professional Solutions */}
          <div>
            <h4 className="text-white font-body font-semibold text-sm mb-4">
              Soluções para profissionais
            </h4>
            <ul className="space-y-2.5">
              {professionalLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleScrollTo('profissionais')}
                    className="text-white/70 font-body text-sm hover:text-white transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h4 className="text-white font-body font-semibold text-sm mb-4">
              Contacto
            </h4>
            <ul className="space-y-2.5 text-white/70 font-body text-sm">
              <li>Horário: Segunda a Sexta, 08h às 18h (GMT+1)</li>
              <li>
                <a
                  href="mailto:onlinerh.consultoria@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  onlinerh.consultoria@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/244952002797"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +244 952 002 797
                </a>
              </li>
              <li>Luanda, Angola</li>
            </ul>
          </div>

          {/* Column 4 - Social */}
          <div>
            <h4 className="text-white font-body font-semibold text-sm mb-4">
              Redes Sociais
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.instagram.com/rh_consultoriaonline_su/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 font-body text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram size={16} />
                  @rh_consultoriaonline_su
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/consultoriaritahenriquesrh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 font-body text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <Facebook size={16} />
                  Consultoria Rita Henriques RH
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@ritahenriquesconsultoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 font-body text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <TikTokIcon size={16} />
                  @ritahenriquesconsultoria
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ritahenriques-rh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 font-body text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  Rita Henriques RH
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 font-body text-xs text-center md:text-left">
            © Copyright 2026 • Rita Henriques Consultoria Online (SU), LDA • Todos os
            direitos reservados
          </p>
          <button className="text-white/50 font-body text-xs hover:text-white/70 transition-colors">
            Políticas de Privacidade
          </button>
        </div>
      </div>
    </footer>
  );
}
