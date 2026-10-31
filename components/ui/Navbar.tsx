"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { useEnquireModal } from "@/context/EnquireModalContext";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useEnquireModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const showDarkNavbar = isScrolled || !isHome;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Suites & Stay", href: "/rooms" },
    { name: "Swimming Pool", href: "/swimming-pool" },
    { name: "Convention Hall", href: "/convention-hall" },
    { name: "Weddings & Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "The Resort", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full">
        {/* Top Luxury Announcement Line (Desktop Only) */}
        <div
          className={cn(
            "transition-all duration-500 hidden md:block overflow-hidden border-b",
            showDarkNavbar
              ? "h-0 opacity-0 border-transparent"
              : "h-9 opacity-100 bg-[#0A211B]/85 backdrop-blur-md border-[#C6A56B]/20"
          )}
        >
          <div className="container mx-auto px-6 lg:px-12 h-full flex items-center justify-between text-[11px] text-[#E5D2AB] tracking-[0.2em] uppercase font-light">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-[#C6A56B]" />
              <span>Timmapur, Warangal, Telangana &bull; Opp. Thallapadmavathi College</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Phone size={11} className="text-[#C6A56B]" />
                <span>Concierge: {siteConfig.contact.phone}</span>
              </a>
              <span className="text-[#C6A56B]/40">&bull;</span>
              <span className="text-white/70">Exclusive Resort &amp; Venue</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav
          className={cn(
            "transition-all duration-300 w-full",
            showDarkNavbar
              ? "bg-[#FAF8F5]/96 backdrop-blur-md shadow-sm border-b border-[#C6A56B]/25 py-2.5 sm:py-3.5"
              : "bg-gradient-to-b from-black/85 via-black/45 to-transparent py-3 sm:py-5"
          )}
        >
          <div className="container mx-auto px-3 sm:px-6 lg:px-12 flex items-center justify-between gap-2 max-w-full">
            {/* Brand Logo with Royal Crest */}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center shrink-0 min-w-0 py-0.5"
            >
              <BrandLogo
                variant={showDarkNavbar ? "dark" : "light"}
                showTagline={true}
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-7 lg:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-[11.5px] uppercase tracking-[0.2em] font-medium transition-all relative py-1 group",
                      showDarkNavbar
                        ? isActive
                          ? "text-[#12352B] font-semibold"
                          : "text-[#202420]/80 hover:text-[#12352B]"
                        : isActive
                        ? "text-[#E5D2AB] font-semibold"
                        : "text-white/85 hover:text-white"
                    )}
                  >
                    <span>{link.name}</span>
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-[1.5px] bg-[#C6A56B] transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Desktop Call & Enquire CTAs */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className={cn(
                  "flex items-center gap-2 text-xs font-medium tracking-wider transition-colors",
                  showDarkNavbar
                    ? "text-[#12352B] hover:text-[#C6A56B]"
                    : "text-white/90 hover:text-white"
                )}
              >
                <div className="w-7 h-7 rounded-full border border-[#C6A56B]/40 flex items-center justify-center">
                  <Phone size={12} className="text-[#C6A56B]" />
                </div>
                <span className="hidden xl:inline text-[11px] uppercase tracking-[0.16em]">
                  {siteConfig.contact.phone}
                </span>
              </a>

              <button
                onClick={() => openModal()}
                className="relative overflow-hidden group bg-[#12352B] hover:bg-[#0A211B] text-white border border-[#C6A56B]/70 px-5 sm:px-6 py-2.5 rounded-full text-[10.5px] uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>Enquire Now</span>
                </span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 lg:hidden shrink-0">
              <button
                onClick={() => openModal()}
                className="bg-[#12352B] text-white text-[9.5px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] font-semibold px-2.5 sm:px-3.5 py-1.5 rounded-full border border-[#C6A56B]/60 shadow"
              >
                Enquire
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className={cn(
                  "p-1.5 sm:p-2 rounded-lg transition-colors",
                  showDarkNavbar ? "text-[#12352B]" : "text-white"
                )}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#0A211B]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 pt-24 sm:pt-28 transition-all duration-300 lg:hidden overflow-y-auto",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-4 text-left">
          <div className="pb-3 border-b border-[#C6A56B]/20 flex items-center justify-between">
            <span className="text-[#C6A56B] text-[10px] uppercase tracking-[0.3em] font-semibold">
              The Collection
            </span>
            <span className="text-white/40 text-[10px] tracking-widest uppercase">Warangal, India</span>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-serif text-xl sm:text-2xl tracking-wide transition-colors flex items-center justify-between group py-1",
                    isActive ? "text-[#E5D2AB] font-medium" : "text-white/80 hover:text-white"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#C6A56B] opacity-0 group-hover:opacity-100 transition-opacity">
                    &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="border-t border-[#C6A56B]/25 pt-5 flex flex-col gap-3.5 mt-6">
          <div className="text-white/75 text-xs font-light leading-relaxed">
            <p className="text-[#C6A56B] text-[9.5px] uppercase tracking-[0.25em] font-medium mb-1">
              Verified Address
            </p>
            <p className="text-[11px] sm:text-xs">{siteConfig.address.full}</p>
          </div>

          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="flex items-center gap-3 text-white text-sm font-medium py-1"
          >
            <div className="w-7 h-7 rounded-full bg-[#C6A56B]/20 flex items-center justify-center">
              <Phone size={13} className="text-[#DFCA9E]" />
            </div>
            <span>{siteConfig.contact.phone}</span>
          </a>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openModal();
            }}
            className="w-full bg-[#C6A56B] hover:bg-[#E5D2AB] text-[#0A211B] py-3 rounded-full font-serif font-semibold text-xs tracking-[0.2em] uppercase transition-colors shadow-xl"
          >
            Make an Enquiry
          </button>
        </div>
      </div>
    </>
  );
}
