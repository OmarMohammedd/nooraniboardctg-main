/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Member3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://nooraniboardctg.com/public/js/noorani.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{ background: "url(https://nooraniboardctg.com/public/bg.jpg)" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Header />

      <div className="container">
        <section>
          <div className="filter">
            <div className="row">
              <div className="col-12">
                <h2 className="hdr-primary">
                  <span>কর্মচারীবৃন্দ</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/muhammd-sfikul-islam">
                      মুহাম্মদ শফিকুল ইসলাম
                    </Link>
                  </h3>
                  <h4 className="title"> বাবুর্চী </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)"></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/muhammd-jihad-hosen">
                      মুহাম্মদ জিহাদ হোসেন
                    </Link>
                  </h3>
                  <h4 className="title"> বাবুর্চী </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link href="javascript:void(0)"></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/muhammd-abdur-rhman-sujn">
                      মুহাম্মদ আব্দুর রহমান (সুজন)
                    </Link>
                  </h3>
                  <h4 className="title"> বাবুর্চী </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/muhammd-mehedee">মুহাম্মদ মেহেদী</Link>
                  </h3>
                  <h4 className="title"> বাবুর্চী </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link href="javascript:void(0)"></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/muhammd-rfikul-islam">
                      মুহাম্মদ রফিকুল ইসলাম
                    </Link>
                  </h3>
                  <h4 className="title"> বাবুর্চী </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link href="javascript:void(0)"></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/mohammd-jahidul-islam">
                      মোহাম্মদ জাহিদুল ইসলাম
                    </Link>
                  </h3>
                  <h4 className="title"> পিয়ন </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link href="javascript:void(0)"></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <div
        className="modal fade"
        id="phone_modal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form
            onsubmit="return check_data_poridorshok()"
            action="institute-register-online"
            method="get"
            className="has-validation-callback"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  প্রশিক্ষক ও পরিদর্শক এর ফরম
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label className="font-weight-bold">
                    প্রশিক্ষক ও পরিদর্শক এর মোবাইল নম্বর
                  </label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        880
                      </span>
                    </div>
                    <input
                      id="p_phone"
                      type="number"
                      name="phone"
                      className="form-control"
                      placeholder="মোবাইল নম্বর দিন"
                    />
                  </div>
                </div>
                <div className="form-group" id="p_phone_err"></div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  বাতিল
                </button>
                <button type="submit" className="btn btn-primary">
                  সাবমিট
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Member3;
