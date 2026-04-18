"use client"; 

import React, { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/data';
import { RiArrowDownLine, RiCloseLine, RiChatForwardLine } from "react-icons/ri";

interface Props {
  openModal: (project: any) => void;
}

const ProjectsGrid = ({ openModal }: Props) => {
  // 1. How many projects to show (starts at 4)
  const [visibleCount, setVisibleCount] = useState(4);
  
  // 2. State for the final CTA popup
  const [showCTAPopup, setShowCTAPopup] = useState(false);

  const visibleProjects = projects.slice(0, visibleCount);

  // 3. Logic for the "Load More" button
  const handleButtonClick = () => {
    if (visibleCount < projects.length) {
      // Still have projects? Load 4 more.
      setVisibleCount((prev) => prev + 4);
    } else {
      // All projects are showing? Trigger the popup.
      setShowCTAPopup(true);
    }
  };

  return (
    <>
      {/* Title Section */}
      <div className="col-span-1 md:col-span-12 mt-10 flex items-end justify-between border-b border-white/10 pb-4">
        <h2 className="font-display text-4xl font-bold">Selected Works</h2>
        <span className="text-sm text-muted">
          {visibleProjects.length} of {projects.length} Projects
        </span>
      </div>

      {/* Grid of Projects */}
      {visibleProjects.map((project) => (
        <div 
          key={project.id}
          onClick={() => openModal(project)}
          className="col-span-1 md:col-span-6 h-[350px] md:h-[400px] relative rounded-3xl overflow-hidden cursor-pointer group border border-white/10 animate-in fade-in zoom-in-95 duration-500"
        >
          {project.img.endsWith('.mp4') ? (
            <video
              src={project.img}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
          ) : (
            <Image 
              src={project.img} 
              alt={project.title} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              unoptimized={project.img.endsWith('.gif')}
            />
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
            <h3 className="font-display text-2xl font-bold mb-1">{project.title}</h3>
            <p className="text-accent text-sm font-bold tracking-wider uppercase">{project.category}</p>
          </div>
        </div>
      ))}

      {/* Load More / Contact Button */}
      <div className="col-span-1 md:col-span-12 flex justify-center mt-6">
        <button 
          onClick={handleButtonClick}
          className="flex items-center gap-2 bg-dark-card border border-white/10 hover:border-accent text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-white/5 active:scale-95 shadow-xl"
        >
          {/* Change button text based on whether we are loading or contacting */}
          {visibleCount < projects.length ? (
            <>Load More <RiArrowDownLine size={20} /></>
          ) : (
            <>Contact for more <RiChatForwardLine size={20} /></>
          )}
        </button>
      </div>

      {/* THE CUSTOM CTA POPUP */}
      {showCTAPopup && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300" onClick={() => setShowCTAPopup(false)}>
          <div 
            className="bg-dark-card border border-white/10 w-full max-w-lg rounded-3xl p-8 md:p-12 relative shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Icon */}
            <button 
              onClick={() => setShowCTAPopup(false)}
              className="absolute top-4 right-4 z-50 text-white bg-black/60 p-2 rounded-full hover:bg-accent hover:text-black transition-colors"
            >
              <RiCloseLine size={24} />
            </button>

            {/* Icon Circle */}
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(212,242,56,0.3)]">
                <RiChatForwardLine size={40} className="text-black" />
            </div>

            <h2 className="font-display text-3xl font-bold mb-4 uppercase tracking-tight">You've seen them all!</h2>
            
            <p className="text-muted text-lg mb-8 leading-relaxed">
                You've seen all my featured projects. If you want something specific or you just want to see everything, please contact me and I'm pretty sure you're going to find what you need.
            </p>

            <a 
              href="#contact" 
              onClick={() => setShowCTAPopup(false)}
              className="inline-block w-full bg-accent text-black font-bold py-5 rounded-2xl hover:opacity-90 transition-all shadow-lg hover:-translate-y-1"
            >
              Contact Me Now
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsGrid;