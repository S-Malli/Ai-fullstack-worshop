import { Link } from 'react-router-dom';
import { CONFIG } from '../constants/config';

export default function Services() {
  const whatsappMessage = encodeURIComponent("Hi Mallikumar, I need know the digital marketing leads generation details ");
  const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="services-page" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="hero-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', padding: '100px 20px', position: 'relative' }}>
        <div className="hero-bg">
          <div className="hero-video-overlay" style={{ background: 'radial-gradient(circle at center, rgba(131,56,236, 0.4) 0%, rgba(15, 12, 41, 0.9) 100%)' }}></div>
          <div className="hero-grid"></div>
        </div>
        <div className="container reveal" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            Grow Your Business with <br/><span className="gradient-text">AI + Digital Marketing</span>
          </h1>
          <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '20px auto 40px', fontSize: '1.2rem' }}>
            Get a professional online presence, automated lead generation, and scalable ads to skyrocket your revenue.
          </p>
          <a href="#starter-pack" className="btn-primary" style={{ display: 'inline-block' }}>
            View Packages
          </a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container reveal">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label">⚠️ The Struggle</span>
            <h2 className="section-title">Is Your Business <span className="gradient-text">Invisible?</span></h2>
          </div>
          <div className="problem-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
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
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label">💡 Our Solutions</span>
            <h2 className="section-title">How We <span className="gradient-text">Scale You</span></h2>
          </div>
          <div className="who-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
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
      <section id="starter-pack" className="pricing-section section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container reveal">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-label">📦 The Package</span>
            <h2 className="section-title">Complete Business <span className="gradient-text">Starter Pack</span></h2>
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div className="pricing-card highlight">
              <div className="pricing-badge">🔥 Most Popular</div>
              <h3 className="plan-name">Digital Transformation</h3>
              <div className="plan-description" style={{ color: 'var(--text-primary)' }}>
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
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="plan-btn btn-primary" style={{ textAlign: 'center' }}>
                Contact Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
