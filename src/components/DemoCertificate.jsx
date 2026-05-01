import React from 'react';
import certificateImg from '../assets/democerificate.png';

export default function DemoCertificate() {
  return (
    <section className="certificate-section section">
      <div className="container reveal">
        <div className="class-preview-header">
          <h2 className="section-title">Get Industry-Ready <span className="gradient-text">Certificate</span></h2>
          <p className="section-subtitle">
            Add this to your resume & LinkedIn to stand out from other students.<br/> Verified certificate after completion.
          </p>
        </div>
        <div className="certificate-mockup-container">
          <div className="certificate-badge">
            🎓 Project + Internship Ready
          </div>
          <img 
            src={certificateImg} 
            alt="AI DigitalGen AI + Fullstack Workshop Completion Certificate - Master AI & Web Dev" 
            className="certificate-img"
          />
        </div>
      </div>
    </section>
  );
}
