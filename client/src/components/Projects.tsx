import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ThematicAxis {
  name: string;
  projects: string[];
  samples: number;
  color: string;
}

const Projects: React.FC = () => {
  const thematicAxes: ThematicAxis[] = [
    {
      name: "Oncogenômica",
      projects: [
        "CoDiGO (Coorte Dinâmica Genômica Oncológica)",
        "RGDarkMatter (Redes Regulatórias da Matéria Escura do Genoma)",
        "VARIOMA (Caracterização do varioma de pacientes com adenocarcinoma gástrico)"
      ],
      samples: 5000,
      color: "bg-blue-500"
    },
    {
      name: "Coortes de Nascimento",
      projects: [
        "BRISA (Coorte de nascimento brasileira São Luís e Ribeirão Preto)",
        "EPIGEN II (Epidemiologia Genética de Coortes Brasileiras II)"
      ],
      samples: 4000,
      color: "bg-green-500"
    },
    {
      name: "Genômica de Populações",
      projects: [
        "RENOMA (Rede Genomas da Amazônia)",
        "RPGPH-2 (Rede de Pesquisa em Genômica Populacional Humana)",
        "Genomas Paraná"
      ],
      samples: 3500,
      color: "bg-purple-500"
    },
    {
      name: "Doenças Infecciosas",
      projects: [
        "INFECTOMA (Vigilância genômica do COVID-19)",
        "Genomas Fiocruz"
      ],
      samples: 3000,
      color: "bg-red-500"
    },
    {
      name: "Doenças Cardiovasculares",
      projects: [
        "RENOMICA DAC (Rede Nacional de Genômica Cardiovascular)"
      ],
      samples: 2500,
      color: "bg-orange-500"
    },
    {
      name: "Genética Médica",
      projects: [
        "CASAIS (Piloto Programa Nacional de Triagem de Casais)",
        "MedEpiGen"
      ],
      samples: 2000,
      color: "bg-yellow-500"
    },
    {
      name: "Envelhecimento",
      projects: [
        "SABE (Saúde, Bem-Estar e Envelhecimento)"
      ],
      samples: 1000,
      color: "bg-teal-500"
    }
  ];

  const totalSamples = thematicAxes.reduce((acc, axis) => acc + axis.samples, 0);

  return (
    <section id="projects" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Projetos e Eixos Temáticos</h2>
          
          <Card>
            <CardContent className="p-6 md:p-8">
              <p className="mb-6">
                O Genomas SUS inclui coortes de projetos de pesquisa com coleta prospectiva e de projetos que já concluíram a coleta. A seguir estão listadas algumas das coortes inseridas na Rede, organizadas em eixos temáticos de relevância para o SUS.
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="py-3 px-4 text-left">Eixo Temático</th>
                      <th className="py-3 px-4 text-left">Coortes/Projetos</th>
                      <th className="py-3 px-4 text-right">Amostras</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {thematicAxes.map((axis, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="py-3 px-4">{axis.name}</td>
                        <td className="py-3 px-4">
                          <ul className="list-disc ml-5">
                            {axis.projects.map((project, idx) => (
                              <li key={idx}>{project}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="py-3 px-4 text-right">{axis.samples.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-100 font-medium">
                      <td className="py-3 px-4" colSpan={2}>Total</td>
                      <td className="py-3 px-4 text-right">{totalSamples.toLocaleString()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Distribuição por Eixo Temático</h3>
                
                <div className="bg-neutral p-4 rounded-lg">
                  <div className="h-20 md:h-32 flex items-end">
                    {thematicAxes.map((axis, index) => {
                      const heightPercentage = Math.round((axis.samples / 5000) * 100);
                      return (
                        <div 
                          key={index} 
                          className={`w-1/7 h-[${heightPercentage}%] ${axis.color} mx-1 relative group`}
                          style={{ height: `${heightPercentage}%` }}
                        >
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 invisible group-hover:visible bg-blue-700 text-white text-xs px-2 py-1 rounded">
                            {axis.samples.toLocaleString()}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="flex text-xs mt-2">
                    {thematicAxes.map((axis, index) => (
                      <div key={index} className="w-1/7 text-center">
                        {axis.name === "Doenças Cardiovasculares" ? "D. Cardiovasc." : 
                         axis.name === "Coortes de Nascimento" ? "Coortes Nasc." :
                         axis.name === "Genômica de Populações" ? "Gen. Populações" :
                         axis.name === "Doenças Infecciosas" ? "D. Infecciosas" :
                         axis.name === "Genética Médica" ? "Gen. Médica" :
                         axis.name}
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

export default Projects;
