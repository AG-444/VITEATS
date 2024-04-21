import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRate.css";
const StarRate = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              className="star"
              size={50}
              color={currentRating <= (hover || rating) ? "yellow" : "grey"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRate;
