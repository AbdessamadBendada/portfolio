import React from "react";

const Header = () => {
  return (
    <header className="col-span-1 md:col-span-12 flex justify-between items-center py-5">
      {/* Logo Area */}
      <div className="text-2xl font-bold font-display">
        BENDADA<span className="text-accent">.</span>
      </div>

      {/* CTA Button */}
      <a
        href="#contact"
        className="px-6 py-2.5 bg-[#ededed] text-black rounded-full font-semibold text-sm hover:bg-accent transition-colors"
      >
        Get A Quote
      </a>
    </header>
  );
};

export default Header;
