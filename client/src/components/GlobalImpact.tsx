import React from 'react';

const GlobalImpact: React.FC = () => {
  return (
    <section id="global-impact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Impacto Global</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Contribuição para a Genômica Global</h3>
            
            <p className="text-lg mb-6">
              O projeto Genomas SUS se insere no contexto global de iniciativas de sequenciamento genômico em larga escala,
              contribuindo com dados da população brasileira para os esforços internacionais de compreensão da diversidade genética humana.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Representatividade da Diversidade Brasileira</h4>
                <p>
                  A população brasileira é uma das mais diversas geneticamente do mundo, resultante da mistura de populações
                  ameríndias, europeias e africanas. O sequenciamento de 21.000 genomas brasileiros fornecerá dados
                  essenciais para compreender essa diversidade única.
                </p>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Colaborações Internacionais</h4>
                <p>
                  O Genomas SUS estabelece parcerias com iniciativas internacionais como o Genome Aggregation Database (gnomAD),
                  o Global Alliance for Genomics & Health (GA4GH) e o Human Genome Diversity Project, compartilhando
                  dados de variantes genéticas da população brasileira.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-5">
              <div className="text-3xl font-bold text-primary mb-3">+50</div>
              <h4 className="text-lg font-semibold mb-2">Publicações Científicas</h4>
              <p className="text-gray-600">
                Artigos científicos publicados em revistas internacionais de alto impacto,
                contribuindo para o avanço do conhecimento genômico global.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5">
              <div className="text-3xl font-bold text-primary mb-3">+10</div>
              <h4 className="text-lg font-semibold mb-2">Parcerias Internacionais</h4>
              <p className="text-gray-600">
                Colaborações estabelecidas com instituições e projetos internacionais
                para intercâmbio de conhecimento e tecnologias em genômica.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-5">
              <div className="text-3xl font-bold text-primary mb-3">+100</div>
              <h4 className="text-lg font-semibold mb-2">Variantes Genéticas Identificadas</h4>
              <p className="text-gray-600">
                Milhares de variantes genéticas específicas da população brasileira identificadas,
                contribuindo para o conhecimento global da diversidade genômica humana.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">Desafios e Perspectivas Globais</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">Desafios</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Representatividade de populações subrepresentadas nos bancos de dados genômicos globais</li>
                  <li>Padronização de protocolos e análises para comparabilidade internacional</li>
                  <li>Compartilhamento ético de dados sensíveis em escala global</li>
                  <li>Capacitação de profissionais em escala para atender à demanda global</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold mb-3">Perspectivas</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contribuição para o desenvolvimento de bancos de dados de referência globais</li>
                  <li>Formação de redes colaborativas internacionais em genômica</li>
                  <li>Participação na definição de políticas globais de genômica e saúde</li>
                  <li>Posicionamento do Brasil como referência em genômica populacional</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="font-medium">
                "A contribuição do Genomas SUS para o entendimento da diversidade genética humana posiciona o Brasil como um ator importante no cenário da genômica global, 
                promovendo a inclusão de populações tradicionalmente subrepresentadas nas iniciativas mundiais de sequenciamento genômico."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;