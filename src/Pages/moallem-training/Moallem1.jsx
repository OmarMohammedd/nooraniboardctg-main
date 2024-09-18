import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Moallem1() {
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
        <section className="mt-4">
          <h3 className="text-center font_weight700">
            মুয়াল্লিম প্রশিক্ষণ - আরবী
          </h3>
          <hr />
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    ঢাকা নয়াটোলা আনওয়ারুল উলূম নো’মানিয়া কামিল মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      হাতিরঝিল, ঢাকা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01615032387, 01322891019, 01322891021
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১৫ জুলাই | ঢাকা | ব্যাচ নং:- 648
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/403"
                    className="btn btn-primary apply_btn"
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    শেরপুর কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      শেরপুর সদর, শেরপুর
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01991990440, 01322891011, 01795717937
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১৫ জুলাই | শেরপুর | ব্যাচ নং:- 649
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/404"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    জামিয়া ইসহাকিয়া ইসলামিয়া মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      কুড়িগ্রাম সদর, কুড়িগ্রাম
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01716452380, 01322891057, 01740209293
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১৫ জুলাই | কুড়িগ্রাম | ব্যাচ নং:- 650
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/405"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    ফয়জুল উলূম হামিউসসুন্নাহ নূরানী মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      শ্রীপুর, গাজীপুর
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01921842930, 01322891027, 01770181010
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১৫ জুলাই | গাজীপুর | ব্যাচ নং:- 651
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/406"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      হাটহাজারী, চট্টগ্রাম
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 017715500, 01322891009, 01322891056, 01818890242
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জলাই | চট্টগ্রাম | ব্যাচ নং:- 643
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/396"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    খুলনা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      হরিণটানা, খুলনা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891025, 01322891054, 01754155682
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জলাই | খুলনা | ব্যাচ নং:- 644
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/397"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    টাঙ্গাইল কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      কালিহাতী, টাঙ্গাইল
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891015, 01322891049, 01322891023,
                      01730201421
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জলাই | টাঙ্গাইল | ব্যাচ নং:- 645
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/398"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    বগুড়া কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      বগুড়া সদর, বগুড়া
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891007, 01322891055, 01329634054,
                      01785559544
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জলাই | বগুড়া | ব্যাচ নং:- 646
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/399"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    জামিয়া হোসাইনিয়া আরাবিয়া
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      মেলান্দহ, জামালপুর
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01834-253699, 01322-891041
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জলাই | জামালপুর | ব্যাচ নং:- 647
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/400"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    নেত্রকোণা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ (ফয়জুল উলূম হামিউসসুন্নাহ মাদরাসা)
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      নেত্রকোণা সদর, নেত্রকোণা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891037, 01915535780
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ মে | নেত্রকোণা | ব্যাচ নং:- 642
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/392"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    জামিয়া ইসলামিয়া আরাবিয়া উমেদ নগর, হবিগঞ্জ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      হবিগঞ্জ সদর, হবিগঞ্জ
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01715039489, 01765655174, 01739844854
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      25 এপ্রিল | হবিগঞ্জ | ব্যাচ নং:- 622
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/364"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    টাঙ্গাইল কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      কালিহাতী, টাঙ্গাইল
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01749276608, 01937154499, 01730201421
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      25 এপ্রিল | টাঙ্গাইল | ব্যাচ নং:- 640
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/386"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    ঝিনাইদহ কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      ঝিনাইদহ সদর, ঝিনাইদহ
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891045, 01322891036, 01770740110
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      25 এপ্রিল | ঝিনাইদহ | ব্যাচ নং:- 641
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/387"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      হাটহাজারী, চট্টগ্রাম
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891008, 01322891017, 01329-634055
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ২০ এপ্রিল | চট্টগ্রাম | ব্যাচ নং:- 636
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/382"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    ঢাকা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      আশুলিয়া, ঢাকা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891035, 01322891024, 01322891059
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      20 এপ্রিল | ঢাকা | ব্যাচ নং:- 637
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/383"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    শেরপুর কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      শেরপুর সদর, শেরপুর
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01706799755, 01322891004, 01329-634061
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      20 এপ্রিল | শেরপুর | ব্যাচ নং:- 638
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/384"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    দারুল উলূম ইসলামিয়া মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      পলাশবাড়ী, গাইবান্ধা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01721542525, 01865018591, 01717876435
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      20 এপ্রিল | গাইবান্ধা | ব্যাচ নং:- 639
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/385"
                    className="btn btn-primary apply_btn  "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    আল-জামেয়াতুল আহলিয়া দারুল উলূম মুঈনুল ইসলাম (হাটহাজারী
                    মাদরাসা)
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      হাটহাজারী, চট্টগ্রাম
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01771555000, 01322891004, 01322891041,
                      01322891056
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ২৬ ফেব্রুয়ারী | চট্টগ্রাম | ব্যাচ নং:- 612
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/354"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    ঢাকা নয়াটোলা আনওয়ারুল উলূম নো’মানিয়া কামিল মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      হাতিরঝিল, ঢাকা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01615032387, 01322891006, 01322891014,
                      01322891051
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ২৬ ফেব্রুয়ারী | ঢাকা | ব্যাচ নং:- 613
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/355"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    ঢাকা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      আশুলিয়া, ঢাকা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01612-367756, 01322891035, 01322891008,
                      01322891021, 01322891024
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ২৬ ফেব্রুয়ারী | ঢাকা | ব্যাচ নং:- 614
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/356"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    খুলনা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      হরিণটানা, খুলনা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891025, 01322891029, 01762-268823
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারী | খুলনা | ব্যাচ নং:- 615
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/357"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    শেরপুর কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      শেরপুর সদর, শেরপুর
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891039, 01322891042
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | শেরপুর | ব্যাচ নং:- 616
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/358"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    টাঙ্গাইল কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      কালিহাতী, টাঙ্গাইল
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891015, 01322891019, 01329634060
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | টাঙ্গাইল | ব্যাচ নং:- 617
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/359"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    বগুড়া কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      বগুড়া সদর, বগুড়া
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891055, 01322891017, 01322891007
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | বগুড়া | ব্যাচ নং:- 618
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/360"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    পিরোজপুর: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      পিরোজপুর সদর, পিরোজপুর
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891012, 01322891054
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | পিরোজপুর | ব্যাচ নং:- 619
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/361"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    জামেয়া মাদানিয়া ইসলামিয়া (কাজির বাজার মাদরাসা)
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      সিলেট সদর, সিলেট
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01716295382, 01711030254, 01322891032
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি-মার্চ | সিলেট | ব্যাচ নং:- 620
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/362"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    ধর্মাদী ফয়জুল উলূম ইসলামিয়া মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      বরিশাল সদর, বরিশাল
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01407091860, 01921001187, 01322891034
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | বরিশাল | ব্যাচ নং:- 621
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/363"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    আল জামিয়াতুল ইসলামিয়া কাসেমুল উলূম ক্বওমী মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      কালীগঞ্জ, ঝিনাইদহ
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01711964886, 01322891036, 01911164292
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | ঝিনাইদহ | ব্যাচ নং:- 623
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/365"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    আল জামিয়াতুল কারীমিয়া নূরুল উলূম জুম্মাপাড়া (নূরানী বিভাগ)
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      রংপুর সদর, রংপুর
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01715361242, 01721217045, 01739189193,
                      01322891009
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | রংপুর | ব্যাচ নং:- 624
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/366"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    রাজশাহী দারুল উলূম মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      বোয়ালিয়া, রাজশাহী
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01746857102, 0101322891026, 01329634061
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | রাজশাহী | ব্যাচ নং:- 625
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/367"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    জামিয়া হোসাইনিয়া মদীনাতুল উলূম হাফেজিয়া মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      এনায়েতপুর, সিরাজগঞ্জ
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01712078103, 01322891022, 01814140581
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | সিরাজগঞ্জ | ব্যাচ নং:- 627
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/368"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    আল-জামিয়া আল-ইসলামীয়া দারুল উলূম চাকমারকুল (বড় মাদরাসা)
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      রামু, কক্সবাজার
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01811255299, 01329634053, 01619742705
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | কক্সবাজার | ব্যাচ নং:- 628
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/369"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    আল জামিয়াতুল ইমদাদিয়া কিশোরগঞ্জ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      কিশোরগঞ্জ সদর, কিশোরগঞ্জ
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01741486002, 01911137090, 01322891023
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | কিশোরগঞ্জ | ব্যাচ নং:- 629
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/370"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    জামিয়া ইউনুছিয়া মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      ব্রাহ্মণবাড়িয়া সদর, ব্রাহ্মণবাড়িয়া
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01741396078, 01741486002, 01322891011
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | ব্রাহ্মণবাড়িয়া | ব্যাচ নং:- 630
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/371"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    দারুল উলূম ফয়জিয়া মহিউসসুন্নাহ মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      বীরগঞ্জ, দিনাজপুর
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01824515587, 01322891013, 01720245338
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | দিনাজপুর | ব্যাচ নং:- 631
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/372"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    জামিয়া শেখ মুহাম্মাদ আব্দুল্লাহ (হযরতপুর মাদরাসা)
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      সিরাজদিখান, মুন্সিগঞ্জ
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01871210092, 01876316050, 01322891047
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | মুন্সিগঞ্জ | ব্যাচ নং:- 632
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/373"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    নেত্রকোণা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ (ফয়জুল উলূম হামিউসসুন্নাহ মাদরাসা)
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      নেত্রকোণা সদর, নেত্রকোণা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891037, 01322891038, 01811291520
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | নেত্রকোণা | ব্যাচ নং:- 633
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/374"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">মোমতাজুল উলূম মাদরাসা</h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      কুষ্টিয়া সদর, কুষ্টিয়া
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01749672300, 01722953955, 01322891016,
                      01329634064
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | কুষ্টিয়া | ব্যাচ নং:- 634
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/375"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    আল-জামিয়াতুল ইসলামিয়া দারুস সুন্নাহ হ্নীলা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      টেকনাফ, কক্সবাজার
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01720355854, 01833275335, 01812366292,
                      01322891044
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | কক্সবাজার | ব্যাচ নং:- 635
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/376"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    বাইতুল কুরআন হাফিজিয়া মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      ঈশ্বরগঞ্জ, ময়মনসিংহ
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01753639517, 01946427345, 01322891027,
                      01770181010
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      26 ফেব্রুয়ারি | ময়মনসিংহ | ব্যাচ নং:- 626
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/377"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      হাটহাজারী, চট্টগ্রাম
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01771-555000, 01322-891020, 01322-891040
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ২০ ফেব্রুয়ারি | চট্টগ্রাম | ব্যাচ নং:- 611
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/353"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    ঝিনাইদহ কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      ঝিনাইদহ সদর, ঝিনাইদহ
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891045, 01322891029, 01322891033
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জানুয়ারী | ঝিনাইদহ | ব্যাচ নং:- 606
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/338"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      হাটহাজারী, চট্টগ্রাম
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01771555000, 013228919, 01322891040
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জানুয়ারী | চট্টগ্রাম | ব্যাচ নং:- 601
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/339"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    ঢাকা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      আশুলিয়া, ঢাকা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891035-, 01322891017
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জানুয়ারী | ঢাকা | ব্যাচ নং:- 602
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/340"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    টাঙ্গাইল কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      কালিহাতী, টাঙ্গাইল
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891015, 01322891056
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জানুয়ারী | টাঙ্গাইল | ব্যাচ নং:- 603
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/341"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    খুলনা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      হরিণটানা, খুলনা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891025, 01322891023
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জনুয়ারী | খুলনা | ব্যাচ নং:- 604
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/342"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    পিরোজপুর: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      পিরোজপুর সদর, পিরোজপুর
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891012, 01322891054
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জানুয়ারী | পিরোজপুর | ব্যাচ নং:- 607
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/343"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    নেত্রকোণা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ (ফয়জুল উলূম হামিউসসুন্নাহ মাদরাসা)
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      নেত্রকোণা সদর, নেত্রকোণা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891037, 01322891051
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জানুয়ারী | নেত্রকোণা | ব্যাচ নং:- 608
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/344"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    তা’লীমুস সুন্নাহ মাদরাসা (নূরানী বিভাগ)
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      সিরাজগঞ্জ সদর, সিরাজগঞ্জ
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01928601474, 01322891011
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জানুয়ারী | সিরাজগঞ্জ | ব্যাচ নং:- 610
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/345"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div
                className="card date-card d-flex flex-row mb-4 custom_border training_info"
                style={{ minHeight: 240 }}
              >
                <div className="date-body border-left p-3 ">
                  <h2 className="h4 date-title mt-0">
                    বগুড়া কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      বগুড়া সদর, বগুড়া
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01322891055, 013221022
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জানুয়ারী | বগুড়া | ব্যাচ নং:- 605
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/346"
                    className="btn btn-primary apply_btn  disabled "
                  >
                    আবেদন করুন
                  </Link>
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

export default Moallem1;
