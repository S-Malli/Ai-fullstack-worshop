import { useState, useEffect } from 'react';
import { CONFIG } from '../constants/config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <a href="#" className="navbar-logo">
          <span className="navbar-logo-icon">AI</span>
          AI Digital Gen
        </a>
        <div className="navbar-actions">
          <a href={`mailto:${CONFIG.enquiryEmail}`} className="navbar-email" title="Click to email us">
            <span className="navbar-email-icon">✉️</span>
            <div className="navbar-email-text">
              <span>Enquiry:</span>
              <strong>{CONFIG.enquiryEmail}</strong>
            </div>
          </a>
          <a href="#register" className="navbar-cta">
            Book Now ₹{CONFIG.workshopPrice}
          </a>
        </div>
      </div>
    </nav>
  );
}
