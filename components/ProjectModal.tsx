import React from "react";
import Image from "next/image";
import { RiCloseLine, RiArrowRightUpLine } from "react-icons/ri";

interface Props {
  project: any;
  closeModal: () => void;
}

const ProjectModal = ({ project, closeModal }: Props) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={closeModal} // Close when clicking the dark background
    >
      <div
        className="bg-dark-card border border-white/10 w-full max-w-2xl rounded-3xl relative shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Prevent close on content click
      >
        {/* --- 1. THE CLOSE BUTTON (Fixed for Mobile) --- */}
        {/* 
           - z-50: Forces it on top of everything
           - bg-black/50: Adds a dark circle behind it so it's visible on light images
           - top-4 right-4: Tucked in the corner
        */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-50 text-white bg-black/60 backdrop-blur-md p-2 rounded-full hover:bg-accent hover:text-black transition-colors"
        >
          <RiCloseLine size={24} />
        </button>

        {/* --- SCROLLABLE CONTENT AREA --- */}
        {/* overflow-y-auto ensures you can scroll inside the modal on small phones */}
        <div className="overflow-y-auto p-6 md:p-10 scrollbar-hide">
          <div className="relative w-full h-[250px] md:h-[350px] mb-6 rounded-2xl overflow-hidden shadow-lg border border-white/5">
            {/* Logic for Video vs Image */}
            {project.img.endsWith(".mp4") ? (
              <video
                src={project.img}
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-full"
              />
            ) : (
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover"
                unoptimized={project.img.endsWith(".gif")}
              />
            )}
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 leading-tight">
            {project.title}
          </h2>

          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-black uppercase rounded-full bg-accent">
            {project.category}
          </div>

          <p className="text-muted text-lg leading-relaxed mb-8">
            {project.desc}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={project.link}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 rounded-xl font-bold hover:bg-accent transition-colors"
            >
              View Live Project <RiArrowRightUpLine size={18} />
            </a>
          </div>

          {/* --- 2. EXTRA CLOSE BUTTON (Mobile UX) --- */}
          {/* A big 'Close' button at the bottom is easier for thumbs */}
          {/* <button
            onClick={closeModal}
            className="mt-8 w-full py-4 text-sm font-bold tracking-widest text-center uppercase text-white/30 hover:text-white md:hidden border-t border-white/10"
          >
            Close Window
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
