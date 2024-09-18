/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Contact() {
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
          <div className="row">
            <div className="col-md-12">
              <div className="card event_card event_card_details">
                <div className="card-body p-4 mt-4">
                  <h5 className="card-title text-center">
                    <Link className="text-center" to="#">
                      যোগাযোগ
                    </Link>
                  </h5>
                  <div className="row">
                    <div className="col-md-7">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.9335088596295!2d91.79960341474684!3d22.506677741059537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd67a6ddeb907%3A0x987235a2e5134982!2sNooraniboardctg!5e0!3m2!1sen!2sbd!4v1621926269981!5m2!1sen!2sbd"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="maaaap"
                      />
                    </div>
                    <div className="col-md-5">
                      <ul className="list-unstyled">
                        <li>
                          <Link className="d-flex" to="#" />
                        </li>
                        <li className="mb-2">
                          <Link className="d-flex" to="#">
                            <i className="fas fa-home" />
                            &nbsp;&nbsp;প্রধান কার্যালয়:-
                            <br />
                            আল জামিয়াতুল আহলিয়া দারুল উলূম মঈনুল ইসলাম
                            হাটহাজারী।
                            <br /> (হাটহাজারী মাদ্রাসা)। <br />
                            হাটহাজারী,চট্টগ্রাম, বাংলাদেশ।
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link className="d-flex" to="#">
                            <i className="fas fa-building" />
                            &nbsp;&nbsp;কেন্দ্রীয় কার্যালয়:- <br />
                            নূরানী তা'লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ।{" "}
                            <br /> রেল স্টেশন রোড, হাটহাজারী-৪৩৩০। <br />
                            হাটহাজারী,চট্টগ্রাম, বাংলাদেশ।
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link className="d-flex" to="#">
                            <i className="fas fa-tty" />
                            &nbsp;&nbsp;০১৭৭১-৫৫৫০০০ <br />
                            ০১৩২২-৮৯১০৪০ <br /> ০১৩২২-৮৯১০৫০
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link className="d-flex" to="#">
                            <i className="fas fa-envelope-open" />
                            &nbsp;&nbsp;nooraniboardctg@gmail.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
            action="/institute-register-online"
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

export default Contact;
