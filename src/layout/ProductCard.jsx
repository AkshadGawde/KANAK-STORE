import React from "react";
import { BsStarFill } from "react-icons/bs";
import Button from "./Button";

const ProductCard = (props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 transition-transform transform hover:scale-105">
      <div className="bg-white rounded-lg overflow-hidden shadow-md relative z-10">
        <img
          className="w-full h-48 object-cover object-center"
          src={props.img}
          alt="Product"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{props.title}</h3>
          <div className="flex mb-2">
            <BsStarFill className="text-yellow-500 mr-1" />
            <BsStarFill className="text-yellow-500 mr-1" />
            <BsStarFill className="text-yellow-500 mr-1" />
            <BsStarFill className="text-yellow-500 mr-1" />
            <BsStarFill className="text-yellow-500" />
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">{props.price}</h3>
            <Button title="BUY NOW" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
