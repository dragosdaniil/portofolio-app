import React from "react";

const Service = ({ children, title, description }) => {
  return (
    <article className="service">
      <header>
        <h3 className="service-logo">{children}</h3>
        <h4>{title}</h4>
        <div className="underline2"></div>
      </header>
      <p>{description}</p>
    </article>
  );
};

export default Service;
