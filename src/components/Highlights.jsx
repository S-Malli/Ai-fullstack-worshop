import { CONFIG } from '../constants/config';

export default function Highlights() {
  const items = [
    { emoji: '🎯', text: 'No coding background required', color: '#8338EC' },
    { emoji: '🛠️', text: '100% practical session', color: '#FF006E' },
    { emoji: '🚀', text: 'Build project LIVE with guidance', color: '#22c55e' },
    { emoji: '💡', text: 'Learn by doing, not watching', color: '#3A86FF' },
    { emoji: '🤝', text: 'Personal support during session', color: '#8338EC' },
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
