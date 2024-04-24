import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h1 className="heading">Our Team</h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nihil
        minima iure quisquam recusandae est quia facilis numquam necessitatibus
        voluptate?
      </p>
      <div className="team-container">
        <div className="member">
          <img src="https://picsum.photos/250/220" alt="" />
          <h2>Nipun S Nair</h2>
          <h3>Web Developer</h3>
        </div>
        <div className="member">
          <img src="https://picsum.photos/250/220" alt="" />
          <h2>Anagha R Warrier</h2>
          <h3>Web Developer</h3>
        </div>
        <div className="member">
          <img src="https://picsum.photos/250/220" alt="" />
          <h2>Aditya Agarwal</h2>
          <h3>Web Developer</h3>
        </div>
        <div className="member">
          <img src="https://picsum.photos/250/220" alt="" />
          <h2>Aditya Garg</h2>
          <h3>Web Developer</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
