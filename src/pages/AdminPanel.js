import { useState } from "react";
import { useAdminData } from "../context/AdminDataContext";

// ── helpers ──────────────────────────────────────────────
function toArr(val) {
  if (Array.isArray(val)) return val;
  if (typeof val === "string") return val.split(",").map(s => s.trim()).filter(Boolean);
  return [];
}

function blankListing() {
  return { type: "Apartment", title: "", location: "", price: "", area: "", bedrooms: "", bathrooms: "", floor: "", year: "", tag: "For Sale", cover: "", desc: "", features: "" };
}
function blankProject() {
  return { type: "Villa Complex", title: "", location: "", status: "Under Construction", completion: "", units: "", cover: "", desc: "", features: "" };
}
function blankCompleted() {
  return { type: "Villa", title: "", location: "", year: "", area: "", cover: "", desc: "", features: "", client: "" };
}

function toListingData(f) {
  return { ...f, bedrooms: f.bedrooms ? Number(f.bedrooms) : null, bathrooms: f.bathrooms ? Number(f.bathrooms) : null, year: f.year ? Number(f.year) : null, features: toArr(f.features), gallery: f.cover ? [f.cover] : [] };
}
function toProjectData(f) {
  return { ...f, units: f.units ? Number(f.units) : null, features: toArr(f.features), gallery: f.cover ? [f.cover] : [], specs: [] };
}
function toCompletedData(f) {
  return { ...f, features: toArr(f.features), gallery: f.cover ? [f.cover] : [] };
}

function fromListing(l) {
  return { ...l, features: Array.isArray(l.features) ? l.features.join(", ") : l.features || "" };
}
function fromProject(p) {
  return { ...p, features: Array.isArray(p.features) ? p.features.join(", ") : p.features || "" };
}
function fromCompleted(c) {
  return { ...c, features: Array.isArray(c.features) ? c.features.join(", ") : c.features || "" };
}

// ── Field component ───────────────────────────────────────
function Field({ label, name, value, onChange, type = "text", options, required, hint }) {
  return (
    <div className="adm-field">
      <label className="adm-label">{label}{required && <span className="adm-req">*</span>}</label>
      {hint && <span className="adm-hint">{hint}</span>}
      {options ? (
        <select className="adm-input" name={name} value={value} onChange={onChange}>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : type === "textarea" ? (
        <textarea className="adm-input adm-textarea" name={name} value={value} onChange={onChange} rows={3} />
      ) : (
        <input className="adm-input" type={type} name={name} value={value || ""} onChange={onChange} />
      )}
    </div>
  );
}

// ── Listing Form ──────────────────────────────────────────
function ListingForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial ? fromListing(initial) : blankListing());
  const set = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  function submit(e) {
    e.preventDefault();
    if (!form.title || !form.location || !form.price) return alert("Title, location and price are required.");
    onSave(toListingData(form));
  }

  return (
    <form className="adm-form" onSubmit={submit}>
      <div className="adm-form-grid">
        <Field label="Type" name="type" value={form.type} onChange={set} options={["Apartment","Villa","Commercial","Land","Penthouse","Other"]} />
        <Field label="Tag" name="tag" value={form.tag} onChange={set} options={["For Sale","For Rent","Sold","Off Market","New"]} />
        <Field label="Title" name="title" value={form.title} onChange={set} required />
        <Field label="Location" name="location" value={form.location} onChange={set} required />
        <Field label="Price" name="price" value={form.price} onChange={set} required hint="e.g. € 480,000" />
        <Field label="Area" name="area" value={form.area} onChange={set} hint="e.g. 120 m²" />
        <Field label="Bedrooms" name="bedrooms" value={form.bedrooms} onChange={set} type="number" />
        <Field label="Bathrooms" name="bathrooms" value={form.bathrooms} onChange={set} type="number" />
        <Field label="Floor" name="floor" value={form.floor} onChange={set} hint="e.g. 4th" />
        <Field label="Year Built" name="year" value={form.year} onChange={set} type="number" />
        <Field label="Cover Image" name="cover" value={form.cover} onChange={set} hint="/images/filename.jpg or https://..." />
        <Field label="Features" name="features" value={form.features} onChange={set} hint="Comma-separated: Sea View, Parking, A/C" />
      </div>
      <Field label="Description" name="desc" value={form.desc} onChange={set} type="textarea" />
      <div className="adm-form-actions">
        <button type="button" className="adm-btn adm-btn--ghost" onClick={onCancel}>Cancel</button>
        <button type="submit" className="adm-btn adm-btn--primary">{initial ? "Save Changes" : "Add Listing"}</button>
      </div>
    </form>
  );
}

// ── Project Form ──────────────────────────────────────────
function ProjectForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial ? fromProject(initial) : blankProject());
  const set = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  function submit(e) {
    e.preventDefault();
    if (!form.title || !form.location) return alert("Title and location are required.");
    onSave(toProjectData(form));
  }

  return (
    <form className="adm-form" onSubmit={submit}>
      <div className="adm-form-grid">
        <Field label="Type" name="type" value={form.type} onChange={set} options={["Villa Complex","Urban Renovation","Residential","Commercial","Hotel","Mixed Use"]} />
        <Field label="Status" name="status" value={form.status} onChange={set} options={["Under Construction","Completed","Planning","On Hold"]} />
        <Field label="Title" name="title" value={form.title} onChange={set} required />
        <Field label="Location" name="location" value={form.location} onChange={set} required />
        <Field label="Completion" name="completion" value={form.completion} onChange={set} hint="e.g. Q4 2026 or 2025" />
        <Field label="Units" name="units" value={form.units} onChange={set} type="number" />
        <Field label="Cover Image" name="cover" value={form.cover} onChange={set} hint="/images/filename.jpg or https://..." />
        <Field label="Features" name="features" value={form.features} onChange={set} hint="Stone Exteriors, Private Pools, Sea Views" />
      </div>
      <Field label="Description" name="desc" value={form.desc} onChange={set} type="textarea" />
      <div className="adm-form-actions">
        <button type="button" className="adm-btn adm-btn--ghost" onClick={onCancel}>Cancel</button>
        <button type="submit" className="adm-btn adm-btn--primary">{initial ? "Save Changes" : "Add Project"}</button>
      </div>
    </form>
  );
}

// ── Completed Project Form ────────────────────────────────
function CompletedForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial ? fromCompleted(initial) : blankCompleted());
  const set = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  function submit(e) {
    e.preventDefault();
    if (!form.title || !form.location) return alert("Title and location are required.");
    onSave(toCompletedData(form));
  }

  return (
    <form className="adm-form" onSubmit={submit}>
      <div className="adm-form-grid">
        <Field label="Type" name="type" value={form.type} onChange={set} options={["Villa","Apartment","Commercial","Urban Renovation","Residential","Hotel","Mixed Use","Other"]} />
        <Field label="Title" name="title" value={form.title} onChange={set} required />
        <Field label="Location" name="location" value={form.location} onChange={set} required />
        <Field label="Year Completed" name="year" value={form.year} onChange={set} hint="e.g. 2024" />
        <Field label="Total Area" name="area" value={form.area} onChange={set} hint="e.g. 320 m²" />
        <Field label="Client / Context" name="client" value={form.client} onChange={set} hint="Private client, Developer, etc. (optional)" />
        <Field label="Cover Image" name="cover" value={form.cover} onChange={set} hint="/images/filename.jpg or https://..." />
        <Field label="Features / Highlights" name="features" value={form.features} onChange={set} hint="Rooftop Terrace, Sea View, Smart Home" />
      </div>
      <Field label="Description" name="desc" value={form.desc} onChange={set} type="textarea" />
      <div className="adm-form-actions">
        <button type="button" className="adm-btn adm-btn--ghost" onClick={onCancel}>Cancel</button>
        <button type="submit" className="adm-btn adm-btn--primary">{initial ? "Save Changes" : "Add Completed Project"}</button>
      </div>
    </form>
  );
}

// ── Item Row ──────────────────────────────────────────────
function ItemRow({ title, sub, cover, onEdit, onDelete }) {
  return (
    <div className="adm-row">
      <div className="adm-row-thumb">
        {cover ? <img src={cover} alt={title} onError={e => { e.target.style.display = "none"; }} /> : <div className="adm-row-noimg" />}
      </div>
      <div className="adm-row-info">
        <div className="adm-row-title">{title}</div>
        <div className="adm-row-sub">{sub}</div>
      </div>
      <div className="adm-row-actions">
        <button className="adm-btn adm-btn--sm adm-btn--ghost" onClick={onEdit}>Edit</button>
        <button className="adm-btn adm-btn--sm adm-btn--danger" onClick={() => { if (window.confirm(`Delete "${title}"?`)) onDelete(); }}>Delete</button>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────
function Section({ title, count, children, onAdd }) {
  return (
    <div className="adm-section">
      <div className="adm-section-head">
        <div>
          <h2 className="adm-section-title">{title}</h2>
          <span className="adm-section-count">{count} item{count !== 1 ? "s" : ""}</span>
        </div>
        <button className="adm-btn adm-btn--primary" onClick={onAdd}>+ Add New</button>
      </div>
      {children}
    </div>
  );
}

// ── Login ─────────────────────────────────────────────────
function AdminLogin() {
  const { login } = useAdminData();
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (!login(pw)) { setErr(true); setPw(""); }
  }

  return (
    <div className="adm-login">
      <div className="adm-login-box">
        <div className="adm-login-logo">Pantheon <em>Trust</em> Group</div>
        <p className="adm-login-sub">Admin Panel</p>
        <form onSubmit={submit}>
          <input
            className={`adm-input adm-login-input${err ? " adm-input--err" : ""}`}
            type="password"
            placeholder="Password"
            value={pw}
            onChange={e => { setPw(e.target.value); setErr(false); }}
            autoFocus
          />
          {err && <p className="adm-login-err">Incorrect password</p>}
          <button className="adm-btn adm-btn--primary adm-btn--full" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

// ── Dashboard ─────────────────────────────────────────────
function AdminDashboard() {
  const { listings,          addListing,    updateListing,    deleteListing,
          projects,          addProject,    updateProject,    deleteProject,
          completedProjects, addCompleted,  updateCompleted,  deleteCompleted,
          logout } = useAdminData();

  const [tab, setTab]       = useState("listings");
  const [editing, setEditing] = useState(null);

  function openAdd(section)        { setEditing({ section, item: null }); }
  function openEdit(section, item) { setEditing({ section, item }); }
  function closeForm()             { setEditing(null); }

  function saveItem(data) {
    if (editing.section === "listings") {
      editing.item ? updateListing(data) : addListing(data);
    } else if (editing.section === "projects") {
      editing.item ? updateProject(data) : addProject(data);
    } else {
      editing.item ? updateCompleted(data) : addCompleted(data);
    }
    closeForm();
  }

  const tabs = [
    { key: "listings",   label: "Brokerage Listings",    count: listings.length },
    { key: "projects",   label: "Construction Projects",  count: projects.length },
    { key: "completed",  label: "Completed Projects",     count: completedProjects.length },
  ];

  return (
    <div className="adm-wrap">
      {/* Header */}
      <div className="adm-header">
        <div className="adm-header-brand">
          <span className="adm-header-logo">PTG</span>
          <span className="adm-header-title">Admin Panel</span>
        </div>
        <div className="adm-header-right">
          <a href="/" className="adm-btn adm-btn--ghost adm-btn--sm">← View Site</a>
          <button className="adm-btn adm-btn--ghost adm-btn--sm" onClick={logout}>Sign Out</button>
        </div>
      </div>

      <div className="adm-body">
        {/* Sidebar */}
        <aside className="adm-sidebar">
          {tabs.map(t => (
            <button key={t.key} className={`adm-nav-item${tab === t.key ? " active" : ""}`} onClick={() => { setTab(t.key); closeForm(); }}>
              <span className="adm-nav-label">{t.label}</span>
              <span className="adm-nav-count">{t.count}</span>
            </button>
          ))}
          <div className="adm-sidebar-note">
            <strong>Images:</strong> Drop files into <code>public/images/</code> then reference them as <code>/images/filename.jpg</code>
          </div>
        </aside>

        {/* Main */}
        <main className="adm-main">
          {/* Inline form */}
          {editing && (
            <div className="adm-form-panel">
              <h3 className="adm-form-heading">
                {editing.item ? "Edit" : "Add New"}{" "}
                {editing.section === "listings" ? "Listing" : editing.section === "projects" ? "Project" : "Completed Project"}
              </h3>
              {editing.section === "listings"  && <ListingForm   initial={editing.item} onSave={saveItem} onCancel={closeForm} />}
              {editing.section === "projects"  && <ProjectForm   initial={editing.item} onSave={saveItem} onCancel={closeForm} />}
              {editing.section === "completed" && <CompletedForm initial={editing.item} onSave={saveItem} onCancel={closeForm} />}
            </div>
          )}

          {/* Listings */}
          {tab === "listings" && !editing && (
            <Section title="Brokerage Listings" count={listings.length} onAdd={() => openAdd("listings")}>
              {listings.length === 0 && <p className="adm-empty">No listings yet. Click + Add New to get started.</p>}
              {listings.map(l => (
                <ItemRow key={l.id} title={l.title} sub={`${l.location} · ${l.type} · ${l.price}`} cover={l.cover}
                  onEdit={() => openEdit("listings", l)} onDelete={() => deleteListing(l.id)} />
              ))}
            </Section>
          )}

          {/* Active Projects */}
          {tab === "projects" && !editing && (
            <Section title="Construction Projects" count={projects.length} onAdd={() => openAdd("projects")}>
              {projects.length === 0 && <p className="adm-empty">No projects yet. Click + Add New to get started.</p>}
              {projects.map(p => (
                <ItemRow key={p.id} title={p.title} sub={`${p.location} · ${p.type} · ${p.status}`} cover={p.cover}
                  onEdit={() => openEdit("projects", p)} onDelete={() => deleteProject(p.id)} />
              ))}
            </Section>
          )}

          {/* Completed Projects */}
          {tab === "completed" && !editing && (
            <Section title="Completed Projects" count={completedProjects.length} onAdd={() => openAdd("completed")}>
              {completedProjects.length === 0 && <p className="adm-empty">No completed projects yet. Click + Add New to add a finished project to your portfolio.</p>}
              {completedProjects.map(c => (
                <ItemRow key={c.id} title={c.title} sub={`${c.location} · ${c.type}${c.year ? ` · ${c.year}` : ""}`} cover={c.cover}
                  onEdit={() => openEdit("completed", c)} onDelete={() => deleteCompleted(c.id)} />
              ))}
            </Section>
          )}
        </main>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────
export default function AdminPanel() {
  const { isAdmin } = useAdminData();
  return isAdmin ? <AdminDashboard /> : <AdminLogin />;
}
