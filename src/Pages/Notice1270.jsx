import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Notice1270() {
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
            <h2 className="filter_text">
              <span>ফিল্টার করুন :- </span>
            </h2>
            <form action="/notice" method="get">
              <div className="row">
                <div className="col-md-4">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    defaultValue=""
                    placeholder="টাইটেল দিয়ে সার্চ করুন"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control start_date"
                    defaultValue=""
                    name="from_date"
                    placeholder="শুরুর তারিখ"
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="text"
                    name="to_date"
                    className="form-control end_date"
                    defaultValue=""
                    placeholder="শেষের তারিখ"
                  />
                </div>
                <div className="col-md-2 text-right ml-auto">
                  <button className="btn btn-sm btn-primary" type="submit">
                    সার্চ করুন
                  </button>
                </div>
              </div>
            </form>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card date-card d-flex flex-row mb-4">
                <div className="datestamp small m-3">
                  <span className="datestamp-month badge rounded-0">
                    <abbr title="November">Mar</abbr>
                  </span>
                  <span className="datestamp-day py-1">15</span>
                  <span className="sr-only">,</span>
                  <span className="datestamp-year badge text-muted border-top border-grey">
                    2024
                  </span>
                </div>
                <div className="date-body border-left p-3">
                  <h2 className="h4 date-title mt-0">
                    <Link to="/notice/1m-samyik-preeksha-rutin-2023ing">
                      ১ম সাময়িক পরীক্ষা রুটিন: ২০২৪ইং
                    </Link>
                  </h2>
                  <div className="date-description">
                    <p className="mb-0">
                      {" "}
                      <Link to="/notice/1m-samyik-preeksha-rutin-2023ing">
                        Details..
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card date-card d-flex flex-row mb-4">
                <div className="datestamp small m-3">
                  <span className="datestamp-month badge rounded-0">
                    <abbr title="November">Jan</abbr>
                  </span>
                  <span className="datestamp-day py-1">24</span>
                  <span className="sr-only">,</span>
                  <span className="datestamp-year badge text-muted border-top border-grey">
                    2024
                  </span>
                </div>
                <div className="date-body border-left p-3">
                  <h2 className="h4 date-title mt-0">
                    <Link to="/notice/1443-hijree-trriteey-srenir-preekshar-rutin">
                      ১৪৪৫ হিজরী -তৃতীয় শ্রেণির পরীক্ষার রুটিন
                    </Link>
                  </h2>
                  <div className="date-description">
                    <p className="mb-0">
                      নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ&nbsp;কর্তৃক
                      আয়োজিত হিজরী&nbsp;১৪৪৫&nbsp;সনের&nbsp;তৃতীয় শ্রেণির...{" "}
                      <Link to="/notice/1443-hijree-trriteey-srenir-preekshar-rutin">
                        Details..
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card date-card d-flex flex-row mb-4">
                <div className="datestamp small m-3">
                  <span className="datestamp-month badge rounded-0">
                    <abbr title="November">Jan</abbr>
                  </span>
                  <span className="datestamp-day py-1">24</span>
                  <span className="sr-only">,</span>
                  <span className="datestamp-year badge text-muted border-top border-grey">
                    2024
                  </span>
                </div>
                <div className="date-body border-left p-3">
                  <h2 className="h4 date-title mt-0">
                    <Link to="/notice/hijree-1445-sner-ple-narsaree-prthm-oo-dwiteey-srenir-preekshar-rutin">
                      হিজরী ১৪৪৫ সনের -প্লে-নার্সারী, প্রথম ও দ্বিতীয় শ্রেণির
                      পরীক্ষার রুটিন
                    </Link>
                  </h2>
                  <div className="date-description">
                    <p className="mb-0">
                      {" "}
                      <Link to="/notice/hijree-1445-sner-ple-narsaree-prthm-oo-dwiteey-srenir-preekshar-rutin">
                        Details..
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card date-card d-flex flex-row mb-4">
                <div className="datestamp small m-3">
                  <span className="datestamp-month badge rounded-0">
                    <abbr title="November">Jan</abbr>
                  </span>
                  <span className="datestamp-day py-1">23</span>
                  <span className="sr-only">,</span>
                  <span className="datestamp-year badge text-muted border-top border-grey">
                    2024
                  </span>
                </div>
                <div className="date-body border-left p-3">
                  <h2 className="h4 date-title mt-0">
                    <Link to="/notice/1443-hijree-preekshar-fi-sngkrant">
                      ১৪৪৫ হিজরী পরীক্ষার ফি সংক্রান্ত
                    </Link>
                  </h2>
                  <div className="date-description">
                    <p className="mb-0">
                      নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ&nbsp;কর্তৃক
                      আয়োজিত ১৪৪৫ হিজরী পরীক্ষার ফি সংক্রা...{" "}
                      <Link to="/notice/1443-hijree-preekshar-fi-sngkrant">
                        Details..
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card date-card d-flex flex-row mb-4">
                <div className="datestamp small m-3">
                  <span className="datestamp-month badge rounded-0">
                    <abbr title="November">Oct</abbr>
                  </span>
                  <span className="datestamp-day py-1">29</span>
                  <span className="sr-only">,</span>
                  <span className="datestamp-year badge text-muted border-top border-grey">
                    2023
                  </span>
                </div>
                <div className="date-body border-left p-3">
                  <h2 className="h4 date-title mt-0">
                    <Link to="/notice/kendreey-snd-trriteey-preekshar-rutin">
                      কেন্দ্রীয় সনদ (তৃতীয়) পরীক্ষার রুটিন
                    </Link>
                  </h2>
                  <div className="date-description">
                    <p className="mb-0">
                      {" "}
                      <Link to="/notice/kendreey-snd-trriteey-preekshar-rutin">
                        Details..
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card date-card d-flex flex-row mb-4">
                <div className="datestamp small m-3">
                  <span className="datestamp-month badge rounded-0">
                    <abbr title="November">Oct</abbr>
                  </span>
                  <span className="datestamp-day py-1">28</span>
                  <span className="sr-only">,</span>
                  <span className="datestamp-year badge text-muted border-top border-grey">
                    2023
                  </span>
                </div>
                <div className="date-body border-left p-3">
                  <h2 className="h4 date-title mt-0">
                    <Link to="/notice/2023-saler-ple-narsaree-prthm-oo-dwiteey-srenir-preekshar-rutin">
                      2023 সালের -প্লে-নার্সারী, প্রথম ও দ্বিতীয় শ্রেণির
                      পরীক্ষার রুটিন
                    </Link>
                  </h2>
                  <div className="date-description">
                    <p className="mb-0">
                      নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ&nbsp;কর্তৃক
                      আয়োজিত 2023 ইংরেজী সনের&nbsp;প্লে-নার্সার...{" "}
                      <Link to="/notice/2023-saler-ple-narsaree-prthm-oo-dwiteey-srenir-preekshar-rutin">
                        Details..
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card date-card d-flex flex-row mb-4">
                <div className="datestamp small m-3">
                  <span className="datestamp-month badge rounded-0">
                    <abbr title="November">Jun</abbr>
                  </span>
                  <span className="datestamp-day py-1">19</span>
                  <span className="sr-only">,</span>
                  <span className="datestamp-year badge text-muted border-top border-grey">
                    2023
                  </span>
                </div>
                <div className="date-body border-left p-3">
                  <h2 className="h4 date-title mt-0">
                    <Link to="/notice/kendreey-snd-preeksha-2023-er-cithi">
                      কেন্দ্রীয় সনদ পরীক্ষা- ২০২৩ এর চিঠি
                    </Link>
                  </h2>
                  <div className="date-description">
                    <p className="mb-0">
                      {" "}
                      <Link to="/notice/kendreey-snd-preeksha-2023-er-cithi">
                        Details..
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 pagination_div"></div>
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

export default Notice1270;
