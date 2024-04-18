import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import list from "../../Constanst.js";
import "./Add.css";
const Add = () => {
  const { id } = useParams();
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
    localStorage.setItem(`newReviews${id}`, JSON.stringify(reviews));
  }
  useEffect(() => {
    const restuarant = list.find((l) => parseInt(id) === l.id);
    setReviews(restuarant.reviews);
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
      <Link to={`/${parseInt(id)}`}>
        <button onClick={handleSubmit}></button>
      </Link>
    </div>
  );
};

export default Add;
