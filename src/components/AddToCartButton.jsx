import React, { useContext, useState } from "react";
import { ProductContext } from "../context/productContext";


function AddToCartButton({product}) {
  const [productID, setProductID] = useState(" ")
  const {addToCart} = useContext(ProductContext)
  console.log({product})
  return (
    <>
      <button className="btn btn-primary btn-sm" onClick={()=>addToCart(product._id)}>
        <i className="fa-solid fa-cart-shopping"></i> Add to cart
      </button>
    </>
  );
}

export default AddToCartButton;
