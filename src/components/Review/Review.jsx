import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Star from "../Star/Star.jsx";
import list from "../../Constanst.js";
import "./Review.css";
import StarOne from "../Star/StarOne.jsx";
const Review = () => {
  const { id } = useParams();
  const [name, setName] = useState("default");
  const [description, setDescription] = useState("default");
  const [review, setReview] = useState([]);
  const [image, setImage] = useState("default");
  var st = 0;
  const [tempratings, setTeampRatings] = useState([]);
  useEffect(() => {
    const restuarant = list.find((l) => parseInt(id) === l.id);
    setName(restuarant.name);
    setDescription(restuarant.description);
    const newReviews = JSON.parse(localStorage.getItem(`newReviews${id}`));
    if (newReviews) {
      setReview(newReviews);
    } else {
      setReview(restuarant.reviews);
    }
    const newTemp = JSON.parse(localStorage.getItem(`newRatings${id}`));
    if (newTemp) {
      setTeampRatings(newTemp);
      // console.log("fuck");
    } else {
      setTeampRatings(restuarant.ratings);
    }
    console.log(tempratings.length);
    console.log(review[3]);
    setImage(restuarant.image);
  }, []);
  return (
    <div>
      <div className="item">
        <img src={image} alt="" />
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <Star id={parseInt(id)} />
          <Link to={`/edit/${parseInt(id)}`}>
            <button>Add your Review</button>
          </Link>
        </div>
      </div>
      <div className="reviews">
        {review.map((r, index) => (
          <div key={index}>
            <StarOne num={tempratings[index]} />
            <p className="review">{r}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
