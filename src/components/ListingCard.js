import { Link } from "react-router-dom";

export default function ListingCard({ to, cover, tag, title, location, price, meta, accent = "navy" }) {
  return (
    <Link to={to} className={`listing-card listing-card--${accent}`}>
      <div className="lc-img">
        <img src={cover} alt={title} loading="lazy"
          onError={e => { e.target.src = "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80"; }}
        />
        {tag && <div className="lc-tag">{tag}</div>}
      </div>
      <div className="lc-body">
        <div className="lc-location">{location}</div>
        <h3 className="lc-title">{title}</h3>
        {meta && <div className="lc-meta">{meta}</div>}
        {price && <div className="lc-price">{price}</div>}
        <div className="lc-cta">
          View Details <span>→</span>
        </div>
      </div>
    </Link>
  );
}
