import React from "react";

const IntroCard = () => {
  return (
    <div className="col-span-1 md:col-span-8 bg-dark-card border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-center">
      <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-8">
        Transforming complex ideas into{" "}
        <span className="text-muted italic">seamless</span> digital experiences.
      </h1>

      <p className="text-muted text-lg leading-relaxed max-w-2xl mb-12">
        I am a developer and designer based in Morocco. I build websites that
        look good and perform better. Let's create something unique together.
      </p>

      {/* Statistics */}
      <div className="flex gap-8 md:gap-16">
        {[
          { num: "7+", label: "YEARS EXP" },
          { num: "25+", label: "PROJECTS" },
          { num: "100%", label: "SATISFACTION" },
        ].map((stat, i) => (
          <div key={i}>
            <h3 className="font-display text-3xl font-bold">{stat.num}</h3>
            <p className="text-xs text-muted font-bold tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroCard;
