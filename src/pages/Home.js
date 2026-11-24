import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { useEffect, useRef } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { useAdminData } from "../context/AdminDataContext";

const services = [
  {
    to: "/partners/brokerage",
    photo: process.env.PUBLIC_URL + "/images/brokerage1.jpg",
    tag: "Consultancy",
    tagGr: "Συμβουλευτική",
    title: "Advisory Services",
    titleGr: "Συμβουλευτική Ακινήτων",
    desc: "Expert guidance on acquisitions, valuations, and investment strategy across Athens and the Greek islands.",
    descGr: "Εξειδικευμένη καθοδήγηση για αγορές, αποτιμήσεις και επενδυτική στρατηγική.",
  },
  {
    to: "/partners/constructions",
    photo: process.env.PUBLIC_URL + "/images/construction1.jpg",
    tag: "Constructions",
    tagGr: "Κατασκευές",
    title: "Our Projects",
    titleGr: "Τα Έργα Μας",
    desc: "Villas and residences built with Cycladic stone, modern precision, and lasting quality.",
    descGr: "Βίλες με κυκλαδίτικη πέτρα, σύγχρονη ακρίβεια και διαχρονική ποιότητα.",
  },
  {
    to: "/partners/management",
    photo: process.env.PUBLIC_URL + "/images/koukaki_living.jpg",
    tag: "Management",
    tagGr: "Διαχείριση",
    title: "Property Management",
    titleGr: "Διαχείριση Ακινήτων",
    desc: "Full-service management for Airbnb, short-term rentals, and building administration.",
    descGr: "Πλήρης διαχείριση Airbnb, βραχυχρόνιων μισθώσεων και κτιρίων.",
  },
  {
    to: "/partners/completed",
    photo: process.env.PUBLIC_URL + "/images/cp_emerald_1.jpg",
    tag: "Portfolio",
    tagGr: "Χαρτοφυλάκιο",
    title: "Completed Projects",
    titleGr: "Ολοκληρωμένα Έργα",
    desc: "Furnished and managed Airbnb properties delivered across Athens.",
    descGr: "Επιπλωμένα και παραδομένα ακίνητα Airbnb σε όλη την Αθήνα.",
  },
];

export default function Home() {
  const { lang } = useLang();
  const en = lang === "en";
  const { projects: constructionProjects, completedProjects } = useAdminData();
  const heroBgRef = useRef(null);
  const mgmtBgRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${y * 0.3}px)`;
      }
      if (mgmtBgRef.current) {
        const mgmtEl = mgmtBgRef.current.closest(".hp-mgmt-strip");
        if (mgmtEl) {
          const rect = mgmtEl.getBoundingClientRect();
          const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.2;
          mgmtBgRef.current.style.transform = `translateY(${offset}px)`;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="home-page">
      <SiteNav />

      {/* ── HERO ── */}
      <section className="hp-hero">
        <video
          ref={heroBgRef}
          className="hp-hero-bg"
          style={{ willChange: "transform", objectFit: "cover" }}
          autoPlay muted loop playsInline
        >
          <source src={process.env.PUBLIC_URL + "/images/hero.mp4"} type="video/mp4" />
        </video>
        {/* photo fallback rendered as background if video fails */}
        <div className="hp-hero-overlay" />
        <div className="hp-hero-content">
          <p className="hp-hero-eyebrow">Athens, Greece</p>
          <h1 className="hp-hero-title">
            Pantheon
            <em>Trust Group</em>
          </h1>
          <p className="hp-hero-sub">
            {en ? "Real Estate · Construction · Management" : "Ακίνητα · Κατασκευές · Διαχείριση"}
          </p>
        </div>
        <div className="hp-hero-scroll">
          <div className="hp-hero-scroll-line" />
          <span>{en ? "Scroll" : "Κύλιση"}</span>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="hp-section hp-section--white" id="services">
        <div className="hp-section-head">
          <span className="hp-eyebrow">{en ? "What We Do" : "Τι Κάνουμε"}</span>
          <h2 className="hp-section-title">
            {en ? <>Our <em>Services</em></> : <>Οι <em>Υπηρεσίες</em> Μας</>}
          </h2>
        </div>
        <div className="hp-services-grid">
          {services.map(s => (
            <Link to={s.to} key={s.to} className="hp-svc-card">
              <div className="hp-svc-photo">
                <img src={s.photo} alt={s.title} loading="lazy"
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"; }}
                />
                <div className="hp-svc-photo-overlay" />
                <div className="hp-svc-photo-cta">{en ? "Explore" : "Εξερεύνηση"}</div>
              </div>
              <div className="hp-svc-tag">{en ? s.tag : s.tagGr}</div>
              <h3 className="hp-svc-title">{en ? s.title : s.titleGr}</h3>
              <p className="hp-svc-desc">{en ? s.desc : s.descGr}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CONSTRUCTIONS ── */}
      <section className="hp-section hp-section--off" id="projects">
        <div className="hp-section-head">
          <span className="hp-eyebrow">{en ? "Our Work" : "Η Δουλειά Μας"}</span>
          <h2 className="hp-section-title">
            {en ? <>Construction <em>Projects</em></> : <>Κατασκευαστικά <em>Έργα</em></>}
          </h2>
        </div>
        <div className="hp-projects-grid">
          {constructionProjects.map(p => (
            <Link to={`/partners/constructions/${p.id}`} key={p.id} className="hp-project-card">
              <div className="hp-project-img">
                <img src={p.cover} alt={p.title} loading="lazy"
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"; }}
                />
                <div className="hp-project-status">{p.status}</div>
              </div>
              <div className="hp-project-body">
                <div className="hp-project-type">{p.type}</div>
                <h3 className="hp-project-title">{p.title}</h3>
                <p className="hp-project-loc">{p.location}</p>
                <div className="hp-project-cta">{en ? "View Project" : "Δείτε Έργο"}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="hp-section-footer">
          <Link to="/partners/constructions" className="btn-n">{en ? "All Projects" : "Όλα τα Έργα"}</Link>
        </div>
      </section>

      {/* ── CONSULTANCY CTA ── */}
      <section className="hp-section hp-section--white" id="consultancy">
        <div className="hp-section-head">
          <span className="hp-eyebrow">{en ? "Expert Guidance" : "Εξειδικευμένη Καθοδήγηση"}</span>
          <h2 className="hp-section-title">
            {en ? <>Real Estate <em>Consultancy</em></> : <>Συμβουλευτική <em>Ακινήτων</em></>}
          </h2>
          <p className="hp-section-sub">
            {en
              ? "We guide buyers, sellers and investors through every stage — from market analysis and property identification to negotiation and closing."
              : "Καθοδηγούμε αγοραστές, πωλητές και επενδυτές σε κάθε στάδιο — από ανάλυση αγοράς έως ολοκλήρωση συναλλαγής."}
          </p>
        </div>
        <div className="hp-section-footer" style={{ marginTop: "2rem" }}>
          <Link to="/partners/brokerage" className="btn-g">{en ? "Explore Advisory Services" : "Δείτε τις Υπηρεσίες"}</Link>
        </div>
      </section>

      {/* ── MANAGEMENT ── */}
      <div className="hp-mgmt-strip">
        <div className="hp-mgmt-bg" style={{ overflow: "hidden" }}>
          <img ref={mgmtBgRef} src={process.env.PUBLIC_URL + "/images/koukaki_living.jpg"} alt="Property Management"
            style={{ willChange: "transform" }}
            onError={e => { e.target.src = "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80"; }}
          />
        </div>
        <div className="hp-mgmt-content">
          <span className="hp-eyebrow hp-eyebrow--light">{en ? "Property Management" : "Διαχείριση Ακινήτων"}</span>
          <h2 className="hp-mgmt-title">
            {en ? <>Airbnb &amp; Rental<em>Management</em></> : <>Airbnb &amp;<em>Βραχυχρόνιες Μισθώσεις</em></>}
          </h2>
          <p className="hp-mgmt-sub">
            {en
              ? "We handle everything — listings, guests, cleaning, and revenue optimisation — so you don't have to."
              : "Αναλαμβάνουμε τα πάντα — αγγελίες, επισκέπτες, καθαρισμό και βελτιστοποίηση εσόδων."}
          </p>
          <Link to="/partners/management" className="btn-g">{en ? "Learn More" : "Μάθετε Περισσότερα"}</Link>
        </div>
      </div>

      {/* ── COMPLETED PROJECTS ── */}
      {completedProjects.length > 0 && (
        <section className="hp-section hp-section--white" id="completed">
          <div className="hp-section-head">
            <span className="hp-eyebrow">{en ? "Portfolio" : "Χαρτοφυλάκιο"}</span>
            <h2 className="hp-section-title">
              {en ? <>Completed <em>Projects</em></> : <>Ολοκληρωμένα <em>Έργα</em></>}
            </h2>
            <p className="hp-section-sub">
              {en ? "Furnished and managed Airbnb properties across Athens" : "Επιπλωμένα και διαχειριζόμενα ακίνητα στην Αθήνα"}
            </p>
          </div>
          <div className="hp-listings-grid">
            {completedProjects.map(p => (
              <Link to={`/partners/completed/${p.id}`} key={p.id} className="hp-listing-card">
                <div className="hp-listing-img">
                  <img src={p.cover} alt={p.title} loading="lazy"
                    onError={e => { e.target.src = "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80"; }}
                  />
                  {p.year && <div className="hp-listing-tag">{p.year}</div>}
                </div>
                <div className="hp-listing-body">
                  <div className="hp-listing-type">{p.type}</div>
                  <h3 className="hp-listing-title">{p.title}</h3>
                  <p className="hp-listing-loc">{p.location}</p>
                  {p.features?.length > 0 && (
                    <div className="hp-listing-meta">
                      {p.features.slice(0, 3).map(f => <span key={f}>{f}</span>)}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="hp-section-footer">
            <Link to="/partners/completed" className="btn-n">{en ? "All Projects" : "Όλα τα Έργα"}</Link>
          </div>
        </section>
      )}

      {/* ── CONTACT ── */}
      <section className="hp-contact">
        <div className="hp-contact-inner">
          <span className="hp-eyebrow">{en ? "Get in Touch" : "Επικοινωνήστε"}</span>
          <h2 className="hp-contact-title">
            {en ? <>Let's work<br /><em>together</em></> : <>Ας <em>συνεργαστούμε</em></>}
          </h2>
          <div className="hp-contact-details">
            <a href="mailto:pantheontrustgroup@gmail.com">pantheontrustgroup@gmail.com</a>
            <span className="hb-dot" />
            <a href="tel:+306982141504">+30 6982 141 504</a>
          </div>
          <Link to="/contact" className="btn-g">{en ? "Contact Us" : "Επικοινωνία"}</Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
