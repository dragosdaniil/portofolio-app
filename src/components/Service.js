import React from "react";

const Service = ({ children, title }) => {
  return (
    <article className="service">
      <header>
        <h3 className="service-logo">{children}</h3>
        <h4>{title}</h4>
        <div className="underline2"></div>
      </header>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut laboriosam
        excepturi maiores labore beatae repellendus reiciendis neque aperiam
        corrupti soluta saepe cupiditate blanditiis et modi expedita, recusandae
        in rem velit.
      </p>
    </article>
  );
};

export default Service;
