"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2, Sparkles } from "lucide-react";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { useLightbox } from "@/context/LightboxContext";
import { ScrollWords, ScrollLetters, ScrollPhoto, ScrollReveal } from "@/components/ui/ScrollAnimations";

export default function GalleryPreview() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { openLightbox } = useLightbox();

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return galleryItems.slice(0, 8);
    return galleryItems.filter((item) => item.category === activeCategory).slice(0, 8);
  }, [activeCategory]);

  const lightboxItems = useMemo(() => {
    return filteredItems.map((item) => ({
      src: item.image,
      title: item.title,
      alt: item.alt,
    }));
  }, [filteredItems]);

  return (
    <section className="bg-white py-20 sm:py-36 lg:py-40">
      <div className="container mx-auto px-4 sm:px-10 lg:px-16">
        {/* Section Heading with Scroll-revealed Words and Letters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 text-[#C6A56B] text-[11px] uppercase tracking-[0.3em] font-semibold mb-3">
              <Sparkles size={14} />
              <ScrollLetters text="THE VISUAL ARCHIVE" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#12352B] font-semibold">
              <ScrollWords text="Moments at Suraj." />
            </h2>
            <ScrollReveal delay={0.15} distance={15}>
              <p className="text-[#202420]/65 text-sm font-light mt-2">
                A curated photographic impression of our resort, swimming pool, suites, and convention halls.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={0.2}>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[#12352B] hover:text-[#C6A56B] transition-colors group"
            >
              <span>View Full Gallery ({galleryItems.length} Photos)</span>
              <ArrowRight size={14} className="text-[#C6A56B] transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-12 overflow-x-auto pb-2">
          {galleryCategories.map((cat, catIdx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-5 py-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#12352B] text-white shadow-md scale-105"
                    : "bg-[#FAF8F5] text-[#202420]/75 hover:bg-[#A2B29F]/20 border border-[#C6A56B]/25"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid with ScrollPhoto Zoom & Reveal */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <ScrollReveal
                key={item.id}
                delay={index * 0.08}
                distance={35}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-[#C6A56B]/20 bg-[#FAF8F5]"
              >
                <div
                  className="w-full h-full relative"
                  onClick={() => openLightbox(item.image, index, lightboxItems)}
                >
                  <ScrollPhoto delay={index * 0.08} className="w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A211B]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="self-end p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                        <Maximize2 size={16} />
                      </div>
                      <div>
                        <h4 className="font-serif text-white text-base font-medium drop-shadow">
                          {item.title}
                        </h4>
                        <p className="text-[#DFCA9E] text-[10px] uppercase tracking-wider mt-1">
                          Click to expand
                        </p>
                      </div>
                    </div>
                  </ScrollPhoto>
                </div>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
