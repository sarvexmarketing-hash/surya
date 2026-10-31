"use client";

import { MessageCircle } from "lucide-react";
import { getGeneralWhatsAppUrl } from "@/data/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getGeneralWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Suraj Resorts on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 bg-[#25D366] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:bg-[#20ba59] transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle size={24} className="fill-white stroke-[#25D366]" />
      <span className="hidden sm:inline text-xs font-medium tracking-wide uppercase">
        WhatsApp Us
      </span>
    </a>
  );
}

