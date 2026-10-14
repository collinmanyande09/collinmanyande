import { useEffect } from 'react';

// Parallax inside the section panel: headings and content drift, cards scale and their images drift.
// Turned off when the visitor asks for reduced motion.
export function useParallax(panelRef, active) {
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || !active) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const state = new Map();
    let raf;

    const tick = () => {
      const pr = panel.getBoundingClientRect();

      panel.querySelectorAll('[data-parallax]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (!r.height) return;
        const centre = (r.top + r.height / 2 - pr.top) / pr.height - 0.5;
        const speed = Number(el.dataset.parallax) || 30;
        const cur = state.get(el) || 0;
        const next = cur + (-centre * speed - cur) * 0.12;
        state.set(el, next);
        el.style.transform = `translate3d(0, ${next.toFixed(2)}px, 0)`;
      });

      panel.querySelectorAll('[data-card]').forEach((card) => {
        const r = card.getBoundingClientRect();
        const off = (r.top + r.height / 2 - pr.top) / pr.height - 0.5;
        card.style.transform = `scale(${(1 - Math.min(Math.abs(off), 0.5) * 0.06).toFixed(3)})`;
        const img = card.querySelector('[data-drift]');
        if (img) img.style.transform = `translate3d(0, ${(off * -40).toFixed(1)}px, 0) scale(1.12)`;
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [panelRef, active]);
}
