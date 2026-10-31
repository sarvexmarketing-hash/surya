"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Search,
  Filter,
  Phone,
  MessageCircle,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  Trash2,
  RefreshCw,
  Sparkles,
  ShieldAlert,
  Building2,
  Waves,
  BedDouble,
  ArrowUpRight,
  Settings,
} from "lucide-react";
import { EnquiryRecord, PropertyStatus } from "@/lib/db";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import BrandLogo from "@/components/ui/BrandLogo";

export default function AdminPage() {
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [propertyStatus, setPropertyStatus] = useState<PropertyStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryRecord | null>(null);
  const [noteInput, setNoteInput] = useState("");
  const [savingNote, setSavingNote] = useState(false);
  const [showStatusSettings, setShowStatusSettings] = useState(false);

  // Fetch enquiries from API
  const fetchEnquiries = useCallback(async () => {
    setLoading(true);
    try {
      const url = new URL("/api/enquiries", window.location.origin);
      if (filterType !== "all") url.searchParams.set("type", filterType);
      if (filterStatus !== "all") url.searchParams.set("status", filterStatus);
      if (searchQuery.trim()) url.searchParams.set("search", searchQuery.trim());

      const res = await fetch(url.toString());
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.enquiries);
      }
    } catch (err) {
      console.error("Failed fetching enquiries:", err);
    } finally {
      setLoading(false);
    }
  }, [filterType, filterStatus, searchQuery]);

  // Fetch live property status
  const fetchPropertyStatus = async () => {
    try {
      const res = await fetch("/api/property-status");
      const data = await res.json();
      if (data.success) {
        setPropertyStatus(data.status);
      }
    } catch (err) {
      console.error("Failed fetching property status:", err);
    }
  };

  useEffect(() => {
    fetchEnquiries();
    fetchPropertyStatus();
  }, [fetchEnquiries]);

  // Update enquiry status
  const handleStatusChange = async (id: string, newStatus: EnquiryRecord["status"]) => {
    try {
      const res = await fetch("/api/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
        );
        if (selectedEnquiry?.id === id) {
          setSelectedEnquiry((prev) => (prev ? { ...prev, status: newStatus } : null));
        }
      }
    } catch (err) {
      console.error("Failed updating status:", err);
    }
  };

  // Save admin notes
  const handleSaveNote = async () => {
    if (!selectedEnquiry) return;
    setSavingNote(true);
    try {
      const res = await fetch("/api/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedEnquiry.id, notes: noteInput }),
      });
      const data = await res.json();
      if (data.success) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === selectedEnquiry.id ? { ...e, notes: noteInput } : e))
        );
        setSelectedEnquiry((prev) => (prev ? { ...prev, notes: noteInput } : null));
      }
    } catch (err) {
      console.error("Failed saving note:", err);
    } finally {
      setSavingNote(false);
    }
  };

  // Delete enquiry
  const handleDelete = async (id: string) => {
    if (!confirm(`Are you sure you want to delete enquiry ${id}?`)) return;
    try {
      const res = await fetch(`/api/enquiries?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
        if (selectedEnquiry?.id === id) setSelectedEnquiry(null);
      }
    } catch (err) {
      console.error("Failed deleting enquiry:", err);
    }
  };

  // Update property status
  const handleUpdateStatus = async (updates: Partial<PropertyStatus>) => {
    try {
      const res = await fetch("/api/property-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      const data = await res.json();
      if (data.success) {
        setPropertyStatus(data.status);
      }
    } catch (err) {
      console.error("Failed updating property status:", err);
    }
  };

  // WhatsApp reply link generator
  const getWhatsAppReplyUrl = (enquiry: EnquiryRecord) => {
    const rawDigits = enquiry.phone.replace(/[^0-9]/g, "");
    const formattedPhone = rawDigits.startsWith("91") ? rawDigits : `91${rawDigits}`;
    const text = encodeURIComponent(
      `Hello ${enquiry.name},\nThank you for contacting Suraj Resorts & Convention Hall regarding your enquiry [${enquiry.id}] for ${enquiry.enquiryType}.\n\nOur reservation desk in Timmapur, Warangal is reviewing your dates (${enquiry.requestedDate || "Proposed dates"}). How can we assist you with arrangements and pricing today?`
    );
    return `https://wa.me/${formattedPhone}?text=${text}`;
  };

  // KPIs
  const totalCount = enquiries.length;
  const newCount = enquiries.filter((e) => e.status === "New").length;
  const contactedCount = enquiries.filter((e) => e.status === "Contacted").length;
  const confirmedCount = enquiries.filter((e) => e.status === "Confirmed").length;

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Header Bar */}
        <div className="bg-[#0A211B] text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-[#C6A56B]/30 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <BrandLogo variant="light" showTagline={false} />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#DFCA9E] font-medium">
                  MANAGEMENT DESK
                </span>
                <span className="bg-[#25D366]/20 text-[#25D366] text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-[#25D366]/40">
                  Live Dynamic
                </span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-semibold mt-1">
                Enquiry &amp; Property Dashboard
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowStatusSettings(!showStatusSettings)}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs px-4 py-2.5 rounded-full border border-[#C6A56B]/40 transition-colors"
            >
              <Settings size={14} className="text-[#DFCA9E]" />
              <span>Resort Controls</span>
            </button>

            <button
              onClick={fetchEnquiries}
              className="inline-flex items-center gap-2 bg-[#C6A56B] hover:bg-[#E5D2AB] text-[#0A211B] font-bold text-xs px-5 py-2.5 rounded-full transition-all shadow"
            >
              <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
              <span>Refresh Enquiries</span>
            </button>
          </div>
        </div>

        {/* Live Property Status Controls (Accordion) */}
        {showStatusSettings && propertyStatus && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#C6A56B]/30 shadow-md mb-8">
            <h3 className="font-serif text-xl text-[#12352B] font-semibold mb-4 flex items-center gap-2">
              <Sparkles size={18} className="text-[#C6A56B]" />
              <span>Dynamic Resort Status &amp; Announcements</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#12352B] block mb-2">
                  Pool Status
                </label>
                <select
                  value={propertyStatus.poolStatus}
                  onChange={(e) =>
                    handleUpdateStatus({
                      poolStatus: e.target.value as PropertyStatus["poolStatus"],
                    })
                  }
                  className="w-full bg-[#FAF8F5] border border-[#202420]/20 rounded-xl px-4 py-2.5 text-sm text-[#202420]"
                >
                  <option value="Open Today">Open Today (Day Passes &amp; Guests)</option>
                  <option value="Closed for Private Event">Closed for Private Event</option>
                  <option value="Seasonal Maintenance">Seasonal Maintenance</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#12352B] block mb-2">
                  Operating Pool Hours
                </label>
                <input
                  type="text"
                  value={propertyStatus.poolHours}
                  onChange={(e) => handleUpdateStatus({ poolHours: e.target.value })}
                  className="w-full bg-[#FAF8F5] border border-[#202420]/20 rounded-xl px-4 py-2.5 text-sm text-[#202420]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#12352B] block mb-2">
                  Live Announcement
                </label>
                <input
                  type="text"
                  value={propertyStatus.specialAnnouncement}
                  onChange={(e) =>
                    handleUpdateStatus({ specialAnnouncement: e.target.value })
                  }
                  className="w-full bg-[#FAF8F5] border border-[#202420]/20 rounded-xl px-4 py-2.5 text-sm text-[#202420]"
                />
              </div>
            </div>
          </div>
        )}

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#C6A56B]/25 shadow-sm">
            <span className="text-[10.5px] uppercase tracking-wider text-[#202420]/60 font-medium">
              Total Enquiries
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#12352B] mt-1">
              {totalCount}
            </div>
            <p className="text-xs text-[#202420]/60 mt-1">Stored dynamically</p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-amber-300 shadow-sm bg-amber-50/40">
            <span className="text-[10.5px] uppercase tracking-wider text-amber-800 font-medium">
              New / Pending
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-900 mt-1">
              {newCount}
            </div>
            <p className="text-xs text-amber-700/80 mt-1">Awaiting staff response</p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-blue-200 shadow-sm bg-blue-50/30">
            <span className="text-[10.5px] uppercase tracking-wider text-blue-800 font-medium">
              Contacted
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-blue-900 mt-1">
              {contactedCount}
            </div>
            <p className="text-xs text-blue-700/80 mt-1">In communication</p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-emerald-200 shadow-sm bg-emerald-50/30">
            <span className="text-[10.5px] uppercase tracking-wider text-emerald-800 font-medium">
              Confirmed
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-900 mt-1">
              {confirmedCount}
            </div>
            <p className="text-xs text-emerald-700/80 mt-1">Finalized bookings</p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#C6A56B]/25 shadow-sm mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#202420]/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by customer name, phone, or ID (e.g. SR-2026)..."
              className="w-full bg-[#FAF8F5] border border-[#202420]/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#202420] focus:outline-none focus:border-[#12352B]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Filter size={14} className="text-[#C6A56B]" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-[#FAF8F5] border border-[#202420]/20 rounded-xl px-3 py-2 text-xs text-[#202420] focus:outline-none focus:border-[#12352B]"
              >
                <option value="all">All Facilities</option>
                <option value="Room Stay">Suites &amp; Room Stay</option>
                <option value="Swimming Pool">Swimming Pool</option>
                <option value="Convention Hall">Convention Hall &amp; Weddings</option>
                <option value="Private Party">Birthday &amp; Parties</option>
                <option value="Corporate">Corporate Events</option>
              </select>
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-[#FAF8F5] border border-[#202420]/20 rounded-xl px-3 py-2 text-xs text-[#202420] focus:outline-none focus:border-[#12352B]"
            >
              <option value="all">All Statuses</option>
              <option value="New">New Only</option>
              <option value="Contacted">Contacted</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Main Records Layout (List + Detail Pane) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Records Table / List */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#C6A56B]/25 shadow-lg overflow-hidden">
            <div className="p-5 border-b border-[#C6A56B]/20 flex items-center justify-between">
              <h2 className="font-serif text-lg text-[#12352B] font-semibold">
                Incoming Guest Enquiries ({enquiries.length})
              </h2>
              <span className="text-xs text-[#202420]/60">Select record to manage</span>
            </div>

            {loading ? (
              <div className="p-16 text-center text-[#202420]/60">
                <RefreshCw size={24} className="animate-spin mx-auto mb-3 text-[#C6A56B]" />
                <p className="text-xs uppercase tracking-wider">Loading dynamic records...</p>
              </div>
            ) : enquiries.length === 0 ? (
              <div className="p-16 text-center text-[#202420]/60">
                <ShieldAlert size={28} className="mx-auto mb-2 text-[#C6A56B]" />
                <p className="text-sm font-serif">No matching enquiries found.</p>
                <p className="text-xs text-[#202420]/50 mt-1">Try clearing filters or search terms.</p>
              </div>
            ) : (
              <div className="divide-y divide-[#C6A56B]/15 max-h-[700px] overflow-y-auto">
                {enquiries.map((enq) => {
                  const isSelected = selectedEnquiry?.id === enq.id;
                  return (
                    <div
                      key={enq.id}
                      onClick={() => {
                        setSelectedEnquiry(enq);
                        setNoteInput(enq.notes || "");
                      }}
                      className={`p-4 sm:p-5 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected
                          ? "bg-[#FAF8F5] border-l-4 border-l-[#C6A56B]"
                          : "hover:bg-black/[0.02]"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#12352B]">
                            {enq.id}
                          </span>
                          <span
                            className={`text-[9.5px] uppercase font-bold px-2 py-0.5 rounded-full ${
                              enq.status === "New"
                                ? "bg-amber-100 text-amber-800"
                                : enq.status === "Contacted"
                                ? "bg-blue-100 text-blue-800"
                                : enq.status === "Confirmed"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {enq.status}
                          </span>
                          <span className="text-[10px] text-[#202420]/45">
                            {new Date(enq.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>

                        <h4 className="font-serif text-base font-semibold text-[#202420]">
                          {enq.name}
                        </h4>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#202420]/75">
                          <span className="font-medium text-[#12352B]">{enq.enquiryType}</span>
                          {enq.requestedDate && (
                            <span className="flex items-center gap-1">
                              <Calendar size={11} className="text-[#C6A56B]" />
                              <span>{enq.requestedDate}</span>
                            </span>
                          )}
                          {enq.guestCount && (
                            <span className="flex items-center gap-1">
                              <Users size={11} className="text-[#C6A56B]" />
                              <span>{enq.guestCount}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Fast Action Buttons on row */}
                      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                        <a
                          href={getWhatsAppReplyUrl(enq)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all"
                          title="Reply on WhatsApp"
                        >
                          <MessageCircle size={15} />
                        </a>
                        <a
                          href={`tel:${enq.phone.replace(/[^0-9+]/g, "")}`}
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 rounded-full bg-[#12352B]/10 hover:bg-[#12352B] text-[#12352B] hover:text-white flex items-center justify-center transition-all"
                          title="Call Phone"
                        >
                          <Phone size={14} />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Selected Record Detail & Follow-up Panel */}
          <div className="lg:col-span-4">
            {selectedEnquiry ? (
              <div className="bg-white rounded-3xl border border-[#C6A56B]/30 shadow-xl p-6 sm:p-7 sticky top-28 space-y-5">
                <div className="flex items-start justify-between pb-4 border-b border-[#C6A56B]/20">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#C6A56B] tracking-wider block font-bold">
                      {selectedEnquiry.id} &bull; {selectedEnquiry.source}
                    </span>
                    <h3 className="font-serif text-2xl text-[#12352B] font-semibold mt-0.5">
                      {selectedEnquiry.name}
                    </h3>
                  </div>

                  <button
                    onClick={() => handleDelete(selectedEnquiry.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete record"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {/* Contact Actions Box */}
                <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#C6A56B]/20 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#202420]/60 uppercase tracking-wider">Phone</span>
                    <a
                      href={`tel:${selectedEnquiry.phone.replace(/[^0-9+]/g, "")}`}
                      className="font-bold text-[#12352B] hover:underline"
                    >
                      {selectedEnquiry.phone}
                    </a>
                  </div>

                  {selectedEnquiry.email && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#202420]/60 uppercase tracking-wider">Email</span>
                      <a href={`mailto:${selectedEnquiry.email}`} className="text-[#202420] hover:underline">
                        {selectedEnquiry.email}
                      </a>
                    </div>
                  )}

                  <div className="pt-2 flex gap-2">
                    <a
                      href={getWhatsAppReplyUrl(selectedEnquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-xl text-xs font-semibold shadow"
                    >
                      <MessageCircle size={14} />
                      <span>WhatsApp Reply</span>
                    </a>

                    <a
                      href={`tel:${selectedEnquiry.phone.replace(/[^0-9+]/g, "")}`}
                      className="w-full flex items-center justify-center gap-1.5 bg-[#12352B] hover:bg-[#0A211B] text-white py-2.5 rounded-xl text-xs font-semibold shadow"
                    >
                      <Phone size={14} />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="space-y-2 text-xs text-[#202420]/80">
                  <div className="flex justify-between py-1 border-b border-black/5">
                    <span className="text-[#202420]/60">Facility:</span>
                    <span className="font-semibold text-[#12352B]">{selectedEnquiry.enquiryType}</span>
                  </div>
                  {selectedEnquiry.requestedDate && (
                    <div className="flex justify-between py-1 border-b border-black/5">
                      <span className="text-[#202420]/60">Check-In / Event Date:</span>
                      <span className="font-medium">{selectedEnquiry.requestedDate}</span>
                    </div>
                  )}
                  {selectedEnquiry.checkOutDate && (
                    <div className="flex justify-between py-1 border-b border-black/5">
                      <span className="text-[#202420]/60">Check-Out Date:</span>
                      <span className="font-medium">{selectedEnquiry.checkOutDate}</span>
                    </div>
                  )}
                  {selectedEnquiry.guestCount && (
                    <div className="flex justify-between py-1 border-b border-black/5">
                      <span className="text-[#202420]/60">Guests:</span>
                      <span className="font-medium">{selectedEnquiry.guestCount}</span>
                    </div>
                  )}
                  {selectedEnquiry.roomsCount && (
                    <div className="flex justify-between py-1 border-b border-black/5">
                      <span className="text-[#202420]/60">Rooms Count:</span>
                      <span className="font-medium">{selectedEnquiry.roomsCount}</span>
                    </div>
                  )}
                  {selectedEnquiry.arrangements && (
                    <div className="flex justify-between py-1 border-b border-black/5">
                      <span className="text-[#202420]/60">Arrangement:</span>
                      <span className="font-medium">{selectedEnquiry.arrangements}</span>
                    </div>
                  )}
                </div>

                {/* Message Content */}
                {selectedEnquiry.message && (
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#202420]/60 block mb-1">
                      Guest Message:
                    </span>
                    <p className="text-xs bg-[#FAF8F5] p-3 rounded-xl border border-[#C6A56B]/20 text-[#202420]/85 whitespace-pre-wrap leading-relaxed">
                      {selectedEnquiry.message}
                    </p>
                  </div>
                )}

                {/* Status Selector */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#12352B] block mb-1.5">
                    Booking Status
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {(["New", "Contacted", "Confirmed", "Cancelled"] as EnquiryRecord["status"][]).map(
                      (st) => (
                        <button
                          key={st}
                          onClick={() => handleStatusChange(selectedEnquiry.id, st)}
                          className={`text-xs py-2 px-3 rounded-xl font-semibold border transition-all ${
                            selectedEnquiry.status === st
                              ? "bg-[#12352B] text-white border-[#12352B] shadow"
                              : "bg-white text-[#202420]/75 border-black/10 hover:bg-black/5"
                          }`}
                        >
                          {st}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Staff Follow-up Notes */}
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#12352B] block mb-1.5">
                    Internal Staff Notes
                  </span>
                  <textarea
                    rows={3}
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    placeholder="e.g. Quoted ₹X for hall + 400 meals, customer to pay deposit by Tuesday..."
                    className="w-full bg-[#FAF8F5] border border-[#202420]/20 rounded-xl p-3 text-xs text-[#202420] focus:outline-none focus:border-[#12352B] resize-none"
                  />
                  <button
                    onClick={handleSaveNote}
                    disabled={savingNote}
                    className="mt-2 w-full bg-[#C6A56B] hover:bg-[#E5D2AB] text-[#0A211B] text-xs font-bold py-2 rounded-xl transition-all shadow"
                  >
                    {savingNote ? "Saving Note..." : "Save Internal Note"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-[#C6A56B]/25 p-8 text-center text-[#202420]/60 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#12352B]/10 text-[#12352B] flex items-center justify-center mx-auto">
                  <ArrowUpRight size={20} className="text-[#C6A56B]" />
                </div>
                <h3 className="font-serif text-lg text-[#12352B] font-semibold">
                  Select an Enquiry
                </h3>
                <p className="text-xs font-light">
                  Click on any guest enquiry on the left to view full details, reply via WhatsApp, update booking status, and add staff notes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

