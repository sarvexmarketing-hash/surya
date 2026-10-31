"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "light" | "dark" | "gold";
  showTagline?: boolean;
  className?: string;
}

export default function BrandLogo({
  variant = "light",
  showTagline = true,
  className,
}: BrandLogoProps) {
  const isLight = variant === "light";
  const isGold = variant === "gold";

  return (
    <div className={cn("flex items-center gap-2 sm:gap-3 group select-none shrink-0 min-w-0", className)}>
      {/* Luxury Royal Crest / Sun Monogram */}
      <div className="relative w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-105">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Sunburst Ring */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke={isLight ? "#DFCA9E" : "#C6A56B"}
            strokeWidth="1.2"
            strokeDasharray="3 3"
            opacity="0.8"
          />
          {/* Inner Solid Ring */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke={isLight ? "#DFCA9E" : "#C6A56B"}
            strokeWidth="1.5"
          />
          {/* Sun Rays Motif */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="50"
              y1="13"
              x2="50"
              y2="18"
              transform={`rotate(${angle} 50 50)`}
              stroke={isLight ? "#DFCA9E" : "#C6A56B"}
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
          {/* Central Lotus & 'S' Emblem */}
          <path
            d="M50 28 C 45 36, 38 42, 38 52 C 38 60, 43 65, 50 67 C 57 65, 62 60, 62 52 C 62 42, 55 36, 50 28 Z"
            fill={isLight ? "url(#goldGradLight)" : "url(#goldGradDark)"}
          />
          <path
            d="M44 58 C 42 66, 50 72, 50 72 C 50 72, 58 66, 56 58 Z"
            fill={isLight ? "#DFCA9E" : "#C6A56B"}
            opacity="0.9"
          />
          {/* Stylized 'S' in center */}
          <path
            d="M 52 44 C 47 43, 46 47, 49 49 C 53 51, 54 55, 48 56"
            stroke="#163D32"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          <defs>
            <linearGradient id="goldGradLight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFF3D6" />
              <stop offset="50%" stopColor="#DFCA9E" />
              <stop offset="100%" stopColor="#C6A56B" />
            </linearGradient>
            <linearGradient id="goldGradDark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#DFCA9E" />
              <stop offset="50%" stopColor="#C6A56B" />
              <stop offset="100%" stopColor="#9E7C42" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typographic Wordmark with strict nowrap protection */}
      <div className="flex flex-col text-left whitespace-nowrap min-w-0">
        <span
          className={cn(
            "font-serif text-[13px] sm:text-[16px] md:text-xl font-bold uppercase transition-colors leading-tight tracking-[0.1em] sm:tracking-[0.18em]",
            isLight
              ? "text-white"
              : isGold
              ? "text-[#DFCA9E]"
              : "text-[#163D32]"
          )}
        >
          SURAJ RESORTS
        </span>
        {showTagline && (
          <span
            className={cn(
              "text-[7px] sm:text-[8.5px] uppercase font-medium tracking-[0.14em] sm:tracking-[0.24em] mt-0.5 sm:mt-1 transition-colors whitespace-nowrap",
              isLight ? "text-[#DFCA9E]/90" : "text-[#C6A56B]"
            )}
          >
            <span className="inline">&amp; CONVENTION HALL</span>
            <span className="hidden sm:inline"> &bull; WARANGAL</span>
          </span>
        )}
      </div>
    </div>
  );
}
