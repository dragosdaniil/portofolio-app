import React from "react";
import Service from "../components/Service";
import { GiCutDiamond } from "react-icons/gi";
import { FaHtml5, FaRobot } from "react-icons/fa";

const services = [
  {
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut laboriosam
        excepturi maiores labore beatae repellendus reiciendis neque aperiam
        corrupti soluta saepe cupiditate blanditiis et modi expedita, recusandae
        in rem velit.`,
    title: "web development",
    logo: <FaHtml5 />,
  },
  {
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut laboriosam
        excepturi maiores labore beatae repellendus reiciendis neque aperiam
        corrupti soluta saepe cupiditate blanditiis et modi expedita, recusandae
        in rem velit.`,
    title: "web design",
    logo: <GiCutDiamond />,
  },
  {
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut laboriosam
        excepturi maiores labore beatae repellendus reiciendis neque aperiam
        corrupti soluta saepe cupiditate blanditiis et modi expedita, recusandae
        in rem velit.`,
    title: "machine learning",
    logo: <FaRobot />,
  },
];

const Services = () => {
  return (
    <section className="services">
      <header>
        <h1 className="title">services</h1>
        <div className="underline1"></div>
      </header>
      <div className=" section-center services-center">
        {services.map((service, index) => {
          const { title, description, logo } = service;
          return (
            <Service title={title} description={description} key={index}>
              {logo}
            </Service>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
