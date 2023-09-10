import { Link } from "react-router-dom";


function Cart() {
    return (
      <>
        <Link className="nav-link" aria-current="page" to="/checkout">
                  <i className="fa-solid fa-cart-shopping"></i> My Cart
        </Link>
      </>
    );
  }  


export default Cart;
