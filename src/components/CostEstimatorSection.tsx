import React, { useState } from 'react';
import { BRAND_INFO } from '../data';

interface CostEstimatorProps {
  onQuoteRequested?: (details: string) => void;
}

export const CostEstimatorSection: React.FC<CostEstimatorProps> = ({ onQuoteRequested }) => {
  const [areaSqFt, setAreaSqFt] = useState<number>(1800);
  const [floors, setFloors] = useState<string>('G+1');
  const [tier, setTier] = useState<'Standard' | 'Premium' | 'Luxury'>('Premium');
  const [includePainting, setIncludePainting] = useState<boolean>(true);
  const [includeElectrical, setIncludeElectrical] = useState<boolean>(true);
  const [includeBorewell, setIncludeBorewell] = useState<boolean>(true);

  // Chennai construction rates (approx guide rates per sq.ft)
  const tierRates = {
    Standard: 2150,
    Premium: 2550,
    Luxury: 3100,
  };

  const baseRate = tierRates[tier];
  const floorMultiplier = floors === 'G' ? 1 : floors === 'G+1' ? 1.02 : floors === 'G+2' ? 1.05 : 1.03;
  const baseCost = areaSqFt * baseRate * floorMultiplier;

  // Add-ons
  const paintingCost = includePainting ? areaSqFt * 140 : 0;
  const electricalCost = includeElectrical ? areaSqFt * 160 : 0;
  const borewellCost = includeBorewell ? 140000 : 0;

  const totalEstimate = Math.round(baseCost + paintingCost + electricalCost + borewellCost);

  // Format in Indian Lakhs/Crores
  const formatIndianCurrency = (num: number) => {
    if (num >= 10000000) {
      return `₹ ${(num / 10000000).toFixed(2)} Cr`;
    }
    return `₹ ${(num / 100000).toFixed(2)} Lakhs`;
  };

  const handleSendToWhatsApp = () => {
    const summary = `Hello Balaji R, I generated an estimate for my construction project on your website:
• Built-up Area: ${areaSqFt} Sq.Ft
• Structure: ${floors}
• Package: ${tier} (${formatIndianCurrency(totalEstimate)})
• Painting Included: ${includePainting ? 'Yes' : 'No'}
• Electrical Included: ${includeElectrical ? 'Yes' : 'No'}
• Borewell Included: ${includeBorewell ? 'Yes' : 'No'}

Please provide me with an official BOQ and site inspection schedule.`;

    window.open(
      `https://wa.me/${BRAND_INFO.phoneClean}?text=${encodeURIComponent(summary)}`,
      '_blank'
    );
  };

  return (
    <section className="w-full py-20 sm:py-28 bg-[#f2f4f6]" id="estimator">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="font-label-technical text-label-technical uppercase tracking-widest text-[#426086] font-bold">
            Interactive Cost Transparency
          </span>
          <h2 className="font-headline-lg text-headline-lg text-[#191c1e] font-bold">
            Chennai Construction Cost Estimator
          </h2>
          <p className="font-body-md text-body-md text-[#44474c]">
            Get an instant budget benchmark for independent villas, duplexes, and residential homes in Chennai suburban corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm space-y-6">
            {/* Area Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold">
                  Built-up Construction Area (Sq.Ft)
                </label>
                <span className="font-headline-sm text-headline-sm text-[#191c1e] font-bold">
                  {areaSqFt.toLocaleString()} Sq.Ft
                </span>
              </div>
              <input
                type="range"
                min="800"
                max="5000"
                step="50"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full accent-[#0e1c2f] cursor-pointer h-2 bg-[#eceef0] rounded-lg"
              />
              <div className="flex justify-between text-xs text-[#75777d]">
                <span>800 Sq.Ft (Compact)</span>
                <span>2,400 Sq.Ft (Standard Villa)</span>
                <span>5,000 Sq.Ft (Luxury)</span>
              </div>
            </div>

            {/* Structure Type */}
            <div className="space-y-2">
              <label className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold">
                Building Structure
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Ground (G)', value: 'G' },
                  { label: 'G + 1 Floor', value: 'G+1' },
                  { label: 'G + 2 Floors', value: 'G+2' },
                ].map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => setFloors(s.value)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      floors === s.value
                        ? 'bg-[#0e1c2f] text-white border-[#0e1c2f] shadow-xs'
                        : 'bg-[#f7f9fb] text-[#191c1e] border-[#E2E8F0] hover:bg-[#eceef0]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quality Tier */}
            <div className="space-y-2">
              <label className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold">
                Finish &amp; Specification Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['Standard', 'Premium', 'Luxury'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTier(t)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      tier === t
                        ? 'border-[#B45309] bg-[#fffaf0] ring-1 ring-[#B45309]'
                        : 'border-[#E2E8F0] bg-[#f7f9fb] hover:bg-[#eceef0]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-title-md text-sm font-bold text-[#191c1e]">{t}</span>
                      {tier === t && (
                        <span className="material-symbols-outlined text-[#B45309] text-[16px]">check_circle</span>
                      )}
                    </div>
                    <p className="text-xs text-[#75777d] mt-1">₹ {tierRates[t]}/sq.ft</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Scope Add-ons */}
            <div className="space-y-2 pt-2 border-t border-[#E2E8F0]">
              <label className="font-label-technical text-label-technical uppercase text-[#44474c] font-semibold">
                Integrated Turnkey Add-ons
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-3 rounded-lg bg-[#f7f9fb] border border-[#E2E8F0] cursor-pointer hover:bg-[#f2f4f6]">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={includePainting}
                      onChange={(e) => setIncludePainting(e.target.checked)}
                      className="accent-[#B45309] w-4 h-4 rounded"
                    />
                    <div>
                      <span className="text-xs font-semibold text-[#191c1e] block">Full Exterior Weather-Shield &amp; Interior Painting</span>
                      <span className="text-[11px] text-[#75777d]">3-coat putty, primer, branded Asian/Berger Royale Emulsion</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#426086]">Included</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-[#f7f9fb] border border-[#E2E8F0] cursor-pointer hover:bg-[#f2f4f6]">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={includeElectrical}
                      onChange={(e) => setIncludeElectrical(e.target.checked)}
                      className="accent-[#B45309] w-4 h-4 rounded"
                    />
                    <div>
                      <span className="text-xs font-semibold text-[#191c1e] block">Concealed Electrical &amp; Architectural Lighting Conduits</span>
                      <span className="text-[11px] text-[#75777d]">FR copper cables, DB boxes, inverter lines &amp; earthing</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#426086]">Included</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-[#f7f9fb] border border-[#E2E8F0] cursor-pointer hover:bg-[#f2f4f6]">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={includeBorewell}
                      onChange={(e) => setIncludeBorewell(e.target.checked)}
                      className="accent-[#B45309] w-4 h-4 rounded"
                    />
                    <div>
                      <span className="text-xs font-semibold text-[#191c1e] block">Sweet Water Borewell + RCC Underfloor Sump</span>
                      <span className="text-[11px] text-[#75777d]">150ft deep casing, compressor/submersible pump &amp; 10k L sump</span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#426086]">~₹1.40 L</span>
                </label>
              </div>
            </div>
          </div>

          {/* Results & Milestone Breakdown Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0e1c2f] text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl space-y-6">
              <div>
                <span className="font-label-technical text-label-technical uppercase tracking-widest text-[#F59E0B] font-bold">
                  Estimated Turnkey Budget
                </span>
                <div className="mt-2 flex items-baseline gap-3">
                  <h3 className="font-display text-[38px] font-bold text-white tracking-tight leading-none">
                    {formatIndianCurrency(totalEstimate)}
                  </h3>
                  <span className="text-xs text-slate-400">
                    (~₹ {Math.round(totalEstimate / areaSqFt)} / sq.ft)
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  *Based on certified IS code structural materials (53 Grade Cement, Fe 550D TMT Steel).
                </p>
              </div>

              {/* Milestone Linked Stages */}
              <div className="space-y-3 pt-4 border-t border-white/15">
                <p className="font-label-technical text-label-technical uppercase text-[#F59E0B] font-semibold tracking-wider">
                  Phase-Wise Payment Calendar
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/10 text-slate-300">
                    <span>1. Foundation &amp; Soil Retaining (20%)</span>
                    <span className="font-semibold text-white">{formatIndianCurrency(totalEstimate * 0.2)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10 text-slate-300">
                    <span>2. Plinth &amp; RCC Roof Slab Casting (25%)</span>
                    <span className="font-semibold text-white">{formatIndianCurrency(totalEstimate * 0.25)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10 text-slate-300">
                    <span>3. Brickwork &amp; Wall Plastering (20%)</span>
                    <span className="font-semibold text-white">{formatIndianCurrency(totalEstimate * 0.2)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10 text-slate-300">
                    <span>4. Wiring, Painting &amp; Flooring (20%)</span>
                    <span className="font-semibold text-white">{formatIndianCurrency(totalEstimate * 0.2)}</span>
                  </div>
                  <div className="flex justify-between py-1 text-slate-300">
                    <span>5. Final Inspection &amp; Key Handover (15%)</span>
                    <span className="font-semibold text-white">{formatIndianCurrency(totalEstimate * 0.15)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/15">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3.5 rounded-lg bg-[#1B8755] hover:bg-[#146c43] text-white font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Send Estimate to Balaji R via WhatsApp</span>
                </button>

                <p className="text-center text-[11px] text-slate-400">
                  Receive a detailed itemized Bill of Quantities (BOQ) with material brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
