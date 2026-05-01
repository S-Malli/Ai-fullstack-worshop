import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CONFIG } from '../constants/config';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible || location.pathname === '/services') return null;

  return (
    <div className="sticky-cta" id="sticky-cta">
      <a href={`mailto:${CONFIG.enquiryEmail}`} className="sticky-cta-text">
        <span>Enquiry:</span>
        <strong>{CONFIG.enquiryEmail}</strong>
      </a>
      <a href="/#register" className="sticky-cta-btn">
        Register Now 🚀
      </a>
    </div>
  );
}
