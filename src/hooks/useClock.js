import { useEffect, useState } from 'react';

const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: '2-digit',
  minute: '2-digit',
});
const zoneFormatter = new Intl.DateTimeFormat(undefined, {
  timeZoneName: 'short',
});

function getLocalClock() {
  const now = new Date();
  const timeZone = zoneFormatter.formatToParts(now).find((part) => part.type === 'timeZoneName')?.value || 'Local';
  return { time: timeFormatter.format(now), timeZone };
}

export function useLocalClock() {
  const [clock, setClock] = useState(getLocalClock);

  useEffect(() => {
    const id = setInterval(() => setClock(getLocalClock()), 15000);
    return () => clearInterval(id);
  }, []);

  return clock;
}
