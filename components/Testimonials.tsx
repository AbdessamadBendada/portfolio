"use client"; // Must be client because of the slider interval

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import { testimonials } from "@/data"; // Importing from our data file

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="col-span-1 md:col-span-12 bg-dark-card border border-white/10 rounded-3xl p-10 min-h-[300px] flex flex-col items-center justify-center text-center">
      <RiDoubleQuotesL className="text-5xl text-accent opacity-50 mb-6" />

      <div className="max-w-3xl">
        {/* Animated fade key would go here ideally, but simple text switch works too */}
        <p className="font-display text-xl md:text-2xl italic leading-relaxed mb-8">
          "{testimonials[currentSlide].text}"
        </p>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent">
            <Image
              src={testimonials[currentSlide].img}
              alt={testimonials[currentSlide].name}
              width={50}
              height={50}
            />
          </div>
          <div className="text-left">
            <div className="font-bold text-white">
              {testimonials[currentSlide].name}
            </div>
            <div className="text-xs text-muted">
              {testimonials[currentSlide].role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
