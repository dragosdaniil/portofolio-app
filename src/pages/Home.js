import React from "react";
import Services from "../components/Services";
import FeaturedProjects from "../components/FeaturedProjects";
import { Link } from "react-router-dom";
const hero = require("../images/hero.svg");

const Home = () => {
  return (
    <main className="page">
      <section className="main-page">
        <img src={hero.default} alt="hero" className="hero-svg" />
        <article className="left-side">
          <div className="left-side-center">
            <h1>I'm Dragos</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
              veritatis!
            </p>
            <Link to="/contact">
              <button className="contact-btn btn">contact me</button>
            </Link>
          </div>
        </article>
        <article className="right-side"></article>
      </section>
      <Services />
      <FeaturedProjects />
      <Link to="/allprojects">
        <button className="projects-btn btn">projects</button>
      </Link>
    </main>
  );
};

export default Home;
