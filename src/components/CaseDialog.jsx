export default function CaseDialog({ item, onClose }) {
  return (
    <div className="case-overlay" onClick={onClose}>
      <div className="case-dialog" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="cs-close" onClick={onClose} aria-label="Close case study">×</button>
        <p className="cs-kicker">Case study</p>
        <h3 className="cs-title">{item.title}</h3>
        <div className="pills">
          {item.cats.map((c) => (
            <span key={c} className="pill-s">{c}</span>
          ))}
        </div>
        <Block label="Overview" text={item.overview} />
        <Block label="The problem" text={item.problem} />
        <Block label="My role" text={item.role} />
        <Block label="Approach" text={item.approach} />
        <Block label="Outcome" text={item.outcome} />
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
