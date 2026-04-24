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
          6+ Years Industry Experience · Live Workshop · Tamil
        </div>

        <h1 className="hero-title">
          Build & Deploy Your <span className="gradient-text">First Project</span>
          <br />in 1 Hour <span className="gradient-text">(No Coding Needed)</span>
        </h1>

        <div className="next-batch-info mb-4">
          Next Batch: <strong>{workshopTime}</strong>
        </div>

        <p className="hero-subtitle">
          Perfect for students & freshers – create a real project, add it to your resume, 
          and get internship-ready using AI. <strong>Practical approach. Guided success.</strong>
        </p>

        <div className="hero-cta-group">
          <a href="#register" className="btn-primary" id="hero-cta-btn">
            🚀 Book Your Seat Now
          </a>
          <a href="#pricing" className="btn-secondary">
            View Plans
          </a>
        </div>

        <div className="urgency-line" style={{ marginTop: '1rem', color: '#FF006E', fontWeight: 'bold', textAlign: 'center' }}>
          ⏳ Limited seats – Only few spots left for this weekend
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
            <div className="hero-stat-value gradient-text">{CONFIG.workshop.duration}</div>
            <div className="hero-stat-label">Live Session</div>
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
