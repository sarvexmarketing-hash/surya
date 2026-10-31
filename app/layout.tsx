import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import { EnquireModalProvider } from "@/context/EnquireModalContext";
import EnquireModal from "@/components/ui/EnquireModal";
import { LightboxProvider } from "@/context/LightboxContext";
import Lightbox from "@/components/ui/Lightbox";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Suraj Resorts & Convention Hall | Warangal's Best Resort",
    template: "%s | Suraj Resorts — Warangal's Best Resort",
  },
  description:
    "Experience Warangal's best resort in Timmapur. Suraj Resorts & Convention Hall features a sparkling swimming pool, deluxe stay rooms, and a grand venue for weddings, celebrations, and corporate events.",
  keywords: [
    "Suraj Resorts Warangal",
    "Suraj Resorts & Convention Hall",
    "Resort in Warangal",
    "Convention Hall Warangal",
    "Timmapur Resort",
    "Swimming Pool Resort Warangal",
    "Wedding Venues Warangal",
    "Telangana Resorts",
  ],
  authors: [{ name: "Suraj Resorts & Convention Hall" }],
  openGraph: {
    title: "Suraj Resorts & Convention Hall | Warangal, Telangana",
    description:
      "A peaceful getaway and grand celebration venue in Timmapur, Warangal. Swimming pool, resort rooms, convention hall, and private event spaces.",
    url: siteConfig.siteUrl,
    siteName: "Suraj Resorts & Convention Hall",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Resort",
              name: siteConfig.name,
              description: siteConfig.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.locality,
                addressRegion: siteConfig.address.state,
                postalCode: siteConfig.address.postalCode,
                addressCountry: "IN",
              },
              telephone: siteConfig.contact.phone,
              url: siteConfig.siteUrl,
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Swimming Pool",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Convention Hall",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Lawn & Event Grounds",
                  value: true,
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans bg-ivory text-foreground min-h-screen flex flex-col selection:bg-gold selection:text-white">
        <LightboxProvider>
          <EnquireModalProvider>
            <SmoothScroll>
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
              <FloatingWhatsApp />
              <EnquireModal />
              <Lightbox />
            </SmoothScroll>
          </EnquireModalProvider>
        </LightboxProvider>
      </body>
    </html>
  );
}
