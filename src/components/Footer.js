import React from "react";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-center">
        <a
          href="https://www.facebook.com/ddaniil1"
          className="social-media-link btn"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://github.com/dragosdaniil"
          className="social-media-link btn"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/dragoș-daniil-săndică-9a44351ba/"
          className="social-media-link btn"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
