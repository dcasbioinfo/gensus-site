import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const GlobalContext: React.FC = () => {
  const teamMembers = [
    {
      name: "Dra. Maria Silva",
      role: "Coordenadora Geral",
      institution: "Universidade de São Paulo",
      description: "Especialista em genética molecular com mais de 20 anos de experiência em pesquisa genômica."
    },
    {
      name: "Dr. Carlos Oliveira",
      role: "Coordenador Científico",
      institution: "Universidade Federal do Rio Grande do Sul",
      description: "Especialista em bioinformática com foco em análise de dados genômicos de populações."
    },
    {
      name: "Dra. Ana Pereira",
      role: "Coordenadora de Educação",
      institution: "Universidade Federal de Pernambuco",
      description: "Especialista em divulgação científica e capacitação em genômica."
    },
    {
      name: "Dr. Paulo Santos",
      role: "Coordenador Operacional",
      institution: "Universidade de Brasília",
      description: "Especialista em gestão de grandes projetos científicos e infraestrutura de pesquisa."
    },
    {
      name: "Dra. Luciana Costa",
      role: "Coordenadora de Bioinformática",
      institution: "Universidade Federal do Paraná",
      description: "Especialista em análise de dados genômicos de alta performance."
    },
    {
      name: "Dr. Roberto Almeida",
      role: "Coordenador de Parcerias Internacionais",
      institution: "Universidade Federal do Pará",
      description: "Especialista em colaborações internacionais e projetos multicentricos."
    }
  ];

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
    <section id="global-context" className="py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Equipe e Contexto Global</h2>
          
          <Tabs defaultValue="team" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="team">Equipe Principal</TabsTrigger>
              <TabsTrigger value="organogram">Organograma</TabsTrigger>
              <TabsTrigger value="global-impact">Impacto Global</TabsTrigger>
            </TabsList>
            
            <TabsContent value="team">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-6 text-primary">Equipe Científica e Liderança</h3>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="bg-card p-5 rounded-lg shadow-sm">
                        <h4 className="font-bold text-lg text-primary">{member.name}</h4>
                        <p className="text-sm font-medium text-primary/80">{member.role}</p>
                        <p className="text-xs text-muted-foreground mb-3">{member.institution}</p>
                        <p className="text-sm">{member.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="mt-6 text-sm text-muted-foreground text-center">
                    Além destes, o projeto conta com mais de 200 pesquisadores e técnicos distribuídos pelos centros âncoras e colaboradores em todo o Brasil.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="organogram">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-6 text-primary">Estrutura Organizacional</h3>
                  
                  <div className="mb-8 overflow-auto">
                    <div className="min-w-[800px]">
                      {/* Organograma Visual */}
                      <div className="relative flex flex-col items-center">
                        {/* Topo - Coordenação Geral */}
                        <div className="w-64 p-4 mb-8 bg-primary text-white rounded-lg text-center">
                          <h4 className="font-bold">Coordenação Geral</h4>
                          <p className="text-sm">Gestão Executiva do Projeto</p>
                        </div>
                        
                        {/* Linhas Conectoras */}
                        <div className="w-px h-8 bg-gray-300"></div>
                        
                        {/* Segundo Nível - 3 Coordenações */}
                        <div className="flex justify-center w-full gap-4 mb-8">
                          <div className="w-56 p-3 bg-blue-100 border border-blue-200 rounded-lg text-center">
                            <h4 className="font-bold text-blue-800">Coordenação Científica</h4>
                            <p className="text-xs text-blue-600">Supervisão de pesquisas e análises</p>
                          </div>
                          <div className="w-56 p-3 bg-green-100 border border-green-200 rounded-lg text-center">
                            <h4 className="font-bold text-green-800">Coordenação Operacional</h4>
                            <p className="text-xs text-green-600">Logística e infraestrutura</p>
                          </div>
                          <div className="w-56 p-3 bg-purple-100 border border-purple-200 rounded-lg text-center">
                            <h4 className="font-bold text-purple-800">Coordenação Educacional</h4>
                            <p className="text-xs text-purple-600">Capacitação e divulgação</p>
                          </div>
                        </div>
                        
                        {/* Linhas Conectoras */}
                        <div className="flex justify-center w-full px-24">
                          <div className="w-full h-px bg-gray-300"></div>
                        </div>
                        <div className="flex justify-between w-full px-24 h-8">
                          <div className="w-px h-full bg-gray-300"></div>
                          <div className="w-px h-full bg-gray-300"></div>
                          <div className="w-px h-full bg-gray-300"></div>
                          <div className="w-px h-full bg-gray-300"></div>
                        </div>
                        
                        {/* Terceiro Nível - 4 Áreas */}
                        <div className="flex justify-between w-full gap-2">
                          <div className="w-48 p-3 bg-gray-100 border border-gray-200 rounded-lg text-center">
                            <h4 className="font-bold text-gray-800 text-sm">Centros Âncoras</h4>
                            <p className="text-xs text-gray-600">8 centros</p>
                          </div>
                          <div className="w-48 p-3 bg-gray-100 border border-gray-200 rounded-lg text-center">
                            <h4 className="font-bold text-gray-800 text-sm">Bioinformática</h4>
                            <p className="text-xs text-gray-600">Análise de dados</p>
                          </div>
                          <div className="w-48 p-3 bg-gray-100 border border-gray-200 rounded-lg text-center">
                            <h4 className="font-bold text-gray-800 text-sm">Centros Colaboradores</h4>
                            <p className="text-xs text-gray-600">16 estados</p>
                          </div>
                          <div className="w-48 p-3 bg-gray-100 border border-gray-200 rounded-lg text-center">
                            <h4 className="font-bold text-gray-800 text-sm">Parcerias Internacionais</h4>
                            <p className="text-xs text-gray-600">Cooperação global</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Governança do Projeto</h4>
                    <p className="text-sm mb-4">
                      O projeto é estruturado em três níveis de governança, garantindo a coordenação eficiente e transparente das atividades em escala nacional:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="w-2 h-2 mt-2 rounded-full bg-primary inline-block mr-2"></span>
                        <span><strong>Comitê Gestor:</strong> Responsável pelas decisões estratégicas e alocação de recursos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 mt-2 rounded-full bg-primary inline-block mr-2"></span>
                        <span><strong>Coordenações:</strong> Científica, Operacional e Educacional coordenam as atividades específicas</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 mt-2 rounded-full bg-primary inline-block mr-2"></span>
                        <span><strong>Comitê Técnico-Científico:</strong> Composto por especialistas para assessoria e avaliação técnica</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="global-impact">
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default GlobalContext;