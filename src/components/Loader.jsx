import { useEffect, useState } from 'react';

// Counts 00 to 100, holds briefly, then fades out
export default function Loader({ onDone }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setCount(100);
      setDone(true);
      return undefined;
    }
    const DUR = 5000;
    const t0 = performance.now();
    let raf;
    const step = (now) => {
      const p = Math.min(1, (now - t0) / DUR);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(step);
      else setTimeout(() => setDone(true), 600);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!done) return undefined;
    const id = setTimeout(onDone, 900);
    return () => clearTimeout(id);
  }, [done, onDone]);

  return (
    <div className={`loader ${done ? 'done' : ''}`} aria-hidden="true">
      <div className="loader-logo">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
        <p className="loader-mark">COLLINMANYANDE.COM</p>
      </div>
      <p className="loader-count">{String(count).padStart(2, '0')}</p>
    </div>
  );
}
