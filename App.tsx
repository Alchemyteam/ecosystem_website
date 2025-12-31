import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Module from './components/module';
import Story from './components/Story';
import Roadmap from './components/Roadmap';
import Success from './components/success';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Investor from './components/Investor';
import Funding from './components/Funding';
import Sector from './components/sector';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Glossary from './components/Glossary';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        <Header />
        <main>
          <Hero />
          <Module />
          <Story />
          <Roadmap />
          <Success />
          <TechStack />
          <Sector />
          <Investor />
          <Funding />
          <HowItWorks />
          <FAQ />
          <Glossary />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
