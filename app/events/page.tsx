"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Sparkles, Phone, MessageCircle } from "lucide-react";
import { eventsData } from "@/data/events";
import { siteConfig, getEventWhatsAppUrl } from "@/data/site";
import { useEnquireModal } from "@/context/EnquireModalContext";

export default function EventsPage() {
  const { openModal } = useEnquireModal();

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
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
            alt="Events & Celebrations at Suraj Resorts Warangal"
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
            CELEBRATIONS &bull; WEDDINGS &bull; PRIVATE PARTIES
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-serif text-4xl sm:text-6xl font-semibold leading-tight mb-4"
          >
            Bring Your Celebrations to Life.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl mx-auto"
          >
            From grand destination weddings to intimate poolside birthdays, Suraj Resorts &amp; Convention Hall in Warangal offers versatile venues and tailored hospitality.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="bg-[#C6A56B] hover:bg-[#DFCA9E] text-[#163D32] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl hover:scale-105"
            >
              Plan Your Celebration
            </button>
            <a
              href={getEventWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Event Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Event Categories Detailed List */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">
          {eventsData.map((event, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={event.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <div
                  className={`lg:col-span-6 ${isReversed ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#C6A56B]/25">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isReversed ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 text-[#C6A56B] text-[11px] uppercase tracking-[0.25em] font-semibold mb-2">
                    <Sparkles size={14} />
                    <span>EVENT EXPERIENCE</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#163D32] font-semibold mb-3">
                    {event.title}
                  </h2>
                  <p className="text-[#C6A56B] text-base italic mb-4">
                    {event.tagline}
                  </p>
                  <p className="text-[#202420]/75 text-sm sm:text-base font-light leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {event.highlights.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#C6A56B] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#202420]/80">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <button
                      onClick={() => openModal()}
                      className="bg-[#163D32] hover:bg-[#0F2922] text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow hover:scale-105"
                    >
                      Enquire For This Event
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Bar */}
      <section className="py-20 bg-[#0A211B] text-white text-center border-t border-[#C6A56B]/20">
        <div className="container mx-auto px-6 max-w-2xl">
          <h3 className="font-serif text-3xl sm:text-4xl font-semibold mb-4">
            Need customized event pricing or a site visit?
          </h3>
          <p className="text-white/80 text-sm font-light mb-8">
            Our events desk is available to schedule walk-throughs of the hall and grounds at Timmapur, Warangal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-[#C6A56B] text-[#163D32] px-7 py-3 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#DFCA9E] transition-colors"
            >
              <Phone size={14} />
              <span>Call: {siteConfig.contact.phone}</span>
            </a>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-white/20 transition-colors"
            >
              <span>Submit Event Details</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
