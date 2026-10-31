"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useEnquireModal } from "@/context/EnquireModalContext";
import { eventsData } from "@/data/events";
import { ScrollWords, ScrollLetters, ScrollPhoto, ScrollReveal } from "@/components/ui/ScrollAnimations";

export default function EventsSection() {
  const { openModal } = useEnquireModal();

  const eventPills = [
    "Grand Weddings",
    "Reception Nights",
    "Milestone Birthdays",
    "Family Reunions",
    "Poolside Celebrations",
    "Corporate Offsites",
  ];

  return (
    <section className="bg-[#0A211B] text-white py-20 sm:py-36 lg:py-40 overflow-hidden relative">
      {/* Decorative luxury watermark */}
      <div className="absolute left-0 bottom-0 -translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] rounded-full border border-[#C6A56B]/10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
        {/* Top Split Header with ScrollWords and ScrollLetters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-20 sm:mb-24">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={14} className="text-[#DFCA9E]" />
              <ScrollLetters
                text="HOST WITH SURAJ RESORTS"
                className="text-[#DFCA9E] text-[11px] uppercase tracking-[0.3em] font-semibold"
              />
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[58px] font-semibold leading-[1.12]">
              <ScrollWords text="Bring Your Celebrations" className="block" />
              <span className="italic font-normal text-gold-gradient font-accent block mt-1">
                <ScrollWords text="to Life." delay={0.15} />
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal delay={0.2} distance={20}>
              <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed mb-6">
                Looking for a venue for a wedding, birthday, family gathering, or private celebration? Contact our team to discuss your event requirements.
              </p>
            </ScrollReveal>

            {/* Event Category Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {eventPills.map((pill, idx) => (
                <ScrollReveal key={pill} delay={idx * 0.05 + 0.15} distance={15}>
                  <span className="inline-flex items-center gap-1.5 text-xs bg-white/10 text-white/90 px-3.5 py-1.5 rounded-full border border-[#C6A56B]/30 backdrop-blur-md">
                    <CheckCircle2 size={12} className="text-[#DFCA9E]" />
                    <span>{pill}</span>
                  </span>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.35} distance={15}>
              <button
                onClick={() => openModal()}
                className="relative group overflow-hidden bg-[#C6A56B] hover:bg-[#E5D2AB] text-[#0A211B] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 shadow-xl hover:scale-105"
              >
                <span className="relative z-10">Plan Your Celebration</span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </ScrollReveal>
          </div>
        </div>

        {/* 4 Gallery-style Event Cards with ScrollPhoto Image Zoom & Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventsData.map((ev, i) => (
            <ScrollReveal
              key={ev.id}
              delay={i * 0.1}
              distance={40}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#C6A56B]/25 shadow-xl"
            >
              <ScrollPhoto delay={i * 0.12} className="w-full h-full">
                <Image
                  src={ev.image}
                  alt={ev.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A211B] via-[#0A211B]/40 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#DFCA9E] font-medium mb-1.5">
                    0{i + 1} &bull; CELEBRATION
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold mb-2 group-hover:text-[#DFCA9E] transition-colors">
                    {ev.title}
                  </h3>
                  <p className="text-white/70 text-xs font-light line-clamp-2 mb-4">
                    {ev.tagline}
                  </p>
                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#DFCA9E] hover:underline"
                  >
                    <span>Explore Details</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </ScrollPhoto>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
