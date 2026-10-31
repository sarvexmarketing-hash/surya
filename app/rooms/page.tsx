"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Calendar, Users, Phone, MessageCircle, Info } from "lucide-react";
import { roomsData } from "@/data/rooms";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import { useLightbox } from "@/context/LightboxContext";

export default function RoomsPage() {
  const { openLightbox } = useLightbox();

  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    roomType: roomsData[0]?.name || "Deluxe Resort Room",
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomsCount: "1",
    specialRequests: "",
  });

  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!bookingForm.name.trim() || !bookingForm.phone.trim()) {
      setFormError("Please provide your name and phone number.");
      return;
    }

    if (bookingForm.checkIn && bookingForm.checkOut) {
      const inDate = new Date(bookingForm.checkIn);
      const outDate = new Date(bookingForm.checkOut);
      if (outDate <= inDate) {
        setFormError("Check-out date must be later than the check-in date.");
        return;
      }
    }

    setSubmitting(true);
    let generatedRef = "";

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "room",
          name: bookingForm.name,
          phone: bookingForm.phone,
          date: bookingForm.checkIn,
          guests: bookingForm.guests,
          notes: `Room: ${bookingForm.roomType} | Check-out: ${bookingForm.checkOut || "TBD"} | Rooms: ${bookingForm.roomsCount} | Requests: ${bookingForm.specialRequests || "None"}`,
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
${generatedRef ? `[Reference: ${generatedRef}]\n` : ""}I would like to enquire about room accommodation.
• Room Type: ${bookingForm.roomType}
• Guest Name: ${bookingForm.name}
• Contact Phone: ${bookingForm.phone}
• Check-in Date: ${bookingForm.checkIn || "To be discussed"}
• Check-out Date: ${bookingForm.checkOut || "To be discussed"}
• Number of Guests: ${bookingForm.guests}
• Number of Rooms: ${bookingForm.roomsCount}
• Special Requests: ${bookingForm.specialRequests || "None"}

Please share current availability and tariff details.`;

    window.open(createWhatsAppUrl(message), "_blank");
  };

  const handleEnquireRoom = (roomName: string) => {
    setBookingForm((prev) => ({ ...prev, roomType: roomName }));
    const el = document.getElementById("booking-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[420px] overflow-hidden flex items-center justify-center bg-[#12352B]">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85"
            alt="Accommodation at Suraj Resorts Warangal"
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
            RESORT ACCOMMODATION &bull; WARANGAL
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-serif text-4xl sm:text-6xl font-semibold leading-tight mb-4"
          >
            Stay Somewhere Special.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-base sm:text-lg font-light leading-relaxed"
          >
            Explore accommodation at Suraj Resorts &amp; Convention Hall. Comfortable rooms designed for weekend getaways, family celebrations, and wedding attendees.
          </motion.p>
        </div>
      </section>

      {/* Rooms List Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-16 lg:space-y-24">
            {roomsData.map((room, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={room.id}
                  className={`bg-white rounded-3xl overflow-hidden border border-[#C6A56B]/25 shadow-lg grid grid-cols-1 lg:grid-cols-12 items-center`}
                >
                  {/* Room Image */}
                  <div
                    className={`relative w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:col-span-6 overflow-hidden cursor-pointer ${
                      isEven ? "lg:order-2" : ""
                    }`}
                    onClick={() =>
                      openLightbox(
                        room.image,
                        0,
                        room.gallery.map((g) => ({ src: g, title: room.name }))
                      )
                    }
                  >
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#163D32]/90 backdrop-blur-md text-[#DFCA9E] text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full">
                      Click to View Photos
                    </div>
                  </div>

                  {/* Room Details */}
                  <div
                    className={`p-8 sm:p-12 lg:col-span-6 flex flex-col justify-between ${
                      isEven ? "lg:order-1" : ""
                    }`}
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
                        {room.occupancy}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl text-[#163D32] font-semibold mt-1 mb-3">
                        {room.name}
                      </h2>
                      <p className="text-[#C6A56B] text-sm italic mb-4">
                        {room.tagline}
                      </p>
                      <p className="text-[#202420]/75 text-sm sm:text-base font-light leading-relaxed mb-6">
                        {room.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-[#163D32] mb-3">
                          Amenities &amp; Features:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#202420]/80">
                          {room.amenities.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <Check size={14} className="text-[#C6A56B] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#C6A56B]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-xs text-[#202420]/60 uppercase tracking-wider">Tariff</p>
                        <p className="text-sm font-semibold text-[#163D32]">{room.priceNote}</p>
                      </div>

                      <button
                        onClick={() => handleEnquireRoom(room.name)}
                        className="bg-[#163D32] hover:bg-[#0F2922] text-white px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow hover:scale-105 shrink-0"
                      >
                        Enquire About This Room
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Enquiry Form Section */}
      <section id="booking-form" className="py-16 sm:py-24 bg-[#0A211B] text-white">
        <div className="container mx-auto px-6 sm:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-[#DFCA9E] text-xs uppercase tracking-[0.3em] font-semibold">
              RESERVATION DESK
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold mt-2 mb-4">
              Book Your Stay Enquiry
            </h2>
            <p className="text-white/80 text-sm sm:text-base font-light max-w-xl mx-auto">
              Please enter your proposed dates and group details. Because availability depends on ongoing event bookings, our desk will confirm your reservation directly.
            </p>
          </div>

          <div className="bg-white text-[#202420] p-8 sm:p-12 rounded-3xl shadow-2xl border border-[#C6A56B]/30">
            {formSuccess ? (
              <div className="text-center space-y-5 py-6">
                <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle size={32} />
                </div>
                <h3 className="font-serif text-3xl text-[#163D32]">Enquiry Recorded</h3>
                {referenceId && (
                  <div className="inline-flex items-center gap-2 bg-[#F8F6F0] border border-[#C6A56B]/40 px-4 py-2 rounded-full text-xs font-mono font-semibold text-[#163D32]">
                    <span>Reference No:</span>
                    <span className="text-[#C6A56B] tracking-wider">{referenceId}</span>
                  </div>
                )}
                <p className="text-sm text-[#202420]/75 max-w-md mx-auto">
                  Your request has been logged in our reservation system. Our desk in Timmapur will assist you promptly. You can also chat directly with us on WhatsApp or call our primary number.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#163D32] text-white px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold"
                  >
                    <Phone size={14} />
                    <span>Call {siteConfig.contact.phone}</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormSuccess(false);
                      setReferenceId(null);
                    }}
                    className="w-full sm:w-auto text-xs text-[#163D32] font-semibold underline px-4 py-2"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                {formError && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                    {formError}
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                    Selected Room Category
                  </label>
                  <select
                    value={bookingForm.roomType}
                    onChange={(e) => setBookingForm({ ...bookingForm, roomType: e.target.value })}
                    className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                  >
                    {roomsData.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name} — {r.occupancy}
                      </option>
                    ))}
                    <option value="Multiple Rooms for Event">Multiple Rooms (Wedding / Event Group)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      placeholder="+91 98452 08013"
                      className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32] flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#C6A56B]" />
                      <span>Check-in Date</span>
                    </label>
                    <input
                      type="date"
                      value={bookingForm.checkIn}
                      onChange={(e) => setBookingForm({ ...bookingForm, checkIn: e.target.value })}
                      className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32] flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#C6A56B]" />
                      <span>Check-out Date</span>
                    </label>
                    <input
                      type="date"
                      value={bookingForm.checkOut}
                      onChange={(e) => setBookingForm({ ...bookingForm, checkOut: e.target.value })}
                      className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32] flex items-center gap-1.5">
                      <Users size={14} className="text-[#C6A56B]" />
                      <span>Total Guests</span>
                    </label>
                    <input
                      type="text"
                      value={bookingForm.guests}
                      onChange={(e) => setBookingForm({ ...bookingForm, guests: e.target.value })}
                      placeholder="e.g. 2 adults, 1 child"
                      className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                      Number of Rooms
                    </label>
                    <input
                      type="text"
                      value={bookingForm.roomsCount}
                      onChange={(e) => setBookingForm({ ...bookingForm, roomsCount: e.target.value })}
                      placeholder="e.g. 1 room, or 5 rooms for wedding"
                      className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={bookingForm.specialRequests}
                    onChange={(e) =>
                      setBookingForm({ ...bookingForm, specialRequests: e.target.value })
                    }
                    placeholder="Late arrival, extra mattress, proximity to event lawn, etc."
                    className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32] resize-none"
                  />
                </div>

                <div className="p-4 bg-[#F8F6F0] rounded-xl flex items-start gap-3 text-xs text-[#202420]/75">
                  <Info size={16} className="text-[#C6A56B] shrink-0 mt-0.5" />
                  <p>
                    <strong>Notice:</strong> Submitting this form creates an enquiry request. Due to event dates, rooms are confirmed upon verification by our team via WhatsApp or telephone.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white py-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
                >
                  <MessageCircle size={18} />
                  <span>{submitting ? "Registering Request..." : `Send Enquiry via WhatsApp (${siteConfig.contact.phone})`}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

