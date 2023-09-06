import React, { useContext } from "react";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";
// import { Products } from "../productcard";
import { ProductContext } from "../context/productContext";
import CartItem from "../components/cartItem";

function CartPage() {
    const {cartItems} = useContext(ProductContext)
  return (
    <>
    <tr>
     {Products.map((product)=>{
            if(cartItems[product.id] != 0){
              return <CartItem data={product}></CartItem>
            }
          })}
          </tr>
    </>
  );
}

export default CartPage;
