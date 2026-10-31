"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Calendar, Users, Phone, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { useLightbox } from "@/context/LightboxContext";

export default function ConventionHallPage() {
  const { openLightbox } = useLightbox();

  const [eventForm, setEventForm] = useState({
    name: "",
    phone: "",
    eventType: "Wedding & Reception",
    eventDate: "",
    guestCount: "250 - 500 Guests",
    arrangements: "Hall + Lawn Setup",
    budgetRange: "",
    requirements: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const hallPhotos = [
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      title: "Spacious Convention Hall Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
      title: "Banquet & Dining Area",
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      title: "Evening Lawn & Stage Illumination",
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      title: "Celebration Stage Setup",
    },
  ];

  const hallFacilities = [
    "Grand Indoor Air-Conditioned Convention Hall",
    "Adjoining Open-Air Green Party Lawns",
    "Elevated Stage with Backdrop Support",
    "Dedicated Dining / Buffet Service Zone",
    "Bride & Groom Changing Rooms / Family Suites",
    "Continuous Generator Power Backup",
    "Large Vehicle Parking Ground for Guests",
    "Direct Ground-Floor Access for Catering & Decor",
  ];

  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!eventForm.name.trim() || !eventForm.phone.trim()) {
      setFormError("Please provide your name and phone number.");
      return;
    }

    setSubmitting(true);
    let generatedRef = "";

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "convention-hall",
          name: eventForm.name,
          phone: eventForm.phone,
          date: eventForm.eventDate,
          guests: eventForm.guestCount,
          notes: `Event: ${eventForm.eventType} | Setup: ${eventForm.arrangements} | Budget: ${eventForm.budgetRange || "Flexible"} | Requirements: ${eventForm.requirements || "None"}`,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data?.enquiry?.id) {
          generatedRef = data.enquiry.id;
          setReferenceId(generatedRef);
        }
      }
    } catch {
      // Non-blocking fallback
    } finally {
      setSubmitting(false);
      setFormSuccess(true);
    }

    const message = `Hello Suraj Resorts & Convention Hall,
${generatedRef ? `[Reference: ${generatedRef}]\n` : ""}I would like to enquire about booking the Convention Hall.
• Host Name: ${eventForm.name}
• Phone: ${eventForm.phone}
• Event Type: ${eventForm.eventType}
• Preferred Event Date: ${eventForm.eventDate || "To be discussed"}
• Approximate Guests: ${eventForm.guestCount}
• Required Setup: ${eventForm.arrangements}
• Budget Range: ${eventForm.budgetRange || "Flexible"}
• Details: ${eventForm.requirements || "Please share hall availability and package pricing."}`;

    window.open(createWhatsAppUrl(message), "_blank");
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[460px] overflow-hidden flex items-center justify-center bg-[#12352B]">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
            alt="Suraj Convention Hall in Warangal Telangana"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A211B] via-[#0A211B]/50 to-black/60" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.3em] text-[#DFCA9E] font-medium mb-4"
          >
            GRAND VENUE &bull; TIMMAPUR, WARANGAL
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-serif text-4xl sm:text-6xl font-semibold leading-tight mb-4"
          >
            A Beautiful Setting for Important Moments.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl mx-auto"
          >
            Explore Suraj Resorts &amp; Convention Hall as a venue for your upcoming celebration. Designed for grand weddings, receptions, and memorable gatherings.
          </motion.p>

          <a
            href="#enquiry-form"
            className="inline-block bg-[#C6A56B] hover:bg-[#DFCA9E] text-[#163D32] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl hover:scale-105"
          >
            Enquire About the Venue
          </a>
        </div>
      </section>

      {/* Overview & Hall Facilities */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C6A56B] font-semibold">
                WARANGAL CELEBRATION DESTINATION
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#163D32] font-semibold mt-2 mb-6">
                Where Elegance Meets Warm Hospitality.
              </h2>
              <p className="text-[#202420]/75 text-sm sm:text-base font-light leading-relaxed mb-4">
                Suraj Convention Hall offers generous indoor floor space combined with landscaped outdoor event lawns. Situated in Timmapur, opposite Thallapadmavathi College Lane, the property provides the ideal balance of scenic resort calm and convenient road connectivity.
              </p>
              <p className="text-[#202420]/75 text-sm sm:text-base font-light leading-relaxed">
                Whether organizing a traditional South Indian wedding ceremony, a glittering sangeet evening, a milestone birthday party, or an executive conference, our versatile spaces adapt to your creative vision.
              </p>
            </div>

            <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#C6A56B]/25 shadow-lg">
              <h3 className="font-serif text-2xl text-[#163D32] font-semibold mb-6 flex items-center gap-2">
                <Sparkles size={20} className="text-[#C6A56B]" />
                <span>Venue Features &amp; Infrastructure</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#202420]/80">
                {hallFacilities.map((facility) => (
                  <div key={facility} className="flex items-start gap-2.5">
                    <Check size={16} className="text-[#C6A56B] shrink-0 mt-0.5" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Gallery of Hall */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
                  HALL &amp; GROUNDS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#163D32] font-semibold">
                  Venue Gallery
                </h3>
              </div>
              <p className="text-xs text-[#202420]/60">Click photo to enlarge</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hallPhotos.map((photo, idx) => (
                <div
                  key={photo.title}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md"
                  onClick={() => openLightbox(photo.src, idx, hallPhotos)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-serif opacity-0 group-hover:opacity-100 transition-opacity">
                    {photo.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Event Enquiry Form */}
      <section id="enquiry-form" className="py-20 sm:py-28 bg-[#0A211B] text-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-[#DFCA9E] text-xs uppercase tracking-[0.3em] font-semibold">
              EVENT INQUIRY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold mt-2 mb-4">
              Enquire About the Venue
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-light max-w-xl mx-auto">
              Tell us about your event requirements. Our events coordinator will contact you promptly to discuss dates, seating plans, and custom packages.
            </p>
          </div>

          <div className="bg-white text-[#202420] p-8 sm:p-12 rounded-3xl shadow-2xl border border-[#C6A56B]/30">
            {formSuccess ? (
              <div className="text-center space-y-5 py-6">
                <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle size={32} />
                </div>
                <h3 className="font-serif text-3xl text-[#163D32]">Enquiry Logged</h3>
                {referenceId && (
                  <div className="inline-flex items-center gap-2 bg-[#F8F6F0] border border-[#C6A56B]/40 px-4 py-2 rounded-full text-xs font-mono font-semibold text-[#163D32]">
                    <span>Reference No:</span>
                    <span className="text-[#C6A56B] tracking-wider">{referenceId}</span>
                  </div>
                )}
                <p className="text-sm text-[#202420]/75 max-w-md mx-auto">
                  Your event enquiry has been saved in our events desk system. Reach our event manager directly on WhatsApp or call our primary phone line.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#163D32] text-white px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold"
                  >
                    <Phone size={14} />
                    <span>Call Event Desk: {siteConfig.contact.phone}</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormSuccess(false);
                      setReferenceId(null);
                    }}
                    className="w-full sm:w-auto text-xs text-[#163D32] font-semibold underline px-4 py-2"
                  >
                    Submit Another Event Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEventSubmit} className="space-y-6">
                {formError && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                      Host / Organizer Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={eventForm.name}
                      onChange={(e) => setEventForm({ ...eventForm, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={eventForm.phone}
                      onChange={(e) => setEventForm({ ...eventForm, phone: e.target.value })}
                      placeholder="+91 98452 08013"
                      className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                      Event Type
                    </label>
                    <select
                      value={eventForm.eventType}
                      onChange={(e) => setEventForm({ ...eventForm, eventType: e.target.value })}
                      className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                    >
                      <option value="Wedding & Reception">Wedding & Reception</option>
                      <option value="Engagement Ceremony">Engagement / Sangeet</option>
                      <option value="Birthday Celebration">Birthday Party</option>
                      <option value="Family Function">Family Get-Together</option>
                      <option value="Corporate Event">Corporate Conference / Offsite</option>
                      <option value="Other Function">Other Private Celebration</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32] flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#C6A56B]" />
                      <span>Preferred Event Date</span>
                    </label>
                    <input
                      type="date"
                      value={eventForm.eventDate}
                      onChange={(e) => setEventForm({ ...eventForm, eventDate: e.target.value })}
                      className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32] flex items-center gap-1.5">
                      <Users size={14} className="text-[#C6A56B]" />
                      <span>Approx. Guest Count</span>
                    </label>
                    <input
                      type="text"
                      value={eventForm.guestCount}
                      onChange={(e) => setEventForm({ ...eventForm, guestCount: e.target.value })}
                      placeholder="e.g. 300 - 500 guests"
                      className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                      Required Setup
                    </label>
                    <select
                      value={eventForm.arrangements}
                      onChange={(e) => setEventForm({ ...eventForm, arrangements: e.target.value })}
                      className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                    >
                      <option value="Indoor Hall Only">Indoor Convention Hall Only</option>
                      <option value="Lawn Only">Outdoor Party Lawn Only</option>
                      <option value="Hall + Lawn Setup">Combined Hall & Lawn Setup</option>
                      <option value="Hall + Lawn + Rooms Package">Hall + Lawn + Guest Rooms Package</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                    Estimated Budget Range (Optional)
                  </label>
                  <input
                    type="text"
                    value={eventForm.budgetRange}
                    onChange={(e) => setEventForm({ ...eventForm, budgetRange: e.target.value })}
                    placeholder="e.g. Discuss on call or specific budget"
                    className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                    Additional Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={eventForm.requirements}
                    onChange={(e) => setEventForm({ ...eventForm, requirements: e.target.value })}
                    placeholder="Details about stage setup, catering arrangements, decoration preferences, or stay requirements for guests..."
                    className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white py-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-75"
                >
                  <MessageCircle size={18} />
                  <span>{submitting ? "Registering Request..." : "Send Venue Enquiry on WhatsApp"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

