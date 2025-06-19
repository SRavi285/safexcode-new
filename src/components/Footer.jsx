import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaEnvelope,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { MdQrCodeScanner } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F3054] text-white py-12 px-8 md:px-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg text-gray-400">Quick Links</h3>
          <ul className="mt-8 space-y-1 md:block flex gap-6 ">
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
            {/* <li>
              <NavLink to="/contact" className="hover:text-blue-400 transition">
                Contact
              </NavLink>
            </li> */}
          </ul>
        </div>
        {/*Address */}
        <div>
          <h3 className="text-lg text-gray-400">Address Details</h3>
          <p className="mt-8 font-bold text-xl">
            Carshala Services Private Limited:{" "}
          </p>
          <p>
            H.no-96, 4th Floor, Pkt-4, Sec-2, Rohini, <br /> Delhi, India -
            110085
          </p>
          <p>CIN U50404DL2022PTC395712</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg text-gray-400">Contact Us</h3>
          {/* Email & Phone */}
          <p className="mt-4 flex items-center gap-2">
            <a
              href="mailto:info@safexcode.com"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
            >
              <FaEnvelope className="text-blue-500" /> info@safexcode.com
            </a>
          </p>
          <p className="mt-2 flex items-center gap-2">
            <a
              href="tel:+919158977766"
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
            >
              <FaPhone className="text-blue-500" /> +91- 9158977766
            </a>
          </p>
          <div className="flex  gap-5 mt-4 ">
            <a
              href="https://www.facebook.com/safexcode"
              target="blank"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookSquare size={30} />
            </a>
            <a
              href="https://www.youtube.com/@SafeXcode"
              target="blank"
              className="hover:text-red-500 transition"
            >
              <FaYoutubeSquare size={30} />
            </a>
            <a
              href="https://www.instagram.com/safexcode/#"
              target="blank"
              className="hover:text-pink-500 transition"
            >
              <FaInstagramSquare size={30} />
            </a>
            <a
              href="https://www.linkedin.com/company/safexcodee"
              target="blank"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} safeXcode (Carshala Service Pvt. Ltd.)
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
