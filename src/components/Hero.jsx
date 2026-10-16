export default function Hero({ light, label, title, onAbout, onWork, aboutButtonRef, workButtonRef, onToggleTheme }) {
  return (
    <section className={`hero ${light ? 'light' : ''}`} id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-label">{label}</p>
          <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="hero-cta">
            <button ref={workButtonRef} className="cta cta-primary" onClick={onWork}>
              <span>View selected work</span>
              <span className="round-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
            </button>
            <button ref={aboutButtonRef} className="cta cta-ghost" onClick={onAbout}>About me</button>
          </div>
        </div>
        <div className="hero-ring" aria-hidden="true">
          <svg viewBox="0 0 600 600">
            <defs>
              <path id="ring-outer" d="M300,64 a236,236 0 1,1 0,472 a236,236 0 1,1 0,-472" />
              <path id="ring-inner" d="M300,130 a170,170 0 1,1 0,340 a170,170 0 1,1 0,-340" />
            </defs>
            <g fill="none" stroke="currentColor" strokeOpacity=".18">
              <circle cx="300" cy="300" r="250" />
              <circle cx="300" cy="300" r="190" />
              <circle cx="300" cy="300" r="130" />
            </g>
            <g className="ring-spin">
              <text fontSize="16" letterSpacing="5" fill="currentColor">
                <textPath href="#ring-outer" textLength="1470" lengthAdjust="spacing">
                  STARTUPS · SELECTED WORK · THINKING · EXPERIENCE · CONTACT ·
                </textPath>
              </text>
            </g>
            <g className="ring-spin-rev">
              <text fontSize="13" letterSpacing="4" fill="currentColor">
                <textPath href="#ring-inner" textLength="1060" lengthAdjust="spacing">
                  PRODUCT DESIGN · BUSINESS · STRATEGY · HARARE
                </textPath>
              </text>
            </g>
            <circle cx="300" cy="300" r="72" fill="#F3A15A" />
            <text x="300" y="314" textAnchor="middle" fontSize="44" fontWeight="700" fill="#120A07">
              CM
            </text>
          </svg>
        </div>
      </div>

      <div className="hero-foot">
        <div className="theme-switch">
          <span className="theme-label">{light ? 'Light' : 'Dark'}</span>
          <button
            className="theme-toggle"
            role="switch"
            aria-checked={light}
            aria-label="Light background"
            onClick={onToggleTheme}
          >
            <span />
          </button>
        </div>
      </div>
    </section>
  );
}
