import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import './App.css';

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </>
  );
}

export default App;
