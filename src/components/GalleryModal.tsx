import React from 'react';
import { GalleryItem } from '../types';
import { BRAND_INFO } from '../data';

interface GalleryModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onEnquire: (itemTitle: string) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose, onEnquire }) => {
  if (!item) return null;

  const waUrl = `https://wa.me/${BRAND_INFO.phoneClean}?text=Hello%20Balaji%20R%2C%20I%20saw%20the%20${encodeURIComponent(
    item.title
  )}%20(${encodeURIComponent(item.category)})%20in%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20similar%20project.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E2E8F0] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
          aria-label="Close lightbox"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {/* Big Preview Image */}
        <div className="relative h-72 sm:h-96 w-full bg-black">
          <img alt={item.title} className="w-full h-full object-contain" src={item.image} />
          <div className="absolute bottom-3 left-3 bg-black/70 px-2.5 py-1 rounded text-white text-[11px] font-label-technical font-bold uppercase">
            {item.tag}
          </div>
        </div>

        {/* Details Content */}
        <div className="p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
            <div>
              <span className="font-label-technical text-xs uppercase text-[#B45309] font-bold tracking-wider">
                {item.category}
              </span>
              <h3 className="font-headline-sm text-xl font-bold text-[#191c1e] mt-0.5">
                {item.title}
              </h3>
            </div>
          </div>

          <p className="font-body-sm text-sm text-[#44474c] leading-relaxed">
            {item.description}
          </p>

          <p className="text-xs text-[#75777d]">
            <strong>Technical Note:</strong> {item.subtitle}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-lg bg-[#1B8755] hover:bg-[#146c43] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Discuss Similar Work via WhatsApp</span>
            </a>

            <button
              onClick={() => {
                onEnquire(item.title);
                onClose();
              }}
              className="py-3 px-5 rounded-lg bg-[#0e1c2f] hover:bg-black text-white font-semibold text-sm cursor-pointer"
            >
              Request Quote in Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
