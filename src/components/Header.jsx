import { useHarareTime } from '../hooks/useClock';

export default function Header({ light, onMenu, menuButtonRef }) {
  const time = useHarareTime();
  return (
    <header className={`site-head ${light ? 'ink' : ''}`}>
      <a className="brand" href="#top">
        Collin Manyande <span aria-hidden="true">●</span> online
      </a>
      <span className="nav-clock" aria-label="Current time in Harare">
        <span>(</span> HRE <span>)</span> <span>{time}</span>
      </span>
      <button ref={menuButtonRef} className="menu-toggle" onClick={onMenu} aria-haspopup="true">
        Menu
      </button>
    </header>
  );
}
