"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Waves, Building2, Trees, BedDouble } from "lucide-react";
import { ScrollWords, ScrollLetters, ScrollPhoto, ScrollReveal } from "@/components/ui/ScrollAnimations";

export default function Introduction() {
  const propertyFeatures = [
    {
      icon: Waves,
      label: "Filtered Pool",
      detail: "Clean waters & sun deck",
    },
    {
      icon: Building2,
      label: "Convention Hall",
      detail: "Air-conditioned banquet venue",
    },
    {
      icon: Trees,
      label: "Celebration Lawns",
      detail: "Expansive green event spaces",
    },
    {
      icon: BedDouble,
      label: "Guest Accommodations",
      detail: "Peaceful resort rooms",
    },
  ];

  return (
    <section id="introduction" className="bg-[#FAF8F5] py-20 sm:py-36 lg:py-44 relative overflow-hidden">
      {/* Decorative luxury watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] rounded-full border border-[#C6A56B]/10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
        {/* Top Eyebrow with Character-by-Character Scroll Reveal */}
        <div className="flex items-center gap-3 justify-center mb-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[1px] w-10 bg-[#C6A56B] origin-right"
          />
          <ScrollLetters
            text="WARANGAL'S BEST RESORT • SURAJ"
            className="text-[#C6A56B] text-[10.5px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.34em] font-semibold text-center"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[1px] w-10 bg-[#C6A56B] origin-left"
          />
        </div>

        {/* Asymmetric Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Big Editorial Statement with ScrollWords */}
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[58px] text-[#12352B] leading-[1.14] font-semibold">
              <ScrollWords text="A Place to Unwind." className="block" />
              <span className="italic font-normal text-gold-dark-gradient font-accent block mt-1">
                <ScrollWords text="A Venue to Celebrate." delay={0.2} />
              </span>
            </h2>

            <ScrollReveal delay={0.3} distance={20}>
              <p className="mt-6 text-sm font-serif italic text-[#C6A56B] tracking-wide">
                &ldquo;Where tranquility of nature harmonizes with the grandeur of milestone occasions.&rdquo;
              </p>
            </ScrollReveal>

            {/* Inset Photo that reveals smoothly on scroll */}
            <div className="mt-8 relative max-w-md hidden sm:block">
              <ScrollPhoto className="rounded-2xl shadow-xl aspect-[16/9] border border-[#C6A56B]/30" delay={0.25}>
                <Image
                  src="/images/suraj-pool-hero.jpg"
                  alt="Suraj Resorts Swimming Pool in Warangal"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-white text-xs font-serif italic">
                  Genuine Resort Pool &bull; Timmapur
                </div>
              </ScrollPhoto>
            </div>
          </div>

          {/* Right Column: Narrative Copy & Discovery Button */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <ScrollReveal delay={0.2} distance={30}>
              <p className="text-[#202420]/80 text-lg sm:text-xl font-light leading-relaxed">
                Whether you&apos;re planning a relaxing getaway, a family gathering, or a special celebration, Suraj Resorts &amp; Convention Hall offers a welcoming setting for memorable moments in Warangal.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} distance={30}>
              <p className="text-[#202420]/70 text-sm sm:text-base font-light leading-relaxed">
                Suraj Resorts is conceived as a sanctuary away from the hustle of city life. Located opposite Thallapadmavathi College Lane in Timmapur, our property marries the leisure of a private swimming pool resort with the capability to host grand weddings, receptions, and celebratory gatherings.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} distance={20} className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-[#12352B] hover:bg-[#0A211B] text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02] group"
              >
                <span>Discover Suraj Resorts</span>
                <ArrowRight size={15} className="text-[#DFCA9E] transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* 4 Property Pillars Feature Cards (Elevated Luxury Feel with Staggered ScrollReveal) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyFeatures.map((f, idx) => (
            <ScrollReveal
              key={f.label}
              delay={idx * 0.1}
              distance={35}
              className="bg-white p-7 rounded-2xl border border-[#C6A56B]/20 shadow-sm hover:shadow-md transition-all duration-300 group relative"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#C6A56B]/30 flex items-center justify-center mb-5 group-hover:bg-[#12352B] group-hover:border-[#12352B] transition-colors duration-300">
                <f.icon size={22} className="text-[#C6A56B] group-hover:text-[#DFCA9E] transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg text-[#12352B] font-semibold mb-1">
                {f.label}
              </h3>
              <p className="text-xs text-[#202420]/65 font-light">
                {f.detail}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
