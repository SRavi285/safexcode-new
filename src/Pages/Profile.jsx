import React, { useState } from "react";
import profileimg from "../assets/profile.png";
import { MdEdit } from "react-icons/md";

const Profile = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "Vivek",
    lastName: "Yadav",
    mobile: "8563856382",
    email: "vivekydblp@gmail.com",
    address: "Balrampur",
    state: "",
    district: "",
    postalCode: "110085",
    vehicleCode: "000001",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(profileimg);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle profile image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Logout Function (Customize as needed)
  const handleLogout = () => {
    alert("Logged out successfully!");
    // Add your logout logic here (e.g., clear local storage, redirect, etc.)
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      {/* Profile Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Profile</h1>
          <p className="text-gray-600">Update Information</p>
        </div>
        <div className="relative">
          <img
            src={profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />
          {isEditing && (
            <label className="absolute bottom-0 right-0 bg-gray-900 text-white p-2 rounded-full cursor-pointer">
              <MdEdit size={18} />
              <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            </label>
          )}
        </div>
      </div>

      {/* Profile Form */}
      <div className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button className="bg-blue-600 text-white px-2 rounded-md">Verify Email</button>

        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />

        <div className="flex space-x-4">
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Select State</option>
            <option value="Delhi">Delhi (DL)</option>
            <option value="UP">UP</option>
            <option value="MP">MP</option>
            <option value="UK">UK</option>
            <option value="Punjab">Punjab</option>
          </select>

          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Select District</option>
            <option value="South Delhi">South Delhi</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Indore">Indore</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Noida">Noida</option>
          </select>
        </div>

        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />

        <input
          type="text"
          name="vehicleCode"
          value={formData.vehicleCode}
          onChange={handleChange}
          disabled={!isEditing}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Edit / Save & Logout Buttons */}
      <div className="mt-4 space-y-2">
        <button
          onClick={toggleEdit}
          className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={handleLogout}
          className="w-full p-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
