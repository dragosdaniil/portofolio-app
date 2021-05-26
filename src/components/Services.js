import React from "react";
import Service from "../components/Service";
const Services = () => {
  return (
    <section className="services">
      <header>
        <h1 className="title">services</h1>
        <div className="underline1"></div>
      </header>
      <div className=" section-center services-center">
        <Service />
        <Service />
        <Service />
      </div>
    </section>
  );
};

export default Services;
