import PropTypes from "prop-types";
import React, { useContext, useState } from "react";


import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import { ProductContext } from "../context/productContext";

function ProductCard({product}) {
  const {addToCart, cartItems} = useContext(ProductContext)
  return (
    <div className="card">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/product/detail" className="product-title">
                  {product.name}
                </Link>
              </h5>
              <p className="card-text">Rs. {product.price}</p>
              <AddToCartButton data = {product}/>
              {/* <button className="btn btn-primary btn-sm" onClick={()=>addToCart(product._id, product.image, product.name, product.price)}>
        <i className="fa-solid fa-cart-shopping"></i> Add to cart
      </button> */}
            </div>
          </div>
  );
}
  ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
  };

export default ProductCard;
