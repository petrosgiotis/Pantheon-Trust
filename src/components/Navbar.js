import { useState, useEffect } from "react";
import { useLang } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`nav${solid ? " solid" : ""}`}>
      <a href="#home" className="nav-logo">
        <img src="/images/logo.jpg" alt="Pantheon Trust Group" 
          onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }}
        />
        <span className="nav-logo-text" style={{display:'none'}}>
          Pantheon <span>Trust</span> Group
        </span>
      </a>

      <ul className="nav-links">
        <li><a href="#partners">{t.nav.partners}</a></li>
        <li><a href="#clients">{t.nav.clients}</a></li>
        <li><a href="#contact">{t.nav.contact}</a></li>
      </ul>

      <div className="nav-right">
        <div className="lang">
          <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
          <button className={lang === "gr" ? "on" : ""} onClick={() => setLang("gr")}>ΕΛ</button>
        </div>
      </div>
    </nav>
  );
}
