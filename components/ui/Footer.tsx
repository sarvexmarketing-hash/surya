"use client";

import Link from "next/link";
import { Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig, getGeneralWhatsAppUrl } from "@/data/site";
import { useEnquireModal } from "@/context/EnquireModalContext";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const { openModal } = useEnquireModal();

  return (
    <footer className="bg-[#0A211B] text-white pt-16 sm:pt-24 pb-12 border-t border-[#C6A56B]/25">
      <div className="container mx-auto px-4 sm:px-10 lg:px-16">
        {/* Main 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 pb-16 border-b border-[#C6A56B]/20">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-block">
              <BrandLogo variant="gold" showTagline={true} />
            </Link>
            <p className="text-white/70 text-sm font-light leading-relaxed">
              A serene resort retreat and premier event destination in Timmapur, Warangal.
              Offering swimming pool recreation, peaceful stays, and grand celebration venues.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#20ba59] transition-colors shadow"
              >
                <MessageCircle size={14} />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>

          {/* Column 2: The Resort Collection */}
          <div>
            <h4 className="font-serif text-sm text-[#DFCA9E] tracking-[0.22em] uppercase font-semibold mb-6">
              The Collection
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/75 font-light">
              <li>
                <Link href="/" className="hover:text-[#DFCA9E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-[#DFCA9E] transition-colors">
                  Suites &amp; Accommodations
                </Link>
              </li>
              <li>
                <Link href="/swimming-pool" className="hover:text-[#DFCA9E] transition-colors">
                  Swimming Pool &amp; Sun Deck
                </Link>
              </li>
              <li>
                <Link href="/convention-hall" className="hover:text-[#DFCA9E] transition-colors">
                  Grand Convention Hall
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#DFCA9E] transition-colors">
                  Weddings &amp; Celebrations
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#DFCA9E] transition-colors">
                  Curated Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#DFCA9E] transition-colors">
                  About the Resort
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Experiences & Enquiries */}
          <div>
            <h4 className="font-serif text-sm text-[#DFCA9E] tracking-[0.22em] uppercase font-semibold mb-6">
              Guest Services
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/75 font-light">
              <li>
                <button
                  onClick={() => openModal()}
                  className="hover:text-[#DFCA9E] transition-colors text-left flex items-center gap-1.5 group"
                >
                  <span>Book a Room Stay</span>
                  <ArrowUpRight size={13} className="text-[#C6A56B] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal()}
                  className="hover:text-[#DFCA9E] transition-colors text-left flex items-center gap-1.5 group"
                >
                  <span>Swimming Pool Access</span>
                  <ArrowUpRight size={13} className="text-[#C6A56B] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal()}
                  className="hover:text-[#DFCA9E] transition-colors text-left flex items-center gap-1.5 group"
                >
                  <span>Weddings &amp; Receptions</span>
                  <ArrowUpRight size={13} className="text-[#C6A56B] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal()}
                  className="hover:text-[#DFCA9E] transition-colors text-left flex items-center gap-1.5 group"
                >
                  <span>Private Parties &amp; Lawns</span>
                  <ArrowUpRight size={13} className="text-[#C6A56B] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal()}
                  className="hover:text-[#DFCA9E] transition-colors text-left flex items-center gap-1.5 group"
                >
                  <span>Corporate Meets &amp; Retreats</span>
                  <ArrowUpRight size={13} className="text-[#C6A56B] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4 className="font-serif text-sm text-[#DFCA9E] tracking-[0.22em] uppercase font-semibold mb-6">
              Contact &amp; Location
            </h4>
            <div className="flex flex-col gap-4 text-sm text-white/75 font-light">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C6A56B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{siteConfig.address.line1}</p>
                  <p>{siteConfig.address.locality}</p>
                  <p>{siteConfig.address.state}, India — {siteConfig.address.postalCode}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#C6A56B] shrink-0" />
                <div>
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="hover:text-[#DFCA9E] font-semibold text-white transition-colors block text-base"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <span className="text-[11px] text-[#A2B29F]">Primary Reservation Desk</span>
                </div>
              </div>

              {siteConfig.contact.alternatePhones.length > 0 && (
                <div className="pl-7 text-xs text-white/60 space-y-1">
                  {siteConfig.contact.alternatePhones.map((alt) => (
                    <div key={alt.number}>
                      <a href={`tel:${alt.raw}`} className="hover:text-white transition-colors">
                        {alt.number} ({alt.label})
                      </a>
                    </div>
                  ))}
                </div>
              )}

              <a
                href={siteConfig.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#DFCA9E] hover:underline pt-2 font-medium"
              >
                <span>Driving Directions on Google Maps</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Suraj Resorts &amp; Convention Hall. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-white/40">
            <span>Opp. Thallapadmavathi College Lane, Timmapur, Warangal</span>
            <span>&bull;</span>
            <Link
              href="/admin"
              className="text-[#DFCA9E]/70 hover:text-[#DFCA9E] transition-colors underline-offset-4 hover:underline"
            >
              Management Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
