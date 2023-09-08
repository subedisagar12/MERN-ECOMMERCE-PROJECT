import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ProductContext } from "../context/productContext";


function AddToCartButton({product}) {
  // const {id, name, image, price} = useState()
  // const [productID, setProductID] = useState(" ")
  const {addToCart} = useContext(ProductContext)
  console.log(product._id)
  return (
    <>
      <button className="btn btn-primary btn-sm" onClick={()=>addToCart(product = {product})}>
        <i className="fa-solid fa-cart-shopping"></i> Add to cart
      </button>
    </>
  );
}
AddToCartButton.propTypes = {
  product: PropTypes.object.isRequired,
};


export default AddToCartButton;
