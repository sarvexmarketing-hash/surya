"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Waves, Sparkles, Clock, Shield, Users, Phone, MessageCircle } from "lucide-react";
import { siteConfig, getPoolWhatsAppUrl } from "@/data/site";
import { useLightbox } from "@/context/LightboxContext";
import { useEnquireModal } from "@/context/EnquireModalContext";
import { ScrollWords, ScrollLetters, ScrollPhoto, ScrollReveal } from "@/components/ui/ScrollAnimations";

export default function SwimmingPoolPage() {
  const { openLightbox } = useLightbox();
  const { openModal } = useEnquireModal();

  const poolPhotos = [
    {
      src: "/images/suraj-pool-hero.jpg",
      title: "Suraj Resorts Swimming Pool — Timmapur, Warangal",
    },
    {
      src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      title: "Crystal Clear Pool Water",
    },
    {
      src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      title: "Tropical Landscaping by the Pool",
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      title: "Evening Poolside Ambiance",
    },
  ];

  const poolHighlights = [
    {
      icon: Waves,
      title: "Filtered Crystal Waters",
      desc: "Regularly maintained and sanitized pool system ensuring a clean, refreshing swimming experience for all guests.",
    },
    {
      icon: Sparkles,
      title: "Surrounding Sun Deck",
      desc: "Spacious deck area surrounded by tropical greenery, ideal for relaxing after a swim or catching the morning sun.",
    },
    {
      icon: Users,
      title: "Family & Event Access",
      desc: "Available for resort guests, weekend day visitors, and exclusive private pool parties (subject to advance reservation).",
    },
    {
      icon: Shield,
      title: "Safety & Hygiene First",
      desc: "Enclosed resort boundary with clear depth markings and safety guidelines for the peace of mind of every family.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[460px] overflow-hidden flex items-center justify-center bg-[#12352B]">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/images/suraj-pool-hero.jpg"
            alt="Suraj Resorts Swimming Pool in Timmapur Warangal"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A211B] via-[#0A211B]/40 to-black/55" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <div className="mb-4">
            <ScrollLetters
              text="SWIMMING POOL • RECREATION • RELAXATION"
              className="text-xs uppercase tracking-[0.3em] text-[#DFCA9E] font-medium"
            />
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold leading-tight mb-4">
            <ScrollWords text="Take a Moment to Refresh." />
          </h1>
          <ScrollReveal delay={0.2} distance={20}>
            <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl mx-auto">
              Immerse yourself in clean waters and soothing resort tranquility at Suraj Resorts in Warangal.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} distance={20} className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="bg-[#C6A56B] hover:bg-[#DFCA9E] text-[#163D32] px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl hover:scale-105"
            >
              Enquire About Pool Access
            </button>
            <a
              href={getPoolWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-xl inline-flex items-center gap-2"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Pool Desk</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollLetters
              text="THE POOL EXPERIENCE"
              className="text-[#C6A56B] text-[11px] uppercase tracking-[0.3em] font-semibold mb-3 block"
            />
            <h2 className="font-serif text-3xl sm:text-5xl text-[#163D32] font-semibold">
              <ScrollWords text="An Oasis Under Warangal Skies" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {poolHighlights.map((item, i) => (
              <ScrollReveal
                key={item.title}
                delay={i * 0.1}
                distance={30}
                className="bg-white p-8 rounded-2xl border border-[#C6A56B]/20 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#163D32]/10 text-[#163D32] flex items-center justify-center mb-6">
                    <item.icon size={24} className="text-[#C6A56B]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#163D32] font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#202420]/75 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid with ScrollPhoto */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <ScrollLetters
                text="PHOTOGRAPHY"
                className="text-[#C6A56B] text-[11px] uppercase tracking-[0.3em] font-semibold mb-2 block"
              />
              <h2 className="font-serif text-3xl sm:text-4xl text-[#163D32] font-semibold">
                <ScrollWords text="Poolside Atmosphere" />
              </h2>
            </div>
            <p className="text-xs text-[#202420]/60">
              Click any photo to enlarge
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {poolPhotos.map((photo, index) => (
              <ScrollReveal
                key={photo.title}
                delay={index * 0.1}
                distance={30}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md border border-[#C6A56B]/20"
                onClick={() => openLightbox(photo.src, index, poolPhotos)}
              >
                <ScrollPhoto delay={index * 0.1} className="w-full h-full">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-3 left-3 text-white text-xs font-serif opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    {photo.title}
                  </span>
                </ScrollPhoto>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Information & Guidelines */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
          <ScrollReveal distance={30} className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C6A56B]/25 shadow-lg">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#163D32] font-semibold mb-6">
              Visitor Information &amp; Pool Etiquette
            </h3>

            <div className="space-y-6 text-sm text-[#202420]/80 leading-relaxed font-light">
              <div className="p-4 bg-[#F8F6F0] rounded-xl flex items-start gap-3">
                <Clock size={18} className="text-[#C6A56B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-[#163D32]">
                    Pool Timings &amp; Access Policies
                  </h4>
                  <p className="text-xs text-[#202420]/75 mt-1">
                    Operating schedules are subject to seasonal daylight and property events. To ensure availability and verify day-pass access or private slot bookings, please contact the front desk in advance.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#F8F6F0] rounded-xl flex items-start gap-3">
                <Shield size={18} className="text-[#C6A56B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-[#163D32]">
                    Swimwear &amp; Hygiene Rules
                  </h4>
                  <p className="text-xs text-[#202420]/75 mt-1">
                    Proper synthetic swimwear (nylon/polyester) is requested for all guests entering the pool water to maintain crystal-clear water quality for everyone.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#F8F6F0] rounded-xl flex items-start gap-3">
                <Users size={18} className="text-[#C6A56B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-xs uppercase tracking-wider text-[#163D32]">
                    Children &amp; Supervision
                  </h4>
                  <p className="text-xs text-[#202420]/75 mt-1">
                    Children must be accompanied and supervised by parents or adult guardians at all times while in the pool area.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#C6A56B]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#202420]/65 text-center sm:text-left">
                Questions about pool timings, day passes, or private party bookings?
              </span>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#163D32] hover:text-[#C6A56B] transition-colors"
              >
                <Phone size={14} />
                <span>Call {siteConfig.contact.phone}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
