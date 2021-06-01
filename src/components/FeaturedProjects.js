import React from "react";
import Project from "./Project";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const FeaturedProjects = ({ title }) => {
  const { data } = useGlobalContext();

  const pageTitle = title || "Featured Projects";
  return (
    <section className="featured-projects">
      <header>
        <h1 className="title">{pageTitle}</h1>
        <div className="underline1"></div>
      </header>
      <div className="featured-projects-center">
        {data.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <Project
                infoSide="rightInfo"
                imgSide="leftImg"
                key={index}
                {...item}
                projectNum={index + 1}
              />
            );
          } else {
            return (
              <Project
                infoSide="leftInfo"
                imgSide="rightImg"
                key={index}
                {...item}
                projectNum={index + 1}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;
