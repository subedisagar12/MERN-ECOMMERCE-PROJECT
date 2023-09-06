import React,{useContext} from 'react'
import { ProductContext } from "../context/productContext";

function CartItem(props) {
    const {id,name, price, productImage} = props.data
    const {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount} = useContext(ProductContext)
  return (
        <>
              <td>
                <img
                  src= {productImage}
                  alt="cartImage"
                  width="50px"
                />
              </td>
              
              <td>{productName}</td>
              <td>
              <div className="mb-4">
                    <button onClick={()=>removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)} className="mx-2" />
                    <button onClick={()=>addToCart(id)}>+</button>
                 </div>
              </td>

              <td>{price}</td>

              <td>

              </td>
        
    </>
  )
}

export default CartItem