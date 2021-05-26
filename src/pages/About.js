import React from "react";

const hero = require("../images/hero.svg");

const About = () => {
  return (
    <main className="page">
      <section className="about-page">
        <div className="about-center section-center">
          <img src={hero.default} alt="logo" className="hero-svg-about" />
          <article className="about-me">
            <header>
              <h1 className="title">about me</h1>
              <div className="underline1"></div>
            </header>
            <p className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              explicabo, quis deserunt recusandae laborum nemo distinctio ut
              aspernatur deleniti incidunt necessitatibus corrupti totam placeat
              nam ad. Cupiditate unde est similique! Facilis voluptatem natus
              minima doloremque eveniet. Officia optio nam officiis excepturi
              dolores repellendus! Quo laudantium, modi voluptate earum ducimus
              sit vel ipsa eum maxime nostrum? Cum at fuga debitis pariatur
              voluptates facere iste accusantium atque eos. Repudiandae illum
              error magnam minima ratione, sint delectus adipisci iusto
              necessitatibus corporis earum qui molestiae provident ab tenetur
              enim et mollitia dolor dolores, nemo quaerat. Modi, quam dolor
              vero dignissimos quaerat culpa dolorem. Consequatur?
            </p>
            <ul className="tag-list">
              <li className="tag"></li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
};

export default About;
