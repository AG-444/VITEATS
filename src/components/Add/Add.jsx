import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import list from "../../Constanst.js";
import "./Add.css";
import StarRate from "../Star/StarRate.jsx";
import ratingVector from "../../assets/ratingVector-removebg-preview.png";
const Add = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [rating, setRating] = useState(0);
  const [ratings, setRatings] = useState([]);
  const [users, setUsers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState("");
  function handleSubmit() {
    reviews.push();
  }
  function handleReview(event) {
    setReview(event.target.value);
  }
  function handleName(event) {
    setUser(event.target.value);
  }
  function handleSubmit() {
    reviews.push(review);
    ratings.push(rating);
    users.push(user);
    localStorage.setItem(`newReviews${id}`, JSON.stringify(reviews));
    localStorage.setItem(`newRatings${id}`, JSON.stringify(ratings));
    localStorage.setItem(`newUsers${id}`, JSON.stringify(users));
  }
  useEffect(() => {
    const restuarant = list.find((l) => parseInt(id) === l.id);
    setReviews(restuarant.reviews);
    setRatings(restuarant.ratings);
    setUsers(restuarant.users);
  });
  return (
    <motion.div
      className="add"
      ref={ref}
      variants={{
        hidden: { opacity: 0.5, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
    >
      <div className="add-container">
        <img src={ratingVector} alt="" />
        <form className="form">
          <h2 style={{ marginTop: "20px" }}>Give us a rating</h2>
          <StarRate rating={rating} setRating={setRating} />
          <input type="text" placeholder="Name" onChange={handleName} />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={handleReview}
            placeholder="Message"
          ></textarea>
          <Link to={`/${parseInt(id)}`}>
            <button onClick={handleSubmit} className="btn">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </motion.div>
  );
};

export default Add;
