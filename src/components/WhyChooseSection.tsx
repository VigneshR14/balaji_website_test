import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../data';

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-28 bg-[#e6e8ea]" id="why-us">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-label-technical text-label-technical uppercase tracking-widest text-[#426086] font-bold">
            The Contractor Advantage
          </span>
          <h2 className="font-headline-lg text-headline-lg text-[#191c1e] font-bold">
            Why Choose Jai Construction
          </h2>
          <p className="font-body-md text-body-md text-[#44474c]">
            We bring clarity and hands-on responsibility to property development, avoiding common homeowner pain points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-[#eceef0] flex items-center justify-center text-[#000000]">
                  <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-[#191c1e] leading-snug font-bold">
                  {item.title}
                </h3>
                <p className="font-body-sm text-body-sm text-[#44474c] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E8F0] font-label-technical text-label-technical text-[#426086] font-semibold">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
