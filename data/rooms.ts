export type RoomType = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  occupancy: string;
  amenities: string[];
  priceNote: string;
  isAvailableForEnquiry: boolean;
};

export const roomsData: RoomType[] = [
  {
    id: "deluxe-resort-room",
    name: "Deluxe Resort Room",
    tagline: "Comfortable elegance overlooking the peaceful resort grounds.",
    description:
      "A thoughtfully appointed room designed for relaxing stays, weekend getaways, or families attending events at the convention hall. Features air conditioning, comfortable bedding, and convenient access to the pool.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    ],
    occupancy: "2 Adults (Extra bed on request)",
    amenities: [
      "Air Conditioning",
      "En-suite Bathroom",
      "Resort Garden / Pool View",
      "Television & Seating",
      "Direct Pool Proximity",
      "Housekeeping Service",
    ],
    priceNote: "Tariff on Request (Contact for current seasonal pricing)",
    isAvailableForEnquiry: true,
  },
  {
    id: "premium-family-suite",
    name: "Premium Family Suite",
    tagline: "Generous space for wedding guests, families, and group celebrations.",
    description:
      "Ideal for families, wedding parties, and group attendees desiring extra living space, peace, and proximity to all event lawns and convention facilities.",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    ],
    occupancy: "3 - 4 Guests",
    amenities: [
      "Spacious Living Area",
      "Air Conditioning",
      "Wardrobe & Dressing Vanity",
      "24/7 Power Backup",
      "Dedicated Parking",
      "Convenient Event Access",
    ],
    priceNote: "Tariff on Request (Special package rates for event bookings)",
    isAvailableForEnquiry: true,
  },
  {
    id: "executive-stay-room",
    name: "Executive Stay Room",
    tagline: "Serene ambiance designed for restful corporate and weekend visits.",
    description:
      "Designed with quiet sophistication for guests seeking downtime or visiting Warangal on business, corporate retreats, and private occasions.",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    ],
    occupancy: "2 Adults",
    amenities: [
      "King / Queen Bedding",
      "Air Conditioning",
      "Work Desk & Seating",
      "Hot Water Supply",
      "Swimming Pool Access",
    ],
    priceNote: "Tariff on Request",
    isAvailableForEnquiry: true,
  },
];
