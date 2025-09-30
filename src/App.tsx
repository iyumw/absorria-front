// /src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import DignityPage from './pages/DignityPage';
import CarbonPage from './pages/CarbonPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dignidade-menstrual" element={<DignityPage />} />
        <Route path="/mercado-de-carbono" element={<CarbonPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/calculadora" element={<CalculatorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;