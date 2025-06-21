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
import mobile from "../assets/Mobile.png";
import playStore from "../assets/PlayStore.png";
import appStore from "../assets/AppStore.png";
import ScrollableCardSection from "../components/ScrollableCardSection";

const backgroundimg =
  "https://img.freepik.com/free-vector/wavy-smooth-lines-pattern-background_1017-14206.jpg?ga=GA1.1.1422311903.1750266066&semt=ais_hybrid&w=740";

const card = [
  {
    rating: 5,
    description:
      "I love how easy it is to connect with people without giving out my personal number. The QR code feature is a game changer!",
    name: "Vivek Kumar",
    role: "Business Owner",
    // cardImage: "https://via.placeholder.com/300x300",
  },
  {
    rating: 4,
    description:
      "The app is user-friendly and the QR code system is very effective. Highly recommend it!",
    name: "Sarah ",
    role: "Freelancer",
    // cardImage: "https://via.placeholder.com/300x300",
  },
  {
    rating: 4,
    description:
      "It's convenient and secure. No more unwanted calls or leaks of personal info.",
    name: "Ankit ",
    role: "Photographer",
    // cardImage: "https://via.placeholder.com/300x300",
  },
  {
    rating: 5,
    description:
      "It's convenient and secure. No more unwanted calls or leaks of personal info.",
    name: "Singh",
    role: "Photographer",
    // cardImage: "https://via.placeholder.com/300x300",
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative text-white"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20">
          <h1 className="font-bold text-4xl md:text-6xl leading-tight text-gradient">
            Safe and <br /> Secure Calling
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Connect without compromising your privacy. <br />
            Our QR code system enables secure <br />
            communication without revealing personal <br /> phone numbers.
          </p>
          <button
            onClick={() => alert("Get Started clicked")}
            className="bg-indigo-500 hover:bg-indigo-600 transition text-white font-medium py-2 px-6 rounded-xl mt-6 flex items-center gap-2 w-fit"
          >
            Get Started <MdArrowRightAlt />
          </button>
        </div>
      </div>

      {/* Features */}
      <div
        className="py-20"
        style={{
          backgroundImage: `url('${backgroundimg}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center mb-16">
          <h1 className="text-3xl font-semibold mb-4">Why Choose safeXcode</h1>
          <p className="text-gray-600">
            Our innovative QR code solution puts privacy and security first.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 px-6">
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
              className="flex flex-col items-center text-center shadow-2xl p-6 rounded-2xl max-w-sm space-y-4 bg-white"
            >
              {icon}
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-50 flex flex-col items-center py-20 px-6">
        <h1 className="text-3xl text-gray-600 font-semibold text-center mb-2">
          How It Works
        </h1>
        <p className="text-sm text-gray-600 text-center mb-10">
          Simple, transparent setup. Try any plan free for 30 days.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8">
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
                <img src={qrcodescan} alt="QR Scan" className="w-16 h-16" />
              ),
              title: "Get Connected",
              text: "Others scan your QR code to call you without seeing your number",
            },
          ].map(({ icon, title, text }, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl max-w-sm space-y-4 bg-white shadow-md"
            >
              {icon}
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="bg-black py-20 px-6 flex">
        <img
          src={mobile}
          alt="mobile"
          className="hidden md:block max-h-[500px] mb-[-80px] ml-30"
        />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 text-white">
          <div className="text-center md:text-left">
            <h4 className="text-sm mb-4 text-gradient">TRY ON MOBILE</h4>
            <h1 className="text-4xl md:text-6xl font-bold max-w-xl">
              Download our app for free
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-10">
              <a
                onClick={() => alert("App Store link is not available yet")}
                className="cursor-pointer"
              >
                <img src={appStore} alt="App Store" className="w-40" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.carshala.safexcode"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={playStore} alt="Play Store" className="w-40" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* User Reviews */}
      <div className="bg-gray-50 flex flex-col items-center py-12 px-6">
        <h2 className="text-3xl font-semibold">What our users say</h2>
        <p className="text-gray-400 text-center mb-10">
          Hear how safeXcode is making privacy a priority.
        </p>
        <ScrollableCardSection cards={card} />
      </div>
    </div>
  );
};

export default Home;
