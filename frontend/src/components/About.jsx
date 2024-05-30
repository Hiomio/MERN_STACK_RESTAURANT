import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Where every meal tells a story.</p>
            </div>
            <p className="mid">
              Welcome to our restaurant, where passion for food meets exceptional service.
              Our culinary team crafts each dish with the finest ingredients, delivering an
              unforgettable dining experience. From our cozy ambiance to our meticulously curated
              menu, every detail is designed to delight your senses. Join us for a journey of flavors
              that celebrate both tradition and innovation. Whether it's a special occasion or a casual
              meal, we promise to make every moment memorable.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
