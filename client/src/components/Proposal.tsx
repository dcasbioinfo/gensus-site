import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Proposal: React.FC = () => {
  const regions = [
    { abbr: 'N', name: 'Norte', color: 'bg-blue-500' },
    { abbr: 'NE', name: 'Nordeste', color: 'bg-green-500' },
    { abbr: 'CO', name: 'Centro-Oeste', color: 'bg-red-500' },
    { abbr: 'SE', name: 'Sudeste', color: 'bg-yellow-500' },
    { abbr: 'S', name: 'Sul', color: 'bg-purple-500' },
  ];

  return (
    <section id="proposal" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Proposta do Genomas SUS</h2>
          
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="mb-4">
                    O Genomas SUS propõe sequenciar 21.000 genomas brasileiros das cincos regiões geográficas do Brasil no seu primeiro ano de execução, garantindo representatividade genômica, demográfica e de ancestralidade das regiões.
                  </p>
                  
                  <p>
                    Assim como compartilhar informações genômicas e fenotípicas com o Programa Genomas Brasil.
                  </p>
                </div>
                
                <div className="bg-secondary/40 rounded-lg p-6 flex flex-col items-center">
                  <div className="text-4xl font-bold text-primary mb-3">21.000</div>
                  <p className="text-center font-medium mb-4">Genomas a serem sequenciados</p>
                  
                  <div className="w-full grid grid-cols-5 gap-2 mt-4">
                    {regions.map((region, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className={`w-8 h-8 ${region.color} rounded-full mb-2 flex items-center justify-center text-white text-xs font-bold`}>
                          {region.abbr}
                        </div>
                        <span className="text-xs text-center">{region.name}</span>
                      </div>
                    ))}
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

export default Proposal;
