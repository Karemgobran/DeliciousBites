import React from "react";
import "./Review.scss";
import ReviewCard from "../ReviewCard/ReviewCard";
import reviewData from "../../data/reviews";
function Review() {
  return (
    <section className="review">
      <div className="title mb-5">
        <h2>
          <span>What Our </span>Customers Say
        </h2>
      </div>
      <div className="review-container rowx gap-1 mt-4 gap-3">
        {reviewData.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
}

export default Review;
