import React from "react";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import ProductCard from "../layout/ProductCard";

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Products
      </h1>

      <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 justify-center">
        <ProductCard img={img1} title="Wheat Flour" price="rs69.99" />
        <ProductCard img={img2} title="Jowar Flour" price="rs69.99" />
        <ProductCard img={img3} title="Chana Flour" price="rs69.99" />
        <ProductCard img={img4} title="Rice Flour" price="rs69.99" />
        <ProductCard img={img5} title="Bajri Flour" price="rs69.99" />
        <ProductCard img={img6} title="Ragi Flour" price="rs69.99" />
      </div>
    </div>
  );
};

export default Product;
