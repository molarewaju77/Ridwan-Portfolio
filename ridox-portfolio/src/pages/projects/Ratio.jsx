import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../Home";

const Ratio = () => {
  const project = projects.find((p) => p.slug === "ratio");

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
      <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-r from-violet-950 via-purple-900 to-fuchsia-950 text-white p-8 md:p-16 mb-[60px] shadow-xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs uppercase tracking-wider mb-6 border border-purple-500/30">
            Social Expense Utility • {project.year}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Ratio
          </h1>
          <p className="text-xl md:text-2xl text-purple-100/80 leading-relaxed font-light">
            {project.description}
          </p>
        </div>
      </div>

      {/* Case Study Meta */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-gray-100 mb-[80px]">
        <div>
          <h4 className="text-xs font-semibold text-purple-800 uppercase tracking-wider mb-2">My Role</h4>
          <p className="text-base font-medium text-gray-800">Lead Product UX Designer</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-purple-800 uppercase tracking-wider mb-2">Platform</h4>
          <p className="text-base font-medium text-gray-800">Mobile Native iOS & Web Widget</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-purple-800 uppercase tracking-wider mb-2">Timeline</h4>
          <p className="text-base font-medium text-gray-800">4 Weeks (2025)</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-purple-800 uppercase tracking-wider mb-2">Aesthetic</h4>
          <p className="text-base font-medium text-gray-800">Clean, Modern, Playful Social App</p>
        </div>
      </div>

      {/* Split details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-[80px]">
        <div className="md:col-span-1">
          <h3 className="text-3xl font-semibold text-gray-900 leading-tight">Splitting Expenses Without the Friction</h3>
        </div>
        <div className="md:col-span-2 space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            Shared tabs are notoriously awkward to calculate and follow up on. 
            Traditional ledger apps feel mechanical, spreadsheets are tedious on mobile, and payment apps lack group visibility. 
            Ratio was designed to turn ledger tracking into a collaborative, painless, and transparent social utility.
          </p>
          <p>
            We focused heavily on the receipt scanning flow and fractional ledger splitting, ensuring that users can split items by ratio, percentage, or custom fractions without breaking their flow.
          </p>
        </div>
      </div>

      {/* Visual Product Showcase */}
      <div className="mb-[80px]">
        <div className="rounded-[24px] overflow-hidden bg-[#F5F2F7] p-6 md:p-12 flex justify-center items-center border border-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[500px] w-auto rounded-[16px] shadow-2xl object-contain hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>

      {/* Ledger Walkthrough */}
      <div className="mb-[80px]">
        <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">UX Feature Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[20px] bg-purple-50/30 border border-purple-100/50">
            <h4 className="font-bold text-gray-900 mb-2">OCR Receipt Parsing</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Snapshot any restaurant receipt. Ratio extracts line-items and totals automatically, allowing group members to claim their items in real time.</p>
          </div>
          <div className="p-8 rounded-[20px] bg-purple-50/30 border border-purple-100/50">
            <h4 className="font-bold text-gray-900 mb-2">Complex Ratio Logic</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Split shares dynamically. Supports standard equal splits, weighted ratio shares (e.g. 2:1), percentages, or custom dollar contributions.</p>
          </div>
          <div className="p-8 rounded-[20px] bg-purple-50/30 border border-purple-100/50">
            <h4 className="font-bold text-gray-900 mb-2">One-Tap Settlement</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Integrated settle-up flows compute minimal payment paths across multiple people, reducing overall bank transfers by 50%.</p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-[#191919] text-white rounded-[24px] p-8 md:p-12 text-center">
        <h4 className="text-2xl font-bold mb-8">User Validation Surveys</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="block text-4xl md:text-5xl font-extrabold text-purple-400 mb-2">90%</span>
            <p className="text-sm text-gray-400">Decrease in awkward follow-ups reported by alpha testers.</p>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-extrabold text-purple-400 mb-2">12 Sec</span>
            <p className="text-sm text-gray-400">Average time to scan and split a 15-item dinner bill.</p>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-extrabold text-purple-400 mb-2">98%</span>
            <p className="text-sm text-gray-400">Usability rate for the fractional splitting interface layouts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratio;
