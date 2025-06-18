import React from "react";
import heroImg from "../assets/about-us-information-service-sharing-join-concept.jpg";
import sideimg from "../assets/businesspeople-meeting-office-working.jpg";
import profileImage from "../assets/profile.png";
import { IoMdBulb } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="flex items-center justify-center text-white h-[450px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        {/* <h1 className="text-4xl md:text-6xl font-bold text-center bg-black bg-opacity-40 px-6 py-3 rounded-lg">
          About Us
        </h1> */}
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-5">
              SafeXCode was founded in 2024 with a simple mission: to help
              people connect safely without compromising their privacy. In
              today's digital world, protecting personal information has become
              increasingly challenging, yet staying connected is more important
              than ever.
            </p>
            <p className="text-lg text-gray-600 mb-5">
              Our team of security experts and privacy advocates came together
              to create an innovative solution using QR code technology that
              allows people to share contact methods without revealing their
              actual phone numbers.
            </p>
            <p className="text-lg text-gray-600">
              What started as a small idea has grown into a comprehensive
              privacy solution that serves thousands of users across multiple
              industries. We continue to innovate and expand our services while
              maintaining our core commitment to user privacy and security.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 md:block hidden">
            <img
              src={sideimg}
              className="w-full max-w-lg mx-auto md:mx-0 rounded-lg shadow-lg"
              alt="About SafeXCode"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex flex-wrap mt-10 justify-center gap-6">
        {[
          {
            image: profileImage,
            name: "Vivek Kumar Yadav",
            position: "Founder & CEO",
            text: "Business Coach with over 8 years of experience in product building",
          },
          {
            image: profileImage,
            name: "Sahil Verma",
            position: "Co-Founder & CBO",
            text: "Privacy advocate and former legal counsel specializing in data protection regulations.",
          },
          {
            image: profileImage,
            name: "Ajay Kumar",
            position: "Co-Founder & CTO",
            text: "Telecommunication specialist and software architect with a passion for secure communication.",
          },
        ].map(({ image, name, position, text }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center shadow-xl p-6 rounded-2xl max-w-sm mx-auto space-y-4 bg-white"
          >
            <img
              src={image}
              alt="{name}"
              className="w-28 h-28 rounded-full shadow-md"
            />
            <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
            <h4 className="text-lg font-medium text-blue-600">{position}</h4>
            <p className="text-gray-600">{text}</p>
          </div>
        ))}
      </div>

      {/* our mission & vision */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission Card */}
          <div className="bg-blue-700 text-white p-8 rounded-xl flex flex-col items-center text-center min-h-[250px] shadow-lg">
            <IoMdBulb size={48} className="mb-4" />
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-lg mt-3">
              To provide innovative privacy solutions that enable secure
              communication in an increasingly connected world, empowering
              individuals and businesses to protect their personal information
              while staying accessible.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-orange-600 text-white p-8 rounded-xl flex flex-col items-center text-center min-h-[250px] shadow-lg">
            <MdOutlineRemoveRedEye size={48} className="mb-4" />
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="text-lg mt-3">
              A world where communication is both seamless and secure, where
              people can connect without compromising their privacy, and where
              technology enhances safety in everyday interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
