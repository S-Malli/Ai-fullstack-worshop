import { CONFIG } from '../constants/config';

export default function Hero() {
  const workshopTime = CONFIG.workshop.dateTime;

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg">
        <div className="hero-mesh"></div>
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            10+ Years Industry Experience · Live Training · Certification
          </div>

          <h1 className="hero-title">
            Build Your Career in <span className="gradient-text">IT Sector</span>
            <br />Get <span className="gradient-text">₹30k - ₹40k Salary</span> Without Coding!
          </h1>

          <p className="hero-subtitle">
            Outdated skills won’t get you hired anymore. Top IT companies are looking for developers who can adapt fast, use AI tools, and deliver real-world solutions.
          </p>

          <div className="hero-main-cta">
            <div className="next-session-box">
              <span className="next-session-label">🗓️ Next Free Workshop</span>
              <div className="next-session-time">{workshopTime}</div>
              <a href="#register" className="btn-primary hero-btn" id="hero-cta-btn">
                Reserve My Free Seat Now
              </a>
            </div>
            <div className="hero-trust-line">
              <p className="hero-subtitle">
                <strong>⭐ Build & Deploy your first AI project in 10 mins!</strong>
              </p>

            </div>
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
              <div className="hero-stat-value gradient-text">Support</div>
              <div className="hero-stat-label">Internship with Job</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value gradient-text">Tamil / English</div>
              <div className="hero-stat-label">Workshop Language</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
