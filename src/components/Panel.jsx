import { useEffect, useRef, useState } from 'react';
import { startups, cases, principles, views, orderViews } from '../data';
import { useParallax } from '../hooks/useParallax';
import { useReveal } from '../hooks/useReveal';
import Experience from './Experience';
import CaseDialog from './CaseDialog';

// The section panel. Its content follows the view (About, Startups, Work, Contact)
// and its colour follows the hero switch: light when on, dark when off.
export default function Panel({ view, dark, onClose, onNavigate }) {
  const ref = useRef(null);
  const [openCase, setOpenCase] = useState(null);
  useParallax(ref, Boolean(view));
  useReveal(ref, view);

  // Switching sections should always start the new one at the top.
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = 0;
  }, [view]);

  return (
    <aside className={`panel ${dark ? 'dark' : ''} ${view ? 'open' : ''}`} ref={ref} aria-hidden={!view}>
      <button className="panel-close" onClick={onClose}>Close</button>
      {view === 'about' && <About />}
      {view === 'startups' && <Startups onOpen={setOpenCase} />}
      {view === 'work' && <Work onOpen={setOpenCase} />}
      {view === 'contact' && <Contact />}
      <PanelNav view={view} onNavigate={onNavigate} />
      {openCase && <CaseDialog item={openCase} onClose={() => setOpenCase(null)} />}
    </aside>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="section-head reveal">
        <span className="section-num">01</span>
        <span className="label"><span className="dot" aria-hidden="true"></span>About</span>
      </div>
      <div className="grid-12 about-grid">
        <div className="about-body">
          <h2 className="reveal" data-parallax="64">A product person who <span className="hl">builds the business too.</span></h2>
          <p className="bio reveal" data-parallax="30">
            I’m a product design engineer and UI/UX developer. I build companies and the products inside them, and I design for the
            people who use what we make. Most of my work sits between the business and the screen, where strategy has to
            become something a rider, a customer, or a team can actually use.
          </p>
          <div className="how reveal">
            <h3>How I work</h3>
            <div className="principles" data-parallax="30">
              {principles.map((p) => (
                <div key={p.tag} className="principle">
                  <span className="pill">{p.tag}</span>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Startups({ onOpen }) {
  return (
    <section id="startups" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">02</span>
          <span className="label"><span className="dot" aria-hidden="true"></span>Startups</span>
        </div>
        <div className="company-grid">
          {startups.map((c) => (
            <article key={c.key} className="company reveal" data-card>
              <div className="company-visual">
                <img src={c.image} alt={`${c.title} product preview`} loading="lazy" />
              </div>
              <div className="company-heading">
                <span className="tag">{c.market}</span>
                <span className="company-stage">{c.stage}</span>
              </div>
              <h3>{c.title}</h3>
              <p className="role">{c.role}</p>
              <p className="desc">{c.desc}</p>
              <p className="problem"><strong>The problem</strong>{c.problem}</p>
              <div className="building"><b>Current focus:</b> {c.focus}</div>
              <div className="company-evidence"><b>Progress:</b> {c.evidence}</div>
              <div className="company-actions">
                <button className="company-story-link" onClick={() => onOpen(cases.find((item) => item.key === c.key))}>
                  Explore case study <span aria-hidden="true">↗</span>
                </button>
                <a className="link" href={c.link.href} target="_blank" rel="noopener">Visit project</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work({ onOpen }) {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-num">03</span>
          <span className="label"><span className="dot" aria-hidden="true"></span>Selected work</span>
        </div>
        <div className="work-grid">
          {cases.map((c, i) => (
            <button key={c.key} className="case reveal" data-card onClick={() => onOpen(c)}>
              <div className="case-visual">
                <img src={c.image} alt={`${c.title} project`} data-drift loading="lazy" />
              </div>
              <span className="case-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="case-market">{c.market}</span>
              <h3>{c.title}</h3>
              <p className="case-headline">{c.headline}</p>
              <div className="pills">
                {c.cats.map((k) => (
                  <span key={k} className="pill-s">{k}</span>
                ))}
              </div>
              <p className="case-outcome"><strong>Outcome</strong>{c.outcome}</p>
              <p className="case-proof"><strong>Proof so far</strong>{c.evidence}</p>
            </button>
          ))}
        </div>
        <div data-parallax="30">
          <Experience />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <span className="label"><span className="dot" aria-hidden="true"></span>Contact</span>
        <h2 className="reveal" data-parallax="64">Let’s build something useful.</h2>
        <p className="cofounder-note reveal" data-parallax="30">
          Looking for a product designer or UI/UX developer?{' '}
          <a href="mailto:collinmanyande09@gmail.com">Reach out.</a>
        </p>
        <a className="contact-email reveal" href="mailto:collinmanyande09@gmail.com" data-parallax="30">
          collinmanyande09@gmail.com
        </a>
        <div className="social reveal" data-parallax="30">
          <a href="https://linkedin.com/in/collinmanyande" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://wa.me/263775978079" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

// Lets a reader move straight to the neighbouring section instead of having to
// close the panel and reopen the menu just to see one more thing.
function PanelNav({ view, onNavigate }) {
  if (!view) return null;
  const i = orderViews.indexOf(view);
  const prev = orderViews[(i - 1 + orderViews.length) % orderViews.length];
  const next = orderViews[(i + 1) % orderViews.length];

  return (
    <nav className="panel-nav" aria-label="Other sections">
      <button className="panel-nav-btn" onClick={() => onNavigate(prev)}>
        <span className="panel-nav-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
        </span>
        <span className="panel-nav-text">
          <span className="panel-nav-dir">Previous</span>
          <span className="panel-nav-label">{views[prev].label}</span>
        </span>
      </button>
      <button className="panel-nav-btn next" onClick={() => onNavigate(next)}>
        <span className="panel-nav-text">
          <span className="panel-nav-dir">Next</span>
          <span className="panel-nav-label">{views[next].label}</span>
        </span>
        <span className="panel-nav-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </span>
      </button>
    </nav>
  );
}