import React from "react";
import Service from "../components/Service";
import { GiCutDiamond } from "react-icons/gi";
import { FaHtml5, FaRobot } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services">
      <header>
        <h1 className="title">services</h1>
        <div className="underline1"></div>
      </header>
      <div className=" section-center services-center">
        <Service title="web development">
          <FaHtml5 />
        </Service>
        <Service title="web design">
          <GiCutDiamond />
        </Service>
        <Service title="machine learning">
          <FaRobot />
        </Service>
      </div>
    </section>
  );
};

export default Services;
