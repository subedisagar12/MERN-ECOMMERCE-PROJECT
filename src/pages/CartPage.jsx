import React, { useContext } from "react";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";
// import { Products } from "../productcard";
import { ProductContext } from "../context/productContext";
import CartItem from "../components/cartItem";

function CartPage() {
    const {cartItems} = useContext(ProductContext)
    console.log(cartItems)
    let cartkeys = Object.keys(cartItems)
  return (
    <>
    {cartItems.map(item=>(
      <tr>
      {
      <CartItem data = {item}></CartItem>
     //  cartkeys.map((cartItems)=>{
     //           return <CartItem data={cartItems}></CartItem>
     //       })
           
     }
           </tr>
    ))}
    
    </>
  );
}

export default CartPage;
