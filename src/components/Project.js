import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Project = ({
  infoSide,
  imgSide,
  image,
  description,
  title,
  tags,
  projectNum,
  gitLink,
  projectLink,
}) => {
  return (
    <article className="project">
      <div className="project-center">
        <div className={`img-container ${imgSide}`}>
          <img src={image} alt="" />
          <div className="img-overlay"></div>
        </div>
        <div className={`project-info ${infoSide}`}>
          <h3>{`${projectNum}. ${title}`}</h3>
          <p>{description}</p>
          <div className="tag-list">
            {tags.map((tag, index) => {
              return (
                <h5 className="tag" key={index}>
                  {tag}
                </h5>
              );
            })}
          </div>
          <div className="button-container">
            <a href={gitLink}>
              <FaGithub />
            </a>
            <a href={projectLink}>
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
