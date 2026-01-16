import React from "react";
import Image from "next/image";
import { RiCloseCircleLine, RiArrowRightUpLine } from "react-icons/ri";

interface Props {
  project: any;
  closeModal: () => void;
}

const ProjectModal = ({ project, closeModal }: Props) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={closeModal} // Click outside to close
    >
      <div
        className="bg-dark-card border border-white/10 w-full max-w-2xl rounded-3xl p-6 md:p-10 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent close on content click
      >
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 text-white/50 hover:text-white"
        >
          <RiCloseCircleLine size={32} />
        </button>

        <div className="relative w-full h-[250px] md:h-[300px] mb-6 rounded-2xl overflow-hidden">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <h2 className="font-display text-3xl font-bold mb-2">
          {project.title}
        </h2>
        <p className="text-muted text-lg mb-6">{project.desc}</p>

        <a
          href={project.link}
          target="_blank"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-accent transition-colors"
        >
          View Live Project <RiArrowRightUpLine />
        </a>
      </div>
    </div>
  );
};

export default ProjectModal;
