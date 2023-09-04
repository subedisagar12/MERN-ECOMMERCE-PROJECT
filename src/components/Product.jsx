import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import { ProductContext } from "../context/productContext";

function Product(props) {
    const {id,productName, price, productImage} = props.data
    const {addToCart, cartItems} = useContext(ProductContext)

    const cartItemAmount = cartItems[id]
  return (
    <>
        <div className='product'>
            <img src= {productImage} alt="headphone" className="card-img-top"/>
            <h5 className="card-title">
            <Link to="/product/detail" className="product-title">
              {productName}
            </Link>
          </h5>
          <p className="card-text">{price}</p>
          {/* <AddToCartButton /> */}
          <button className="btn btn-primary btn-sm" onClick={()=>addToCart(id)}>
        <i className="fa-solid fa-cart-shopping"></i> Add to cart {cartItemAmount>0 && <>({cartItemAmount})</>}
      </button>
        </div>
    </>
  )
}

export default Product