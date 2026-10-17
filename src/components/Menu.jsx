const links = [
  { key: 'home', label: 'Home' },
  { key: 'about', label: 'About Me' },
  { key: 'startups', label: 'Startups' },
  { key: 'work', label: 'Work' },
  { key: 'contact', label: 'Contact' },
];

export default function Menu({ open, onClose, onPick }) {
  return (
    <div className={`menu ${open ? 'open' : ''}`} aria-hidden={!open}>
      <button className="menu-close" onClick={onClose}>Close</button>
      <nav aria-label="Main">
        {links.map((l, index) => (
          <a
            key={l.key}
            href="#"
            style={{ '--menu-index': index }}
            onClick={(e) => {
              e.preventDefault();
              onPick(l.key);
            }}
          >
            {l.label}
          </a>
        ))}
      </nav>
      <footer className="menu-footer">
        <span className="menu-footer-copy">© {new Date().getFullYear()} Collin Manyande</span>
        <nav className="menu-footer-links" aria-label="Connect">
          <a href="mailto:collinmanyande09@gmail.com">Email</a>
          <a href="https://linkedin.com/in/collinmanyande" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://wa.me/263775978079" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
      </footer>
    </div>
  );
}
