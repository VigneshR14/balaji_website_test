import React from 'react';
import { BRAND_INFO } from '../data';

export const AboutSection: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-28 bg-white" id="about-us">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#e6e8ea]">
              <img
                alt="Civil engineers and construction workers reviewing blueprints on an active modern house construction site in India"
                className="w-full h-[460px] object-cover"
                src={BRAND_INFO.aboutImgUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Bottom Inset Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-white/95 backdrop-blur-md shadow-lg border border-[#E2E8F0]">
                <p className="font-label-technical text-label-technical text-[#426086] uppercase font-bold tracking-wider">
                  Active Civil Construction &amp; Engineering Supervision
                </p>
                <p className="font-body-sm text-body-sm text-[#44474c] mt-1">
                  Direct oversight ensures zero tolerance on grade variances and structural blueprints.
                </p>
              </div>
            </div>

            {/* Owner's Promise Badge */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-[#0e1c2f] text-white p-4 rounded-xl shadow-xl max-w-[210px] border border-white/10">
              <p className="font-label-technical text-label-technical text-[#F59E0B] uppercase font-bold tracking-wider">
                Owner's Promise
              </p>
              <p className="font-title-md text-title-md font-semibold leading-tight mt-1">
                Direct single-point coordination.
              </p>
            </div>
          </div>

          {/* Textual Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eceef0] text-[#426086] font-label-technical text-label-technical uppercase tracking-wider font-semibold">
              <span>Direct Contractor Accountability</span>
            </div>

            <h2 className="font-headline-lg text-headline-lg text-[#191c1e]">
              Building with Care. <br />
              <span className="text-[#426086]">Delivering with Commitment.</span>
            </h2>

            <p className="font-body-lg text-body-lg text-[#44474c] leading-relaxed">
              Jai Construction was founded and is actively led by Balaji R, providing integrated land acquisition, residential &amp; commercial civil construction, expert painting contracts, and certified electrical contracting across Chennai and greater Tamil Nadu.
            </p>

            <p className="font-body-md text-body-md text-[#44474c] leading-relaxed">
              Unlike commercial broker networks that pass contracts across third-party middlemen, our organization takes personal ownership of every stage. From foundational soil verification in Vengaivasal to the final protective coat of weather-shield emulsion, Balaji R personally coordinates site progress, material deliveries, and technical inspections.
            </p>

            {/* Core Value Micro Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-[#f2f4f6] border border-[#E2E8F0]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-[#B45309]">verified_user</span>
                  <h4 className="font-title-md text-title-md text-[#191c1e] font-semibold">Direct Involvement</h4>
                </div>
                <p className="font-body-sm text-body-sm text-[#44474c]">
                  Balaji R directly oversees site works, avoiding miscommunications and hidden commissions.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#f2f4f6] border border-[#E2E8F0]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-[#B45309]">construction</span>
                  <h4 className="font-title-md text-title-md text-[#191c1e] font-semibold">Engineering Codes</h4>
                </div>
                <p className="font-body-sm text-body-sm text-[#44474c]">
                  Adherence to IS code specifications, branded materials, and documented structural milestones.
                </p>
              </div>
            </div>

            {/* Owner Signature Box */}
            <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-[#191c1e] leading-tight font-bold">Balaji R</h3>
                <p className="font-label-technical text-label-technical text-[#426086] uppercase tracking-widest font-semibold">
                  Business Owner &amp; Principal Contractor
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#eceef0] hover:bg-[#e0e3e5] text-[#191c1e] font-label-lg text-label-lg font-semibold transition-colors shadow-sm"
                href={`tel:${BRAND_INFO.phoneClean}`}
              >
                <span className="material-symbols-outlined text-[#B45309] text-[18px]">phone</span>
                <span>Direct: {BRAND_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
