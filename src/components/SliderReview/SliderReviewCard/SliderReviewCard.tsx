import React from "react";
import { Review } from "../SliderReview";

interface SliderReviewCardProps {
  review: Review;
}

export const SliderReviewCard: React.FC<SliderReviewCardProps> = ({
  review,
}) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <img src={review.avatar} alt={review.name} className="avatar" />
        <h3 className="review_name">{review.name}</h3>
        <p>{review.location}</p>
      </div>
      <p className="text">{review.text}</p>
    </div>
  );
};
