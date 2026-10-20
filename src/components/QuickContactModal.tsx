import React from 'react';
import { BRAND_INFO } from '../data';

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickContactModal: React.FC<QuickContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E2E8F0] p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#eceef0] text-[#191c1e] flex items-center justify-center hover:bg-[#e0e3e5] cursor-pointer"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[#0e1c2f] text-white flex items-center justify-center text-xl font-bold font-display shadow-md">
            BR
          </div>
          <div>
            <h3 className="font-headline-sm text-lg font-bold text-[#191c1e] leading-snug">
              {BRAND_INFO.owner}
            </h3>
            <p className="font-label-technical text-xs text-[#426086] uppercase font-semibold">
              {BRAND_INFO.designation}
            </p>
            <p className="text-xs text-[#75777d]">Jai Construction, Chennai</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#f7f9fb] border border-[#E2E8F0] space-y-2 text-xs">
          <div className="flex items-center gap-2 text-[#191c1e]">
            <span className="material-symbols-outlined text-[#B45309] text-[16px]">verified</span>
            <span className="font-semibold">Direct Single-Point Contractor Access</span>
          </div>
          <p className="text-[#44474c] pl-6">
            Speak directly with the principal engineer overseeing your land acquisition, civil foundation, electrical grid, and finishing paint coats.
          </p>
        </div>

        <div className="space-y-2.5">
          <a
            href={`tel:${BRAND_INFO.phoneClean}`}
            className="w-full py-3 px-4 rounded-lg bg-[#0e1c2f] hover:bg-black text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">phone</span>
            <span>Call +91 9176409244</span>
          </a>

          <a
            href={`https://wa.me/${BRAND_INFO.phoneClean}?text=Hello%20Balaji%20R%2C%20I%20would%20like%20to%20consult%20with%20you%20regarding%20a%20construction%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-lg bg-[#1B8755] hover:bg-[#146c43] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Message on WhatsApp</span>
          </a>

          <a
            href={`mailto:${BRAND_INFO.email}`}
            className="w-full py-2.5 px-4 rounded-lg bg-[#eceef0] hover:bg-[#e0e3e5] text-[#191c1e] font-semibold text-xs flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span>Send Email ({BRAND_INFO.email})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
