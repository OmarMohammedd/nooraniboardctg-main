import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function MeneC() {
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
            <div className="col-md-8">
              <div className="card event_card event_card_details">
                <div className="card-body p-4 mt-4">
                  <h5 className="card-title text-center">
                    <Link className="text-center" to="#">
                      মেনে চলতে পারি
                    </Link>
                  </h5>
                  <p className="card-text text-justify" />
                  <p style={{ textAlign: "center" }}>(শিক্ষক এবং অভিভাবকগণ)</p>
                  <p style={{ textAlign: "center" }}>শিশুকে</p>
                  <p style={{ textAlign: "center" }}>
                    ভুল শেখাবেন না<span style={{ whiteSpace: "pre" }}> </span>
                    &nbsp; &nbsp; সঠিক শেখাবেন
                  </p>
                  <p style={{ textAlign: "center" }}>
                    লোভ দেখাবেন না<span style={{ whiteSpace: "pre" }}> </span>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; পুরস্কার দেবেন
                  </p>
                  <p style={{ textAlign: "center" }}>
                    নিরুৎসাহিত করবেন না&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;উৎসাহিত
                    করবেন
                  </p>
                  <p style={{ textAlign: "center" }}>
                    বকুনি দেবেন না<span style={{ whiteSpace: "pre" }}> </span>
                    &nbsp; &nbsp;উপদেশ দেবেন
                  </p>
                  <p style={{ textAlign: "center" }}>
                    বে-আদব বলবেন না<span style={{ whiteSpace: "pre" }}> </span>
                    &nbsp; &nbsp;আদব শেখাবেন
                  </p>
                  <p style={{ textAlign: "center" }}>
                    নিঃসঙ্গ রাখবেন না
                    <span style={{ whiteSpace: "pre" }}> </span>
                    সৎসঙ্গ দেবেন
                  </p>
                  <p style={{ textAlign: "center" }}>
                    লজ্জা দেবেন না<span style={{ whiteSpace: "pre" }}> </span>
                    &nbsp; &nbsp; &nbsp; &nbsp; শিখিয়ে দেবেন
                  </p>
                  <p style={{ textAlign: "center" }}>
                    ধমক দেবেন না<span style={{ whiteSpace: "pre" }}> </span>
                    &nbsp; &nbsp; &nbsp;বুঝতে দেবেন
                  </p>
                  <p style={{ textAlign: "center" }}>
                    মিথ্যা বলবেন না<span style={{ whiteSpace: "pre" }}> </span>
                    &nbsp; &nbsp; সত্য বলবেন
                  </p>
                  <p style={{ textAlign: "center" }}>
                    গালি দেবেন না<span style={{ whiteSpace: "pre" }}> </span>
                    &nbsp; &nbsp; স্নেহ
                    <span style={{ fontSize: "0.875rem" }}>&nbsp;করবেন</span>
                  </p>
                  <p style={{ textAlign: "center" }}>
                    নিন্দা করবেন না<span style={{ whiteSpace: "pre" }}> </span>
                    &nbsp; &nbsp; &nbsp; &nbsp;ভালোবাসবেন
                  </p>
                  <p style={{ textAlign: "center" }}>
                    অবহেলা করবেন না&nbsp; &nbsp; &nbsp; &nbsp;গুরুত্ব দেবেন
                  </p>
                  <p style={{ textAlign: "center" }}>
                    হিংসা করবেন না<span style={{ whiteSpace: "pre" }}> </span>
                    চেষ্টা করবেন
                  </p>
                  <div style={{ textAlign: "center" }}>
                    <br />
                  </div>
                  <p />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h5 className="card-header custom_header">
                  <i className="fas fa-file" /> অন্যান্য পেইজ-সমূহ
                </h5>
                <div className="card-body p-0">
                  <ul className="list-group event_list page_list">
                    <Link
                      to="/page/prsikshne-ongsgrhner-niymablee"
                      className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
                    >
                      <div className="image_div" style={{ maxWidth: 30 }}>
                        <img
                          className="mw-100"
                          src="https://nooraniboardctg.com/public/assets/notice.png"
                          alt="quixote"
                        />
                      </div>
                      <div className="title d-inline-block">
                        প্রশিক্ষণে অংশগ্রহণের নিয়মাবলী
                      </div>
                    </Link>
                    <Link
                      to="/page/chatr-chatreeder-krneey"
                      className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
                    >
                      <div className="image_div" style={{ maxWidth: 30 }}>
                        <img
                          className="mw-100"
                          src="https://nooraniboardctg.com/public/assets/notice.png"
                          alt="quixote"
                        />
                      </div>
                      <div className="title d-inline-block">
                        ছাত্র-ছাত্রীদের করণীয়
                      </div>
                    </Link>
                    <Link
                      to="/page/muyallim-prsikshn-bangla"
                      className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
                    >
                      <div className="image_div" style={{ maxWidth: 30 }}>
                        <img
                          className="mw-100"
                          src="https://nooraniboardctg.com/public/assets/notice.png"
                          alt="quixote"
                        />
                      </div>
                      <div className="title d-inline-block">
                        মুয়াল্লিম প্রশিক্ষণ (বাংলা)
                      </div>
                    </Link>
                    <Link
                      to="/page/ovivabker-dayitw"
                      className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
                    >
                      <div className="image_div" style={{ maxWidth: 30 }}>
                        <img
                          className="mw-100"
                          src="https://nooraniboardctg.com/public/assets/notice.png"
                          alt="quixote"
                        />
                      </div>
                      <div className="title d-inline-block">
                        অভিভাবকের দায়িত্ব
                      </div>
                    </Link>
                    <Link
                      to="/page/bord-priciti"
                      className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
                    >
                      <div className="image_div" style={{ maxWidth: 30 }}>
                        <img
                          className="mw-100"
                          src="https://nooraniboardctg.com/public/assets/notice.png"
                          alt="quixote"
                        />
                      </div>
                      <div className="title d-inline-block">বোর্ড পরিচিতি</div>
                    </Link>
                    <Link
                      to="/page/muyallim-prsikshn-arbee"
                      className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
                    >
                      <div className="image_div" style={{ maxWidth: 30 }}>
                        <img
                          className="mw-100"
                          src="https://nooraniboardctg.com/public/assets/notice.png"
                          alt="quixote"
                        />
                      </div>
                      <div className="title d-inline-block">
                        মুয়াল্লিম প্রশিক্ষণ (আরবী)
                      </div>
                    </Link>
                    <Link
                      to="/page/amader-karzkrm"
                      className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
                    >
                      <div className="image_div" style={{ maxWidth: 30 }}>
                        <img
                          className="mw-100"
                          src="https://nooraniboardctg.com/public/assets/notice.png"
                          alt="quixote"
                        />
                      </div>
                      <div className="title d-inline-block">
                        আমাদের কার্যক্রম
                      </div>
                    </Link>
                    <Link
                      to="/page/bisesh-jruree-pramrs-madrasa-dui-belaek-bela-prsngoe"
                      className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
                    >
                      <div className="image_div" style={{ maxWidth: 30 }}>
                        <img
                          className="mw-100"
                          src="https://nooraniboardctg.com/public/assets/notice.png"
                          alt="quixote"
                        />
                      </div>
                      <div className="title d-inline-block">বিশেষ পরামর্শ</div>
                    </Link>
                  </ul>
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

export default MeneC;
