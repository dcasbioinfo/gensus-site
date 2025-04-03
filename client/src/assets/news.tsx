// Estrutura de notícias do projeto Genomas SUS
export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  date: string;
  thumbnail?: string;
  url?: string;
  category: 'evento' | 'publicacao' | 'projeto' | 'midia' | 'outro';
  featured?: boolean;
}

// Lista de notícias do projeto
// Para adicionar uma nova notícia, basta adicionar um novo objeto ao array
// Para destacar uma notícia, defina featured: true
export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Genomas SUS sequencia 5.000 genomas em seu primeiro ano",
    summary: "O projeto alcançou 25% da meta de sequenciamento no primeiro ano de operação, fornecendo dados importantes para pesquisas em saúde pública.",
    content: `O programa Genomas SUS atingiu um marco importante em seu primeiro ano de operação ao completar o sequenciamento de 5.000 genomas de brasileiros, o que representa 25% da meta total de 21.000 genomas.

    Os dados coletados já estão sendo utilizados em pesquisas relacionadas aos cinco eixos temáticos do projeto: doenças raras, câncer, doenças infecciosas, doenças cardiovasculares e diabetes.

    "Este é um passo significativo para a medicina de precisão no Brasil", afirmou a coordenadora do projeto, destacando a importância da iniciativa para o desenvolvimento de tratamentos personalizados no Sistema Único de Saúde.`,
    date: "2023-08-15",
    thumbnail: "https://img.freepik.com/free-photo/scientist-working-laboratory-with-test-tubes-research-equipment_23-2149160098.jpg",
    category: "projeto",
    featured: true
  },
  {
    id: 2,
    title: "Pesquisadores identificam variantes genéticas específicas da população brasileira",
    summary: "Estudo publicado revela variantes genéticas únicas encontradas na população brasileira, destacando a importância da diversidade genética no país.",
    content: `Uma equipe de pesquisadores do Genomas SUS publicou um estudo revelando a identificação de variantes genéticas específicas da população brasileira, encontradas durante o sequenciamento dos primeiros 3.000 genomas do projeto.

    As variantes descobertas estão relacionadas a diferentes aspectos da saúde, incluindo resposta a medicamentos e predisposição a certas condições médicas. Os resultados destacam a importância de incluir a diversidade da população brasileira em bancos de dados genômicos globais.
    
    O estudo foi publicado na revista Scientific Reports e representa uma contribuição significativa para a compreensão da genética da população brasileira.`,
    date: "2023-05-22",
    thumbnail: "https://img.freepik.com/free-photo/scientist-holding-molecular-model-laboratory-research-center_23-2149146128.jpg",
    category: "publicacao"
  },
  {
    id: 3,
    title: "Simpósio Internacional de Medicina Genômica contará com apresentação do Genomas SUS",
    summary: "Coordenadores do projeto participarão do evento internacional para apresentar os avanços e resultados preliminares do sequenciamento genômico no Brasil.",
    content: `O Simpósio Internacional de Medicina Genômica, que acontecerá no próximo mês em São Paulo, contará com a participação de coordenadores do Genomas SUS, que apresentarão os avanços e resultados preliminares do projeto de sequenciamento genômico brasileiro.

    O evento reunirá especialistas de diversos países para discutir os avanços na área de medicina de precisão e genômica aplicada à saúde pública. A apresentação do Genomas SUS está programada para o segundo dia do evento e abordará a estrutura do programa, metodologias utilizadas e os primeiros resultados obtidos.
    
    As inscrições para o simpósio estão abertas e podem ser realizadas através do site oficial do evento.`,
    date: "2023-11-05",
    thumbnail: "https://img.freepik.com/free-photo/medical-conference-doctors-discussing-genome-research-hospital-conference-room_482257-21283.jpg",
    category: "evento"
  },
  {
    id: 4,
    title: "Genomas SUS é destaque em reportagem sobre avanços na saúde brasileira",
    summary: "Programa de sequenciamento genômico foi tema de reportagem especial sobre inovações tecnológicas no Sistema Único de Saúde.",
    content: `O projeto Genomas SUS foi destaque em uma reportagem especial sobre inovações tecnológicas no Sistema Único de Saúde, veiculada em um importante canal de televisão nacional.

    A matéria abordou os objetivos do programa, sua relevância para a saúde pública brasileira e entrevistou pesquisadores e pacientes beneficiados pela iniciativa. O foco da reportagem foi a contribuição do sequenciamento genômico para o diagnóstico e tratamento personalizado de doenças raras.
    
    "A repercussão da reportagem foi muito positiva e ajudou a divulgar o projeto para um público mais amplo", comentou a assessoria de comunicação do programa.`,
    date: "2023-09-18",
    thumbnail: "https://img.freepik.com/free-photo/reporter-journalist-news-media-professional-reporting-live_482257-21323.jpg",
    category: "midia"
  },
  {
    id: 5,
    title: "Novo centro colaborador em Manaus se une ao Genomas SUS",
    summary: "Universidade Federal do Amazonas passa a integrar a rede de centros colaboradores do projeto, ampliando o alcance na região Norte.",
    content: `A Universidade Federal do Amazonas (UFAM) passou oficialmente a integrar a rede de centros colaboradores do Genomas SUS, ampliando o alcance do projeto na região Norte do país.

    O novo centro colaborador será responsável pelo recrutamento de participantes e coleta de amostras, com foco especial em populações indígenas e ribeirinhas, contribuindo para aumentar a diversidade genética representada no projeto.
    
    A cerimônia de assinatura do termo de cooperação contou com a presença de representantes do Ministério da Saúde, da coordenação do Genomas SUS e da reitoria da UFAM.`,
    date: "2023-10-10",
    thumbnail: "https://img.freepik.com/free-photo/aerial-view-manaus-city-amazon-rainforest-brazil_649448-5636.jpg",
    category: "projeto"
  }
];

// Funções auxiliares para gerenciamento de notícias

// Retorna notícias em destaque
export const getFeaturedNews = () => {
  return newsItems.filter(item => item.featured);
};

// Retorna as últimas notícias, com limite opcional
export const getLatestNews = (limit?: number) => {
  const sorted = [...newsItems].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
};

// Filtra notícias por categoria
export const getNewsByCategory = (category: NewsItem['category']) => {
  return newsItems.filter(item => item.category === category);
};

// Encontra uma notícia pelo ID
export const getNewsById = (id: number) => {
  return newsItems.find(item => item.id === id);
};

// Formata data para exibição em português
export const formatNewsDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};