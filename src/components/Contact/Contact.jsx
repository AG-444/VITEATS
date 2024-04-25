import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Contact.css";
import contact from "../../assets/contact.jpg";
const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  return (
    <motion.div
      className="contact"
      ref={ref}
      variants={{
        hidden: { opacity: 0.5, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
    >
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
    </motion.div>
  );
};

export default Contact;
