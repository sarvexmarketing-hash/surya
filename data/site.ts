export const siteConfig = {
  name: "Suraj Resorts & Convention Hall",
  shortName: "Suraj Resorts",
  tagline: "Warangal's Best Resort & Convention Hall",
  description:
    "Discover Warangal's best resort in Timmapur. Suraj Resorts & Convention Hall features a refreshing swimming pool, premium stay accommodations, and a grand convention hall for weddings, celebrations, and corporate events.",
  siteUrl: "https://surajresorts.com",

  // Verified Business Address
  address: {
    line1: "Opposite Thallapadmavathi College Lane",
    locality: "Timmapur, Warangal",
    state: "Telangana",
    country: "India",
    postalCode: "506005",
    full: "Opposite Thallapadmavathi College Lane, Timmapur, Warangal, Telangana, India — 506005",
    street: "Opposite Thallapadmavathi College Lane, Timmapur",
  },

  // Contact Numbers
  contact: {
    phone: "+91 98452 08013",
    phoneRaw: "+919845208013",
    whatsappNumber: "919845208013", // formatted for wa.me/
    email: "enquiry@surajresorts.com", // placeholder, editable
    alternatePhones: [
      { label: "Bookings & Enquiries", number: "+91 92063 19999", raw: "+919206319999" },
      { label: "Event Desk", number: "+91 95024 87513", raw: "+919502487513" },
    ],
  },

  // Location & Maps
  maps: {
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15180.208152342083!2d79.5855!3d17.9785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f59!2sTimmapur%2C+Warangal%2C+Telangana+506005!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Opposite+Thallapadmavathi+College+Lane+Timmapur+Warangal+Telangana+506005",
  },

  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/919845208013",
  },

  // Categories & Offerings
  categories: [
    "Resort & Accommodation",
    "Swimming Pool & Recreation",
    "Grand Convention Hall",
    "Weddings & Celebrations",
    "Private Parties & Family Gatherings",
    "Corporate Events & Conferences",
  ],
};

// WhatsApp Utility Functions
export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}

export function getGeneralWhatsAppUrl(): string {
  const msg = `Hello Suraj Resorts & Convention Hall, I would like more information about your facilities and booking options.`;
  return createWhatsAppUrl(msg);
}

export function getRoomWhatsAppUrl(details?: {
  checkIn?: string;
  checkOut?: string;
  guests?: string | number;
  roomType?: string;
}): string {
  const checkIn = details?.checkIn || "[Check-in Date]";
  const checkOut = details?.checkOut || "[Check-out Date]";
  const guests = details?.guests || "[Number of Guests]";
  const roomType = details?.roomType ? ` (${details.roomType})` : "";
  const msg = `Hello Suraj Resorts & Convention Hall, I would like to enquire about accommodation${roomType}. Check-in: ${checkIn}. Check-out: ${checkOut}. Guests: ${guests}. Please share the available options and pricing.`;
  return createWhatsAppUrl(msg);
}

export function getEventWhatsAppUrl(details?: {
  eventType?: string;
  eventDate?: string;
  guestCount?: string | number;
}): string {
  const eventType = details?.eventType || "[Event Type]";
  const eventDate = details?.eventDate || "[Preferred Date]";
  const guestCount = details?.guestCount || "[Approximate Guests]";
  const msg = `Hello Suraj Resorts & Convention Hall, I would like to enquire about hosting an event. Event type: ${eventType}. Preferred date: ${eventDate}. Approximate guests: ${guestCount}. Please share availability and pricing.`;
  return createWhatsAppUrl(msg);
}

export function getPoolWhatsAppUrl(details?: {
  preferredDate?: string;
  guestCount?: string | number;
}): string {
  const preferredDate = details?.preferredDate || "[Preferred Date]";
  const guests = details?.guestCount || "[Number of Guests]";
  const msg = `Hello Suraj Resorts & Convention Hall, I would like to enquire about swimming pool access for ${guests} guests on ${preferredDate}. Please share entry guidelines, timing and charges.`;
  return createWhatsAppUrl(msg);
}
