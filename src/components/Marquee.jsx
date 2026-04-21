import { CONFIG } from '../constants/config';

export default function Marquee() {
  return (
    <div className="marquee-wrapper" id="marquee">
      <div className="marquee-track">
        <div className="marquee-content">
          <span className="marquee-item">🔥 Only <strong>11 Seats Left</strong> — Register Now!</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">🎯 <strong>Live Session</strong> in <strong>{CONFIG.workshopLanguage}</strong></span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">💡 <strong>Live Demo</strong> + <strong>Doubt Clearing</strong></span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">🚀 <strong>Easy to Understand</strong> — No Coding Background Needed</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">📅 <strong>Weekend Sessions</strong> — Comfortable Timing</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">💰 Not Satisfied? <strong>100% Refund ₹{CONFIG.workshopPrice}</strong></span>
          <span className="marquee-dot">✦</span>

          <span className="marquee-item">🔥 Only <strong>11 Seats Left</strong> — Register Now!</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">🎯 <strong>Live Session</strong> in <strong>{CONFIG.workshopLanguage}</strong></span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">💡 <strong>Live Demo</strong> + <strong>Doubt Clearing</strong></span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">🚀 <strong>Easy to Understand</strong> — No Coding Background Needed</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">📅 <strong>Weekend Sessions</strong> — Comfortable Timing</span>
          <span className="marquee-dot">✦</span>
          <span className="marquee-item">💰 Not Satisfied? <strong>100% Refund ₹{CONFIG.workshopPrice}</strong></span>
          <span className="marquee-dot">✦</span>
        </div>
      </div>
    </div>
  );
}
