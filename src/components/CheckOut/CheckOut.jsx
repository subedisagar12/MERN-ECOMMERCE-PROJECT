import { useLocation } from "react-router-dom";
import Counter from "../Counter";
import ProceedToPayment from "../ProceedToPayment/ProceedToPayment";
import styles from "./Checkout.css";

function Checkout() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const image = searchParams.get("image");

  if (!name || !price || !image) {
    return <div>Product details not found.</div>;
  }

  return (
    <>
      <div className="check-container">
        <div className={`${styles["checkout-container"]} row`}>
          <div className={`col-md-8 ${styles["table-container"]}`}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input type="Checkbox"></input> Select All
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <input type="Checkbox"></input>
                  </th>
                  <td><img src={image} height='80px' width='80px'></img></td>
                  <td>{price}</td>
                  <td><Counter/></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={`col-md-4 ${styles["checkout-sidebar"]}`}>
            <div className="summary-table">
              <table>
                <thead>
                  <tr>
                    <th>Order Summary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Total Item Price : {price}
                    </td>
                  </tr>
                  <tr>
                    <td>Shipping : 200</td>
                  </tr>
                  <tr>
                    <td>Discount : 100</td>
                  </tr>
                  <tr>
                    <td>Voucher Card</td>
                  </tr>
                  <tr>
                    <td>Total Amount</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Proceed to checkout (Item Count)</td>
                  </tr>
                </tfoot>
              </table>
              <div style={{ paddingTop: "20px" }}>
                <ProceedToPayment></ProceedToPayment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
