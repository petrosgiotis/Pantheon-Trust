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
          <div className="sh-badge">{en ? "Brokerage" : "Μεσιτεία"}</div>
          <h1 className="sh-title">{en ? <>Premium<br /><em>Property Listings</em></> : <>Premium<br /><em>Ακίνητα</em></>}</h1>
          <p className="sh-sub">{en ? "Exclusive residential, commercial and land transactions across Athens and the Greek islands." : "Αποκλειστικές αγοραπωλησίες κατοικιών, επαγγελματικών χώρων και γης σε Αθήνα και νησιά."}</p>
        </div>
        <div className="sh-img">
          <img src="/images/brokerage1.jpg" alt="" />
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
