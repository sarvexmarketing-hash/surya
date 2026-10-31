"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Navigation, ShieldCheck, Compass } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useEnquireModal } from "@/context/EnquireModalContext";
import { ScrollWords, ScrollLetters, ScrollReveal } from "@/components/ui/ScrollAnimations";

export default function LocationSection() {
  const { openModal } = useEnquireModal();

  return (
    <section className="bg-[#FAF8F5] py-20 sm:py-36 lg:py-40 border-t border-[#C6A56B]/25">
      <div className="container mx-auto px-4 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Details */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <Compass size={14} className="text-[#C6A56B]" />
              <ScrollLetters
                text="WARANGAL, TELANGANA"
                className="text-[#C6A56B] text-[11px] uppercase tracking-[0.3em] font-semibold"
              />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#12352B] font-semibold mb-6 leading-tight">
              <ScrollWords text="Find Your Way" className="block" />
              <span className="italic font-normal text-gold-dark-gradient font-accent block mt-1">
                <ScrollWords text="to Suraj Resorts." delay={0.15} />
              </span>
            </h2>

            <ScrollReveal delay={0.2} distance={20}>
              <p className="text-[#202420]/75 text-sm sm:text-base font-light leading-relaxed mb-8">
                Conveniently connected on the Timmapur stretch of Warangal, our property provides peaceful greenery with seamless road accessibility for visiting guests, wedding attendees, and families.
              </p>
            </ScrollReveal>

            <div className="space-y-5 mb-8">
              <ScrollReveal delay={0.25} distance={25} className="bg-white p-5 rounded-2xl border border-[#C6A56B]/25 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#12352B]/10 text-[#12352B] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} className="text-[#C6A56B]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#12352B]">
                    Verified Property Address
                  </h4>
                  <p className="text-sm text-[#202420]/85 mt-1 font-medium">
                    {siteConfig.address.line1}
                  </p>
                  <p className="text-xs text-[#202420]/70 mt-0.5">
                    {siteConfig.address.locality}, {siteConfig.address.state} — {siteConfig.address.postalCode}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.32} distance={25} className="bg-white p-5 rounded-2xl border border-[#C6A56B]/25 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#12352B]/10 text-[#12352B] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={18} className="text-[#C6A56B]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#12352B]">
                    Direct Help &amp; Directions
                  </h4>
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="text-base font-semibold text-[#12352B] hover:text-[#C6A56B] transition-colors block mt-0.5"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <p className="text-xs text-[#202420]/60 mt-0.5">
                    Assistance available for event arrivals &amp; room guests
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4} distance={25} className="bg-white p-5 rounded-2xl border border-[#C6A56B]/25 shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#12352B]/10 text-[#12352B] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck size={18} className="text-[#C6A56B]" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#12352B]">
                    Ample Property Parking
                  </h4>
                  <p className="text-xs text-[#202420]/75 mt-0.5">
                    Dedicated, secure space for cars, buses &amp; event transportation
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#12352B] hover:bg-[#0A211B] text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md hover:scale-105"
              >
                <Navigation size={14} className="text-[#DFCA9E]" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white text-[#12352B] border border-[#12352B]/30 px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm"
              >
                <span>Contact Enquiry</span>
              </button>
            </div>
          </div>

          {/* Right Column: Embedded Map / Location Card with Gold Bevel */}
          <div className="lg:col-span-7">
            <ScrollReveal
              distance={40}
              duration={1}
              className="relative w-full h-[440px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-[#C6A56B]/35 bg-[#1C201C]"
            >
              <iframe
                title="Suraj Resorts Location Map"
                src={siteConfig.maps.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
              />

              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-[#C6A56B]/35 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <p className="font-serif text-[#12352B] text-sm sm:text-base font-semibold">
                    Suraj Resorts &amp; Convention Hall
                  </p>
                  <p className="text-xs text-[#202420]/75">
                    Opposite Thallapadmavathi College Lane, Timmapur, Warangal — 506005
                  </p>
                </div>
                <a
                  href={siteConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-[#C6A56B] text-[#0A211B] font-bold px-5 py-2.5 rounded-full hover:bg-[#E5D2AB] transition-colors shrink-0 shadow"
                >
                  Open in Maps
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
