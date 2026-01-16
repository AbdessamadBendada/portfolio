"use client";

import { useState } from "react";

// Importing our components
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import IntroCard from "@/components/IntroCard";
import Ticker from "@/components/Ticker";
import StrategyCard from "@/components/StrategyCard";
import ProcessCard from "@/components/ProcessCard";
import Testimonials from "@/components/Testimonials";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import ClientLogos from "@/components/ClientLogos";

export default function Home() {
  // We only need state for the Modal here, because it overlays the whole page
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Helper to open the modal (passed down to ProjectsGrid)
  const handleOpenModal = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable scroll
  };

  // Helper to close the modal (passed down to ProjectModal)
  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto"; // Enable scroll
  };

  return (
    <main className="min-h-screen p-2 md:px-10 max-w-[1200px] mx-auto">
      {/* 
        MAIN GRID LAYOUT 
        Mobile: 1 column | Desktop: 12 columns
      */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        <Preloader />
        <Header />

        <ProfileCard />

        <IntroCard />

        <Ticker />

        <StrategyCard />

        <ProcessCard />

        <Testimonials />

        <ProjectsGrid openModal={handleOpenModal} />
        <ClientLogos />

        <ContactForm />

        <Footer />
      </div>

      {/* MODAL (Lives outside the grid) */}
      {modalOpen && (
        <ProjectModal project={selectedProject} closeModal={handleCloseModal} />
      )}
    </main>
  );
}
