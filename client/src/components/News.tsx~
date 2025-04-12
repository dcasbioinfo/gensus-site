import React, { useState } from 'react';
import { NewsItem, getLatestNews, getNewsByCategory, formatNewsDate } from '@/assets/news';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedNewsItem, setSelectedNewsItem] = useState<NewsItem | null>(null);
  
  // Recuperar todas as notícias ou filtrar por categoria
  const news = selectedCategory === 'todos' 
    ? getLatestNews() 
    : getNewsByCategory(selectedCategory as NewsItem['category']);
  
  // Categorias disponíveis
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'evento', label: 'Eventos' },
    { id: 'publicacao', label: 'Publicações' },
    { id: 'projeto', label: 'Projeto' },
    { id: 'midia', label: 'Mídia' },
    { id: 'outro', label: 'Outros' }
  ];
  
  // Mostrar detalhes de uma notícia
  const showNewsDetails = (item: NewsItem) => {
    setSelectedNewsItem(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Voltar para a lista de notícias
  const backToNewsList = () => {
    setSelectedNewsItem(null);
  };

  return (
    <section id="news" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Notícias</h2>
        <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
          Acompanhe as últimas notícias, eventos e publicações relacionadas ao projeto Genomas SUS.
        </p>
        
        {selectedNewsItem ? (
          // Detalhes da notícia selecionada
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={backToNewsList}
              className="mb-6 flex items-center text-primary hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Voltar para todas as notícias
            </button>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {selectedNewsItem.thumbnail && (
                <div className="w-full h-80 overflow-hidden">
                  <img 
                    src={selectedNewsItem.thumbnail} 
                    alt={selectedNewsItem.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === selectedNewsItem.category)?.label}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {formatNewsDate(selectedNewsItem.date)}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{selectedNewsItem.title}</h3>
                
                <div className="prose max-w-none">
                  {selectedNewsItem.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">{paragraph.trim()}</p>
                  ))}
                </div>
                
                {selectedNewsItem.url && (
                  <div className="mt-6">
                    <a 
                      href={selectedNewsItem.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Leia a notícia completa →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Lista de notícias
          <>
            {/* Filtro de categorias */}
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            {/* Lista de notícias */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map(item => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => showNewsDetails(item)}
                >
                  {item.thumbnail && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  )}
                  
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-3">
                      <span className="px-2 py-1 bg-primary-100 text-primary rounded-full text-xs font-medium">
                        {categories.find(cat => cat.id === item.category)?.label}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {formatNewsDate(item.date)}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">{item.summary}</p>
                    
                    <div className="text-right">
                      <span className="text-primary text-sm font-medium hover:underline">
                        Ler mais →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {news.length === 0 && (
              <div className="text-center py-10">
                <p className="text-gray-500">Nenhuma notícia encontrada para esta categoria.</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default News;