import React, { useState, useEffect } from 'react';
import { cn, scrollToElement } from '@/lib/utils';

const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'context', label: 'Contextualização' },
  { id: 'proposal', label: 'Proposta' },
  { id: 'mission', label: 'Missão' },
  { id: 'global-context', label: 'Equipe e Impacto' },
  { id: 'structure', label: 'Estrutura' },
  { id: 'projects', label: 'Projetos' },
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
      <nav className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">Genomas SUS</span>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-xl"></i>
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
