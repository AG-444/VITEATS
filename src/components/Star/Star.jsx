import React from "react";
import full from "../../assets/star (1).png";
import half from "../../assets/rating.png";
import list from "../../Constanst";

const Star = ({ id }) => {
  const restaurant = list.find((l) => id === l.id);
  const ratings = restaurant.ratings;
  var sum = 0;
  for (var i = 0; i < ratings.length; i++) {
    sum += ratings[i];
  }
  sum = sum / ratings.length;
  if (Math.floor(sum) <= sum - 0.5) {
    sum = Math.ceil(sum);
  } else {
    sum = Math.floor(sum);
  }
  var fullStars = Math.floor(sum);
  var ratingsArray = [];
  for (var i = 0; i < fullStars; i++) {
    ratingsArray.push(1);
  }
  var halfStars = Math.ceil(sum - Math.floor(sum));
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {ratingsArray.map(function () {
        return <img style={{ height: "15px" }} src={full} alt="" />;
      })}
      {halfStars ? <img style={{ height: "15px" }} src={half} alt="" /> : null}
    </div>
  );
};

export default Star;
