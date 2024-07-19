import React from "react";

interface SliderDotsProps {
  numOfDots: number;
  currentIndex: number;
  goToSlide: (index: number) => void;
}

export const SliderDots: React.FC<SliderDotsProps> = ({
  numOfDots,
  currentIndex,
  goToSlide,
}) => {
  return (
    <div className="dots">
      {Array.from({ length: numOfDots }).map((_, index) => (
        <span
          key={index}
          className={`dot ${index === currentIndex ? "active" : ""}`}
          onClick={() => goToSlide(index)}
        ></span>
      ))}
    </div>
  );
};
