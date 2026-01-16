import React from "react";
import Image from "next/image";
import { RiLinkedinFill, RiWhatsappLine, RiTwitterXLine } from "react-icons/ri";

const ProfileCard = () => {
  // 1. Define your links here
  const socialLinks = [
    {
      Icon: RiLinkedinFill,
      link: "https://www.linkedin.com/in/abdessamad-bendada/",
    },
    {
      Icon: RiWhatsappLine,
      // Use wa.me/ followed by country code (212 for Morocco) and phone number
      link: "https://wa.me/97471913819",
    },
    {
      Icon: RiTwitterXLine,
      link: "https://x.com/dev_abdessamad",
    },
  ];

  return (
    <div className="col-span-1 md:col-span-4 bg-dark-card border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center">
      {/* ... (Image and Badge code remains the same) ... */}
      <div className="relative w-full max-w-[250px] md:w-[250px] h-[350px] mb-6 shadow-2xl">
        <Image
          src="/abdessamad-headshot.webp"
          alt="Profile"
          fill
          style={{ filter: "grayscale(100%)" }}
          className="object-cover rounded-2xl border border-white/10"
        />
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-bold mb-6">
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
        Open to Work
      </div>

      <h1 className="text-4xl font-display font-bold leading-none mb-2">
        Abdessamad
        <br />
        Bendada
      </h1>
      <h2 className="text-muted text-lg mb-8">Creative Developer</h2>

      {/* 2. Map over the new socialLinks array */}
      <div className="flex gap-4 mt-auto">
        {socialLinks.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank" // Opens in new tab
            rel="noopener noreferrer" // Security best practice
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-muted hover:bg-white hover:text-black transition-all"
          >
            <social.Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
