import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../Home";

const Stockertim = () => {
  const project = projects.find((p) => p.slug === "stockertim");

  if (!project) return null;

  return (
    <div className="mt-[60px] mb-[120px] max-w-6xl mx-auto">
      {/* Back Link */}
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

      {/* Bespoke Header */}
      <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-900 text-white p-8 md:p-16 mb-[60px] shadow-xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs uppercase tracking-wider mb-6 border border-emerald-500/30">
            Featured Mobile App • {project.year}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Stockertim
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100/80 leading-relaxed font-light">
            {project.description}
          </p>
        </div>
      </div>

      {/* Case Study Meta */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-gray-100 mb-[80px]">
        <div>
          <h4 className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">My Role</h4>
          <p className="text-base font-medium text-gray-800">UX Researcher & Lead UI Designer</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">Target Audience</h4>
          <p className="text-base font-medium text-gray-800">Everyday & Gen-Z Retail Investors</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">Timeline</h4>
          <p className="text-base font-medium text-gray-800">September - December 2025</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">Scope</h4>
          <p className="text-base font-medium text-gray-800">Native iOS & Android design</p>
        </div>
      </div>

      {/* The Challenge & Goal Layout - Beside each other in split grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[80px]">
        <div className="p-8 rounded-[20px] bg-red-50/50 border border-red-100">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9V14M12 18.01H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Challenge</h3>
          <p className="text-gray-600 leading-relaxed">
            Many retail investors feel overwhelmed by Wall Street jargon and complex charting tools. 
            Traditional trading platforms prioritize high-speed transactions over long-term financial education. 
            Our challenge was to design a platform that teaches smart investment principles on a mobile-first interface.
          </p>
        </div>

        <div className="p-8 rounded-[20px] bg-emerald-50/50 border border-emerald-100">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Solution</h3>
          <p className="text-gray-600 leading-relaxed">
            We built Stockertim around gamified lessons, interactive portfolio simulators, and a simplified dashboard. 
            By replacing complex candlesticks with intuitive growth curves and breaking down financial statements into visual metrics, we created a tool that makes learning to invest engaging and accessible.
          </p>
        </div>
      </div>

      {/* Visual Product Showcase */}
      <div className="mb-[80px]">
        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Design Showcase</h3>
        <div className="rounded-[24px] overflow-hidden bg-gray-150 p-6 md:p-12 flex justify-center items-center bg-[#F9F9F9] border border-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[500px] w-auto rounded-[16px] shadow-2xl object-contain hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>

      {/* The Design Process Timeline */}
      <div className="mb-[80px]">
        <h3 className="text-3xl font-semibold text-gray-900 mb-10 text-center">UX Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="relative">
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Phase 01</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Empathize & Research</h4>
            <p className="text-sm text-gray-500">Conducted 12 user interviews and competitor analyses to identify the core anxieties around personal finance.</p>
          </div>
          <div className="relative">
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Phase 02</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Information Architecture</h4>
            <p className="text-sm text-gray-500">Mapped out simple user flows for gamified modules to minimize friction during active learning sessions.</p>
          </div>
          <div className="relative">
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Phase 03</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Prototyping & Testing</h4>
            <p className="text-sm text-gray-500">Created mid-fidelity clickable wireframes. Ran interactive usability tests with 8 participants.</p>
          </div>
          <div className="relative">
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Phase 04</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">High-Fidelity UI</h4>
            <p className="text-sm text-gray-500">Applied modern design tokens, interactive micro-animations, and clean cards with emerald highlights.</p>
          </div>
        </div>
      </div>

      {/* Key Highlights / Outcomes */}
      <div className="bg-[#191919] text-white rounded-[24px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <span className="block text-4xl md:text-5xl font-bold text-emerald-400 mb-2">94%</span>
          <h5 className="text-lg font-semibold mb-2">Clarity Rating</h5>
          <p className="text-sm text-gray-400">Users reported high confidence understanding core terms after completing lessons.</p>
        </div>
        <div>
          <span className="block text-4xl md:text-5xl font-bold text-emerald-400 mb-2">-35%</span>
          <h5 className="text-lg font-semibold mb-2">Time-to-Simulate</h5>
          <p className="text-sm text-gray-400">Simplifying the order ticket streamlined virtual stock purchases significantly.</p>
        </div>
        <div>
          <span className="block text-4xl md:text-5xl font-bold text-emerald-400 mb-2">4.8★</span>
          <h5 className="text-lg font-semibold mb-2">Satisfaction Score</h5>
          <p className="text-sm text-gray-400">Alpha tester survey rating for the overall interface aesthetics and gamified lessons.</p>
        </div>
      </div>
    </div>
  );
};

export default Stockertim;
