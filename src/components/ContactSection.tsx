import React, { useState, useEffect } from 'react';
import { BRAND_INFO } from '../data';
import { EnquiryData } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
  prefilledNote?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService = '',
  prefilledNote = '',
}) => {
  const [formData, setFormData] = useState<EnquiryData>({
    name: '',
    phone: '',
    service: prefilledService || '',
    location: '',
    message: prefilledNote || '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [lastEnquiry, setLastEnquiry] = useState<EnquiryData | null>(null);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledNote) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n${prefilledNote}` : prefilledNote,
      }));
    }
  }, [prefilledNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) return;

    const record: EnquiryData = {
      ...formData,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setLastEnquiry(record);
    setSubmitted(true);
  };

  const forwardToWhatsApp = () => {
    if (!lastEnquiry) return;
    const msg = `*New Website Enquiry - Jai Construction*
👤 *Name:* ${lastEnquiry.name}
📞 *Phone:* ${lastEnquiry.phone}
🏗️ *Service:* ${lastEnquiry.service}
📍 *Location:* ${lastEnquiry.location || 'Chennai'}
💬 *Requirements:* ${lastEnquiry.message || 'Looking for project discussion'}`;

    window.open(
      `https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent(msg)}`,
      '_blank'
    );
  };

  return (
    <section className="w-full py-20 sm:py-28 bg-[#f2f4f6]" id="contact">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-label-technical text-label-technical uppercase tracking-widest text-[#426086] font-bold">
                Reach Out Direct
              </span>
              <h2 className="font-headline-lg text-headline-lg text-[#191c1e] mt-1 font-bold">
                Contact Balaji R
              </h2>
              <p className="font-body-md text-body-md text-[#44474c] mt-2">
                Have questions regarding plots in Vengaivasal or need a construction quotation? We respond quickly with straightforward facts.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Card 1: Proprietor */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#eceef0] flex items-center justify-center text-[#000000] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">person</span>
                </div>
                <div>
                  <p className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold">Principal Contact</p>
                  <p className="font-title-md text-title-md text-[#191c1e] font-bold">Balaji R (Proprietor)</p>
                  <p className="font-body-sm text-body-sm text-[#426086] font-semibold">Jai Construction</p>
                </div>
              </div>

              {/* Card 2: Phone */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#eceef0] flex items-center justify-center text-[#000000] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <p className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold">Phone Call Direct</p>
                  <a
                    className="font-title-md text-title-md text-[#B45309] font-bold hover:underline"
                    href={`tel:${BRAND_INFO.phoneClean}`}
                  >
                    {BRAND_INFO.phone}
                  </a>
                  <p className="font-body-sm text-body-sm text-[#44474c]">{BRAND_INFO.operatingHours}</p>
                </div>
              </div>

              {/* Card 3: WhatsApp */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-700 shrink-0">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </div>
                <div>
                  <p className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold">Instant WhatsApp Desk</p>
                  <a
                    className="font-title-md text-title-md text-green-700 font-bold hover:underline"
                    href={`https://wa.me/${BRAND_INFO.phoneClean}?text=Hello%20Jai%20Construction%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {BRAND_INFO.phone} (Chat Now)
                  </a>
                  <p className="font-body-sm text-body-sm text-[#44474c]">Fast response on layouts, photos &amp; estimates</p>
                </div>
              </div>

              {/* Card 4: Email */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#eceef0] flex items-center justify-center text-[#000000] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <p className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold">Email Inquiries</p>
                  <a
                    className="font-title-md text-title-md text-[#426086] hover:underline font-semibold"
                    href={`mailto:${BRAND_INFO.email}`}
                  >
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              {/* Card 5: Address */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#eceef0] flex items-center justify-center text-[#000000] shrink-0">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <p className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold">Office &amp; Site Territory</p>
                  <p className="font-title-md text-title-md text-[#191c1e] font-semibold">{BRAND_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Location Map View Card */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-[#E2E8F0] bg-white">
              <div
                className="w-full h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${BRAND_INFO.mapImgUrl}')` }}
              >
                <div className="absolute inset-0 bg-[#000000]/20 backdrop-blur-[1px]"></div>
                <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1.5 rounded-lg shadow font-label-technical text-label-technical text-[#191c1e] flex items-center gap-1.5 font-bold">
                  <span className="material-symbols-outlined text-[#B45309] text-[16px]">pin_drop</span>
                  <span>Vengaivasal, Chennai 600126</span>
                </div>
              </div>
              <div className="p-3 bg-white flex items-center justify-between text-body-sm">
                <span className="text-[#44474c] font-medium">Hub: Medavakkam - Vengaivasal Belt</span>
                <a
                  className="font-label-technical text-label-technical text-[#426086] hover:underline font-semibold"
                  href="https://maps.google.com/?q=Vengaivasal,Chennai"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#E2E8F0] shadow-lg">
            <div className="space-y-2 mb-8">
              <h3 className="font-headline-md text-headline-md text-[#191c1e] font-bold">
                Submit an Enquiry
              </h3>
              <p className="font-body-sm text-body-sm text-[#44474c]">
                Fill in your specifications below for land purchase, civil quotation, or contracting requirements.
              </p>
            </div>

            {submitted && lastEnquiry ? (
              <div className="space-y-6 p-6 rounded-xl bg-green-50/70 border border-green-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">check</span>
                  </div>
                  <div>
                    <h4 className="font-title-md font-bold text-green-950">Enquiry Recorded Successfully!</h4>
                    <p className="text-xs text-green-800">
                      Thank you, {lastEnquiry.name}. Balaji R will review your requirement and follow up promptly.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-white border border-green-200 text-xs space-y-1.5 text-[#191c1e]">
                  <p><span className="font-semibold text-slate-500">Service:</span> {lastEnquiry.service}</p>
                  <p><span className="font-semibold text-slate-500">Phone:</span> {lastEnquiry.phone}</p>
                  <p><span className="font-semibold text-slate-500">Location:</span> {lastEnquiry.location}</p>
                  {lastEnquiry.message && (
                    <p><span className="font-semibold text-slate-500">Details:</span> {lastEnquiry.message}</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={forwardToWhatsApp}
                    className="flex-1 py-3 px-4 rounded-lg bg-[#1B8755] hover:bg-[#146c43] text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Forward to Balaji R on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        service: '',
                        location: '',
                        message: '',
                      });
                    }}
                    className="py-3 px-4 rounded-lg bg-[#eceef0] hover:bg-[#e0e3e5] text-[#191c1e] font-semibold text-sm cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold" htmlFor="contact-name">
                      Full Name *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-[#f2f4f6] border border-[#c5c6cd]/40 text-[#191c1e] font-body-md text-body-md focus:outline-none focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
                      id="contact-name"
                      placeholder="e.g. Ramesh Kumar"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold" htmlFor="contact-phone">
                      Phone Number *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-[#f2f4f6] border border-[#c5c6cd]/40 text-[#191c1e] font-body-md text-body-md focus:outline-none focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
                      id="contact-phone"
                      placeholder="e.g. +91 98765 43210"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold" htmlFor="contact-service">
                      Service Required *
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg bg-[#f2f4f6] border border-[#c5c6cd]/40 text-[#191c1e] font-body-md text-body-md focus:outline-none focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
                      id="contact-service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select a Service Category</option>
                      <option value="Real Estate Plot Sales">Real Estate Plot Sales</option>
                      <option value="Complete House Construction">Complete House Construction</option>
                      <option value="Painting Contract">Painting Contract</option>
                      <option value="Electrical Contract">Electrical Contract</option>
                      <option value="Site Inspection & Consultation">Site Inspection &amp; Consultation</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold" htmlFor="contact-location">
                      Your Location / City *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-lg bg-[#f2f4f6] border border-[#c5c6cd]/40 text-[#191c1e] font-body-md text-body-md focus:outline-none focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
                      id="contact-location"
                      placeholder="e.g. Vengaivasal / Chennai"
                      required
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold" htmlFor="contact-message">
                    Message / Project Requirements
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-[#f2f4f6] border border-[#c5c6cd]/40 text-[#191c1e] font-body-md text-body-md focus:outline-none focus:border-[#000000] focus:ring-1 focus:ring-[#000000]"
                    id="contact-message"
                    placeholder="Briefly describe your land preference, plot square footage, or civil construction timeline..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#000000] text-white font-label-lg text-label-lg uppercase tracking-wider font-bold hover:bg-[#426086] transition-colors cursor-pointer shadow-sm"
                  type="submit"
                >
                  Send Enquiry
                </button>

                <p className="font-label-technical text-label-technical text-[#75777d] pt-2 leading-relaxed">
                  * Note: Instant dispatch via WhatsApp and direct call is also available directly with Balaji R at {BRAND_INFO.phone}.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
