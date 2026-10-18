import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  getEvents,
  updateEvent,
  createEvent,
  deleteEvent,
  uploadEventImage,
  getAnnouncements,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from "../services/eventsService";

const ADMIN_PASSCODE = "Burj@2026";
const AUTH_KEY = "cef_admin_authorized_v1";

const EVENT_TYPES = [
  "Guidance",
  "Competition",
  "Social",
  "Guest Session",
  "Technical",
  "Flagship",
  "Conference",
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December", "TBD"
];

/* ─── SVG Icons ──────────────────────────────────────────────────────── */
const LockIcon = () => (
  <svg className="w-8 h-8 text-brand-cardinal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const EditIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const UploadIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return typeof window !== "undefined" && typeof sessionStorage !== "undefined"
        ? sessionStorage.getItem(AUTH_KEY) === "true"
        : false;
    } catch {
      return false;
    }
  });
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState("events"); // 'events' | 'announcements'

  // Data states
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // Editing state for event
  const [editingEvent, setEditingEvent] = useState(null); // null or event object
  const [isNewEvent, setIsNewEvent] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // New announcement modal
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [isNewAnnouncement, setIsNewAnnouncement] = useState(false);

  const fileInputRef = useRef(null);

  const showToast = (msg, type = "success") => {
    setToastMessage({ text: msg, type });
    setTimeout(() => setToastMessage(null), 3500);
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [eventsData, announcementsData] = await Promise.all([
        getEvents(),
        getAnnouncements(),
      ]);
      setEvents(eventsData);
      setAnnouncements(announcementsData);
    } catch (err) {
      console.error(err);
      showToast("Error loading data from Supabase", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === ADMIN_PASSCODE) {
      sessionStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Invalid Passcode. Access denied.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
    setPasscode("");
  };

  // ─── Image Upload via Supabase Storage ────────────────────────────────
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showToast("Please upload a valid image file", "error");
      return;
    }

    setUploadingImage(true);
    try {
      const publicUrl = await uploadEventImage(file);
      setEditingEvent((prev) => ({ ...prev, img: publicUrl }));
      showToast("Image uploaded to Supabase Storage!");
    } catch (err) {
      console.error("Image upload failed:", err);
      showToast(`Upload failed: ${err.message || "Unknown error"}`, "error");
    } finally {
      setUploadingImage(false);
    }
  };

  // ─── Save Event ───────────────────────────────────────────────────────
  const handleSaveEvent = async (e) => {
    e.preventDefault();
    if (!editingEvent.name?.trim()) {
      showToast("Event title is required", "error");
      return;
    }
    if (!editingEvent.img?.trim()) {
      showToast("Event image URL is required", "error");
      return;
    }

    setSaveLoading(true);
    try {
      if (isNewEvent) {
        const created = await createEvent({
          ...editingEvent,
          orderIndex: events.length,
        });
        setEvents((prev) => [...prev, created]);
        showToast("New event created in Supabase!");
      } else {
        const updated = await updateEvent(editingEvent.id, editingEvent);
        setEvents((prev) =>
          prev.map((item) => (item.id === updated.id ? updated : item))
        );
        showToast("Event updated successfully!");
      }
      setEditingEvent(null);
    } catch (err) {
      console.error(err);
      showToast(`Save error: ${err.message}`, "error");
    } finally {
      setSaveLoading(false);
    }
  };

  // ─── Delete Event ─────────────────────────────────────────────────────
  const handleDeleteEvent = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return;
    try {
      await deleteEvent(id);
      setEvents((prev) => prev.filter((item) => item.id !== id));
      showToast("Event removed from Supabase");
    } catch (err) {
      console.error(err);
      showToast(`Delete failed: ${err.message}`, "error");
    }
  };

  // ─── Save Announcement ────────────────────────────────────────────────
  const handleSaveAnnouncement = async (e) => {
    e.preventDefault();
    try {
      if (isNewAnnouncement) {
        const created = await createAnnouncement(editingAnnouncement);
        setAnnouncements((prev) => [created, ...prev]);
        showToast("Announcement published!");
      } else {
        const updated = await updateAnnouncement(
          editingAnnouncement.id,
          editingAnnouncement
        );
        setAnnouncements((prev) =>
          prev.map((item) => (item.id === updated.id ? updated : item))
        );
        showToast("Announcement updated!");
      }
      setEditingAnnouncement(null);
    } catch (err) {
      console.error(err);
      showToast(`Announcement error: ${err.message}`, "error");
    }
  };

  const handleDeleteAnnouncement = async (id) => {
    if (!window.confirm("Delete this announcement?")) return;
    try {
      await deleteAnnouncement(id);
      setAnnouncements((prev) => prev.filter((a) => a.id !== id));
      showToast("Announcement deleted");
    } catch (err) {
      showToast(`Error: ${err.message}`, "error");
    }
  };

  // ─── Filter Events ────────────────────────────────────────────────────
  const filteredEvents = events.filter((ev) => {
    const matchesSearch =
      ev.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.desc?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.type?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "All" || ev.type === typeFilter;
    const matchesStatus = statusFilter === "All" || ev.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  // ─── 1. SECURITY LOCK SCREEN ──────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center px-4 py-16 bg-background">
        <div className="w-full max-w-md p-8 rounded-token-lg bg-card border border-border shadow-elevation-2">
          <div className="w-14 h-14 mx-auto mb-6 rounded-token-md bg-brand-cardinal/10 flex items-center justify-center border border-brand-cardinal/20">
            <LockIcon />
          </div>
          <div className="text-center mb-8">
            <h1 className="text-2xl font-serif font-bold text-foreground tracking-tight">
              CEF Administration
            </h1>
            <p className="text-xs text-muted-foreground mt-1.5 uppercase tracking-widest font-mono">
              Restricted Access Portal
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-2">
                Security Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setAuthError("");
                }}
                placeholder="Enter admin passcode"
                autoFocus
                className="w-full px-4 py-3 rounded-token-sm bg-background border border-border text-foreground text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-cardinal/40 focus:border-brand-cardinal transition-all placeholder:text-muted-foreground/50"
              />
              {authError && (
                <p className="mt-2 text-xs text-brand-cardinal font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cardinal animate-ping" />
                  {authError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-token-sm bg-brand-cardinal hover:bg-brand-cardinal/90 text-white font-medium text-sm transition-all shadow-sm active:scale-[0.99] flex items-center justify-center gap-2"
            >
              Authenticate Portal
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-[11px] text-muted-foreground">
              Civil Engineering Forum • IIT Delhi • 2026
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ─── 2. AUTHENTICATED DASHBOARD ───────────────────────────────────────
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Toast alert */}
      {toastMessage && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-token-sm shadow-elevation-3 text-sm flex items-center gap-2 border transition-all animate-in slide-in-from-bottom-5 ${
            toastMessage.type === "error"
              ? "bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400"
              : "bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400"
          }`}
        >
          {toastMessage.type === "error" ? "✕" : <CheckIcon />}
          <span className="font-medium">{toastMessage.text}</span>
        </div>
      )}

      {/* Admin Top Banner */}
      <header className="border-b border-border bg-card/60 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-serif font-bold text-foreground">
                CEF Administration Console
              </h1>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Supabase Connected
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              Live Cloud Sync • Project: <span className="font-mono text-foreground font-medium">jasufjmqtidcwlbdrydr</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/events"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-token-xs border border-border text-xs font-medium text-foreground hover:bg-muted transition-colors inline-flex items-center gap-1.5"
            >
              <span>View Public Events</span>
              <span className="text-[10px]">↗</span>
            </Link>

            <button
              onClick={() => {
                setIsNewEvent(true);
                setEditingEvent({
                  name: "",
                  img: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=2070&auto=format&fit=crop",
                  desc: "",
                  month: "June",
                  year: "2026",
                  type: "Technical",
                  date: new Date().toISOString().split("T")[0],
                  timeline: "TBD",
                  status: "upcoming",
                  rsvpCount: 0,
                });
              }}
              className="px-3.5 py-1.5 rounded-token-xs bg-brand-cardinal text-white text-xs font-medium hover:bg-brand-cardinal/90 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <PlusIcon />
              <span>Add Event</span>
            </button>

            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-token-xs border border-border text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              Lock & Exit
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6 border-t border-border/40 text-xs font-mono">
          <button
            onClick={() => setActiveTab("events")}
            className={`py-3 border-b-2 transition-all ${
              activeTab === "events"
                ? "border-brand-cardinal text-brand-cardinal font-bold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Events Manager ({events.length})
          </button>
          <button
            onClick={() => setActiveTab("announcements")}
            className={`py-3 border-b-2 transition-all ${
              activeTab === "announcements"
                ? "border-brand-cardinal text-brand-cardinal font-bold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Live Announcements ({announcements.length})
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {loading ? (
          <div className="py-24 text-center">
            <div className="w-8 h-8 border-2 border-brand-cardinal border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-sm font-mono text-muted-foreground">
              Loading records from Supabase...
            </p>
          </div>
        ) : activeTab === "events" ? (
          <div>
            {/* Filter and Search Bar */}
            <div className="bg-card border border-border rounded-token-md p-4 mb-8 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="relative w-full md:w-80">
                <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search events by title or description..."
                  className="w-full pl-9 pr-3 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-cardinal"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {/* Type Filter */}
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-2.5 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal"
                >
                  <option value="All">All Categories</option>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>

                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-2.5 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal"
                >
                  <option value="All">All Statuses</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                  <option value="ongoing">Ongoing</option>
                </select>

                <button
                  onClick={loadData}
                  title="Reload from Supabase"
                  className="p-2 rounded-token-xs border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  ↺
                </button>
              </div>
            </div>

            {/* Event Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((ev) => (
                <div
                  key={ev.id}
                  className="group bg-card border border-border rounded-token-md overflow-hidden shadow-sm hover:shadow-elevation-2 transition-all flex flex-col"
                >
                  {/* Event Image with Quick Edit Button */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                    <img
                      src={ev.img}
                      alt={ev.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=2070&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-token-xs text-[10px] font-mono font-medium uppercase tracking-wide bg-black/60 text-white backdrop-blur-sm">
                        {ev.type}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-token-xs text-[10px] font-mono font-medium uppercase tracking-wide backdrop-blur-sm ${
                          ev.status === "past"
                            ? "bg-muted/80 text-muted-foreground"
                            : "bg-emerald-500/80 text-white"
                        }`}
                      >
                        {ev.status}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setIsNewEvent(false);
                        setEditingEvent({ ...ev });
                      }}
                      className="absolute bottom-2.5 right-2.5 px-3 py-1.5 rounded-token-xs bg-black/75 hover:bg-black text-white text-xs font-medium backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 shadow"
                    >
                      <EditIcon />
                      <span>Edit Event</span>
                    </button>
                  </div>

                  {/* Event Details */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-1.5">
                        <span>{ev.timeline || ev.date || "Date TBD"}</span>
                        <span>{ev.rsvpCount || 0} RSVPs</span>
                      </div>
                      <h3 className="font-serif font-bold text-foreground text-base line-clamp-1 group-hover:text-brand-cardinal transition-colors">
                        {ev.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                        {ev.desc || "No description provided."}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-muted-foreground">
                        ID: #{ev.id}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setIsNewEvent(false);
                            setEditingEvent({ ...ev });
                          }}
                          className="px-2.5 py-1 rounded-token-xs text-xs font-medium text-brand-cardinal hover:bg-brand-cardinal/10 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteEvent(ev.id, ev.name)}
                          className="p-1 rounded-token-xs text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-colors"
                          title="Delete Event"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="py-20 text-center border border-dashed border-border rounded-token-md bg-card/30">
                <p className="text-sm font-mono text-muted-foreground">
                  No events found matching your criteria.
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Dynamic Announcements Tab */
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-serif font-bold text-foreground">
                  Website Announcements & Dynamic Tickers
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Publish updates, registrations, or breaking news displayed across the site.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsNewAnnouncement(true);
                  setEditingAnnouncement({
                    title: "",
                    content: "",
                    badge: "Announcement",
                    link: "",
                    isActive: true,
                  });
                }}
                className="px-3.5 py-2 rounded-token-xs bg-brand-cardinal text-white text-xs font-medium hover:bg-brand-cardinal/90 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <PlusIcon />
                <span>New Announcement</span>
              </button>
            </div>

            <div className="space-y-4">
              {announcements.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-token-md bg-card border border-border flex items-start justify-between gap-4 shadow-sm"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-brand-cardinal/15 text-brand-cardinal">
                        {item.badge}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {new Date(item.created_at).toLocaleDateString()}
                      </span>
                      {item.is_active && (
                        <span className="w-2 h-2 rounded-full bg-emerald-500" title="Active" />
                      )}
                    </div>
                    <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {item.content}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-brand-cardinal hover:underline mt-1 inline-block"
                      >
                        Link: {item.link}
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setIsNewAnnouncement(false);
                        setEditingAnnouncement({ ...item, isActive: item.is_active });
                      }}
                      className="px-2 py-1 rounded text-xs text-muted-foreground hover:text-foreground"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteAnnouncement(item.id)}
                      className="p-1 rounded text-muted-foreground hover:text-red-500"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              ))}

              {announcements.length === 0 && (
                <div className="py-16 text-center border border-dashed border-border rounded-token-md bg-card/30">
                  <p className="text-xs font-mono text-muted-foreground">
                    No active announcements yet. Click "+ New Announcement" above to publish one.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* ─── 3. EVENT EDIT MODAL (Side-by-Side Live Preview) ─────────────── */}
      {editingEvent && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-card border border-border w-full max-w-4xl rounded-token-lg shadow-elevation-4 overflow-hidden my-8 animate-in zoom-in-95">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-muted/30">
              <div>
                <h2 className="text-lg font-serif font-bold text-foreground">
                  {isNewEvent ? "Create New Event" : `Edit Event: ${editingEvent.name || "Untitled"}`}
                </h2>
                <p className="text-xs text-muted-foreground">
                  Update title, image URL, category, or upload media to Supabase.
                </p>
              </div>
              <button
                onClick={() => setEditingEvent(null)}
                className="p-1.5 rounded-token-xs text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <CloseIcon />
              </button>
            </div>

            <form onSubmit={handleSaveEvent}>
              <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 max-h-[75vh] overflow-y-auto">
                {/* Left Column: Form Fields (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Event Title */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-1.5">
                      Event Title <span className="text-brand-cardinal">*</span>
                    </label>
                    <input
                      type="text"
                      value={editingEvent.name || ""}
                      onChange={(e) =>
                        setEditingEvent({ ...editingEvent, name: e.target.value })
                      }
                      placeholder="e.g. Annual Civil Conclave"
                      className="w-full px-3.5 py-2.5 rounded-token-xs bg-background border border-border text-foreground text-sm focus:outline-none focus:border-brand-cardinal"
                      required
                    />
                  </div>

                  {/* Image Source & Upload */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-1.5">
                      Event Image URL <span className="text-brand-cardinal">*</span>
                    </label>
                    <div className="space-y-2">
                      <input
                        type="url"
                        value={editingEvent.img || ""}
                        onChange={(e) =>
                          setEditingEvent({ ...editingEvent, img: e.target.value })
                        }
                        placeholder="https://images.unsplash.com/..."
                        className="w-full px-3.5 py-2.5 rounded-token-xs bg-background border border-border text-foreground text-xs font-mono focus:outline-none focus:border-brand-cardinal"
                        required
                      />

                      <div className="flex items-center gap-3">
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileUpload}
                          accept="image/*"
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          disabled={uploadingImage}
                          className="px-3 py-1.5 rounded-token-xs border border-border text-xs font-medium text-foreground hover:bg-muted transition-colors flex items-center gap-1.5"
                        >
                          <UploadIcon />
                          <span>
                            {uploadingImage ? "Uploading to Supabase..." : "Upload from Device"}
                          </span>
                        </button>
                        <span className="text-[11px] text-muted-foreground">
                          Directly uploads to <code className="font-mono text-foreground">event-images</code> bucket
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Category & Status */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-1.5">
                        Category / Type
                      </label>
                      <select
                        value={editingEvent.type || "Technical"}
                        onChange={(e) =>
                          setEditingEvent({ ...editingEvent, type: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal"
                      >
                        {EVENT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-1.5">
                        Status
                      </label>
                      <select
                        value={editingEvent.status || "upcoming"}
                        onChange={(e) =>
                          setEditingEvent({ ...editingEvent, status: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal"
                      >
                        <option value="upcoming">Upcoming</option>
                        <option value="past">Past</option>
                        <option value="ongoing">Ongoing</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeline & Date */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-1.5">
                        Timeline Label
                      </label>
                      <input
                        type="text"
                        value={editingEvent.timeline || ""}
                        onChange={(e) =>
                          setEditingEvent({ ...editingEvent, timeline: e.target.value })
                        }
                        placeholder="e.g. 10–14 July or 16-Jun"
                        className="w-full px-3 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-1.5">
                        Exact Date
                      </label>
                      <input
                        type="date"
                        value={editingEvent.date || ""}
                        onChange={(e) =>
                          setEditingEvent({ ...editingEvent, date: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal"
                      />
                    </div>
                  </div>

                  {/* Month & Year */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-1.5">
                        Month
                      </label>
                      <select
                        value={editingEvent.month || "June"}
                        onChange={(e) =>
                          setEditingEvent({ ...editingEvent, month: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal"
                      >
                        {MONTHS.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-1.5">
                        Year
                      </label>
                      <input
                        type="text"
                        value={editingEvent.year || "2026"}
                        onChange={(e) =>
                          setEditingEvent({ ...editingEvent, year: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal"
                      />
                    </div>
                  </div>

                  {/* Attendees RSVP */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-1.5">
                      RSVP / Attendees Count
                    </label>
                    <input
                      type="number"
                      value={editingEvent.rsvpCount ?? 0}
                      onChange={(e) =>
                        setEditingEvent({
                          ...editingEvent,
                          rsvpCount: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-3 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-foreground uppercase tracking-wider mb-1.5">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      value={editingEvent.desc || ""}
                      onChange={(e) =>
                        setEditingEvent({ ...editingEvent, desc: e.target.value })
                      }
                      placeholder="Brief synopsis of what will happen in this event..."
                      className="w-full px-3 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal leading-relaxed"
                    />
                  </div>
                </div>

                {/* Right Column: Live Card Preview (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
                      Live Preview (How it appears on /events)
                    </p>

                    <div className="rounded-token-md border border-border bg-card overflow-hidden shadow-elevation-2">
                      <div className="relative aspect-[16/9] w-full bg-muted overflow-hidden">
                        <img
                          src={editingEvent.img}
                          alt={editingEvent.name || "Preview"}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src =
                              "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=2070&auto=format&fit=crop";
                          }}
                        />
                        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-token-xs text-[10px] font-mono font-medium uppercase tracking-wide bg-black/60 text-white backdrop-blur-sm">
                            {editingEvent.type || "Technical"}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-1">
                          <span>{editingEvent.timeline || "TBD"}</span>
                          <span>{editingEvent.rsvpCount || 0} RSVPs</span>
                        </div>
                        <h4 className="font-serif font-bold text-foreground text-base line-clamp-1">
                          {editingEvent.name || "Untitled Event"}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
                          {editingEvent.desc || "Event synopsis will render here."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-3 rounded-token-xs bg-muted/40 border border-border text-[11px] text-muted-foreground font-mono">
                    ✓ Changes will immediately propagate to the public /events page and Supabase cloud table.
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-border bg-muted/20 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingEvent(null)}
                  className="px-4 py-2 rounded-token-xs border border-border text-xs font-medium text-foreground hover:bg-muted"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saveLoading}
                  className="px-5 py-2 rounded-token-xs bg-brand-cardinal text-white text-xs font-medium hover:bg-brand-cardinal/90 transition-all flex items-center gap-2 shadow-sm disabled:opacity-50"
                >
                  {saveLoading ? "Saving to Supabase..." : "Save to Cloud"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── 4. ANNOUNCEMENT EDIT MODAL ─────────────────────────────────── */}
      {editingAnnouncement && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-card border border-border w-full max-w-lg rounded-token-lg shadow-elevation-4 overflow-hidden p-6 animate-in zoom-in-95">
            <h3 className="text-base font-serif font-bold text-foreground mb-4">
              {isNewAnnouncement ? "Create Announcement" : "Edit Announcement"}
            </h3>

            <form onSubmit={handleSaveAnnouncement} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-medium text-foreground mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={editingAnnouncement.title || ""}
                  onChange={(e) =>
                    setEditingAnnouncement({
                      ...editingAnnouncement,
                      title: e.target.value,
                    })
                  }
                  required
                  placeholder="e.g. CEF Conclave 2026 Registrations Open"
                  className="w-full px-3 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-foreground mb-1">
                  Content
                </label>
                <textarea
                  rows={3}
                  value={editingAnnouncement.content || ""}
                  onChange={(e) =>
                    setEditingAnnouncement({
                      ...editingAnnouncement,
                      content: e.target.value,
                    })
                  }
                  required
                  placeholder="Detailed announcement copy..."
                  className="w-full px-3 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-foreground mb-1">
                    Badge Label
                  </label>
                  <input
                    type="text"
                    value={editingAnnouncement.badge || "Announcement"}
                    onChange={(e) =>
                      setEditingAnnouncement({
                        ...editingAnnouncement,
                        badge: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-foreground mb-1">
                    Link URL (Optional)
                  </label>
                  <input
                    type="text"
                    value={editingAnnouncement.link || ""}
                    onChange={(e) =>
                      setEditingAnnouncement({
                        ...editingAnnouncement,
                        link: e.target.value,
                      })
                    }
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-token-xs bg-background border border-border text-xs text-foreground focus:outline-none focus:border-brand-cardinal"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="isActiveToggle"
                  checked={editingAnnouncement.isActive ?? true}
                  onChange={(e) =>
                    setEditingAnnouncement({
                      ...editingAnnouncement,
                      isActive: e.target.checked,
                    })
                  }
                  className="accent-brand-cardinal"
                />
                <label htmlFor="isActiveToggle" className="text-xs text-foreground font-mono">
                  Active (visible across website tickers)
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button
                  type="button"
                  onClick={() => setEditingAnnouncement(null)}
                  className="px-4 py-2 rounded-token-xs border border-border text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-token-xs bg-brand-cardinal text-white text-xs font-medium hover:bg-brand-cardinal/90"
                >
                  Save Announcement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
