import React, { useState, useEffect } from 'react';
import { BRAND_INFO } from '../data';

interface HeaderProps {
  onOpenQuickContact?: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuickContact, activeSection = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about-us', id: 'about-us' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Land for Sale', href: '#land-for-sale', id: 'land-for-sale' },
    { label: 'Estimator', href: '#estimator', id: 'estimator' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Why Us', href: '#why-us', id: 'why-us' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-[#E2E8F0] transition-all">
      {/* Top micro bar with contact info */}
      <div className="bg-[#0e1c2f] text-[#77849c] py-1.5 px-4 sm:px-8 border-b border-[#c5c6cd]/20">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between font-label-technical text-label-technical gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="material-symbols-outlined text-[#F59E0B] text-[14px]">location_on</span>
            <span>Vengaivasal, Chennai, Tamil Nadu 600126</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              href={`tel:${BRAND_INFO.phoneClean}`}
            >
              <span className="material-symbols-outlined text-[#F59E0B] text-[14px]">call</span>
              <span>{BRAND_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              href={`mailto:${BRAND_INFO.email}`}
            >
              <span className="material-symbols-outlined text-[#F59E0B] text-[14px]">mail</span>
              <span>{BRAND_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="h-20 max-w-[1320px] mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Lockup */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            alt="Jai Construction Brand Logo"
            className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            src={BRAND_INFO.logoUrl}
          />
          <div className="flex flex-col">
            <span className="font-headline-sm text-[20px] font-bold uppercase tracking-tight text-[#191c1e] leading-none">
              Jai Construction
            </span>
            <span className="font-label-technical text-[10px] text-[#426086] uppercase tracking-widest font-semibold mt-1">
              Engineered Permanence
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 text-[13px] font-semibold tracking-wide rounded-md transition-colors ${
                  isActive
                    ? 'bg-[#0e1c2f] text-white'
                    : 'text-[#44474c] hover:bg-[#eceef0] hover:text-[#191c1e]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex items-center gap-2 bg-[#1B8755] hover:bg-[#146c43] text-white px-4 py-2 rounded-lg font-label-lg text-label-lg transition-colors shadow-sm"
            href={`https://wa.me/${BRAND_INFO.phoneClean}?text=Hello%20Jai%20Construction%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp Us</span>
          </a>

          <button
            onClick={onOpenQuickContact}
            aria-label="Direct Contact Desk"
            title="Principal Contractor: Balaji R"
            className="w-9 h-9 rounded-full bg-[#000000] text-white flex items-center justify-center hover:bg-[#426086] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[19px]">person</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-lg bg-[#eceef0] text-[#191c1e] flex items-center justify-center hover:bg-[#e0e3e5] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#E2E8F0] px-4 py-4 shadow-xl">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#0e1c2f] text-white'
                      : 'text-[#44474c] hover:bg-[#eceef0] hover:text-[#191c1e]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </a>
              );
            })}
            <div className="pt-3 border-t border-[#E2E8F0] flex flex-col gap-2">
              <a
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1B8755] text-white py-2.5 rounded-lg font-semibold text-sm"
                href={`https://wa.me/${BRAND_INFO.phoneClean}?text=Hello%20Jai%20Construction%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Desk (+91 9176409244)</span>
              </a>
              <a
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0e1c2f] text-white py-2.5 rounded-lg font-semibold text-sm"
                href={`tel:${BRAND_INFO.phoneClean}`}
              >
                <span className="material-symbols-outlined text-[18px]">phone</span>
                <span>Call Balaji R Direct</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
