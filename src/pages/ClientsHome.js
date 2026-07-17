import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

const experiences = [
  {
    to: "/clients/villas",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=90",
    tag: "Private Villas",
    tagGr: "Ιδιωτικές Βίλες",
    title: "Book a Villa",
    titleGr: "Κλείστε Βίλα",
    desc: "Secluded Cycladic retreats with infinity pools and staff. The ultimate Greek summer.",
    descGr: "Απόμερες κυκλαδίτικες κατοικίες με πισίνες και προσωπικό. Το απόλυτο ελληνικό καλοκαίρι.",
  },
  {
    to: "/clients/athens",
    img: process.env.PUBLIC_URL + "/images/airbnb1_living.jpg",
    tag: "Athens Stays",
    tagGr: "Αθήνα",
    title: "Book Athens",
    titleGr: "Αθήνα",
    desc: "Designer apartments in the heart of Athens — Acropolis views, Plaka streets, rooftop terraces.",
    descGr: "Designer διαμερίσματα στην καρδιά της Αθήνας — θέα Ακρόπολη, Πλάκα, ταράτσες.",
  },
  {
    to: "/clients/islands",
    img: process.env.PUBLIC_URL + "/images/airbnb2_balcony.jpg",
    tag: "Island Getaways",
    tagGr: "Ελληνικά Νησιά",
    title: "Book the Islands",
    titleGr: "Νησιά",
    desc: "Handpicked stays across Mykonos, Santorini, Paros and the Aegean's most beautiful islands.",
    descGr: "Επιλεγμένες διαμονές σε Μύκονο, Σαντορίνη, Πάρο και τα ομορφότερα νησιά του Αιγαίου.",
  },
  {
    to: "/clients/yachting",
    img: process.env.PUBLIC_URL + "/images/yacht-uptime.jpg",
    tag: "Private Yachting",
    tagGr: "Ιδιωτικό Yachting",
    title: "Book Yachting",
    titleGr: "Yachting",
    desc: "Three exclusive vessels departing Athens. Day cruises, island hopping, or extended charters.",
    descGr: "Τρία αποκλειστικά σκάφη από την Αθήνα. Ημερήσιες κρουαζιέρες ή πολυήμερα ταξίδια.",
  },
];

export default function ClientsHome() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="portal-page">
      {/* Hero */}
      <div className="portal-hero portal-hero--clients">
        <img src={process.env.PUBLIC_URL + "/images/hero.jpg"} alt="" className="portal-hero-bg" />
        <div className="portal-hero-overlay" />
        <div className="portal-hero-content">
          <div className="ph-badge">{en ? "Curated Experiences" : "Επιμελημένες Εμπειρίες"}</div>
          <h1 className="ph-title">{en ? <>Luxury<br /><em>Experiences</em></> : <>Πολυτελείς<br /><em>Εμπειρίες</em></>}</h1>
          <p className="ph-sub">{en ? "Handpicked villas, stays and sea adventures across the most beautiful corners of Greece." : "Επιλεγμένες βίλες, διαμονές και θαλάσσιες περιπέτειες στα ομορφότερα σημεία της Ελλάδας."}</p>
        </div>
      </div>

      {/* Experiences grid */}
      <div className="clients-exp-grid">
        {experiences.map(e => (
          <Link to={e.to} key={e.to} className="ce-card">
            <div className="ce-img">
              <img src={e.img} alt={e.title} loading="lazy"
                onError={e2 => { e2.target.src = "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80"; }}
              />
              <div className="ce-overlay" />
            </div>
            <div className="ce-body">
              <div className="ce-tag">{en ? e.tag : e.tagGr}</div>
              <h2 className="ce-title">{en ? e.title : e.titleGr}</h2>
              <p className="ce-desc">{en ? e.desc : e.descGr}</p>
              <div className="ce-cta">{en ? "Explore" : "Εξερεύνηση"} <span>→</span></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
