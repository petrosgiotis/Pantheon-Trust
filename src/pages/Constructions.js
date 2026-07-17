import { useLang } from "../context/LanguageContext";
import ListingCard from "../components/ListingCard";
import { constructionProjects } from "../data/constructions";

export default function Constructions() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="sub-page">
      <div className="sub-hero sub-hero--dark">
        <div className="sh-content">
          <div className="sh-badge">{en ? "Constructions" : "Κατασκευές"}</div>
          <h1 className="sh-title sh-title--light">{en ? <>Our<br /><em>Projects</em></> : <>Τα<br /><em>Έργα Μας</em></>}</h1>
          <p className="sh-sub sh-sub--light">{en ? "Award-winning villas, apartments and buildings crafted with Cycladic stone and modern precision." : "Βραβευμένες βίλες, διαμερίσματα και κτίρια με κυκλαδίτικη πέτρα και σύγχρονη ακρίβεια."}</p>
        </div>
        <div className="sh-img">
          <img src="/images/construction1.jpg" alt="" />
        </div>
      </div>

      <div className="listings-section listings-section--dark">
        <div className="listings-grid">
          {constructionProjects.map(p => (
            <ListingCard
              key={p.id}
              to={`/partners/constructions/${p.id}`}
              cover={p.cover}
              tag={p.status}
              title={p.title}
              location={p.location}
              meta={`${p.type} · ${p.units > 1 ? `${p.units} units` : "1 unit"}`}
              accent="light"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
