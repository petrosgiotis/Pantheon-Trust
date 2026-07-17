import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;
  return (
    <section className="hero" id="home">
      <div className="hero-img">
        <img src={process.env.PUBLIC_URL + "/images/hero.jpg"} alt="Acropolis view Athens" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">{h.badge}</div>
        <h1 className="hero-h1">
          {h.title1}<br /><em>{h.title2}</em>
        </h1>
        <p className="hero-desc">{h.desc}</p>
        <p className="hero-sub">{h.sub}</p>
        <div className="hero-btns">
          <a href="#partners" className="btn-g">{h.cta1}</a>
          <a href="#clients" className="btn-o">{h.cta2}</a>
        </div>
      </div>
      <div className="scroll-ind">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
