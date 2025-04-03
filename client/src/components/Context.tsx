import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Context: React.FC = () => {
  return (
    <section id="context" className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Contextualização</h2>
          
          <Card>
            <CardContent className="p-6 md:p-8">
              <p className="mb-4">
                O Genomas SUS foi criado em 2023 por pesquisadores de várias universidades públicas e está sendo financiado pelo Departamento de Ciência e Tecnologia (DECIT) da Secretaria de Ciência, Tecnologia e Inovação e do Complexo Econômico-Industrial da Saúde (SECTICS) do Ministério da Saúde em convênio com a Fundação de Apoio ao Ensino Pesquisa e Assistência HCFMRP/USP.
              </p>
              
              <p className="mb-4">
                Esse projeto está inserido no contexto do Programa Nacional de Genômica e Saúde de Precisão (Genomas Brasil) que é uma iniciativa do Ministério da Saúde consolidada pela portaria n°1949 de 4 de agosto de 2020 com a finalidade de fomentar o desenvolvimento científico e tecnológico nacional na área da genômica e da saúde de precisão, assim como estabelecer modelos práticos e suscetíveis de implementação no Sistema Único de Saúde (SUS).
              </p>
              
              <div className="mt-6 flex justify-center">
                <div className="inline-flex items-center bg-secondary/50 p-4 rounded-lg">
                  <i className="fas fa-calendar-alt text-2xl text-primary mr-4"></i>
                  <div>
                    <p className="font-medium">Criado em 2023</p>
                    <p className="text-sm text-gray-600">Portaria n°1949 de 4 de agosto de 2020</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Context;
