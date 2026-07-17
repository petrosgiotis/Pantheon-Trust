import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

const services = [
  {
    icon: "✦",
    en: { title: "Tourism & Airbnb Management", desc: "End-to-end management of your short-term rental — listings optimisation, guest communication, pricing strategy, professional photography, and 24/7 support across Airbnb, Booking.com and direct channels." },
    gr: { title: "Τουρισμός & Διαχείριση Airbnb", desc: "Ολοκληρωμένη διαχείριση βραχυχρόνιας μίσθωσης — βελτιστοποίηση καταχώρισης, επικοινωνία με επισκέπτες, στρατηγική τιμολόγησης, επαγγελματική φωτογράφηση και 24/7 υποστήριξη σε Airbnb, Booking.com και άλλα." },
    items: ["Listing Optimisation", "Dynamic Pricing", "Guest Communication", "Professional Photography", "Revenue Reports", "Maintenance Coordination"],
  },
  {
    icon: "◈",
    en: { title: "Building & Property Management", desc: "Full administrative and technical management of your residential or commercial building — tenant relations, maintenance scheduling, accounting, and legal compliance." },
    gr: { title: "Διαχείριση Κτιρίου & Ακινήτου", desc: "Πλήρης διοικητική και τεχνική διαχείριση κατοικιών και επαγγελματικών κτιρίων — σχέσεις ενοίκων, προγραμματισμός συντήρησης, λογιστική και νομική συμμόρφωση." },
    items: ["Tenant Relations", "Maintenance Scheduling", "Utility Management", "Legal Compliance", "Financial Reporting", "24/7 Emergency Line"],
  },
];

export default function Management() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="sub-page">
      <div className="sub-hero sub-hero--cream">
        <div className="sh-content">
          <div className="sh-badge">{en ? "Property Management" : "Διαχείριση Ακινήτων"}</div>
          <h1 className="sh-title">{en ? <>Complete<br /><em>Asset Management</em></> : <>Ολοκληρωμένη<br /><em>Διαχείριση</em></>}</h1>
          <p className="sh-sub">{en ? "We handle everything — so your property works for you." : "Αναλαμβάνουμε τα πάντα — ώστε το ακίνητό σας να αποδίδει για εσάς."}</p>
        </div>
        <div className="sh-img">
          <img src="/images/airbnb1_living.jpg" alt="" />
        </div>
      </div>

      <section className="mgmt-section">
        <div className="mgmt-grid">
          {services.map((s, i) => (
            <div className="mgmt-card" key={i}>
              <div className="mgmt-icon">{s.icon}</div>
              <h3 className="mgmt-title">{en ? s.en.title : s.gr.title}</h3>
              <p className="mgmt-desc">{en ? s.en.desc : s.gr.desc}</p>
              <ul className="mgmt-list">
                {s.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mgmt-cta">
          <p>{en ? "Interested in our management services?" : "Ενδιαφέρεστε για τις υπηρεσίες διαχείρισης;"}</p>
          <Link to="/contact" className="btn-g">{en ? "Request a Proposal" : "Αίτηση Πρότασης"}</Link>
        </div>
      </section>
    </div>
  );
}
