/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function MemberL1() {
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
                  <span>মজলিশে আমেলা (কার্যকরী পরিষদ)</span>
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
                    <Link to="/member/maoolana-muftee-muhammd-alee-saheb-daba">
                      মাওলানা মুফ্তী মুহাম্মদ আলী সাহেব (দা.বা.)
                    </Link>
                  </h3>
                  <h4 className="title">
                    {" "}
                    সিনিয়র সহ-সভাপতি , পরীক্ষা নিয়ন্ত্রক{" "}
                  </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01815017619</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="../public/storage/member/maoolana-allama-khlil-ahmd-kasemee-daba.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-yahya-saheb-daba">
                      মাওলানা আল্লামা খলিল আহমদ কাসেমী (দা.বা.)
                    </Link>
                  </h3>
                  <h4 className="title"> চেয়ারম্যান </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01817792123</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="../public/storage/member/maoolana-muftee-jsim-uddeen-saheb-daba.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-muftee-jsim-uddeen-saheb-daba">
                      মাওলানা মুফ্তী জসিম উদ্দীন সাহেব (দা.বা.)
                    </Link>
                  </h3>
                  <h4 className="title"> মহাসচিব </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01817705992</Link>
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
                    <Link to="/member/hafej-maoolana-ismail-saheb-daba">
                      হাফেজ মাওলানা ইসমাইল সাহেব (দা.বা.)
                    </Link>
                  </h3>
                  <h4 className="title"> অর্থ নিয়ন্ত্রক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01817704569</Link>
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
                    <Link to="/member/maoolana-jmir-uddeen-saheb-daba">
                      মাওলানা জমির উদ্দীন সাহেব (দা.বা.)
                    </Link>
                  </h3>
                  <h4 className="title"> শিক্ষা সচিব </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01715486643(নিজ), 01322-891000 (অফিস)
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
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-meer-muhammd-anis-saheb-daba">
                      মাওলানা মীর মুহাম্মদ আনিস সাহেব (দা.বা.)
                    </Link>
                  </h3>
                  <h4 className="title"> পুস্তক সম্পাদক , যুগ্ম মহাসচিব </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01812947922(নিজ), 01322-891001 (অফিস)
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
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-mahmudul-hasan-saheb-daba">
                      মাওলানা মাহমুদুল হাসান সাহেব (দা.বা.)
                    </Link>
                  </h3>
                  <h4 className="title"> সহ-সভাপতি </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01815655546</Link>
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
                    <Link to="/member/hzrt-maoo-usman-fyjee-saheb">
                      হযরত মাও. উসমান ফয়জী সাহেব
                    </Link>
                  </h3>
                  <h4 className="title"> সহ-অর্থ নিয়ন্ত্রক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">0817-736281</Link>
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

export default MemberL1;
