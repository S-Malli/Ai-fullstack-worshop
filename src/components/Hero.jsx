import CountdownTimer from './CountdownTimer';
import { CONFIG } from '../constants/config';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Live Workshop · Tamil · Limited Seats
        </div>

        <h1 className="hero-title">
          Build Your First <span className="gradient-text">Live Website</span>
          <br />in {CONFIG.workshopDuration} Using AI 
        </h1>

        <p className="hero-subtitle">
          No coding needed. Learn AI-powered fullstack development and deploy
          your first project — even if you have zero tech background.
        </p>

        <div className="hero-cta-group">
          <a href="#register" className="btn-primary" id="hero-cta-btn">
            🚀 Book Now — Just ₹{CONFIG.workshopPrice}
          </a>
          <a href="#curriculum" className="btn-secondary">
            See What You'll Learn
          </a>
        </div>

        <div className="countdown-inline">
          <CountdownTimer />
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value gradient-text">200+</div>
            <div className="hero-stat-label">Students Trained</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value gradient-text">4.8★</div>
            <div className="hero-stat-label">Average Rating</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value gradient-text">{CONFIG.workshopDuration}</div>
            <div className="hero-stat-label">Workshop Duration</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value gradient-text">{CONFIG.workshopLanguage}</div>
            <div className="hero-stat-label">Language</div>
          </div>
        </div>
      </div>
    </section>
  );
}
