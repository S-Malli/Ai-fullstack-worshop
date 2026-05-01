import React, { useState } from 'react';
import classPreviewImg from '../assets/Workshop_screenshot.png';

export default function ClassPreview() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    // Scroll to register
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Show toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <section className="class-preview-section section">
      {/* Toast Notification */}
      {showToast && (
        <div className="registration-toast">
          <span className="registration-toast-emoji">🚀</span>
          <span>Register now and get your link in a minute!</span>
        </div>
      )}

      <div className="container reveal">
        <div className="class-preview-header">
          <h2 className="section-title">Watch How We <span className="gradient-text">Teach</span></h2>
          <p className="section-subtitle">
            Simple explanation + live building + step-by-step guidance.
          </p>
          <div className="class-preview-badge">
            💡 Even beginners can understand easily
          </div>
        </div>
        
        <div className="class-preview-mockup" onClick={handleClick}>
          <img 
            src={classPreviewImg} 
            alt="AI DigitalGen Live Class Preview - Mastering AI Web Development" 
            className="w-full block"
          />
          <div className="play-button-overlay">
            <div className="play-button-icon"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
