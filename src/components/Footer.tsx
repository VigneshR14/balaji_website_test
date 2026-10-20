import React from 'react';
import { BRAND_INFO } from '../data';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0e1c2f] text-[#77849c] pt-16 pb-12 mt-12 border-t border-[#c5c6cd]/20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Jai Construction Brand Logo"
                className="h-9 w-auto object-contain bg-white p-1 rounded-lg"
                src={BRAND_INFO.logoUrl}
              />
              <span className="font-headline-sm text-headline-sm text-white uppercase tracking-tight font-bold">
                Jai Construction
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-[#77849c] leading-relaxed">
              Pioneering precision engineering, architectural excellence, and land development projects across Chennai metropolitan territory. Built with enduring structural integrity and uncompromised craftsmanship.
            </p>
            <div className="pt-2 font-label-technical text-label-technical text-[#F59E0B]">
              <span className="text-[#77849c] uppercase">Leadership:</span> {BRAND_INFO.owner}, Proprietor &amp; Chief Engineer
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="font-title-md text-title-md text-white mb-4 uppercase tracking-wider font-semibold">
              Quick Navigation
            </h3>
            <ul className="space-y-2 font-body-sm text-body-sm">
              <li>
                <a className="hover:text-white transition-colors" href="#home">Home Overview</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#about-us">About Balaji R &amp; Firm</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#services">Civil &amp; Architectural Services</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#land-for-sale">CMDA Approved Plots</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#estimator">Cost &amp; Budget Estimator</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#gallery">Portfolio &amp; Site Gallery</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#why-us">Why Choose Jai Construction</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#process">Construction Lifecycle</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#contact">Consultation &amp; Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Capabilities */}
          <div>
            <h3 className="font-title-md text-title-md text-white mb-4 uppercase tracking-wider font-semibold">
              Core Capabilities
            </h3>
            <ul className="space-y-3 font-body-sm text-body-sm">
              <li>
                <span className="text-white font-title-md text-sm font-semibold block">Real Estate &amp; Plots</span>
                <span className="text-slate-400 font-label-technical text-[11px]">DTCP/CMDA residential and commercial parcels</span>
              </li>
              <li>
                <span className="text-white font-title-md text-sm font-semibold block">Building Construction</span>
                <span className="text-slate-400 font-label-technical text-[11px]">Turnkey residential villas &amp; structural frameworks</span>
              </li>
              <li>
                <span className="text-white font-title-md text-sm font-semibold block">Painting Contracts</span>
                <span className="text-slate-400 font-label-technical text-[11px]">Industrial grade finishing &amp; weather-shield coatings</span>
              </li>
              <li>
                <span className="text-white font-title-md text-sm font-semibold block">Electrical Contracts</span>
                <span className="text-slate-400 font-label-technical text-[11px]">Certified heavy electrification &amp; conduit layouts</span>
              </li>
            </ul>
          </div>

          {/* Column 4: HQ & Contact Desk */}
          <div>
            <h3 className="font-title-md text-title-md text-white mb-4 uppercase tracking-wider font-semibold">
              HQ &amp; Contact Desk
            </h3>
            <div className="space-y-3 font-body-sm text-body-sm">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#F59E0B] text-[18px] shrink-0 mt-0.5">location_on</span>
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#F59E0B] text-[18px] shrink-0">call</span>
                <a className="hover:text-white transition-colors font-medium" href={`tel:${BRAND_INFO.phoneClean}`}>
                  {BRAND_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#F59E0B] text-[18px] shrink-0">mail</span>
                <a className="hover:text-white transition-colors font-medium" href={`mailto:${BRAND_INFO.email}`}>
                  {BRAND_INFO.email}
                </a>
              </div>
              <div className="pt-3">
                <a
                  className="inline-flex items-center gap-2 bg-[#1B8755] hover:bg-[#146c43] text-white px-3.5 py-1.5 rounded-lg font-label-md text-label-md font-semibold transition-colors shadow-sm"
                  href={`https://wa.me/${BRAND_INFO.phoneClean}?text=Hello%20Jai%20Construction%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>Direct WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Bar */}
        <div className="border-t border-[#c5c6cd]/20 pt-8 pb-4 text-center md:flex md:justify-between items-center text-[#77849c] font-label-technical text-label-technical">
          <p className="mb-2 md:mb-0">
            © 2025 Jai Construction (Proprietor: Balaji R). All rights reserved.
          </p>
          <p className="max-w-xl text-[11px] leading-tight text-slate-400">
            Disclaimer: Imagery and architectural renders are for illustrative purposes only. All specifications are subject to architectural review and regulatory approvals.
          </p>
        </div>
      </div>
    </footer>
  );
};
