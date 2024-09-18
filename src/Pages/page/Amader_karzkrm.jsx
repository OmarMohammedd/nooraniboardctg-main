import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Amader_karzkrm() {
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
                      আমাদের কার্যক্রম
                    </Link>
                  </h5>
                  <p className="card-text text-justify" />
                  <p align="justify">
                    <b>
                      <font face="Arimo, sans-serif" color="#303030">
                        <span style={{ fontSize: "15.008px" }}>কার্যক্রম:</span>
                      </font>
                    </b>
                  </p>
                  <p align="justify">
                    <b>
                      <font face="Arimo, sans-serif" color="#303030">
                        <span style={{ fontSize: "15.008px" }}>
                          * কার্যক্ষত্রে:{" "}
                        </span>
                      </font>
                    </b>
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        <font face="Arimo, sans-serif" color="#303030">
                          <span style={{ fontSize: "15.008px" }}>কার্য</span>
                        </font>
                        ক্রম সমগ্র বাংলাদশে।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        <b>* প্রতিষ্ঠা সন:</b> জানুয়ারী ১৯৯৫ সন হতে শুরু।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        <b>* লক্ষ্য ও উদ্দশ্যে:</b>
                        <br />
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ০১। প্রত্যকে মুসলমান এবং তাদের সন্তানদেরকে বিশুদ্ধ
                        কুরআন, ইসলামী দ্বীনি তাহযীব, তামাদ্দুন সম্পর্কে শিক্ষা
                        দেওয়া।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ০২। সঠিক আক্বীদা এবং দ্বীনি শিক্ষার প্রচার ও প্রসার করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ০৩। কুরআন-হাদীস, মাসায়লে এবং যুগোপযুগী বাংলা, গণিত,
                        ইংরেজী শিক্ষার ব্যবস্থা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        <b>* কর্মসূচী:</b>
                        <br />
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ০১। সমগ্র বাংলাদেশের প্রতি তিন মাইল অন্তর বা জরুরী
                        স্থানে “নূরানী তা’লীমুল কুরআন মাদ্রাসা” প্রতিষ্ঠা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ০২। প্রত্যেকটি নূরানী মাদ্রাসায় পাঠ্যসূচী মোতাবকে
                        শিক্ষার ব্যবস্থা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ০৩। পাঠদানের জন্য পাঠ্য বিষয় নির্ধারণ এবং মুদ্রণের
                        ব্যবস্থা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ০৪। প্রতিটি নূরানী মাদ্রাসার শিক্ষা ব্যবস্থা পরিদর্শন
                        পূর্বক রিপোর্ট প্রদান এবং সমস্যা নিরসনে জরুরী পদক্ষেপ
                        গ্রহণ করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ০৫। প্রতিটি নূরানী মাদ্রাসায় শিক্ষক নিয়োগ বিশেষ প্রয়োজনে
                        শিক্ষক পরিবর্তন বা অপসারণের ব্যবস্থা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ০৬। প্রতিটি নূরানী মাদ্রাসায় পাঠ্যপুস্তক সরবরাহের
                        ব্যবস্থা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ০৭। কেন্দ্রীয়ভাবে পরীক্ষা গ্রহণের ব্যবস্থা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ০৮। যোগ্য মুয়াল্লিম থৈরির উদ্দেশ্যে প্রশিক্ষণ বা জোড়ের
                        ব্যবস্থা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ০৯। বিভিন্ন সময়ে আরবী, বাংলা ও ইংরজেী বিষয়ে বিশেষ বিশেষ
                        প্রশিক্ষণের ব্যবস্থা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ১০। জলো বা অঞ্চল ভত্তিকি মুয়াল্লমি জোড়রে ব্যবস্থা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ১১। বভিন্নি সময়ে নূরানী মাদ্রাসার পরচিালকদরে জোড়রে
                        ব্যবস্থা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ১২। পরীক্ষায় কৃতিত্ব অর্জনকারী ছাত্র-ছাত্রীদের
                        উৎসাহ-উদ্দীপনার উদ্দেশ্যে বিশেষ পুরস্কারের ব্যবস্থা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        ১৩। প্রশিক্ষণে এবং বিভিন্ন মাদ্রাসায় পাঠদানের কৃতিত্ব
                        র্অজনকারী মুয়াল্লিমদেরকে উৎসাহ-উদ্দীপনার উদ্দেশ্যে বিশেষ
                        পুরস্কারের ব্যবস্থা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        <br />
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <b>
                      <font face="Arimo, sans-serif" color="#303030">
                        <span style={{ fontSize: "15.008px" }}>
                          প্রতিষ্ঠানের লক্ষ্য:
                        </span>
                      </font>
                    </b>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        (ক) সমগ্র বাংলাদেশ ব্যাপী প্রতি দুই মাইল অন্তর অন্তর বা
                        প্রয়োজনীয় স্থানে নূরানী তালীমুল কুরআন মাদ্রাসা প্রতিষ্ঠা
                        করা, যাতে করে প্রত্যেক অঞ্চলের প্রত্যেক মুসলমান তাঁর
                        সন্তানকে দ্বীন ও কুরআনের শিক্ষা দিতে পারে।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        (খ) প্রতিষ্ঠিত মাদ্রাসাগুলোর শিক্ষার উন্নতি ও মাদ্রাসার
                        কার্যক্রম সুষ্ঠভাবে পরিচালনার জন্য বোর্ডের নিয়ম অনুযায়ী
                        পরিদর্শন/পড়াশোনা দেখাশুনা করা ও সু-পরামর্শ করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        (গ) বিভিন্ন মাদ্রাসায় শিক্ষক নিয়োগ, অপসারণসহ যে কোন
                        সমস্যা ও দুর্যোগে মাদ্রাসা কর্তৃপক্ষকে পরামর্শসহ বিভিন্ন
                        বিষয়ে সহযোগিতা করা।
                      </span>
                    </font>
                  </p>
                  <p align="justify">
                    <font face="Arimo, sans-serif" color="#303030">
                      <span style={{ fontSize: "15.008px" }}>
                        (ঘ) সঠিক আকিদা ভিত্তিক দ্বীনি ও সাধারণ শিক্ষার প্রচার ও
                        প্রসার ঘটানো
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

export default Amader_karzkrm;
