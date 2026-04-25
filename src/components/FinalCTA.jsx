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
            Don’t miss this opportunity to <span className="gradient-text">start your tech journey</span>
          </h2>
          <p className="section-subtitle mb-4">
            Build your first project this weekend and take one step closer to your internship. 
            <strong> 10+ years of real industry experience at your fingertips.</strong>
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
            🔥 Reserve My Seat Now — {price} Only
          </a>

          <div className="final-cta-guarantees">
            <div className="guarantee-item">
              <span className="guarantee-icon">👨‍🏫</span>
              <span><strong>10+ Years Experience</strong> — Real industry guidance</span>
            </div>
            <div className="guarantee-item">
              <span className="guarantee-icon">👨‍🎓</span>
              <span><strong>Guided 1000+ Students</strong> — Proven success roadmap</span>
            </div>
            <div className="guarantee-item">
              <span className="guarantee-icon">🛠️</span>
              <span><strong>Practical Approach</strong> — No boring theory, only building</span>
            </div>
            <div className="guarantee-item">
              <span className="guarantee-icon">🚀</span>
              <span><strong>Fast Results</strong> — Deploy your live project in 10 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
