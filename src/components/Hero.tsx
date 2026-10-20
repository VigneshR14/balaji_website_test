import React from 'react';
import { BRAND_INFO } from '../data';

interface HeroProps {
  onSelectService?: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectService }) => {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#0e1c2f] text-white pt-28">
      {/* Hero Background Layer with Atmospheric Depth */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover object-center brightness-50 contrast-105 transform scale-105 transition-transform duration-1000"
          alt="Modern architectural luxury villa in Chennai with tropical landscaping, exposed concrete volumes, and ambient golden lighting"
          src={BRAND_INFO.heroBgUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1c2f] via-[#0e1c2f]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e1c2f] via-[#0e1c2f]/40 to-transparent"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24 flex flex-col justify-between">
        <div className="max-w-3xl space-y-6">
          {/* Verified Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
            <span className="font-label-technical text-label-technical tracking-widest uppercase text-[#F59E0B] font-bold">
              Premium Construction &amp; Real Estate in Chennai
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-display text-white tracking-tight uppercase leading-none">
            Building Your Vision. <br />
            <span className="text-[#F59E0B]">Creating Your Future.</span>
          </h1>

          {/* Supporting Text */}
          <p className="font-body-lg text-body-lg text-slate-300 max-w-2xl leading-relaxed">
            From finding the right plot to constructing your dream home, Jai Construction brings land, construction and finishing services together under one roof.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#F59E0B] text-[#000000] font-label-lg text-label-lg uppercase tracking-wider font-bold hover:bg-[#B45309] hover:text-white shadow-lg shadow-[#B45309]/20 transition-all duration-300 group"
              href="#services"
            >
              <span>Explore Our Services</span>
              <span className="material-symbols-outlined ml-2 text-[20px] transition-transform group-hover:translate-y-0.5">
                arrow_downward
              </span>
            </a>
            <a
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#1B8755] text-white font-label-lg text-label-lg uppercase tracking-wider font-bold hover:bg-[#146c43] shadow-lg shadow-black/30 transition-all duration-300 group"
              href={`https://wa.me/${BRAND_INFO.phoneClean}?text=Hello%20Jai%20Construction%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined mr-2 text-[20px] transition-transform group-hover:scale-110">
                chat
              </span>
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 4 Pillars Quick Highlight Bar */}
        <div className="mt-14 sm:mt-20 p-6 sm:p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/15">
            {/* Pillar 1 */}
            <a
              href="#land-for-sale"
              onClick={() => onSelectService?.('plot-sales')}
              className="flex items-center gap-4 pt-4 lg:pt-0 group hover:translate-x-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-lg bg-[#F59E0B]/20 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0 group-hover:bg-[#F59E0B] group-hover:text-black transition-colors">
                <span className="material-symbols-outlined text-[26px]">foundation</span>
              </div>
              <div>
                <p className="font-label-technical text-label-technical uppercase tracking-wider text-slate-400">Pillar 01</p>
                <h4 className="font-title-md text-title-md text-white font-semibold group-hover:text-[#F59E0B] transition-colors">
                  Land &amp; Plot Sales
                </h4>
              </div>
            </a>

            {/* Pillar 2 */}
            <a
              href="#services"
              onClick={() => onSelectService?.('building-construction')}
              className="flex items-center gap-4 pt-4 lg:pt-0 lg:pl-6 group hover:translate-x-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-lg bg-[#F59E0B]/20 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0 group-hover:bg-[#F59E0B] group-hover:text-black transition-colors">
                <span className="material-symbols-outlined text-[26px]">home_work</span>
              </div>
              <div>
                <p className="font-label-technical text-label-technical uppercase tracking-wider text-slate-400">Pillar 02</p>
                <h4 className="font-title-md text-title-md text-white font-semibold group-hover:text-[#F59E0B] transition-colors">
                  Building Construction
                </h4>
              </div>
            </a>

            {/* Pillar 3 */}
            <a
              href="#services"
              onClick={() => onSelectService?.('painting-contracts')}
              className="flex items-center gap-4 pt-4 lg:pt-0 lg:pl-6 group hover:translate-x-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-lg bg-[#F59E0B]/20 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0 group-hover:bg-[#F59E0B] group-hover:text-black transition-colors">
                <span className="material-symbols-outlined text-[26px]">format_paint</span>
              </div>
              <div>
                <p className="font-label-technical text-label-technical uppercase tracking-wider text-slate-400">Pillar 03</p>
                <h4 className="font-title-md text-title-md text-white font-semibold group-hover:text-[#F59E0B] transition-colors">
                  Painting Contracts
                </h4>
              </div>
            </a>

            {/* Pillar 4 */}
            <a
              href="#services"
              onClick={() => onSelectService?.('electrical-contracts')}
              className="flex items-center gap-4 pt-4 lg:pt-0 lg:pl-6 group hover:translate-x-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-lg bg-[#F59E0B]/20 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0 group-hover:bg-[#F59E0B] group-hover:text-black transition-colors">
                <span className="material-symbols-outlined text-[26px]">bolt</span>
              </div>
              <div>
                <p className="font-label-technical text-label-technical uppercase tracking-wider text-slate-400">Pillar 04</p>
                <h4 className="font-title-md text-title-md text-white font-semibold group-hover:text-[#F59E0B] transition-colors">
                  Electrical Contracts
                </h4>
              </div>
            </a>
          </div>

          {/* Bottom Bar inside Quick highlight */}
          <div className="mt-6 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between text-slate-300 font-label-technical text-label-technical gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-[#F59E0B] text-[18px]">pin_drop</span>
              <span>Operating Hub: Vengaivasal, Chennai, Tamil Nadu 600126</span>
            </div>
            <div className="text-[#F59E0B] flex items-center gap-2 font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Complete Turnkey Transparency &amp; Rigorous Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
