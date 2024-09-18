import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Ovivabker_dayitw() {
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
                      অভিভাবকের দায়িত্ব
                    </Link>
                  </h5>
                  <p className="card-text text-justify" />
                  <p className="MsoNormal">
                    ⮞সন্তানকে প্রতিদিন নিয়মিত মাদ্রাসায় উপস্থিত থাকা নিশ্চিত
                    করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮞সন্তানের দৈনন্দিন হাতের লেখা বাড়িতে গাইড দিয়ে লেখানো।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮞পাঁচ ওয়াক্ত নামাজ আদায় করানো।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮞নামাজের পর ফাজায়েলের সূরাসমূহ তিলাওয়াত করানো।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮞পরিষ্কার পরিচ্ছন্ন পোষাক পরিধান করিয়ে মাদ্রাসায় পাঠানো।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮞চক-শ্লেট, খাতা-কলম ইত্যাদি শেষ হওয়ার আগেই সংগ্রহ করে দেওয়া।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮞সাধারণ কোন সমস্যার জন্য মাদ্রাসায় অনুপস্থিত না রাখা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮞কোন গ্রহণযোগ্য কাজের জন্য ছুটির প্রয়োজন হলে অভিভাবকের পক্ষ
                    থেকে দরখাস্ত অথবা সরাসরি মাদ্রাসায় এসে ছুটি মঞ্জুর করে
                    নেওয়া।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮞আল্লাহ না করুন কোন ছাত্র-ছাত্রী অসুস্থ হলে মাদ্রাসার শিক্ষক
                    মহোদয়কে অবগত করানো।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮞মাদ্রাসার সাথে সু-সম্পর্ক বজায় রাখা ও মাদ্রাসার আইন-কানুনকে
                    শ্রদ্ধা করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮞মাদ্রাসা কর্তৃপক্ষ ও শিক্ষক মহোদয়গণের সঙ্গে সুন্দর আচরণ
                    করা।
                    <p />
                  </p>
                  <p className="MsoNormal">
                    ⮞নিজ দায়িত্বে সন্তানকে মাদ্রাসায় পৌঁছে দেওয়া এবং ছুটি শেষে
                    মাদ্রাসা থেকে নিয়ে যাওয়া।
                    <font face="SolaimanLipi">
                      <span style={{ fontSize: "14pt" }}>
                        <p />
                      </span>
                    </font>
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

export default Ovivabker_dayitw;
