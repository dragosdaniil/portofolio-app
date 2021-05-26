import React from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import { Link } from "react-router-dom";

const AllProjects = () => {
  return (
    <main className="page">
      <FeaturedProjects title="All Projects" />
      {/* <Link to="/">
        <button className="projects-btn btn">home</button>
      </Link> */}
    </main>
  );
};

export default AllProjects;
