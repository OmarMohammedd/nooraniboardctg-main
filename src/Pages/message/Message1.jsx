import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Message1() {
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
                    <Link className="text-center" to="">
                      চেয়ারম্যান বার্তা
                    </Link>
                  </h5>
                  <div className="div">
                    <img
                      className="float-left img-rounded border m-3 ml-0"
                      style={{ maxWidth: 150 }}
                      src="https://nooraniboardctg.com/public/storage/member/maoolana-allama-khlil-ahmd-kasemee-daba.jpeg"
                      alt=""
                    />
                    <p className="card-text text-justify">
                      <b>
                        <span
                          style={{
                            color: "rgb(5, 5, 5)",
                            fontFamily:
                              '"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif',
                            fontSize: 15,
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "start",
                            textIndent: 0,
                            textTransform: "none",
                            whiteSpace: "pre-wrap",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(228, 230, 235)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            display: "inline !important",
                            float: "none",
                          }}
                        >
                          নুরানী তালীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশের
                          মুহতারাম চেয়ারম্যান
                        </span>
                      </b>
                    </p>
                    <h6>
                      <font color="#050505" face="Source Sans Pro">
                        <b>আল্লামা খলিল আহমদ কাসেমী (দা. বা.) এর দুআ ও বাণী</b>
                      </font>
                    </h6>
                    <p>
                      বিসমিল্লাহির রহমানির রহিম
                      <br />
                      নুরানী তালীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ এর সার্বিক
                      কার্যক্রম বিস্তৃতির লক্ষ্যে নতুন ওয়েবসাইট খোলা হচ্ছে। জেনে
                      প্রথমে আমি মহান আল্লাহ তায়া’লার দরবারে শোকরিয়া আদায় করছি
                      এবং বোর্ডের সকল কর্মকতা- কর্মচারী সহ সংশ্লিষ্ট সকলকে
                      আন্তরিক মোবারকবাদ ও অভিনন্দন জানাচ্ছি।
                    </p>
                    <p>
                      বর্তমান যুগ আধুনিক তথ্য প্রযুক্তির যুগ। বিজ্ঞানের উন্নতির
                      এ যুগে কুরআনের শিক্ষার প্রচার-প্রসার ও ইসলামের সুমহান
                      আদর্শকে তামাম পৃথিবীর মানুষের সামনে তুলে ধরতে টেকনোলজি ও
                      মিডিয়া ব্যবহারের বিকল্প নেই। বর্তমান সময়ে আধুনিক প্রযুক্তি
                      ব্যবহার করে অল্প সময়ে, অল্প কষ্টে অসংখ্য মানুষের কাছে
                      দ্বীনের দাওয়াত প্রচার করা যায়। তবে দুঃখজনক হলেও সত্য যে,
                      আধুনিক তথ্য প্রযুক্তি ব্যবহারে আমাদের উপস্থিতি তুলনামূলক
                      কম হওয়ায় ইসলাম বিরোধী অপশক্তি তথ্য প্রযুক্তির অপব্যবহার
                      করে কুরআনের শিক্ষার বন্ধের পায়তারা, ইসলামের বিরুদ্ধে
                      অপপ্রচার ও প্রোপ্যাগান্ডা ছড়ানো, তরুণ প্রজন্মকে বিপদগামী
                      করা সহ বহুমুখী ষড়যন্ত্র করে যাচ্ছে। তাই ইসলামের দাওয়াত এবং
                      কুরআন-সুন্নাহ অনুযায়ী মানুষের চরিত্র গঠনের নিয়তে আলেম
                      সমাজকে আধুনিক তথ্য প্রযুক্তির সঠিক ব্যবহারে আরো বেশি
                      অগ্রগামী হতে হবে।
                    </p>
                    <p>
                      স্বল্প সময়ে কচিকাঁচা বাচ্চাদের বিশুদ্ধভাবে কুরআনের
                      তিলাওয়াত ও জরুরী মাসআলা-মাসায়েল শিক্ষা দেওয়ার একটি সফল
                      পদ্ধতি হলো এই নুরানী পদ্ধতি। বর্তমান সময়ে এই নুরানী
                      পদ্ধতির মাধ্যমে দেশব্যাপী কুরআনের শিক্ষার বিশাল খিদমাত
                      হচ্ছে। নুরানীর মাধ্যমে সর্বত্র কুরআনের শিক্ষা ছড়িয়ে পড়ছে।
                    </p>
                    <p>
                      নূরানী তালীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ হাটহাজারী
                      মাদরাসার অধীনে পরিচালিত একটি উন্নতমানের আদর্শ বোর্ড। এ
                      বোর্ডের সিলেবাস তথা পাঠ্যসূচির রয়েছে স্বতন্ত্র বৈশিষ্ট্য।
                      বোর্ডের অধীনে পরিচালিত মাদরাসা সমূহে ইসলামিক ও আধুনিক
                      শিক্ষার সমন্বিত সময়োপযোগী সিলেবাসে পাঠদান করা হয়। পড়ালেখার
                      মানোন্নয়ন থাকায় পুরো দেশে এ বোর্ডের সুনাম ও সুখ্যাতি
                      রয়েছে।
                    </p>
                    <p>
                      আধুনিক বিশ্বে দ্বীনি দাওয়াতের অন্যতম একটি মাধ্যম ওয়েবসাইট।
                      ওয়েবসাইটের মাধ্যমে দ্বীনের বহুমুখী খিদমাত হচ্ছে। দ্বীনি
                      দাওয়াতের উদ্দেশ্যে নুরানী তালীমুল কুরআন বোর্ড চট্টগ্রাম
                      বাংলাদেশ- এর এ ওয়েবসাইট খোলা হয়েছে।
                    </p>
                    <p>
                      কুরআনের শিক্ষার প্রচার-প্রসার, দেশব্যাপী পরিচালিত বোর্ডের
                      নানা কার্যক্রম, বোর্ড সংক্রান্ত একান্ত প্রয়োজনীয় তথ্যাদি
                      সহ সংশ্লিষ্ট বিষয়াবলী এ ওয়েবসাইটে তুলে ধরা হবে। আমি
                      আশাকরি, এই ওয়েবসাইটের মাধ্যমে আমাদের বোর্ডের চলমান
                      কার্যক্রম আরো বিস্তৃতি লাভ করবে, ইন শা আল্লাহ।
                    </p>
                    <p>আল্লাহ তায়া’লা আমাদের সকলকে কবুল করুন, আমিন।</p>
                    <p>
                      <b>
                        <span
                          style={{
                            color: "rgb(5, 5, 5)",
                            fontFamily:
                              '"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif',
                            fontSize: 15,
                            fontStyle: "normal",
                            fontVariantLigatures: "normal",
                            fontVariantCaps: "normal",
                            fontWeight: 400,
                            letterSpacing: "normal",
                            orphans: 2,
                            textAlign: "start",
                            textIndent: 0,
                            textTransform: "none",
                            whiteSpace: "pre-wrap",
                            widows: 2,
                            wordSpacing: 0,
                            WebkitTextStrokeWidth: 0,
                            backgroundColor: "rgb(228, 230, 235)",
                            textDecorationStyle: "initial",
                            textDecorationColor: "initial",
                            display: "inline !important",
                            float: "none",
                          }}
                        >
                          বিনীত -
                        </span>
                      </b>
                    </p>
                    <p>
                      <font color="#050505">
                        <b>আল্লামা খলিল আহমদ কাসেমী (দা: বা:)</b>
                      </font>
                      <br />
                      <span
                        style={{
                          color: "rgb(5, 5, 5)",
                          fontFamily:
                            '"Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif',
                          fontSize: 15,
                          fontStyle: "normal",
                          fontVariantLigatures: "normal",
                          fontVariantCaps: "normal",
                          fontWeight: 400,
                          letterSpacing: "normal",
                          orphans: 2,
                          textAlign: "start",
                          textIndent: 0,
                          textTransform: "none",
                          whiteSpace: "pre-wrap",
                          widows: 2,
                          wordSpacing: 0,
                          WebkitTextStrokeWidth: 0,
                          backgroundColor: "rgb(228, 230, 235)",
                          textDecorationStyle: "initial",
                          textDecorationColor: "initial",
                          display: "inline !important",
                          float: "none",
                        }}
                      >
                        ১লা ডিসেম্বর ২০২3 ইংরেজি <br />
                      </span>
                    </p>
                    <p />
                    <p>
                      <Link to="/member/maoolana-yahya-saheb-daba">
                        মাওলানা আল্লামা খলিল আহমদ কাসেমী (দা.বা.)
                      </Link>
                      <br />
                      চেয়ারম্যান
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card chairman_card">
                <h5 className="card-header custom_header">
                  <i className="fas fa-envelope" /> মহাসচিব বার্তা{" "}
                </h5>
                <div className="card-body d-inline-block">
                  <div className="float-left w-25 mr-2">
                    <img
                      className="rounded w-100"
                      src="https://nooraniboardctg.com/public/storage/member/maoolana-muftee-jsim-uddeen-saheb-daba.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="text-justify card-content">
                    <Link to="/message/2">বিস্তারিত</Link>
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
            className="has-validation-callback"
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

export default Message1;
