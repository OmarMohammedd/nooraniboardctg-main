import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Belaek() {
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
                      বিশেষ পরামর্শ
                    </Link>
                  </h5>
                  <p className="card-text text-justify" />
                  <p>
                    <b>
                      বিশেষ জরুরী পরামর্শ: (মাদ্রাসা দুই বেলা/এক বেলা প্রসঙ্গে)
                    </b>
                    <br />
                  </p>
                  <p>
                    নূরানী পদ্ধতির প্রবর্তক পীরে কামেল জনাব হযরত মাও. ক্বারী
                    বেলায়েত হুসাইন সাহেব (রহ.) ও নূরানী তা’লীমুল কুরআন বোর্ড
                    চট্টগ্রাম বাংলাদেশ এর মুরুব্বীগণ যুগ যুগ ধরে গবেষণার মাধ্যমে
                    নূরানী পদ্ধতি ও মুসলমানদের কচি-কাঁচা সন্তানদের জন্য একটি
                    পূর্ণাঙ্গ সিলেবাস এবং নীতিমালা প্রণয়ন করছেন। হযরতজ্বীর
                    অভিজ্ঞতা ও গবেষণার আলোকে নূরানীর ক্লাস টাইম দুইবেলা করছেন।
                    কিন্তু আজকাল আমরা বিভিন্ন কিন্ডার গার্টেন বা মুষ্টিমেয়
                    দু’একটি মাদ্রাসার দিকে দেখে এক বেলা করার আগ্রহ ও পরামর্শ
                    দিয়ে থাকি, যাহা ছোট ছোট ছেলে-মেয়েদের জন্য অত্যান্ত কষ্টকর ও
                    ক্ষতি ছাড়া আর কিছুই নয়।
                  </p>
                  <p>
                    আমাদের উপলব্ধি করতে হবে, একটা ছোট কচি সন্তান একাধারে কত
                    ঘন্টা তার মস্তিষ্কে ধারণ ক্ষমতা থাকতে পারে এবং তার সিলেবাস
                    কতটুকু পরিমাণ। মনে রাখতে হবে, কিন্ডার গার্টেন বা স্কুল এর
                    ন্যায় নূরানীতে বাংলা, গণিত, ইংরেজী, সমাজ, বিজ্ঞান বিষয়াদী
                    ছাড়াও পাশাপাশি আরো অনেক বিষয় রয়েছে। যেমন: কালিমা, মাসায়িল,
                    হাদীস, মাখরাজ, তাজবীদ (আরবী গ্রামার), কুরআন, আরবী লেখা,
                    ফাযায়েলের সূরা মুখস্ত, আসমাউল হুসনা, আকায়েদ ইত্যাদি। এতো
                    বিশাল সিলেবাস এক নাগাড়ে বিরতিহীন ভাবে পাঠদান দেওয়া-নেওয়া
                    উভয়ের মস্তিষ্ক ও স্বাস্থ্যের জন্য খুবই ক্ষতিকর।
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    অতএব, দুই বেলার মধ্যে লেখা-পড়ার মানোন্নয়ণ, পরিবেশের জন্য
                    যথেষ্ট ফায়দা ও মস্তিষ্ক সুস্থ থাকে, রৌদ্র তাপ থেকেও নিরাপদ
                    থাকে। সুতরাং লেখা-পড়ার মানোন্নয়ন এবং আপনার সন্তানের শারীরিক
                    সুস্থতা উভয় দিকে লক্ষ্য রাখা এবং লেখা-পড়ার সাফল্য ও সার্থক
                    কামনা করা প্রত্যেক সচেতন অভিভাবকের দায়িত্ব। অনেক অভিভাবক বলে
                    থাকেন, মাদ্রাসা দুরে হওয়াতে দুপুরে বাড়িতে আসা ও পূণরায়
                    মাদ্রাসা যাওয়া খুব কষ্টকর হয়ে পড়ে। বোর্ডের পক্ষ থেকে উক্ত
                    অভিযোগ কারীগণদের প্রতি পরামর্শ হল আপনাদের সন্তানকে সকালে
                    মাদ্রাসায় পাঠানোর সময় দুপুরের খানা একটি টিফিন বাটি করে
                    পাঠিয়ে দিবেন। তারা দুপুরের খানা মাদ্রাসায় খেয়ে এক দেড় ঘন্টা
                    বিশ্রাম নিতে পারবে, এটা তাদের শরীরের জন্য খুব ভাল হবে। তাই
                    প্রত্যেক মাদ্রাসার ক্লাসের সময় দুই বেলা করার অনুরোধ থাকল।
                  </p>
                  <div>
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
                      to="/page/mene-clte-pari"
                      className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
                    >
                      <div className="image_div" style={{ maxWidth: 30 }}>
                        <img
                          className="mw-100"
                          src="https://nooraniboardctg.com/public/assets/notice.png"
                          alt="quixote"
                        />
                      </div>
                      <div className="title d-inline-block">মেনে চলতে পারি</div>
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

export default Belaek;
