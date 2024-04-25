import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Home.css";
import { motion, useInView, useAnimation } from "framer-motion";
import oneworld from "../../assets/oneworld.jpg";
import dc from "../../assets/dc.jpg";
import fc from "../../assets/fc.jpg";
import pizza from "../../assets/pizzaHut.jpg";
import zaitoon from "../../assets/Zaitoon.jpg";
import mcds from "../../assets/mcds.jpg";
import Star from "../Star/Star";

const Home = () => {
  // useEffect(() => {
  //   localStorage.clear();
  // });
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const featRef = useRef(null);
  const insideRef = useRef(null);
  const outsideRef = useRef(null);
  const h1Ref = useRef(null);
  const inView = useInView(featRef, { once: true });
  if (inView) {
    controls.start("visible");
  }
  const inView2 = useInView(insideRef, { once: true });
  if (inView2) {
    controls2.start("visible");
  }
  const inView3 = useInView(outsideRef, { once: true });
  if (inView3) {
    controls3.start("visible");
  }
  const inView4 = useInView(h1Ref, { once: true });
  if (inView4) {
    controls4.start("visible");
  }
  return (
    <div>
      <div class="main_img" id="home">
        <motion.h1
          ref={h1Ref}
          variants={{
            hidden: { opacity: 0.5, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={controls4}
          transition={{ duration: 1 }}
        >
          Find Taste
          <br />
          Near you
        </motion.h1>
      </div>
      <motion.section
        class="features"
        id="features"
        ref={featRef}
        variants={{
          hidden: { opacity: 0.5, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
      >
        <h1 class="heading" id="features-heading">
          Features
        </h1>
        <div class="box-container">
          <div class="box">
            <i class="bx bx-buildings"></i>
            <h3>Restaurants Nearby</h3>
            <p>
              Find the best restaurants inside and nearby VIT,Vellore that
              matches what you crave!
            </p>
          </div>

          <div class="box">
            <i class="bx bxs-star-half"></i>
            <h3>Star Ratings</h3>
            <p>
              View the ratings and feedback of every restaurant and find the
              best one!
            </p>
          </div>

          <div class="box">
            <i class="bx bx-edit"></i>
            <h3>Write Reviews</h3>
            <p>
              Write your own review and give your rating for each restaurant!
            </p>
          </div>
        </div>
      </motion.section>
      <motion.section
        class="rest_pics"
        id="inside"
        ref={insideRef}
        variants={{
          hidden: { opacity: 0.5, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls2}
        transition={{ duration: 1 }}
      >
        <h1 class="heading fade-in">
          {" "}
          Inside<span>VIT</span>
        </h1>
        <div class="box-container">
          <div class="box">
            <img class="picture" src={oneworld} alt="One Food World" />
            <Star id={1} />
            <div class="content">
              <h3>One Food World</h3>
              <p>
                "Indulge in quick bites and coffee blends at our vibrant café,
                perfect for casual dining."
              </p>
            </div>
          </div>
          <div class="box">
            <img class="picture" src={fc} alt="F.C." />
            <Star id={2} />

            <div class="content">
              <h3>Food Court</h3>
              <p>
                "Campus eatery offering quick bites and coffee for students,
                fostering a vibrant atmosphere for socializing."
              </p>
            </div>
          </div>
          <div class="box">
            <img class="picture" src={dc} alt="D.C. Bakery" />
            <Star id={3} />

            <div class="content">
              <h3>DC Bakery</h3>
              <p>
                "Freshly baked goods in a cozy setting, offering delightful
                treats and aromatic coffee for patrons."
              </p>
            </div>
          </div>
        </div>
        <div class="btn-container">
          {/* Use Link component to redirect to Explore page */}
          <Link to="/list">
            <button class="btn">See More</button>
          </Link>
        </div>
      </motion.section>
      <motion.section
        class="rest_pics"
        id="outside"
        ref={outsideRef}
        variants={{
          hidden: { opacity: 0.5, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={controls3}
        transition={{ duration: 1 }}
      >
        <h1 class="heading fade-in">
          {" "}
          Outside<span>VIT</span>
        </h1>
        <div class="box-container">
          <div class="box">
            <img class="picture" src={pizza} alt="One Food World" />
            <Star id={9} />

            <div class="content">
              <h3>Pizza Hut</h3>
              <p>
                "Fresh dough, cheesy toppings, crispy crusts, casual setting, a
                go-to for satisfying pizza cravings near college."
              </p>
            </div>
          </div>
          <div class="box">
            <img class="picture" src={zaitoon} alt="One Food World" />
            <Star id={8} />

            <div class="content">
              <h3>Zaitoon</h3>
              <p>
                "Gourmet cuisine, impeccable service, elegant ambiance, ideal
                for special occasions or refined dining experiences."
              </p>
            </div>
          </div>
          <div class="box">
            <img class="picture" src={mcds} alt="One Food World" />
            <Star id={10} />

            <div class="content">
              <h3>McDonald's</h3>
              <p>
                "Iconic burgers, crispy fries, quick service, bustling
                atmosphere, a convenient spot for college munchies."
              </p>
            </div>
          </div>
        </div>
        <div class="btn-container">
          {/* Use Link component to redirect to Explore page */}
          <Link to="/list">
            <button class="btn">See More</button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
