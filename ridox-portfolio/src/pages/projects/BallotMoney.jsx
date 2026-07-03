import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../Home";

const BallotMoney = () => {
  const project = projects.find((p) => p.slug === "ballot-money");

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
      <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white p-8 md:p-16 mb-[60px] shadow-xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs uppercase tracking-wider mb-6 border border-blue-500/30">
            Lending & Credit Scoring Platform • {project.year}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Ballot Money
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 leading-relaxed font-light">
            {project.description}
          </p>
        </div>
      </div>

      {/* Case Study Meta */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-gray-100 mb-[80px]">
        <div>
          <h4 className="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-2">My Role</h4>
          <p className="text-base font-medium text-gray-800">Lead UX Designer</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-2">Target Audience</h4>
          <p className="text-base font-medium text-gray-800">Borrowers & Alternative Lenders</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-2">Platform</h4>
          <p className="text-base font-medium text-gray-800">Responsive Web Dashboard</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-blue-800 uppercase tracking-wider mb-2">Duration</h4>
          <p className="text-base font-medium text-gray-800">12 Weeks (2023)</p>
        </div>
      </div>

      {/* Concept Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-[80px]">
        <div className="md:col-span-1">
          <h3 className="text-3xl font-semibold text-gray-900 leading-tight">Democratizing Access to Loans</h3>
        </div>
        <div className="md:col-span-2 space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            Ballot Money was designed to solve the credit scoring disconnect in developing financial markets. 
            Traditional credit systems exclude a large portion of eligible borrowers due to lack of bank statements or formal history.
          </p>
          <p>
            We designed a system that processes alternative scoring data (utility bills, mobile data history, merchant logs) to generate an intuitive Ballot Score. 
            Lenders can review these scores and extend credit offers directly in-app, removing traditional delays.
          </p>
        </div>
      </div>

      {/* Visual Product Showcase */}
      <div className="mb-[80px]">
        <div className="rounded-[24px] overflow-hidden bg-[#F2F5F8] p-6 md:p-12 flex justify-center items-center border border-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[500px] w-auto rounded-[16px] shadow-2xl object-contain hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>

      {/* Lender/Borrower UX Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[80px]">
        <div className="p-8 rounded-[20px] bg-slate-50 border border-slate-100">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Borrower Portal</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              Simple 3-step KYC documentation upload with instant OCR verification.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              Clear score visualization indicating key variables affecting their score and actionable tips to improve it.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              Transparent, comparative list of loan offers with auto-repayment schedules.
            </li>
          </ul>
        </div>
        <div className="p-8 rounded-[20px] bg-slate-50 border border-slate-100">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Lender Dashboard</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              Aggregated risk indicators displaying default probabilities visually.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              Automated underwriting rule filters to pre-approve loan categories.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              Portfolio tracking metrics monitoring loan health, default lists, and yield graphs.
            </li>
          </ul>
        </div>
      </div>

      {/* Impact Indicators */}
      <div className="bg-slate-900 text-white rounded-[24px] p-8 md:p-12">
        <h4 className="text-2xl font-bold mb-8 text-center">Impact & System Benefits</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="block text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">12 Days → 10 Min</span>
            <p className="text-sm text-gray-300">Reduction in loan processing & underwriting cycle times.</p>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">+60%</span>
            <p className="text-sm text-gray-300">Increase in pre-qualification rates for unbanked users.</p>
          </div>
          <div>
            <span className="block text-4xl md:text-5xl font-extrabold text-blue-400 mb-2">-15%</span>
            <p className="text-sm text-gray-300">Reduction in portfolio default rates due to enhanced risk scoring models.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BallotMoney;
