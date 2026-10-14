import { useState } from 'react';
import { experience } from '../data';

// One role at a time, with arrows and dots
export default function Experience() {
  const [i, setI] = useState(0);
  const n = experience.length;
  const go = (k) => setI((k + n) % n);
  const role = experience[i];

  return (
    <div className="exp-wrap">
      <div className="exp-head">
        <h3>Experience</h3>
        <div className="exp-controls">
          <button className="exp-btn" onClick={() => go(i - 1)} aria-label="Previous role">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          </button>
          <button className="exp-btn" onClick={() => go(i + 1)} aria-label="Next role">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
      <div className="exp-meta">
        <span className="exp-count">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
        <span className="label">{role.dates}</span>
      </div>
      <h4 className="exp-title">{role.title}</h4>
      <p className="exp-company">{role.company}</p>
      <ul className="exp-points">
        {role.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <div className="exp-dots">
        {experience.map((r, k) => (
          <button
            key={r.company}
            className={`exp-dot ${k === i ? 'is-active' : ''}`}
            onClick={() => go(k)}
            aria-label={`Show role ${k + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
