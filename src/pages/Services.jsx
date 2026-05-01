import { Link } from 'react-router-dom';
import { CONFIG } from '../constants/config';
import SEO from '../components/SEO';

export default function Services() {
  const whatsappMessage = encodeURIComponent("Hi Mallikumar, I need know the digital marketing leads generation details ");
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <SEO 
        title="AI Digital Marketing Services - Scale Your Business"
        description="Grow your business with AI-powered digital marketing and high-converting websites. Get 15-20 leads within 7 days. Free consultation available."
        keywords="AI Digital Marketing, Lead Generation Services, Website Development Tamil, Scale Business with AI, Digital Transformation Agency"
      />
      <main className="services-page">
      {/* Hero Section */}
      <section className="hero-section services-hero">
        <div className="hero-bg">
          <div className="hero-video-overlay services-hero-overlay"></div>
          <div className="hero-grid"></div>
        </div>
        <div className="container reveal text-center relative z-1">
          <h1 className="hero-title services-hero-title">
            Grow Your Business with <br/><span className="gradient-text">AI + Digital Marketing</span>
          </h1>
          <p className="hero-subtitle services-hero-subtitle">
            Get a professional online presence, automated lead generation, and scalable ads to skyrocket your revenue.
          </p>
          <a href="#starter-pack" className="btn-primary inline-block">
            View Packages
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section section bg-secondary">
        <div className="container reveal">
          <div className="class-preview-header">
            <span className="section-label">⚠️ The Struggle</span>
            <h2 className="section-title">Is Your Business <span className="gradient-text">Invisible?</span></h2>
          </div>
          <div className="problem-grid three-col-grid">
            <div className="problem-card">
              <span className="problem-icon">🌐</span>
              <h3>No Website</h3>
              <p>Customers can't find you online when they search for your services.</p>
            </div>
            <div className="problem-card">
              <span className="problem-icon">📉</span>
              <h3>No Leads</h3>
              <p>Relying only on word-of-mouth is unpredictable and limits growth.</p>
            </div>
            <div className="problem-card">
              <span className="problem-icon">👻</span>
              <h3>No Online Presence</h3>
              <p>Competitors are stealing your market share with digital marketing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solution-section section">
        <div className="container reveal">
          <div className="class-preview-header">
            <span className="section-label">💡 Our Solutions</span>
            <h2 className="section-title">How We <span className="gradient-text">Scale You</span></h2>
          </div>
          <div className="who-grid three-col-grid">
            <div className="who-card">
              <span className="who-icon">💻</span>
              <h3 className="who-title">Website Development</h3>
              <p className="who-desc">High-converting, mobile-responsive websites powered by the latest fullstack technology.</p>
            </div>
            <div className="who-card">
              <span className="who-icon">📱</span>
              <h3 className="who-title">Facebook & Instagram Ads</h3>
              <p className="who-desc">Highly targeted ad campaigns designed to maximize ROI and bring in qualified leads.</p>
            </div>
            <div className="who-card">
              <span className="who-icon">⚡</span>
              <h3 className="who-title">Lead Generation Funnels</h3>
              <p className="who-desc">Automated sales funnels that turn cold traffic into paying customers 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section id="starter-pack" className="pricing-section section bg-secondary">
        <div className="container reveal">
          <div className="class-preview-header">
            <span className="section-label">📦 The Package</span>
            <h2 className="section-title">Complete Business <span className="gradient-text">Starter Pack</span></h2>
          </div>
          <div className="certificate-mockup-container">
            <div className="pricing-card highlight">
              <div className="pricing-badge">🔥 Most Popular</div>
              <h3 className="plan-name">Digital Transformation</h3>
              <div className="plan-description services-pricing-card-desc">
                Everything you need to start getting customers online today.
              </div>
              <ul className="plan-features">
                <li className="plan-feature"><span className="plan-feature-icon">✓</span><span>Custom Website Development</span></li>
                <li className="plan-feature"><span className="plan-feature-icon">✓</span><span>Free Hosting Setup</span></li>
                <li className="plan-feature"><span className="plan-feature-icon">✓</span><span>Facebook & Instagram Ads Setup</span></li>
                <li className="plan-feature"><span className="plan-feature-icon" style={{ color: '#ff006e' }}>🚀</span><strong style={{ color: 'var(--text-primary)' }}>Get 15-20 Leads within 7 Days</strong></li>
                <li className="plan-feature"><span className="plan-feature-icon">✓</span><span>Lead Generation Funnel & CRM</span></li>
                <li className="plan-feature"><span className="plan-feature-icon">✓</span><span>High-Converting Copywriting</span></li>
                <li className="plan-feature"><span className="plan-feature-icon">✓</span><span>Automated WhatsApp / Email Follow-ups</span></li>
                <li className="plan-feature"><span className="plan-feature-icon">✓</span><span>Competitor Analysis & Ad Strategy</span></li>
                <li className="plan-feature"><span className="plan-feature-icon">✓</span><span>SEO Optimization Basics</span></li>
                <li className="plan-feature"><span className="plan-feature-icon">✓</span><span>1 Month Support & Maintenance</span></li>
              </ul>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="plan-btn btn-primary text-center">
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
