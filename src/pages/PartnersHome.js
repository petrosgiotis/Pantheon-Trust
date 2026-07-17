import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

const services = [
  {
    to: "/partners/brokerage",
    img: "/images/brokerage1.jpg",
    tag: "Brokerage",
    tagGr: "Μεσιτεία",
    title: "Property Listings",
    titleGr: "Ακίνητα",
    desc: "Exclusive residential, commercial and land transactions across Athens and the Greek islands.",
    descGr: "Αποκλειστικές αγοραπωλησίες κατοικιών, επαγγελματικών χώρων και γης.",
  },
  {
    to: "/partners/constructions",
    img: "/images/construction1.jpg",
    tag: "Constructions",
    tagGr: "Κατασκευές",
    title: "Our Projects",
    titleGr: "Τα Έργα Μας",
    desc: "Award-winning villas, apartments and buildings crafted with Cycladic stone and modern precision.",
    descGr: "Βραβευμένες βίλες, διαμερίσματα και κτίρια με κυκλαδίτικη πέτρα και σύγχρονη ακρίβεια.",
  },
  {
    to: "/partners/management",
    img: "/images/airbnb1_living.jpg",
    tag: "Property Management",
    tagGr: "Διαχείριση Ακινήτων",
    title: "Asset Management",
    titleGr: "Διαχείριση",
    desc: "Full-service management for Airbnb, short-term rentals, and building administration.",
    descGr: "Πλήρης διαχείριση Airbnb, βραχυχρόνιων μισθώσεων και διαχείρισης κτιρίων.",
  },
  {
    to: "/partners/yachting",
    img: "/images/yacht-frog.jpg",
    tag: "Private Yachting",
    tagGr: "Ιδιωτικό Yachting",
    title: "Yacht Charter",
    titleGr: "Ναύλωση Σκαφών",
    desc: "Three exclusive vessels departing Athens. Day cruises, island hopping, and extended Aegean charters.",
    descGr: "Τρία αποκλειστικά σκάφη από την Αθήνα. Ημερήσιες κρουαζιέρες και πολυήμερα ταξίδια.",
  },
];

export default function PartnersHome() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="portal-page">
      {/* Hero */}
      <div className="portal-hero">
        <img src="/images/brokerage2.jpg" alt="" className="portal-hero-bg" />
        <div className="portal-hero-overlay" />
        <div className="portal-hero-content">
          <div className="ph-badge">{en ? "For Professionals" : "Για Επαγγελματίες"}</div>
          <h1 className="ph-title">{en ? <>Partner<br /><em>Services</em></> : <>Υπηρεσίες<br /><em>Συνεργατών</em></>}</h1>
          <p className="ph-sub">{en ? "Three pillars of expertise — one trusted partner across Greece." : "Τρεις πυλώνες εξειδίκευσης — ένας αξιόπιστος συνεργάτης σε όλη την Ελλάδα."}</p>
        </div>
      </div>

      {/* Services grid */}
      <div className="portal-services">
        {services.map(s => (
          <Link to={s.to} key={s.to} className="ps-card">
            <div className="ps-img">
              <img src={s.img} alt={s.title} loading="lazy"
                onError={e => { e.target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"; }}
              />
            </div>
            <div className="ps-body">
              <div className="ps-tag">{en ? s.tag : s.tagGr}</div>
              <h2 className="ps-title">{en ? s.title : s.titleGr}</h2>
              <p className="ps-desc">{en ? s.desc : s.descGr}</p>
              <div className="ps-cta">{en ? "Explore" : "Εξερεύνηση"} <span>→</span></div>
            </div>
          </Link>
        ))}
      </div>

      {/* Contact strip */}
      <div className="portal-contact-strip">
        <div className="pcs-text">
          <div className="pcs-badge">{en ? "Get in Touch" : "Επικοινωνήστε"}</div>
          <h3 className="pcs-title">{en ? "Ready to work together?" : "Έτοιμοι να συνεργαστούμε;"}</h3>
        </div>
        <Link to="/contact" className="btn-g">{en ? "Contact Us" : "Επικοινωνία"}</Link>
      </div>
    </div>
  );
}
