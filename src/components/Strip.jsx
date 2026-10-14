import { stripMetrics, stripNote } from '../data';

export default function Strip() {
  return (
    <div className="strip">
      <div className="container grid-12 strip-grid">
        <div className="strip-names strip-left">
          <span className="label"><span className="dot" aria-hidden="true"></span>At a glance</span>
          <p className="strip-note">{stripNote}</p>
        </div>
        <div className="strip-metrics">
          {stripMetrics.map((m) => (
            <div key={m.label} className="metric">
              <b data-live={m.label}>{m.value}</b>
              <span>{m.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}