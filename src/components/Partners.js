import { useLang } from "../context/LanguageContext";

export default function Partners() {
  const { t } = useLang();
  const p = t.partners;

  return (
    <section className="sec sec-cream" id="partners">
      <div className="sec-hd fi">
        <div className="sec-badge">{p.badge}</div>
        <h2 className="sec-title">{p.title}</h2>
        <div className="divider" />
        <p className="sec-sub">{p.sub}</p>
      </div>

      {/* ── Brokerage ── */}
      <div style={{maxWidth:"1300px",margin:"0 auto 6rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"1.1fr 0.9fr",gap:"3px",alignItems:"stretch"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:"3px",height:"540px"}}>
            {["/images/brokerage1.jpg","/images/brokerage2.jpg","/images/brokerage3.jpg","/images/brokerage4.jpg"].map((src,i) => (
              <div key={i} className="c-img" style={{height:"auto"}}>
                <img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
              </div>
            ))}
          </div>
          <div style={{background:"var(--white)",padding:"4rem",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <div className="p-tag">{p.brokerage.tag}</div>
            <h3 className="p-title">{p.brokerage.title}</h3>
            <p className="p-desc">{p.brokerage.desc}</p>
            <a href="#contact" className="btn-n" style={{alignSelf:"flex-start"}}>{p.brokerage.cta}</a>
          </div>
        </div>
      </div>

      {/* ── Constructions ── */}
      <div style={{maxWidth:"1300px",margin:"0 auto 6rem"}}>
        <div style={{display:"grid",gridTemplateColumns:"0.9fr 1.1fr",gap:"3px",alignItems:"stretch"}}>
          <div style={{background:"var(--navy)",padding:"4rem",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <div className="p-tag">{p.constructions.tag}</div>
            <h3 className="p-title" style={{color:"var(--white)"}}>{p.constructions.title}</h3>
            <p className="p-desc" style={{color:"rgba(255,255,255,0.45)"}}>{p.constructions.desc}</p>
            <div style={{borderLeft:"2px solid var(--gold)",paddingLeft:"1.2rem",marginBottom:"2rem"}}>
              <div style={{fontSize:"0.56rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"0.3rem"}}>Current Project</div>
              <div style={{fontFamily:"var(--display)",fontSize:"1.05rem",color:"var(--white)"}}>{p.constructions.proj}</div>
              <div style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.35)",marginTop:"0.15rem"}}>{p.constructions.projSub}</div>
            </div>
            <a href="#contact" className="btn-g" style={{alignSelf:"flex-start"}}>{p.constructions.cta}</a>
          </div>
          <div style={{display:"grid",gridTemplateRows:"1fr 1fr",gap:"3px",height:"540px"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3px"}}>
              <div className="c-img" style={{height:"100%"}}><img src="/images/construction1.jpg" alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} /></div>
              <div className="c-img" style={{height:"100%"}}><img src="/images/construction2.jpg" alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} /></div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3px"}}>
              <div className="c-img" style={{height:"100%"}}><img src="/images/construction3.jpg" alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} /></div>
              <div className="c-img" style={{height:"100%"}}><img src="/images/construction4.jpg" alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} /></div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Property Management ── */}
      <div style={{maxWidth:"1300px",margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3px"}}>
          {[
            { label: p.mgmt.t1, bg:"var(--green)", img:"/images/airbnb1_balcony.jpg" },
            { label: p.mgmt.t2, bg:"var(--navy)", img:"/images/brokerage1.jpg" },
          ].map((item,i) => (
            <div key={i} style={{position:"relative",height:"360px",overflow:"hidden",cursor:"pointer"}}
              className="c-img">
              <img src={item.img} alt={item.label} style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} />
              <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(9,30,51,0.9),rgba(9,30,51,0.2))"}} />
              <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"2rem"}}>
                <div style={{fontSize:"0.58rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--gold)",marginBottom:"0.5rem"}}>{p.mgmt.tag}</div>
                <div style={{fontFamily:"var(--display)",fontSize:"1.5rem",color:"var(--white)",marginBottom:"1rem"}}>{item.label}</div>
                <a href="#contact" className="p-link" style={{color:"var(--gold)",borderColor:"var(--gold)"}}>{p.mgmt.cta} →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
