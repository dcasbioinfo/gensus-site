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
  { id: 'news', label: 'Notícias' },
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
          <span className="text-2xl font-bold text-white mr-4">Genomas SUS</span>
          <div className="hidden md:flex space-x-2 items-center">
            <a 
              href={projectLinks.social?.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
              aria-label="LinkedIn do Genomas SUS"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a 
              href={projectLinks.social?.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
              aria-label="Instagram do Genomas SUS"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a 
              href={projectLinks.social?.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
              aria-label="YouTube do Genomas SUS"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
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
