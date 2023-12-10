import React, { useEffect } from "react";
import Button from "../layout/Button";
import backgroundImage from "../assets/img/Flour-background-unsplash.jpg";

const Home = () => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const typeWriter = (elementId) => {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    element.innerHTML = "";

    text.split("").forEach((char, index) => {
      const charElement = document.createElement("span");
      charElement.textContent = char;
      charElement.style.animation = `typing 1s ${index * 0.1}s forwards`;
      element.appendChild(charElement);
    });
  };

  useEffect(() => {
    typeWriter("typingHeader");
  }, []);

  return (
    <div
      className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-cover bg-no-repeat bg-center text-white"
      style={divStyle}
    >
      <style>
        {`
          @keyframes typing {
            from { opacity: 0; transform: translateY(1rem); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <div className="w-full lg:w-2/3 space-y-5">
        <h1 id="typingHeader" className="font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p>A healthy outside, starts from inside...</p>
        <div className="lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
