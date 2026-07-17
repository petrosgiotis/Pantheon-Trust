import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="footer-logo">Pantheon <span>Trust</span> Group</div>
      <div className="footer-copy">© {new Date().getFullYear()} Pantheon Trust Group. {t.footer.rights}</div>
      <div className="footer-links">
        <a href="#partners">{t.nav.partners}</a>
        <a href="#clients">{t.nav.clients}</a>
        <a href="#contact">{t.nav.contact}</a>
      </div>
    </footer>
  );
}
