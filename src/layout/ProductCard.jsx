import React from "react";
import { bsStartFill } from "react-icons/bs";
import { bsStartHalf } from "react-icons/bs";
import Button from "./Button";

const ProductCard = (props) => {
  return (
    <div>
      <img src={props.img} alt="img" />
      <div>
        <h3>{props.title}</h3>
        <div>
          <bsStartFill />
          <bsStartFill />
          <bsStartFill />
          <bsStartFill />
          <bsStartFill />
        </div>
        <div>
          <h3>{props.price}</h3>
          <Button title="BUY NOW" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
