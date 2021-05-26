import React from "react";

const Project = ({ infoSide, imgSide }) => {
  return (
    <article className="project">
      <div className="project-center">
        <div className={`img-container ${imgSide}`}>
          <img src="" alt="" />
          <div className="img-overlay"></div>
        </div>
        <div className={`project-info ${infoSide}`}></div>
      </div>
    </article>
  );
};

export default Project;
