import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenGalleryModal: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenGalleryModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All Work');

  const categories = [
    'All Work',
    'Civil Construction',
    'Plot Demarcation',
    'Painting & Finish',
    'Electrical Works'
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'All Work') return true;
    return item.category === activeFilter;
  });

  return (
    <section className="w-full py-20 sm:py-28 bg-white" id="gallery">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-technical text-label-technical uppercase tracking-widest text-[#426086] font-bold">
              Workmanship Showcase
            </span>
            <h2 className="font-headline-lg text-headline-lg text-[#191c1e] font-bold">
              Execution &amp; Service Gallery
            </h2>
          </div>
          <p className="font-label-technical text-label-technical text-[#44474c] max-w-sm">
            Illustrative stock representations. Replaceable with Jai Construction completed on-site project portfolio.
          </p>
        </div>

        {/* Gallery Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {categories.map((cat) => {
            const isSelected = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg font-label-md text-label-md transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#000000] text-white shadow-sm font-semibold'
                    : 'bg-[#eceef0] text-[#191c1e] hover:bg-[#e6e8ea]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 6-Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: GalleryItem) => (
            <div
              key={item.id}
              onClick={() => onOpenGalleryModal(item)}
              className="group relative rounded-xl overflow-hidden bg-[#eceef0] h-72 border border-[#E2E8F0] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>
              
              <div className="absolute top-3 left-3 bg-white/90 px-2 py-0.5 rounded font-label-technical text-label-technical text-[#000000] font-bold shadow-xs">
                {item.tag}
              </div>

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-1.5 rounded-full">
                <span className="material-symbols-outlined text-[18px]">zoom_in</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="font-label-technical text-[10px] uppercase text-[#F59E0B] font-semibold tracking-wider block mb-1">
                  {item.category}
                </span>
                <h4 className="font-title-md text-title-md font-bold leading-snug">
                  {item.title}
                </h4>
                <p className="font-body-sm text-body-sm text-slate-300 mt-1 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
