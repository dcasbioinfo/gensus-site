import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Context from '@/components/Context';
import Proposal from '@/components/Proposal';
import Mission from '@/components/Mission';
import Structure from '@/components/Structure';
import Projects from '@/components/Projects';
import Pillars from '@/components/Pillars';
import GlobalContext from '@/components/GlobalContext';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Context />
        <Proposal />
        <Mission />
        <Structure />
        <Projects />
        <Pillars />
        <GlobalContext />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
