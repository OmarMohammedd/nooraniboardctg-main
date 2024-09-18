import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function ResetPassword() {
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
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card mt-5">
              <div className="card-header bg-danger text-white">
                পাসওয়ার্ড ভুলে গেলে করণীয়
              </div>
              <div className="card-body">
                <form method="POST" action="/password/email">
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="2QTliMlpUda3yZoNuKbDM26WYybkAHyEw9P345ci"
                  />
                  <div className="form-group text-center">
                    <label htmlFor="">
                      আপনি যদি আপনার লগইন পাসওয়ার্ড ভুলে গিয়ে থাকেন তাহলে{" "}
                      <strong>
                        "নূরানী তালীমুল কোরআন বোর্ড চট্টগ্রাম বাংলাদেশ"
                      </strong>{" "}
                      এর সাথে ফোনে যোগাযোগ করুন। <br />
                      <br />
                      <strong>ফোন নম্বরসমূহ: </strong> ০১৭৭১-৫৫৫০০০,
                      ০১৩২২-৮৯১০৪০, ০১৩২২-৮৯১০৫০
                      <br />
                      <br />
                    </label>
                    <Link to="/login" className="btn btn-primary">
                      লগইন ফরম এ ফেরত যান
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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
          <form onsubmit="return check_data_poridorshok()" method="get">
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

export default ResetPassword;
