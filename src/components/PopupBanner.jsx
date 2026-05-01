import React, { useState, useEffect } from 'react';
import bannerImg from '../assets/banner_image.jpeg';

export default function PopupBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show banner after 1.5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="popup-close"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Banner Link */}
        <a 
          href="#register" 
          onClick={() => setIsOpen(false)}
          className="popup-banner-link"
        >
          <img 
            src={bannerImg} 
            alt="Special Workshop Offer" 
            className="w-full block"
          />
        </a>
      </div>
    </div>
  );
}
