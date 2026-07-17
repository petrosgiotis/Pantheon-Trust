import { useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function ContactPage() {
  const { lang } = useLang();
  const en = lang === "en";
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="sub-page">
      <div className="contact-page-inner">
        <div className="cp-info">
          <div className="sh-badge">{en ? "Get in Touch" : "Επικοινωνήστε"}</div>
          <h1 className="cp-title">{en ? <>Let's Build<br /><em>Something Together</em></> : <>Ας Χτίσουμε<br /><em>Κάτι Μαζί</em></>}</h1>
          <p className="cp-sub">{en ? "Whether you're a partner or a client — we're ready to help." : "Είτε είστε συνεργάτης είτε πελάτης, είμαστε εδώ."}</p>
          <div className="cp-details">
            <div className="cp-detail">
              <strong>{en ? "Address" : "Διεύθυνση"}</strong>
              <span>Athens, Greece</span>
            </div>
            <div className="cp-detail">
              <strong>Email</strong>
              <span>pantheontrustgroup@gmail.com</span>
            </div>
            <div className="cp-detail">
              <strong>{en ? "Phone" : "Τηλέφωνο"}</strong>
              <span>+30 6982 141 504</span>
            </div>
            <div className="cp-detail">
              <strong>{en ? "Sectors" : "Τομείς"}</strong>
              <span>Real Estate · Construction · Tourism</span>
            </div>
          </div>
        </div>

        <div className="cp-form-wrap">
          {sent ? (
            <div className="df-success">
              <div className="dfs-icon">✓</div>
              <h4>{en ? "Message Sent" : "Το μήνυμα εστάλη"}</h4>
              <p>{en ? "Thank you — we'll be in touch very soon." : "Ευχαριστούμε — θα επικοινωνήσουμε σύντομα."}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="df-form">
              <div className="df-row">
                <input type="text" placeholder={en ? "Full Name" : "Ονοματεπώνυμο"} required />
                <input type="email" placeholder={en ? "Email Address" : "Email"} required />
              </div>
              <input type="tel" placeholder={en ? "Phone Number" : "Τηλέφωνο"} />
              <textarea rows={6} placeholder={en ? "Your message..." : "Το μήνυμά σας..."} />
              <button type="submit" className="btn-g">{en ? "Send Message" : "Αποστολή"}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
