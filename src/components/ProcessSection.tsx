import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="w-full py-20 sm:py-28 bg-[#f7f9fb]" id="process">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-16">
        <div className="max-w-xl space-y-3">
          <span className="font-label-technical text-label-technical uppercase tracking-widest text-[#426086] font-bold">
            Methodical Execution
          </span>
          <h2 className="font-headline-lg text-headline-lg text-[#191c1e] font-bold">
            The 4-Step Construction Lifecycle
          </h2>
          <p className="font-body-md text-body-md text-[#44474c]">
            A structured pathway from conceptual site inquiry to turning the front door key.
          </p>
        </div>

        {/* Process Horizontal Bento / Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((stepItem, idx) => {
            const isLast = idx === PROCESS_STEPS.length - 1;
            const isCurrent = activeStep === idx;

            return (
              <div
                key={stepItem.step}
                onClick={() => setActiveStep(idx)}
                className={`relative space-y-4 p-5 rounded-xl transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? 'bg-white shadow-md border border-[#E2E8F0]'
                    : 'hover:bg-white/60'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-display text-[48px] leading-none font-bold ${
                      isLast ? 'text-[#B45309]' : 'text-[#000000]'
                    }`}
                  >
                    {stepItem.step}
                  </span>
                  <div
                    className={`h-0.5 flex-grow ${
                      isLast ? 'bg-[#F59E0B]' : 'bg-[#e0e3e5]'
                    }`}
                  ></div>
                </div>

                <h3 className="font-title-lg text-title-lg text-[#191c1e] font-bold">
                  {stepItem.title}
                </h3>

                <p className="font-body-sm text-body-sm text-[#44474c] leading-relaxed">
                  {stepItem.description}
                </p>

                {/* Detailed checklist */}
                <div className="pt-3 border-t border-[#E2E8F0]/60 space-y-1.5">
                  {stepItem.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-xs text-[#44474c]">
                      <span className="material-symbols-outlined text-[#B45309] text-[14px] shrink-0 mt-0.5">
                        arrow_right
                      </span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
