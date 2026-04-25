import CountdownTimer from './CountdownTimer';
import { CONFIG } from '../constants/config';
import heroVideo from '../assets/AI_Workshop_Video_Generation.mp4';
import introVideo from '../assets/Aifullstackworshop_intro.mp4';

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
          10+ Years Industry Experience · Live Workshop · Tamil
        </div>

        <h1 className="hero-title">
          Build & Deploy Your <span className="gradient-text">First Project</span>
          <br />in 10 Minutes <span className="gradient-text">(No Coding Needed)</span>
        </h1>

        <div className="hero-cta-group">
          <a href="#register" className="btn-primary" id="hero-cta-btn">
            🚀 Book Your Seat Now
          </a>
          <a href="#pricing" className="btn-secondary">
            View Plans
          </a>
        </div>

        <div className="next-batch-info mb-4">
          Next Free Workshop: <strong>{workshopTime}</strong>
        </div>

        <div className="hero-intro-video-container">
          <video 
            className="hero-intro-video" 
            controls 
            playsInline
            muted
            loop
            autoPlay
            preload="auto"
          >
            <source src={introVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
            <div className="hero-stat-value gradient-text">Tamil</div>
            <div className="hero-stat-label">Language</div>
          </div>
        </div>
      </div>
    </section>
  );
}
