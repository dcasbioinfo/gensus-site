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
            <div className="flex space-x-3">
              <a 
                href={projectLinks.genomasBrasil} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
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
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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