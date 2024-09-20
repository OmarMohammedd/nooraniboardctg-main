/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Index() {

  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = document.querySelectorAll('.card');
          cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate');
          });
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.1 });

    const section = document.querySelector('.card-body');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const options = {
    loop: true,
    autoplay: true,
    nav: false,
    pagination: true,
    navigation: false,
    slideSpeed: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  const testimonialItems = [
    {
      description:
        "প্রাচীন ও বৃহত্তম দ্বীনি এদারাহ আল জামিয়াতুল আহলিয়া দারুল উলুম হাটহাজারীর তত্ত্বাবধানে “নূরানী তালীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ” প্রতিষ্ঠা করা হয়",
      title: "শিক্ষক",
      post: "- হাজীপাড়া মাদরাসা",
    },
    {
      description:
        "প্রাচীন ও বৃহত্তম দ্বীনি এদারাহ আল জামিয়াতুল আহলিয়া দারুল উলুম হাটহাজারীর তত্ত্বাবধানে “নূরানী তালীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ” প্রতিষ্ঠা করা হয়",
      title: "আরাবিয়ান নুরানি",
      post: "- ছাত্র",
    },
  ];

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <ul className="flex-direction-nav" onClick={onClick}>
        <li>
          <Link className="flex-next" to="#" style={{ color: "gray" }}>
            Next
          </Link>
        </li>
      </ul>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <ul className="flex-direction-nav" onClick={onClick}>
        <li>
          <Link className="flex-prev" to="#" style={{ color: "gray" }}>
            Previous
          </Link>
        </li>
      </ul>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const SampleNextArroww = (props) => {
    const { onClick } = props;
    return (
      <ul
        className="flex-direction-nav"
        onClick={onClick}
        style={{ marginTop: "-2.4rem" }}
      >
        <li>
          <Link className="flex-next" to="#" style={{ color: "gray" }}>
            Next
          </Link>
        </li>
      </ul>
    );
  };

  const SamplePrevArroww = (props) => {
    const { onClick } = props;
    return (
      <ul
        className="flex-direction-nav"
        onClick={onClick}
        style={{ marginTop: "-2.4rem" }}
      >
        <li>
          <Link className="flex-prev" to="#" style={{ color: "gray" }}>
            Previous
          </Link>
        </li>
      </ul>
    );
  };

  const settingss = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <SampleNextArroww />,
    prevArrow: <SamplePrevArroww />,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div
        style={{ background: "url(https://nooraniboardctg.com/public/bg.jpg)" }}
        onContextMenu={(e) => e.preventDefault()}
        data-new-gr-c-s-check-loaded="14.1184.0"
        data-gr-ext-installed=""
        cz-shortcut-listen="true"
      >
        <Header />

        <div class="container">
          <section>
            <div class="row">
              <div class="col-md-8 col-12">
                <section className="slider_section">
                  <Slider {...settings}>
                    <div className="slide-item">
                      <li
                        style={{ width: 510, float: "left", display: "block" }}
                        className=""
                      >
                        <img
                          src="https://nooraniboardctg.com/public/storage/slider/ekademik-vbn-rater-viu.jpg"
                          draggable="false"
                        />
                        <div className="meta">
                          <h1>
                            <Link target="_link" className="text-white" to="">
                              একাডেমিক ভবন (রাতের ভিউ)
                            </Link>
                          </h1>
                          <div className="category">
                            {/* <p>$286600</p>
                                      <span>Category</span> */}
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="slide-item">
                      <li
                        className="clone"
                        aria-hidden="true"
                        style={{ width: 510, float: "left", display: "block" }}
                      >
                        <img
                          src="https://nooraniboardctg.com/public/storage/slider/nuuranee-taleemul-kuran-border-kendreez-snd-preekshaz-9405-stangs-pas.jpeg"
                          draggable="false"
                        />
                        <div className="meta">
                          <h1>
                            <Link target="_link" className="text-white" to="">
                              নূরানী তালীমুল কুরআন বোর্ডের কেন্দ্রীয় সনদ
                              পরীক্ষায় ৯4.০৫ শতাংশ পাস
                            </Link>
                          </h1>
                          <div className="category"></div>
                        </div>
                      </li>
                    </div>
                    <div className="slide-item">
                      <li
                        style={{ width: 510, float: "left", display: "block" }}
                        className="flex-active-slide"
                      >
                        <img
                          src="https://nooraniboardctg.com/public/storage/slider/kendriy-snd-preeksha-2021-er-flafl-prkas-onushtan.jpeg"
                          draggable="false"
                        />
                        <div className="meta">
                          <h1>
                            <Link target="_link" className="text-white" to="">
                              কেন্দ্রীয় সনদ পরীক্ষা 2021 এর ফলাফল প্রকাশ
                              অনুষ্ঠানের একাংশ
                            </Link>
                          </h1>
                          <div className="category">
                            {/* <p>$286600</p>
                                      <span>Category</span> */}
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="slide-item">
                      <li
                        style={{ width: 510, float: "left", display: "block" }}
                      >
                        <img
                          src="https://nooraniboardctg.com/public/storage/slider/ekademik-vbn.jpg"
                          draggable="false"
                        />
                        <div className="meta">
                          <h1>
                            <Link target="_link" className="text-white" to="">
                              একাডেমিক ভবন
                            </Link>
                          </h1>
                          <div className="category">
                            {/* <p>$286600</p>
                                      <span>Category</span> */}
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="slide-item">
                      <li
                        style={{ width: 510, float: "left", display: "block" }}
                      >
                        <img
                          src="https://nooraniboardctg.com/public/storage/slider/darul-uluum-mueenul-islam-hathajaree-madrasa.jpg"
                          draggable="false"
                        />
                        <div className="meta">
                          <h1>
                            <Link target="_link" className="text-white" to="">
                              আল জামিয়াতুল আহলিয়া দারুল উলূম মঈনুল ইসলাম
                              হাটহাজারী, চট্টগ্রাম।
                            </Link>
                          </h1>
                          <div className="category">
                            {/* <p>$286600</p>
                                      <span>Category</span> */}
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="slide-item">
                      <li
                        style={{ width: 510, float: "left", display: "block" }}
                      >
                        <img
                          src="https://nooraniboardctg.com/public/storage/slider/nuuranee-taleemul-kuran-bord-cttgram-banglades-prstabit-serpur-sthayee-prsikshn-kendr.jpg"
                          draggable="false"
                        />
                        <div className="meta">
                          <h1>
                            <Link target="_link" className="text-white" to="">
                              নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ
                              (প্রস্তাবিত শেরপুর স্থায়ী প্রশিক্ষণ কেন্দ্র)
                            </Link>
                          </h1>
                          <div className="category">
                            {/* <p>$286600</p>
                                      <span>Category</span> */}
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="slide-item">
                      <li
                        style={{ width: 510, float: "left", display: "block" }}
                      >
                        <img
                          src="https://nooraniboardctg.com/public/storage/slider/nuuranee-taleemul-kuran-border-kendreez-snd-preekshaz-9405-stangs-pas.jpeg"
                          draggable="false"
                        />
                        <div className="meta">
                          <h1>
                            <Link target="_link" className="text-white" to="">
                              নূরানী তালীমুল কুরআন বোর্ডের কেন্দ্রীয় সনদ
                              পরীক্ষায় ৯4.০৫ শতাংশ পাস
                            </Link>
                          </h1>
                          <div className="category">
                            {/* <p>$286600</p>
                                      <span>Category</span> */}
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="slide-item">
                      <li
                        style={{ width: 510, float: "left", display: "block" }}
                        className="clone"
                        aria-hidden="true"
                      >
                        <img
                          src="https://nooraniboardctg.com/public/storage/slider/ekademik-vbn-rater-viu.jpg"
                          draggable="false"
                        />
                        <div className="meta">
                          <h1>
                            <Link target="_link" className="text-white" to="">
                              একাডেমিক ভবন (রাতের ভিউ)
                            </Link>
                          </h1>
                          <div className="category"></div>
                        </div>
                      </li>
                    </div>
                  </Slider>
                </section>
              </div>

              <div class="col-md-4 col-12">
                <div class="card carddddd custom_card shadow-sm">
                  <h5 class="card-header custom_header">
                    <i class="fas fa-thumbtack"></i> নোটিশ{" "}
                    <span class="float-right right_header">
                      <Link to="/notice">
                        সকল নোটিশ <i class="fas fa-external-link-alt"></i>
                      </Link>
                    </span>
                  </h5>
<div className="card-body p-2 scrollbar">
      <div className="overflow">
        <Link to="/notice/1m-samyik-preeksha-rutin-2023ing">
          <div className="card notice_card">
            <div className="card-body p-2">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-3 border-right text-center m-auto cursive_font line_height_1">
                  <span className="date">15</span>
                  <sup>th</sup> Mar
                </div>
                <div className="col-lg-9 col-md-8 col-sm-9">
                  <div className="title">
                    ১ম সাময়িক পরীক্ষা রুটিন: ২০২৪ইং{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/notice/1443-hijree-trriteey-srenir-preekshar-rutin">
          <div className="card notice_card">
            <div className="card-body p-2">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-3 border-right text-center m-auto cursive_font line_height_1">
                  <span className="date">24</span>
                  <sup>th</sup> Jan
                </div>
                <div className="col-lg-9 col-md-8 col-sm-9">
                  <div className="title">
                    ১৪৪৫ হিজরী -তৃতীয় শ্রেণির পরীক্ষার রুটিন{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/notice/hijree-1445-sner-ple-narsaree-prthm-oo-dwiteey-srenir-preekshar-rutin">
          <div className="card notice_card">
            <div className="card-body p-2">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-3 border-right text-center m-auto cursive_font line_height_1">
                  <span className="date">24</span>
                  <sup>th</sup> Jan
                </div>
                <div className="col-lg-9 col-md-8 col-sm-9">
                  <div className="title">
                    হিজরী ১৪৪৫ সনের -প্লে-নার্সারী, প্রথম ও দ্বিতীয় শ্রেণির পরীক্ষার রুটিন
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/notice/1443-hijree-preekshar-fi-sngkrant">
          <div className="card notice_card">
            <div className="card-body p-2">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-3 border-right text-center m-auto cursive_font line_height_1">
                  <span className="date">23</span>
                  <sup>rd</sup> Jan
                </div>
                <div className="col-lg-9 col-md-8 col-sm-9">
                  <div className="title">
                    ১৪৪৫ হিজরী পরীক্ষার ফি সংক্রান্ত{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/notice/kendreey-snd-trriteey-preekshar-rutin">
          <div className="card notice_card">
            <div className="card-body p-2">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-3 border-right text-center m-auto cursive_font line_height_1">
                  <span className="date">29</span>
                  <sup>th</sup> Oct
                </div>
                <div className="col-lg-9 col-md-8 col-sm-9">
                  <div className="title">
                    কেন্দ্রীয় সনদ (তৃতীয়) পরীক্ষার রুটিন{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/notice/2023-saler-ple-narsaree-prthm-oo-dwiteey-srenir-preekshar-rutin">
          <div className="card notice_card">
            <div className="card-body p-2">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-3 border-right text-center m-auto cursive_font line_height_1">
                  <span className="date">28</span>
                  <sup>th</sup> Oct
                </div>
                <div className="col-lg-9 col-md-8 col-sm-9">
                  <div className="title">
                    2023 সালের -প্লে-নার্সারী, প্রথম ও দ্বিতীয় শ্রেণির পরীক্ষার রুটিন{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/notice/onlaine-fi-prisodher-pddhti">
          <div className="card notice_card">
            <div className="card-body p-2">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-3 border-right text-center m-auto cursive_font line_height_1">
                  <span className="date">05</span>
                  <sup>th</sup> Sep
                </div>
                <div className="col-lg-9 col-md-8 col-sm-9">
                  <div className="title">
                    অনলাইনে ফি পরিশোধের পদ্ধতি{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/notice/onlaine-bi-oo-shtesnaree-pnz-kryer-pddhti">
          <div className="card notice_card">
            <div className="card-body p-2">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-3 border-right text-center m-auto cursive_font line_height_1">
                  <span className="date">05</span>
                  <sup>th</sup> Sep
                </div>
                <div className="col-lg-9 col-md-8 col-sm-9">
                  <div className="title">
                    অনলাইনে বই ও ষ্টেশনারী পণ্য ক্রয়ের পদ্ধতি{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-4">
            <div className="row">
              <div className="col-md-5 mb-4">
                <div className="card chairman_card shadow-sm">
                  <h5 className="card-header custom_header">
                    <i className="fas fa-calendar-alt" /> মুয়াল্লিম প্রশিক্ষণ
                    সময়সূচি
                  </h5>
                  <div className="card-body p-0 d-inline-block">
                    <section className="slider_section">
                      <div className="flexslider_training left">
                        <div
                          className="flex-viewport"
                          style={{ overflow: "hidden", position: "relative" }}
                        >
                          <Slider {...settingss}>
                            {/* slide-item */}
                            <li
                              className="clone "
                              aria-hidden="true"
                              style={{
                                width: "268.4px",
                                float: "left",
                                display: "block",
                              }}
                            >
                              <img
                                style={{ width: "100%" }}
                                src="https://nooraniboardctg.com/public/training/531_2024.jpg"
                                draggable="false"
                              />
                              <div className="meta">
                                <h1>
                                  <a
                                    download
                                    className="text-white download-link"
                                    title="Download Image"
                                    href="https://nooraniboardctg.com/public/training/531_2024.jpg"
                                    style={{
                                      backgroundColor: "red",
                                      zIndex: "9999999",
                                      fontSize: "25px",
                                      textAlign: "center",
                                      display: "block",
                                      width: "98%",
                                      padding: "0",
                                      margin: "auto",
                                      color: "white",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <i className="fas fa-download" /> ডাউনলোড
                                    করুন
                                  </a>
                                </h1>

                                <div className="category">
                                  {/* <p>$286600</p>
                                            <span>Category</span> */}
                                </div>
                              </div>
                            </li>
                            <li
                              className=""
                              style={{
                                width: "268.4px",
                                float: "left",
                                display: "block",
                              }}
                            >
                              <img
                                style={{ width: "100%" }}
                                src="https://nooraniboardctg.com/public/training/666_2024.jpg"
                                draggable="false"
                              />
                              <div className="meta">
                                <h1>
                                  <a
                                    download={666}
                                    className="text-white"
                                    title=""
                                    href="https://nooraniboardctg.com/public/training/666_2024.jpg"
                                    style={{
                                      backgroundColor: "red",
                                      zIndex: "9999999",
                                      fontSize: "25px",
                                      textAlign: "center",
                                      display: "block",
                                      width: "98%",
                                      padding: "0",
                                      margin: "auto",
                                      color: "white",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <i className="fas fa-download" />
                                    ডাউনলোড করুন
                                  </a>
                                </h1>
                                <div className="category">
                                  {/* <p>$286600</p>
                                            <span>Category</span> */}
                                </div>
                              </div>
                            </li>
                            <li
                              className=""
                              style={{
                                width: "268.4px",
                                float: "left",
                                display: "block",
                              }}
                            >
                              <img
                                style={{ width: "100%" }}
                                src="https://nooraniboardctg.com/public/training/667_2024.jpg"
                                draggable="false"
                              />
                              <div className="meta">
                                <h1>
                                  <a
                                    download={667}
                                    className="text-white"
                                    title=""
                                    href="https://nooraniboardctg.com/public/training/667_2024.jpg"
                                    style={{
                                      backgroundColor: "red",
                                      zIndex: "9999999",
                                      fontSize: "25px",
                                      textAlign: "center",
                                      display: "block",
                                      width: "98%",
                                      padding: "0",
                                      margin: "auto",
                                      color: "white",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <i className="fas fa-download" />
                                    ডাউনলোড করুন
                                  </a>
                                </h1>
                                <div className="category">
                                  {/* <p>$286600</p>
                                            <span>Category</span> */}
                                </div>
                              </div>
                            </li>
                            <li
                              className=""
                              style={{
                                width: "268.4px",
                                float: "left",
                                display: "block",
                              }}
                            >
                              <img
                                style={{ width: "100%" }}
                                src="https://nooraniboardctg.com/public/training/668_2024.jpg"
                                draggable="false"
                              />
                              <div className="meta">
                                <h1>
                                  <a
                                    download={668}
                                    className="text-white"
                                    title=""
                                    href="https://nooraniboardctg.com/public/training/668_2024.jpg"
                                    style={{
                                      backgroundColor: "red",
                                      zIndex: "9999999",
                                      fontSize: "25px",
                                      textAlign: "center",
                                      display: "block",
                                      width: "98%",
                                      padding: "0",
                                      margin: "auto",
                                      color: "white",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <i className="fas fa-download" />
                                    ডাউনলোড করুন
                                  </a>
                                </h1>
                                <div className="category">
                                  {/* <p>$286600</p>
                                            <span>Category</span> */}
                                </div>
                              </div>
                            </li>
                            <li
                              style={{
                                width: "268.4px",
                                float: "left",
                                display: "block",
                              }}
                              className="flex-active-slide"
                            >
                              <img
                                style={{ width: "100%" }}
                                src="https://nooraniboardctg.com/public/training/669_2024.jpg"
                                draggable="false"
                              />
                              <div className="meta">
                                <h1>
                                  <a
                                    download={669}
                                    className="text-white"
                                    title=""
                                    href="https://nooraniboardctg.com/public/training/669_2024.jpg"
                                    style={{
                                      backgroundColor: "red",
                                      zIndex: "9999999",
                                      fontSize: "25px",
                                      textAlign: "center",
                                      display: "block",
                                      width: "98%",
                                      padding: "0",
                                      margin: "auto",
                                      color: "white",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <i className="fas fa-download" />
                                    ডাউনলোড করুন
                                  </a>
                                </h1>
                                <div className="category">
                                  {/* <p>$286600</p>
                                            <span>Category</span> */}
                                </div>
                              </div>
                            </li>
                            <li
                              style={{
                                width: "268.4px",
                                float: "left",
                                display: "block",
                              }}
                              className=""
                            >
                              <img
                                style={{ width: "100%" }}
                                src="https://nooraniboardctg.com/public/training/528_2024.jpg"
                                draggable="false"
                              />
                              <div className="meta">
                                <h1>
                                  <a
                                    download={528}
                                    className="text-white"
                                    title=""
                                    href="https://nooraniboardctg.com/public/training/528_2024.jpg"
                                    style={{
                                      backgroundColor: "red",
                                      zIndex: "9999999",
                                      fontSize: "25px",
                                      textAlign: "center",
                                      display: "block",
                                      width: "98%",
                                      padding: "0",
                                      margin: "auto",
                                      color: "white",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <i className="fas fa-download" />
                                    ডাউনলোড করুন
                                  </a>
                                </h1>
                                <div className="category">
                                  {/* <p>$286600</p>
                                            <span>Category</span> */}
                                </div>
                              </div>
                            </li>
                            <li
                              style={{
                                width: "268.4px",
                                float: "left",
                                display: "block",
                              }}
                              className=""
                            >
                              <img
                                style={{ width: "100%" }}
                                src="https://nooraniboardctg.com/public/training/529_2024.jpg"
                                draggable="false"
                              />
                              <div className="meta">
                                <h1>
                                  <a
                                    download={529}
                                    className="text-white"
                                    title=""
                                    href="https://nooraniboardctg.com/public/training/529_2024.jpg"
                                    style={{
                                      backgroundColor: "red",
                                      zIndex: "9999999",
                                      fontSize: "25px",
                                      textAlign: "center",
                                      display: "block",
                                      width: "98%",
                                      padding: "0",
                                      margin: "auto",
                                      color: "white",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <i className="fas fa-download" />
                                    ডাউনলোড করুন
                                  </a>
                                </h1>
                                <div className="category">
                                  {/* <p>$286600</p>
                                            <span>Category</span> */}
                                </div>
                              </div>
                            </li>
                            <li
                              style={{
                                width: "268.4px",
                                float: "left",
                                display: "block",
                              }}
                              className=""
                            >
                              <img
                                style={{ width: "100%" }}
                                src="https://nooraniboardctg.com/public/training/530_2024.jpg"
                                draggable="false"
                              />
                              <div className="meta">
                                <h1>
                                  <a
                                    download={530}
                                    className="text-white"
                                    title=""
                                    href="https://nooraniboardctg.com/public/training/530_2024.jpg"
                                    style={{
                                      backgroundColor: "red",
                                      zIndex: "9999999",
                                      fontSize: "25px",
                                      textAlign: "center",
                                      display: "block",
                                      width: "98%",
                                      padding: "0",
                                      margin: "auto",
                                      color: "white",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <i className="fas fa-download" />
                                    ডাউনলোড করুন
                                  </a>
                                </h1>
                                <div className="category">
                                  {/* <p>$286600</p>
                                            <span>Category</span> */}
                                </div>
                              </div>
                            </li>
                            <li
                              style={{
                                width: "268.4px",
                                float: "left",
                                display: "block",
                              }}
                              className=""
                            >
                              <img
                                style={{ width: "100%" }}
                                src="https://nooraniboardctg.com/public/training/531_2024.jpg"
                                draggable="false"
                              />
                              <div className="meta">
                                <h1>
                                  <a
                                    download={531}
                                    className="text-white"
                                    title=""
                                    href="https://nooraniboardctg.com/public/training/531_2024.jpg"
                                    style={{
                                      backgroundColor: "red",
                                      zIndex: "9999999",
                                      fontSize: "25px",
                                      textAlign: "center",
                                      display: "block",
                                      width: "98%",
                                      padding: "0",
                                      margin: "auto",
                                      color: "white",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <i className="fas fa-download" />
                                    ডাউনলোড করুন
                                  </a>
                                </h1>
                                <div className="category">
                                  {/* <p>$286600</p>
                                            <span>Category</span> */}
                                </div>
                              </div>
                            </li>
                            <li
                              className="clone"
                              aria-hidden="true"
                              style={{
                                width: "268.4px",
                                float: "left",
                                display: "block",
                              }}
                            >
                              <img
                                style={{ width: "100%" }}
                                src="https://nooraniboardctg.com/public/training/666_2024.jpg"
                                draggable="false"
                              />
                              <div className="meta">
                                <h1>
                                  <a
                                    download={666}
                                    className="text-white"
                                    title=""
                                    href="https://nooraniboardctg.com/public/training/666_2024.jpg"
                                    style={{
                                      backgroundColor: "red",
                                      zIndex: "9999999",
                                      fontSize: "25px",
                                      textAlign: "center",
                                      display: "block",
                                      width: "98%",
                                      padding: "0",
                                      margin: "auto",
                                      color: "white",
                                      textDecoration: "none",
                                    }}
                                  >
                                    <i className="fas fa-download" />
                                    ডাউনলোড করুন
                                  </a>
                                </h1>
                                <div className="category">
                                  {/* <p>$286600</p>
                                            <span>Category</span> */}
                                </div>
                              </div>
                            </li>
                          </Slider>
                        </div>
                        {/* <ul className="flex-direction-nav">
                <li>
                  <a className="flex-prev" href="#">
                    Previous
                  </a>
                </li>
                <li>
                  <a className="flex-next" href="#">
                    Next
                  </a>
                </li>
              </ul> */}
                      
                      </div>
        <h4 className="title_vidos">Videos</h4>
  <div className="mt-3 video-container">
  <iframe
    src="https://www.youtube.com/embed/9tNRc8gRFXs?si=ufP9AzdsvCSudpOW"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>
<div className="mt-3 video-container">
  <iframe
    src="https://www.youtube.com/embed/VxmkxRs9UDs?si=8dygQLelxTEOhkM6"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>
<div className="mt-3 mb-3 video-container">
  <iframe
    src="https://www.youtube.com/embed/k3S041g4UhQ?si=5g-7wJPkRTyJTyOR"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

<Link to="/videos">
<button className="btn-primary buttoonn">More</button>
</Link>

                    </section>
                  </div>
                </div>
              </div>
              
              <div className="col-md-3 p-0 dsdsrc">
                <div
                  className="card border-0"
                  style={{ background: "transparent" }}
                >
                  <h5 className="card-header custom_header">
                    <i className="fas fa-calendar-alt" /> প্রশিক্ষণের বাৎসরিক
                    ক্যালেন্ডার
                  </h5>
                  <div className="card-body p-0 d-inline-block">
                    <object
                      className="mb-3"
                      data="https://nooraniboardctg.com/public/calendar11.pdf"
                      type="application/pdf"
                      width="100%"
                      height="350px"
                    >
                      <p>
                        Click here to view{" "}
                        <a href="https://nooraniboardctg.com/public/calendar11.pdf">
                          PDF File !
                        </a>
                      </p>
                    </object>
                    <object
                      data="https://nooraniboardctg.com/public/calendar22.pdf"
                      type="application/pdf"
                      width="100%"
                      height="350px"
                    >
                      <p>
                        Click here to view{" "}
                        <a href="https://nooraniboardctg.com/public/calendar22.pdf">
                          PDF File !
                        </a>
                      </p>
                    </object>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div class="card chairman_card shadow-sm">
                  <h5 class="card-header custom_header">
                    <i class="fas fa-envelope"></i> বোর্ড চেয়ারম্যান বার্তা{" "}
                  </h5>
                  <div class="card-body d-inline-block">
                    <div class="float-left w-25 mr-2">
                      <img
                        class="rounded w-100"
                        src="https://www.nooraniboardctg.com/public/storage/member/maoolana-allama-khlil-ahmd-kasemee-daba.jpeg"
                        alt=""
                      />
                    </div>
                    <div class="text-justify card-content">
                      নুরানী তালীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশের মুহতারাম
                      চেয়ারম্যানআল্লামা খলিল আহমদ কাসেমী (দা. বা.) এর দুআ ও বাণী
                      বিসমিল্লাহির রহমানির রহিম নুরানী তালীমুল কুরআন বোর্ড
                      চট্টগ্রাম বাংলাদেশ এর সার্বিক কার্যক্রম বিস্তৃতির লক্ষ্যে
                      নতুন ওয়েবসাইট খো...
                      <Link to="/message/1">বিস্তারিত</Link>
                    </div>
                  </div>
                </div>

                <div className="card shadow rounded mt-2">
                  <a href="https://nooraniboardctg.com/public/calendar_full.pdf">
                    <div className="card-body d-inline-block p-2">
                      <div className="row">
                        <div className="col-md-3 pr-0">
                          <img
                            src="https://nooraniboardctg.com/public/calendar_icon.png"
                            className="mw-100 dgfghfhgh"
                            alt=""
                          />
                        </div>
                        <div className="col-md-9 m-auto">
                          <h3
                            className="text-center text-primary"
                            style={{ fontFamily: '"Hind Siliguri",sans-serif' }}
                          >
                            ২০২৪ সালের বাৎসরিক ক্যালেন্ডার
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="row mt-3">
                  <div className="col-12 quick_link">
                    <div className="wrapper ">
                      <div className="card shadow-sm">
                        <div className="content ">
                          <div
                            className="counter align-middle"
                            style={{ background: "#1ab58a" }}
                          >
                            <span className="data">৭৩</span>
                          </div>
                          <div className="details ">
                            <a href="https://www.nooraniboardctg.com/members/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%95-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6%E0%A6%95">
                              <span className="name">প্রশিক্ষক ও পরিদর্শক</span>
                              <p>প্রশিক্ষক ও পরিদর্শক-এর তালিকা</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 quick_link mt-2">
                    <div className="wrapper">
                      <div className="card shadow-sm">
                        <div className="content">
                          <div
                            className="counter align-middle"
                            style={{ background: "#ff5e57" }}
                          >
                            <span className="data">৬</span>
                          </div>
                          <div className="details">
                            <a href="https://www.nooraniboardctg.com/members/%E0%A6%85%E0%A6%AB%E0%A6%BF%E0%A6%B8-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A6%BE">
                              <span className="name">অফিস কর্মকর্তা </span>
                              <p>অফিস কর্মকর্তার তালিকা</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 quick_link mt-2 d-none">
                    <div className="wrapper">
                      <div className="card shadow-sm">
                        <div className="content">
                          <div
                            className="counter align-middle"
                            style={{ background: "#6b5fa5" }}
                          >
                            <span className="data">১০৭৩৯</span>
                          </div>
                          <div className="details">
                            <a href="javascript:void(0)">
                              <span className="name">শিক্ষাপ্রতিষ্ঠান </span>
                              <p>শিক্ষাপ্রতিষ্ঠানের তালিকা </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 quick_link mt-2">
                    <div className="wrapper">
                      <div className="card shadow-sm">
                        <div className="content">
                          <div
                            className="counter align-middle"
                            style={{ background: "#F97F51" }}
                          >
                            <span className="data">৩০৬</span>
                          </div>
                          <div className="details">
                            <a href="https://www.nooraniboardctg.com/book-sell-center">
                              <span className="name">বিক্রয় কেন্দ্র </span>
                              <p>বই বিক্রয় কেন্দ্রের তালিকা </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 quick_link mt-2">
                    <div className="wrapper">
                      <div className="card shadow-sm">
                        <div className="content">
                          <div
                            className="counter align-middle"
                            style={{ background: "#3d95b7" }}
                          >
                            <span className="data">৩৮৮</span>
                          </div>
                          <div className="details">
                            <a href="https://www.nooraniboardctg.com/moallem-training-center">
                              <span className="name">প্রশিক্ষণ কেন্দ্র</span>
                              <p>প্রশিক্ষণ কেন্দ্রের তালিকা</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 quick_link mt-2 d-none">
                    <div className="wrapper">
                      <div className="card shadow-sm">
                        <div className="content">
                          <div
                            className="counter align-middle"
                            style={{ background: "#9b59b6" }}
                          >
                            <span className="data">১১৩</span>
                          </div>
                          <div className="details">
                            <a href="https://www.nooraniboardctg.com/permanent-training-center">
                              <span className="name">
                                স্থায়ী প্রশিক্ষণ কেন্দ্র
                              </span>
                              <p>স্থায়ী প্রশিক্ষণ কেন্দ্রের তালিকা</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 quick_link mt-2">
                    <div className="wrapper">
                      <div className="card shadow-sm">
                        <div className="content">
                          <div
                            className="counter align-middle"
                            style={{ background: "#9b59b6" }}
                          >
                            <span className="data">৪</span>
                          </div>
                          <div className="details">
                            <a href="https://www.nooraniboardctg.com/permanent-center">
                              <span className="name">স্থায়ী কার্যালয়</span>
                              <p>স্থায়ী কার্যালয়ের তালিকা</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>


          {/* 
          <section class="mt-4">
            <div class="row">
              <div class="col-md-5"></div>
              <div class="col-md-3 p-0">
                <div
                  className="card border-0"
                  style={{ background: "transparent" }}
                ></div>
              </div>
              <div class="col-md-4">
                <div class="card chairman_card shadow-sm">
                  <h5 class="card-header custom_header">
                    <i class="fas fa-envelope"></i> বোর্ড চেয়ারম্যান বার্তা{" "}
                  </h5>
                  <div class="card-body d-inline-block">
                    <div class="float-left w-25 mr-2">
                      <img
                        class="rounded w-100"
                        src="https://www.nooraniboardctg.com/public/storage/member/maoolana-allama-khlil-ahmd-kasemee-daba.jpeg"
                        alt=""
                      />
                    </div>
                    <div class="text-justify card-content">
                      নুরানী তালীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশের মুহতারাম
                      চেয়ারম্যানআল্লামা খলিল আহমদ কাসেমী (দা. বা.) এর দুআ ও বাণী
                      বিসমিল্লাহির রহমানির রহিম নুরানী তালীমুল কুরআন বোর্ড
                      চট্টগ্রাম বাংলাদেশ এর সার্বিক কার্যক্রম বিস্তৃতির লক্ষ্যে
                      নতুন ওয়েবসাইট খো...
                      <Link to="/message/1">বিস্তারিত</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
*/}

          <section className="mt-4">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-12">
                    <h2 className="hdr-primary">
                      <span>আমাদের সম্পর্কে</span>
                    </h2>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="nav flex-column nav-pills nav-pills-custom"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <a
                        className="nav-link mb-3 py-3 px-2 shadow  active "
                        id="v-pills-bord-priciti-tab"
                        data-toggle="pill"
                        href="#v-pills-bord-priciti"
                        role="tab"
                        aria-controls="v-pills-bord-priciti"
                        aria-selected="                                    true
                              "
                      >
                        <i className="fa fa-info-circle mr-1" />
                        <span className="text-uppercase">বোর্ড পরিচিতি </span>
                      </a>
                      <a
                        className="nav-link mb-3 py-3 px-2 shadow "
                        id="v-pills-amader-karzkrm-tab"
                        data-toggle="pill"
                        href="#v-pills-amader-karzkrm"
                        role="tab"
                        aria-controls="v-pills-amader-karzkrm"
                        aria-selected="                                    false
                          "
                      >
                        <i className="fa fa-info-circle mr-1" />
                        <span className="text-uppercase">
                          আমাদের কার্যক্রম{" "}
                        </span>
                      </a>
                      <a
                        className="nav-link mb-3 py-3 px-2 shadow "
                        id="v-pills-ovivabker-dayitw-tab"
                        data-toggle="pill"
                        href="#v-pills-ovivabker-dayitw"
                        role="tab"
                        aria-controls="v-pills-ovivabker-dayitw"
                        aria-selected="                                    false
                          "
                      >
                        <i className="fa fa-info-circle mr-1" />
                        <span className="text-uppercase">
                          অভিভাবকের দায়িত্ব{" "}
                        </span>
                      </a>
                      <a
                        className="nav-link mb-3 py-3 px-2 shadow "
                        id="v-pills-chatr-chatreeder-krneey-tab"
                        data-toggle="pill"
                        href="#v-pills-chatr-chatreeder-krneey"
                        role="tab"
                        aria-controls="v-pills-chatr-chatreeder-krneey"
                        aria-selected="                                    false
                          "
                      >
                        <i className="fa fa-info-circle mr-1" />
                        <span className="text-uppercase">
                          ছাত্র-ছাত্রীদের করণীয়{" "}
                        </span>
                      </a>
                      <a
                        className="nav-link mb-3 py-3 px-2 shadow "
                        id="v-pills-bisesh-jruree-pramrs-madrasa-dui-belaek-bela-prsngoe-tab"
                        data-toggle="pill"
                        href="#v-pills-bisesh-jruree-pramrs-madrasa-dui-belaek-bela-prsngoe"
                        role="tab"
                        aria-controls="v-pills-bisesh-jruree-pramrs-madrasa-dui-belaek-bela-prsngoe"
                        aria-selected="                                    false
                          "
                      >
                        <i className="fa fa-info-circle mr-1" />
                        <span className="text-uppercase">বিশেষ পরামর্শ </span>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-9">
                    {/* Tabs content */}
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade shadow rounded bg-white p-4  show active "
                        id="v-pills-bord-priciti"
                        role="tabpanel"
                        aria-labelledby="v-pills-bord-priciti-tab"
                      >
                        <h4 className="mb-3 title">বোর্ড পরিচিতি</h4>
                        <p className="mb-2 description">
                          সর্ব প্রথম মহান আল্লাহ রাব্বুল আলামিনের দরবারে শুকরিয়া
                          আদায় করি, যিনি মানব জাতীকে সৃষ্টির শ্রেষ্ঠ হিসেবে
                          দুনিয়াতে প্রেরণ করেছেন। আরো শুকরিয়া আদায় করি ঐ মহান
                          করুনাময়ের নিকট যিনি আমাদেরকে শ্রেষ্ঠ নবীর উম্মত হিসেবে
                          দুনিয়াতে পাঠিয়েছেন।পৃথিবী সৃষ্টির পর থেকেই মানুষ
                          সামাজিকভাবে জীবন-যাপন করে আসছে। যুগে যুগে সমাজকে
                          আম্বিয়া (আঃ) ও তার উত্তরসূরী ওলামায়ে কেরাম ও শিক্ষিত
                          সমাজ ইসলামী শিক্ষা সহ আধুনিক শিক্ষায় শিক্ষিত করে
                          উন্নতশীল সমাজ ব্যবস্থা গঠনের লক্ষে সর্বাত্বক প্রচেষ্টা
                          চালিয়ে যাচ্ছে। সেই প্রচেষ্টাকে সামনে রেখেই বৃহত্তর
                          চট্টগ্রামের বিশিষ্ট্য উলামায়ে কেরাম ও শিক্ষিত সমাজ
                          ১৯৯৫সনে “নুরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                          বাংলাদেশ” নামে... &nbsp;
                          <Link to="/page/bord-priciti">বিস্তারিত</Link>
                        </p>
                      </div>
                      <div
                        className="tab-pane fade shadow rounded bg-white p-4 "
                        id="v-pills-amader-karzkrm"
                        role="tabpanel"
                        aria-labelledby="v-pills-amader-karzkrm-tab"
                      >
                        <h4 className="mb-3 title">আমাদের কার্যক্রম</h4>
                        <p className="mb-2 description">
                          কার্যক্রম:* কার্যক্ষত্রে: কার্যক্রম সমগ্র বাংলাদশে।*
                          প্রতিষ্ঠা সন: জানুয়ারী ১৯৯৫ সন হতে শুরু।* লক্ষ্য ও
                          উদ্দশ্যে:০১। প্রত্যকে মুসলমান এবং তাদের সন্তানদেরকে
                          বিশুদ্ধ কুরআন, ইসলামী দ্বীনি তাহযীব, তামাদ্দুন
                          সম্পর্কে শিক্ষা দেওয়া।০২। সঠিক আক্বীদা এবং দ্বীনি
                          শিক্ষার প্রচার ও প্রসার করা।০৩। কুরআন-হাদীস, মাসায়লে
                          এবং যুগোপযুগী বাংলা, গণিত, ইংরেজী শিক্ষার ব্যবস্থা
                          করা।* কর্মসূচী:০১। সমগ্র বাংলাদেশের প্রতি তিন মাইল
                          অন্তর বা জরুরী স্থানে “নূরানী তা’লীমুল কুরআন মাদ্রাসা”
                          প্রতিষ্ঠা করা।০২। প্রত্যেকটি নূরানী মাদ্রাসায়
                          পাঠ্যসূচী মোতাবকে শিক্ষার ব্যবস্থা করা।০৩। পাঠদানের
                          জন্য পাঠ্য বিষয় নির্ধারণ এবং মুদ্রণের ব্যবস্থা করা।০৪।
                          প্রতিটি নূরানী... &nbsp;
                          <Link to="/page/amader-karzkrm">বিস্তারিত</Link>
                        </p>
                      </div>
                      <div
                        className="tab-pane fade shadow rounded bg-white p-4 "
                        id="v-pills-ovivabker-dayitw"
                        role="tabpanel"
                        aria-labelledby="v-pills-ovivabker-dayitw-tab"
                      >
                        <h4 className="mb-3 title">অভিভাবকের দায়িত্ব</h4>
                        <p className="mb-2 description">
                          ⮞সন্তানকে প্রতিদিন নিয়মিত মাদ্রাসায় উপস্থিত থাকা
                          নিশ্চিত করা। ⮞সন্তানের দৈনন্দিন হাতের লেখা বাড়িতে গাইড
                          দিয়ে লেখানো। ⮞পাঁচ ওয়াক্ত নামাজ আদায় করানো। ⮞নামাজের
                          পর ফাজায়েলের সূরাসমূহ তিলাওয়াত করানো। ⮞পরিষ্কার
                          পরিচ্ছন্ন পোষাক পরিধান করিয়ে মাদ্রাসায় পাঠানো।
                          ⮞চক-শ্লেট, খাতা-কলম ইত্যাদি শেষ হওয়ার আগেই সংগ্রহ করে
                          দেওয়া। ⮞সাধারণ কোন সমস্যার জন্য মাদ্রাসায় অনুপস্থিত না
                          রাখা। ⮞কোন গ্রহণযোগ্য কাজের জন্য ছুটির প্রয়োজন হলে
                          অভিভাবকের পক্ষ থেকে দরখাস্ত অথবা সরাসরি মাদ্রাসায় এসে
                          ছুটি মঞ্জুর করে নেওয়া। ⮞আল্লাহ না করুন কোন
                          ছাত্র-ছাত্রী অসুস্থ হলে মাদ্রাসার শিক্ষক মহোদয়কে অবগত
                          করানো। ⮞মাদ্রাসার সাথে সু-সম্... &nbsp;
                          <Link to="/page/ovivabker-dayitw">বিস্তারিত</Link>
                        </p>
                      </div>
                      <div
                        className="tab-pane fade shadow rounded bg-white p-4 dess"
                        id="v-pills-chatr-chatreeder-krneey"
                        role="tabpanel"
                        aria-labelledby="v-pills-chatr-chatreeder-krneey-tab"
                      >
                        <h4 className="mb-3 title">ছাত্র-ছাত্রীদের করণীয়</h4>
                        <p className="mb-2 description">
                          ⮚&nbsp;উস্তাদগণের দিক নির্দেশনা অনুযায়ী মেহনত
                          করা।⮚&nbsp;দৈনিক হাতের লেখা সহ বাড়ির কাজ (হোম ওয়ার্ক)
                          সমূহ করে আসা।⮚&nbsp;মৌখিক বিষয়গুলো বাড়িতে বার বার
                          পড়া।⮚&nbsp;প্রত্যেক ছাত্র/ছাত্রী ক্লাস শুরু হওয়ার
                          ১৫মিনিট পূর্বে মাদ্রাসায় উপস্থিত হওয়া।⮚&nbsp;প্রতিদিন
                          নিয়মিত ক্লাসে উপস্থিত থাকা।⮚&nbsp;পরিষ্কার পরিচ্ছন্ন
                          পোষাক পরিধান করে মাদ্রাসায় আসা।⮚&nbsp;দৈনিক নিয়মিত
                          কুরআন তেলাওয়াতসহ পাঁচ ওয়াক্ত নামাজের পর ফাজায়েলের
                          সূরাগুলো তেলাওয়াত করা।⮚&nbsp;ছুটি ব্যতিত মাদ্রাসায়
                          অনুপস্থিত থাকলে মাদ্রাসা কর্তৃপক্ষের প্রদত্ত যে কোন
                          শাস্তি মেনে নেওয়া।⮚&nbsp;চক, শ্লেট, ডাষ্টার, খাতা ও
                          কলম ইত্যাদি শেষ হয়ে যাওয়ার পূর্বে অভিভাবককে অবগত করে
                          সংগ্রহ করে নেওয়া। ⮚&nbsp;সহপাঠিদের সাথে সুন্দর ও
                          শাল... &nbsp;
                          <Link to="/page/chatr-chatreeder-krneey">
                            বিস্তারিত
                          </Link>
                        </p>
                      </div>
                      <div
                        className="tab-pane fade shadow rounded bg-white p-4 "
                        id="v-pills-bisesh-jruree-pramrs-madrasa-dui-belaek-bela-prsngoe"
                        role="tabpanel"
                        aria-labelledby="v-pills-bisesh-jruree-pramrs-madrasa-dui-belaek-bela-prsngoe-tab"
                      >
                        <h4 className="mb-3 title">বিশেষ পরামর্শ</h4>
                        <p className="mb-2 description">
                          বিশেষ জরুরী পরামর্শ: (মাদ্রাসা দুই বেলা/এক বেলা
                          প্রসঙ্গে)নূরানী পদ্ধতির প্রবর্তক পীরে কামেল জনাব হযরত
                          মাও. ক্বারী বেলায়েত হুসাইন সাহেব (রহ.) ও নূরানী
                          তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ এর মুরুব্বীগণ
                          যুগ যুগ ধরে গবেষণার মাধ্যমে নূরানী পদ্ধতি ও মুসলমানদের
                          কচি-কাঁচা সন্তানদের জন্য একটি পূর্ণাঙ্গ সিলেবাস এবং
                          নীতিমালা প্রণয়ন করছেন। হযরতজ্বীর অভিজ্ঞতা ও গবেষণার
                          আলোকে নূরানীর ক্লাস টাইম দুইবেলা করছেন। কিন্তু আজকাল
                          আমরা বিভিন্ন কিন্ডার গার্টেন বা মুষ্টিমেয় দু’একটি
                          মাদ্রাসার দিকে দেখে এক বেলা করার আগ্রহ ও পরামর্শ দিয়ে
                          থাকি, যাহা ছোট ছোট ছেলে-মেয়েদের জন্য অত্যান্ত কষ্টকর ও
                          ক্ষতি ছাড়া আর কিছুই নয়।আমাদের উপলব্ধি করতে হবে, একটা
                          ছো... &nbsp;
                          <Link to="/page/bisesh-jruree-pramrs-madrasa-dui-belaek-bela-prsngoe">
                            বিস্তারিত
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <h2 className="hdr-primary">
                  <span className="মন্তব্য">মন্তব্য সমূহ</span>
                </h2>

                <div className="testimonial-slider">
                  <OwlCarousel options={options}>
                    {testimonialItems.map((item, index) => (
                      <div key={index} className="testimonial">
                        <p className="description">{item.description}</p>
                        <h3 className="title">{item.title}</h3>
                        <small className="post">{item.post}</small>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>

                <div
                  className="card shadow-sm hvr-float-shadow w-100"
                  style={{ marginTop: "1rem" }}
                >
                  <div className="card-body text-center training_institute_card p-2">
                    <a href="/event">
                      <i className="fas fa-calendar-alt text-white" />
                      <br />
                      <h3 className="text-center text-white">সভা ও অনুষ্ঠান</h3>
                    </a>
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

      <grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}

export default Index;
