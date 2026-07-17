import { useLang } from "../context/LanguageContext";
import ListingCard from "../components/ListingCard";
import { villas } from "../data/clients";

export default function Villas() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="sub-page">
      <div className="sub-hero sub-hero--dark">
        <div className="sh-content">
          <div className="sh-badge">{en ? "Private Villas" : "Ιδιωτικές Βίλες"}</div>
          <h1 className="sh-title sh-title--light">{en ? <>Book a<br /><em>Villa</em></> : <>Κλείστε<br /><em>Βίλα</em></>}</h1>
          <p className="sh-sub sh-sub--light">{en ? "Exclusive Cycladic retreats with infinity pools, private staff, and unmatched Aegean views." : "Αποκλειστικές κυκλαδίτικες κατοικίες με πισίνες, ιδιωτικό προσωπικό και θέα στο Αιγαίο."}</p>
        </div>
        <div className="sh-img">
          <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=90" alt="" />
        </div>
      </div>

      <div className="listings-section listings-section--cream">
        <div className="listings-grid">
          {villas.map(v => (
            <ListingCard
              key={v.id}
              to={`/clients/villas/${v.id}`}
              cover={v.cover}
              tag={v.tag}
              title={v.title}
              location={v.location}
              price={v.price}
              meta={`${v.bedrooms} bed · ${v.guests} guests`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
