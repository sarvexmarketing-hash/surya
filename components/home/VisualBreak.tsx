"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEnquireModal } from "@/context/EnquireModalContext";
import { ScrollWords, ScrollLetters, ScrollReveal } from "@/components/ui/ScrollAnimations";

export default function VisualBreak() {
  const { openModal } = useEnquireModal();

  return (
    <section className="relative w-full h-[70vh] min-h-[520px] overflow-hidden flex items-center justify-center">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.15, filter: "brightness(0.7)" }}
        whileInView={{ scale: 1, filter: "brightness(1)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2200&q=88"
          alt="Suraj Resorts Landscaped Grounds and Evening Celebration Space"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0A211B]/75 backdrop-brightness-90" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0A211B]/50 to-black/80" />
      </motion.div>

      {/* Decorative Gold Frame */}
      <div className="absolute inset-8 sm:inset-12 pointer-events-none border border-[#C6A56B]/20 rounded-3xl hidden md:block" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center max-w-3xl">
        <div className="flex flex-col items-center gap-6">
          {/* Gold Flourish with Animated Character Letters */}
          <div className="flex items-center gap-3">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-[1px] w-8 bg-[#DFCA9E] origin-right"
            />
            <ScrollLetters
              text="WARANGAL'S BEST RESORT"
              className="text-[#DFCA9E] text-[11px] uppercase tracking-[0.35em] font-semibold"
            />
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-[1px] w-8 bg-[#DFCA9E] origin-left"
            />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-semibold leading-[1.14]">
            <ScrollWords text="Your Next Memorable Moment" className="block" />
            <span className="italic font-normal text-gold-gradient font-accent block mt-1">
              <ScrollWords text="Starts Here." delay={0.2} />
            </span>
          </h2>

          <ScrollReveal delay={0.3} distance={20}>
            <p className="text-white/85 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              From relaxing escapes to meaningful celebrations, find the setting for your next occasion.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} distance={20}>
            <button
              onClick={() => openModal()}
              className="mt-2 relative group overflow-hidden bg-[#C6A56B] hover:bg-[#E5D2AB] text-[#0A211B] px-9 py-4 rounded-full text-xs uppercase tracking-[0.24em] font-bold transition-all duration-300 shadow-2xl hover:scale-105"
            >
              <span className="relative z-10">Make an Enquiry</span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
