// Links e logos do projeto
export const projectLinks = {
  genomasBrasil: "https://www.gov.br/saude/pt-br/composicao/sectics/decit/genomas-brasil",
  portaria1949: "https://bvsms.saude.gov.br/bvs/saudelegis/gm/2020/prt1949_05_08_2020.html",
  ministerioSaude: "https://www.gov.br/saude/pt-br",
  social: {
    linkedin: "https://www.linkedin.com/company/genomas-sus/",
    instagram: "https://www.instagram.com/genomas_sus/",
    youtube: "https://www.youtube.com/@GenomasSUS"
  }
};

// Logos das instituições
export const logoUrls = {
  // Logos do projeto
  genomasBrasil: "https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/parceiros/43930_parceiro.png",
  genomas_sus: "https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/parceiros/43929_parceiro.png",
  ministerioSaude: "https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/parceiros/43940_parceiro.png",
  sus: "https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/parceiros/43939_parceiro.png",
  governoFederal: "https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/parceiros/43946_parceiro.png",
  brasilBemCuidado: "https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/parceiros/43931_parceiro.png",
  
  // Logos das instituições
  fiocruz: "https://portal.fiocruz.br/sites/portal.fiocruz.br/themes/portalnovo/images/logo/logo-colorida.png",
  ufpa: "https://www.gov.br/ufpa/pt-br/sobre/Logo_UFPA_vertical.png",
  inc: "https://www.gov.br/inc/pt-br/inc/themes/padrao_gov_2023/img/logo-inc-colorido.png",
  ipec: "https://ipec.org.br/wp-content/uploads/2022/05/logo-ipec.png",
  ufmg: "https://www.ufmg.br/marca/img/marca-ufmg-cor-horizontal.png",
  ufpr: "https://www.ufpr.br/portalufpr/wp-content/uploads/2021/03/ufpr_marca-1024x306.png",
  ufrj: "https://ufrj.br/wp-content/uploads/2022/02/marca-UFRJ-horizontal-azul.png",
  usp: "https://www.usp.br/artesvisuais/wp-content/uploads/2020/05/USP_horizontal.png"
};

// Centros de pesquisa âncora
export interface ResearchCenter {
  id: number;
  name: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  description?: string;
}

export const researchCenters: ResearchCenter[] = [
  {
    id: 1,
    name: "Fiocruz Paraná",
    city: "Curitiba",
    state: "PR",
    latitude: -25.4284,
    longitude: -49.2733,
    description: "Desenvolvimento de protocolos de sequenciamento e análise bioinformática"
  },
  {
    id: 2,
    name: "Fiocruz Pernambuco",
    city: "Recife",
    state: "PE",
    latitude: -8.0476,
    longitude: -34.8770,
    description: "Análise de genomas relacionados a doenças infecciosas"
  },
  {
    id: 3,
    name: "Universidade Federal do Pará (UFPA)",
    city: "Belém",
    state: "PA",
    latitude: -1.4558,
    longitude: -48.4902,
    description: "Análise de variantes em populações amazônicas"
  },
  {
    id: 4,
    name: "Instituto Nacional de Cardiologia (INC)",
    city: "Rio de Janeiro",
    state: "RJ",
    latitude: -22.9494,
    longitude: -43.1908,
    description: "Sequenciamento e análise de variantes relacionadas a doenças cardiovasculares"
  },
  {
    id: 5,
    name: "Instituto para Pesquisa do Câncer (IPEC)",
    city: "Guarapuava",
    state: "PR",
    latitude: -25.3907,
    longitude: -51.4628,
    description: "Sequenciamento de genomas relacionados ao câncer"
  },
  {
    id: 6,
    name: "Universidade Federal de Minas Gerais (UFMG)",
    city: "Belo Horizonte",
    state: "MG",
    latitude: -19.9208,
    longitude: -43.9436,
    description: "Análise de variantes raras e comuns"
  },
  {
    id: 7,
    name: "Universidade Federal do Paraná (UFPR)",
    city: "Curitiba",
    state: "PR",
    latitude: -25.4486,
    longitude: -49.2343,
    description: "Farmacogenômica e análise de variantes"
  },
  {
    id: 8,
    name: "Universidade Federal do Rio de Janeiro (UFRJ)",
    city: "Rio de Janeiro",
    state: "RJ",
    latitude: -22.9068,
    longitude: -43.1729,
    description: "Banco de amostras e processamento genômico"
  },
  {
    id: 9,
    name: "Universidade de São Paulo (USP)",
    city: "São Paulo",
    state: "SP",
    latitude: -23.5505,
    longitude: -46.6333,
    description: "Implementação do sequenciamento genômico e análise de variantes"
  }
];

// Centros colaboradores
export const collaboratingCenters: ResearchCenter[] = [
  {
    id: 101,
    name: "Universidade Federal da Bahia (UFBA)",
    city: "Salvador",
    state: "BA",
    latitude: -12.9714,
    longitude: -38.5014,
    description: "Estudos de ancestralidade e diversidade populacional"
  },
  {
    id: 102,
    name: "Universidade Federal do Ceará (UFC)",
    city: "Fortaleza",
    state: "CE",
    latitude: -3.7407,
    longitude: -38.5391,
    description: "Sequenciamento e análise de dados da região Nordeste"
  },
  {
    id: 103,
    name: "Universidade de Brasília (UnB)",
    city: "Brasília",
    state: "DF",
    latitude: -15.7801,
    longitude: -47.9292,
    description: "Coordenação de políticas de implementação e protocolos éticos"
  },
  {
    id: 104,
    name: "Universidade Federal do Amazonas (UFAM)",
    city: "Manaus",
    state: "AM",
    latitude: -3.1019,
    longitude: -60.0250,
    description: "Estudos genômicos de populações indígenas e ribeirinhas"
  }
];

// Eixos temáticos
export interface ThematicAxis {
  name: string;
  projects: string[];
  samples: number;
  color: string;
}

export const thematicAxes: ThematicAxis[] = [
  {
    name: "Doenças Raras",
    projects: [
      "Sequenciamento de genomas de pacientes com doenças raras não diagnosticadas",
      "Desenvolvimento de painéis diagnósticos para doenças raras",
      "Estudo de variantes genéticas em síndromes raras brasileiras"
    ],
    samples: 6000,
    color: "#4C6EF5"
  },
  {
    name: "Câncer",
    projects: [
      "Perfil genômico de tumores prevalentes na população brasileira",
      "Biomarcadores genéticos para resposta a tratamentos oncológicos",
      "Estudo de predisposição genética a cânceres hereditários"
    ],
    samples: 6000,
    color: "#F03E3E"
  },
  {
    name: "Doenças Infecciosas",
    projects: [
      "Estudo da suscetibilidade genética à COVID-19 e outras infecções",
      "Farmacogenômica relacionada a tratamentos antivirais",
      "Perfil genômico da resposta imune a patógenos endêmicos"
    ],
    samples: 3000,
    color: "#40C057"
  },
  {
    name: "Doenças Cardiovasculares",
    projects: [
      "Predisposição genética a hipertensão e doença coronariana",
      "Farmacogenômica de medicamentos cardiovasculares",
      "Estudo de variantes genéticas em cardiopatias congênitas"
    ],
    samples: 3000,
    color: "#FD7E14"
  },
  {
    name: "Diabetes",
    projects: [
      "Perfil genômico do diabetes tipo 1 e 2 na população brasileira",
      "Farmacogenômica de medicamentos para tratamento do diabetes",
      "Predisposição genética a complicações do diabetes"
    ],
    samples: 3000,
    color: "#7950F2"
  }
];