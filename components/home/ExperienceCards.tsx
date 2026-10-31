"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollWords, ScrollLetters, ScrollPhoto, ScrollReveal } from "@/components/ui/ScrollAnimations";

export default function ExperienceCards() {
  const experiences = [
    {
      id: "pool",
      numeral: "I",
      eyebrow: "RECREATION & LEISURE",
      title: "Refresh. Relax. Repeat.",
      description: "Explore the swimming pool and outdoor recreational spaces.",
      image: "/images/suraj-pool-hero.jpg",
      link: "/swimming-pool",
      btnText: "Explore the Pool",
    },
    {
      id: "stay",
      numeral: "II",
      eyebrow: "RESORT ACCOMMODATION",
      title: "Your Space to Unwind",
      description: "Discover accommodation options for your visit and special occasions.",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      link: "/rooms",
      btnText: "Explore Rooms",
    },
    {
      id: "convention",
      numeral: "III",
      eyebrow: "CONVENTION & CELEBRATIONS",
      title: "Celebrate Something Special",
      description: "Explore the venue for weddings, family functions, parties, and other celebrations.",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      link: "/convention-hall",
      btnText: "Explore the Venue",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-36 lg:py-40 relative">
      <div className="container mx-auto px-4 sm:px-10 lg:px-16">
        {/* Editorial Section Header with Scroll-revealed Words and Letters */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-[1px] w-8 bg-[#C6A56B] origin-right"
            />
            <ScrollLetters
              text="THE THREE DESTINATIONS"
              className="text-[#C6A56B] text-[11px] uppercase tracking-[0.32em] font-semibold"
            />
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-[1px] w-8 bg-[#C6A56B] origin-left"
            />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] text-[#12352B] font-semibold leading-tight">
            <ScrollWords text="Designed for Leisure," className="block" />
            <span className="italic font-normal text-gold-dark-gradient font-accent block mt-1">
              <ScrollWords text="Built for Celebrations." delay={0.15} />
            </span>
          </h2>

          <ScrollReveal delay={0.25} distance={20}>
            <p className="text-[#202420]/70 text-sm sm:text-base font-light mt-4 max-w-xl mx-auto">
              Three distinct experiences within one unified sanctuary in Timmapur, Warangal.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 High-End Editorial Cards with ScrollPhoto Image Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {experiences.map((card, index) => (
            <ScrollReveal
              key={card.id}
              delay={index * 0.12}
              distance={40}
              className="group flex flex-col justify-between bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#C6A56B]/25 shadow-sm hover:shadow-2xl transition-all duration-700 relative"
            >
              {/* Image Frame with Architectural Aspect and ScrollPhoto Zoom & Reveal */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <ScrollPhoto delay={index * 0.15} className="w-full h-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                  />
                  {/* Vignette & Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A211B]/80 via-transparent to-black/30" />

                  {/* Roman Numeral & Eyebrow */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                    <span className="bg-[#0A211B]/85 backdrop-blur-md text-[#DFCA9E] text-[10px] tracking-[0.25em] font-medium uppercase px-3.5 py-1.5 rounded-full border border-[#C6A56B]/40">
                      {card.eyebrow}
                    </span>
                    <span className="font-serif text-2xl text-white/90 italic font-light drop-shadow">
                      {card.numeral}
                    </span>
                  </div>
                </ScrollPhoto>
              </div>

              {/* Text & Action Area */}
              <div className="p-6 sm:p-9 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#12352B] font-semibold mb-3 group-hover:text-[#C6A56B] transition-colors duration-300">
                    <ScrollWords text={card.title} delay={index * 0.1 + 0.1} />
                  </h3>
                  <p className="text-[#202420]/75 text-sm sm:text-base font-light leading-relaxed mb-8">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C6A56B]/20">
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-semibold text-[#12352B] group-hover:text-[#C6A56B] transition-colors"
                  >
                    <span>{card.btnText}</span>
                    <span className="w-7 h-7 rounded-full bg-[#12352B]/10 group-hover:bg-[#C6A56B] group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
