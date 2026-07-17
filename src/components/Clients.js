import { useLang } from "../context/LanguageContext";

const ISLAND_PH = "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80";

const yachts = [
  {
    img: "/images/yacht-uptime.jpg",
    name: "S/Y UPTIME",
    model: "Beneteau Oceanis 62",
    tag: "Sailing Yacht",
    specs: [
      { label: "Length", val: "19.16 m" },
      { label: "Guests", val: "8 daily" },
    ],
  },
  {
    img: "/images/yacht-frog.jpg",
    name: "M/Y FROG",
    model: "Riva Vertigo 63",
    tag: "Riva · Italy",
    specs: [
      { label: "Length", val: "19.57 m" },
      { label: "Guests", val: "10 daily" },
    ],
  },
  {
    img: "/images/yacht-tranquillius.jpg",
    name: "M/Y TRANQUILLIUS",
    model: "Riva Rivale 52",
    tag: "Riva · Italy",
    specs: [
      { label: "Length", val: "15.61 m" },
      { label: "Guests", val: "8 daily" },
    ],
  },
];

export default function Clients() {
  const { t } = useLang();
  const c = t.clients;

  const cards = [
    { key:"athens1", img:"/images/airbnb1_living.jpg", info: c.athens1 },
    { key:"athens2", img:"/images/airbnb2_living.jpg", info: c.athens2 },
    { key:"islands", img: ISLAND_PH,                  info: c.islands  },
    { key:"yachting",img:"/images/yacht-frog.jpg",     info: c.yachting },
  ];

  const athens1Gallery = [
    "/images/airbnb1_bedroom.jpg",
    "/images/airbnb1_living.jpg",
    "/images/airbnb1_dining.jpg",
    "/images/airbnb1_balcony.jpg",
    "/images/hero.jpg",
  ];

  const athens2Gallery = [
    "/images/airbnb2_living.jpg",
    "/images/airbnb2_bedroom.jpg",
    "/images/airbnb2_balcony.jpg",
    "/images/airbnb2_bath.jpg",
  ];

  return (
    <section className="sec sec-dark" id="clients">
      {/* ── Header ── */}
      <div className="sec-hd fi">
        <div className="sec-badge">{c.badge}</div>
        <h2 className="sec-title" style={{color:"var(--white)"}}>{c.title}</h2>
        <div className="divider" />
        <p className="sec-sub">{c.sub}</p>
      </div>

      {/* ── Experience cards grid ── */}
      <div className="e-grid fi" style={{marginBottom:"3px"}}>
        {cards.map(card => (
          <div className="e-card" key={card.key}>
            <div className="e-card-bg">
              <img src={card.img} alt={card.info.title} loading="lazy"
                onError={e => { e.target.src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80"; }}
              />
            </div>
            <div className="e-card-overlay" />
            <div className="e-card-body">
              <div className="e-tag">{card.info.tag}</div>
              <h3 className="e-title">{card.info.title}</h3>
              <p className="e-desc">{card.info.desc}</p>
              <a href="#contact" className="e-cta">{card.info.cta} →</a>
            </div>
          </div>
        ))}
      </div>

      {/* ── Athens 1 gallery ── */}
      <div style={{maxWidth:"1300px",margin:"0 auto 4rem"}}>
        <div style={{padding:"2rem 0 1rem"}}>
          <div className="sec-badge" style={{justifyContent:"flex-start",marginBottom:"0.5rem"}}>{c.athens1.tag}</div>
          <div style={{fontFamily:"var(--display)",fontSize:"1.4rem",color:"var(--white)",marginBottom:"1.5rem"}}>{c.athens1.title}</div>
        </div>
        <div className="gallery-strip">
          {athens1Gallery.map((src,i) => (
            <div key={i} className="g-img"><img src={src} alt="" loading="lazy" /></div>
          ))}
        </div>
      </div>

      {/* ── Athens 2 gallery ── */}
      <div style={{maxWidth:"1300px",margin:"0 auto 6rem"}}>
        <div style={{padding:"2rem 0 1rem"}}>
          <div className="sec-badge" style={{justifyContent:"flex-start",marginBottom:"0.5rem"}}>{c.athens2.tag}</div>
          <div style={{fontFamily:"var(--display)",fontSize:"1.4rem",color:"var(--white)",marginBottom:"1.5rem"}}>{c.athens2.title}</div>
        </div>
        <div className="gallery-strip">
          {athens2Gallery.map((src,i) => (
            <div key={i} className="g-img"><img src={src} alt="" loading="lazy" /></div>
          ))}
        </div>
      </div>

      {/* ── YACHTING SECTION ── */}
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div className="sec-hd fi" style={{marginBottom:"3rem"}}>
          <div className="sec-badge">Private Yachting</div>
          <h2 className="sec-title" style={{color:"var(--white)"}}>Our Fleet</h2>
          <div className="divider" />
          <p className="sec-sub">Three exceptional vessels — one unforgettable Aegean experience. Departing from Agios Kosmas Marina, Athens.</p>
        </div>

        {/* Fleet cards — clean minimal row */}
        <div className="fleet-grid">
          {yachts.map(y => (
            <div className="fleet-card" key={y.name}>
              <div className="fleet-img">
                <img src={y.img} alt={y.name} loading="lazy"
                  onError={e => { e.target.src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80"; }}
                />
                <div className="fleet-tag">{y.tag}</div>
              </div>
              <div className="fleet-info">
                <div className="fleet-label">Private Charter</div>
                <h3 className="fleet-name">{y.name}</h3>
                <p className="fleet-model">{y.model}</p>
                <div className="fleet-specs">
                  {y.specs.slice(0, 2).map(s => (
                    <div key={s.label}>
                      <span className="fleet-spec-label">{s.label}</span>
                      <span className="fleet-spec-val">{s.val}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="p-link" style={{color:"var(--gold)",borderColor:"var(--gold)"}}>Request Charter →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="fleet-origin">
          <div className="fleet-origin-tag">Departing from</div>
          <div className="fleet-origin-name">Agios Kosmas Marina, Athens</div>
          <div className="fleet-origin-sub">Athenian Riviera · Argosaronic Gulf · Cyclades · Custom Itineraries</div>
        </div>
      </div>
    </section>
  );
}
