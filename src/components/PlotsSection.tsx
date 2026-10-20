import React, { useState } from 'react';
import { PLOTS_DATA, BRAND_INFO } from '../data';
import { PlotItem } from '../types';

interface PlotsSectionProps {
  onOpenPlotModal: (plot: PlotItem) => void;
  onSelectForEnquiry: (service: string, note?: string) => void;
}

export const PlotsSection: React.FC<PlotsSectionProps> = ({ onOpenPlotModal, onSelectForEnquiry }) => {
  const [filterType, setFilterType] = useState<'All' | 'Available' | 'Booking Open'>('All');

  const filteredPlots = PLOTS_DATA.filter((plot) => {
    if (filterType === 'All') return true;
    return plot.status === filterType;
  });

  return (
    <section className="w-full py-20 sm:py-28 bg-[#f7f9fb]" id="land-for-sale">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E2E8F0] pb-8">
          <div>
            <span className="font-label-technical text-label-technical uppercase tracking-widest text-[#B45309] font-bold">
              Prime Suburban Opportunities
            </span>
            <h2 className="font-headline-lg text-headline-lg text-[#191c1e] mt-1 font-bold">
              Featured Residential Plots For Sale
            </h2>
            <p className="font-body-md text-body-md text-[#44474c] max-w-2xl mt-2">
              Verified residential layout plots ready for immediate villa construction in Chennai suburban hubs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-end">
            <a
              className="inline-flex items-center gap-2 text-[#000000] font-label-lg text-label-lg hover:text-[#426086] transition-colors font-bold"
              href={`tel:${BRAND_INFO.phoneClean}`}
            >
              <span>Schedule Plot Inspection</span>
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </a>
          </div>
        </div>

        {/* Quick Filter Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#44474c] uppercase font-label-technical">Filter by Status:</span>
            <div className="inline-flex rounded-lg bg-[#eceef0] p-1 border border-[#E2E8F0]">
              {(['All', 'Available', 'Booking Open'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterType(status)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    filterType === status
                      ? 'bg-white text-[#191c1e] shadow-xs'
                      : 'text-[#44474c] hover:text-[#191c1e]'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs text-[#44474c]">
            Showing <span className="font-bold text-[#191c1e]">{filteredPlots.length}</span> verified parcels
          </p>
        </div>

        {/* Plots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPlots.map((plot: PlotItem) => {
            const waUrl = `https://wa.me/${BRAND_INFO.phoneClean}?text=Hello%20Jai%20Construction%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
              plot.title
            )}%20in%20${encodeURIComponent(plot.location)}.`;

            return (
              <div
                key={plot.id}
                className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] shadow-md hover:border-[#426086] hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Visual Header */}
                <div className="relative h-56 overflow-hidden bg-[#eceef0]">
                  <img
                    alt={plot.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={plot.image}
                  />

                  {/* Status Pill */}
                  <div
                    className={`absolute top-3 right-3 bg-white/95 px-2.5 py-1 rounded text-xs font-label-technical font-bold uppercase shadow-sm ${
                      plot.status === 'Available' ? 'text-green-700' : 'text-[#B45309]'
                    }`}
                  >
                    {plot.status}
                  </div>

                  {/* Orientation Tag */}
                  <div className="absolute bottom-3 left-3 bg-[#0e1c2f]/90 backdrop-blur-md px-3 py-1 rounded text-white font-label-technical text-label-technical">
                    {plot.facing}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                  <div>
                    <h3 className="font-title-lg text-title-lg text-[#191c1e] mb-1 font-bold">
                      {plot.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-[#426086] flex items-center gap-1 mb-4 font-semibold">
                      <span className="material-symbols-outlined text-[16px]">location_on</span>
                      <span>{plot.location}</span>
                    </p>

                    {/* Spec Sheet Table */}
                    <div className="space-y-2 py-3 border-y border-[#E2E8F0] font-label-technical text-label-technical text-[#44474c]">
                      <div className="flex justify-between">
                        <span>APPROVAL:</span>
                        <span className="text-[#191c1e] font-semibold">{plot.approval}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ROAD WIDTH:</span>
                        <span className="text-[#191c1e] font-semibold">{plot.roadWidth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GROUNDWATER:</span>
                        <span className="text-[#191c1e] font-semibold">{plot.groundwaterOrAccess}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price & Actions */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-label-technical text-label-technical text-[#44474c]">PRICE:</span>
                      <span className="font-headline-sm text-headline-sm text-[#191c1e] font-bold">
                        {plot.priceNote}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <a
                        className="w-full py-3 rounded-lg bg-[#1B8755] hover:bg-[#146c43] text-white font-label-lg text-label-lg flex items-center justify-center gap-2 transition-colors font-semibold shadow-sm"
                        href={waUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[18px]">chat</span>
                        <span>Enquire on WhatsApp</span>
                      </a>

                      <button
                        onClick={() => onOpenPlotModal(plot)}
                        className="w-full py-2 rounded-lg bg-[#eceef0] hover:bg-[#e0e3e5] text-[#191c1e] text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">info</span>
                        <span>View Specifications &amp; Schedule Visit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Notice Tag */}
        <div className="p-4 rounded-lg bg-[#e6e8ea] text-[#44474c] font-label-technical text-label-technical flex items-start gap-3 border border-[#c5c6cd]/40">
          <span className="material-symbols-outlined text-[#426086] text-[20px] shrink-0">info</span>
          <span>
            *Notice: Illustrative property placeholders. Contact Balaji R for current real-time plot survey numbers, layout approvals, parent deed documentation, and live plot availability.
          </span>
        </div>
      </div>
    </section>
  );
};
