import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Event() {
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

      <div class="container">
        <section>
          <div class="filter">
            <h2 class="filter_text">
              <span>ফিল্টার করুন :- </span>
            </h2>
            <form
              action="/event"
              method="get"
              className="has-validation-callback"
            >
              <div className="row">
                <div className="col-md-4">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    value=""
                    placeholder="টাইটেল দিয়ে সার্চ করুন"
                  />
                </div>
                <div className="col-md-3">
                  <span className="Zebra_DatePicker_Icon_Wrapper">
                    <input
                      type="text"
                      className="form-control start_date"
                      value=""
                      name="from_date"
                      placeholder="শুরুর তারিখ"
                      readOnly
                    />
                    {/* <button type="button" className="Zebra_DatePicker_Icon Zebra_DatePicker_Icon_Inside_Right">Pick a date</button> */}
                  </span>
                </div>
                <div className="col-md-3">
                  <span className="Zebra_DatePicker_Icon_Wrapper">
                    <input
                      type="text"
                      name="to_date"
                      className="form-control end_date"
                      value=""
                      placeholder="শেষের তারিখ"
                      readOnly
                    />
                    {/* <button type="button" className="Zebra_DatePicker_Icon Zebra_DatePicker_Icon_Inside_Right">Pick a date</button> */}
                  </span>
                </div>
                <div className="col-md-2 text-right ml-auto">
                  <button className="btn btn-sm btn-primary" type="submit">
                    সার্চ করুন
                  </button>
                </div>
              </div>
            </form>
          </div>
          <hr />
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="card-media">
                <div class="card-media-object-container">
                  <div
                    className="card-media-object"
                    style={{
                      backgroundImage:
                        "url('https://www.nooraniboardctg.com/public/storage/event/purskar-bitrnee-sva-2020ing.JPG')",
                    }}
                  ></div>
                  <span class="card-media-object-tag subtle">
                    25<sup>th</sup> Dec-2023
                  </span>
                </div>

                <div class="card-media-body">
                  <div class="card-media-body-top">
                    <Link
                      to="/event/purskar-bitrnee-sva-2020ing"
                      className="title font_weight500 d-inline-block font_size14"
                      style={{ lineHeight: "17px" }}
                    >
                      কেন্দ্রীয় সনদ পরীক্ষার ফলাফল অনুষ্ঠান সভা- 2023 ইং
                    </Link>
                  </div>
                  <span class="card-media-body-heading font_weight500 text-left">
                    নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ শিক্ষার্থীদের
                    লেখা-পাড়ার মান্নোয়নে বোর্ড কর্তুক পরিচালিত মাদরাসা সমূহের
                    সারাদেশে এক...
                  </span>

                  <div class="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
                    <Link
                      to="/event/purskar-bitrnee-sva-2020ing"
                      class="card-media-body-supporting-bottom-text card-media-link u-float-right"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="card-media">
                <div class="card-media-object-container">
                  <div
                    className="card-media-object"
                    style={{
                      backgroundImage:
                        "url('https://www.nooraniboardctg.com/public/storage/event/serpur-kendreey-karzzalyer-doya-oo-iftar-mahfile-ekangs.jpg')",
                    }}
                  ></div>
                  <span class="card-media-object-tag subtle">
                    01<sup>st</sup> May-2022
                  </span>
                </div>
                <div class="card-media-body">
                  <div class="card-media-body-top">
                    <Link
                      to="/event/serpur-kendreey-karzzalyer-doya-oo-iftar-mahfile-ekangs"
                      className="title font_weight500 d-inline-block font_size14"
                      style={{ lineHeight: "17px" }}
                    >
                      শেরপুর কেন্দ্রীয় কার্যালয়ে দোয়া ও ইফতার মাহফিলের একাংশ
                    </Link>
                  </div>
                  <span class="card-media-body-heading font_weight500 text-left"></span>

                  <div class="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
                    <Link
                      to="/event/serpur-kendreey-karzzalyer-doya-oo-iftar-mahfile-ekangs"
                      class="card-media-body-supporting-bottom-text card-media-link u-float-right"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="card-media">
                <div class="card-media-object-container">
                  <div
                    className="card-media-object"
                    style={{
                      backgroundImage:
                        "url('https://www.nooraniboardctg.com/public/storage/event/kendreey-snd-preekshar-kendr-pridrsn-2020ing.jpg')",
                    }}
                  ></div>{" "}
                  <span class="card-media-object-tag subtle">
                    01<sup>st</sup> Apr-2022
                  </span>
                </div>
                <div class="card-media-body">
                  <div class="card-media-body-top">
                    <Link
                      to="/event/kendreey-snd-preekshar-kendr-pridrsn-2020ing"
                      className="title font_weight500 d-inline-block font_size14"
                      style={{ lineHeight: "17px" }}
                    >
                      কেন্দ্রীয় সনদ পরীক্ষার কেন্দ্র পরিদর্শণ- ২০২০ইং
                    </Link>
                  </div>
                  <span class="card-media-body-heading font_weight500 text-left">
                    কেন্দ্রীয় সনদ পরীক্ষার কেন্দ্র পরিদর্শণ- ২০২০ইং, বোর্ড
                    প্রতিনিধি হিসেবে পরীক্ষা কেন্দ্র সমুহ পরিদর্শণ করেন, নূরানী
                    তা’লীমুল কুরআন...
                  </span>

                  <div class="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
                    <Link
                      to="/event/kendreey-snd-preekshar-kendr-pridrsn-2020ing"
                      class="card-media-body-supporting-bottom-text card-media-link u-float-right"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="card-media">
                <div class="card-media-object-container">
                  <div
                    className="card-media-object"
                    style={{
                      backgroundImage:
                        "url('https://www.nooraniboardctg.com/public/storage/event/prsikshne-kuran.jpg')",
                    }}
                  ></div>{" "}
                  <span class="card-media-object-tag subtle">
                    28<sup>th</sup> Jul-2021
                  </span>
                </div>
                <div class="card-media-body">
                  <div class="card-media-body-top">
                    <Link
                      to="/event/prsikshne-kuran"
                      className="title font_weight500 d-inline-block font_size14"
                      style={{ lineHeight: "17px" }}
                    >
                      প্রশিক্ষণে কুরআন মাজীদের মাশক
                    </Link>
                  </div>
                  <span class="card-media-body-heading font_weight500 text-left">
                    নূরানী আরবী প্রশিক্ষণে কুরআন মাজীদের মাশকরত মুয়াল্লিমবৃন্দ
                  </span>

                  <div class="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
                    <Link
                      to="/event/prsikshne-kuran"
                      class="card-media-body-supporting-bottom-text card-media-link u-float-right"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="card-media">
                <div class="card-media-object-container">
                  <div
                    className="card-media-object"
                    style={{
                      backgroundImage:
                        "url('https://www.nooraniboardctg.com/public/storage/event/purskar-bitrn-onushtan-2020.jpg')",
                    }}
                  ></div>{" "}
                  <span class="card-media-object-tag subtle">
                    02<sup>nd</sup> Feb-2021
                  </span>
                </div>
                <div class="card-media-body">
                  <div class="card-media-body-top">
                    <Link
                      to="/event/purskar-bitrn-onushtan-2020"
                      className="title font_weight500 d-inline-block font_size14"
                      style={{ lineHeight: "17px" }}
                    >
                      পুরষ্কার বিতরনী অনুষ্ঠান 2020
                    </Link>
                  </div>
                  <span class="card-media-body-heading font_weight500 text-left">
                    নূরানী কেন্দ্রীয় সনদ পরীক্ষার পুরস্কার বিতরণী সভায় মাননীয়
                    অতিথী মহোদয়ের কাছ থেকে পুরস্কার গ্রহণের ছবি।নূরানী তা’লীমুল
                    কুরআন বোর্ড...
                  </span>

                  <div class="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
                    <Link
                      to="/event/purskar-bitrn-onushtan-2020"
                      class="card-media-body-supporting-bottom-text card-media-link u-float-right"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
              <div class="card-media">
                <div class="card-media-object-container">
                  <div
                    className="card-media-object"
                    style={{
                      backgroundImage:
                        "url('https://www.nooraniboardctg.com/public/storage/event/preekshar-fl-prkas.jpg')",
                    }}
                  ></div>{" "}
                  <span class="card-media-object-tag subtle">
                    16<sup>th</sup> Jan-2021
                  </span>
                </div>
                <div class="card-media-body">
                  <div class="card-media-body-top">
                    <Link
                      to="/event/preekshar-fl-prkas"
                      className="title font_weight500 d-inline-block font_size14"
                      style={{ lineHeight: "17px" }}
                    >
                      পরীক্ষার ফল প্রকাশ
                    </Link>
                  </div>
                  <span class="card-media-body-heading font_weight500 text-left">
                    নূরানী কেন্দ্রীয় সনদ পরীক্ষার ফল প্রকাশ অনুষ্ঠানের খন্ড
                    ছিত্র
                  </span>

                  <div class="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
                    <Link
                      to="/event/preekshar-fl-prkas"
                      class="card-media-body-supporting-bottom-text card-media-link u-float-right"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <div
        class="modal fade"
        id="phone_modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <form
            onsubmit="return check_data_poridorshok()"
            action="/institute-register-online"
            method="get"
            class="has-validation-callback"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  প্রশিক্ষক ও পরিদর্শক এর ফরম
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label class="font-weight-bold">
                    প্রশিক্ষক ও পরিদর্শক এর মোবাইল নম্বর
                  </label>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        880
                      </span>
                    </div>
                    <input
                      id="p_phone"
                      type="number"
                      name="phone"
                      class="form-control"
                      placeholder="মোবাইল নম্বর দিন"
                    />
                  </div>
                </div>
                <div class="form-group" id="p_phone_err"></div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  বাতিল
                </button>
                <button type="submit" class="btn btn-primary">
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

export default Event;
