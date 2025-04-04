import React from 'react';

// Importando as fotos dos pesquisadores
import adrianaPhoto from '../assets/images/researchers/Adriana.gif';
import andreaPhoto from '../assets/images/researchers/Andrea.gif';
import davidPhoto from '../assets/images/researchers/David.gif';
import eduardoPhoto from '../assets/images/researchers/Eduardo.gif';
import fabioPhoto from '../assets/images/researchers/Fabio.gif';
import leandroPhoto from '../assets/images/researchers/Leandro.gif';
import michelPhoto from '../assets/images/researchers/Michel.jpg';

// Importando as fotos das coordenadoras
import barbaraPhoto from '../assets/images/researchers/Barbara.gif';
import carolinaPhoto from '../assets/images/researchers/Carolina.gif';
import dilzaPhoto from '../assets/images/researchers/Dilza.gif';
import marinaPhoto from '../assets/images/researchers/Marina.gif';

interface TeamMember {
  name: string;
  role: string;
  institution: string;
  photoUrl?: string;
  lattes?: string;
}

// Pesquisadores Principais
const researchers: TeamMember[] = [
  {
    name: "Profa. Dra. Ândrea Ribeiro dos Santos",
    role: "Pesquisadora Principal",
    institution: "Universidade Federal do Pará (UFPA)",
    photoUrl: andreaPhoto,
    lattes: "http://lattes.cnpq.br/3899534338451625"
  },
  {
    name: "Prof. Dr. David Figueiredo",
    role: "Pesquisador Principal",
    institution: "UNICENTRO/IPEC",
    photoUrl: davidPhoto,
    lattes: "http://lattes.cnpq.br/8867251982236137"
  },
  {
    name: "Prof. Dr. Fábio Passetti",
    role: "Pesquisador Principal",
    institution: "Fiocruz Paraná",
    photoUrl: fabioPhoto,
    lattes: "http://lattes.cnpq.br/4216542239143600"
  },
  {
    name: "Profa. Dra. Norma Lucena",
    role: "Pesquisadora Principal",
    institution: "Fiocruz Pernambuco",
    lattes: "http://lattes.cnpq.br/7341938714365067"
  },
  {
    name: "Prof. Dr. Eduardo Tarazona",
    role: "Pesquisador Principal",
    institution: "Universidade Federal de Minas Gerais (UFMG)",
    photoUrl: eduardoPhoto,
    lattes: "http://lattes.cnpq.br/6203097295718656"
  },
  {
    name: "Profa. Dra. Adriana Carvalho",
    role: "Pesquisadora Principal",
    institution: "UFRJ / Instituto Nacional de Cardiologia",
    photoUrl: adrianaPhoto,
    lattes: "http://lattes.cnpq.br/6975079756933662"
  },
  {
    name: "Prof. Dr. Michel Naslavski",
    role: "Pesquisador Principal",
    institution: "USP São Paulo",
    photoUrl: michelPhoto,
    lattes: "http://lattes.cnpq.br/5084104783599564"
  },
  {
    name: "Prof. Dr. Leandro Colli",
    role: "Pesquisador Principal",
    institution: "USP Ribeirão Preto",
    photoUrl: leandroPhoto,
    lattes: "http://lattes.cnpq.br/1964519821323305"
  }
];

// Coordenadores do Projeto
const coordinators: TeamMember[] = [
  {
    name: "Profa. Dra. Marina Candido Visontai Cormedi",
    role: "Coordenadora Geral",
    institution: "Departamento de Ciência e Tecnologia (DECIT/MS)",
    photoUrl: marinaPhoto,
    lattes: "http://lattes.cnpq.br/9043763645682823"
  },
  {
    name: "Dra. Bárbara Yasmin Garcia Andrade",
    role: "Coordenadora Operacional",
    institution: "Departamento de Ciência e Tecnologia (DECIT/MS)",
    photoUrl: barbaraPhoto,
    lattes: "http://lattes.cnpq.br/6463933159063626"
  },
  {
    name: "Dra. Dilza Balteiro Pereira de Campos",
    role: "Coordenadora de Dados",
    institution: "Departamento de Ciência e Tecnologia (DECIT/MS)",
    photoUrl: dilzaPhoto,
    lattes: "http://lattes.cnpq.br/1647996910076056"
  },
  {
    name: "Dra. Carolina Silva de Carvalho",
    role: "Coordenadora de Dados",
    institution: "Departamento de Ciência e Tecnologia (DECIT/MS)",
    photoUrl: carolinaPhoto,
    lattes: "http://lattes.cnpq.br/9218128922992439"
  },
];

const MemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        {member.photoUrl ? (
          <img 
            src={member.photoUrl} 
            alt={member.name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="bg-gray-300 w-24 h-24 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-bold text-lg">{member.name}</h4>
        <p className="text-primary font-medium">{member.role}</p>
        <p className="text-gray-600 text-sm mt-1">{member.institution}</p>
        {member.lattes && (
          <a 
            href={member.lattes} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 text-sm hover:underline mt-2 block"
          >
            Currículo Lattes
          </a>
        )}
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Equipe</h2>
        
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Coordenação do Projeto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coordinators.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </div>
          
          <h3 className="text-2xl font-semibold mt-12 mb-6">Pesquisadores Principais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchers.map((member, index) => (
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
                  <li>Departamento de Ciência e Tecnologia (DECIT/MS)</li>
                  <li>Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq)</li>
                  <li>Financiadora de Estudos e Projetos (FINEP)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Instituições de Pesquisa</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Fiocruz Paraná</li>
                  <li>Fiocruz Pernambuco</li>
                  <li>Universidade Federal do Pará (UFPA)</li>
                  <li>Instituto Nacional de Cardiologia (INC)</li>
                  <li>Instituto para Pesquisa do Câncer (IPEC) Guarapuava</li>
                  <li>Universidade Federal de Minas Gerais (UFMG)</li>
                  <li>Universidade Federal do Paraná (UFPR)</li>
                  <li>Universidade Federal do Rio de Janeiro (UFRJ)</li>
                  <li>Universidade de São Paulo (USP)</li>
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