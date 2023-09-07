import React, { useContext } from "react";
import { ProductContext } from "../context/productContext";

function AddToCartButton() {
  const {addToCart} = useContext(ProductContext)
  return (
    <>
      <a href="#" className="btn btn-primary btn-sm" onClick={()=>addToCart()}>
        <i className="fa-solid fa-cart-shopping"></i> Add to cart
      </a>
    </>
  );
}

export default AddToCartButton;
