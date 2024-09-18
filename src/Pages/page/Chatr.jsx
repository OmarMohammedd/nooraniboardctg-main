import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Chatr() {
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
                      ছাত্র-ছাত্রীদের করণীয়
                    </Link>
                  </h5>
                  <p className="card-text text-justify" />
                  <p className="MsoNormal">
                    ⮚&nbsp;উস্তাদগণের দিক নির্দেশনা অনুযায়ী মেহনত করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;দৈনিক হাতের লেখা সহ বাড়ির কাজ (হোম ওয়ার্ক) সমূহ করে
                    আসা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;মৌখিক বিষয়গুলো বাড়িতে বার বার পড়া।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;প্রত্যেক ছাত্র/ছাত্রী ক্লাস শুরু হওয়ার ১৫মিনিট পূর্বে
                    মাদ্রাসায় উপস্থিত হওয়া।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;প্রতিদিন নিয়মিত ক্লাসে উপস্থিত থাকা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;পরিষ্কার পরিচ্ছন্ন পোষাক পরিধান করে মাদ্রাসায় আসা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;দৈনিক নিয়মিত কুরআন তেলাওয়াতসহ পাঁচ ওয়াক্ত নামাজের পর
                    ফাজায়েলের সূরাগুলো তেলাওয়াত করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;ছুটি ব্যতিত মাদ্রাসায় অনুপস্থিত থাকলে মাদ্রাসা
                    কর্তৃপক্ষের প্রদত্ত যে কোন শাস্তি মেনে নেওয়া।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;চক, শ্লেট, ডাষ্টার, খাতা ও কলম ইত্যাদি শেষ হয়ে যাওয়ার
                    পূর্বে অভিভাবককে অবগত করে সংগ্রহ করে নেওয়া। <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;সহপাঠিদের সাথে সুন্দর ও শালীন আচরণ করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;ছোট বড় সবাইকে সালাম করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;একে অপরের সাথে ঝগড়া-বিবাদ না করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;রাস্তার ডান পাশ দিয়ে চলা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;সবসময় সত্য কথা বলা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;কাহারো কোন জিনিসপত্র অনুমতি ছাড়া না ধরা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;সুন্নাত মোতাবেক পোষাক পরিধান করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;পাঁচ ওয়াক্ত নামাজ যথা সময়ে আদায় করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;ইচ্ছাকৃতভাবে এক ওয়াক্ত নামাজও ক্বাযা না করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;পেশাব-পায়খানার সময় ঢিলা/কুলুক ও পানি ব্যবহার করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;সব সময় পরিষ্কার পরিচ্ছন্ন থাকা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;বিনা কারণে কখনো দাঁড়িয়ে পেশাব না করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;শরীয়ত মোতাবেক উস্তাদ, মা, বাবা ও মুরুব্বীগণের কথা
                    মেনে চলা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;ওজু করার আগে মিসওয়াক করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;চলতে ফিরতে মাসনূন দোয়াগুলি আদায় করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;প্রত্যেক ভালো কাজ শুরু করতে বিসমিল্লাহ্ বলে শুরু করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;টিভি, সিনেমা নাচ-গান ইত্যাদি কখনো না দেখা বা না শুনা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮚&nbsp;সদা সর্বদা সুন্নাত মোতাবেক জীবন-যাপন করা।
                    <p />
                  </p>
                  <p className="MsoNormal"></p>
                  <p className="MsoNormal">
                    ⮚&nbsp;শরীয়ত বিরোধী কোন অনুষ্ঠানে না যাওয়া।
                    <p />
                  </p>
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

export default Chatr;
