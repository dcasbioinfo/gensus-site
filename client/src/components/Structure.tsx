import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import BrazilMap from '@/components/BrazilMap';

const Structure: React.FC = () => {
  const anchorCenters = [
    'Universidade de São Paulo (USP)',
    'Universidade Estadual de Campinas (UNICAMP)',
    'Universidade Federal do Rio Grande do Sul (UFRGS)',
    'Universidade Federal do Paraná (UFPR)',
    'Universidade de Brasília (UnB)',
    'Universidade Federal do Maranhão (UFMA)',
    'Universidade Federal de Pernambuco (UFPE)',
    'Universidade Federal do Pará (UFPA)'
  ];

  const collaborativeStates = [
    'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Maranhão', 'Minas Gerais', 'Pará',
    'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul',
    'Roraima', 'São Paulo', 'Tocantins'
  ];

  // Split the collaborative states into two columns
  const halfPoint = Math.ceil(collaborativeStates.length / 2);
  const leftColStates = collaborativeStates.slice(0, halfPoint);
  const rightColStates = collaborativeStates.slice(halfPoint);

  return (
    <section id="structure" className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Estruturação do Genomas SUS</h2>
          
          <Card className="mb-8">
            <CardContent className="p-6 md:p-8">
              <p className="mb-6">
                A rede é constituída por pesquisadores e instituições públicas de diversos estados brasileiros organizados em 8 Centros Âncoras e demais Centros Colaboradores (Alagoas, Amapá, Amazonas, Bahia, Ceará, Maranhão, Minas Gerais, Pará, Pernambuco, Piauí, Rio de Janeiro, Rio Grande do Norte, Rio Grande do Sul, Roraima, São Paulo e Tocantins).
              </p>
              
              <p className="mb-6">
                Os Centros Colaboradores são os responsáveis pelas coletas de amostras e dados clínicos e envio das amostras para os Centros Âncoras. Os Centros Âncoras, por sua vez, além de realizar as coletas de amostras e dados clínicos, também são os responsáveis pelo sequenciamento do genoma e análise e armazenamento dos dados.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-primary">Mapa dos Centros de Pesquisa</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <BrazilMap />
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-4 text-primary">Centros Âncoras</h4>
                  <ul className="space-y-3 mb-6">
                    {anchorCenters.map((center, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 mt-2 rounded-full bg-primary inline-block mr-2"></span>
                        <span>{center}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-medium text-lg mb-4 text-primary">Centros Colaboradores</h4>
                  <p className="mb-2">Os Centros Colaboradores estão distribuídos em diversos estados:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <ul className="space-y-1">
                        {leftColStates.map((state, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 mt-2 rounded-full bg-primary-foreground inline-block mr-2"></span>
                            <span>{state}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-1">
                        {rightColStates.map((state, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 mt-2 rounded-full bg-primary-foreground inline-block mr-2"></span>
                            <span>{state}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Structure;
