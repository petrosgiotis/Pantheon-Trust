import { createContext, useContext, useState } from "react";

export const translations = {
  en: {
    nav: { partners: "Services", clients: "Experiences", contact: "Contact", about: "About Us" },
    hero: {
      badge: "Athens, Greece",
      title1: "Where Luxury",
      title2: "Meets Legacy",
      desc: "Pantheon Trust Group is a premium Athens-based firm offering bespoke real estate, luxury construction, and curated tourism experiences across Greece.",
      sub: "Real Estate · Construction · Tourism",
      cta1: "Our Services",
      cta2: "Experiences",
    },
    stats: [
      { num: "150+", label: "Properties" },
      { num: "12+",  label: "Years of Excellence" },
      { num: "500+", label: "Happy Clients" },
      { num: "3",    label: "Sectors" },
    ],
    partners: {
      badge: "What We Offer",
      title: "Our Services",
      sub: "Tailored solutions in real estate, construction and property management across Greece",
      brokerage: {
        tag: "Brokerage",
        title: "Premium Property Listings",
        desc: "Exclusive residential, commercial and land transactions across Athens and the Greek islands.",
        cta: "View Listings",
      },
      constructions: {
        tag: "Constructions",
        title: "Luxury Developments",
        desc: "Award-winning villas, apartments and building complexes crafted with Cycladic stone and modern precision.",
        cta: "Our Projects",
        proj: "Mykonos Residences",
        projSub: "Luxury villa complex — Under construction",
      },
      mgmt: {
        tag: "Property Management",
        title: "Complete Asset Management",
        desc: "Full-service management for short-term rentals, Airbnb optimization, and building administration.",
        cta: "Learn More",
        t1: "Tourism & Airbnb",
        t2: "Building Management",
      },
    },
    clients: {
      badge: "Curated Experiences",
      title: "Client Experiences",
      sub: "Handpicked luxury stays and bespoke experiences across Greece",
      athens1: {
        tag: "Athens · Airbnb",
        title: "Acropolis View Studio",
        desc: "Wake up to the Parthenon. Designer interiors, rooftop terrace, Nespresso & Netflix included.",
        cta: "Book Now",
      },
      athens2: {
        tag: "Athens · Airbnb",
        title: "Premium Athens Apartments",
        desc: "Thoughtfully designed apartments in the heart of Athens — modern, cozy, and fully equipped.",
        cta: "Explore",
      },
      islands: {
        tag: "Greek Islands",
        title: "Island Getaways",
        desc: "Curated stays across Mykonos, Santorini, Paros and beyond. Unforgettable escapes await.",
        cta: "Discover",
      },
      yachting: {
        tag: "Sea Experience",
        title: "Private Yachting",
        desc: "Set sail on crystal Aegean waters. Private charters, sunset cruises, bespoke sea adventures.",
        cta: "Set Sail",
      },
    },
    contact: {
      badge: "Get in Touch",
      title: "Let's Build Something Together",
      sub: "Whether you're a partner or a client, we're ready to help.",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      msg: "Your Message",
      send: "Send Message",
      addr: "Athens, Greece",
      mail: "pantheontrustgroup@gmail.com",
      tel: "+30 6982 141 504",
    },
    footer: { rights: "All rights reserved." },
  },
  gr: {
    nav: { partners: "Υπηρεσίες", clients: "Εμπειρίες", contact: "Επικοινωνία", about: "Σχετικά" },
    hero: {
      badge: "Αθήνα, Ελλάδα",
      title1: "Όπου η Πολυτέλεια",
      title2: "Συναντά την Κληρονομιά",
      desc: "Η Pantheon Trust Group είναι μια premium εταιρεία στην Αθήνα που προσφέρει εξατομικευμένες υπηρεσίες ακινήτων, κατασκευών πολυτελείας και τουρισμού σε όλη την Ελλάδα.",
      sub: "Μεσιτεία · Κατασκευές · Τουρισμός",
      cta1: "Οι Υπηρεσίες Μας",
      cta2: "Εμπειρίες",
    },
    stats: [
      { num: "150+", label: "Ακίνητα" },
      { num: "12+",  label: "Χρόνια Αριστείας" },
      { num: "500+", label: "Ευχαριστημένοι Πελάτες" },
      { num: "3",    label: "Τομείς" },
    ],
    partners: {
      badge: "Τι Προσφέρουμε",
      title: "Οι Υπηρεσίες Μας",
      sub: "Εξατομικευμένες λύσεις σε ακίνητα, κατασκευές και διαχείριση σε όλη την Ελλάδα",
      brokerage: {
        tag: "Μεσιτεία",
        title: "Premium Καταχωρίσεις",
        desc: "Αποκλειστικές συναλλαγές κατοικιών, επαγγελματικών χώρων και γης στην Αθήνα και τα νησιά.",
        cta: "Δείτε Ακίνητα",
      },
      constructions: {
        tag: "Κατασκευές",
        title: "Luxury Αναπτύξεις",
        desc: "Βραβευμένες βίλες, διαμερίσματα και συγκροτήματα κατασκευασμένα με κυκλαδίτικη πέτρα και σύγχρονη ακρίβεια.",
        cta: "Τα Έργα Μας",
        proj: "Κατοικίες Μυκόνου",
        projSub: "Luxury συγκρότημα βιλών — Υπό κατασκευή",
      },
      mgmt: {
        tag: "Διαχείριση Ακινήτων",
        title: "Ολοκληρωμένη Διαχείριση",
        desc: "Πλήρης διαχείριση βραχυχρόνιων μισθώσεων, βελτιστοποίηση Airbnb και διαχείριση κτιρίων.",
        cta: "Μάθετε Περισσότερα",
        t1: "Τουρισμός & Airbnb",
        t2: "Διαχείριση Κτιρίων",
      },
    },
    clients: {
      badge: "Επιμελημένες Εμπειρίες",
      title: "Εμπειρίες Πελατών",
      sub: "Επιλεγμένες πολυτελείς διαμονές και μοναδικές εμπειρίες σε όλη την Ελλάδα",
      athens1: {
        tag: "Αθήνα · Airbnb",
        title: "Studio με Θέα Ακρόπολη",
        desc: "Ξυπνήστε με θέα τον Παρθενώνα. Designer εσωτερικοί χώροι, ταράτσα, Nespresso & Netflix.",
        cta: "Κλείστε Τώρα",
      },
      athens2: {
        tag: "Αθήνα · Airbnb",
        title: "Premium Διαμερίσματα Αθήνας",
        desc: "Σχεδιασμένα με προσοχή στη λεπτομέρεια στην καρδιά της Αθήνας — μοντέρνα και πλήρως εξοπλισμένα.",
        cta: "Εξερευνήστε",
      },
      islands: {
        tag: "Ελληνικά Νησιά",
        title: "Νησιώτικες Αποδράσεις",
        desc: "Επιλεγμένες διαμονές σε Μύκονο, Σαντορίνη, Πάρο και άλλα. Αξέχαστες εμπειρίες σας περιμένουν.",
        cta: "Ανακαλύψτε",
      },
      yachting: {
        tag: "Θαλάσσια Εμπειρία",
        title: "Ιδιωτικό Yachting",
        desc: "Αποπλεύστε στα κρυστάλλινα νερά του Αιγαίου. Ιδιωτικές ναυλώσεις και μοναδικές θαλάσσιες περιπέτειες.",
        cta: "Αποπλεύστε",
      },
    },
    contact: {
      badge: "Επικοινωνήστε",
      title: "Ας Χτίσουμε Κάτι Μαζί",
      sub: "Είτε είστε συνεργάτης είτε πελάτης, είμαστε έτοιμοι να βοηθήσουμε.",
      name: "Ονοματεπώνυμο",
      email: "Διεύθυνση Email",
      phone: "Τηλέφωνο",
      msg: "Το Μήνυμά σας",
      send: "Αποστολή",
      addr: "Αθήνα, Ελλάδα",
      mail: "pantheontrustgroup@gmail.com",
      tel: "+30 6982 141 504",
    },
    footer: { rights: "Με επιφύλαξη παντός δικαιώματος." },
  },
};

const Ctx = createContext();
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  return <Ctx.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</Ctx.Provider>;
}
export const useLang = () => useContext(Ctx);
