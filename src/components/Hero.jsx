import CountdownTimer from './CountdownTimer';
import { CONFIG } from '../constants/config';
import heroVideo from '../assets/AI_Workshop_Video_Generation.mp4';

export default function Hero() {
  const workshopTime = CONFIG.workshop.dateTime;

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg">
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
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
          <br />in {CONFIG.workshop.duration} Using AI 
        </h1>

        <div className="next-batch-info mb-4">
          Next Batch: <strong>{workshopTime}</strong>
        </div>

        <p className="hero-subtitle">
          No degree? No tech background? <strong>No Problem.</strong> AI is the ultimate equalizer. 
          Learn to build and deploy real-world apps that get you noticed by recruiters 
          and jumpstart your career in tech.
        </p>

        <div className="hero-cta-group">
          <a href="#register" className="btn-primary" id="hero-cta-btn">
            🚀 Book Now — {CONFIG.plans[0].offerPrice === 0 ? 'FREE' : `₹${CONFIG.plans[0].offerPrice}`}
          </a>
          <a href="#pricing" className="btn-secondary">
            View Plans
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
            <div className="hero-stat-value gradient-text">{CONFIG.plans[0].features[0].split(' ')[0]} Hr</div>
            <div className="hero-stat-label">Duration</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value gradient-text">Tamil</div>
            <div className="hero-stat-label">Language</div>
          </div>
        </div>
      </div>
    </section>
  );
}
