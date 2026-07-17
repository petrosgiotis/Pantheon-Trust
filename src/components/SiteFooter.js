import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="sf-brand">
          <div className="sf-logo">Pantheon <span>Trust</span> Group</div>
          <p className="sf-tagline">Athens, Greece · Real Estate · Construction · Management</p>
        </div>
        <div className="sf-cols">
          <div className="sf-col">
            <div className="sf-col-title">Partners</div>
            <Link to="/partners/brokerage">Brokerage</Link>
            <Link to="/partners/constructions">Constructions</Link>
            <Link to="/partners/management">Property Management</Link>
            <Link to="/partners/completed">Completed Projects</Link>
          </div>
          <div className="sf-col">
            <div className="sf-col-title">Contact</div>
            <a href="mailto:pantheontrustgroup@gmail.com">pantheontrustgroup@gmail.com</a>
            <a href="tel:+306982141504">+30 6982 141 504</a>
          </div>
        </div>
      </div>
      <div className="sf-bottom">
        <span>© {new Date().getFullYear()} Pantheon Trust Group. All rights reserved.</span>
      </div>
    </footer>
  );
}
