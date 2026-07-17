import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { AdminDataProvider } from "./context/AdminDataContext";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";

import Home              from "./pages/Home";
import PartnersHome      from "./pages/PartnersHome";
import Brokerage         from "./pages/Brokerage";
import BrokerageDetail   from "./pages/BrokerageDetail";
import Constructions     from "./pages/Constructions";
import ConstructionDetail from "./pages/ConstructionDetail";
import Management        from "./pages/Management";
import Completed         from "./pages/Completed";
import CompletedDetail   from "./pages/CompletedDetail";
import Yachting          from "./pages/Yachting";
import YachtDetail       from "./pages/YachtDetail";
import ContactPage       from "./pages/ContactPage";
import AdminPanel        from "./pages/AdminPanel";

import "./index.css";

function Layout({ children }) {
  return (
    <>
      <SiteNav />
      <main className="main-content">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AdminDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Partners */}
            <Route path="/partners" element={<Layout><PartnersHome /></Layout>} />
            <Route path="/partners/brokerage" element={<Layout><Brokerage /></Layout>} />
            <Route path="/partners/brokerage/:id" element={<Layout><BrokerageDetail /></Layout>} />
            <Route path="/partners/constructions" element={<Layout><Constructions /></Layout>} />
            <Route path="/partners/constructions/:id" element={<Layout><ConstructionDetail /></Layout>} />
            <Route path="/partners/management" element={<Layout><Management /></Layout>} />
            <Route path="/partners/completed" element={<Layout><Completed /></Layout>} />
            <Route path="/partners/completed/:id" element={<Layout><CompletedDetail /></Layout>} />
            <Route path="/partners/yachting" element={<Layout><Yachting /></Layout>} />
            <Route path="/partners/yachting/:id" element={<Layout><YachtDetail /></Layout>} />

            {/* Contact */}
            <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

            {/* Admin */}
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </BrowserRouter>
      </AdminDataProvider>
    </LanguageProvider>
  );
}
