import { CONFIG } from '../constants/config';

export default function Highlights() {
  const items = [
    { emoji: '🗣️', text: `${CONFIG.workshopLanguage} Language`, color: '#8338EC' },
    { emoji: '💻', text: 'Live Demo Session', color: '#FF006E' },
    { emoji: '❓', text: 'Doubt Clearing', color: '#22c55e' },
    { emoji: '📅', text: 'Weekend Only', color: '#3A86FF' },
    { emoji: '💰', text: `₹${CONFIG.workshopPrice} Refund Guarantee`, color: '#8338EC' },
    { emoji: '⏰', text: 'Team Reaches in 30 Min', color: '#FF006E' },
  ];

  return (
    <section className="highlights-section" id="highlights">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">✨ Why Choose Us</span>
          <h2 className="section-title">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
        </div>
        <div className="highlights-grid reveal">
          {items.map((item, i) => (
            <div className="highlight-chip" key={i}>
              <span className="highlight-emoji">{item.emoji}</span>
              <span className="highlight-text" style={{ color: item.color }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
