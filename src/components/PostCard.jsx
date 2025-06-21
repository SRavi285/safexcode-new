import React from "react";
import cardImg from "../assets/businesspeople-meeting-office-working.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const PostCard = ({ rating, description, name, role, cardImage }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-md w-full">
      <div className="bg-[#6458F0] text-white p-6 flex flex-col justify-between md:w-2/3">
        <div>
          <div className="flex mb-3">
            {[...Array(rating)].map((_, i) => (
              <FontAwesomeIcon icon={faStar} key={i} className="mr-1" />
            ))}
          </div>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-base font-semibold">{name}</h2>
          <p className="text-xs text-white/80">{role}</p>
        </div>
      </div>
      <div className="md:w-1/3 h-64 md:h-auto">
        <img
          src={cardImage || cardImg}
          alt="Post visual"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default PostCard;
