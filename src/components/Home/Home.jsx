import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import oneworld from "../../assets/oneworld.jpg";
import dc from "../../assets/dc.jpg";
import fc from "../../assets/fc.jpg";
import Star from "../Star/Star";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
      <div class="main_img" id="home">
        <h1>
          Find Taste
          <br /> Near you
        </h1>
      </div>
      <section class="features" id="features">
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
      </section>
      <section class="rest_pics" id="inside">
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
          <button class="btn">See More</button>
        </div>
      </section>
      <section class="rest_pics" id="outside">
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
          <button class="btn">See More</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
