
function OrderDetails() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <section
        className="h-100 bg-light"
        style={{ backgroundColor: "#eee", height: "100vh" }}
      >
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card border-3 border-warning">
                <div className="card-body p-5">
                  <p className="lead fw-bold mb-5 text-warning">
                    Purchase Receipt
                  </p>
                  <div className="row">
                    <div className="col mb-3">
                      <p className="small text-muted mb-1">Date</p>
                      <p>10 April 2023</p>
                    </div>
                    <div className="col mb-3">
                      <p className="small text-muted mb-1">Order No.</p>
                      <p>012j1gvs356c</p>
                    </div>
                  </div>
                  <div
                    className="bg-light py-4 px-5 rounded"
                    style={{ backgroundColor: "#f2f2f2" }}
                  >
                    <div className="row">
                      <div className="col-md-8 col-lg-9">
                        <p>BEATS Solo 3 Wireless Headphones</p>
                      </div>
                      <div className="col-md-4 col-lg-3">
                        <p>rs. 4500</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-8 col-lg-9">
                        <p className="mb-0">Shipping</p>
                      </div>
                      <div className="col-md-4 col-lg-3">
                        <p className="mb-0">Rs. 100</p>
                      </div>
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-md-4 offset-md-8 col-lg-3 offset-lg-9">
                      <p className="lead fw-bold mb-0 text-warning">Rs. 4600</p>
                    </div>
                  </div>
                  <p className="lead fw-bold mb-4 pb-2 text-warning">
                    Tracking Order
                  </p>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="horizontal-timeline">
                        <ul className="list-inline items d-flex justify-content-between">
                          <li className="list-inline-item items-list">
                            <p className="py-1 px-2 rounded text-white bg-warning">
                              Ordered
                            </p>
                          </li>
                          <li className="list-inline-item items-list">
                            <p className="py-1 px-2 rounded text-white bg-warning">
                              Shipped
                            </p>
                          </li>
                          <li className="list-inline-item items-list">
                            <p className="py-1 px-2 rounded text-white bg-warning">
                              On the way
                            </p>
                          </li>
                          <li
                            className="list-inline-item items-list text-end"
                            style={{ marginRight: 8 }}
                          >
                            <p style={{ marginRight: "-8px" }}>Delivered</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 pt-2 mb-0">
                    Need assistance?{" "}
                    <a href="#!" className="text-warning">
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderDetails;
