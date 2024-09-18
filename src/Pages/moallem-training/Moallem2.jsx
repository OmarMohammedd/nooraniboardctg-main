import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Moallem2() {
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
            মুয়াল্লিম প্রশিক্ষণ - বাংলা
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
                      যোগাযোগ:- 01322891035, 01322891046, 01329634052
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১০ জুলাই | ঢাকা | ব্যাচ নং:- 520
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/407"
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
                      যোগাযোগ:- 01322891045, 01322891028
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১০ জুলাই | ঝিনাইদহ | ব্যাচ নং:- 521
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/408"
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
                      যোগাযোগ:- 01771555000, 01789333636, 01329634059
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জুলাই | চট্টগ্রাম | ব্যাচ নং:- 518
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/401"
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
                      যোগাযোগ:- 01322891012, 01322891018, 01814771243
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১ জুলাই | পিরোজপুর | ব্যাচ নং:- 519
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/402"
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
                      যোগাযোগ:- 01715361242, 01721-217045, 01329-634052
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ২০ ম | রংপুর | ব্যাচ নং:- 515
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/393"
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
                    আল জামিয়াতুল আরবিয়্যা কাসেমুল উলূম ক্বওমী মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      মাগুরা সদর, মাগুরা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01313-858314, 01789-333636 ,01322891003,
                      01322891046
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ২০ মে | মাগুরা | ব্যাচ নং:- 516
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/394"
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
                  <h2 className="h4 date-title mt-0">আন-নূর ইসলামী একাডেমী</h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      নরসিংদী সদর, নরসিংদী
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01710-975977, 01711-150162, 01322-891018,
                      01816-002359
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ২০ মে | নরসিংদী | ব্যাচ নং:- 517
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/395"
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
                      যোগাযোগ:- 01322891003, 01789333636, 01329634059,
                      01600998250
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      20 এপ্রিল | চট্টগ্রাম | ব্যাচ নং:- 511
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/388"
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
                      যোগাযোগ:- 01322891025, 01322891028, 01322891046
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      20 এপ্রিল | খুলনা | ব্যাচ নং:- 512
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/389"
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
                      যোগাযোগ:- 01322891015, 01322891049, 01329634052
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      20 এপ্রিল | টাঙ্গাইল | ব্যাচ নং:- 513
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/390"
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
                      যোগাযোগ:- 01322891055, 01322891018, 01322891007
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      20 এপ্রিল | বগুড়া | ব্যাচ নং:- 514
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/391"
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
                      যোগাযোগ:- 010771555000, 013228910003, 01322891043,
                      01329634065
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১১ মার্চ | চট্টগ্রাম | ব্যাচ নং:- 507
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/378"
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
                      যোগাযোগ:- 01322891045, 01322891018, 01853740569
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১১ মার্চ | ঝিনাইদহ | ব্যাচ নং:- 508
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/379"
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
                    হামিউসসুন্নাহ রউজাতুল উলূম মাদরাসা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      শেরপুর সদর, শেরপুর
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01740924992, 01818562116
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১১ মার্চ | শেরপুর | ব্যাচ নং:- 509
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/380"
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
                  <h2 className="h4 date-title mt-0">জামেয়া আশরাফিয়া পাবনা</h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      পাবনা সদর, পাবনা
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01749729962, 01749668106, 01322891028,
                      01646224351
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১১ মার্চ | পাবনা | ব্যাচ নং:- 510
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/381"
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
                    নূরানী মডেল মাদরাসা এন্ড স্কুল শাখা
                  </h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      জামালপুর সদর, জামালপুর
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01715-265134, 01322-891003, 01329-634059
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১০ ফেব্রুয়ারি | জামালপুর | ব্যাচ নং:- 505
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/351"
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
                      যোগাযোগ:- 01322-891037, 01322-891046
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১০ ফেব্রুয়ারি | নেত্রকোণা | ব্যাচ নং:- 506
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/352"
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
                      যোগাযোগ:- 01771555000, 01322891020, 01322891040
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১০ জানুয়ারি | চট্টগ্রাম | ব্যাচ নং:- 501
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/347"
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
                      যোগাযোগ:- 01615032387, 01818562116
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১০ জানুয়ারি | ঢাকা | ব্যাচ নং:- 502
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/348"
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
                      যোগাযোগ:- 01322891039, 01991990440
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১০ জানুয়ারি | শেরপুর | ব্যাচ নং:- 503
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/349"
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
                  <h2 className="h4 date-title mt-0">দারুস সুন্নাহ মাদরাসা</h2>
                  <div className="date-description">
                    <p className="mb-0 font_size16 font_weight500">
                      যশোর সদর, যশোর
                    </p>
                    <p
                      className="mb-0 font_size14 font_weight600"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      যোগাযোগ:- 01773656677, 01322891028
                    </p>
                    <hr className="m-2" />
                    <p className="mb-0 font-weight-bold session">
                      ১০ জানুয়ারি | যশোর | ব্যাচ নং:- 504
                    </p>
                    <hr className="m-2" />
                  </div>
                  <Link
                    to="/moallem-registration/350"
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

export default Moallem2;
