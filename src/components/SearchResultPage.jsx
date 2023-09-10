function SearchResultPage() {
  return (
    <>
        <>
  <meta charSet="UTF-8" />
  <link
    href="http://netdna.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\nbody{\n    background:#dcdcdc;\n    margin-top:20px;}\n\n.widget-26 {\n  color: #3c4142;\n  font-weight: 400;\n}\n\n.widget-26 tr:first-child td {\n  border: 0;\n}\n\n.widget-26 .widget-26-job-emp-img img {\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n}\n\n.widget-26 .widget-26-job-title {\n  min-width: 200px;\n}\n\n.widget-26 .widget-26-job-title a {\n  font-weight: 400;\n  font-size: 0.875rem;\n  color: #3c4142;\n  line-height: 1.5;\n}\n\n.widget-26 .widget-26-job-title a:hover {\n  color: #68CBD7;\n  text-decoration: none;\n}\n\n.widget-26 .widget-26-job-title .employer-name {\n  margin: 0;\n  line-height: 1.5;\n  font-weight: 400;\n  color: #3c4142;\n  font-size: 0.8125rem;\n  color: #3c4142;\n}\n\n.widget-26 .widget-26-job-title .employer-name:hover {\n  color: #68CBD7;\n  text-decoration: none;\n}\n\n.widget-26 .widget-26-job-title .time {\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.widget-26 .widget-26-job-info {\n  min-width: 100px;\n  font-weight: 400;\n}\n\n.widget-26 .widget-26-job-info p {\n  line-height: 1.5;\n  color: #3c4142;\n  font-size: 0.8125rem;\n}\n\n.widget-26 .widget-26-job-info .location {\n  color: #3c4142;\n}\n\n.widget-26 .widget-26-job-salary {\n  min-width: 70px;\n  font-weight: 400;\n  color: #3c4142;\n  font-size: 0.8125rem;\n}\n\n.widget-26 .widget-26-job-category {\n  padding: .5rem;\n  display: inline-flex;\n  white-space: nowrap;\n  border-radius: 15px;\n}\n\n.widget-26 .widget-26-job-category .indicator {\n  width: 13px;\n  height: 13px;\n  margin-right: .5rem;\n  float: left;\n  border-radius: 50%;\n}\n\n.widget-26 .widget-26-job-category span {\n  font-size: 0.8125rem;\n  color: #3c4142;\n  font-weight: 600;\n}\n\n.widget-26 .widget-26-job-starred svg {\n  width: 20px;\n  height: 20px;\n  color: #fd8b2c;\n}\n\n.widget-26 .widget-26-job-starred svg.starred {\n  fill: #fd8b2c;\n}\n.bg-soft-base {\n  background-color: #e1f5f7;\n}\n.bg-soft-warning {\n    background-color: #fff4e1;\n}\n.bg-soft-success {\n    background-color: #d1f6f2;\n}\n.bg-soft-danger {\n    background-color: #fedce0;\n}\n.bg-soft-info {\n    background-color: #d7efff;\n}\n\n\n.search-form {\n  width: 80%;\n  margin: 0 auto;\n  margin-top: 1rem;\n}\n\n.search-form input {\n  height: 100%;\n  background: transparent;\n  border: 0;\n  display: block;\n  width: 100%;\n  padding: 1rem;\n  height: 100%;\n  font-size: 1rem;\n}\n\n.search-form select {\n  background: transparent;\n  border: 0;\n  padding: 1rem;\n  height: 100%;\n  font-size: 1rem;\n}\n\n.search-form select:focus {\n  border: 0;\n}\n\n.search-form button {\n  height: 100%;\n  width: 100%;\n  font-size: 1rem;\n}\n\n.search-form button svg {\n  width: 24px;\n  height: 24px;\n}\n\n.search-body {\n  margin-bottom: 1.5rem;\n}\n\n.search-body .search-filters .filter-list {\n  margin-bottom: 1.3rem;\n}\n\n.search-body .search-filters .filter-list .title {\n  color: #3c4142;\n  margin-bottom: 1rem;\n}\n\n.search-body .search-filters .filter-list .filter-text {\n  color: #727686;\n}\n\n.search-body .search-result .result-header {\n  margin-bottom: 2rem;\n}\n\n.search-body .search-result .result-header .records {\n  color: #3c4142;\n}\n\n.search-body .search-result .result-header .result-actions {\n  text-align: right;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.search-body .search-result .result-header .result-actions .result-sorting {\n  display: flex;\n  align-items: center;\n}\n\n.search-body .search-result .result-header .result-actions .result-sorting span {\n  flex-shrink: 0;\n  font-size: 0.8125rem;\n}\n\n.search-body .search-result .result-header .result-actions .result-sorting select {\n  color: #68CBD7;\n}\n\n.search-body .search-result .result-header .result-actions .result-sorting select option {\n  color: #3c4142;\n}\n\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .search-body .search-filters {\n    display: flex;\n  }\n  .search-body .search-filters .filter-list {\n    margin-right: 1rem;\n  }\n}\n\n.card-margin {\n    margin-bottom: 1.875rem;\n}\n\n@media (min-width: 992px){\n.col-lg-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%;\n}\n}\n\n.card-margin {\n    margin-bottom: 1.875rem;\n}\n.card {\n    border: 0;\n    box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);\n    -webkit-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);\n    -moz-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);\n    -ms-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);\n}\n.card {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #ffffff;\n    background-clip: border-box;\n    border: 1px solid #e6e4e9;\n    border-radius: 8px;\n}\n"
    }}
  />
  <div className="container-fluid m-0 bg-secondary">
    <div className="row">
      <div className="col-12">
        <div className="card card-margin">
          <div className="card-body">
            <div className="row search-body">
              <div className="col-lg-12">
                <div className="search-result">
                  <div className="result-header">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="records">
                          Showing: <b>1-20</b> of <b>200</b> result
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="result-actions">
                          <div className="result-sorting">
                            <span>Sort By:</span>
                            <select
                              className="form-control border-0"
                              id="exampleOption"
                            >
                              <option value={1}>Relevance</option>
                              <option value={2}>Names (A-Z)</option>
                              <option value={3}>Names (Z-A)</option>
                            </select>
                          </div>
                          <div className="result-views">
                            <button
                              type="button"
                              className="btn btn-soft-base btn-icon"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-list"
                              >
                                <line x1={8} y1={6} x2={21} y2={6} />
                                <line x1={8} y1={12} x2={21} y2={12} />
                                <line x1={8} y1={18} x2={21} y2={18} />
                                <line x1={3} y1={6} x2={3} y2={6} />
                                <line x1={3} y1={12} x2={3} y2={12} />
                                <line x1={3} y1={18} x2={3} y2={18} />
                              </svg>
                            </button>
                            <button
                              type="button"
                              className="btn btn-soft-base btn-icon"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-grid"
                              >
                                <rect x={3} y={3} width={7} height={7} />
                                <rect x={14} y={3} width={7} height={7} />
                                <rect x={14} y={14} width={7} height={7} />
                                <rect x={3} y={14} width={7} height={7} />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="result-body">
                    <div className="table-responsive">
                      <table className="table widget-26">
                        <tbody>
                          <tr>
                            <td>
                              <div className="widget-26-job-emp-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                  alt="Company"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-title">
                                <a href="#">
                                  Senior Software Engineer / Developer
                                </a>
                                <p className="m-0">
                                  <a href="#" className="employer-name">
                                    Axiom Corp.
                                  </a>{" "}
                                  <span className="text-muted time">
                                    1 days ago
                                  </span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-info">
                                <p className="type m-0">Full-Time</p>
                                <p className="text-muted m-0">
                                  in{" "}
                                  <span className="location">London, UK</span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-salary">
                                $ 50/hr
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-category bg-soft-base">
                                <i className="indicator bg-base" />
                                <span>Software Development</span>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-starred">
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="widget-26-job-emp-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                  alt="Company"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-title">
                                <a href="#">
                                  Marketing &amp; Communication Supervisor
                                </a>
                                <p className="m-0">
                                  <a href="#" className="employer-name">
                                    AxiomUI Llc.
                                  </a>{" "}
                                  <span className="text-muted time">
                                    2 days ago
                                  </span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-info">
                                <p className="type m-0">Part-Time</p>
                                <p className="text-muted m-0">
                                  in{" "}
                                  <span className="location">New York, US</span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-salary">
                                $ 60/hr
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-category bg-soft-warning">
                                <i className="indicator bg-warning" />
                                <span>Marketing</span>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-starred">
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="widget-26-job-emp-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                  alt="Company"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-title">
                                <a href="#">Senior Data Analyst / Scientist</a>
                                <p className="m-0">
                                  <a href="#" className="employer-name">
                                    AxiomUI Inc.
                                  </a>{" "}
                                  <span className="text-muted time">
                                    4 days ago
                                  </span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-info">
                                <p className="type m-0">Part-Time</p>
                                <p className="text-muted m-0">
                                  in{" "}
                                  <span className="location">New York, US</span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-salary">
                                $ 60/hr
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-category bg-soft-success">
                                <i className="indicator bg-success" />
                                <span>Artificial Intelligence</span>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-starred">
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="widget-26-job-emp-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                  alt="Company"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-title">
                                <a href="#">UX Designer &amp; UI Developer</a>
                                <p className="m-0">
                                  <a href="#" className="employer-name">
                                    AxiomUI Inc.
                                  </a>{" "}
                                  <span className="text-muted time">
                                    5 days ago
                                  </span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-info">
                                <p className="type m-0">Part-Time</p>
                                <p className="text-muted m-0">
                                  in{" "}
                                  <span className="location">Toronto, CAN</span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-salary">
                                $ 35/hr
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-category bg-soft-danger">
                                <i className="indicator bg-danger" />
                                <span>Design</span>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-starred">
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="widget-26-job-emp-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                  alt="Company"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-title">
                                <a href="#">
                                  Information Security Analyst / Expert
                                </a>
                                <p className="m-0">
                                  <a href="#" className="employer-name">
                                    Axiom Corp.
                                  </a>{" "}
                                  <span className="text-muted time">
                                    6 days ago
                                  </span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-info">
                                <p className="type m-0">Part-Time</p>
                                <p className="text-muted m-0">
                                  in{" "}
                                  <span className="location">Mumbai, IN</span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-salary">
                                $ 70/hr
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-category bg-soft-info">
                                <i className="indicator bg-info" />
                                <span>Infra Supervision</span>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-starred">
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star starred"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="widget-26-job-emp-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                  alt="Company"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-title">
                                <a href="#">
                                  Senior Software Engineer / Developer
                                </a>
                                <p className="m-0">
                                  <a href="#" className="employer-name">
                                    Axiom Corp.
                                  </a>{" "}
                                  <span className="text-muted time">
                                    1 days ago
                                  </span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-info">
                                <p className="type m-0">Full-Time</p>
                                <p className="text-muted m-0">
                                  in{" "}
                                  <span className="location">London, UK</span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-salary">
                                $ 50/hr
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-category bg-soft-base">
                                <i className="indicator bg-base" />
                                <span>Software Development</span>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-starred">
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="widget-26-job-emp-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                  alt="Company"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-title">
                                <a href="#">
                                  Marketing &amp; Communication Supervisor
                                </a>
                                <p className="m-0">
                                  <a href="#" className="employer-name">
                                    AxiomUI Llc.
                                  </a>{" "}
                                  <span className="text-muted time">
                                    2 days ago
                                  </span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-info">
                                <p className="type m-0">Part-Time</p>
                                <p className="text-muted m-0">
                                  in{" "}
                                  <span className="location">New York, US</span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-salary">
                                $ 60/hr
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-category bg-soft-warning">
                                <i className="indicator bg-warning" />
                                <span>Marketing</span>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-starred">
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="widget-26-job-emp-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                  alt="Company"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-title">
                                <a href="#">Senior Data Analyst / Scientist</a>
                                <p className="m-0">
                                  <a href="#" className="employer-name">
                                    AxiomUI Inc.
                                  </a>{" "}
                                  <span className="text-muted time">
                                    4 days ago
                                  </span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-info">
                                <p className="type m-0">Part-Time</p>
                                <p className="text-muted m-0">
                                  in{" "}
                                  <span className="location">New York, US</span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-salary">
                                $ 60/hr
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-category bg-soft-success">
                                <i className="indicator bg-success" />
                                <span>Artificial Intelligence</span>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-starred">
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="widget-26-job-emp-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                  alt="Company"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-title">
                                <a href="#">UX Designer &amp; UI Developer</a>
                                <p className="m-0">
                                  <a href="#" className="employer-name">
                                    AxiomUI Inc.
                                  </a>{" "}
                                  <span className="text-muted time">
                                    5 days ago
                                  </span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-info">
                                <p className="type m-0">Part-Time</p>
                                <p className="text-muted m-0">
                                  in{" "}
                                  <span className="location">Toronto, CAN</span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-salary">
                                $ 35/hr
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-category bg-soft-danger">
                                <i className="indicator bg-danger" />
                                <span>Design</span>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-starred">
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="widget-26-job-emp-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                  alt="Company"
                                />
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-title">
                                <a href="#">
                                  Information Security Analyst / Expert
                                </a>
                                <p className="m-0">
                                  <a href="#" className="employer-name">
                                    Axiom Corp.
                                  </a>{" "}
                                  <span className="text-muted time">
                                    6 days ago
                                  </span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-info">
                                <p className="type m-0">Part-Time</p>
                                <p className="text-muted m-0">
                                  in{" "}
                                  <span className="location">Mumbai, IN</span>
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-salary">
                                $ 70/hr
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-category bg-soft-info">
                                <i className="indicator bg-info" />
                                <span>Infra Supervision</span>
                              </div>
                            </td>
                            <td>
                              <div className="widget-26-job-starred">
                                <a href="#">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-star starred"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="d-flex justify-content-center">
              <ul className="pagination pagination-base pagination-boxed pagination-square mb-0">
                <li className="page-item">
                  <a className="page-link no-border" href="#">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link no-border" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link no-border" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link no-border" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link no-border" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link no-border" href="#">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="bcl">
    <a
      style={{ fontSize: "8pt", textDecoration: "none" }}
      href="http://www.devanswer.com"
    >
      Free Frontend
    </a>
  </div>
</>

    </>
  )
}

export default SearchResultPage