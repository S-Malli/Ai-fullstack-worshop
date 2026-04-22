import { useCountdown } from '../hooks/useCountdown';

export default function CountdownTimer({ className = '' }) {
  const { hours, minutes, seconds } = useCountdown();

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className={`countdown ${className}`} id="countdown-timer" aria-label="Countdown timer">
      <div className="countdown-item">
        <span className="countdown-value">{pad(hours)}</span>
        <span className="countdown-label">Hours</span>
      </div>
      <span className="countdown-separator">:</span>
      <div className="countdown-item">
        <span className="countdown-value">{pad(minutes)}</span>
        <span className="countdown-label">Minutes</span>
      </div>
      <span className="countdown-separator">:</span>
      <div className="countdown-item">
        <span className="countdown-value">{pad(seconds)}</span>
        <span className="countdown-label">Seconds</span>
      </div>
    </div>
  );
}
