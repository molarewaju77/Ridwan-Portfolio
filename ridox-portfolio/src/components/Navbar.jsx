import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
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
      <nav className="flex items-center justify-between md:px-[121px] px-[24px] h-[80px]">
        {/* Logo */}
        <img src={RidoxLogo} alt="Ridox Logo" className="h-8 w-auto" />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-[40px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[16px] transition-all duration-300 ${isActive
                  ? "text-black font-semibold"
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
          className="md:hidden p-2 text-black transition-transform duration-300 active:scale-90 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative w-6 h-6">
            <div
              className={`absolute inset-0 transition-all duration-500 transform ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
            >
              <Menu size={24} />
            </div>
            <div
              className={`absolute inset-0 transition-all duration-500 transform ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
            >
              <X size={24} />
            </div>
          </div>
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
