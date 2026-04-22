import CountdownTimer from './CountdownTimer';
import { CONFIG } from '../constants/config';

export default function FinalCTA() {
  const standardPlan = CONFIG.plans[0];
  const price = standardPlan.offerPrice === 0 ? 'FREE' : `₹${standardPlan.offerPrice}`;

  return (
    <section className="final-cta-section section" id="final-cta">
      <div className="final-cta-bg"></div>
      <div className="container">
        <div className="final-cta-content reveal">
          <span className="section-label">⏰ Don't Wait</span>
          <h2 className="section-title">
            Your Tech Journey <span className="gradient-text">Starts Today</span>
          </h2>
          <p className="section-subtitle mb-4">
            Don't let the fear of coding hold you back. Thousands of students 
            just like you have transformed their careers with AI. 
            <strong>You are next.</strong>
          </p>
          <p className="final-cta-urgency">
            🔥 Only 11 seats left — Offer expires in:
          </p>
          <CountdownTimer />
          <div className="final-cta-price">
            <span className="price-original">₹{standardPlan.originalPrice}</span>
            <span className={`price-current ${standardPlan.offerPrice === 0 ? 'price-free' : ''}`}>
              {price}
            </span>
            <span className="price-tag">Limited Time Offer</span>
          </div>
          <a href="#register" className="btn-primary" id="final-cta-btn">
            🚀 Book Your Seat Now — {price} Only
          </a>

          <div className="final-cta-guarantees">
            <div className="guarantee-item">
              <span className="guarantee-icon">💰</span>
              <span><strong>Value Guarantee</strong> — 100% satisfaction or personal guidance</span>
            </div>
            <div className="guarantee-item">
              <span className="guarantee-icon">📅</span>
              <span><strong>Weekend Sessions</strong> — Comfortable timing for students</span>
            </div>
            <div className="guarantee-item">
              <span className="guarantee-icon">⏰</span>
              <span><strong>Team reaches in 30 min</strong> — After registration confirmation</span>
            </div>
            <div className="guarantee-item">
              <span className="guarantee-icon">🗣️</span>
              <span><strong>Tamil Language</strong> — Easy to understand for everyone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
