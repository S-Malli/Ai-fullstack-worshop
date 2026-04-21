import CountdownTimer from './CountdownTimer';
import { CONFIG } from '../constants/config';

export default function FinalCTA() {
  return (
    <section className="final-cta-section section" id="final-cta">
      <div className="final-cta-bg"></div>
      <div className="container">
        <div className="final-cta-content reveal">
          <span className="section-label">⏰ Don't Wait</span>
          <h2 className="section-title">
            This Offer <span className="gradient-text">Won't Last</span>
          </h2>
          <p className="final-cta-urgency">
            🔥 Only 11 seats left — Offer expires in:
          </p>
          <CountdownTimer />
          <div className="final-cta-price">
            <span className="price-original">₹999</span>
            <span className="price-current">₹{CONFIG.workshopPrice}</span>
            <span className="price-tag">90% OFF</span>
          </div>
          <a href="#register" className="btn-primary" id="final-cta-btn">
            🚀 Book Your Seat Now — ₹{CONFIG.workshopPrice}
          </a>

          <div className="final-cta-guarantees">
            <div className="guarantee-item">
              <span className="guarantee-icon">💰</span>
              <span><strong>100% Refund</strong> — Not satisfied? Get your ₹{CONFIG.workshopPrice} back</span>
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
              <span><strong>{CONFIG.workshopLanguage} Language</strong> — Easy to understand for everyone</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
