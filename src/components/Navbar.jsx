import { useState, useEffect } from 'react';
import { CONFIG } from '../constants/config';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const standardPlan = CONFIG.plans[0];
  const isFree = standardPlan.offerPrice === 0;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">AI</span>
          <span className="navbar-logo-text">AI DigitalGen</span>
        </Link>

        <div className="navbar-actions">
          <div className="navbar-menus" style={{ display: 'flex', gap: '4px' }}>
            <Link to="/" className="navbar-link">
              Workshop
            </Link>
            <Link to="/services" className="navbar-link">
              Services
            </Link>
          </div>
          <a href={`mailto:${CONFIG.enquiryEmail}`} className="navbar-email" title="Click to email us">
            <span className="navbar-email-icon">✉️</span>
            <div className="navbar-email-text">
              <span>Enquiry:</span>
              <strong>{CONFIG.enquiryEmail}</strong>
            </div>
          </a>
          <a href="/#register" className="navbar-cta">
            Book Now {isFree ? <span className="cta-free">FREE</span> : `₹${standardPlan.offerPrice}`}
          </a>
        </div>
      </div>
    </nav>
  );
}
