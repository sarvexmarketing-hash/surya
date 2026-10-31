"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig, getGeneralWhatsAppUrl } from "@/data/site";
import BrandLogo from "@/components/ui/BrandLogo";
import { ScrollWords, ScrollLetters, ScrollReveal } from "@/components/ui/ScrollAnimations";

export default function FinalConversion() {
  return (
    <section className="bg-[#0A211B] text-white py-20 sm:py-36 lg:py-40 relative overflow-hidden border-t border-[#C6A56B]/20">
      {/* Subtle luxury crest watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-[#C6A56B]/10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-8 text-center max-w-3xl relative z-10">
        <ScrollReveal distance={20} className="flex justify-center mb-6">
          <BrandLogo variant="light" showTagline={false} />
        </ScrollReveal>

        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles size={13} className="text-[#DFCA9E]" />
          <ScrollLetters
            text="WARANGAL'S BEST RESORT • TIMMAPUR"
            className="text-[#DFCA9E] text-[10.5px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.34em] font-semibold"
          />
          <Sparkles size={13} className="text-[#DFCA9E]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-[58px] font-semibold leading-tight mb-6">
          <ScrollWords text="Let's Make Your Next" className="block" />
          <span className="italic font-normal text-gold-gradient font-accent block mt-1">
            <ScrollWords text="Visit Special." delay={0.15} />
          </span>
        </h2>

        <ScrollReveal delay={0.2} distance={20}>
          <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Contact Suraj Resorts &amp; Convention Hall to enquire about accommodation, the swimming pool, or your upcoming celebration.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} distance={25} className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="relative group overflow-hidden bg-[#C6A56B] hover:bg-[#E5D2AB] text-[#0A211B] px-8 sm:px-9 py-4 rounded-full text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 shadow-2xl hover:scale-105 inline-flex items-center gap-3"
          >
            <Phone size={16} />
            <span className="relative z-10">Call Concierge: {siteConfig.contact.phone}</span>
          </a>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 sm:px-9 py-4 rounded-full text-xs uppercase tracking-[0.22em] font-bold transition-all duration-300 shadow-2xl hover:scale-105"
          >
            <MessageCircle size={16} />
            <span>WhatsApp Enquiry</span>
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.4} distance={15}>
          <p className="text-white/50 text-xs tracking-widest uppercase mt-10">
            Timmapur, Warangal &bull; Tel: {siteConfig.contact.phone} &bull; Open for Enquiries
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
