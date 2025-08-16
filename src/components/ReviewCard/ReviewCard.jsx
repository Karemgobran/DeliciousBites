import React from "react";

function ReviewCard({ review }) {
  return (
    <div className="review-card col-12 col-md-6 col-lg-4">
      <p>{review.comment}</p>
      <div className="person">
        <div className="image">
          <img src={review.image} alt="" />
        </div>
        <div className="data">
          <span>{review.person.name}</span>
          <p>{review.person.job}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
