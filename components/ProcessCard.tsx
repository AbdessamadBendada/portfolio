import React from "react";
import { RiListSettingsLine } from "react-icons/ri"; // <--- Import the icon

const ProcessCard = () => {
  // Static data for the 4 steps
  const steps = [
    { num: "01", label: "Briefing" },
    { num: "02", label: "Concept" },
    { num: "03", label: "Code" },
    { num: "04", label: "Ship" },
  ];

  return (
    <div className="col-span-1 md:col-span-6 bg-dark-card border border-white/10 rounded-3xl p-8 min-h-[400px] flex flex-col">
      {/* HEADER WITH ICON */}
      <div className="flex items-center gap-4 mb-8">
        {/* Icon Circle */}
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-xl shrink-0">
          <RiListSettingsLine className="text-white" />
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="font-display text-2xl font-bold leading-none">
            The Process
          </h3>
          <p className="text-sm text-muted mt-1">From concept to reality</p>
        </div>
      </div>

      {/* 2x2 GRID LAYOUT */}
      <div className="grid grid-cols-2 gap-4 flex-grow">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-xl flex flex-col items-center justify-center p-4 hover:border-accent border border-transparent transition-all hover:bg-accent/5 group"
          >
            {/* The Number */}
            <div className="text-4xl font-display font-bold text-transparent stroke-text group-hover:text-accent group-hover:stroke-0 transition-all mb-2">
              {step.num}
            </div>
            {/* The Label */}
            <span className="text-sm font-bold text-muted group-hover:text-white transition-colors">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessCard;
