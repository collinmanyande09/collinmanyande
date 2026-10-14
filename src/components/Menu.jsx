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
        {links.map((l) => (
          <a
            key={l.key}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPick(l.key);
            }}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
