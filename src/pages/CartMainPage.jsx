import React, {useContext} from 'react'
import CartPage from './CartPage'
import { Link } from "react-router-dom";
import { Products } from "../productcard";
import { ProductContext } from "../context/productContext";
import CartItem from "../components/cartItem";

function CartMainPage() {
  const {cartItems ,getTotalCartAmount} = useContext(ProductContext)
  const totalAmount = getTotalCartAmount()
  return (
    <>
         <div className="container mt-5">
        <div className="cartItems">
        <table className="table"> 
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Sub Total</th>
            </tr>
          </thead>
          <tbody>
              <CartPage></CartPage>
           </tbody>
          <tfoot>
            <tr>
              <th colSpan="3">Total</th>
              <th>Rs. {totalAmount}</th>
            </tr>
          </tfoot>
        </table>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <Link
            to="/checkout"
            className="btn btn-dark"
            style={{ marginRight: "200px" }}
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  )
}

export default CartMainPage