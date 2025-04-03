import React, { useState, useEffect } from 'react';
import { cn, scrollToElement } from '@/lib/utils';
import { logoUrls, projectLinks } from '@/assets/projectData';

const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'context', label: 'Contextualização' },
  { id: 'proposal', label: 'Proposta' },
  { id: 'mission', label: 'Missão' },
  { id: 'global-impact', label: 'Impacto Global' },
  { id: 'structure', label: 'Estrutura' },
  { id: 'projects', label: 'Projetos' },
  { id: 'team', label: 'Equipe' },
  { id: 'pillars', label: 'Pilares' },
  { id: 'contact', label: 'Contato' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToElement(id);
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-primary shadow-md" : "bg-primary"
    )}>
      <div className="bg-white py-2 border-b">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <a 
              href={projectLinks.genomasBrasil} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={logoUrls.genomas_sus} 
                alt="Genomas SUS" 
                className="h-12 w-auto"
              />
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <a 
              href={projectLinks.ministerioSaude} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={logoUrls.ministerioSaude} 
                alt="Ministério da Saúde" 
                className="h-10 w-auto"
              />
            </a>
            
            <a 
              href="https://www.gov.br/saude/pt-br" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={logoUrls.sus} 
                alt="SUS" 
                className="h-10 w-auto"
              />
            </a>
            
            <a 
              href="https://www.gov.br/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={logoUrls.governoFederal} 
                alt="Governo Federal" 
                className="h-10 w-auto"
              />
            </a>
            
            <a 
              href="https://www.gov.br/bemcuidado" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img 
                src={logoUrls.brasilBemCuidado} 
                alt="Brasil Bem Cuidado" 
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
      
      <nav className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">Genomas SUS</span>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        
        <div className={cn(
          "w-full md:w-auto md:flex md:items-center mt-4 md:mt-0",
          isMenuOpen ? "block" : "hidden"
        )}>
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="hover:text-secondary-foreground text-white block py-1"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
