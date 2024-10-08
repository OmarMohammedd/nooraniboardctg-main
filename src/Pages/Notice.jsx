import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Notice() {
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
                  <button
                    className="btn btn-sm btn-primary buttoonn"
                    type="submit"
                  >
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
                    <abbr title="November">Sep</abbr>
                  </span>
                  <span className="datestamp-day py-1">05</span>
                  <span className="sr-only">,</span>
                  <span className="datestamp-year badge text-muted border-top border-grey">
                    2023
                  </span>
                </div>
                <div className="date-body border-left p-3">
                  <h2 className="h4 date-title mt-0">
                    <Link to="/notice/onlaine-fi-prisodher-pddhti">
                      অনলাইনে ফি পরিশোধের পদ্ধতি
                    </Link>
                  </h2>
                  <div className="date-description">
                    <p className="mb-0">
                      অনলাইনে ফি পরিশোধের পদ্ধতিসমূহ ধাপে ধাপে ছবি আকারে বুজিয়ে
                      দেওয়া হল{" "}
                      <Link to="/notice/onlaine-fi-prisodher-pddhti">
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
                    <abbr title="November">Sep</abbr>
                  </span>
                  <span className="datestamp-day py-1">05</span>
                  <span className="sr-only">,</span>
                  <span className="datestamp-year badge text-muted border-top border-grey">
                    2023
                  </span>
                </div>
                <div className="date-body border-left p-3">
                  <h2 className="h4 date-title mt-0">
                    <Link to="/notice/onlaine-bi-oo-shtesnaree-pnz-kryer-pddhti">
                      অনলাইনে বই ও ষ্টেশনারী পণ্য ক্রয়ের পদ্ধতি
                    </Link>
                  </h2>
                  <div className="date-description">
                    <p className="mb-0">
                      অনলাইনে কিভাবে বই ও ষ্টেশনারী পণ্য ক্রয় করতে হয় সেটির
                      পদ্ধতি ধাপে ধাপে ছবি আকারে বুজিয়ে দে...{" "}
                      <Link to="/notice/onlaine-bi-oo-shtesnaree-pnz-kryer-pddhti">
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
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card date-card d-flex flex-row mb-4">
                <div className="datestamp small m-3">
                  <span className="datestamp-month badge rounded-0">
                    <abbr title="November">Mar</abbr>
                  </span>
                  <span className="datestamp-day py-1">31</span>
                  <span className="sr-only">,</span>
                  <span className="datestamp-year badge text-muted border-top border-grey">
                    2022
                  </span>
                </div>
                <div className="date-body border-left p-3">
                  <h2 className="h4 date-title mt-0">
                    <Link to="/notice/ofise-fon-krar-smy-smyer-prti-lksh-rakhar-onurudh-ril-hisab-bivag-01771-55500001322-891050snd-01322-89102001322-891040bi-bitrn-bivag-01322-891005-bi-bitrn-khucra-01322-891020">
                      সনদ ও পরিক্ষা-01322-891020,01322-891040,বই বিতরণ
                      বিভাগ-01322-891005 বই বিতরণ খুচরা-01322-891030 অফিসে ফোন
                      করার সময় সময়ের প্রতি লক্ষ্য রাখার অনুরোধ রইল।
                    </Link>
                  </h2>
                  <div className="date-description">
                    <p className="mb-0">
                      অফিসে ফোন করার সময় সময়ের প্রতি লক্ষ রাখার অনুরুধ
                      রইল।&nbsp;অফিস সময়: সকাল 10.00 মিনিট হতে...{" "}
                      <Link to="/notice/ofise-fon-krar-smy-smyer-prti-lksh-rakhar-onurudh-ril-hisab-bivag-01771-55500001322-891050snd-01322-89102001322-891040bi-bitrn-bivag-01322-891005-bi-bitrn-khucra-01322-891020">
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
                    <abbr title="November">Dec</abbr>
                  </span>
                  <span className="datestamp-day py-1">26</span>
                  <span className="sr-only">,</span>
                  <span className="datestamp-year badge text-muted border-top border-grey">
                    2021
                  </span>
                </div>
                <div className="date-body border-left p-3">
                  <h2 className="h4 date-title mt-0">
                    <Link to="/notice/snd-preekshar-uttrptr-pun-nireekshner-abedn-frmet">
                      সনদ পরীক্ষার উত্তরপত্র পুনঃ নিরীক্ষণের আবেদন ফরমেট
                    </Link>
                  </h2>
                  <div className="date-description">
                    <p className="mb-0">
                      {" "}
                      <Link to="/notice/snd-preekshar-uttrptr-pun-nireekshner-abedn-frmet">
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
                    <abbr title="November">Jul</abbr>
                  </span>
                  <span className="datestamp-day py-1">28</span>
                  <span className="sr-only">,</span>
                  <span className="datestamp-year badge text-muted border-top border-grey">
                    2021
                  </span>
                </div>
                <div className="date-body border-left p-3">
                  <h2 className="h4 date-title mt-0">
                    <Link to="/notice/sikshkder-prti-jruree-hedayat-nama">
                      শিক্ষকদের প্রতি জরুরী হেদায়াত নামা
                    </Link>
                  </h2>
                  <div className="date-description">
                    <p className="mb-0">
                      {" "}
                      <Link to="/notice/sikshkder-prti-jruree-hedayat-nama">
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
                    <abbr title="November">Jul</abbr>
                  </span>
                  <span className="datestamp-day py-1">28</span>
                  <span className="sr-only">,</span>
                  <span className="datestamp-year badge text-muted border-top border-grey">
                    2021
                  </span>
                </div>
                <div className="date-body border-left p-3">
                  <h2 className="h4 date-title mt-0">
                    <Link to="/notice/bi-oo-stesnaree-samgree-khucra-kryer-jnz-zogazog-krun-01991990453">
                      বই ও স্টেশনারী সামগ্রী (খুচরা) ক্রয়ের জন্য যোগাযোগ করুন #
                      01991990453,01322-891030
                    </Link>
                  </h2>
                  <div className="date-description">
                    <p className="mb-0">
                      নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ কর্তৃক
                      প্রকাশিত বই ও স্টেশনারী সামগ্রী (খুচ...{" "}
                      <Link to="/notice/bi-oo-stesnaree-samgree-khucra-kryer-jnz-zogazog-krun-01991990453">
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

export default Notice;
