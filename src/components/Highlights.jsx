import { CONFIG } from '../constants/config';

export default function Highlights() {
  const items = [
    { emoji: '🎯', text: 'Target: ₹30k - ₹40k Salary', color: '#8338EC' },
    { emoji: '🛠️', text: '100% practical AI session', color: '#FF006E' },
    { emoji: '🚀', text: 'Job-ready portfolio building', color: '#22c55e' },
    { emoji: '💡', text: 'No prior coding needed', color: '#3A86FF' },
    { emoji: '🤝', text: 'Lifetime community support', color: '#8338EC' },
  ];

  return (
    <section className="highlights-section" id="highlights">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <span className="section-label">✨ Unique Value</span>
          <h2 className="section-title">
            Why This Is <span className="gradient-text">Different</span>
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
