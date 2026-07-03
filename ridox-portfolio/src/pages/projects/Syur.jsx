import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../Home";

const Syur = () => {
  const project = projects.find((p) => p.slug === "syur");

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
      <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-r from-emerald-900 via-stone-900 to-emerald-950 text-white p-8 md:p-16 mb-[60px] shadow-xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs uppercase tracking-wider mb-6 border border-emerald-500/30">
            Investment Portfolio App • {project.year}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Syur
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
          <p className="text-base font-medium text-gray-800">Lead UX/UI Designer</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">Platform</h4>
          <p className="text-base font-medium text-gray-800">Mobile App (iOS / Android)</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">Timeline</h4>
          <p className="text-base font-medium text-gray-800">8 Weeks (2023)</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">Industry</h4>
          <p className="text-base font-medium text-gray-800">Wealth Management / FinTech</p>
        </div>
      </div>

      {/* Content Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-[80px]">
        <div className="md:col-span-1">
          <h2 className="text-3xl font-semibold text-gray-900 sticky top-[100px] leading-tight">Managing Investments at a Glance</h2>
        </div>
        <div className="md:col-span-2 space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            Syur was conceptualized to help retail investors track their diverse holdings across stocks, bonds, crypto, and real estate in a single, beautiful place. 
            The goal was to replace messy spreadsheets with automated aggregation and visual projections.
          </p>
          <p>
            We conducted interviews with investors holding assets on multiple exchanges. 
            The core challenge was translating real-time APIs into a consolidated dashboard that provides immediate balance insights without lagging.
          </p>
        </div>
      </div>

      {/* Visual Product Showcase */}
      <div className="mb-[80px]">
        <div className="rounded-[24px] overflow-hidden bg-[#F3F6F3] p-6 md:p-12 flex justify-center items-center border border-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[500px] w-auto rounded-[16px] shadow-2xl object-contain hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-[80px]">
        <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Core System Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[20px] bg-neutral-50 border border-neutral-100">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Multi-Asset Wallet Sync</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Connect multiple accounts seamlessly via Plaid and custom crypto API webhooks to populate a unified dashboard view.</p>
          </div>
          <div className="p-8 rounded-[20px] bg-neutral-50 border border-neutral-100">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Predictive Wealth Models</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Interactive forecasting graphs project portfolio health over 5, 10, and 20 years based on risk profiling models.</p>
          </div>
          <div className="p-8 rounded-[20px] bg-neutral-50 border border-neutral-100">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Smart Rebalancing Alerts</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Contextual notifications nudge users when asset allocations drift from their target risk profile configurations.</p>
          </div>
        </div>
      </div>

      {/* Big Stats block */}
      <div className="bg-[#191919] text-white rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row justify-around items-center text-center">
        <div className="mb-6 md:mb-0">
          <span className="block text-4xl md:text-6xl font-extrabold text-emerald-400">92%</span>
          <span className="text-xs uppercase tracking-wider text-gray-400 mt-2 block">Accuracy Rating</span>
        </div>
        <div className="h-px w-24 md:h-12 md:w-px bg-neutral-800 mb-6 md:mb-0"></div>
        <div className="mb-6 md:mb-0">
          <span className="block text-4xl md:text-6xl font-extrabold text-emerald-400">4 Min</span>
          <span className="text-xs uppercase tracking-wider text-gray-400 mt-2 block">Average Setup Time</span>
        </div>
        <div className="h-px w-24 md:h-12 md:w-px bg-neutral-800 mb-6 md:mb-0"></div>
        <div>
          <span className="block text-4xl md:text-6xl font-extrabold text-emerald-400">+50K</span>
          <span className="text-xs uppercase tracking-wider text-gray-400 mt-2 block">Alpha Waitlist signups</span>
        </div>
      </div>
    </div>
  );
};

export default Syur;
