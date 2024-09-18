/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Member2() {
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
                  <span>অফিস-কর্মকর্তা</span>
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
                    src="/public/storage/member/maoolana-abul-hasem.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-abul-hasem-saheb">
                      মাওলানা আবুল হাশেম
                    </Link>
                  </h3>
                  <h4 className="title"> হিসাব রক্ষক , অফিস সহকারী </h4>
                  <h4 className="title">abulhasem1216@gmail.com</h4>
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01843529175(নিজ), 01771555000 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="/public/storage/member/maoo-helal-uddeen.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-helal-uddeen">
                      মোহাম্মদ হেলাল উদ্দীন
                    </Link>
                  </h3>
                  <h4 className="title">
                    {" "}
                    অফিস সহকারী , পুস্তক হিসাব নিয়ন্ত্রক{" "}
                  </h4>
                  <h4 className="title">helalbinamdad8@gmail.com</h4>
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      ০১৩২২-৮৯১০৫০ (অফিস) ০১৮১১-৬৭১৭০৭(নিজ),
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="/public/storage/member/muhammd-anichul-islam.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/muhammd-anichul-islam">
                      মুহাম্মদ আনিছুল ইসলাম
                    </Link>
                  </h3>
                  <h4 className="title"> অফিস সহকারী , কম্পিউটার বিভাগ </h4>
                  <h4 className="title">‍anisnooranictg69@gmail.com</h4>
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01817270901, (নিজ) 01322-891020 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="/public/storage/member/maoo-masudur-rhman.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-masudur-rhman">
                      মাও. মাসউদুর রহমান
                    </Link>
                  </h3>
                  <h4 className="title"> পুস্তক সরবরাহক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01721387246 (নিজ), 01322-891005 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="/public/storage/member/maoo-jakariya-al-mamun.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-jakariya">
                      মাও. জাকারিয়া আল মামুন
                    </Link>
                  </h3>
                  <h4 className="title"> পুস্তক সরবরাহক </h4>
                  <h4 className="title">zakariamamun8@gmail.com</h4>
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01815527296(নিজ), 01322-891030 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="/public/storage/member/maoo-mukhtar-hosain.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-mukhtar-hosain">
                      মাও. মুখতার হোসাইন
                    </Link>
                  </h3>
                  <h4 className="title"> কম্পিউটার বিভাগ </h4>
                  <h4 className="title">Essential710@gmail.com</h4>
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01818228519(নিজ), 01322-891040 (অফিস)
                    </Link>
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

export default Member2;
