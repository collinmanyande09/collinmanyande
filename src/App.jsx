import { useCallback, useEffect, useState } from 'react';
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

  const finishLoading = useCallback(() => setLoading(false), []);

  // Escape closes the menu and the panel
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setView(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // The page never scrolls: the landing is one screen
  useEffect(() => {
    document.body.classList.toggle('locked', loading || menuOpen || Boolean(view));
  }, [loading, menuOpen, view]);

  const pick = (key) => {
    setMenuOpen(false);
    setView(key === 'home' ? null : key);
  };

  const heroText = view ? { label: views[view].label, title: views[view].title } : defaultHero;
  const panelDark = !light; // sections follow the switch

  return (
    <>
      {loading && <Loader onDone={finishLoading} />}
      <Header light={light} onMenu={() => setMenuOpen(true)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} onPick={pick} />
      <Hero
        light={light}
        label={heroText.label}
        title={heroText.title}
        onAbout={() => setView('about')}
        onToggleTheme={() => setLight((v) => !v)}
      />
      <Panel view={view} dark={panelDark} onClose={() => setView(null)} />
    </>
  );
}
