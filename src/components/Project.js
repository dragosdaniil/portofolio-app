import React from "react";

const Project = ({ infoSide, imgSide, image, description, title, tags }) => {
  return (
    <article className="project">
      <div className="project-center">
        <div className={`img-container ${imgSide}`}>
          <img src={image} alt="image" />
          <div className="img-overlay"></div>
        </div>
        <div className={`project-info ${infoSide}`}>
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="tag-list">
            {tags.map((tag, index) => {
              return <p className="tag">{tag}</p>;
            })}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
