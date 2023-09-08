import React,{useContext} from 'react'
import { ProductContext } from "../context/productContext";
import Product from './Product';

function CartItem(props) {
    const {_id,name,image,price,quantity} = props.data
    const {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount,increaseToCart} = useContext(ProductContext)
    console.log(props.name)
  return (
        <>
              <td>
                <img
                  src= {image}
                  alt="cartImage"
                  width="50px"
                />
              </td>
              
              <td>{name}</td>
              <td>
              <div className="mb-4">
                    <button onClick={()=>removeFromCart(_id)}>-</button>
                    <input value={quantity} onChange={(e)=>updateCartItemCount(Number(e.target.value), _id)} className="mx-2" />
                    <button onClick={()=>increaseToCart(_id)}>+</button>
                 </div>
              </td>

              <td>{price}</td>

              <td>
                  {price*quantity}
              </td>
        
    </>
  )
}

export default CartItem