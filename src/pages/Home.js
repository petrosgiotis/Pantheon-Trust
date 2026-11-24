import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { useEffect, useRef } from "react";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  const { lang } = useLang();
  const en = lang === "en";

  const heroBgRef   = useRef(null);
  const consultRef  = useRef(null);
  const mgmtBgRef   = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    if (window.innerWidth < 768) return;

    const onScroll = () => {
      const y = window.scrollY;

      if (heroBgRef.current) {
        heroBgRef.current.style.transform = `translateY(${y * 0.28}px)`;
      }

      const parallaxImg = (ref) => {
        if (!ref.current) return;
        const el = ref.current;
        const rect = el.closest("[data-parallax]")?.getBoundingClientRect();
        if (!rect) return;
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.18;
        el.style.transform = `translateY(${offset}px)`;
      };

      parallaxImg(mgmtBgRef);
      parallaxImg(portfolioRef);
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

      {/* ── INTRO ── */}
      <section className="hp-section hp-section--white hp-intro">
        <div className="hp-intro-inner">
          <span className="hp-eyebrow">{en ? "Pantheon Trust Group" : "Pantheon Trust Group"}</span>
          <h2 className="hp-section-title">
            {en
              ? <>A trusted partner<br />in <em>Greek real estate</em></>
              : <>Αξιόπιστος σύμβουλος<br />στα <em>ελληνικά ακίνητα</em></>}
          </h2>
          <p className="hp-intro-text">
            {en
              ? "We combine deep market knowledge with on-the-ground expertise to guide our clients through every stage of a real estate transaction in Athens and the Greek islands — from first enquiry to final handover."
              : "Συνδυάζουμε βαθιά γνώση αγοράς με επιτόπια εμπειρία για να καθοδηγούμε τους πελάτες μας σε κάθε στάδιο συναλλαγής ακινήτων σε Αθήνα και ελληνικά νησιά — από την πρώτη επαφή έως την παράδοση."}
          </p>
        </div>
      </section>

      {/* ── CONSULTANCY ── */}
      <section className="hp-section hp-section--off hp-consult" id="consultancy" ref={consultRef}>
        <div className="hp-consult-layout">
          <div className="hp-consult-photo">
            <img
              src={process.env.PUBLIC_URL + "/images/hero.jpg"}
              alt="Luxury interior"
              loading="lazy"
            />
          </div>
          <div className="hp-consult-body">
            <span className="hp-eyebrow">{en ? "Consultancy" : "Συμβουλευτική"}</span>
            <h2 className="hp-section-title">
              {en ? <>Real Estate <em>Consultancy</em></> : <>Συμβουλευτική <em>Ακινήτων</em></>}
            </h2>
            <p className="hp-consult-lead">
              {en
                ? "We act as your trusted advisor at every step — whether you are acquiring your first home, expanding a portfolio, or seeking to sell at the right moment."
                : "Είμαστε ο αξιόπιστος σύμβουλός σας σε κάθε βήμα — είτε αγοράζετε την πρώτη κατοικία, είτε επεκτείνετε χαρτοφυλάκιο, είτε αναζητάτε τη σωστή στιγμή για πώληση."}
            </p>
            <ul className="hp-consult-list">
              <li>
                <strong>{en ? "Market Analysis" : "Ανάλυση Αγοράς"}</strong>
                <span>{en ? "In-depth research on pricing, demand trends and neighbourhood dynamics across Athens and the islands." : "Εμπεριστατωμένη έρευνα τιμών, τάσεων ζήτησης και δυναμικής γειτονιάς σε Αθήνα και νησιά."}</span>
              </li>
              <li>
                <strong>{en ? "Acquisition Strategy" : "Στρατηγική Απόκτησης"}</strong>
                <span>{en ? "Identifying the right properties, structuring offers and guiding negotiations to protect your interests." : "Εντοπισμός κατάλληλων ακινήτων, διαμόρφωση προσφορών και διαπραγμάτευση για την προστασία των συμφερόντων σας."}</span>
              </li>
              <li>
                <strong>{en ? "Due Diligence" : "Νομικός Έλεγχος"}</strong>
                <span>{en ? "Title verification, legal review and coordination with notaries, lawyers and tax authorities." : "Έλεγχος τίτλων, νομική εξέταση και συντονισμός με συμβολαιογράφους, δικηγόρους και φορολογικές αρχές."}</span>
              </li>
              <li>
                <strong>{en ? "Investment Advisory" : "Επενδυτική Συμβουλευτική"}</strong>
                <span>{en ? "Yield assessment, portfolio diversification and long-term asset strategy for private and institutional clients." : "Αξιολόγηση απόδοσης, διαφοροποίηση χαρτοφυλακίου και μακροπρόθεσμη επενδυτική στρατηγική."}</span>
              </li>
            </ul>
            <Link to="/partners/brokerage" className="btn-g">
              {en ? "Talk to Us" : "Επικοινωνήστε"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="hp-section hp-section--white hp-pillars">
        <div className="hp-section-head">
          <span className="hp-eyebrow">{en ? "What We Do" : "Τι Κάνουμε"}</span>
          <h2 className="hp-section-title">
            {en ? <>Three pillars of <em>expertise</em></> : <>Τρεις πυλώνες <em>εξειδίκευσης</em></>}
          </h2>
        </div>
        <div className="hp-pillars-grid">
          <Link to="/partners/brokerage" className="hp-pillar">
            <span className="hp-pillar-num">01</span>
            <h3 className="hp-pillar-title">{en ? "Consultancy" : "Συμβουλευτική"}</h3>
            <p className="hp-pillar-desc">{en ? "Strategic guidance on acquisitions, sales, valuations and investment planning." : "Στρατηγική καθοδήγηση σε αγορές, πωλήσεις, αποτιμήσεις και επενδυτικό σχεδιασμό."}</p>
            <span className="hp-pillar-cta">{en ? "Explore" : "Εξερεύνηση"} →</span>
          </Link>
          <Link to="/partners/constructions" className="hp-pillar">
            <span className="hp-pillar-num">02</span>
            <h3 className="hp-pillar-title">{en ? "Constructions" : "Κατασκευές"}</h3>
            <p className="hp-pillar-desc">{en ? "Villas and residences built with Cycladic stone, modern precision and lasting quality." : "Βίλες και κατοικίες με κυκλαδίτικη πέτρα, σύγχρονη ακρίβεια και διαχρονική ποιότητα."}</p>
            <span className="hp-pillar-cta">{en ? "Explore" : "Εξερεύνηση"} →</span>
          </Link>
          <Link to="/partners/management" className="hp-pillar">
            <span className="hp-pillar-num">03</span>
            <h3 className="hp-pillar-title">{en ? "Management" : "Διαχείριση"}</h3>
            <p className="hp-pillar-desc">{en ? "Full-service management for Airbnb, short-term rentals and building administration." : "Πλήρης διαχείριση Airbnb, βραχυχρόνιων μισθώσεων και κτιρίων."}</p>
            <span className="hp-pillar-cta">{en ? "Explore" : "Εξερεύνηση"} →</span>
          </Link>
        </div>
      </section>

      {/* ── MANAGEMENT SPLIT ── */}
      <div className="hp-mgmt-strip" data-parallax="true">
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

      {/* ── PORTFOLIO STRIP ── */}
      <div className="hp-portfolio-strip" data-parallax="true">
        <div className="hp-portfolio-bg">
          <img ref={portfolioRef} src={process.env.PUBLIC_URL + "/images/cp_emerald_1.jpg"} alt="Completed projects"
            style={{ willChange: "transform" }}
            onError={e => { e.target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80"; }}
          />
          <div className="hp-portfolio-overlay" />
        </div>
        <div className="hp-portfolio-content">
          <span className="hp-eyebrow hp-eyebrow--light">{en ? "Portfolio" : "Χαρτοφυλάκιο"}</span>
          <h2 className="hp-portfolio-title">
            {en ? <>Completed <em>Projects</em></> : <>Ολοκληρωμένα <em>Έργα</em></>}
          </h2>
          <p className="hp-portfolio-sub">
            {en ? "Furnished and managed Airbnb properties delivered across Athens." : "Επιπλωμένα και διαχειριζόμενα ακίνητα σε όλη την Αθήνα."}
          </p>
          <Link to="/partners/completed" className="btn-o">{en ? "View Portfolio" : "Δείτε Χαρτοφυλάκιο"}</Link>
        </div>
      </div>

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
