import React, { useState } from 'react';
import { thematicAxes, ThematicAxis } from '@/assets/projectData';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts';

const Projects: React.FC = () => {
  const [selectedAxis, setSelectedAxis] = useState<ThematicAxis | null>(null);
  
  // Preparar dados para o gráfico de distribuição
  const chartData = thematicAxes.map(axis => ({
    name: axis.name,
    value: axis.samples,
    color: axis.color
  }));
  
  // Total de amostras
  const totalSamples = chartData.reduce((sum, item) => sum + item.value, 0);
  
  // Função para selecionar um eixo temático
  const handleAxisClick = (axis: ThematicAxis) => {
    setSelectedAxis(axis);
  };
  
  // Renderização condicional para informações detalhadas
  const renderAxisDetails = () => {
    if (!selectedAxis) return null;
    
    return (
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold" style={{ color: selectedAxis.color }}>
            {selectedAxis.name}
          </h3>
          <span className="text-gray-600 font-medium">
            {selectedAxis.samples.toLocaleString()} amostras
          </span>
        </div>
        
        <h4 className="text-lg font-semibold mb-3">Projetos Relacionados:</h4>
        <ul className="list-disc pl-6 space-y-2">
          {selectedAxis.projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
        
        <div className="mt-6 flex justify-end">
          <button 
            className="text-sm text-gray-500 hover:text-gray-700"
            onClick={() => setSelectedAxis(null)}
          >
            Voltar para visão geral
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Projetos e Eixos Temáticos</h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          O Genomas SUS desenvolveu 5 eixos temáticos para distribuição das 21.000 amostras a serem sequenciadas, priorizando áreas de saúde de relevância para o Sistema Único de Saúde.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Gráfico de distribuição */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-4 text-center">Distribuição por Eixo Temático</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    dataKey="value"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value.toLocaleString()} amostras`, 'Quantidade']}
                    labelFormatter={(name) => `Eixo: ${name}`}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center mt-4">
                <p className="font-semibold">Total: {totalSamples.toLocaleString()} amostras</p>
              </div>
            </div>
          </div>
          
          {/* Lista de eixos temáticos */}
          <div className="lg:col-span-2">
            {selectedAxis ? (
              renderAxisDetails()
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {thematicAxes.map((axis, index) => (
                  <div 
                    key={index}
                    className="bg-white p-5 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                    onClick={() => handleAxisClick(axis)}
                    style={{ borderLeft: `4px solid ${axis.color}` }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-semibold" style={{ color: axis.color }}>
                        {axis.name}
                      </h3>
                      <span className="text-sm font-medium px-2 py-1 bg-gray-100 rounded-md">
                        {axis.samples.toLocaleString()} amostras
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">
                      {axis.projects[0].substring(0, 70)}...
                    </p>
                    <div className="text-right mt-3">
                      <span className="text-sm text-primary hover:underline">
                        Ver detalhes →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Metas do Projeto</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">21.000</div>
              <p>Genomas completos sequenciados de brasileiros de diferentes regiões do país</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <p>Eixos temáticos de pesquisa priorizando doenças relevantes para a saúde pública brasileira</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-primary mb-2">+15</div>
              <p>Instituições colaboradoras envolvidas em uma rede de pesquisa genômica nacional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;