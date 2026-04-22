import { useState, useEffect } from 'react';

export function useCountdown(targetDate) {
  // Memoize the end time for the fallback to prevent it shifting every second
  const [endTime] = useState(() => {
    if (targetDate) return new Date(targetDate).getTime();
    // Fallback: 1 hour 9 mins from the first time this hook runs
    return Date.now() + 69 * 60 * 1000;
  });

  const calcRemaining = () => {
    const diff = Math.max(0, endTime - Date.now());
    
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      total: diff,
    };
  };

  const [remaining, setRemaining] = useState(calcRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemaining(calcRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return remaining;
}
