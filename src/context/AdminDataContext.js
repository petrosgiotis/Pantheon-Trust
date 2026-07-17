import { createContext, useContext, useState, useEffect } from "react";
import { brokerageListings as defaultListings } from "../data/brokerage";
import { constructionProjects as defaultProjects } from "../data/constructions";
import { completedProjects as defaultCompleted } from "../data/completed";

const STORAGE_KEYS = {
  listings:          "ptg_listings",
  projects:          "ptg_projects",
  completedProjects: "ptg_completed",
  adminAuth:         "ptg_admin_auth",
};

const AdminDataContext = createContext(null);

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}


export function AdminDataProvider({ children }) {
  const [listings,          setListings]          = useState(() => load(STORAGE_KEYS.listings,          defaultListings));
  const [projects,          setProjects]          = useState(() => load(STORAGE_KEYS.projects,          defaultProjects));
  const [completedProjects, setCompletedProjects] = useState(() => load(STORAGE_KEYS.completedProjects, defaultCompleted));
  const [isAdmin,           setIsAdmin]           = useState(() => sessionStorage.getItem(STORAGE_KEYS.adminAuth) === "1");

  useEffect(() => { save(STORAGE_KEYS.listings,          listings);          }, [listings]);
  useEffect(() => { save(STORAGE_KEYS.projects,          projects);          }, [projects]);
  useEffect(() => { save(STORAGE_KEYS.completedProjects, completedProjects); }, [completedProjects]);

  function login(password) {
    if (password === process.env.REACT_APP_ADMIN_PASS || password === "pantheon2026") {
      sessionStorage.setItem(STORAGE_KEYS.adminAuth, "1");
      setIsAdmin(true);
      return true;
    }
    return false;
  }

  function logout() {
    sessionStorage.removeItem(STORAGE_KEYS.adminAuth);
    setIsAdmin(false);
  }

  // ── Listings ──
  function addListing(item)    { setListings(p => [...p, { ...item, id: uid() }]); }
  function updateListing(item) { setListings(p => p.map(x => x.id === item.id ? item : x)); }
  function deleteListing(id)   { setListings(p => p.filter(x => x.id !== id)); }

  // ── Active Projects ──
  function addProject(item)    { setProjects(p => [...p, { ...item, id: uid() }]); }
  function updateProject(item) { setProjects(p => p.map(x => x.id === item.id ? item : x)); }
  function deleteProject(id)   { setProjects(p => p.filter(x => x.id !== id)); }

  // ── Completed Projects ──
  function addCompleted(item)    { setCompletedProjects(p => [...p, { ...item, id: uid() }]); }
  function updateCompleted(item) { setCompletedProjects(p => p.map(x => x.id === item.id ? item : x)); }
  function deleteCompleted(id)   { setCompletedProjects(p => p.filter(x => x.id !== id)); }

  return (
    <AdminDataContext.Provider value={{
      listings,          addListing,    updateListing,    deleteListing,
      projects,          addProject,    updateProject,    deleteProject,
      completedProjects, addCompleted,  updateCompleted,  deleteCompleted,
      isAdmin, login, logout,
    }}>
      {children}
    </AdminDataContext.Provider>
  );
}

export function useAdminData() {
  return useContext(AdminDataContext);
}
