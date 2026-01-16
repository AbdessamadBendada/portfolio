import React from "react";

const Ticker = () => {
  return (
    <div className="col-span-1 md:col-span-12 overflow-hidden py-4">
      {/* 'animate-scroll' is defined in our globals.css / CSS theme */}
      <div className="flex whitespace-nowrap animate-scroll">
        <span className="text-5xl md:text-6xl font-display font-bold text-transparent stroke-text uppercase mr-10">
          Web Development • UI/UX Design • Web
          Strategy • Email Marketing
        </span>
      </div>
    </div>
  );
};

export default Ticker;
