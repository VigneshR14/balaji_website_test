import React from 'react';
import { PlotItem } from '../types';
import { BRAND_INFO } from '../data';

interface PlotModalProps {
  plot: PlotItem | null;
  onClose: () => void;
  onEnquireInForm: (plotTitle: string) => void;
}

export const PlotModal: React.FC<PlotModalProps> = ({ plot, onClose, onEnquireInForm }) => {
  if (!plot) return null;

  const waUrl = `https://wa.me/${BRAND_INFO.phoneClean}?text=Hello%20Jai%20Construction%2C%20I%20am%20interested%20in%20inspecting%20the%20${encodeURIComponent(
    plot.title
  )}%20in%20${encodeURIComponent(plot.location)}.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E2E8F0] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Modal Image Header */}
        <div className="relative h-64 sm:h-72 w-full bg-[#eceef0] shrink-0">
          <img alt={plot.title} className="w-full h-full object-cover" src={plot.image} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span
              className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-label-technical font-bold uppercase mb-2 ${
                plot.status === 'Available' ? 'bg-green-700 text-white' : 'bg-[#B45309] text-white'
              }`}
            >
              {plot.status}
            </span>
            <h3 className="font-headline-sm text-xl sm:text-2xl font-bold leading-tight">
              {plot.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              <span>{plot.location}</span>
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Key Specs Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg bg-[#f7f9fb] border border-[#E2E8F0]">
              <span className="text-[10px] uppercase font-label-technical text-slate-500 font-semibold block">Area</span>
              <span className="font-bold text-sm text-[#191c1e]">{plot.areaSqFt} Sq.Ft</span>
            </div>
            <div className="p-3 rounded-lg bg-[#f7f9fb] border border-[#E2E8F0]">
              <span className="text-[10px] uppercase font-label-technical text-slate-500 font-semibold block">Facing</span>
              <span className="font-bold text-sm text-[#191c1e]">{plot.facing}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#f7f9fb] border border-[#E2E8F0]">
              <span className="text-[10px] uppercase font-label-technical text-slate-500 font-semibold block">Road Access</span>
              <span className="font-bold text-sm text-[#191c1e]">{plot.roadWidth}</span>
            </div>
            <div className="p-3 rounded-lg bg-[#f7f9fb] border border-[#E2E8F0]">
              <span className="text-[10px] uppercase font-label-technical text-slate-500 font-semibold block">Approval</span>
              <span className="font-bold text-sm text-[#191c1e] truncate block" title={plot.approval}>
                {plot.approval}
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="font-title-md text-sm font-bold text-[#191c1e] uppercase tracking-wide">
              Plot Highlights &amp; Development Readiness
            </h4>
            <ul className="space-y-1.5 text-xs text-[#44474c]">
              {plot.highlights.map((h, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#B45309] text-[16px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Legal & Financial Note */}
          <div className="p-3 rounded-lg bg-[#e6e8ea] text-xs text-[#44474c] space-y-1">
            <p><strong>Loan Eligibility:</strong> {plot.loanEligibility}</p>
            <p><strong>Groundwater / Utilities:</strong> {plot.groundwaterOrAccess}</p>
            {plot.estimatedPrice && (
              <p><strong>Guide Valuation:</strong> {plot.estimatedPrice}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-lg bg-[#1B8755] hover:bg-[#146c43] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Enquire &amp; Book Site Visit</span>
            </a>

            <button
              onClick={() => {
                onEnquireInForm(plot.title);
                onClose();
              }}
              className="py-3 px-4 rounded-lg bg-[#0e1c2f] hover:bg-black text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit Form Request</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
