"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLightbox } from "@/context/LightboxContext";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";

export default function Lightbox() {
  const {
    isOpen,
    currentItem,
    currentIndex,
    itemsList,
    closeLightbox,
    nextImage,
    prevImage,
  } = useLightbox();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    },
    [closeLightbox, nextImage, prevImage]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 cursor-zoom-out select-none"
        onClick={closeLightbox}
      >
        {/* Top Bar with title & close button */}
        <div
          className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 z-50 flex items-center justify-between text-white"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col">
            <span className="font-serif text-sm sm:text-base text-[#DFCA9E]">
              {currentItem.title || "Suraj Resorts & Convention Hall"}
            </span>
            {itemsList.length > 1 && (
              <span className="text-[11px] text-white/60 tracking-wider">
                Photo {currentIndex + 1} of {itemsList.length}
              </span>
            )}
          </div>

          <button
            onClick={closeLightbox}
            aria-label="Close photo viewer"
            className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
          >
            <X size={22} />
          </button>
        </div>

        {/* Previous Button */}
        {itemsList.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 z-50 p-3 bg-black/60 hover:bg-[#C6A56B] rounded-full text-white transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Next Button */}
        {itemsList.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 z-50 p-3 bg-black/60 hover:bg-[#C6A56B] rounded-full text-white transition-all duration-300 cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {/* Main Lightbox Image */}
        <motion.div
          key={currentItem.src}
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full h-[75vh] sm:h-[82vh] max-w-6xl rounded-xl overflow-hidden cursor-default shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={currentItem.src}
            alt={currentItem.alt || currentItem.title || "Suraj Resorts"}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
