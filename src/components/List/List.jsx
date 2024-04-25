import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import "./List.css";
import Star from "../Star/Star.jsx";
import list from "../../Constanst.js";
const List = () => {
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  return (
    <motion.div
      className="search"
      ref={ref}
      variants={{
        hidden: { opacity: 0.5, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
    >
      <div className="search-bar">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
      </div>
      {list
        .filter((l) => {
          return search === "" ? l : l.name.includes(search);
        })
        .map((l) => (
          <div key={l.id} className="item">
            <img src={l.image} alt="" className="restaurant" />
            <div>
              <h2>{l.name}</h2>
              <p>{l.description}</p>
              <Star id={l.id} />
              <Link to={`/${l.id}`}>
                <button className="btn">Visit</button>
              </Link>
            </div>
          </div>
        ))}
    </motion.div>
  );
};

export default List;
