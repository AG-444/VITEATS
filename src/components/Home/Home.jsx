import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Home.css";
import { motion, useInView, useAnimation } from "framer-motion";
import oneworld from "../../assets/oneworld.jpg";
import dc from "../../assets/dc.jpg";
import fc from "../../assets/fc.jpg";
import Star from "../Star/Star";

const Home = () => {
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
          </div>

          <div class="box">
            <i class="bx bxs-star-half"></i>
            <h3>Star Ratings</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
          </div>

          <div class="box">
            <i class="bx bx-edit"></i>
            <h3>Write Reviews</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                expedita.
              </p>
            </div>
          </div>
          <div class="box">
            <img class="picture" src={fc} alt="F.C." />
            <Star id={1} />

            <div class="content">
              <h3>F.C.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                expedita.
              </p>
            </div>
          </div>
          <div class="box">
            <img class="picture" src={dc} alt="D.C. Bakery" />
            <Star id={1} />

            <div class="content">
              <h3>D.C. Bakery</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                expedita.
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
            <img class="picture" src={oneworld} alt="One Food World" />
            <Star id={1} />

            <div class="content">
              <h3>One Food World</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                expedita.
              </p>
            </div>
          </div>
          <div class="box">
            <img class="picture" src={fc} alt="One Food World" />
            <Star id={1} />

            <div class="content">
              <h3>F.C.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                expedita.
              </p>
            </div>
          </div>
          <div class="box">
            <img class="picture" src={dc} alt="One Food World" />
            <Star id={1} />

            <div class="content">
              <h3>D.C. Bakery</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                expedita.
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
