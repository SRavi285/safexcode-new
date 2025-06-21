import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaEnvelope,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F3054] text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg text-gray-300 font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-blue-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms-&-conditions"
                className="hover:text-blue-400 transition"
              >
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy-policy"
                className="hover:text-blue-400 transition"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className="hover:text-blue-400 transition"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="text-center md:text-left">
          <h3 className="text-lg text-gray-300 font-semibold mb-4">
            Address Details
          </h3>
          <p className="font-bold text-lg">Carshala Services Private Limited:</p>
          <p className="mt-2 text-gray-200">
            H.no-96, 4th Floor, Pkt-4, Sec-2, Rohini, <br />
            Delhi, India - 110085
          </p>
          <p className="text-gray-400 mt-1">CIN U50404DL2022PTC395712</p>
        </div>

        {/* Contact & Social */}
        <div className="text-center md:text-left">
          <h3 className="text-lg text-gray-300 font-semibold mb-4">
            Contact Us
          </h3>

          <p className="flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-blue-400 transition">
            <FaEnvelope className="text-blue-500" />
            <a href="mailto:info@safexcode.com">info@safexcode.com</a>
          </p>
          <p className="mt-2 flex justify-center md:justify-start items-center gap-2 text-gray-400 hover:text-blue-400 transition">
            <FaPhone className="text-blue-500" />
            <a href="tel:+919158977766">+91-9158977766</a>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-4">
            <a
              href="https://www.facebook.com/safexcode"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookSquare size={28} />
            </a>
            <a
              href="https://www.youtube.com/@SafeXcode"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaYoutubeSquare size={28} />
            </a>
            <a
              href="https://www.instagram.com/safexcode/#"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagramSquare size={28} />
            </a>
            <a
              href="https://www.linkedin.com/company/safexcodee"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} safeXcode (Carshala Services Pvt. Ltd.)
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
