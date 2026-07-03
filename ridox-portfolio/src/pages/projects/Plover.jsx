import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../Home";

const Plover = () => {
  const project = projects.find((p) => p.slug === "plover");

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
      <div className="relative rounded-[24px] overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white p-8 md:p-16 mb-[60px] shadow-xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs uppercase tracking-wider mb-6 border border-indigo-500/30">
            Digital Wallet & Banking • {project.year}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Plover
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100/80 leading-relaxed font-light">
            {project.description}
          </p>
        </div>
      </div>

      {/* Case Study Meta */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-gray-100 mb-[80px]">
        <div>
          <h4 className="text-xs font-semibold text-indigo-800 uppercase tracking-wider mb-2">My Role</h4>
          <p className="text-base font-medium text-gray-800">Lead UX/UI & System Designer</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-indigo-800 uppercase tracking-wider mb-2">Platform</h4>
          <p className="text-base font-medium text-gray-800">Web Dashboard & Mobile iOS</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-indigo-800 uppercase tracking-wider mb-2">Timeline</h4>
          <p className="text-base font-medium text-gray-800">6 Weeks (2025)</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-indigo-800 uppercase tracking-wider mb-2">Core Focus</h4>
          <p className="text-base font-medium text-gray-800">Data Visualization & Security Flow</p>
        </div>
      </div>

      {/* The Fintech Challenge */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-[80px]">
        <div className="md:col-span-1">
          <h3 className="text-3xl font-semibold text-gray-900 leading-tight">The Fintech Challenge</h3>
        </div>
        <div className="md:col-span-2 space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            Users are increasingly wary of complex banking terms and difficult navigation flows. 
            Fintech apps need to combine absolute security with effortless ease of use. 
            For Plover, we designed an interface that makes money transfers, transaction auditing, and budget planning clear and approachable.
          </p>
          <p>
            The major pain points identified in research were long transaction loading states, messy navigation sub-menus, and confusing dashboard widgets that made users feel disconnected from their spending habits.
          </p>
        </div>
      </div>

      {/* Visual Product Showcase */}
      <div className="mb-[80px]">
        <div className="rounded-[24px] overflow-hidden bg-[#F4F6F9] p-6 md:p-12 flex justify-center items-center border border-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[500px] w-auto rounded-[16px] shadow-2xl object-contain hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>

      {/* Core Design Pillars */}
      <div className="mb-[80px]">
        <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Design Pillars</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[20px] bg-slate-50 border border-slate-100 shadow-sm text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4">1</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Clarity & Space</h4>
            <p className="text-sm text-gray-500">Every transaction and balance widget was given room to breathe, reducing cognitive load for faster decision-making.</p>
          </div>
          <div className="p-8 rounded-[20px] bg-slate-50 border border-slate-100 shadow-sm text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4">2</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Interactive Feedback</h4>
            <p className="text-sm text-gray-500">Micro-animations guide users during page transitions, ensuring transaction statuses feel live and responsive.</p>
          </div>
          <div className="p-8 rounded-[20px] bg-slate-50 border border-slate-100 shadow-sm text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg mb-4">3</div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Security Assurance</h4>
            <p className="text-sm text-gray-500">Explicit verification states and contextual security badges reassure users when initiating higher-value transactions.</p>
          </div>
        </div>
      </div>

      {/* Analytics & Layout Breakdown */}
      <div className="bg-indigo-950 text-white rounded-[24px] p-8 md:p-12">
        <h4 className="text-2xl md:text-3xl font-bold mb-8">Outcomes & Growth</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-t border-indigo-800 pt-6">
            <span className="block text-4xl font-extrabold text-indigo-400 mb-2">+45%</span>
            <span className="block text-sm font-semibold uppercase tracking-wider text-indigo-200">User Retention</span>
            <p className="text-xs text-indigo-100/70 mt-2">Enhanced micro-interactions keep users engaged in regular monthly budget check-ins.</p>
          </div>
          <div className="border-t border-indigo-800 pt-6">
            <span className="block text-4xl font-extrabold text-indigo-400 mb-2">99.8%</span>
            <span className="block text-sm font-semibold uppercase tracking-wider text-indigo-200">Transfer Success</span>
            <p className="text-xs text-indigo-100/70 mt-2">Errors in peer-to-peer verification flows dropped significantly during usability testing.</p>
          </div>
          <div className="border-t border-indigo-800 pt-6">
            <span className="block text-4xl font-extrabold text-indigo-400 mb-2">&lt; 3 Sec</span>
            <span className="block text-sm font-semibold uppercase tracking-wider text-indigo-200">Onboarding Time</span>
            <p className="text-xs text-indigo-100/70 mt-2">Simplified signup screens guide new users quickly into configuring their account widgets.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plover;
