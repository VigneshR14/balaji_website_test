import React from 'react';
import { SERVICES_DATA, BRAND_INFO } from '../data';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForEnquiry?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForEnquiry }) => {
  return (
    <section className="w-full py-20 sm:py-28 bg-[#f2f4f6]" id="services">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <p className="font-label-technical text-label-technical uppercase tracking-widest text-[#426086] font-bold">
            Four Comprehensive Pillars
          </p>
          <h2 className="font-headline-lg text-headline-lg text-[#191c1e]">
            Integrated Turnkey Capabilities
          </h2>
          <p className="font-body-md text-body-md text-[#44474c]">
            We eliminate the friction of handling different real estate brokers, masons, painters, and electricians by providing a cohesive engineering service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const waUrl = `https://wa.me/${BRAND_INFO.phoneClean}?text=Hello%20Jai%20Construction%2C%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(
              service.title
            )}.`;

            return (
              <div
                key={service.id}
                className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E2E8F0] group"
              >
                {/* Visual Header */}
                <div className="relative h-48 overflow-hidden bg-[#eceef0]">
                  <img
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={service.image}
                  />
                  <span
                    className={`absolute top-3 left-3 ${service.tagColor} text-white font-label-technical text-label-technical px-2.5 py-1 rounded shadow-sm`}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-[#191c1e] mb-2 font-bold">
                      {service.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-[#44474c] leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5 pt-3 border-t border-[#E2E8F0] font-body-sm text-xs text-[#44474c]">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[#B45309] text-[14px]">check_circle</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2 pt-2">
                    <a
                      className="w-full py-2.5 px-4 rounded-lg bg-[#e6e8ea] hover:bg-[#0e1c2f] hover:text-white text-[#191c1e] font-label-lg text-label-lg text-center transition-colors flex items-center justify-center gap-2 font-semibold shadow-sm"
                      href={waUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>{service.ctaText}</span>
                    </a>

                    <button
                      onClick={() => onSelectServiceForEnquiry?.(service.title)}
                      className="w-full text-center text-xs font-semibold text-[#426086] hover:text-[#0e1c2f] py-1 cursor-pointer"
                    >
                      Fill Online Form →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
