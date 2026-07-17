import { useLang } from "../context/LanguageContext";
import ListingCard from "../components/ListingCard";
import { islandListings } from "../data/clients";

export default function IslandStays() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="sub-page">
      <div className="sub-hero sub-hero--dark">
        <div className="sh-content">
          <div className="sh-badge">{en ? "Island Getaways" : "Νησιωτικές Αποδράσεις"}</div>
          <h1 className="sh-title sh-title--light">{en ? <>Book the<br /><em>Islands</em></> : <>Νησιά<br /><em>Διαμονή</em></>}</h1>
          <p className="sh-sub sh-sub--light">{en ? "Handpicked stays across Mykonos, Santorini, Paros and the most beautiful islands of the Aegean." : "Επιλεγμένες διαμονές σε Μύκονο, Σαντορίνη, Πάρο και τα ομορφότερα νησιά του Αιγαίου."}</p>
        </div>
        <div className="sh-img">
          <img src="/images/airbnb2_balcony.jpg" alt="" />
        </div>
      </div>

      <div className="listings-section listings-section--dark">
        <div className="listings-grid listings-grid--3">
          {islandListings.map(i => (
            <ListingCard
              key={i.id}
              to={`/clients/islands/${i.id}`}
              cover={i.cover}
              tag={i.tag}
              title={i.title}
              location={i.location}
              price={i.price}
              meta={`${i.bedrooms} bed · ${i.guests} guests`}
              accent="light"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
