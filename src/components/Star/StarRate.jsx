import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRate.css";
const StarRate = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);
  const temp = [0, 0, 0, 0, 0];
  return (
    <div>
      {temp.map((star, idx) => {
        const curr = idx + 1;
        return (
          <label key={idx}>
            <input
              type="radio"
              name="rating"
              value={curr}
              className="radio"
              onClick={() => setRating(curr)}
            />
            <FaStar
              className="star"
              size={25}
              color={curr <= (hover || rating) ? "rgb(99, 33, 6)" : "grey"}
              onMouseEnter={() => setHover(curr)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRate;
