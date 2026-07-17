import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  return (
    <section className="sec sec-dark" id="contact">
      <div className="contact-wrap">
        <div className="contact-info fi">
          <div className="sec-badge" style={{justifyContent:"flex-start"}}>{c.badge}</div>
          <h3>{c.title}</h3>
          <p>{c.sub}</p>
          <div className="c-detail">
            <div className="c-detail-item">
              <strong>Address</strong>{c.addr}
            </div>
            <div className="c-detail-item">
              <strong>Email</strong>{c.mail}
            </div>
            <div className="c-detail-item">
              <strong>Phone</strong>{c.tel}
            </div>
            <div className="c-detail-item">
              <strong>Sectors</strong>
              Real Estate · Construction · Tourism
            </div>
          </div>
        </div>
        <div className="contact-form fi fi2">
          <div className="f-row">
            <div className="f-field"><input type="text" placeholder={c.name} /></div>
            <div className="f-field"><input type="email" placeholder={c.email} /></div>
          </div>
          <div className="f-field"><input type="tel" placeholder={c.phone} /></div>
          <div className="f-field"><textarea rows={6} placeholder={c.msg} /></div>
          <button className="btn-g" style={{alignSelf:"flex-start"}}>{c.send}</button>
        </div>
      </div>
    </section>
  );
}
