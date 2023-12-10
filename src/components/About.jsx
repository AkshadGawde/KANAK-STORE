// About.jsx
import React from "react";
import img from "../assets/img/about1.jpg";
import Button from "../layout/Button";

const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full"></div>
      <div className="z-10 relative space-y-4 lg:pt-14 lg:pl-8 text-white text-center lg:text-left font-semibold">
        <h1 className="font-semibold text-4xl">Why Choose Us?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          architecto quisquam delectus minima perferendis nulla quia nisi
          laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
          molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
          laboriosam temporibus delectus, aut a? Quasi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
          suscipit reiciendis accusamus recusandae eum aspernatur pariatur odit
          veritatis facere. Magnam!
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
