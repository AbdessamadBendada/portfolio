import React from "react";
import {
  RiSearchEyeLine,
  RiPencilRuler2Line,
  RiCodeSSlashLine,
  RiRocketLine,
} from "react-icons/ri";

const StrategyCard = () => {
  // Define items here locally since they are static
  const items = [
    { icon: RiSearchEyeLine, label: "Discover" },
    { icon: RiPencilRuler2Line, label: "Design" },
    { icon: RiCodeSSlashLine, label: "Develop" },
    { icon: RiRocketLine, label: "Launch" },
  ];

  return (
    <div className="col-span-1 md:col-span-6 bg-dark-card border border-white/10 rounded-3xl p-8 min-h-[400px] flex flex-col">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-xl">
          <RiSearchEyeLine />
        </div>
        <h3 className="font-display text-2xl font-bold">My Strategy</h3>
      </div>

      {/* 2x2 Grid for strategy steps */}
      <div className="grid grid-cols-2 gap-4 flex-grow">
        {items.map((Item, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-xl flex flex-col items-center justify-center p-4 hover:border-accent border border-transparent transition-all hover:bg-accent/5"
          >
            <Item.icon className="text-2xl mb-2 text-white" />
            <span className="text-sm font-bold text-muted">{Item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyCard;
