import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import ServicePage from './pages/ServicePage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import Layout from './components/Layout.tsx';
import { AdBumper } from './components/AdBumper.tsx';

const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState(false);

  if (!hasEntered) {
    return <AdBumper onComplete={() => setHasEntered(true)} />;
  }

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/choose-your-service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;