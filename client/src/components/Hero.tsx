import React from 'react';
import { Button } from '@/components/ui/button';
import { scrollToElement } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary to-[#159895] text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Genomas SUS</h1>
          <p className="text-xl md:text-2xl mb-8">
            Uma rede acadêmica para caracterização dos aspectos genômicos que impactam o processo saúde-doença na população brasileira.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              onClick={() => scrollToElement('proposal')} 
              className="bg-white hover:bg-secondary text-primary font-bold text-lg px-8 py-7 shadow-xl hover:text-white transition-all"
              size="lg"
            >
              Saiba mais
            </Button>
            <Button 
              onClick={() => scrollToElement('contact')} 
              variant="outline"
              className="border-2 border-white text-white bg-primary/40 backdrop-blur-sm hover:bg-white hover:text-primary font-bold text-lg px-8 py-7 shadow-xl transition-all"
              size="lg"
            >
              Entre em contato
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg inline-flex items-center">
              <div className="text-4xl font-bold mr-3">21.000</div>
              <div className="text-left">
                <div className="text-lg">genomas brasileiros</div>
                <div className="text-sm opacity-80">a serem sequenciados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
