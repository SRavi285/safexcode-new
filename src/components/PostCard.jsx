import React from "react";
import cardImg from "../assets/businesspeople-meeting-office-working.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const PostCard = () => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-md w-full">
      {/* Left: Text Content */}
      <div className="bg-[#6458F0] text-white p-6 flex flex-col justify-between md:w-2/3">
        <div>
          {/* Star Ratings */}
          <div className="flex mb-3">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                icon={faStar}
                key={i}
                className="text-white mr-1"
              />
            ))}
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis odio pariatur, non cupiditate laudantium fugit modi
            quos ea magnam officiis sunt reiciendis numquam maxime velit
            veritatis suscipit magni ut sequi?
          </p>
        </div>

        {/* Author Info */}
        <div className="mt-6">
          <h2 className="text-base font-semibold">Vivek Kumar</h2>
          <p className="text-xs text-white/80">Founder, Safexcode</p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/3 h-64 md:h-auto">
        <img
          src={cardImg}
          alt="Post visual"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default PostCard;
