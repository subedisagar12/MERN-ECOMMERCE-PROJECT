import Counter from "../Counter";
import styles from "./Checkout.css";

function Checkout() {
  return (
    <>
    <div className="check-container">
    <div className={`${styles["checkout-container"]} row`}>
      <div className={`col-md-8 ${styles["table-container"]}`}>
        <table className="table">
  <thead>
    <tr>
      <th scope="col"> <input type="Checkbox"></input> Select All</th>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><input type="Checkbox"></input></th>
      <td>Mark</td>
      <td>1500</td>
      <td><Counter/></td>
    </tr>
    <tr>
      <th scope="row"><input type="Checkbox"></input></th>
      <td>Jacob</td>
      <td>1200</td>
      <td><Counter/></td>
    </tr>
    <tr>
      <th scope="row"><input type="Checkbox"></input></th>
      <td>Larry the Bird</td>
      <td>1800</td>
      <td><Counter/></td>
    </tr>
  </tbody>
</table>
      </div>
      <div className={`col-md-4 ${styles["checkout-sidebar"]}`}>
        <div className="summary-table">
          <table>
            <th> Order Summary</th>
            <tr>
            <td>Total Item Price : 20000</td>
            </tr>
            <tr>
            <td>Shipping : 200</td>
            </tr>
            <tr>
            <td>Discount : 100</td>
            </tr>
            <td>Voucher Card</td>
            <tr>
            <td>Total Amount</td>
            </tr>
            <tfoot>Proceed to checkout(Item Count)</tfoot>
          </table>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}



export default Checkout;
