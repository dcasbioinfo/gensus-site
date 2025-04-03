import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#159895] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Genomas SUS</h3>
              <p className="text-sm opacity-80">Uma rede acadêmica para caracterização dos aspectos genômicos da população brasileira.</p>
            </div>
            
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-4 mb-4">
                <div className="h-12 bg-white p-1 rounded flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">Ministério da Saúde</span>
                </div>
                <div className="h-12 bg-white p-1 rounded flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">Programa Genomas Brasil</span>
                </div>
              </div>
              <p className="text-sm opacity-80">&copy; 2023 Genomas SUS. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
