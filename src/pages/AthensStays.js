import { useLang } from "../context/LanguageContext";
import ListingCard from "../components/ListingCard";
import { athensListings } from "../data/clients";

export default function AthensStays() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="sub-page">
      <div className="sub-hero sub-hero--cream">
        <div className="sh-content">
          <div className="sh-badge">{en ? "Athens Stays" : "Διαμονή στην Αθήνα"}</div>
          <h1 className="sh-title">{en ? <>Book<br /><em>Athens</em></> : <>Αθήνα<br /><em>Διαμονή</em></>}</h1>
          <p className="sh-sub">{en ? "Designer apartments in the heart of Athens — from Acropolis views to rooftop terraces over the ancient city." : "Designer διαμερίσματα στην καρδιά της Αθήνας — από θέα Ακρόπολη έως ταράτσες πάνω από την αρχαία πόλη."}</p>
        </div>
        <div className="sh-img">
          <img src={process.env.PUBLIC_URL + "/images/airbnb1_living.jpg"} alt="" />
        </div>
      </div>

      <div className="listings-section">
        <div className="listings-grid listings-grid--3">
          {athensListings.map(a => (
            <ListingCard
              key={a.id}
              to={`/clients/athens/${a.id}`}
              cover={a.cover}
              tag={a.tag}
              title={a.title}
              location={a.location}
              price={a.price}
              meta={`${a.bedrooms} bed · ${a.guests} guests`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
