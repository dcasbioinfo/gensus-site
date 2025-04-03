import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Context from '@/components/Context';
import Proposal from '@/components/Proposal';
import Mission from '@/components/Mission';
import GlobalImpact from '@/components/GlobalImpact';
import Structure from '@/components/Structure';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Pillars from '@/components/Pillars';
import News from '@/components/News';
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
        <GlobalImpact />
        <Structure />
        <Projects />
        <Team />
        <Pillars />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
