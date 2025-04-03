import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const GlobalImpact: React.FC = () => {
  const globalImpacts = [
    {
      title: "Contribuição para o Global Genome Archive",
      description: "O Genomas SUS contribui com dados genômicos da população brasileira para o arquivo global de genomas, enriquecendo o conhecimento sobre a diversidade genética humana."
    },
    {
      title: "Representatividade populacional",
      description: "O Brasil, com sua população altamente miscigenada e diversa, representa um recurso único para estudos genômicos globais, preenchendo uma lacuna importante nos bancos de dados internacionais que historicamente sub-representam populações não-europeias."
    },
    {
      title: "Modelo para sistemas públicos de saúde",
      description: "O projeto serve como modelo para implementação de medicina genômica em sistemas públicos de saúde, especialmente para países em desenvolvimento com populações diversas."
    },
    {
      title: "Compartilhamento de conhecimento",
      description: "Através de publicações científicas e colaborações internacionais, o projeto dissemina conhecimentos e metodologias para a comunidade científica global."
    },
    {
      title: "Desenvolvimento de tecnologias",
      description: "O projeto impulsiona o desenvolvimento de novas tecnologias e métodos de análise que beneficiam a pesquisa genômica em escala global."
    }
  ];

  return (
    <section id="global-impact" className="py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Impacto Global</h2>
          
          <Card>
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-primary">Importância no Contexto Global</h3>
              
              <div className="mb-6">
                <p className="mb-4">
                  O Projeto Genomas SUS se insere em um contexto global de iniciativas de sequenciamento em larga escala, mas se destaca por suas características únicas e contribuições significativas para a ciência genômica mundial:
                </p>
                
                <div className="space-y-4 mt-6">
                  {globalImpacts.map((impact, index) => (
                    <div key={index} className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-bold text-primary mb-2">{impact.title}</h4>
                      <p className="text-sm">{impact.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-primary">Posicionamento Internacional</h4>
                <p className="text-sm">
                  O Genomas SUS está alinhado com iniciativas internacionais como o 1000 Genomes Project, 
                  All of Us Research Program (EUA), Genomics England (Reino Unido) e GenomeAsia 100K. 
                  O diferencial do projeto brasileiro está na abordagem integrada com o sistema público de saúde 
                  e no foco em uma das populações mais diversas do mundo, o que preenche lacunas importantes 
                  no conhecimento genômico global.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;