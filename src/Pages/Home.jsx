import React from "react";
import {
  MdArrowRightAlt,
  MdDeviceUnknown,
  MdOutlinePrivacyTip,
  MdQrCodeScanner,
} from "react-icons/md";
import heroImg from "../assets/heroimg.png";
import key from "../assets/key.png";
import qrcode from "../assets/qr-code.png";
import qrcodescan from "../assets/qr-code-scan.png";
import checkicon from "../assets/Check icon.png";
import mobile from "../assets/mobile.png";
import playStore from "../assets/PlayStore.png";
import appStore from "../assets/AppStore.png";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="backgroundImage relative"
        style={{
          backgroundImage: `url(${heroImg})`,
          height: "600px",
          color: "white",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div />
        <div className="pt-20  pl-20 flex flex-col  h-full">
          <h1 className="font-bold text-6xl  text-gradient">
            Safe and <br /> Secure Calling
          </h1>

          <p className="text-xl m-2 pt-4">
            Connect without compromising your privacy. <br />
            Our QR code system enables secure <br />
            communication without revealing personal <br /> phone numbers.
          </p>
          <button
            onClick={() => alert("Get Started clicked")}
            className="bg-indigo-500 hover:bg-indigo-600 transition text-white font-medium py-2 px-6 max-w-38 rounded-xl mt-4 flex items-center gap-2 text-center"
          >
            Get Started <MdArrowRightAlt />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-20 mt-24">
        <div className="text-center mb-20">
          <h1 className="text-3xl font-semibold mt-10 mb-4">
            Why Choose safeXcode
          </h1>
          <p className="text-gray-500">
            Our innovative QR code solution puts privacy and security first.
          </p>
        </div>
        <div className="flex flex-wrap mt-10 justify-center gap-6">
          {[
            {
              icon: <MdOutlinePrivacyTip color="#7F56D9" size={40} />,
              title: "Privacy Protection",
              text: "Connect without revealing your personal phone number",
            },
            {
              icon: <MdQrCodeScanner color="#7F56D9" size={40} />,
              title: "Easy QR Scanning",
              text: "Simple scan-to-call technology for instant connections",
            },
            {
              icon: <MdDeviceUnknown color="#7F56D9" size={40} />,
              title: "Anonymous Calling",
              text: "Communication with complete anonymity and peace of mind",
            },
          ].map(({ icon, title, text }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center shadow-2xl p-6 rounded-2xl max-w-sm space-y-2"
            >
              {icon}
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-gray-50 flex flex-col items-center py-10">
        <h1 className="text-3xl text-gray-600 font-semibold text-center mb-1">
          How It Works
        </h1>
        <p className="text-sm text-gray-600  text-center mb-10">
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days.
        </p>
        <div className="flex flex-col items-center gap-6 md:gap-10 md:flex-row md:justify-center mt-10">
          {[
            {
              icon: <img src={key} alt="QR Code" className="w-16 h-16" />,
              title: "Sign Up & Generate QR",
              text: "Create an account and receive your unique QR code",
            },
            {
              icon: <img src={qrcode} alt="QR Code" className="w-16 h-16" />,
              title: "Place Your QR Code",
              text: "Display your QR code on vehicles, bags, bottles, or doors",
            },
            {
              icon: (
                <img src={qrcodescan} alt="QR Code" className="w-16 h-16" />
              ),
              title: "Get Connected",
              text: "Others scan your QR code to call you without seeing your number",
            },
          ].map(({ icon, title, text }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl max-w-sm space-y-4"
            >
              {icon}
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Plans Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-center gap-8  ">
          {/* Description Section */}
          <div className="flex flex-col   max-w-sm space-y-4">
            <h2 className="text-3xl font-semibold ">
              Subscription Plans for all sizes
            </h2>
            <p className="text-gray-500 ">
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </p>
          </div>

          {/* Plan 1 (Most Popular) */}
          <div className="flex flex-col items-center shadow-2xl p-8 rounded-2xl max-w-sm space-y-2 border-2 border-amber-600 bg-white relative">
            <div className="absolute -top-4 bg-amber-600 text-white py-1 px-4 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <h2 className="text-md font-semibold text-[#6941C6] mt-2">
              Standard Plan
            </h2>
            <h3 className="text-3xl font-semibold">₹299</h3>
            <p className="text-gray-500">6 months</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2 items-center">
                <img src={checkicon} alt="check" /> 1 QR Code
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkicon} alt="check" /> Basic call forwarding
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkicon} alt="check" /> 24/7 phone support
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkicon} alt="check" /> Priority email support
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkicon} alt="check" /> Call statistics
              </li>
            </ul>
            <button className="bg-[#6458F0] hover:bg-[#7871bd] transition text-white font-bold py-2 px-4 rounded-sm w-full">
              Choose Plan
            </button>
          </div>

          {/* Plan 2 */}
          <div className="flex flex-col items-center shadow-2xl p-8 rounded-2xl max-w-sm space-y-2 bg-white border-2 border-gray-200">
            <h2 className="text-md font-semibold">Enterprise Plan</h2>
            <h3 className="text-2xl font-semibold">₹999</h3>
            <p className="text-gray-500">12 months</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2 items-center">
                <img src={checkicon} alt="check" /> Advanced custom fields
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkicon} alt="check" /> Audit log and data history
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkicon} alt="check" /> Unlimited individual users
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkicon} alt="check" /> Unlimited individual data
              </li>
              <li className="flex gap-2 items-center">
                <img src={checkicon} alt="check" /> Personalized + priority
                service
              </li>
            </ul>
            <button className="bg-[#6458F0] hover:bg-[#7871bd] transition text-white font-bold py-2 px-4 rounded-sm w-full">
              Choose Plan
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black pt-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-20 text-white justify-between md:mr-40 md:ml-40">
          <img src={mobile} alt="mobile" className="h-90 md:block hidden" />
          <div className="mb-5">
            <h4 className="text-gradient text-sm mb-10">TRY ON MOBILE</h4>
            <h1 className="text-6xl max-w-100  text-white">
              Download our app for free
            </h1>
            <div className="flex flex-col md:flex-row gap-4 mt-20 ">
              <a
                href="https://play.google.com/store/apps/details?id=com.safexcode.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={appStore} alt="appstore" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.safexcode.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={playStore} alt="playstore" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
