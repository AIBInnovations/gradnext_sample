import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import ProgramOptions from '../components/home/ProgramOptions';
import ValueProposition from '../components/home/ValueProposition';
import Testimonials from '../components/home/Testimonials';
import ConsultantProfiles from '../components/home/ConsultantProfiles';
import ResultsSection from '../components/home/ResultsSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Stats />
      <ProgramOptions />
      <ValueProposition />
      <ResultsSection />
      <ConsultantProfiles />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Home;