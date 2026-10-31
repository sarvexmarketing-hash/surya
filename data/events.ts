export type EventCategory = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
};

export const eventsData: EventCategory[] = [
  {
    id: "weddings",
    title: "Weddings & Grand Receptions",
    tagline: "Begin your new journey with unforgettable grandeur in Warangal.",
    description:
      "From traditional wedding rituals to grand evening receptions, Suraj Resorts & Convention Hall provides a splendid backdrop. Featuring our spacious convention hall, landscaped open lawns, dedicated guest accommodation, and ample guest parking.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Spacious indoor air-conditioned convention hall",
      "Expansive outdoor party lawns under open skies",
      "Comfortable guest rooms for family & bride/groom party",
      "Direct vehicle access & dedicated guest parking",
      "Catering area & stage setup compatibility",
    ],
  },
  {
    id: "birthdays",
    title: "Birthday & Anniversary Celebrations",
    tagline: "Celebrate milestones with loved ones in an intimate resort ambiance.",
    description:
      "Host memorable birthday bashes, milestone anniversaries, and poolside parties. With vibrant outdoor spaces and flexible hall arrangements, every celebration becomes personal and special.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Poolside event option with ambient evening lighting",
      "Flexible seating & decorative theme arrangements",
      "Music & entertainment friendly spaces",
      "Private dining and customized party setups",
    ],
  },
  {
    id: "family-functions",
    title: "Family Gatherings & Reunions",
    tagline: "Reunite with warmth, good food, and relaxed resort vibes.",
    description:
      "Whether it is an engagement ceremony, naming ceremony, family get-together, or festive celebration, our property offers the comfort of home combined with resort luxury.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Multiple venue spaces to suit varying group sizes",
      "Safe, enclosed resort environment for kids and elders",
      "Swimming pool recreation for all family members",
      "Personalized coordination by our local event team",
    ],
  },
  {
    id: "corporate",
    title: "Corporate Meets & Company Retreats",
    tagline: "Inspiring business discussions away from city bustle.",
    description:
      "Host team offsites, annual general meetings, business conclaves, and dealer meets. Combine focused indoor presentations in the convention hall with team bonding by the swimming pool.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Hall suitable for theatre and cluster seating",
      "Power backup and audio-visual compatibility",
      "Breakout zones across green gardens",
      "Convenient location on Timmapur road, Warangal",
    ],
  },
];
