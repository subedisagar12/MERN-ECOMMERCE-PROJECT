import React from "react";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const formStyle = {
    backgroundColor: "#f0f2f0", // Set your desired background color here
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <form className="row g-3 m-3" style={formStyle}>
      <div className="col-md-6 mb-3">
        <label htmlFor="fullName" className="form-label fw-bold">
          Full Name
        </label>
        <input type="text" className="form-control" id="fullName" />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="contactNumber" className="form-label fw-bold">
          Contact Number
        </label>
        <input type="tel" className="form-control" id="contactNumber" />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="inputEmail" className="form-label fw-bold">
          Email
        </label>
        <input type="email" className="form-control" id="inputEmail" />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="inputAddress" className="form-label fw-bold">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="inputCity" className="form-label fw-bold">
          City
        </label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-4 mb-3">
        <label htmlFor="inputState" className="form-label fw-bold">
          State
        </label>
        <select id="inputState" className="form-select">
          <option defaultValue="">Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div className="col-md-2 mb-3">
        <label htmlFor="inputZip" className="form-label fw-bold">
          Zip
        </label>
        <input type="text" className="form-control" id="inputZip" />
      </div>
      <div className="col-12 mb-3">
        <label htmlFor="nearestLandmark" className="form-label fw-bold">
          Nearest Landmark
        </label>
        <input type="text" className="form-control" id="nearestLandmark" />
      </div>
      <div className="col-12 mb-3">
        <label htmlFor="addressDescription" className="form-label fw-bold">
          Address Description
        </label>
        <textarea
          className="form-control"
          id="addressDescription"
          rows="3"
        ></textarea>
      </div>
      <div className="col-12 mb-3">
        <Link to="/order" type="submit" className="btn btn-outline-success">
          Complete Order
        </Link>
      </div>
    </form>
  );
}

export default CheckoutPage;
