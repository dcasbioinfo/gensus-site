import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  institution: string;
  photoUrl?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dra. Ana Silva",
    role: "Coordenadora Geral",
    institution: "Departamento de Ciência e Tecnologia (DECIT/MS)"
  },
  {
    name: "Dr. Ricardo Oliveira",
    role: "Coordenador Científico",
    institution: "Universidade de São Paulo (USP)"
  },
  {
    name: "Dra. Carla Mendes",
    role: "Coordenadora de Bioinformática",
    institution: "Universidade Federal do Rio de Janeiro (UFRJ)"
  },
  {
    name: "Dr. Paulo Santos",
    role: "Coordenador de Ética e Aspectos Regulatórios",
    institution: "Fundação Oswaldo Cruz (Fiocruz)"
  },
  {
    name: "Dra. Mariana Costa",
    role: "Coordenadora de Doenças Raras",
    institution: "Hospital de Clínicas de Porto Alegre (HCPA)"
  },
  {
    name: "Dr. Fernando Rocha",
    role: "Coordenador de Oncogenômica",
    institution: "A.C. Camargo Cancer Center"
  },
  {
    name: "Dra. Luciana Almeida",
    role: "Coordenadora de Doenças Infecciosas",
    institution: "Universidade Federal da Bahia (UFBA)"
  },
  {
    name: "Dr. Marcelo Ferreira",
    role: "Coordenador de Doenças Cardiovasculares",
    institution: "Instituto do Coração (InCor)"
  },
];

const executiveCommittee: TeamMember[] = [
  {
    name: "Dr. João Pereira",
    role: "Diretor",
    institution: "Departamento de Ciência e Tecnologia (DECIT/MS)"
  },
  {
    name: "Dra. Maria Sousa",
    role: "Representante",
    institution: "Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq)"
  },
  {
    name: "Dr. Roberto Campos",
    role: "Representante",
    institution: "Financiadora de Estudos e Projetos (FINEP)"
  },
  {
    name: "Dra. Cristina Lima",
    role: "Representante",
    institution: "Conselho Nacional de Secretários de Saúde (CONASS)"
  }
];

const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <div className="bg-gray-300 w-24 h-24 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-lg">{member.name}</h4>
        <p className="text-primary font-medium">{member.role}</p>
        <p className="text-gray-600 text-sm mt-1">{member.institution}</p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Equipe</h2>
        
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Coordenadores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
          
          <h3 className="text-2xl font-semibold mt-12 mb-6">Comitê Gestor</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executiveCommittee.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Participação Institucional</h3>
            <p className="mb-4">O Genomas SUS conta com a participação de importantes instituições:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Instituições Governamentais</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ministério da Saúde (MS)</li>
                  <li>Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq)</li>
                  <li>Financiadora de Estudos e Projetos (FINEP)</li>
                  <li>Conselho Nacional de Secretários de Saúde (CONASS)</li>
                  <li>Conselho Nacional de Secretarias Municipais de Saúde (CONASEMS)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Instituições de Pesquisa</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Universidade de São Paulo (USP)</li>
                  <li>Universidade Federal do Rio de Janeiro (UFRJ)</li>
                  <li>Universidade Federal de Minas Gerais (UFMG)</li>
                  <li>Fundação Oswaldo Cruz (Fiocruz)</li>
                  <li>Hospital de Clínicas de Porto Alegre (HCPA)</li>
                  <li>A.C. Camargo Cancer Center</li>
                  <li>Instituto do Coração (InCor)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;