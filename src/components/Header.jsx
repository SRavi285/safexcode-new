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
      <div className="bg-white shadow-md flex justify-between items-center">
        <div className="flex items-center py-0 px-4 md:px-8 gap-6 ">
          {/* Logo */}
          <div>
            <img src={logo} alt="Company Logo" className="w-32 md:w-48 m-2" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-lg font-medium" role="navigation" aria-label="Main Navigation">
            {navItems.map(({ label, path }, index) => (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden ml-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div> */}
        </div>

        {/* Sign In Button */}
        <div className="hidden md:flex items-center gap-4 mr-8">
          <button
            onClick={() => navigate("/sign-in")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
        } md:hidden bg-white shadow-md text-lg font-medium`}
        role="navigation"
        aria-label="Mobile Navigation"
      >
        {mobileNavItems.map(({ label, path }, index) => (
          <li
            key={index}
            className="p-2 border-b w-full rounded-2xl shadow-sm"
          >
            <NavLink
              to={path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"
              }
            >
              <p>{label}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
