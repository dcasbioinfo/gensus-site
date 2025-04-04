import React from 'react';

interface PillarProps {
  icon: string;
  title: string;
  items: string[];
}

const Pillar: React.FC<PillarProps> = ({ icon, title, items }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white/20">
        <i className={`${icon} text-3xl`}></i>
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="w-2 h-2 mt-2 rounded-full bg-white inline-block mr-2"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Componente RoleCard removido por solicitação

const Pillars: React.FC = () => {
  const pillars = [
    {
      icon: "fas fa-graduation-cap",
      title: "Pilar Educacional",
      items: [
        "Formação e capacitação de recursos humanos",
        "Cursos online em genômica humana",
        "Atividades práticas nos laboratórios da rede",
        "Disseminação do conhecimento em genômica"
      ]
    },
    {
      icon: "fas fa-cogs",
      title: "Pilar Operacional",
      items: [
        "Gestão executiva do projeto",
        "Logística de amostras, insumos e equipamentos",
        "Integração operacional entre os centros",
        "Monitoramento e seleção de pessoal"
      ]
    },
    {
      icon: "fas fa-flask",
      title: "Pilar Científico",
      items: [
        "Análises de bioinformática",
        "Elaboração de pipelines para análise de dados",
        "Experimentos de sequenciamento",
        "Produção científica e publicações"
      ]
    }
  ];

  // (Roles removidos por solicitação)

  return (
    <section id="pillars" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Pilares do Genomas SUS</h2>
          
          <p className="text-center mb-12">
            De forma geral, a Rede está estruturada em três pilares principais: educacional, operacional e científico, sendo cada pilar composto por grupos de trabalho que podem incluir biologistas, monitor de pesquisa, cientista de dados, bioinformatas, entre outros.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Pillar
                key={index}
                icon={pillar.icon}
                title={pillar.title}
                items={pillar.items}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;
