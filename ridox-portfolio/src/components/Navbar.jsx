import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import RidoxLogo from "../assets/RidoxLogo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    // { name: "Home", path: "/" },
    { name: "Work", path: "/" },
    { name: "About", path: "/about" },
    // { name: "Resume", path: "/resume" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-in-out ${isScrolled || isOpen
        ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-2xl shadow-black/5"
        : "bg-transparent py-2"
        }`}
    >
      <nav className="flex items-center justify-between md:px-[121px] px-[24px] h-[60px]">
        {/* Logo */}
        <Link to="/">
          <img src={RidoxLogo} alt="Ridox Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-[40px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[16px] transition-all duration-300 ${isActive
                  ? "text-black"
                  : "text-[#8B8A8A] hover:text-black"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-black transition-transform duration-300 active:scale-95 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-[#191919] transform rotate-90 transition-transform duration-300"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-[#191919] transition-transform duration-300"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="20" y2="12" />
              <line x1="12" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "max-h-[450px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col items-start px-[24px] gap-6 pb-12 pt-4 bg-white/90 backdrop-blur-xl">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${index * 70}ms` : "0ms" }}
              className={({ isActive }) =>
                `text-[16px] transition-all duration-500 transform ${isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
                } ${isActive ? "text-black" : "text-[#8B8A8A]"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
