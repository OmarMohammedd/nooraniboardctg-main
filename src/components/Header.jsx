/* eslint-disable no-script-url */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://nooraniboardctg.com/public/js/noorani.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };


  return (
    <header style={{ marginBottom: "1.2rem" }}>
      <div className="header_top_section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mbl_hide">
              <ul className="header_top_link float-left h-100 mt-1">
                <li>
                  <Link to="">
                    <i className="fas fa-envelope-open"></i>{" "}
                    nooraniboardctg@gmail.com
                  </Link>
                </li>
                <li>
                  <Link to="" style={{ fontSize: "14px" }}>
                    <i className="fas fa-phone"></i> ০১৭৭১-৫৫৫০০০, ০১৩২২-৮৯১০২০,
                    ০১৩২২-৮৯১০৪০, ০১৩২২-৮৯১০৫০
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-12">
              <ul className="header_top_link float-right">
                <li>
                  <Link
                    style={{ padding: "4px 12px" }}
                    className="social_icon hvr-rectangle-out"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    target="_social"
                    to="https://www.facebook.com/%E0%A6%A8%E0%A7%82%E0%A6%B0%E0%A6%BE%E0%A6%A8%E0%A7%80-%E0%A6%A4%E0%A6%BE%E0%A6%B2%E0%A7%80%E0%A6%AE%E0%A7%81%E0%A6%B2-%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A6%86%E0%A6%A8-%E0%A6%AC%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%A1-%E0%A6%9A%E0%A6%9F%E0%A7%8D%E0%A6%9F%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6-106523684823684"
                    data-original-title="Facebook Page"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>

                <li>
                  <Link
                    style={{ padding: "4px 14px" }}
                    className="social_icon hvr-rectangle-out"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    target="_social"
                    to="imo://send?phone=8801771555000"
                    data-original-title="Imo: ০১৭৭১৫৫৫০০০"
                  >
                    <i className="fas fa-info"></i>
                  </Link>
                </li>

                <li>
                  <Link
                    className="social_icon hvr-rectangle-out"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    target="_social"
                    to="https://web.whatsapp.com/send?phone=8801771555000"
                    data-original-title="Whatsapp: ০১৭৭১৫৫৫০০০"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </Link>
                </li>

                <li className="login_link hvr-icon-pulse-grow">
                  <Link
                    to="/login"
                    style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                    className="hvr-rectangle-out"
                  >
                    <i className="fas fa-key hvr-icon"></i>&nbsp;প্রতিষ্ঠান
                    লগ-ইন
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="logo_section">
        <div className="container">
          <div className="row">
            <div className="col-12 m-auto text-center py-1 logo_portion">
              <Link to="/">
                <img
                  style={{
                    maxHeight: "125px",
                    width: "auto",
                    maxWidth: "100%",
                  }}
                  src="https://nooraniboardctg.com/public/main_cover.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
  


      
<div className="menu_bar" id="menu_bar">
  <div className="container">
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        
        <ul className="navbar-nav m-auto">
              <li className="nav-item">
                    <Link className="nav-link" to="/">
                      হোম{" "}
                    </Link>
                  </li>
                  <li className="nav-item dmenu dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      পরিচিতি
                    </Link>
                    <div
                      className="dropdown-menu sm-menu"
                      aria-labelledby="navbarDropdown"
                      style={{ display: "none" }}
                    >
                      <Link className="dropdown-item" to="/page/bord-priciti">
                        বোর্ড পরিচিতি
                      </Link>
                      <Link className="dropdown-item" to="/page/amader-karzkrm">
                        আমাদের কার্যক্রম
                      </Link>
                      <Link className="dropdown-item" to="/message/1">
                        চেয়ারম্যান
                      </Link>
                      <Link className="dropdown-item" to="/message/2">
                        মহাসচিব
                      </Link>
  
                      <Link
                        className="dropdown-item"
                        to="javascript:void(0)"
                        data-toggle="modal"
                        data-target="#phone_modal"
                      >
                        মাদরাসা নিবন্ধন (পরিদর্শক)
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dmenu dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      সদস্যসমূহ
                    </Link>
                    <div
                      className="dropdown-menu sm-menu"
                      aria-labelledby="navbarDropdown"
                      style={{ display: "none" }}
                    >
                      <Link className="dropdown-item" to="/members-list/1">
                        মজলিশে আমেলা (কার্যকরী পরিষদ)
                      </Link>
                      <Link className="dropdown-item" to="/members-list/2">
                        মজলিশে সূরা
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/members/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%95-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6%E0%A6%95"
                      >
                        প্রশিক্ষক ও পরিদর্শক
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/members/%E0%A6%85%E0%A6%AB%E0%A6%BF%E0%A6%B8-%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A6%BE"
                      >
                        অফিস কর্মকর্তা
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/members/%E0%A6%95%E0%A6%B0%E0%A7%8D%E0%A6%AE%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%80%E0%A6%AC%E0%A7%83%E0%A6%A8%E0%A7%8D%E0%A6%A6"
                      >
                        কর্মচারীবৃন্দ
                      </Link>
                    </div>
                  </li>
  
      
  
                  <li className="nav-item">
                    <Link className="nav-link" to="/application">
                       অনলাইন আবেদন
                    </Link>
                    {/* অ্যাপ্লিকেশন */}
                  </li>
  
                  <li className="nav-item">
                    <Link className="nav-link" to="/result">
                      ফলাফল
                    </Link>
                  </li>
  
                  <li className="nav-item">
                    <Link className="nav-link" to="/notice">
                      নোটিশ
                    </Link>
                  </li>
                  <li className="nav-item dmenu dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      প্রশিক্ষণ
                    </Link>
  
                    <div
                      className="dropdown-menu sm-menu"
                      aria-labelledby="navbarDropdown"
                      style={{ display: "none" }}
                    >
                      <Link
                        className="dropdown-item"
                        to="/moallem-training/%E0%A6%86%E0%A6%B0%E0%A6%AC%E0%A7%80"
                      >
                        মুয়াল্লিম প্রশিক্ষণ (আরবী)
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/moallem-training/%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE"
                      >
                        মুয়াল্লিম প্রশিক্ষণ (বাংলা)
                      </Link>
  
                      <Link className="dropdown-item" to="/moallem-training-center">
                        সকল প্রশিক্ষণ কেন্দ্রের তালিকা
                      </Link>
  
                      <Link className="dropdown-item" to="/permanent-training-center">
                        স্থায়ী প্রশিক্ষণ কেন্দ্রসমূহ
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/page/prsikshne-ongsgrhner-niymablee"
                      >
                        প্রশিক্ষণের নিয়মাবলী
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="/moallem-registration-forgot-form"
                      >
                        পূরণকৃত রেজিস্ট্রেশন ফরম ডাউনলোড
                      </Link>
  
                      <Link
                        className="dropdown-item"
                        to="/moallem-registration-admin-form"
                      >
                        প্রশিক্ষণার্থীর তালিকা (প্রশিক্ষক এডমিন)
                      </Link>
                    </div>
                  </li>
  
                  <li className="nav-item dmenu dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown_exam"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      পরীক্ষা সংক্রান্ত
                    </Link>
                    <div
                      className="dropdown-menu sm-menu"
                      aria-labelledby="navbarDropdown_exam"
                      style={{ display: "none" }}
                    >
                      <Link className="dropdown-item" to="/notice?is_exam=1">
                        নোটিশ
                      </Link>
                      <Link className="dropdown-item" to="/form/admit-card">
                        প্রবেশপত্র
                      </Link>
                    </div>
                  </li>
  
                  <li className="nav-item">
                    <Link className="nav-link " to="/payment-fee">
                      ফি প্রদান
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " to="/retail-order">
                      বই ও স্টেশনারি
                    </Link>
                  </li>
  
                  <li className="nav-item dropdown megamenu-li dmenu">
                    <Link
                      className="nav-link dropdown-toggle"
                      to=""
                      id="dropdown01"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      অন্যান্য
                    </Link>
                    <div
                      className="dropdown-menu megamenu sm-menu border-top"
                      aria-labelledby="dropdown01"
                      style={{ display: "none" }}
                    >
                      <div className="row">
                        <div className="col-sm-6 col-lg-3 border-right mb-4">
                          <h6>প্রকাশনা/পাঠ্যপুস্তক </h6>
                          <Link className="dropdown-item" to="/books/play">
                            <i className="fas fa-book-open"></i> প্লে
                          </Link>
                          <Link className="dropdown-item" to="/books/nursery">
                            <i className="fas fa-book-open"></i> নার্সারী
                          </Link>
                          <Link className="dropdown-item" to="/books/class-1">
                            <i className="fas fa-book-open"></i> প্রথম শ্রেণি
                          </Link>
                          <Link className="dropdown-item" to="/books/class-2">
                            <i className="fas fa-book-open"></i> দ্বিতীয় শ্রেণি
                          </Link>
                          <Link className="dropdown-item" to="/books/class-3">
                            <i className="fas fa-book-open"></i> তৃতীয় শ্রেণি
                          </Link>
                        </div>
                        <div className="col-sm-6 col-lg-3 border-right mb-4">
                          <h6>সিলেবাস</h6>
                          <Link className="dropdown-item" to="/syllabus/play">
                            <i className="fas fa-book-reader"></i> প্লে
                          </Link>
                          <Link className="dropdown-item" to="/syllabus/nursery">
                            <i className="fas fa-book-reader"></i> নার্সারী
                          </Link>
                          <Link className="dropdown-item" to="/syllabus/class-1">
                            <i className="fas fa-book-reader"></i> প্রথম শ্রেণি
                          </Link>
                          <Link className="dropdown-item" to="/syllabus/class-2">
                            <i className="fas fa-book-reader"></i> দ্বিতীয় শ্রেণি
                          </Link>
                          <Link className="dropdown-item" to="/syllabus/class-3">
                            <i className="fas fa-book-reader"></i> তৃতীয় শ্রেণি
                          </Link>
                        </div>
  
                        <div className="col-sm-6 col-lg-3 border-right mb-4">
                          <h6>ছবি/ভিডিও</h6>
  
                          <Link className="dropdown-item" to="/photo-gallery">
                            <i className="fas fa-camera-retro"></i>ছবি
                          </Link>
  
                          <Link className="dropdown-item" to="/video-gallery">
                            <i className="fas fa-file-video"></i> ভিডিও
                          </Link>
                          <Link className="dropdown-item" to="/event">
                            <i className="fas fa-calendar-alt"></i>সভা / অনুষ্ঠান
                          </Link>
                        </div>
                        <div className="col-sm-6 col-lg-3 border-right mb-4">
                          <Link
                            className="dropdown-item"
                            to="/page/bisesh-jruree-pramrs-madrasa-dui-belaek-bela-prsngoe"
                          >
                            <i className="fas fa-clipboard-check"></i>বিশেষ জরুরী
                            পরামর্শ
                          </Link>
  
                          <Link className="dropdown-item" to="/page/ovivabker-dayitw">
                            <i className="fas fa-atlas"></i>অভিভাবকের দায়িত্ব
                          </Link>
  
                          <Link
                            className="dropdown-item"
                            to="/page/chatr-chatreeder-krneey"
                          >
                            <i className="fas fa-clipboard-list"></i>ছাত্র-ছাত্রীদের
                            করণীয়
                          </Link>
  
                          <Link className="dropdown-item" to="/page/mene-clte-pari">
                            <i className="fas fa-calendar-check"></i>মেনে চলতে পারি
                          </Link>
  
                          <Link className="dropdown-item" to="/transaction">
                            <i className="fas fa-file-invoice-dollar"></i>অনলাইন
                            পেমেন্ট প্রুফ ডাউনলোড
                          </Link>
                          <Link className="dropdown-item" to="/contact">
                            <i className="fas fa-mail-bulk"></i>
                            যোগাযোগ
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
        </ul>
        
      </div>
    </div>
  </nav>
  </div>
</div>
    



      <div className="breaking_news">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-lg-1 col-2 pr-sm-0 pr-md-0">
              <div className="py-1 bg-danger text-white text-center breaking-caret">
                নোটিশ
              </div>
            </div>

            <div className="col-md-10 col-lg-11 col-10 pl-md-4 py-1">
              <div className="breaking-box">
                <div
                  id=""
                  className=""
                  data-ride=""
                >
                  <div className="carousel-inner"
                   style={{textAlign:"left"}}
                  >
                    <Slider {...settings}>
                    <div className="carousel-item ">
                      <Link
                        className="colorrr"
                        to="/notice/1m-samyik-preeksha-rutin-2023ing"
                      >
                        ১ম সাময়িক পরীক্ষা রুটিন: ২০২৪ইং
                      </Link>
                    </div>
                    <div className="carousel-item ">
                      <Link
                        className="colorrr"
                        to="/notice/1443-hijree-trriteey-srenir-preekshar-rutin"
                      >
                        ১৪৪৫ হিজরী -তৃতীয় শ্রেণির পরীক্ষার রুটিন
                      </Link>
                    </div>
                    <div className="carousel-item ">
                      <Link
                        className="colorrr"
                        to="/notice/hijree-1445-sner-ple-narsaree-prthm-oo-dwiteey-srenir-preekshar-rutin"
                      >
                        হিজরী ১৪৪৫ সনের -প্লে-নার্সারী, প্রথম ও দ্বিতীয় শ্রেণির
                        পরীক্ষার রুটিন
                      </Link>
                    </div>
                    <div className="carousel-item ">
                      <Link
                        className="colorrr"
                        to="/notice/1443-hijree-preekshar-fi-sngkrant"
                      >
                        ১৪৪৫ হিজরী পরীক্ষার ফি সংক্রান্ত
                      </Link>
                    </div>
                    <div className="carousel-item active ">
                      <Link
                        className="colorrr"
                        to="/notice/kendreey-snd-trriteey-preekshar-rutin"
                      >
                        কেন্দ্রীয় সনদ (তৃতীয়) পরীক্ষার রুটিন
                      </Link>
                    </div>
                    <div className="carousel-item ">
                      <Link className="colorrr" to="/notice/onlaine-fi-prisodher-pddhti">
                        অনলাইনে ফি পরিশোধের পদ্ধতি
                      </Link>
                    </div>
                    <div className="carousel-item ">
                      <Link
                        className="colorrr"
                        to="/notice/onlaine-bi-oo-shtesnaree-pnz-kryer-pddhti"
                      >
                        অনলাইনে বই ও ষ্টেশনারী পণ্য ক্রয়ের পদ্ধতি
                      </Link>
                    </div>
                    <div className="carousel-item ">
                      <Link
                        className="colorrr"
                        to="/notice/kendreey-snd-preeksha-2023-er-cithi"
                      >
                        কেন্দ্রীয় সনদ পরীক্ষা- ২০২৩ এর চিঠি
                      </Link>
                    </div>
                    </Slider>



                    {/* <div className="navigation-box p-2 d-none d-sm-block">
                    <Link
                      className="carousel-control-prev text-primary"
                      to="#carouselbreaking"
                      role="button"
                      data-slide="prev"
                    >
                      <i className="fa fa-angle-left" aria-hidden="true"></i>
                      <span className="sr-only">Previous</span>
                    </Link>

                    <Link
                      className="carousel-control-next text-primary"
                      to="#carouselbreaking"
                      role="button"
                      data-slide="next"
                    >
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      <span className="sr-only">Next</span>
                    </Link>
                  </div> */}


                  </div>

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
