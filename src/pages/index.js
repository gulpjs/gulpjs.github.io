import React from 'react';

import Layout from '@theme/Layout';

import Hero from '@theme/Hero';
import CompanyBanner from '@theme/CompanyBanner';
import BenefitSection from '@theme/BenefitSection';
import PluginSection from '@theme/PluginSection';
import BackerSection from '@theme/BackerSection';

function Index() {
  return (
    <Layout>
      <main>
        <Hero />
        <CompanyBanner />
        <BenefitSection />
        <PluginSection />
        <BackerSection />
      </main>
    </Layout>
  );
}

export default Index;
