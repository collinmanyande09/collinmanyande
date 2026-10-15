import { useEffect, useState } from 'react';

// Counts 00 to 100, holds briefly, then fades out.
// The counter is driven by elapsed wall-clock time on a timer rather than requestAnimationFrame,
// because rAF is paused in background tabs and would otherwise freeze the overlay over the page.
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
    // Kept short on purpose: this overlay hides the whole page, and every extra second
    // of it is a visitor who never sees the hero. The brand mark still reads, it just
    // no longer holds the page hostage for 6.5s.
    const DUR = 1000;
    const t0 = performance.now();
    let hold;
    const tick = () => {
      const p = Math.min(1, (performance.now() - t0) / DUR);
      setCount(Math.round(p * 100));
      if (p < 1) return;
      hold = setTimeout(() => setDone(true), 200);
    };
    tick();
    const id = setInterval(tick, 60);
    return () => {
      clearInterval(id);
      clearTimeout(hold);
    };
  }, []);

  useEffect(() => {
    if (!done) return undefined;
    const id = setTimeout(onDone, 450);
    return () => clearTimeout(id);
  }, [done, onDone]);

  return (
    <div className={`loader ${done ? 'done' : ''}`} aria-hidden="true">
      <div className="loader-logo">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
        <p className="loader-mark">COLLINMANYANDE.ONLINE</p>
      </div>
      <p className="loader-count">{String(count).padStart(2, '0')}</p>
    </div>
  );
}
