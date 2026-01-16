import React from "react";
import Image from "next/image";
import { projects } from "@/data";

// We need to tell this component that it receives a function "openModal" as a prop
interface Props {
  openModal: (project: any) => void;
}

const ProjectsGrid = ({ openModal }: Props) => {
  return (
    <>
      {/* Title Section */}
      <div className="col-span-1 md:col-span-12 mt-10 flex items-end justify-between border-b border-white/10 pb-4">
        <h2 className="font-display text-4xl font-bold">Selected Works</h2>
        <span className="text-sm text-muted">04 Projects</span>
      </div>

      {/* Grid of Projects */}
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => openModal(project)} // Trigger the popup
          className="col-span-1 md:col-span-6 h-[350px] md:h-[400px] relative rounded-3xl overflow-hidden cursor-pointer group border border-white/10"
        >
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            unoptimized={project.img.endsWith(".gif")}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-display text-2xl font-bold mb-1">
              {project.title}
            </h3>
            <p className="text-accent text-sm font-bold tracking-wider uppercase">
              {project.category}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectsGrid;
