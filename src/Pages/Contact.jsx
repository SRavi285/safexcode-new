import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required.");
      return;
    }

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send email:", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="m-5">
      <ToastContainer />
      <h2 className="text-3xl font-semibold mb-10">Contact Us</h2>
      <p className="text-lg text-gray-400 mb-10">
        We're here to help with any questions about our service, subscription
        plans, or technical support. Get in touch with our friendly team.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-16">
        {/* Contact Information */}
        <div>
          <div>
            {[
              {
                icon: <MdEmail size={26} />,
                name: "Email Us",
                value: "info@safeXcode.com",
                text: "We typically respond within 24 hours.",
              },
              {
                icon: <MdPhone size={26} />,
                name: "Call Us",
                value: "+91-9158977766",
                text: "Available 9 AM - 6 PM IST.",
              },
              {
                icon: <MdLocationPin size={26} />,
                name: "Visit Us",
                value:
                  "H. no-96, 4th Floor, Pkt-4, Sec-2, Rohini, Delhi, India - 110085",
                text: "Our office is open from Mon-Fri, 10 AM - 5 PM.",
              },
            ].map(({ icon, name, value, text }, index) => (
              <div key={index} className="flex items-center gap-6 mb-10">
                <div className="p-2 text-blue-500 bg-blue-200 rounded-md">
                  {icon}
                </div>
                <div>
                  <strong className="text-xl text-gray-900">{name}</strong>
                  <p className="text-lg text-gray-800">{value}</p>
                  <p className="text-gray-500">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold">Connect With Us</h3>
            <div className="flex gap-5 mt-4">
              {[
                {
                  link: "https://www.facebook.com/safexcode",
                  icon: <FaFacebookSquare size={18} />,
                  label: "Facebook",
                },
                {
                  link: "https://www.youtube.com/@SafeXcode",
                  icon: <FaYoutube size={18} />,
                  label: "YouTube",
                },
                {
                  link: "https://www.instagram.com/safexcode/#",
                  icon: <FaInstagram size={18} />,
                  label: "Instagram",
                },
                {
                  link: "https://www.linkedin.com/company/safexcodee",
                  icon: <FaLinkedin size={18} />,
                  label: "LinkedIn",
                },
              ].map(({ link, icon, label }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 text-white bg-blue-500 rounded-full hover:bg-blue-700 transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="shadow-lg p-6 w-full md:w-1/2 bg-white rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
