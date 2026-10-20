import React from 'react';
import { BRAND_INFO } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside className="fixed bottom-6 right-6 z-40">
      <a
        className="flex items-center gap-2.5 bg-[#1B8755] hover:bg-[#146c43] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group border-2 border-white"
        href={`https://wa.me/${BRAND_INFO.phoneClean}?text=Hello%20Jai%20Construction%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Direct WhatsApp consultation"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F59E0B]"></span>
        </span>
        <span className="material-symbols-outlined text-[24px]">chat</span>
        <div className="flex flex-col text-left">
          <span className="font-label-technical text-[10px] leading-tight text-slate-100 uppercase font-bold tracking-wider">
            Chat on WhatsApp
          </span>
          <span className="font-label-md text-label-md leading-none font-bold text-white">
            {BRAND_INFO.phone}
          </span>
        </div>
      </a>
    </aside>
  );
};
