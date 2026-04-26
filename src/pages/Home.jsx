import Marquee from '../components/Marquee';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import LearningSection from '../components/LearningSection';
import Highlights from '../components/Highlights';
import WhoIsItFor from '../components/WhoIsItFor';
import Pricing from '../components/Pricing';
import LeadForm from '../components/LeadForm';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Marquee />
      <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <WhoIsItFor />
        <Pricing />
        <LearningSection />
        <SolutionSection />
        <ProblemSection />
        <LeadForm />

        {/* Business Owners Section */}
        <section className="business-owners-section section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
          <div className="container reveal">
            <h2 className="section-title">For <span className="gradient-text">Business Owners</span></h2>
            <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 30px' }}>
              We help businesses build websites and generate leads using AI and digital marketing.
            </p>
            <Link to="/services" className="btn-primary" style={{ display: 'inline-block' }}>
              Get Leads Now
            </Link>
          </div>
        </section>

        <FinalCTA />
      </main>
    </>
  );
}
