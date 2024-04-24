import React from "react";
import "./Contact.css";
import contact from "../../assets/contact.jpg";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <img src={contact} alt="" />
        <form className="form">
          <h2>Get in touch</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
