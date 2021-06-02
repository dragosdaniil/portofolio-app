import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const PageNavbar = () => {
  // TO DO: FIX THE WIDTH-CHANGING BUG(DELETE THE INLINE STYLE WHEN WIDTH > 992px)
  const containerRef = useRef(null);
  const linksRef = useRef(null);
  const navRef = useRef(null);
  const [dropBar, setDropBar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const checkWidth = () => {
    const width = window.innerWidth;
    if (width > 992) {
      setDropBar(false);
      setShowDropdown(false);
      containerRef.current.removeAttribute("style");
    } else {
      setDropBar(true);
    }
  };

  const stickyBar = () => {
    if (window.scrollY > 250) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleToggle = () => {
    const linksHeight = linksRef.current.offsetHeight.toString();
    if (showDropdown) {
      containerRef.current.style.height = `${linksHeight}px`;
    } else if (!showDropdown) {
      containerRef.current.style.height = `0px`;
    }
  };

  useEffect(() => {
    handleToggle();
  }, [showDropdown]);

  useEffect(() => {
    window.addEventListener("scroll", () => stickyBar());
    return window.removeEventListener("scroll", stickyBar);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => checkWidth());
    return window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <nav className={isSticky ? "navbar sticky-navbar" : "navbar"} ref={navRef}>
      <Link to="/" className="logo">
        Portofolio
      </Link>
      <div className="toggle-container">
        <button
          className=" toggle-dropdown btn"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FaBars />
        </button>
      </div>
      <div
        className={dropBar ? "links-dropdown" : "links-container"}
        ref={containerRef}
      >
        <ul className="links" ref={linksRef}>
          <li className="link-item">
            <Link to="/">
              <button className="btn" onClick={() => setShowDropdown(false)}>
                Home
              </button>
            </Link>
          </li>
          <li className="link-item">
            <Link to="/about">
              <button className="btn" onClick={() => setShowDropdown(false)}>
                about
              </button>
            </Link>
          </li>
          <li className="link-item">
            <Link to="/allprojects">
              <button className="btn" onClick={() => setShowDropdown(false)}>
                projects
              </button>
            </Link>
          </li>
          <li className="link-item">
            <Link to="/contact">
              <button className="btn" onClick={() => setShowDropdown(false)}>
                contact
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PageNavbar;
