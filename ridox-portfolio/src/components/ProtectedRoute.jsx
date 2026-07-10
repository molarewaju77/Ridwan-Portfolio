import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const ProtectedRoute = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const unlocked = sessionStorage.getItem("case_study_unlocked");
    if (unlocked === "true") {
      setIsUnlocked(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === "ridwan@#26") {
      sessionStorage.setItem("case_study_unlocked", "true");
      setIsUnlocked(true);
      setError("");
    } else {
      setError("Incorrect passcode. Please try again.");
    }
  };

  if (!isUnlocked) {
    return (
      <div className="mt-[110px] mb-[120px] max-w-5xl mx-auto px-6 flex flex-col items-center justify-center min-h-[50vh]">
        <div className="max-w-md w-full bg-white border border-[#E5E5E5] rounded-[24px] p-8 md:p-10 shadow-sm transition-all duration-300">
          <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 bg-gray-50 border border-[#E5E5E5] rounded-full flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-[#191919]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-[24px] font-semibold text-[#191919] text-center mb-2">Protected Case Study</h2>
            <p className="text-[14px] text-[#8B8A8A] text-center">This project is password protected. Please enter the passcode to view the case study.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter Passcode"
                className="w-full px-4 py-3 bg-gray-50 border border-[#E5E5E5] rounded-xl focus:outline-none focus:border-[#191919] focus:bg-white transition-all duration-300 text-center tracking-widest text-[#191919] font-medium placeholder:tracking-normal placeholder:font-normal"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center font-medium animate-pulse">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#191919] text-white py-3 rounded-xl font-semibold hover:bg-black transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Unlock Case Study
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="text-[14px] text-[#8B8A8A] hover:text-[#191919] transition-all duration-300 inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
