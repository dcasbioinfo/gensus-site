import React from 'react';

const MissionCard: React.FC<{ icon: string; title: string; description: string }> = ({ 
  icon, 
  title, 
  description 
}) => {
  return (
    <div className="bg-white/20 p-4 rounded-lg">
      <div className="text-center mb-3">
        <i className={`${icon} text-3xl`}></i>
      </div>
      <h3 className="text-lg font-medium text-center mb-2">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

const Mission: React.FC = () => {
  const cards = [
    {
      icon: "fas fa-dna",
      title: "Produção de Dados",
      description: "Gerando novos dados genômicos da população brasileira"
    },
    {
      icon: "fas fa-clipboard-check",
      title: "Procedimentos Padronizados",
      description: "Visando redução de custos e aumento de qualidade"
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Treinamento",
      description: "Capacitação de grupos de pesquisa e saúde em genômica"
    }
  ];

  return (
    <section id="mission" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Missão do Genomas SUS</h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8">
            <p className="mb-8">
              O Genomas SUS tem como missão unir profissionais de universidades públicas de todo o Brasil a fim de criar uma estrutura de gerenciamento unificado para projetos que possuem impacto na saúde de precisão, permitindo a produção de novos dados, o estabelecimento de procedimentos operacionais padronizados que visam a redução de custos e aumento de qualidade, acompanhamento da execução de projetos de forma que haja minimização de riscos, cumprimento de metas e maximização de resultados, além de treinar grupos de pesquisa e da saúde na área da genômica.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {cards.map((card, index) => (
                <MissionCard 
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
