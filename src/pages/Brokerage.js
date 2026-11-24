import { useLang } from "../context/LanguageContext";
import ListingCard from "../components/ListingCard";
import { brokerageListings } from "../data/brokerage";

export default function Brokerage() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <div className="sub-page">
      <div className="sub-hero sub-hero--cream">
        <div className="sh-content">
          <div className="sh-badge">{en ? "Consultancy" : "Συμβουλευτική"}</div>
          <h1 className="sh-title">{en ? <>Property<br /><em>Advisory</em></> : <>Συμβουλευτική<br /><em>Ακινήτων</em></>}</h1>
          <p className="sh-sub">{en ? "Strategic guidance on residential, commercial and land acquisitions across Athens and the Greek islands." : "Στρατηγική καθοδήγηση για αγορά κατοικιών, επαγγελματικών χώρων και γης σε Αθήνα και νησιά."}</p>
        </div>
        <div className="sh-img">
          <img src={process.env.PUBLIC_URL + "/images/brokerage1.jpg"} alt="" />
        </div>
      </div>

      <div className="listings-section">
        <div className="listings-grid">
          {brokerageListings.map(p => (
            <ListingCard
              key={p.id}
              to={`/partners/brokerage/${p.id}`}
              cover={p.cover}
              tag={p.tag}
              title={p.title}
              location={p.location}
              price={p.price}
              meta={p.bedrooms ? `${p.bedrooms} bed · ${p.area}` : p.area}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
