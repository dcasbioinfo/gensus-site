// Links e logos do projeto
export const projectLinks = {
  genomasBrasil: "https://www.gov.br/saude/pt-br/composicao/sectics/decit/genomas-brasil",
  portaria1949: "https://bvsms.saude.gov.br/bvs/saudelegis/gm/2020/prt1949_05_08_2020.html",
  ministerioSaude: "https://www.gov.br/saude/pt-br"
};

export const logoUrls = {
  genomasBrasil: "https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/parceiros/43930_parceiro.png",
  genomas_sus: "https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/parceiros/43929_parceiro.png",
  ministerioSaude: "https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/parceiros/43940_parceiro.png",
  sus: "https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/parceiros/43939_parceiro.png",
  governoFederal: "https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/parceiros/43946_parceiro.png",
  brasilBemCuidado: "https://grcmlesydpcd.objectstorage.sa-saopaulo-1.oci.customer-oci.com/p/OQwcvnO-c63O08Gc2Kv4OTbJttj5ik60dguiDIyyQ0wuo5SWn-jHOLW9wNbylNqI/n/grcmlesydpcd/b/dtysppobjmntbkp01/o/media/doity/parceiros/43931_parceiro.png"
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
    name: "Universidade de São Paulo (USP)",
    city: "São Paulo",
    state: "SP",
    latitude: -23.5505,
    longitude: -46.6333,
    description: "Implementação do sequenciamento genômico e análise de variantes"
  },
  {
    id: 2,
    name: "Universidade Federal do Rio de Janeiro (UFRJ)",
    city: "Rio de Janeiro",
    state: "RJ",
    latitude: -22.9068,
    longitude: -43.1729,
    description: "Banco de amostras e processamento genômico"
  },
  {
    id: 3,
    name: "Universidade Federal de Minas Gerais (UFMG)",
    city: "Belo Horizonte",
    state: "MG",
    latitude: -19.9208,
    longitude: -43.9436,
    description: "Análise de variantes raras e comuns"
  },
  {
    id: 4,
    name: "Fundação Oswaldo Cruz (Fiocruz)",
    city: "Rio de Janeiro",
    state: "RJ",
    latitude: -22.8771,
    longitude: -43.2469,
    description: "Desenvolvimento de protocolos de sequenciamento"
  },
  {
    id: 5,
    name: "Hospital de Clínicas de Porto Alegre (HCPA)",
    city: "Porto Alegre",
    state: "RS",
    latitude: -30.0328,
    longitude: -51.2198,
    description: "Análise de dados genômicos de doenças raras"
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