"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { useLightbox } from "@/context/LightboxContext";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { openLightbox } = useLightbox();

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const lightboxItems = useMemo(() => {
    return filteredItems.map((item) => ({
      src: item.image,
      title: item.title,
      alt: item.alt,
    }));
  }, [filteredItems]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[45vh] min-h-[350px] overflow-hidden flex items-center justify-center bg-[#12352B]">
        <div className="absolute inset-0 bg-[#0A211B]" />
        <div className="relative z-10 text-center text-white px-6 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#DFCA9E] font-medium mb-3">
            PHOTO ARCHIVE &bull; SURAJ RESORTS
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold mb-4">
            A Visual Journey.
          </h1>
          <p className="text-white/80 text-sm sm:text-base font-light">
            Explore genuine scenes from our swimming pool, convention hall, guest accommodations, and celebration lawns in Timmapur, Warangal.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {galleryCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs px-5 py-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#163D32] text-white shadow-lg scale-105"
                      : "bg-white text-[#202420]/75 hover:bg-[#A9B8A6]/30 border border-[#C6A56B]/20"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md bg-white border border-[#C6A56B]/20"
                  onClick={() => openLightbox(item.image, index, lightboxItems)}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="self-end p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <Maximize2 size={16} />
                    </div>
                    <div>
                      <h3 className="font-serif text-white text-base font-medium drop-shadow">
                        {item.title}
                      </h3>
                      <p className="text-[#DFCA9E] text-[10px] uppercase tracking-wider mt-1">
                        Click to enlarge
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
