import { useState, useEffect } from 'react';
import { CONFIG } from '../constants/config';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-cta" id="sticky-cta">
      <div className="sticky-cta-text">
        <strong>₹{CONFIG.workshopPrice} Only</strong>
        Limited time offer
      </div>
      <a href="#register" className="sticky-cta-btn">
        Book Now 🚀
      </a>
    </div>
  );
}
