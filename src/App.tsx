/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PlotsSection } from './components/PlotsSection';
import { CostEstimatorSection } from './components/CostEstimatorSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { PlotModal } from './components/PlotModal';
import { GalleryModal } from './components/GalleryModal';
import { QuickContactModal } from './components/QuickContactModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { PlotItem, GalleryItem } from './types';

export default function App() {
  const [selectedPlot, setSelectedPlot] = useState<PlotItem | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [quickContactOpen, setQuickContactOpen] = useState<boolean>(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledNote, setPrefilledNote] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Active section spy
  useEffect(() => {
    const sectionIds = [
      'home',
      'about-us',
      'services',
      'land-for-sale',
      'estimator',
      'gallery',
      'why-us',
      'process',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectServiceForEnquiry = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlotForEnquiry = (plotTitle: string) => {
    setPrefilledService('Real Estate Plot Sales');
    setPrefilledNote(`Interested in site inspection and documentation for: ${plotTitle}`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectGalleryItemForEnquiry = (itemTitle: string) => {
    setPrefilledNote(`I am interested in architectural execution similar to your portfolio project: "${itemTitle}".`);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] font-sans text-[#191c1e] flex flex-col selection:bg-[#F59E0B]/30 selection:text-black">
      {/* Fixed Header */}
      <Header
        activeSection={activeSection}
        onOpenQuickContact={() => setQuickContactOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-grow w-full">
        {/* 1. Hero Section */}
        <Hero
          onSelectService={(serviceId) => {
            if (serviceId === 'plot-sales') {
              document.getElementById('land-for-sale')?.scrollIntoView({ behavior: 'smooth' });
            } else {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* 2. About Balaji R & Firm */}
        <AboutSection />

        {/* 3. Four Integrated Turnkey Capabilities */}
        <ServicesSection onSelectServiceForEnquiry={handleSelectServiceForEnquiry} />

        {/* 4. Featured Residential Plots for Sale */}
        <PlotsSection
          onOpenPlotModal={(plot) => setSelectedPlot(plot)}
          onSelectForEnquiry={handleSelectPlotForEnquiry}
        />

        {/* 5. Interactive Chennai Construction Cost Estimator */}
        <CostEstimatorSection />

        {/* 6. Execution & Service Portfolio Gallery */}
        <GallerySection
          onOpenGalleryModal={(item) => setSelectedGalleryItem(item)}
        />

        {/* 7. Why Choose Jai Construction */}
        <WhyChooseSection />

        {/* 8. 4-Step Construction Lifecycle */}
        <ProcessSection />

        {/* 9. Contact Desk & Enquiry Form */}
        <ContactSection
          prefilledService={prefilledService}
          prefilledNote={prefilledNote}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Floating Components */}
      <PlotModal
        plot={selectedPlot}
        onClose={() => setSelectedPlot(null)}
        onEnquireInForm={handleSelectPlotForEnquiry}
      />

      <GalleryModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
        onEnquire={handleSelectGalleryItemForEnquiry}
      />

      <QuickContactModal
        isOpen={quickContactOpen}
        onClose={() => setQuickContactOpen(false)}
      />

      {/* Sticky Floating WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
