import React from 'react';
import { scrollToElement } from '@/lib/utils';
import { logoUrls, projectLinks } from '@/assets/projectData';

const Footer: React.FC = () => {
  const handleNavClick = (id: string) => {
    scrollToElement(id);
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="mb-4">
              <img 
                src={logoUrls.genomas_sus} 
                alt="Genomas SUS" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Iniciativa de sequenciamento genômico em larga escala para aprimorar a saúde pública brasileira através da medicina de precisão.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href={projectLinks.genomasBrasil} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Site Genomas Brasil"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a 
                href={projectLinks.portaria1949} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Portaria 1949/2020"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              <a 
                href={projectLinks.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn do Genomas SUS"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href={projectLinks.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram do Genomas SUS"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a 
                href={projectLinks.social.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="YouTube do Genomas SUS"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Mapa do Site</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="text-gray-400 hover:text-white"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('mission')}
                  className="text-gray-400 hover:text-white"
                >
                  Missão
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('structure')}
                  className="text-gray-400 hover:text-white"
                >
                  Estrutura
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('projects')}
                  className="text-gray-400 hover:text-white"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="text-gray-400 hover:text-white"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href={projectLinks.portaria1949}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Portaria Nº 1.949/2020
                </a>
              </li>
              <li>
                <a 
                  href="https://bvsms.saude.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Biblioteca Virtual em Saúde
                </a>
              </li>
              <li>
                <a 
                  href="https://www.gov.br/saude/pt-br/composicao/sectics/decit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  DECIT/MS
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Instituições Parceiras</h3>
            <div className="grid grid-cols-2 gap-3">
              <a 
                href={projectLinks.ministerioSaude}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src={logoUrls.ministerioSaude} 
                  alt="Ministério da Saúde" 
                  className="h-12 w-auto bg-white p-1 rounded"
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
                  className="h-12 w-auto bg-white p-1 rounded"
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
                  className="h-12 w-auto bg-white p-1 rounded"
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
                  className="h-12 w-auto bg-white p-1 rounded"
                />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Genomas SUS. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Uma iniciativa do Departamento de Ciência e Tecnologia do Ministério da Saúde.
            <br/>
            <a 
              href={projectLinks.portaria1949} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Portaria Nº 1.949, de 4 de agosto de 2020
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;