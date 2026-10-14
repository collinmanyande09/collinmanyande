import { useEffect, useState } from 'react';

// Harare time, refreshed every 15 seconds
export function useHarareTime() {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'Africa/Harare',
  });
  const [time, setTime] = useState(() => fmt.format(new Date()));
  useEffect(() => {
    const id = setInterval(() => setTime(fmt.format(new Date())), 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}
