"use client";

import { useState } from "react";
import { Phone, MapPin, MessageCircle, Send, Navigation } from "lucide-react";
import { siteConfig, createWhatsAppUrl } from "@/data/site";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError("Please provide your name and phone number.");
      return;
    }

    setSubmitting(true);
    let generatedRef = "";

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: "general",
          name: formData.name,
          phone: formData.phone,
          notes: `Subject: ${formData.subject} | Email: ${formData.email || "N/A"} | Message: ${formData.message || "General enquiry"}`,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data?.enquiry?.id) {
          generatedRef = data.enquiry.id;
          setReferenceId(generatedRef);
        }
      }
    } catch {
      // Non-blocking fallback
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }

    const message = `Hello Suraj Resorts & Convention Hall,
${generatedRef ? `[Reference: ${generatedRef}]\n` : ""}I have an enquiry:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || "Not provided"}
• Subject: ${formData.subject}
• Message: ${formData.message || "Please share information."}`;

    window.open(createWhatsAppUrl(message), "_blank");
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="bg-[#12352B] text-white py-16 sm:py-24 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#DFCA9E] font-medium mb-3">
            GET IN TOUCH &bull; SURAJ RESORTS
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold mb-4">
            Contact Us.
          </h1>
          <p className="text-white/80 text-sm sm:text-base font-light max-w-xl mx-auto">
            We are here to assist with your room stay bookings, pool day visits, and convention hall event arrangements in Timmapur, Warangal.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Contact Card */}
              <div className="bg-white p-8 rounded-3xl border border-[#C6A56B]/25 shadow-md">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
                  PRIMARY RESORT DESK
                </span>
                <h3 className="font-serif text-2xl text-[#163D32] font-semibold mt-1 mb-6">
                  Direct Line &amp; WhatsApp
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#163D32]/10 text-[#163D32] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={18} className="text-[#C6A56B]" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#202420]/60 font-medium">
                        Primary Booking Phone
                      </span>
                      <a
                        href={`tel:${siteConfig.contact.phoneRaw}`}
                        className="text-lg font-semibold text-[#163D32] hover:text-[#C6A56B] transition-colors block"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#202420]/60 font-medium">
                        Instant WhatsApp Chat
                      </span>
                      <a
                        href={createWhatsAppUrl("Hello Suraj Resorts, I would like to enquire about your facilities.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-[#25D366] hover:underline block"
                      >
                        Chat with our Desk
                      </a>
                    </div>
                  </div>

                  {siteConfig.contact.alternatePhones.length > 0 && (
                    <div className="pt-4 border-t border-[#C6A56B]/20">
                      <span className="text-[11px] uppercase tracking-wider text-[#202420]/60 font-medium block mb-2">
                        Alternate Event &amp; Booking Lines
                      </span>
                      <div className="space-y-2">
                        {siteConfig.contact.alternatePhones.map((alt) => (
                          <div key={alt.number} className="flex items-center justify-between text-xs text-[#202420]/80">
                            <span>{alt.label}</span>
                            <a href={`tel:${alt.raw}`} className="font-semibold text-[#163D32] hover:underline">
                              {alt.number}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Verified Location Card */}
              <div className="bg-white p-8 rounded-3xl border border-[#C6A56B]/25 shadow-md">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
                  PROPERTY ADDRESS
                </span>
                <h3 className="font-serif text-2xl text-[#163D32] font-semibold mt-1 mb-4">
                  Timmapur, Warangal
                </h3>

                <div className="flex items-start gap-3.5 mb-6 text-sm text-[#202420]/80">
                  <MapPin size={20} className="text-[#C6A56B] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#163D32]">{siteConfig.address.line1}</p>
                    <p>{siteConfig.address.locality}</p>
                    <p>{siteConfig.address.state}, India — {siteConfig.address.postalCode}</p>
                  </div>
                </div>

                <a
                  href={siteConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#163D32] hover:bg-[#0F2922] text-white py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all shadow"
                >
                  <Navigation size={14} className="text-[#C6A56B]" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact & Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#C6A56B]/25 shadow-lg">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A56B] font-semibold">
                  ONLINE INQUIRY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#163D32] font-semibold mt-1 mb-3">
                  Send a Message
                </h2>
                <p className="text-[#202420]/75 text-sm font-light leading-relaxed mb-8">
                  Fill in your requirements below. Clicking send will prepare your message directly for our management team.
                </p>

                {submitted ? (
                  <div className="p-8 bg-[#F8F6F0] rounded-2xl text-center space-y-4">
                    <div className="w-14 h-14 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                      <Send size={28} />
                    </div>
                    <h3 className="font-serif text-2xl text-[#163D32]">Thank You</h3>
                    {referenceId && (
                      <div className="inline-flex items-center gap-2 bg-white border border-[#C6A56B]/40 px-4 py-2 rounded-full text-xs font-mono font-semibold text-[#163D32]">
                        <span>Reference No:</span>
                        <span className="text-[#C6A56B] tracking-wider">{referenceId}</span>
                      </div>
                    )}
                    <p className="text-sm text-[#202420]/75 max-w-md mx-auto">
                      Your enquiry has been securely logged in our system. You can continue speaking with our team on WhatsApp or expect our phone reply shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setReferenceId(null);
                      }}
                      className="text-xs uppercase tracking-wider font-semibold text-[#163D32] underline pt-2"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    {formError && (
                      <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                          Contact Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98452 08013"
                          className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                          Enquiry Subject
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                        >
                          <option value="Room Stay Booking">Room Stay Booking</option>
                          <option value="Swimming Pool Day Visit">Swimming Pool Day Visit</option>
                          <option value="Convention Hall / Wedding">Convention Hall / Wedding</option>
                          <option value="Private Birthday / Party">Private Birthday / Party</option>
                          <option value="Corporate Offsite">Corporate Offsite</option>
                          <option value="General Enquiry">General Enquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs uppercase tracking-wider font-semibold text-[#163D32]">
                        Your Message / Questions
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please mention preferred dates, approximate guest count, or any specific requirements..."
                        className="w-full bg-[#F8F6F0] border border-[#202420]/20 rounded-xl px-4 py-3 text-sm text-[#202420] focus:outline-none focus:border-[#163D32] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white py-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-75"
                    >
                      <MessageCircle size={18} />
                      <span>{submitting ? "Submitting Enquiry..." : "Send Enquiry on WhatsApp"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-16 sm:mt-24 rounded-3xl overflow-hidden shadow-2xl border border-[#C6A56B]/30 h-[400px] sm:h-[480px]">
            <iframe
              title="Suraj Resorts Location Map"
              src={siteConfig.maps.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
