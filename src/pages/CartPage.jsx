import React from "react";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <img
                  src="https://www.borofone.com/wp-content/uploads/2022/04/borofone-bo12-power-bt-headset-headphones.jpg"
                  alt="cartImage"
                  width="50px"
                />
              </td>

              <td>Sony Headphone</td>
              <td>
                <Counter />
              </td>

              <td>Rs.2500</td>
            </tr>

            <tr>
              <td>
                <img
                  src="https://www.borofone.com/wp-content/uploads/2022/04/borofone-bo12-power-bt-headset-headphones.jpg"
                  alt="cartImage"
                  width="50px"
                />
              </td>

              <td>Sony Headphone</td>
              <td>
                <Counter />
              </td>

              <td>Rs.2500</td>
            </tr>

            <tr>
              <td>
                <img
                  src="https://www.borofone.com/wp-content/uploads/2022/04/borofone-bo12-power-bt-headset-headphones.jpg"
                  alt="cartImage"
                  width="50px"
                />
              </td>

              <td>Sony Headphone</td>
              <td>
                <Counter />
              </td>

              <td>Rs.2500</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <th colSpan="3">Total</th>
              <th>Rs. 10,000</th>
            </tr>
          </tfoot>
        </table>
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
  );
}

export default CartPage;
