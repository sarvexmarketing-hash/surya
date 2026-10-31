"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useEnquireModal } from "@/context/EnquireModalContext";
import { ScrollWords, ScrollLetters, ScrollReveal } from "@/components/ui/ScrollAnimations";

export default function PropertyShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const { openModal } = useEnquireModal();

  const showcases = [
    {
      id: "pool",
      badge: "THE AQUA SANCTUARY",
      title: "Crystal Waters Framed by Greenery",
      subtitle: "A revitalizing pool designed for calm escapes and family recreation.",
      description:
        "Step away from the city heat and into our pristine swimming pool. Thoughtfully maintained with modern filtration, expansive sun-lounging areas, and tropical palm foliage, this is Warangal's premier setting for weekend relaxation and private poolside celebrations.",
      image: "/images/suraj-pool-hero.jpg",
      features: [
        "Sanitized crystal-clear swimming pool",
        "Spacious stone-paved relaxation deck",
        "Day visitor access & private party availability",
        "Enclosed, secure resort surroundings",
      ],
      link: "/swimming-pool",
      cta: "Explore Swimming Pool",
    },
    {
      id: "hall",
      badge: "THE GRAND VENUE",
      title: "Spacious Convention Hall for Cherished Occasions",
      subtitle: "Designed to host weddings, grand receptions, and milestone gatherings.",
      description:
        "Our indoor convention hall pairs expansive square footage with powerful air-conditioning and dedicated stage infrastructure. Accommodates traditional rituals, opulent sangeet nights, corporate conferences, and joyous family celebrations.",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85",
      features: [
        "Generous indoor convention hall seating",
        "Dedicated dining & buffet service wing",
        "Continuous generator power backup",
        "Direct connection to open party lawns",
      ],
      link: "/convention-hall",
      cta: "Explore Convention Hall",
    },
    {
      id: "suites",
      badge: "ACCOMMODATIONS",
      title: "Comfortable Resort Suites & Rooms",
      subtitle: "Thoughtful comfort for families, wedding parties, and overnight guests.",
      description:
        "Retire to peaceful, air-conditioned rooms appointed with comfortable bedding, modern bathrooms, and close proximity to both the swimming pool and event lawns. Ideal for hosting out-of-town guests and wedding parties.",
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85",
      features: [
        "Air-conditioned guest rooms & family suites",
        "En-suite bathrooms with hot water supply",
        "Dedicated wedding party suite options",
        "Direct pool & garden terrace access",
      ],
      link: "/rooms",
      cta: "Explore Suites & Rooms",
    },
    {
      id: "lawns",
      badge: "THE EVENT GROUNDS",
      title: "Verdant Celebration Lawns Under Open Skies",
      subtitle: "Illuminated evening celebrations in a tranquil resort environment.",
      description:
        "Our open-air party grounds provide the freedom to craft custom mandaps, festive dining setups, and evening musical bashes. With surrounding greenery and starry Warangal skies, your event feels boundless and magnificent.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
      features: [
        "Manicured green open-air lawns",
        "Illumination & festive lighting compatibility",
        "Dedicated stage & sound setup zones",
        "Ample guest vehicle parking on premises",
      ],
      link: "/events",
      cta: "Explore Events & Lawns",
    },
  ];

  const current = showcases[activeTab];

  return (
    <section className="bg-[#FAF8F5] py-20 sm:py-36 lg:py-40 border-t border-[#C6A56B]/20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-10 lg:px-16">
        {/* Section Header with Scroll-revealed Words and Letters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-[#C6A56B] text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-semibold mb-2 sm:mb-3">
              <Sparkles size={13} />
              <ScrollLetters text="THE RESORT PORTFOLIO" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#12352B] font-semibold leading-tight">
              <ScrollWords text="Spaces Designed to" className="block" />
              <span className="italic font-normal text-gold-dark-gradient font-accent block mt-1">
                <ScrollWords text="Inspire and Celebrate." delay={0.15} />
              </span>
            </h2>
          </div>

          {/* Interactive Tab Switcher (Mobile Swipeable / Responsive) */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="flex items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 bg-white rounded-2xl sm:rounded-full border border-[#C6A56B]/30 shadow-sm overflow-x-auto max-w-full scrollbar-none">
              {showcases.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveTab(idx)}
                  className={`text-[11px] sm:text-xs px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
                    activeTab === idx
                      ? "bg-[#12352B] text-white shadow"
                      : "text-[#202420]/75 hover:text-[#12352B]"
                  }`}
                >
                  {sc.badge}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Featured Showcase Card with ScrollReveal */}
        <ScrollReveal
          distance={40}
          duration={0.9}
          className="bg-white rounded-3xl overflow-hidden border border-[#C6A56B]/25 shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center"
        >
          {/* Left Column: Image with AnimatePresence */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[580px] lg:col-span-7 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-6 left-6 text-white text-xs font-serif italic tracking-wider drop-shadow">
                  {current.badge} &bull; Suraj Resorts Warangal
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Detailed Editorial Content */}
          <div className="p-8 sm:p-12 lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A56B] font-semibold">
                  {current.badge}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#12352B] font-semibold mt-1 mb-2">
                  {current.title}
                </h3>
                <p className="text-[#C6A56B] text-sm italic font-accent mb-4">
                  {current.subtitle}
                </p>
                <p className="text-[#202420]/75 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  {current.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs text-[#202420]/80">
                      <div className="w-4 h-4 rounded-full bg-[#12352B]/10 flex items-center justify-center shrink-0">
                        <Check size={11} className="text-[#C6A56B]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-[#C6A56B]/20 flex flex-wrap items-center gap-4">
                  <Link
                    href={current.link}
                    className="inline-flex items-center gap-2 bg-[#12352B] hover:bg-[#0A211B] text-white px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow hover:scale-105"
                  >
                    <span>{current.cta}</span>
                    <ArrowRight size={13} className="text-[#DFCA9E]" />
                  </Link>

                  <button
                    onClick={() => openModal()}
                    className="text-xs uppercase tracking-wider font-semibold text-[#12352B] hover:text-[#C6A56B] transition-colors underline py-2"
                  >
                    Enquire Directly
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

