"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Waves, Building2, Trees, HeartHandshake } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useEnquireModal } from "@/context/EnquireModalContext";
import { ScrollWords, ScrollLetters, ScrollPhoto, ScrollReveal } from "@/components/ui/ScrollAnimations";

export default function AboutPage() {
  const { openModal } = useEnquireModal();

  const values = [
    {
      icon: Waves,
      title: "Tranquil Recreation",
      desc: "Providing families and weekend visitors with refreshing swimming pool experiences and open peaceful green spaces.",
    },
    {
      icon: Building2,
      title: "Celebration Infrastructure",
      desc: "A well-equipped convention hall ready to host weddings, receptions, milestones, and corporate gatherings with ease.",
    },
    {
      icon: Trees,
      title: "Serene Resort Atmosphere",
      desc: "Nestled in Timmapur, offering an escape from city congestion while remaining easily accessible for guests.",
    },
    {
      icon: HeartHandshake,
      title: "Warm Telangana Hospitality",
      desc: "Attentive, personalized support to ensure every family milestone and weekend stay is handled with utmost care.",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[55vh] min-h-[420px] overflow-hidden flex items-center justify-center bg-[#12352B]">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85"
            alt="About Suraj Resorts & Convention Hall Warangal"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A211B] via-[#0A211B]/50 to-black/60" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <div className="mb-4">
            <ScrollLetters
              text="OUR HERITAGE • TIMMAPUR, WARANGAL"
              className="text-xs uppercase tracking-[0.3em] text-[#DFCA9E] font-medium"
            />
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold leading-tight mb-4">
            <ScrollWords text="A Sanctuary to Unwind." className="block" />
            <span className="italic font-normal text-[#DFCA9E] block mt-1">
              <ScrollWords text="A Venue to Celebrate." delay={0.2} />
            </span>
          </h1>
          <ScrollReveal delay={0.3} distance={20}>
            <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
              Discover the vision and dedication behind Suraj Resorts &amp; Convention Hall in Warangal, Telangana.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <ScrollLetters
                text="THE STORY"
                className="text-xs uppercase tracking-[0.3em] text-[#C6A56B] font-semibold"
              />
              <h2 className="font-serif text-3xl sm:text-5xl text-[#163D32] font-semibold mt-2 mb-6">
                <ScrollWords text="Crafting Meaningful Memories in Warangal." />
              </h2>
              <div className="space-y-4 text-[#202420]/80 text-sm sm:text-base font-light leading-relaxed">
                <ScrollReveal delay={0.2} distance={20}>
                  <p>
                    Located opposite Thallapadmavathi College Lane in Timmapur, <strong>Suraj Resorts &amp; Convention Hall</strong> was conceptualized to fulfill a dual desire: a peaceful resort where families can recharge around clean swimming pool waters, and a grand venue where milestone life events can be celebrated with pride.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.28} distance={20}>
                  <p>
                    Warangal is steeped in culture and historical grandeur. At Suraj Resorts, we bring that sense of generous hospitality into every stay and occasion. Our property combines air-conditioned accommodations, verdant outdoor lawns, and a spacious convention hall capable of welcoming wedding parties, private gatherings, and business conferences.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.36} distance={20}>
                  <p>
                    We believe in straightforward, genuine service without unexpected surprises. From initial enquiry to the conclusion of your event, our local on-site management works alongside you to ensure your expectations are fulfilled.
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.4} distance={20} className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => openModal()}
                  className="bg-[#163D32] hover:bg-[#0F2922] text-white px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow hover:scale-105"
                >
                  Plan Your Visit
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-[#163D32]/30 text-[#163D32] hover:bg-[#163D32]/5 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all"
                >
                  <span>Contact Information</span>
                  <ArrowRight size={14} className="text-[#C6A56B]" />
                </Link>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6">
              <ScrollPhoto delay={0.25} className="rounded-3xl shadow-2xl border border-[#C6A56B]/25 aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
                  alt="Suraj Resorts Exterior Lawns"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </ScrollPhoto>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 sm:py-24 bg-white border-y border-[#C6A56B]/20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ScrollLetters
              text="OUR PILLARS"
              className="text-xs uppercase tracking-[0.3em] text-[#C6A56B] font-semibold"
            />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#163D32] font-semibold mt-2">
              <ScrollWords text="What Defines the Suraj Experience" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal
                key={v.title}
                delay={i * 0.1}
                distance={30}
                className="bg-[#F8F6F0] p-8 rounded-2xl border border-[#C6A56B]/20 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#163D32] text-[#DFCA9E] flex items-center justify-center mb-6">
                    <v.icon size={22} />
                  </div>
                  <h3 className="font-serif text-xl text-[#163D32] font-semibold mb-3">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#202420]/75 font-light leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlight Banner */}
      <section className="py-16 bg-[#163D32] text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-2xl">
          <ScrollLetters
            text="FIND US IN TIMMAPUR"
            className="text-xs uppercase tracking-[0.25em] text-[#DFCA9E] font-medium"
          />
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold mt-2 mb-4">
            <ScrollWords text="Opposite Thallapadmavathi College Lane" />
          </h3>
          <p className="text-white/80 text-sm font-light mb-6">
            {siteConfig.address.full}
          </p>
          <a
            href={siteConfig.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#DFCA9E] text-[#163D32] px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors"
          >
            <MapPin size={14} />
            <span>View on Google Maps</span>
          </a>
        </div>
      </section>
    </div>
  );
}
