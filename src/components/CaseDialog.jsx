export default function CaseDialog({ item, onClose }) {
  return (
    <div className="case-overlay" onClick={onClose}>
      <div className="case-dialog" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="cs-close" onClick={onClose} aria-label="Close case study">×</button>
        <div className="cs-lead">
          <div className="cs-visual">
            <img src={item.image} alt={`${item.title} product`} />
          </div>
          <div className="cs-heading">
            <p className="cs-kicker">{item.market}</p>
            <h3 className="cs-title">{item.title}</h3>
            <p className="cs-headline">{item.headline}</p>
            <div className="pills">
              {item.cats.map((c) => (
                <span key={c} className="pill-s">{c}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="cs-meta">
          <div><span>My role</span><p>{item.role}</p></div>
          <div><span>Stage</span><p>{item.stage}</p></div>
        </div>
        <p className="cs-overview">{item.overview}</p>
        <div className="cs-story-grid">
          <Block label="The challenge" text={item.problem} />
          <Block label="Approach" text={item.approach} />
        </div>
        <div className="cs-outcome">
          <h4 className="cs-label">Outcome</h4>
          <p>{item.outcome}</p>
          <p className="cs-evidence">{item.evidence}</p>
        </div>
        {item.link ? (
          <a className="btn btn-dark" href={item.link.href} target="_blank" rel="noopener">
            {item.link.label}
          </a>
        ) : (
          <button className="btn btn-soon" type="button" disabled>Coming Soon</button>
        )}
      </div>
    </div>
  );
}

function Block({ label, text }) {
  return (
    <>
      <h4 className="cs-label">{label}</h4>
      <div className="cs-body"><p>{text}</p></div>
    </>
  );
}
