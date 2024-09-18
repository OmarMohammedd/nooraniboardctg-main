/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Kendreey() {
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
                <div className="ribbon">
                  <span className="cursive_font line_height_1">
                    01<sup>st</sup> Apr 2022
                  </span>
                </div>
                <Link to="#">
                  <img
                    className="card-img-top"
                    src="../public/storage/event/kendreey-snd-preekshar-kendr-pridrsn-2020ing.jpg"
                    alt="Card image cap"
                  />
                </Link>
                <div className="card-body p-2 mt-4">
                  <h5 className="card-title text-center">
                    <Link className="text-center" to="#">
                      কেন্দ্রীয় সনদ পরীক্ষার কেন্দ্র পরিদর্শণ- ২০২০ইং
                    </Link>
                  </h5>
                  <p className="card-text" />
                  <p>
                    কেন্দ্রীয় সনদ পরীক্ষার কেন্দ্র পরিদর্শণ- ২০২০ইং, বোর্ড
                    প্রতিনিধি হিসেবে পরীক্ষা কেন্দ্র সমুহ পরিদর্শণ করেন, নূরানী
                    তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশের পরীক্ষা নিয়ন্ত্রক
                    হযরত মাও. নোমান ফয়জী সাহেব ও অন্যান্য বোর্ড প্রতিনিধিবৃন্দ
                    <br />
                  </p>
                  <p />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <h5 className="card-header custom_header">
                  <i className="fas fa-camera-retro" /> সাম্প্রতিক সভা/অনুষ্ঠান
                  <span className="float-right right_header">
                    <Link to="/event">
                      সকল অনুষ্ঠান <i className="fas fa-external-link-alt" />
                    </Link>
                  </span>
                </h5>
                <div className="card-body p-0">
                  <ul className="list-group event_list">
                    <Link
                      to="/event/purskar-bitrnee-sva-2020ing"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="image_div">
                        <img
                          className="mw-100 m-auto"
                          src="../public/storage/event/purskar-bitrnee-sva-2020ing.jpg"
                          alt="quixote"
                        />
                      </div>
                      <div className="title">
                        কেন্দ্রীয় সনদ পরীক্ষার ফলাফল অনুষ্ঠান সভা- 2023 ইং
                        <small className="badge badge-pill badge-info text-white">
                          25th Dec 2023
                        </small>
                      </div>
                    </Link>
                    <Link
                      to="/event/serpur-kendreey-karzzalyer-doya-oo-iftar-mahfile-ekangs"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="image_div">
                        <img
                          className="mw-100 m-auto"
                          src="../public/storage/event/serpur-kendreey-karzzalyer-doya-oo-iftar-mahfile-ekangs.jpg"
                          alt="quixote"
                        />
                      </div>
                      <div className="title">
                        শেরপুর কেন্দ্রীয় কার্যালয়ে দোয়া ও ইফতার মাহফিলের একাংশ
                        <small className="badge badge-pill badge-info text-white">
                          01st May 2022
                        </small>
                      </div>
                    </Link>
                    <Link
                      to="/event/prsikshne-kuran"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="image_div">
                        <img
                          className="mw-100 m-auto"
                          src="../public/storage/event/prsikshne-kuran.jpg"
                          alt="quixote"
                        />
                      </div>
                      <div className="title">
                        প্রশিক্ষণে কুরআন মাজীদের মাশক
                        <small className="badge badge-pill badge-info text-white">
                          28th Jul 2021
                        </small>
                      </div>
                    </Link>
                    <Link
                      to="/event/purskar-bitrn-onushtan-2020"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="image_div">
                        <img
                          className="mw-100 m-auto"
                          src="../public/storage/event/purskar-bitrn-onushtan-2020.jpg"
                          alt="quixote"
                        />
                      </div>
                      <div className="title">
                        পুরষ্কার বিতরনী অনুষ্ঠান 2020
                        <small className="badge badge-pill badge-info text-white">
                          02nd Feb 2021
                        </small>
                      </div>
                    </Link>
                    <Link
                      to="/event/preekshar-fl-prkas"
                      className="shadow-sm list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                    >
                      <div className="image_div">
                        <img
                          className="mw-100 m-auto"
                          src="../public/storage/event/preekshar-fl-prkas.jpg"
                          alt="quixote"
                        />
                      </div>
                      <div className="title">
                        পরীক্ষার ফল প্রকাশ
                        <small className="badge badge-pill badge-info text-white">
                          16th Jan 2021
                        </small>
                      </div>
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

export default Kendreey;
