import React from "react";
import full from "../../assets/star (1).png";

const StarOne = ({ num }) => {
  //   console.log(num);
  var ratingsArray = [];
  for (var i = 0; i < num; i++) {
    ratingsArray.push(1);
  }
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
    </div>
  );
};

export default StarOne;
