import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import LearningSection from './components/LearningSection';
import Highlights from './components/Highlights';
import WhoIsItFor from './components/WhoIsItFor';
import LeadForm from './components/LeadForm';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import WhatsAppButton from './components/WhatsAppButton';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Marquee />
      <main>
        <Hero />
        <Highlights />
        <WhoIsItFor />
        <LearningSection />
        <SolutionSection />
        <ProblemSection />
        <LeadForm />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <StickyCTA />
    </>
  );
}

export default App;
