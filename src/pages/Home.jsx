import Marquee from '../components/Marquee';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import Highlights from '../components/Highlights';
import WhoIsItFor from '../components/WhoIsItFor';
import Pricing from '../components/Pricing';
import LeadForm from '../components/LeadForm';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import DemoCertificate from '../components/DemoCertificate';
import ProjectDemo from '../components/ProjectDemo';
import ClassPreview from '../components/ClassPreview';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="AI Fullstack Workshop - Master AI & Web Dev"
        description="Build your first live AI project. Zero coding needed. Training available in Tamil & English. Perfect for students seeking internships."
      />
      <Marquee />
      <main>
        <Hero />
        <Highlights />
        <ClassPreview />
        <DemoCertificate />
        <ProjectDemo />
        <Testimonials />
        <WhoIsItFor />
        <Pricing />
        <SolutionSection />
        <ProblemSection />
        <LeadForm />

        {/* Business Owners Section */}
        <section className="business-owners-section section">
          <div className="container reveal">
            <h2 className="section-title">For <span className="gradient-text">Business Owners</span></h2>
            <p className="section-subtitle business-owners-subtitle">
              We help businesses build websites and generate leads using AI and digital marketing.
            </p>
            <Link to="/services" className="btn-primary business-owners-btn">
              Get Leads Now
            </Link>
          </div>
        </section>

        <FinalCTA />
      </main>
    </>
  );
}
