import { useEffect } from 'react';

// Reveals `.reveal` elements as they enter the viewport by adding the `in` class.
// Re-runs when `dep` changes (e.g. a new panel view mounts fresh content).
// Skipped when reduced motion is on: CSS shows `.reveal` immediately.
export function useReveal(rootRef, dep) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const items = Array.from(root.querySelectorAll('.reveal'));
    if (!items.length) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => el.classList.add('in'));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [rootRef, dep]);
}