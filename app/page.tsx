import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import ExperienceCards from "@/components/home/ExperienceCards";
import PropertyShowcase from "@/components/home/PropertyShowcase";
import DynamicEstimator from "@/components/home/DynamicEstimator";
import VisualBreak from "@/components/home/VisualBreak";
import EventsSection from "@/components/home/EventsSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import LocationSection from "@/components/home/LocationSection";
import FinalConversion from "@/components/home/FinalConversion";

export default function HomePage() {
  return (
    <>
      {/* SECTION B: Full-screen cinematic hero */}
      <Hero />

      {/* SECTION C: Introduction */}
      <Introduction />

      {/* SECTION D: Experience the Resort (Swimming Pool, Stay & Relax, Convention Hall) */}
      <ExperienceCards />

      {/* Interactive Luxury Showcase (The Pool, The Hall, Suites, Lawns) */}
      <PropertyShowcase />

      {/* Dynamic Stay & Event Estimator */}
      <DynamicEstimator />

      {/* SECTION E: Full-width visual break */}
      <VisualBreak />

      {/* SECTION F: Weddings and events */}
      <EventsSection />

      {/* SECTION G: Gallery preview */}
      <GalleryPreview />

      {/* SECTION H: Location & Directions */}
      <LocationSection />

      {/* SECTION I: Final conversion section */}
      <FinalConversion />
    </>
  );
}
