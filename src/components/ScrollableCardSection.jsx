import { useEffect, useRef, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import PostCard from "./PostCard";

const ScrollableCardSection = ({ cards }) => {
  const scrollRef = useRef(null);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(true);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = current.offsetWidth;
    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const checkShadows = () => {
    const { current } = scrollRef;
    if (!current) return;
    setShowLeftShadow(current.scrollLeft > 0);
    setShowRightShadow(
      current.scrollLeft + current.offsetWidth < current.scrollWidth
    );
  };

  useEffect(() => {
    const el = scrollRef.current;
    checkShadows();
    el?.addEventListener("scroll", checkShadows);
    return () => el?.removeEventListener("scroll", checkShadows);
  }, []);

  return (
    <div className="relative w-full">
      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory space-x-4 px-4 no-scrollbar pb-16"
      >
        {cards.map((card, index) => (
          <div key={index} className="snap-start shrink-0 w-full max-w-md">
            <PostCard {...card} />
          </div>
        ))}
      </div>

      {/* Bottom Center Buttons */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {showLeftShadow && (
          <button
            onClick={() => scroll("left")}
            className="bg-white shadow-lg rounded-full p-2"
          >
            <MdChevronLeft size={24} />
          </button>
        )}
        {showRightShadow && (
          <button
            onClick={() => scroll("right")}
            className="bg-white shadow-lg rounded-full p-2"
          >
            <MdChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ScrollableCardSection;
