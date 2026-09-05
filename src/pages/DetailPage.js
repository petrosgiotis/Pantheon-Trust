import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLang } from "../context/LanguageContext";

export default function DetailPage({ item, backTo, backLabel, type = "property" }) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [sent, setSent] = useState(false);
  const { lang } = useLang();
  const navigate = useNavigate();
  const en = lang === "en";

  if (!item) {
    return (
      <div className="detail-notfound">
        <p>Listing not found.</p>
        <Link to={backTo} className="btn-g">Go Back</Link>
      </div>
    );
  }

  const gallery = item.gallery || [item.cover];

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="detail-page">
      {/* Breadcrumb */}
      <div className="detail-breadcrumb">
        <button onClick={() => navigate(-1)} className="db-back">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M7 2L3 6L7 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          {backLabel}
        </button>
        <span className="db-sep">·</span>
        <span className="db-current">{item.title || item.name}</span>
      </div>

      <div className="detail-inner">
        {/* Gallery */}
        <div className="detail-gallery">
          <div className="dg-main" onClick={() => setLightbox(true)} style={{ cursor: "zoom-in" }}>
            <img
              src={gallery[activeImg]}
              alt={item.title || item.name}
              onError={e => { e.target.src = "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=80"; }}
            />
          </div>
          {gallery.length > 1 && (
            <div className="dg-thumbs">
              {gallery.map((src, i) => (
                <button key={i} className={`dg-thumb${i === activeImg ? " active" : ""}`} onClick={() => { setActiveImg(i); setLightbox(true); }}>
                  <img src={src} alt=""
                    onError={e => { e.target.src = "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&q=80"; }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info + form */}
        <div className="detail-body">
          <div className="detail-info">
            {(item.tag || item.type) && <div className="di-tag">{item.tag || item.type}</div>}
            <h1 className="di-title">{item.title || item.name}</h1>
            {item.location && <div className="di-location">{item.location}</div>}
            {item.model && <div className="di-location">{item.model}</div>}
            {(item.price || item.pricing) && (
              <div className="di-price">{item.price || (en ? "Price on Request" : "Τιμή κατόπιν αιτήματος")}</div>
            )}

            <p className="di-desc">{item.desc}</p>

            {/* Specs / meta */}
            {item.specs && (
              <div className="di-specs">
                {item.specs.map(s => (
                  <div key={s.label} className="di-spec">
                    <span className="dis-label">{s.label}</span>
                    <span className="dis-val">{s.val}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Property fields */}
            {item.area && (
              <div className="di-specs">
                {item.area && <div className="di-spec"><span className="dis-label">{en ? "Area" : "Εμβαδόν"}</span><span className="dis-val">{item.area}</span></div>}
                {item.bedrooms && <div className="di-spec"><span className="dis-label">{en ? "Bedrooms" : "Υπνοδωμάτια"}</span><span className="dis-val">{item.bedrooms}</span></div>}
                {item.bathrooms && <div className="di-spec"><span className="dis-label">{en ? "Bathrooms" : "Μπάνια"}</span><span className="dis-val">{item.bathrooms}</span></div>}
                {item.floor && <div className="di-spec"><span className="dis-label">{en ? "Floor" : "Όροφος"}</span><span className="dis-val">{item.floor}</span></div>}
                {item.year && <div className="di-spec"><span className="dis-label">{en ? "Built" : "Έτος"}</span><span className="dis-val">{item.year}</span></div>}
              </div>
            )}

            {/* Yacht fields */}
            {item.length && (
              <div className="di-specs">
                <div className="di-spec"><span className="dis-label">{en ? "Length" : "Μήκος"}</span><span className="dis-val">{item.length}</span></div>
                <div className="di-spec"><span className="dis-label">{en ? "Guests" : "Επισκέπτες"}</span><span className="dis-val">{item.guests}</span></div>
                {item.cabins && <div className="di-spec"><span className="dis-label">{en ? "Cabins" : "Καμπίνες"}</span><span className="dis-val">{item.cabins}</span></div>}
                {item.speed && <div className="di-spec"><span className="dis-label">{en ? "Speed" : "Ταχύτητα"}</span><span className="dis-val">{item.speed}</span></div>}
              </div>
            )}

            {/* Features */}
            {item.features && (
              <div className="di-features">
                {item.features.map(f => <span key={f} className="di-feat">{f}</span>)}
              </div>
            )}

            {/* Charter options */}
            {item.charter && (
              <div className="di-charter">
                <div className="dic-label">{en ? "Charter Options" : "Επιλογές Ναύλωσης"}</div>
                <div className="dic-options">{item.charter.map(c => <span key={c}>{c}</span>)}</div>
              </div>
            )}
          </div>

          {/* Inquiry form */}
          <div className="detail-form">
            <div className="df-header">
              <h3>{type === "yacht" ? (en ? "Request Charter" : "Αίτηση Ναύλωσης") : (en ? "Request Information" : "Αίτηση Πληροφοριών")}</h3>
              <p>{en ? "Fill in the form and we'll get back to you within 24 hours." : "Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών."}</p>
            </div>
            {sent ? (
              <div className="df-success">
                <div className="dfs-icon">✓</div>
                <h4>{en ? "Message Sent" : "Το μήνυμα εστάλη"}</h4>
                <p>{en ? "We'll be in touch very soon." : "Θα επικοινωνήσουμε σύντομα μαζί σας."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="df-form">
                <input type="text" placeholder={en ? "Full Name" : "Ονοματεπώνυμο"} required />
                <input type="email" placeholder={en ? "Email Address" : "Email"} required />
                <input type="tel" placeholder={en ? "Phone Number" : "Τηλέφωνο"} />
                {type === "yacht" && (
                  <input type="text" placeholder={en ? "Preferred dates" : "Προτιμώμενες ημερομηνίες"} />
                )}
                <textarea rows={4} placeholder={en ? "Your message..." : "Το μήνυμά σας..."} />
                <button type="submit" className="btn-g">
                  {type === "yacht" ? (en ? "Request Charter" : "Αίτηση Ναύλωσης") : (en ? "Send Enquiry" : "Αποστολή")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="lb-overlay" onClick={() => setLightbox(false)}>
          <button className="lb-close" onClick={() => setLightbox(false)}>✕</button>
          <button className="lb-prev" onClick={e => { e.stopPropagation(); setActiveImg(i => (i - 1 + gallery.length) % gallery.length); }}>‹</button>
          <img
            className="lb-img"
            src={gallery[activeImg]}
            alt={item.title || item.name}
            onClick={e => e.stopPropagation()}
            onError={e => { e.target.src = "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1600&q=80"; }}
          />
          <button className="lb-next" onClick={e => { e.stopPropagation(); setActiveImg(i => (i + 1) % gallery.length); }}>›</button>
          <div className="lb-counter">{activeImg + 1} / {gallery.length}</div>
        </div>
      )}
    </div>
  );
}
