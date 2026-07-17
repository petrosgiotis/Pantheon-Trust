import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

export default function SiteNav() {
  const { lang, setLang } = useLang();
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isPartners = location.pathname.startsWith("/partners");
  const isHome     = location.pathname === "/";

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const partnersLinks = [
    { to: "/partners/brokerage",    label: lang === "en" ? "Brokerage" : "Μεσιτεία" },
    { to: "/partners/constructions", label: lang === "en" ? "Projects" : "Έργα" },
    { to: "/partners/management",   label: lang === "en" ? "Management" : "Διαχείριση" },
    { to: "/partners/completed",    label: lang === "en" ? "Completed" : "Ολοκληρωμένα" },
  ];

  const subLinks = isPartners || isHome ? partnersLinks : [];
  const alwaysSolid = !isHome;

  return (
    <nav className={`sitenav${solid || menuOpen || alwaysSolid ? " solid" : ""}${isHome ? " nav-home" : ""}`}>
      <div className="sitenav-inner">
        {/* Logo */}
        <Link to="/" className="sitenav-logo">
          <img src="/images/logo.jpg" alt="Pantheon Trust Group"
            onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }}
          />
          <span className="sitenav-logo-text" style={{ display: "none" }}>
            Pantheon <em>Trust</em> Group
          </span>
        </Link>

        {/* Sub-links (desktop) */}
        {subLinks.length > 0 && (
          <ul className="sitenav-links">
            {subLinks.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={location.pathname === l.to ? "active" : ""}>{l.label}</Link>
              </li>
            ))}
          </ul>
        )}

        {/* Right side */}
        <div className="sitenav-right">
          {!isHome && (
            <Link to="/" className="sitenav-portal-back">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7 2L3 6L7 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <span className="portal-back-label">{lang === "en" ? "Home" : "Αρχική"}</span>
            </Link>
          )}

          <div className="lang">
            <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
            <button className={lang === "gr" ? "on" : ""} onClick={() => setLang("gr")}>ΕΛ</button>
          </div>

          <button className={`burger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="mobile-drawer">
          {subLinks.length > 0 ? (
            subLinks.map(l => (
              <Link key={l.to} to={l.to} className={`mobile-link${location.pathname === l.to ? " active" : ""}`}>{l.label}</Link>
            ))
          ) : (
            <Link to="/partners" className="mobile-link">Partners</Link>
          )}
          <Link to="/contact" className="mobile-link">Contact</Link>
        </div>
      )}
    </nav>
  );
}
