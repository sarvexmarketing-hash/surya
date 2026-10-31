"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  BedDouble,
  Building2,
  Waves,
  ArrowRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "@/data/site";
import { roomsData } from "@/data/rooms";
import { ScrollWords, ScrollLetters, ScrollReveal } from "@/components/ui/ScrollAnimations";

export default function DynamicEstimator() {
  const [activeTab, setActiveTab] = useState<"stay" | "convention" | "pool">("stay");

  // Stay state
  const [stayRoom, setStayRoom] = useState(roomsData[0]?.name || "Deluxe Resort Room");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [stayGuests, setStayGuests] = useState("2");
  const [stayRoomsCount, setStayRoomsCount] = useState(1);

  // Convention state
  const [eventType, setEventType] = useState("Wedding & Grand Reception");
  const [eventDate, setEventDate] = useState("");
  const [guestTier, setGuestTier] = useState("300 - 500 Guests");
  const [arrangement, setArrangement] = useState("Combined Hall & Party Lawn");

  // Pool state
  const [poolDate, setPoolDate] = useState("");
  const [poolGuests, setPoolGuests] = useState(4);

  // Form submission state
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Dynamic Nights Calculator
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    const days = Math.ceil(diff / (1000 * 3600 * 24));
    return days > 0 ? days : 1;
  };

  const nights = calculateNights();

  const handleDynamicEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactPhone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    setIsSubmitting(true);

    let enquiryType = "Resort Stay";
    let requestedDate = checkIn;
    let checkOutDate: string | undefined = checkOut;
    let guestCount = `${stayGuests} Guests`;
    let roomsCount: string | undefined = `${stayRoomsCount} Room(s)`;
    let arrangements = stayRoom;
    let message = `Stay Enquiry for ${stayRoom} | ${nights} night(s) | ${stayGuests} guests | ${stayRoomsCount} room(s)`;

    if (activeTab === "convention") {
      enquiryType = "Convention Hall & Event";
      requestedDate = eventDate;
      checkOutDate = undefined;
      guestCount = guestTier;
      roomsCount = undefined;
      arrangements = arrangement;
      message = `Event Enquiry for ${eventType} on ${eventDate || "Proposed date"} | Guest count: ${guestTier} | Setup: ${arrangement}`;
    } else if (activeTab === "pool") {
      enquiryType = "Swimming Pool Access";
      requestedDate = poolDate;
      checkOutDate = undefined;
      guestCount = `${poolGuests} Guests`;
      roomsCount = undefined;
      arrangements = "Swimming Pool Day Pass";
      message = `Pool Access Enquiry for ${poolGuests} guests on ${poolDate || "Proposed date"}`;
    }

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          phone: contactPhone,
          enquiryType,
          requestedDate,
          checkOutDate,
          guestCount,
          roomsCount,
          arrangements,
          message,
          source: "Estimator",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmittedRef(data.referenceId);

        // Open WhatsApp with reference number
        const waText = `Hello Suraj Resorts,
I just registered an enquiry on your website [Ref: ${data.referenceId}].
• Facility: ${enquiryType}
• Name: ${contactName}
• Phone: ${contactPhone}
• Details: ${message}

Please confirm availability and share tariff options.`;
        window.open(createWhatsAppUrl(waText), "_blank");
      }
    } catch (err) {
      console.error("Dynamic inquiry error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-24 sm:py-32 lg:py-36 border-t border-[#C6A56B]/25 relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header with Scroll-revealed Words and Letters */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-[#C6A56B] text-[11px] uppercase tracking-[0.3em] font-semibold mb-3">
              <Sparkles size={14} />
              <ScrollLetters text="DYNAMIC ESTIMATOR & INQUIRY" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#12352B] font-semibold leading-tight">
              <ScrollWords text="Plan Your Dates & Requirements." />
            </h2>
            <ScrollReveal delay={0.2} distance={15}>
              <p className="text-[#202420]/70 text-sm sm:text-base font-light mt-3 max-w-xl mx-auto">
                Select your requirements below to instantly calculate nights, configure options, and connect directly with our reservation desk in Timmapur, Warangal.
              </p>
            </ScrollReveal>
          </div>

          {/* Interactive Calculator Container with ScrollReveal */}
          <ScrollReveal
            distance={30}
            duration={0.8}
            className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#C6A56B]/30 shadow-xl"
          >
            {/* Tabs */}
            <div className="grid grid-cols-3 gap-2 p-1.5 bg-white rounded-2xl border border-[#C6A56B]/20 mb-8 max-w-md mx-auto">
              <button
                type="button"
                onClick={() => setActiveTab("stay")}
                className={`py-2 sm:py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === "stay"
                    ? "bg-[#12352B] text-white shadow"
                    : "text-[#202420]/75 hover:text-[#12352B]"
                }`}
              >
                <BedDouble size={14} />
                <span>Resort Stay</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("convention")}
                className={`py-2 sm:py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === "convention"
                    ? "bg-[#12352B] text-white shadow"
                    : "text-[#202420]/75 hover:text-[#12352B]"
                }`}
              >
                <Building2 size={14} />
                <span>Events</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("pool")}
                className={`py-2 sm:py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === "pool"
                    ? "bg-[#12352B] text-white shadow"
                    : "text-[#202420]/75 hover:text-[#12352B]"
                }`}
              >
                <Waves size={14} />
                <span>Pool Pass</span>
              </button>
            </div>

            {submittedRef ? (
              <div className="bg-white p-8 rounded-2xl border border-[#C6A56B]/40 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <span className="text-xs font-mono font-bold text-[#C6A56B] uppercase tracking-widest block">
                  Reference: {submittedRef}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#12352B] font-semibold">
                  Enquiry Registered Successfully
                </h3>
                <p className="text-sm text-[#202420]/75 max-w-md mx-auto">
                  Your custom requirements are saved on our reservation desk. Our team in Timmapur, Warangal will contact you at {contactPhone}.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setContactName("");
                      setContactPhone("");
                    }}
                    className="text-xs uppercase tracking-wider text-[#12352B] font-bold underline"
                  >
                    Configure Another Date / Requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDynamicEnquiry} className="space-y-6">
                {/* 1. Stay Configuration */}
                {activeTab === "stay" && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#12352B]">
                          Selected Room Category
                        </label>
                        <select
                          value={stayRoom}
                          onChange={(e) => setStayRoom(e.target.value)}
                          className="w-full bg-white border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420]"
                        >
                          {roomsData.map((r) => (
                            <option key={r.id} value={r.name}>
                              {r.name}
                            </option>
                          ))}
                          <option value="Family Suites + Rooms Block">Multiple Rooms (Wedding Block)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#12352B]">
                          Number of Rooms
                        </label>
                        <div className="flex items-center gap-3 bg-white border border-[#202420]/20 rounded-xl px-4 py-2">
                          <button
                            type="button"
                            onClick={() => setStayRoomsCount(Math.max(1, stayRoomsCount - 1))}
                            className="w-7 h-7 rounded-lg bg-[#FAF8F5] border border-black/10 text-base font-bold"
                          >
                            -
                          </button>
                          <span className="text-sm font-semibold text-[#12352B] flex-grow text-center">
                            {stayRoomsCount} Room(s)
                          </span>
                          <button
                            type="button"
                            onClick={() => setStayRoomsCount(stayRoomsCount + 1)}
                            className="w-7 h-7 rounded-lg bg-[#FAF8F5] border border-black/10 text-base font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#12352B] flex items-center gap-1.5">
                          <Calendar size={13} className="text-[#C6A56B]" />
                          <span>Check-in Date</span>
                        </label>
                        <input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full bg-white border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#12352B] flex items-center gap-1.5">
                          <Calendar size={13} className="text-[#C6A56B]" />
                          <span>Check-out Date</span>
                        </label>
                        <input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full bg-white border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420]"
                        />
                      </div>
                    </div>

                    {checkIn && checkOut && (
                      <div className="p-3 bg-white rounded-xl border border-[#C6A56B]/30 flex items-center justify-between text-xs">
                        <span className="text-[#202420]/75">Calculated Duration:</span>
                        <span className="font-serif font-bold text-[#12352B] text-sm">
                          {nights} Night(s) &bull; {stayRoomsCount} Room(s)
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. Convention Configuration */}
                {activeTab === "convention" && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#12352B]">
                          Occasion Type
                        </label>
                        <select
                          value={eventType}
                          onChange={(e) => setEventType(e.target.value)}
                          className="w-full bg-white border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420]"
                        >
                          <option value="Wedding & Grand Reception">Wedding &amp; Grand Reception</option>
                          <option value="Engagement & Sangeet">Engagement / Sangeet Ceremony</option>
                          <option value="Birthday & Milestone Party">Birthday / Anniversary Party</option>
                          <option value="Corporate Offsite & Conference">Corporate Offsite / Conference</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#12352B]">
                          Approximate Guests
                        </label>
                        <select
                          value={guestTier}
                          onChange={(e) => setGuestTier(e.target.value)}
                          className="w-full bg-white border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420]"
                        >
                          <option value="100 - 250 Guests">Intimate (100 - 250 Guests)</option>
                          <option value="250 - 500 Guests">Medium (250 - 500 Guests)</option>
                          <option value="500 - 1000+ Guests">Grand (500 - 1,000+ Guests)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#12352B] flex items-center gap-1.5">
                          <Calendar size={13} className="text-[#C6A56B]" />
                          <span>Event Date</span>
                        </label>
                        <input
                          type="date"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          className="w-full bg-white border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#12352B]">
                          Setup Preferences
                        </label>
                        <select
                          value={arrangement}
                          onChange={(e) => setArrangement(e.target.value)}
                          className="w-full bg-white border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420]"
                        >
                          <option value="Combined Hall & Party Lawn">Combined Hall &amp; Open Lawn</option>
                          <option value="Indoor AC Convention Hall Only">Indoor AC Convention Hall Only</option>
                          <option value="Party Lawn Only">Open Party Lawn Only</option>
                          <option value="Full Resort Buyout (Hall + Lawn + Rooms)">
                            Full Property Buyout (Hall + Lawn + All Rooms)
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Pool Configuration */}
                {activeTab === "pool" && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#12352B] flex items-center gap-1.5">
                          <Calendar size={13} className="text-[#C6A56B]" />
                          <span>Planned Visit Date</span>
                        </label>
                        <input
                          type="date"
                          value={poolDate}
                          onChange={(e) => setPoolDate(e.target.value)}
                          className="w-full bg-white border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#12352B] flex items-center gap-1.5">
                          <Users size={13} className="text-[#C6A56B]" />
                          <span>Number of Swimmers / Guests</span>
                        </label>
                        <div className="flex items-center gap-3 bg-white border border-[#202420]/20 rounded-xl px-4 py-2">
                          <button
                            type="button"
                            onClick={() => setPoolGuests(Math.max(1, poolGuests - 1))}
                            className="w-7 h-7 rounded-lg bg-[#FAF8F5] border border-black/10 text-base font-bold"
                          >
                            -
                          </button>
                          <span className="text-sm font-semibold text-[#12352B] flex-grow text-center">
                            {poolGuests} Guest(s)
                          </span>
                          <button
                            type="button"
                            onClick={() => setPoolGuests(poolGuests + 1)}
                            className="w-7 h-7 rounded-lg bg-[#FAF8F5] border border-black/10 text-base font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl border border-[#C6A56B]/30 text-xs text-[#202420]/75 flex items-center justify-between">
                      <span>Standard Pool Timing:</span>
                      <span className="font-semibold text-[#12352B]">7:00 AM – 7:00 PM Daily</span>
                    </div>
                  </div>
                )}

                {/* Contact Inputs */}
                <div className="pt-4 border-t border-[#C6A56B]/25 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#12352B]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full bg-white border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#12352B]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+91 98452 08013"
                      className="w-full bg-white border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420]"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#12352B] hover:bg-[#0A211B] text-white py-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={17} className="text-[#DFCA9E]" />
                    <span>
                      {isSubmitting ? "Submitting Request..." : "Submit Enquiry & Connect on WhatsApp"}
                    </span>
                  </button>
                  <p className="text-[11px] text-[#202420]/60 text-center mt-2.5">
                    Generates an instant tracking reference and routes directly to our Warangal reservation desk.
                  </p>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
