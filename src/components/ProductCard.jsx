import React from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

function ProductCard() {
  return (
    <>
      <div className="card">
        <img
          src="https://www.borofone.com/wp-content/uploads/2022/04/borofone-bo12-power-bt-headset-headphones.jpg"
          className="card-img-top"
          alt="headphone"
        />
        <div className="card-body">
          <h5 className="card-title">
            <Link to="/product/detail" className="product-title">
              {" "}
              Sony Headphone
            </Link>
          </h5>
          <p className="card-text">Rs. 3500</p>

          <AddToCartButton />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
