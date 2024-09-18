/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Member1() {
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
          <div className="filter" style={{ marginTop: "1.3rem" }}>
            <div className="row">
              <div className="col-12">
                <h2 className="hdr-primary">
                  <span>প্রশিক্ষক-পরিদর্শক</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-slim-ullah-khannn.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-slim-ullah-khannn">
                      মাও. সলিম উল্লাহ খাঁন
                    </Link>
                  </h3>
                  <h4 className="title"> সিনিয়র প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link href="javascript:void(0)">
                      01871529920,(নিজ), 01322-891002 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/mastar-sfikul-islam.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/mastar-sfikul-islam">
                      মাস্টার শফিকুল ইসলাম
                    </Link>
                  </h3>
                  <h4 className="title"> সিনিয়র প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01789333636(নিজ), 01322-891003 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-emdadullah.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-emdadullah">
                      মাও. ক্বারী আলহাজ্ব এমদাদুল্লাহ সালাম সাহেব দা. বা.
                    </Link>
                  </h3>
                  <h4 className="title"> সিনিয়র প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01706799755 (নিজ), 01322-891004 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-mnjurul-islam.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-mnjurul-islam">
                      মাও. মনজুরুল ইসলাম
                    </Link>
                  </h3>
                  <h4 className="title"> সিনিয়র প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01937154499(নিজ), 01322-891006 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-nurul-abchar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-nurul-abchar">মাও. নুরুল আবছার</Link>
                  </h3>
                  <h4 className="title"> সিনিয়র প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01813267250(নিজ), 01322-891008 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-nurul-alm.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-nurul-alm">মাও. নুরুল আলম</Link>
                  </h3>
                  <h4 className="title"> সিনিয়র প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01818975995(নিজ), 01322-891025 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-harun-or-rsid.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-harun-or-rsid">
                      মাও. হারুন অর রশিদ
                    </Link>
                  </h3>
                  <h4 className="title"> সিনিয়র প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title">mawlanaharun25@gmail.com</h4>
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01830081125 (নিজ), 01991990400 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-enamul-hk.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-enamul-hk">মাও. এনামুল হক</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01741486002(নিজ), 01322-891011 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-abdul-baree.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-abdul-baree">মাও. আব্দুল বারী</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01720245338(নিজ), 01322-891013(অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-abchar-kamal.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-abchar-kamal">মাও. আবছার কামাল</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01832502099 (নিজ), 01322-891014 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-kamrul-islam.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-kamrul-islam">
                      মাও. কামরুল ইসলাম
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01843260159(নিজ), 01322-891009 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-ajijul-hk-khannn.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-ajijul-hk-khannn">
                      মাও. আজিজুল হক খান
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01717480692 (নিজ), 01322-891016 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-khlilul-gffar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-khlilul-gffar">
                      মাও. খলিলুল গফ্ফার
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01814357311(নিজ), 01322-891017 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-mahmudul-hasan.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-mahmudul-hasan">
                      মাও. মাহমুদুল হাসান
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01816002359(নিজ), 01322-891018 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-nurullah-saiful.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-nurullah-saiful">
                      মাও. নুরুল্লাহ সাইফুল
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01819686832(নিজ), 01322-891019(অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-ataur-rhman-chgeer.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-ataur-rhman-chgeer">
                      মাও. আতাউর রহমান ছগীর
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01763903171(নিজ), 01322-891054 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-kajee-muhammd-hasan.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-kajee-muhammd-hasan">
                      মাও. কাজী মুহাম্মদ হাসান
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01874919151(নিজ), 01322-891021(অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-nur-muhammd.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-nur-muhammd">মাও. নুর মুহাম্মদ</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01733121572(নিজ), 01322-891022 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-ruhul-amin.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-ruhul-amin">মাও. রুহুল আমিন</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01913810172(নিজ), 01322-891023 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-shidullah-madarsahee.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-shidullah-madarsahee">
                      মাও. শহিদুল্লাহ (মাদার্শাহী)
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01814805262(নিজ), 01322-891024(অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-taher.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-taher">মাও. তাহের</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01811130351(নিজ), 01322-891052 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-jamal-uddeen.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-jamal-uddeen">
                      মাও. জামাল উদ্দীন
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01799636736(নিজ), 01322-891026 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-atik-bin-hasan.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-atik-bin-hasan">
                      মাও. আতিক বিন হাসান
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01770181010(নিজ), 01322-891027(অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-ariful-islam.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-ariful-islam">
                      মাও. আরিফুল ইসলাম
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      0 1719255892 (নিজ), 01322891028 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-mufijul-islam.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-mufijur-rhman">
                      মাও. মুফিজুল ইসলাম
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01721542525(নিজ), 01322-891029 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-tajul-islam.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-tajul-islam">মাও. তাজুল ইসলাম</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01739844854(নিজ), 01322-891032 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-iusuf.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-iusuf">মাও. ইউসুফ</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01836232595,(নিজ), 01322-891031 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-oomr-faruk.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-oomr-faruk">মাও. ওমর ফারুক</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01813785956(নিজ), 01322-891033 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-shidullah-bannskhalee.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-shidullah-bannskhalee">
                      মাও. শহিদুল্লাহ (বাঁশখালী)
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01827292661(নিজ), 01322-891034 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-munirul-islam.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-munirul-islam">
                      মাও. মুনিরুল করিম
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01826308993(নিজ), 01322-891053 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-imam-hosain.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-imam-hosain">মাও. ইমাম হোসাইন</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01770740110, 01911164292(নীজ), 01322-891036 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-jamil-ahmd.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-jamil-ahmd">মাও. জামিল আহমদ</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01915535780(নিজ), 01322-891037 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-noman.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-noman">মাও. নোমান</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01811291520(নিজ), 01322-891038 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-ibraheem-muslim.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-ibraheem-muslim">
                      মাও. ইব্রাহীম মুসলিম
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01821011179(নিজ), 01322-891039 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-kamal-uddeen.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-kamal-uddeen">
                      মাও. কামাল উদ্দীন
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01834253699(নিজ), 01322-891041 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-mijanur-rhman">
                      মাও. এমরান বিন মাও. জমিরউদ্দীন সাহেব
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01635566862(নিজ), 01322-891056 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-abdur-rhim-rased.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-abdur-rhim-rased">
                      মাও. আবদুর রহিম রাশেদ
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01815671099(নিজ), 01322-891043(অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-forkan.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-forkan">মাও. ফোরকান</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01820061322(নিজ), 01322-891044 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-zobayer-hasan.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-zobayer-hasan">
                      মাও. যোবায়ের হাসান
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01969376600(নিজ), 01322891047 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-mahfujur-rhman.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-mahfujur-rhman">
                      মাও. মাহফুজুর রহমান
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title">mahfujshaikh333@gmail.com</h4>
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01639830297(নিজ), 01322-891046 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-asraf-habibee.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-asraf-habibee">
                      মাও. আশরাফ হাবিবী
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01616636036 (নিজ), 01322-891048 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-kwaree-lokman.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-kwaree-lokman">
                      মাও. ক্বারী লোকমান
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক , ক্বারী </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01817762020(নিজ), 01322-8910249 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-nurullah-bin-jamal-uddeen.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-nurullah-bin-jamal-uddeen">
                      মাও. নুরুল্লাহ বিন জামাল উদ্দীন
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01915181139, 01748184693(নিজ), 01322-891051(অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-manzuurul-hk-saheb.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-manzuurul-hk-saheb">
                      মাও. মানযূরুল হক সাহেব
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01740209293(নিজ) 01322891057 (অফিস)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoolana-chlim-ullah-amin.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-chlim-ullah-amin">
                      মাওলানা ছলিম উল্লাহ আমিন
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01978742705</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/mo-nachir-uddeen">মো: নাছির উদ্দীন</Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01712906624</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-fjle-rbbee.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-fjle-rbbee">মাও. ফজলে রব্বী</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01714650664</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-mo-iliyach-hosen.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-mo-iliyach-hosen">
                      মাও. মোঃ ইলিয়াছ হোসেন
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01911760638</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoolana-giyas-uddeen.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-giyas-uddeen">
                      মাওলানা গিয়াস উদ্দীন
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01824923175</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-jahed-hasan.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-jahed-hasan">
                      মাও. জাহেদ হাসান হাটহাজারী
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01818-562116</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-abdul-aleem.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-abdul-aleem">মাও. আব্দুল আলীম</Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01736-184217, 01642634989
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-mo-mnirul-islam-sirajee.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-mo-mnirul-islam-sirajee">
                      মাও. মোঃ মনিরুল ইসলাম সিরাজী
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01762-282230, 01618-042544
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-forkan-ftpuree">
                      মাওলানা ফোরকান ফতপুরী
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01811787300</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoolana-sahriyar-vujpuree-saheb.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-sahriyar-vujpuree-saheb">
                      মাওলানা শাহরিয়ার
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">
                      01600998250, 01329635059
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolan-abdul-hakim-saheb">
                      মাওলান আব্দুল হাকিম সাহেব
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01924568736</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-lokman-saheb-grduyaree">
                      মাওলানা লোকমান সাহেব গড়দুয়ারী
                    </Link>
                  </h3>
                  <h4 className="title"> প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01815642610</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-nurul-islam-saheb">
                      মাওলানা নুরুল ইসলাম সাহেব
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01812311392</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoolana-safayet-ullah-netrkona.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-sefayat-ullah-netrkona">
                      মাওলানা শাফায়েত উল্লাহ নেত্রকোনা
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">নিজ 01300458546 অফিস</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoolana-mohammd-iunuch-lohagara.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-iunuch-lohagara">
                      মাওলানা মোহাম্মদ ইউনুছ লোহাগাড়া
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01874767743</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoolana-sahadat-hosain-arbee.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-sahadat-hosain-arbee">
                      মাওলানা শাহাদাত হোসাইন আরবী
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01647444714</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-enamul-hk-hathajaree">
                      মাওলানা এনামুল হাসান সাহেব
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01814771243, 0132289104</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-mohammd-muhi-uddin-saheb">
                      মাওলানা মোহাম্মদ মুহি উদ্দিন সাহেব
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01815675159</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/hafej-maoolana-mohammd-asef">
                      হাফেজ মাওলানা মোহাম্মদ আসেফ
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01846166641 (নিজ)</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/hafej-maoo-arafat-srdar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/hafej-maoo-arafat-srdar">
                      হাফেজ মাও. আরাফাত সরদার
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">নিজ 01762268823</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoo-mufti-jahid-hasan-natoree.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-mufti-jahid-hasan-natoree">
                      মাও. মুফতি জাহিদ হাসান নাটোরী
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01730201421,01908055121</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoolana-mohammd-habeeb-ullah.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-mohammd-habeeb-ullah">
                      মাওলানা মোহাম্মদ হাবীব উল্লাহ
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01814140581</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoolana-sfikul-islam-sirajee.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-sfikul-islam-sirajee">
                      মাওলানা শফিকুল ইসলাম সিরাজী
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01738114148</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://www.nooraniboardctg.com/public/storage/member/maoolana-abdul-mannan-raygnjee.jpeg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoolana-abdul-mannan-raygnjee">
                      মাওলানা আব্দুল মান্নান রায়গঞ্জী
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক ও পরিদর্শক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01795717937</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team shadow">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://nooraniboardctg.com/public/assets/avatar.jpg"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    <Link to="/member/maoo-mo-abu-huraira-saheb">
                      মাও. মোঃ আবু হুরাইরা সাহেব
                    </Link>
                  </h3>
                  <h4 className="title"> সহকারী প্রশিক্ষক </h4>
                  <h4 className="title" />
                </div>
                <ul className="social">
                  <li>
                    <Link to="javascript:void(0)">01754155682</Link>
                  </li>
                </ul>
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

export default Member1;
