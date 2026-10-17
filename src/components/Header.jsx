import { useLocalClock } from '../hooks/useClock';

export default function Header({ light, onMenu, menuButtonRef }) {
  const { time, timeZone } = useLocalClock();
  return (
    <header className={`site-head ${light ? 'ink' : ''}`}>
      <a className="brand" href="#top">
        Collin Manyande <span aria-hidden="true">●</span> online
      </a>
      <span className="nav-clock" aria-label={`Local time: ${time} ${timeZone}`}>
        <span>(</span> {timeZone} <span>)</span> <span>{time}</span>
      </span>
      <button ref={menuButtonRef} className="menu-toggle" onClick={onMenu} aria-haspopup="true">
        Menu
      </button>
    </header>
  );
}
