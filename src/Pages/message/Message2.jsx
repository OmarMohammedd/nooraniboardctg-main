import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Message2() {
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
                      মহাসচিব বার্তা
                    </Link>
                  </h5>
                  <div className="div">
                    <img
                      className="float-left img-rounded border m-3 ml-0"
                      style={{ maxWidth: 150 }}
                      src="https://nooraniboardctg.com/public/storage/member/maoolana-muftee-jsim-uddeen-saheb-daba.jpeg"
                      alt=""
                    />
                    <p className="card-text text-justify" />
                    <p>
                      <Link to="/member/maoolana-muftee-jsim-uddeen-saheb-daba">
                        মাওলানা মুফ্তী জসিম উদ্দীন সাহেব (দা.বা.)
                      </Link>
                      <br />
                      মহাসচিব
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card chairman_card">
                <h5 className="card-header custom_header">
                  <i className="fas fa-envelope" /> চেয়ারম্যান বার্তা{" "}
                </h5>
                <div className="card-body d-inline-block">
                  <div className="float-left w-25 mr-2">
                    <img
                      className="rounded w-100"
                      src="https://nooraniboardctg.com/public/storage/member/maoolana-allama-khlil-ahmd-kasemee-daba.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text-justify card-content">
                    নুরানী তালীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশের মুহতারাম
                    চেয়ারম্যানআল্লামা খলিল আহমদ কাসেমী (দা. বা.) এর দুআ ও বাণী
                    বিসমিল্লাহির রহমানির রহিম নুরানী তালীমুল কুরআন বোর্ড
                    চট্টগ্রাম বাংলাদেশ এর সার্বিক কার্যক্রম বিস্তৃতির লক্ষ্যে
                    নতুন ওয়েবসাইট খোলা হচ্ছে জেনে প্রথমে আমি মহান আল্লাহ
                    তায়া’লার দরবারে শোকরিয়া আদায় করছি এবং বোর্ডের সকল কর্মকতা-
                    কর্মচারী সহ সংশ্লিষ্ট সকলকে আন্তরিক মোবারকবাদ ও অভিনন্দন
                    জানাচ্ছি। বর্তমান যুগ আধুনিক তথ্য প্রযুক্তির যুগ। বিজ্ঞানের
                    উন্নতির এ যুগে কুরআনের শিক্ষার প...
                    <Link to="/message/1">বিস্তারিত</Link>
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

export default Message2;
