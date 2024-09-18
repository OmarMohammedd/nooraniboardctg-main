import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Permanent_center() {
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

      <div className="container bg-white pt-3">
        <section className="mt-4">
          <h3 className="text-center" style={{ fontWeight: 500 }}>
            স্থায়ী কার্যালয়ের তালিকা{" "}
          </h3>
          <hr />
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">
                    শেরপুর কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    দমদমা, কালিগঞ্জ, শেরপুর সদর, শেরপুর, ময়মনসিংহ
                  </h4>
                  <h4 className="inst_title"> ০১৩২২৮৯১০৩৯, ০১৮২১০১১১৭৯</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">
                    খুলনা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    সিটি বাইপাস রোড, মোস্তফা মোড়, হরিণটানা, খুলনা, খুলনা
                  </h4>
                  <h4 className="inst_title"> ০১৩২২৮৯১০২৫, ০১৯৯১৯৯০৪৪৭</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">
                    কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    রেল স্টেশন রোড, হাটহাজারী, হাটহাজারী, চট্টগ্রাম, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৭৭১৫৫৫০০০, ০১৩২২৮৯১০১০</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">
                    ঝিনাইদহ কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    ৯নং পোড়াহাটী, ঝিনাইদহ সদর, ঝিনাইদহ, খুলনা
                  </h4>
                  <h4 className="inst_title"> ০১৩২২৮৯১০৪৫,</h4>
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

export default Permanent_center;
