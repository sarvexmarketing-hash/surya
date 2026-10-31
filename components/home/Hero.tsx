"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Compass } from "lucide-react";
import { useEnquireModal } from "@/context/EnquireModalContext";

export default function Hero() {
  const { openModal } = useEnquireModal();

  const scrollToExplore = () => {
    const el = document.getElementById("introduction");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroPillars = [
    { title: "Filtered Pool", sub: "Crystal Waters" },
    { title: "Convention Hall", sub: "Weddings & Banquets" },
    { title: "Resort Stay", sub: "Deluxe Suites" },
    { title: "Celebration Lawns", sub: "Open Air Spaces" },
  ];

  return (
    <section className="relative w-full h-[100svh] min-h-[580px] sm:min-h-[700px] overflow-hidden bg-[#0A211B] flex items-center max-w-full">
      {/* Background Cinematic Image with Luxury Scale */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image
          src="/images/suraj-pool-hero.jpg"
          alt="Suraj Resorts Actual Swimming Pool in Timmapur Warangal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Layered Multi-tone Vignette for Deep Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A211B] via-[#0A211B]/40 to-black/50" />
      </motion.div>

      {/* Decorative Gold Framing Elements (Desktop Only) */}
      <div className="absolute top-28 left-6 right-6 bottom-8 pointer-events-none hidden lg:block border border-[#C6A56B]/15 rounded-3xl" />

      {/* Hero Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-16 pt-20 sm:pt-28 pb-10 sm:pb-16 flex flex-col justify-end h-full max-w-full">
        <div className="max-w-4xl">
          {/* Eyebrow Pill — Warangal's Best Resort */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-2 mb-3.5 sm:mb-5 max-w-full"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#0A211B]/85 backdrop-blur-md px-3.5 sm:px-4 py-1.5 rounded-full border border-[#C6A56B]/40 max-w-full shadow-lg">
              <Compass size={12} className="text-[#DFCA9E] shrink-0" />
              <span className="text-[#DFCA9E] text-[10px] sm:text-[11.5px] uppercase tracking-[0.18em] sm:tracking-[0.28em] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                WARANGAL&apos;S BEST RESORT &bull; TIMMAPUR
              </span>
            </div>
          </motion.div>

          {/* Editorial Headline — Mobile Responsive Sizing */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-serif text-[34px] sm:text-5xl md:text-6xl lg:text-[76px] font-semibold text-white leading-[1.1] sm:leading-[1.06] tracking-tight mb-4 sm:mb-6"
          >
            Make Every Moment <br />
            <span className="italic font-normal text-gold-gradient font-accent">
              Extraordinary.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/85 text-sm sm:text-base md:text-xl font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl"
          >
            Discover a relaxing resort experience and a welcoming venue for your special celebrations at Suraj Resorts &amp; Convention Hall.
          </motion.p>

          {/* Action CTAs — Mobile Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto"
          >
            <button
              onClick={scrollToExplore}
              className="w-full sm:w-auto text-center bg-[#C6A56B] hover:bg-[#E5D2AB] text-[#0A211B] px-7 py-3.5 sm:py-4 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
            >
              Explore the Resort
            </button>

            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-[#C6A56B]/50 px-7 py-3.5 sm:py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Plan Your Event</span>
              <span className="text-[#DFCA9E]">&rarr;</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Property Pillars Bar (Compact on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-4 sm:pt-6 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-white/90"
        >
          {heroPillars.map((p, i) => (
            <div key={p.title} className="flex items-center gap-2.5">
              <span className="text-[10px] sm:text-xs font-serif text-[#C6A56B] italic font-semibold shrink-0">
                0{i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-[11px] sm:text-sm font-serif font-medium text-white truncate">{p.title}</p>
                <p className="text-[9px] sm:text-[10px] text-white/60 tracking-wider uppercase truncate">{p.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Scroll Down Trigger (Desktop Only) */}
      <motion.button
        onClick={scrollToExplore}
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 right-8 sm:right-16 z-20 hidden lg:flex flex-col items-center gap-2 text-white/60 hover:text-[#DFCA9E] transition-colors cursor-pointer group"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-light">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-[#C6A56B]" />
        </motion.div>
      </motion.button>
    </section>
  );
}
