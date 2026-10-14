import { useRef, useState } from 'react';
import { startups, cases, principles, views } from '../data';
import { useParallax } from '../hooks/useParallax';
import Experience from './Experience';
import CaseDialog from './CaseDialog';

// The section panel. Its content follows the view (About, Startups, Work, Contact)
// and its colour follows the hero switch: light when on, dark when off.
export default function Panel({ view, dark, onClose }) {
  const ref = useRef(null);
  const [openCase, setOpenCase] = useState(null);
  useParallax(ref, Boolean(view));

  return (
    <aside className={`panel ${dark ? 'dark' : ''} ${view ? 'open' : ''}`} ref={ref} aria-hidden={!view}>
      <button className="panel-close" onClick={onClose}>Close</button>
      {view === 'about' && <About />}
      {view === 'startups' && <Startups />}
      {view === 'work' && <Work onOpen={setOpenCase} />}
      {view === 'contact' && <Contact />}
      {openCase && <CaseDialog item={openCase} onClose={() => setOpenCase(null)} />}
    </aside>
  );
}

function About() {
  return (
    <section className="section">
      <p className="eyebrow">About me</p>
      <h2 data-parallax="64">A product person who builds the business too.</h2>
      <p className="bio" data-parallax="30">
        I’m an entrepreneur, designer and founder. I build companies and the products inside them, and I design for the
        people who use what we make. Most of my work sits between the business and the screen, where strategy has to
        become something a rider, a customer, or a team can actually use.
      </p>
      <h3 className="how">How I work</h3>
      <div className="principles" data-parallax="30">
        {principles.map((p) => (
          <div key={p.tag} className="principle">
            <span className="pill">{p.tag}</span>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Startups() {
  return (
    <section className="section">
      <p className="eyebrow">Startups</p>
      <h2 data-parallax="64">{views.startups.title}</h2>
      <div className="company-grid">
        {startups.map((c) => (
          <article key={c.key} className="company" data-card>
            <span className="tag">{c.tag}</span>
            <h3>{c.title}</h3>
            <p className="role">{c.role}</p>
            <p className="desc">{c.desc}</p>
            <p className="problem"><strong>The problem</strong>{c.problem}</p>
            <a className="link" href={c.link.href} target="_blank" rel="noopener">{c.link.label}</a>
            <div className="building"><b>Currently building:</b> {c.building}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work({ onOpen }) {
  return (
    <section className="section">
      <p className="eyebrow">Selected work</p>
      <h2 data-parallax="64">{views.work.title}</h2>
      <div className="work-grid">
        {cases.map((c, i) => (
          <button key={c.key} className="case" data-card onClick={() => onOpen(c)}>
            <div className="case-visual">
              <img src={c.image} alt={`${c.title} project`} data-drift loading="lazy" />
            </div>
            <span className="case-num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{c.title}</h3>
            <div className="pills">
              {c.cats.map((k) => (
                <span key={k} className="pill-s">{k}</span>
              ))}
            </div>
            <p>{c.outcome}</p>
          </button>
        ))}
      </div>
      <div data-parallax="30">
        <Experience />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section">
      <p className="eyebrow">Contact</p>
      <h2 data-parallax="64">{views.contact.title}</h2>
      <a className="contact-email" href="mailto:collinmanyande09@gmail.com" data-parallax="30">
        collinmanyande09@gmail.com
      </a>
      <p className="cofounder-note" data-parallax="30">
        Looking for a co-founder, founding team member or designer?{' '}
        <a href="mailto:collinmanyande09@gmail.com">Reach out.</a>
      </p>
      <div className="social" data-parallax="30">
        <a href="https://linkedin.com/in/collinmanyande" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://wa.me/263775978079" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </section>
  );
}
