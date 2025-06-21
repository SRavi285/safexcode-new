import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo-color.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact", path: "/contact" },
  ];

  const mobileNavItems = [...navItems, { label: "Profile", path: "/profile" }];

  return (
    <header className="w-full">
      {/* Main Navigation */}
      <div className="bg-white shadow-md flex items-center px-4 md:px-8 py-3">
        {/* Mobile Menu Button */}
        <div className="md:hidden mr-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Company Logo" className="w-32 md:w-48" />
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex gap-6 text-lg font-medium mr-auto ml-14"
          role="navigation"
          aria-label="Main Navigation"
        >
          {navItems.map(({ label, path }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold"
                  : "hover:text-blue-600 transition"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Sign In (visible on all screens) */}
        <div className="ml-auto md:flex">
          <button
            onClick={() => navigate("/sign-in")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`md:hidden bg-white transition-all duration-300 ease-in-out overflow-hidden text-base font-medium px-4 ${
          menuOpen ? "max-h-96 py-2 border-t" : "max-h-0 py-0"
        }`}
        role="navigation"
        aria-label="Mobile Navigation"
      >
        {mobileNavItems.map(({ label, path }, index) => (
          <li key={index} className="py-2 border-b">
            <NavLink
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}

        {/* Sign In button for mobile */}
        {/* <li className="py-2">
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/sign-in");
            }}
            className="w-full bg-blue-600 text-white py-2 rounded-md mt-2 hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </li> */}
      </ul>
    </header>
  );
};

export default Header;
