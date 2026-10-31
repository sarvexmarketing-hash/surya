"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

interface ScrollWordsProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

/**
 * Editorial scroll reveal that causes individual words to rise up out of an invisible mask
 * as the user scrolls down the page.
 */
export function ScrollWords({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.04,
  as: Component = "span",
}: ScrollWordsProps) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReduced ? 0 : "120%",
      rotateZ: prefersReduced ? 0 : 2,
    },
    visible: {
      opacity: 1,
      y: "0%",
      rotateZ: 0,
      transition: {
        duration: 0.75,
        ease: LUXURY_EASE,
      },
    },
  };

  return (
    <Component className={`inline-block ${className}`}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.28em] gap-y-[0.1em]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden py-0.5">
            <motion.span
              className={`inline-block ${wordClassName}`}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

interface ScrollLettersProps {
  text: string;
  className?: string;
  letterClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

/**
 * Character-by-character reveal for prestigious eyebrows, badges, and focal titles.
 */
export function ScrollLetters({
  text,
  className = "",
  letterClassName = "",
  delay = 0,
  stagger = 0.02,
  as: Component = "span",
}: ScrollLettersProps) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: prefersReduced ? 0 : 20,
      filter: prefersReduced ? "none" : "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: LUXURY_EASE,
      },
    },
  };

  return (
    <Component className={`inline-block ${className}`}>
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.3em]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {words.map((word, wordIdx) => (
          <span key={`w-${wordIdx}`} className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIdx) => (
              <motion.span
                key={`c-${wordIdx}-${charIdx}`}
                className={`inline-block ${letterClassName}`}
                variants={letterVariants}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

interface ScrollPhotoProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "fade" | "scale";
}

/**
 * Editorial image wrapper that gracefully zooms in from a cinematic scale
 * and unmasks as the user scrolls into view.
 */
export function ScrollPhoto({
  children,
  className = "",
  delay = 0,
  direction = "scale",
}: ScrollPhotoProps) {
  const prefersReduced = useReducedMotion();

  const getInitial = () => {
    if (prefersReduced) return { opacity: 0 };
    switch (direction) {
      case "up":
        return { opacity: 0, y: 50, scale: 1.05 };
      case "fade":
        return { opacity: 0 };
      case "scale":
      default:
        return { opacity: 0, scale: 1.12, filter: "brightness(0.9)" };
    }
  };

  const getTarget = () => {
    if (prefersReduced) return { opacity: 1 };
    switch (direction) {
      case "up":
        return { opacity: 1, y: 0, scale: 1 };
      case "fade":
        return { opacity: 1 };
      case "scale":
      default:
        return { opacity: 1, scale: 1, filter: "brightness(1)" };
    }
  };

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.div
        className="w-full h-full relative"
        initial={getInitial()}
        whileInView={getTarget()}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  onClick?: () => void;
}

/**
 * General-purpose smooth scroll reveal for cards, text blocks, badges, and CTAs.
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  direction = "up",
  distance = 35,
  onClick,
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();

  const getTransform = () => {
    if (prefersReduced || direction === "none") return { x: 0, y: 0 };
    switch (direction) {
      case "up":
        return { x: 0, y: distance };
      case "down":
        return { x: 0, y: -distance };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
    }
  };

  return (
    <motion.div
      onClick={onClick}
      className={className}
      initial={{
        opacity: 0,
        ...getTransform(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
    >
      {children}
    </motion.div>
  );
}
