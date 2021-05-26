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
        <article className="left-side"></article>
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
