import { useState, useEffect } from 'react';

const STORAGE_KEY = 'ai-digitalgen-countdown-v2';
const COUNTDOWN_MINUTES = 69; // 1 hour 9 minutes

export function useCountdown() {
  const getEndTime = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const endTime = parseInt(stored, 10);
      if (endTime > Date.now()) return endTime;
    }
    const endTime = Date.now() + COUNTDOWN_MINUTES * 60 * 1000;
    localStorage.setItem(STORAGE_KEY, endTime.toString());
    return endTime;
  };

  const calcRemaining = (end) => {
    const diff = Math.max(0, end - Date.now());
    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      total: diff,
    };
  };

  const [endTime] = useState(getEndTime);
  const [remaining, setRemaining] = useState(() => calcRemaining(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(calcRemaining(endTime));
    }, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  return remaining;
}
