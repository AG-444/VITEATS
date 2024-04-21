import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const StarRate = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <Rating
        name="half-rating"
        defaultValue={2.5}
        precision={0.5}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};

export default StarRate;
