import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
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
  const [users, setUsers] = useState([]);
  const [image, setImage] = useState("default");
  const [tempratings, setTeampRatings] = useState([]);
  const ref1 = useRef(null);
  const inView1 = useInView(ref1, { once: true });
  const controls1 = useAnimation();
  if (inView1) {
    controls1.start("visible");
  }
  const ref2 = useRef(null);
  const inView2 = useInView(ref2, { once: true });
  const controls2 = useAnimation();
  if (inView2) {
    controls2.start("visible");
  }
  useEffect(() => {
    const restuarant = list.find((l) => parseInt(id) === l.id);
    setName(restuarant.name);
    setDescription(restuarant.description);
    const newReviews = JSON.parse(localStorage.getItem(`newReviews${id}`));
    if (newReviews) {
      setReview(newReviews.slice(-3));
    } else {
      setReview(restuarant.reviews.slice(-3));
    }
    const newUsers = JSON.parse(localStorage.getItem(`newUsers${id}`));
    if (newUsers) {
      setUsers(newUsers.slice(-3));
    } else {
      console.log("not");
      setUsers(restuarant.users.slice(-3));
    }
    const newTemp = JSON.parse(localStorage.getItem(`newRatings${id}`));
    if (newTemp) {
      setTeampRatings(newTemp.slice(-3));
    } else {
      setTeampRatings(restuarant.ratings.slice(-3));
    }
    setImage(restuarant.image);
  }, []);
  return (
    <div>
      <motion.div
        className="item"
        ref={ref1}
        variants={{
          hidden: { opacity: 0.5, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls1}
        transition={{ duration: 1 }}
      >
        <img src={image} alt="" className="restaurant" />
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <Star id={parseInt(id)} />
          <Link to={`/edit/${parseInt(id)}`}>
            <button className="btn">Add your Review</button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="reviews"
        ref={ref2}
        variants={{
          hidden: { opacity: 0.5, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls2}
        transition={{ duration: 1 }}
      >
        {review.map((r, index) => (
          <div key={index} className="card">
            <p>" {r} "</p>
            <div className="details">
              <p className="stars">{users[index]}</p>
              <StarOne num={tempratings[index]} />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Review;
