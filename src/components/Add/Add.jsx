import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import list from "../../Constanst.js";
import "./Add.css";
import StarRate from "../Star/StarRate.jsx";
const Add = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");
  function handleSubmit() {
    reviews.push();
  }
  function handleChange(event) {
    setReview(event.target.value);
  }
  function handleSubmit() {
    reviews.push(review);
    ratings.push(rating);
    localStorage.setItem(`newReviews${id}`, JSON.stringify(reviews));
    localStorage.setItem(`newRatings${id}`, JSON.stringify(ratings));
  }
  useEffect(() => {
    const restuarant = list.find((l) => parseInt(id) === l.id);
    setReviews(restuarant.reviews);
    setRatings(restuarant.ratings);
  });
  return (
    <div className="add">
      <h1>Add your Review</h1>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        onChange={handleChange}
      ></textarea>
      <StarRate rating={rating} setRating={setRating} />
      <Link to={`/${parseInt(id)}`}>
        <button onClick={handleSubmit}>Submit</button>
      </Link>
    </div>
  );
};

export default Add;
