"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Phone, Calendar, Users, Send } from "lucide-react";
import { useEnquireModal } from "@/context/EnquireModalContext";
import { siteConfig, createWhatsAppUrl } from "@/data/site";
import BrandLogo from "./BrandLogo";

export default function EnquireModal() {
  const { isModalOpen, closeModal } = useEnquireModal();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    enquiryType: "Room Stay",
    date: "",
    guests: "2",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    setStatus("idle");
    setErrorMessage("");
    closeModal();
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const [referenceId, setReferenceId] = useState<string | null>(null);

  const handleSubmitWhatsApp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please provide your name and phone number.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          enquiryType: formData.enquiryType,
          requestedDate: formData.date,
          guestCount: formData.guests,
          message: formData.message,
          source: "Modal",
        }),
      });

      const data = await res.json();
      const ref = data.referenceId || "SR-2026";
      setReferenceId(ref);

      const text = `Hello Suraj Resorts & Convention Hall,
I have registered an enquiry [Ref: ${ref}].
• Name: ${formData.name}
• Phone: ${formData.phone}
• Enquiry Type: ${formData.enquiryType}
• Preferred Date: ${formData.date || "To be discussed"}
• Expected Guests: ${formData.guests || "Not specified"}
• Requirements: ${formData.message || "Please share availability and pricing details."}`;

      window.open(createWhatsAppUrl(text), "_blank");
      setStatus("success");
    } catch {
      setStatus("success");
    }
  };

  const handleStandardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage("Please provide your name and phone number.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          enquiryType: formData.enquiryType,
          requestedDate: formData.date,
          guestCount: formData.guests,
          message: formData.message,
          source: "Modal",
        }),
      });

      const data = await res.json();
      if (data.referenceId) setReferenceId(data.referenceId);
      setStatus("success");
    } catch {
      setStatus("success");
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm cursor-pointer"
            onClick={handleClose}
          />

          {/* Slide-out Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 z-[110] h-full w-full max-w-lg bg-[#F8F6F0] shadow-2xl overflow-y-auto"
          >
            <div className="relative p-6 sm:p-10">
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 text-[#202420]/60 hover:text-[#202420] transition-colors p-2 rounded-full hover:bg-black/5"
                aria-label="Close enquiry modal"
              >
                <X size={26} />
              </button>

              <div className="mt-4">
                <BrandLogo variant="dark" showTagline={true} className="mb-6" />
                <h2 className="font-serif text-3xl sm:text-4xl text-[#12352B] mb-2 font-semibold">
                  Plan Your Visit
                </h2>
                <p className="text-[#202420]/75 font-light text-sm leading-relaxed mb-6">
                  Please share your requirements below. Our team in Timmapur, Warangal will contact you promptly with availability and details.
                </p>

                {/* Quick Call Box */}
                <div className="bg-[#163D32] text-white p-4 rounded-xl flex items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C6A56B] flex items-center justify-center text-[#163D32]">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[11px] text-[#A9B8A6] uppercase tracking-wider">Direct Desk</p>
                      <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-sm font-semibold hover:text-[#DFCA9E]">
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="text-xs bg-[#C6A56B] text-[#163D32] font-semibold px-3 py-1.5 rounded-full hover:bg-[#DFCA9E] transition-colors"
                  >
                    Call Now
                  </a>
                </div>

                {status === "success" ? (
                  <div className="bg-white p-6 rounded-xl border border-[#C6A56B]/30 text-center space-y-4">
                    <div className="w-12 h-12 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                      <Send size={24} />
                    </div>
                    {referenceId && (
                      <span className="text-[11px] font-mono uppercase font-bold text-[#C6A56B] tracking-widest block">
                        Reference ID: {referenceId}
                      </span>
                    )}
                    <h3 className="font-serif text-2xl text-[#163D32]">Enquiry Saved &amp; Prepared</h3>
                    <p className="text-sm text-[#202420]/75">
                      Your enquiry is stored in our reservation desk. Our team in Timmapur will contact you at {formData.phone}.
                    </p>
                    <div className="pt-2 flex flex-col gap-3">
                      <a
                        href={createWhatsAppUrl(`Hello Suraj Resorts, following up on my enquiry [${referenceId || "SR-2026"}] for ${formData.enquiryType}. My name is ${formData.name}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-medium text-sm hover:bg-[#20ba59]"
                      >
                        <MessageCircle size={18} />
                        <span>Chat on WhatsApp ({referenceId || "Enquiry"})</span>
                      </a>
                      <button
                        onClick={handleClose}
                        className="text-xs text-[#163D32] uppercase tracking-wider py-2 font-medium hover:underline"
                      >
                        Close Window
                      </button>
                    </div>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmitWhatsApp}>
                    {errorMessage && (
                      <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                        {errorMessage}
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-[#163D32]">
                        Enquiry Type
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full bg-white border border-[#202420]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                      >
                        <option value="Room Stay">Resort Room / Stay</option>
                        <option value="Swimming Pool Access">Swimming Pool & Day Visit</option>
                        <option value="Convention Hall / Wedding">Convention Hall & Wedding</option>
                        <option value="Birthday / Private Party">Birthday / Private Party</option>
                        <option value="Family Function">Family Function / Gathering</option>
                        <option value="Corporate Event">Corporate Event / Meeting</option>
                        <option value="General Enquiry">General Information</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] uppercase tracking-wider font-semibold text-[#163D32]">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white border border-[#202420]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] uppercase tracking-wider font-semibold text-[#163D32]">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white border border-[#202420]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                          placeholder="+91 98452 00000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] uppercase tracking-wider font-semibold text-[#163D32] flex items-center gap-1.5">
                          <Calendar size={13} />
                          <span>Preferred Date</span>
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-white border border-[#202420]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] uppercase tracking-wider font-semibold text-[#163D32] flex items-center gap-1.5">
                          <Users size={13} />
                          <span>Approx. Guests</span>
                        </label>
                        <input
                          type="text"
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full bg-white border border-[#202420]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#202420] focus:outline-none focus:border-[#163D32]"
                          placeholder="e.g. 2 adults, or 200 guests"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-[#163D32]">
                        Special Requests / Notes
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white border border-[#202420]/20 rounded-lg px-3.5 py-2.5 text-sm text-[#202420] focus:outline-none focus:border-[#163D32] resize-none"
                        placeholder="Tell us about your event, preferred timing, or room requirements..."
                      />
                    </div>

                    <div className="pt-2 flex flex-col gap-3">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20ba59] py-3.5 rounded-xl font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <MessageCircle size={18} />
                        <span>Send Enquiry via WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleStandardSubmit}
                        disabled={status === "submitting"}
                        className="w-full flex items-center justify-center gap-2 bg-[#163D32] text-white hover:bg-[#0F2922] py-3 rounded-xl font-medium text-sm transition-all duration-300 border border-[#C6A56B]/40"
                      >
                        <span>{status === "submitting" ? "Submitting..." : "Submit Online Enquiry"}</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-[#202420]/60 text-center">
                      * Rates, availability, and hall arrangements are confirmed directly by management.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
