import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { useAdminData } from "../context/AdminDataContext";

export default function Completed() {
  const { lang } = useLang();
  const { completedProjects } = useAdminData();
  const en = lang === "en";

  return (
    <div className="sub-page">
      <div className="listings-section">
        <div className="ls-head">
          <h1 className="ls-title">{en ? <>Completed <em>Projects</em></> : <>Ολοκληρωμένα <em>Έργα</em></>}</h1>
          <p className="ls-sub">{en ? "Furnished and managed Airbnb properties across Athens" : "Επιπλωμένα και διαχειριζόμενα ακίνητα στην Αθήνα"}</p>
        </div>
        <div className="listings-grid">
          {completedProjects.map(p => (
            <Link to={`/partners/completed/${p.id}`} key={p.id} className="listing-card">
              <div className="lc-img">
                <img src={p.cover} alt={p.title} loading="lazy"
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80"; }}
                />
                {p.year && <div className="lc-tag">{p.year}</div>}
              </div>
              <div className="lc-body">
                <div className="lc-type">{p.type}</div>
                <h3 className="lc-title">{p.title}</h3>
                <p className="lc-loc">{p.location}</p>
                {p.features?.length > 0 && (
                  <div className="lc-features">
                    {p.features.slice(0, 3).map(f => <span key={f}>{f}</span>)}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
