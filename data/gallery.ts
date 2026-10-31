export type GalleryItem = {
  id: string;
  category: "pool" | "rooms" | "convention" | "outdoor" | "events";
  title: string;
  alt: string;
  image: string;
  size?: "regular" | "large" | "horizontal" | "vertical";
};

export const galleryCategories = [
  { id: "all", label: "All Photos" },
  { id: "pool", label: "Swimming Pool" },
  { id: "rooms", label: "Rooms & Stay" },
  { id: "convention", label: "Convention Hall" },
  { id: "outdoor", label: "Outdoor Spaces" },
  { id: "events", label: "Events & Weddings" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "pool-main",
    category: "pool",
    title: "Suraj Resorts Swimming Pool — Timmapur, Warangal",
    alt: "Suraj Resorts genuine swimming pool with blue mosaic tiles and tropical green surroundings in Timmapur, Warangal",
    image: "/images/suraj-pool-hero.jpg",
    size: "large",
  },
  {
    id: "convention-grand",
    category: "convention",
    title: "Grand Convention Hall Stage & Seating",
    alt: "Spacious convention hall decorated for special gatherings and celebrations",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    size: "horizontal",
  },
  {
    id: "events-wedding",
    category: "events",
    title: "Evening Wedding Lawn Setup",
    alt: "Illuminated outdoor wedding decor and celebration seating",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    size: "vertical",
  },
  {
    id: "room-deluxe",
    category: "rooms",
    title: "Deluxe Resort Room Interior",
    alt: "Comfortable air-conditioned resort accommodation",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    size: "regular",
  },
  {
    id: "pool-sunset",
    category: "pool",
    title: "Poolside Relaxation Area",
    alt: "Crystal clear pool water with comfortable loungers",
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    size: "regular",
  },
  {
    id: "outdoor-lawn",
    category: "outdoor",
    title: "Lush Green Party Lawns",
    alt: "Well-manicured landscape and open skies at Suraj Resorts",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
    size: "horizontal",
  },
  {
    id: "convention-banquet",
    category: "convention",
    title: "Banquet & Function Hall Space",
    alt: "Elegantly arranged banquet hall for receptions and family functions",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    size: "regular",
  },
  {
    id: "events-birthday",
    category: "events",
    title: "Private Celebration Dining Setup",
    alt: "Evening dining and private party arrangement under soft ambient lighting",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    size: "regular",
  },
  {
    id: "rooms-suite",
    category: "rooms",
    title: "Family Suite Bedding & Lounge",
    alt: "Premium suite room accommodating families visiting Warangal",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    size: "horizontal",
  },
  {
    id: "pool-aerial",
    category: "pool",
    title: "Tropical Pool Atmosphere",
    alt: "Refreshing swimming pool surrounded by tropical palm landscaping",
    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
    size: "regular",
  },
  {
    id: "outdoor-entrance",
    category: "outdoor",
    title: "Resort Walkway & Greenery",
    alt: "Tranquil outdoor pathway at the resort",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    size: "regular",
  },
  {
    id: "events-celebration",
    category: "events",
    title: "Grand Evening Celebration Backdrop",
    alt: "Festive celebration backdrop and decorative lighting",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    size: "large",
  },
];
