import React, { useEffect } from "react";
import j1 from "../assets/images/product-1-720x480.jpg";
import SearchingBarForJobs from "../Components/SearchingBarForJobs";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { jobResults } from "../JS/actions/job";

const Jobs = () => {
  const search = useSelector((state) => state.jobReducer.search);
  const listJobs = useSelector((state) => state.jobReducer.listJobs);
  const dispatch = useDispatch();
  useEffect(async () => {
    const result = await axios.get("/api/jobs", {
      params: search,
    });
    dispatch(jobResults(result.data.listJobs));
  }, [search]);

  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content />
      <meta name="author" content />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
        rel="stylesheet"
      />
      <title>Jobs</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/font-awesome.css"
      />
      <link rel="stylesheet" href="assets/css/style.css" />

      {/* ***** Call to Action Start ***** */}
      <section
        className="section section-bg"
        id="call-to-action"
        style={{
          backgroundImage: "url(assets/images/banner-image-1-1920x500.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cta-content">
                <br />
                <br />
                <h2>
                  Our <em>Jobs</em>
                </h2>
                <p>
                  Ut consectetur, metus sit amet aliquet placerat, enim est
                  ultricies ligula
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Call to Action End ***** */}
      {/* ***** Fleet Starts ***** */}
      <section className="section" id="trainers">
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-4">
              <form action="#">
                <h5 style={{ marginBottom: "15px" }}>Type</h5>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>Contract (5)</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>Full time (5)</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>Internship (5)</span>
                  </label>
                </div>
                <br />
                <h5 style={{ marginBottom: "15px" }}>Category</h5>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>Accounting / Finance / Insurance Jobs (5)</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>Accounting / Finance / Insurance Jobs (5)</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>Accounting / Finance / Insurance Jobs (5)</span>
                  </label>
                </div>
                <br />
                <h5 style={{ marginBottom: "15px" }}>Career levels</h5>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>Entry Level (5)</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>Entry Level (5)</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>Entry Level (5)</span>
                  </label>
                </div>
                <br />
                <h5 style={{ marginBottom: "15px" }}>Education levels</h5>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>Associate Degree (5)</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>Associate Degree (5)</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>Associate Degree (5)</span>
                  </label>
                </div>
                <br />
                <h5 style={{ marginBottom: "15px" }}>Years of experience</h5>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>&lt; 1 (5)</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>&lt; 1 (5)</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    <span>&lt; 1 (5)</span>
                  </label>
                </div>
              </form>
              <br />
            </div>
            <div className="col-lg-8">
              <SearchingBarForJobs />
              <div className="row">
                {listJobs?.map((job) => (
                  <div className="col-md-6">
                    <div className="trainer-item">
                      <div className="image-thumb">
                        <img src={j1} alt="" />
                      </div>
                      <div className="down-content">
                        <span>
                          {" "}
                          {job.remuneration}
                          <sup>$</sup>
                        </span>
                        <h4>{job.title}</h4>
                        <p>{job.category}</p>
                        <ul className="social-icons">
                          <li>
                            <a href="job-details.html">+ View More</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
          <nav>
            <ul className="pagination pagination-lg justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      {/* ***** Fleet Ends ***** */}
    </div>
  );
};

export default Jobs;