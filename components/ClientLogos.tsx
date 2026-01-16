import React from "react";
import Image from "next/image";

const ClientLogos = () => {
  // Mock data - replace these with your client logos later
  // Pro tip: Use .svg or .png with transparent backgrounds
  const logos = [
    {
      name: "cova",
      url: "/cova.png",
    },
    {
      name: "Brander",
      url: "/brander.avif",
    },
    {
      name: "tetra",
      url: "/ts.png",
    },
    {
      name: "sol",
      url: "/sol.webp",
    },
    {
      name: "Sporthub",
      url: "/sporthub.png",
    },
    { name: "Mohtawa", url: "/mohtawa.png" },
    { name: "LiveAqar", url: "/liveaqar.png" },
  ];

  return (
    <div className="col-span-1 md:col-span-12 py-8 overflow-hidden relative">
      {/* 
        Gradient masks on the sides 
        This makes the logos fade out elegantly on the left and right edges
      */}
      {/* <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-dark-main to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-dark-main to-transparent z-10 pointer-events-none"></div> */}

      {/* 
        The Sliding Container 
        We use 'w-max' to let it flow horizontally
        We have 'flex' to align items
        We use our custom 'animate-infinite-scroll' defined in css
      */}
      <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
        {/* Render the logos TWICE to create the seamless loop effect */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-8 flex items-center justify-center cursor-pointer group"
          >
            {/* 
               Image Styling:
               - h-8 md:h-10: Fixed height keeps them neat (better than fixed width)
               - w-auto: Maintains aspect ratio
               - grayscale & opacity-50: The "Grayed Out" look you wanted
               - group-hover: Reveals the real color and opacity on hover
            */}
            <Image
              src={logo.url}
              alt={logo.name}
              width={150}
              height={50}
              className="h-8 md:h-10 w-auto object-contain grayscale opacity-40 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
