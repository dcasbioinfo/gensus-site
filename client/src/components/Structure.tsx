import React, { useState } from 'react';
import BrazilMap from './BrazilMap';
import { researchCenters, collaboratingCenters } from '@/assets/projectData';
import { ResearchCenter } from '@/assets/projectData';

const Structure: React.FC = () => {
  const [anchorCenters, setAnchorCenters] = useState<ResearchCenter[]>(researchCenters);
  const [collabCenters, setCollabCenters] = useState<ResearchCenter[]>(collaboratingCenters);
  
  // Handler para adicionar centro âncora
  const handleAddAnchorCenter = (center: ResearchCenter) => {
    setAnchorCenters([...anchorCenters, center]);
  };
  
  // Handler para remover centro âncora
  const handleRemoveAnchorCenter = (id: number) => {
    setAnchorCenters(anchorCenters.filter(center => center.id !== id));
  };
  
  // Handler para adicionar centro colaborador
  const handleAddCollabCenter = (center: ResearchCenter) => {
    setCollabCenters([...collabCenters, center]);
  };
  
  // Handler para remover centro colaborador
  const handleRemoveCollabCenter = (id: number) => {
    setCollabCenters(collabCenters.filter(center => center.id !== id));
  };

  return (
    <section id="structure" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Estruturação do Genomas SUS</h2>
        
        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Governança</h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-lg mb-4">
                O Genomas SUS é estruturado em um modelo de governança colaborativa, sob coordenação do Departamento de Ciência e Tecnologia do Ministério da Saúde (DECIT/SECTICS/MS). A governança é composta por diferentes instâncias:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Comitê Gestor</h4>
                  <p>Responsável pelas decisões estratégicas e pela supervisão geral do programa, é composto por representantes do Ministério da Saúde, instituições de pesquisa e especialistas.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Comitê Técnico-Científico</h4>
                  <p>Formado por especialistas em genômica, bioinformática, ética em pesquisa e saúde pública, assessora tecnicamente o projeto e avalia protocolos de pesquisa.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Centros de Pesquisa Âncora</h4>
                  <p>Instituições de excelência responsáveis pela condução das pesquisas, sequenciamento genômico e análise de dados, distribuídas em diferentes regiões do país.</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-xl mb-3">Centros Colaboradores</h4>
                  <p>Instituições parceiras que contribuem com amostras, infraestrutura ou expertise em áreas específicas relacionadas ao projeto.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-6">
            <BrazilMap 
              centers={anchorCenters} 
              title="Mapa dos Centros de Pesquisa Âncora"
              onRemoveCenter={handleRemoveAnchorCenter}
              editable={false}
            />
          </div>
          
          <div className="pt-6">
            <BrazilMap 
              centers={collabCenters} 
              title="Mapa dos Centros Colaboradores"
              onRemoveCenter={handleRemoveCollabCenter}
              editable={false}
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Aspectos Éticos e Regulatórios</h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-lg mb-4">
                O Genomas SUS é guiado por princípios éticos rigorosos e segue as regulamentações nacionais para pesquisa genômica:
              </p>
              
              <ul className="list-disc pl-6 space-y-3 mt-4">
                <li>Todas as pesquisas são aprovadas por Comitês de Ética em Pesquisa (CEP) e pela Comissão Nacional de Ética em Pesquisa (CONEP).</li>
                <li>Participação voluntária e consentimento livre e esclarecido para todos os participantes.</li>
                <li>Proteção da privacidade e confidencialidade dos dados genômicos.</li>
                <li>Compartilhamento seguro e controlado de dados para fins científicos.</li>
                <li>Política de retorno de resultados clinicamente relevantes aos participantes.</li>
                <li>Compromisso com a equidade no acesso aos benefícios da pesquisa genômica.</li>
              </ul>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <p>
                  <strong>Portaria nº 1.949, de 4 de agosto de 2020:</strong> Instituiu o programa Genomas Brasil, visando o estabelecimento da iniciativa brasileira de Medicina de Precisão.
                </p>
                <p className="mt-2">
                  <a 
                    href="https://bvsms.saude.gov.br/bvs/saudelegis/gm/2020/prt1949_05_08_2020.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Consulte a portaria completa aqui
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Structure;