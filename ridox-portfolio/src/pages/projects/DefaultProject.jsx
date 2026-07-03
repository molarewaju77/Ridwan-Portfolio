import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../Home";

const DefaultProject = ({ slug }) => {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold text-[#191919] mb-4">Project Not Found</h1>
        <p className="text-gray-500 mb-8">The project you are looking for does not exist or has been moved.</p>
        <Link to="/" className="bg-[#191919] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-[60px] mb-[120px] max-w-6xl mx-auto">
      {/* Back button */}
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#8B8A8A] hover:text-black mb-[40px] transition-colors group">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transform group-hover:-translate-x-1 transition-transform"
        >
          <path
            d="M8 15L1 8M1 8L8 1M1 8H15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to Home
      </Link>

      {/* Hero section */}
      <div className="mb-[60px]">
        <div className="flex items-center gap-2 text-sm text-[#8B8A8A] uppercase tracking-wider mb-4">
          <span>{project.title}</span>
          <span>/</span>
          <span>{project.year}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold text-[#191919] leading-tight max-w-4xl">
          {project.description}
        </h1>
      </div>

      {/* Hero Image */}
      <div className="rounded-[16px] overflow-hidden bg-[#F4F4F4] mb-[60px] aspect-[16/9] md:aspect-[21/9]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Meta grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100 mb-[80px]">
        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Role</h4>
          <p className="text-sm font-medium text-[#191919]">Lead UX/UI Designer</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Duration</h4>
          <p className="text-sm font-medium text-[#191919]">3 Months ({project.year})</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Deliverables</h4>
          <p className="text-sm font-medium text-[#191919]">User Research, Wireframes, High-Fidelity UI, Prototypes</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Platform</h4>
          <p className="text-sm font-medium text-[#191919]">Web & Mobile Application</p>
        </div>
      </div>

      {/* Content layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold text-[#191919] sticky top-[100px]">Overview</h2>
        </div>
        <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed text-[17px]">
          <p>
            This case study explores the end-to-end design process of <strong>{project.title}</strong>. 
            The goal was to create a highly engaging, accessible, and user-centric digital experience. 
            By aligning user needs with business goals, we crafted a clean and optimized solution to improve usability and overall interaction patterns.
          </p>
          <p>
            Through rigorous research, data-driven user flows, and modern design aesthetics, we transformed initial sketches and concepts into a premium functional interface.
          </p>
        </div>

        <div className="md:col-span-3 h-px bg-gray-100 my-8"></div>

        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold text-[#191919] sticky top-[100px]">The Challenge</h2>
        </div>
        <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed text-[17px]">
          <p>
            Users often face fragmented, overly complex onboarding steps and outdated user interfaces when trying to navigate similar platforms. 
            The challenge for {project.title} was to simplify these workflows, improve data density without overwhelming users, and build a design system that feels lightweight and modern.
          </p>
        </div>

        <div className="md:col-span-3 h-px bg-gray-100 my-8"></div>

        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold text-[#191919] sticky top-[100px]">The Solution</h2>
        </div>
        <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed text-[17px]">
          <p>
            We introduced clean layouts, bold typography hierarchies, and intuitive navigability. By reducing page load visual noise and organizing content into clear modular grids, users are able to complete their target actions in 40% less time with minimal cognitive friction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefaultProject;
