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
              Let me tell you something you already know. The world ain't all
              sunshine and rainbows. It's a very mean and nasty place and I
              don't care how tough you are it will beat you to your knees and
              keep you there permanently if you let it. You, me, or nobody is
              gonna hit as hard as life. But it ain't about how hard ya hit.
              It's about how hard you can get it and keep moving forward. How
              much you can take and keep moving forward. That's how winning is
              done! Now if you know what you're worth then go out and get what
              you're worth. But ya gotta be willing to take the hits, and not
              pointing fingers saying you ain't where you wanna be because of
              him, or her, or anybody! Cowards do that and that ain't you!
              You're better than that!
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default About;
