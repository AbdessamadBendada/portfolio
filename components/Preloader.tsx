"use client";

import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // 1. Wait for the page to effectively "load" (simulated here with timer)
    const timer = setTimeout(() => {
      setFade(true); // Start fading out
    }, 4000); // Adjust this time (2000ms = 2 seconds)

    // 2. Remove from DOM completely after fade finishes
    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 2500); // 2000ms + 500ms transition

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-dark-main transition-opacity duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Container for the spinner */}
      <div className="relative w-16 h-16">
        {/* 
           We create 5 dots. 
           Each dot runs the same animation but with a different delay.
           This creates the "chasing" effect.
        */}
        <div className="loader-dot" style={{ animationDelay: "-0.4s" }}></div>
        <div className="loader-dot" style={{ animationDelay: "-0.2s" }}></div>
        <div className="loader-dot" style={{ animationDelay: "0s" }}></div>
        <div className="loader-dot" style={{ animationDelay: "0.2s" }}></div>
        <div className="loader-dot" style={{ animationDelay: "0.4s" }}></div>
      </div>

      {/* Optional: Loading Text */}
      <div className="absolute bottom-10 font-display text-muted text-xs tracking-widest animate-pulse">
        Welcome To Abdessamad's Portfolio,
        <br />
        We are preparing everything for you...
      </div>
    </div>
  );
};

export default Preloader;
