import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { yachts } from "../data/clients";

export default function Yachting() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="sub-page">
      <div className="yacht-hero">
        <img src="/images/yacht-frog.jpg" alt="Our Fleet" className="yacht-hero-bg"
          onError={e => { e.target.src = "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&q=80"; }}
        />
        <div className="yacht-hero-overlay" />
        <div className="yacht-hero-content">
          <div className="sh-badge">{en ? "Private Yachting" : "Ιδιωτικό Yachting"}</div>
          <h1 className="yacht-hero-title">{en ? <>Our <em>Fleet</em></> : <>Ο Στόλος <em>Μας</em></>}</h1>
          <p className="yacht-hero-sub">{en ? "Three exceptional vessels — one unforgettable Aegean experience." : "Τρία εξαιρετικά σκάφη — μία αξέχαστη εμπειρία στο Αιγαίο."}</p>
          <div className="yacht-hero-departure">
            <span>⚓</span> {en ? "Departing from Agios Kosmas Marina, Athens" : "Αναχώρηση από Μαρίνα Αγίου Κοσμά, Αθήνα"}
          </div>
        </div>
      </div>

      <div className="listings-section listings-section--dark">
        <div className="yacht-grid">
          {yachts.map(y => (
            <Link to={`/partners/yachting/${y.id}`} key={y.id} className="yacht-card">
              <div className="yacht-img">
                <img src={y.cover} alt={y.name} loading="lazy"
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80"; }}
                />
                <div className="yacht-type-badge">{y.type}</div>
              </div>
              <div className="yacht-info">
                <div className="yacht-label">{en ? "Private Charter" : "Ιδιωτική Ναύλωση"}</div>
                <h3 className="yacht-name">{y.name}</h3>
                <p className="yacht-model">{y.model}</p>
                <div className="yacht-specs">
                  <div><span>{en ? "Length" : "Μήκος"}</span><strong>{y.length}</strong></div>
                  <div><span>{en ? "Guests" : "Επισκέπτες"}</span><strong>{y.guests}</strong></div>
                </div>
                <div className="yacht-options">
                  {y.charter.map(c => <span key={c}>{c}</span>)}
                </div>
                <div className="yacht-cta">{en ? "View & Request" : "Προβολή & Αίτηση"} →</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="yacht-departure">
          <div className="yd-label">{en ? "Departing from" : "Αναχώρηση από"}</div>
          <div className="yd-name">Agios Kosmas Marina, Athens</div>
          <div className="yd-routes">Athenian Riviera · Argosaronic Gulf · Cyclades · Custom Itineraries</div>
        </div>
      </div>
    </div>
  );
}
