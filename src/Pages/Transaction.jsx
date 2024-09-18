import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Transaction() {
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
        <section className="mt-4">
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="card">
                <form id="txn_form" action="#" method="get">
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="2QTliMlpUda3yZoNuKbDM26WYybkAHyEw9P345ci"
                  />{" "}
                  <div className="card-body my-4 py-5">
                    <div className="col-md-9 m-auto">
                      <h3 className="text-center font_weight700 text-danger my-4">
                        অনলাইনে পরিশোধিত ফি/অর্ডার-এর তথ্য ডাউনলোড করুন
                      </h3>
                    </div>
                    <hr />
                    <div className="col-md-8 m-auto"></div>
                    <div className="col-md-5 m-auto">
                      <div className="form-group">
                        <label
                          for="payment_type_id"
                          htmlFor="batch_no"
                          className="font-weight-bold"
                        >
                          পরিশোধিত ফি/অর্ডার-এর ধরণ
                        </label>
                        <select name="payment_type_id" className="form-control">
                          <option value={1}>বোর্ড ফি</option>
                          <option value={2}>পরীক্ষার ফি</option>
                          <option value={3}>সনদ ফি</option>
                          <option value={4}>প্রশিক্ষণ ফি</option>
                          <option value={5}>বই বিক্রি</option>
                          <option value={6}>মাদ্রাসা নিবন্ধন আবেদন</option>
                          <option value={7}>পুরাতন মুয়াল্লিম সনদ</option>
                          <option value={8}>প্রশ্নপত্রের ফি</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="txn_id" className="font-weight-bold">
                          ট্রান্সেকশন (TxnID) নম্বর{" "}
                          <small>(পরিশোধের পর SMS মাধ্যমে পাওয়া TxnID)</small>
                        </label>
                        <input
                          data-validation="required"
                          type="text"
                          name="transaction_id"
                          className="form-control"
                          id="txn_id"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 py-4 text-center">
                        <button
                          className="btn btn-primary text-white btn-lg"
                          type="submit"
                        >
                          সাবমিট করুন
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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
            action="https://www.nooraniboardctg.com/institute-register-online"
            method="get"
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

export default Transaction;
