import { useCallback, useEffect, useRef, useState } from 'react';
import Loader from './components/Loader';
import Header from './components/Header';
import Menu from './components/Menu';
import Hero from './components/Hero';
import Panel from './components/Panel';
import { defaultHero, views } from './data';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [light, setLight] = useState(true); // white is the default mode
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState(null);   // null = hero only
  const menuButtonRef = useRef(null);
  const aboutButtonRef = useRef(null);
  const workButtonRef = useRef(null);

  const finishLoading = useCallback(() => setLoading(false), []);
  const closeMenu = useCallback(() => {
    menuButtonRef.current?.focus();
    setMenuOpen(false);
  }, []);
  const closePanel = useCallback(() => {
    if (view) {
      const trigger = view === 'about' ? aboutButtonRef.current : workButtonRef.current;
      trigger?.focus();
    }
    setView(null);
  }, [view]);

  // Escape closes the menu and the panel
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (menuOpen) closeMenu();
        if (view) closePanel();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeMenu, closePanel, menuOpen, view]);

  // The page never scrolls: the landing is one screen
  useEffect(() => {
    document.body.classList.toggle('locked', loading || menuOpen || Boolean(view));
  }, [loading, menuOpen, view]);

  const pick = (key) => {
    closeMenu();
    setView(key === 'home' ? null : key);
  };

  const heroText = view ? { label: views[view].label, title: views[view].title } : defaultHero;
  const panelDark = !light; // sections follow the switch

  return (
    <>
      {loading && <Loader onDone={finishLoading} />}
      <Header light={light} onMenu={() => setMenuOpen(true)} menuButtonRef={menuButtonRef} />
      <Menu open={menuOpen} onClose={closeMenu} onPick={pick} />
      <Hero
        light={light}
        label={heroText.label}
        title={heroText.title}
        onAbout={() => setView('about')}
        onWork={() => setView('work')}
        aboutButtonRef={aboutButtonRef}
        workButtonRef={workButtonRef}
        onToggleTheme={() => setLight((v) => !v)}
      />
      {/* Dims the hero behind the panel, so the panel reads as a separate surface */}
      <div
        className={`scrim ${view ? 'open' : ''}`}
        onClick={closePanel}
        aria-hidden="true"
      />
      <Panel view={view} dark={panelDark} onClose={closePanel} onNavigate={setView} />
    </>
  );
}
