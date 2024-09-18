import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Permanent_training_center() {
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
            স্থায়ী প্রশিক্ষণ কেন্দ্রের তালিকা{" "}
          </h3>
          <hr />
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">মাদরাসা-ই-তা’লীমুল কুরআন</h3>
                  <h4 className="inst_title">
                    {" "}
                    লাউতাড়া, সুভাষিনী, তালা, সাতক্ষীরা, খুলনা
                  </h4>
                  <h4 className="inst_title"> ০১৭১৭২০৬৬০১, ০১৭৯৪৬৪২০৭৭</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">দারুল কুরআন নূরীয়া মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    কাইশারচর, ভাকুর্তা, সাভার, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭১৭২০৬৬০১, ০১৯৩৭১৫৪৪৯৯</h4>
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
                    নূরানী মডেল মাদরাসা এন্ড স্কুল শাখা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    শাহবাজপুর, জামালপুর সদর, জামালপুর, ময়মনসিংহ
                  </h4>
                  <h4 className="inst_title"> ০১৭১৫২৬৫১৩৪,</h4>
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
                    আল জামিয়াতুল কারীমিয়া নূরুল উলূম জুম্মাপাড়া (নূরানী বিভাগ)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    জুম্মাপাড়া, রংপুর সদর, রংপুর, রংপুর
                  </h4>
                  <h4 className="inst_title"> ০১৭২১২১৭০৪৫, ০১৭৩৯১৮৯১৯৩</h4>
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
                    ধুমসাদ্দা রশিদিয়া ইসলামিয়া মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    ধুমসাদ্দা, আফতাব বিবিরহাট, ফেনী সদর, ফেনী, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৮১৫৩৪০৬৬২, ০১৮১৭৪৪২৮৫০</h4>
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
                    জামেয়া ইসলামিয়া জমিরিয়া নূরুল উলূম হরিপুর
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    উত্তর হরিপুর (বাংলাবাজার), হরিপুর, ছাগলনাইয়া, ফেনী,
                    চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৭৪০৫৪৪২২৩, ০১৮১৭৫৬১৫৮০</h4>
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
                    আল-জামিয়াতুল আরাবিয়াতুল আহলিয়া দারুল উলূম ওয়া দারুল আইতাম
                    (হোসাইনিয়া মাদ্রাসা ও এতিমখানা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    মিরওয়ারিশপুর, বেগমগঞ্জ, নোয়াখালী, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৭১২৬৩১০০৬, ০১৮১৯৬৮৬৮৪২</h4>
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
                    দক্ষিণ বালিয়া বাখরপুর হামিদিয়া মাদরাসা ও এতিমখানা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    দক্ষিণ বালিয়া (চান্দ্রা চৌরাস্তা মাদরাসা), বাখরপুর, চাঁদপুর
                    সদর, চাঁদপুর, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৬৪১৪৩৬০২৭, ০১৬০৬৬৭৬৬০৬</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">জামিয়া ইউনুছিয়া মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    ব্রাহ্মণবাড়িয়া সদর, ব্রাহ্মণবাড়িয়া, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৭১২০২৩৬৭৩, ০১৭৫৩৮৭০৫৫৮</h4>
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
                    জামিআ’ মুহাম্মদিয়া হুসাইনিয়া গাজীপুর
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    বিজয় রোড, মোগরখাল, গাজীপুর সদর, গাজীপুর, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭১০৩৮০০১২, ০১৮৬৭৬৫৪২৫৭</h4>
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
                    জামেয়াতুস সুফফা আল-ইসলামিয়া টঙ্গী
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    পাগাড় (ঝিনু মার্কেট), মন্নু নগর, টঙ্গী, গাজীপুর, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭৩২১৩২২৮৯, ০১৯৩৪৬২৪৫৮৬</h4>
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
                    ফয়জুল উলূম হামিউসসুন্নাহ নূরানী মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    দারগারচালা, মাওনা বাজার, শ্রীপুর, গাজীপুর, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৯২১৮৪২৯৩০,</h4>
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
                    জামেয়া মাদানিয়া ইসলামিয়া (কাজির বাজার মাদরাসা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    কাজির বাজার, কাজির বাজার, সিলেট সদর, সিলেট, সিলেট
                  </h4>
                  <h4 className="inst_title"> ০১৭১৪৪৩০৫১৩,</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">আহমদ ইসলামিক সেন্টার</h3>
                  <h4 className="inst_title">
                    {" "}
                    বরায়া (উত্তরবাগ), গোলাপগঞ্জ, সিলেট, সিলেট
                  </h4>
                  <h4 className="inst_title"> ০১,</h4>
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
                    কাশেমপুর নূরানী কিন্ডার গার্টেন মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    কাশেমপুর, রসুলপুর, সাতক্ষীরা সদর, সাতক্ষীরা, খুলনা
                  </h4>
                  <h4 className="inst_title"> ০১৭১৪৬৭১৮৭০, ০১৭৭৮৭১৫৮৫০</h4>
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
                    জামিয়া আরাবিয়া সিদ্দীকিয়া ক্বওমীয়া
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    পাটকেলঘাটা, পাটকেলঘাটা, পাটকেলঘাটা, সাতক্ষীরা, খুলনা
                  </h4>
                  <h4 className="inst_title"> ০১৮১৮৭৪৭৯৯৫,</h4>
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
                    দারুল উলূম ফয়জিয়া মহিউসসুন্নাহ মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    গাংগর, সাতোর, বীরগঞ্জ, দিনাজপুর, রংপুর
                  </h4>
                  <h4 className="inst_title"> ০১৮২৪৮১৫৫৮৭, ০১৭৬৪৭৬০৯৬০</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">দারুস সুন্নাহ মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    বাহাদুরপুর, শিক্ষাবোর্ড, যশোর সদর, যশোর, খুলনা
                  </h4>
                  <h4 className="inst_title"> ০১৭৭৩৬৫৬৬৭৭, ০১৯৪১৩৪৬৩১৬</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">মোমতাজুল উলূম মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    লুৎফর মুন্সি সড়ক, কুঠিপাড়া, কুষ্টিয়া সদর, কুষ্টিয়া, খুলনা
                  </h4>
                  <h4 className="inst_title"> ০১৭৪৯৬৭২৩০০, ০১৭২২৯৫৩৯৫৫</h4>
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
                    আল জামিয়াতুল আরবিয়্যা কাসেমুল উলূম ক্বওমী মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    কালুপাড়া (রহমতপাড়া), শত্রুজিৎপুর, মাগুরা সদর, মাগুরা, খুলনা
                  </h4>
                  <h4 className="inst_title"> ০১৭১৫৩৫১৮৭৮, ০১৬১৫৩৫১৮৭৮</h4>
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
                    আল-জামিয়াতুল ইসলামিয়া আশরাফুল উলূম শামুকখোলা ক্বওমী মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    শামুকখোলা, এন.এস. খোলা, লোহাগড়া, নড়াইল, খুলনা
                  </h4>
                  <h4 className="inst_title"> ০১৭১৬১৩৭৪৭৩,</h4>
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
                    জামিয়া ইসলামিয়া দারুস সুন্নাহ (গোরস্থান মাদরাসা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    কেন্দ্রীয় গোরস্থান কমপ্লেক্স, টাঙ্গাইল সদর, টাঙ্গাইল, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭১৪২৫৯৩১৫, ০১৭২২৪৯৬৪১০</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">জামিয়া আল হেরা</h3>
                  <h4 className="inst_title">
                    {" "}
                    উত্তর তারুটিয়া, ঘারিন্দা, টাঙ্গাইল সদর, টাঙ্গাইল, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭২৪৬৪৬৪৬২,</h4>
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
                    জামিয়া কাশেফুল উলূম (হাটখোলা মাদরাসা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    হাটখোলা, মধুপুর, টাঙ্গাইল, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭১৪৭৮৪১১৭, ০১৭৭৭৩১৬৭৭০</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">মাদ্রাসা বা’বুল উলূম</h3>
                  <h4 className="inst_title">
                    {" "}
                    মুরাইদ, সিরাজনগর, গারো বাজার, ঘাটাইল, টাঙ্গাইল, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৯১৫৯৭৯৬৯৬, ০১৭০৯৫৩৬৮৩৩</h4>
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
                    সওতুল কুরআন নূরানী প্রি-ক্যাডেট এন্ড হিফজ মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    বাগানবাড়ী, এলেঙ্গা, কালিহাতী, টাঙ্গাইল, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭২৮৮০২৭৭৬,</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">দারুল উলূম মুইনুস সুন্নাহ</h3>
                  <h4 className="inst_title">
                    {" "}
                    ভানুগাছ রোড, রেল গেইট, শ্রীমঙ্গল, শ্রীমঙ্গল, মৌলভীবাজার,
                    সিলেট
                  </h4>
                  <h4 className="inst_title"> ০১৭১২১৯৯৩৫৩, ০১৭৭৭০০০৭২৫</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">বাইতুল কুরআন হাফিজিয়া মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    দত্তপাড়া, ঈশ্বরগঞ্জ, ময়মনসিংহ, ময়মনসিংহ
                  </h4>
                  <h4 className="inst_title"> ০১৭৫৩৬৩৯৫১৭,</h4>
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
                    নেত্রকোণা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ (ফয়জুল উলূম হামিউসসুন্নাহ মাদরাসা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    হোসেনপুর, নেত্রকোণা সদর, নেত্রকোণা, ময়মনসিংহ
                  </h4>
                  <h4 className="inst_title"> ০১৩২২৮৯১০৩৭,</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">জামিয়া মিফতাহুল উলূম মাদ্রাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    নেত্রকোনা সদর, নেত্রকোণা সদর, নেত্রকোণা, ময়মনসিংহ
                  </h4>
                  <h4 className="inst_title"> ০১৯২৫৬১৭২৮৭, ০১৭৩৬৮৮০৪১৪</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">জামিয়া হোসাইনিয়া মউ মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    মউ, কেরানখলা, দুর্গাপুর, নেত্রকোণা, ময়মনসিংহ
                  </h4>
                  <h4 className="inst_title"> ০১৭১৭৯৪৯৯৬৩,</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">জামিয়া হোসাইনিয়া আরাবিয়া</h3>
                  <h4 className="inst_title">
                    {" "}
                    কাজিরপাড়া, মেলান্দহ, জামালপুর, ময়মনসিংহ
                  </h4>
                  <h4 className="inst_title"> ০১৯১৪০২৬৬৮১,</h4>
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
                    হামিউসসুন্নাহ রউজাতুল উলূম মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    সাতপাকিয়া (ফেরীঘাট), দিকপাড়া, শেরপুর সদর, শেরপুর, ময়মনসিংহ
                  </h4>
                  <h4 className="inst_title"> ০১৭৪০৯২৪৯৯২,</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">রাজশাহী দারুল উলূম মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    মালোপাড়া, বোয়ালিয়া, রাজশাহী, রাজশাহী
                  </h4>
                  <h4 className="inst_title"> ০১৭৪৬৮৫৭১০২, ০১৭২৮৪৫৫৩০৪</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">চাঁন্দলাই নূরানী একাডেমী</h3>
                  <h4 className="inst_title">
                    {" "}
                    চাঁন্দলাই, চাঁপাইনবাবগঞ্জ, চাঁপাইনবাবগঞ্জ সদর,
                    চাঁপাইনবাবগঞ্জ, রাজশাহী
                  </h4>
                  <h4 className="inst_title"> ০১৭২৭৯০৬৮৫৩, ০১৭৪০৮৬২৪৭১</h4>
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
                    মিরপুর এমদাদিয়া হাফিজিয়া নূরানী মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    মিরপুর, সিরাজগঞ্জ, সিরাজগঞ্জ সদর, সিরাজগঞ্জ, রাজশাহী
                  </h4>
                  <h4 className="inst_title"> ০১৭৩৪৬৯৪৭৪৩, ০১৭৯৫৩৫৩৬৩৪</h4>
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
                    তা’লীমুস সুন্নাহ মাদরাসা (নূরানী বিভাগ)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    শাহানগাছা, ছোনগাছা, সিরাজগঞ্জ সদর, সিরাজগঞ্জ, রাজশাহী
                  </h4>
                  <h4 className="inst_title"> ০১৯২৮৬০১৪৭৪,</h4>
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
                    জামিয়াতুল আবরার সিরাজগঞ্জ তা’লীমুসুন্নাহ মাদ্রাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    মিরপুর, সিরাজগঞ্জ সদর, সিরাজগঞ্জ, রাজশাহী
                  </h4>
                  <h4 className="inst_title"> ০১৭১১৪৬৬০৬৩,</h4>
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
                    জামিয়া হোসাইনিয়া মদীনাতুল উলূম হাফেজিয়া মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    আঠারদাগ, খুকনী বাজার, এনায়েতপুর, সিরাজগঞ্জ, রাজশাহী
                  </h4>
                  <h4 className="inst_title"> ০১৭১২০৭৮১০৩, ০১৭১২০৭৮১০৪</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">জামেয়া আশরাফিয়া পাবনা</h3>
                  <h4 className="inst_title">
                    {" "}
                    লস্করপুর (০৮নং ওয়ার্ড), পাবনা, পাবনা সদর, পাবনা, রাজশাহী
                  </h4>
                  <h4 className="inst_title"> ০১৭৪৯৭২৯৯৬২,</h4>
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
                    দারুল উলূম ফারুকিয়া আল ইসলামিয়া মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    মাগুড়া (প্রধান পাড়া), মাগুড়া- ৫০৪১, পঞ্চগড় সদর, পঞ্চগড়,
                    রংপুর
                  </h4>
                  <h4 className="inst_title"> ০১৭২৬৩১৫৭৫৭,</h4>
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
                    জামিয়া ইসহাকিয়া ইসলামিয়া মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    দাসেরহাট, কাঁঠালবাড়ী, কুড়িগ্রাম সদর, কুড়িগ্রাম, রংপুর
                  </h4>
                  <h4 className="inst_title"> ০১৭১৬৪৫২৩৮০, ০১৭৬২৯৫৯১৭৭</h4>
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
                    ধর্মাদী ফয়জুল উলূম ইসলামিয়া মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    ধর্মাদী, রুইয়া, বরিশাল সদর, বরিশাল, বরিশাল
                  </h4>
                  <h4 className="inst_title"> ০১৯২৫৮৬৮১৭৮, ০১৯২১০০১১৮৭</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">জামেউল উলূম রাজ্জাকিয়া মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    মাদানী নগর, কাউনিয়া, কাউনিয়া, বরিশাল, বরিশাল
                  </h4>
                  <h4 className="inst_title"> ০১৭১১৪৭২৯৪৪, ০১৭২৯১৯৫৫৬৪</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">রাজাপুর দারুল উলূম কওমী মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    রাজাপুর (বাইপাস মোড়), রাজাপুর, রাজাপুর, ঝালকাঠি, বরিশাল
                  </h4>
                  <h4 className="inst_title"> ০১৭৯৮৬৪০২৪৭, ০১৩১৫৪৬১৬৫১</h4>
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
                    আজিজিয়া দারুল উলূম মাদরাসা ও এতিমখানা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    আলীনগর, ভোলা সদর, ভোলা, বরিশাল
                  </h4>
                  <h4 className="inst_title"> ০১৭১২০০৬২১০,</h4>
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
                    মাদরাসা আজীজিয়া ক্বাছেমুল উলূম দোহাজারী
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    দোহাজারী পৌরসভা, দোহাজারী, চন্দনাইশ, চট্টগ্রাম, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৮১৪৭২৯২৬৭, ০১৮২৩৯০৭৫৩৫</h4>
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
                    আল-মাদ্রাসাতুল আরবিয়াতুল খাইরিয়া ও এতিমখানা (নূরানী বিভাগ)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    উত্তর পারুয়া পাড়া, চুন্নাপাড়া, আনোয়ারা, চট্টগ্রাম,
                    চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৭১১১৫২২২৬, ০১৮১৪১০৭৫৪১</h4>
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
                    উমিদিয়া জামেয়া ইসলামিয়া (নূরানী বিভাগ)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    কুলসুম নগর, কক্সবাজার, কক্সবাজার সদর, কক্সবাজার, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৮১১৬১৭০১৬, ০১৮১৯০৩২৪৫৮</h4>
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
                    আল-জামিয়া আল-ইসলামীয়া দারুল উলূম চাকমারকুল (বড় মাদরাসা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    চাকমারকুল, রামু, কক্সবাজার, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৮১৭৭০৩৪০০, ০১৮১১২৫৫২৯৯</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">মদীনাতুল উলূম মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    হারামিয়া (৮নং ওয়ার্ড), বক্তার হাট, সন্দ্বীপ, চট্টগ্রাম,
                    চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৮১৪৯৪৬৬৭৬, ০১৮১৫৮৬৫৭২৫</h4>
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
                    মদীনাতুল উলূম মাদরাসা হেফজখানা ও এতিমখানা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    মদিনা নগর (গঞ্জপাড়া), খাগড়াছড়ি, খাগড়াছড়ি সদর, খাগড়াছড়ি,
                    চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৮২২৪৭৬০৮৪, ০১৯৭৩২৮৩৬১১</h4>
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
                    দারুল উলূম হযরত সুমাইয়া শহীদা (রা.) বালিকা মাদ্রাসা,
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    ছোট মেরুং ৪নং টাওয়ার টিলা, দিঘীনালা, খাগড়াছড়ি, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৮৬৪৭০৯১৮৮,</h4>
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
                    এশায়াতুস সুন্নাহ তাহ্ফীজুল কুরআন মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    দক্ষিণ-পূর্ব মেখল, মেখল, হাটহাজারী, চট্টগ্রাম, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৮১৯৮৭৪২৮১, ০১৮১৭৭৭৯৫৪০</h4>
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
                    মানারুল হুদা তাহফিজুল কুরআন মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    দক্ষিণ কাট্টলী (বনিক পাড়া), কাস্টম একাডেমী, পাহাড়তলী,
                    চট্টগ্রাম, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৮২৫৩৫৩১৬৮,</h4>
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
                    গোপালপুর হাফেজিয়া নূরানী মাদরাসা ও এতিমখানা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    গোপালপুর, আলফাডাঙ্গা, ফরিদপুর, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭১৪৬৯৬৯২২,</h4>
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
                    শিরগ্রাম আজিজুল উলূম মাদরাসা ও এতিমখানা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    শিরগ্রাম, আলফাডাঙ্গা, আলফাডাঙ্গা, ফরিদপুর, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭২১৮০৫৯৯৩, ০১৮৭৪৫৪৫৫৪৭</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">তাহফিজুল কুরআন নূরানী মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    হরি কুমারিয়া, মাদারীপুর সদর, মাদারীপুর, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৬৮৮৬২৬৫৫৫, ০১৭২৫৮৪৮৫৪৭</h4>
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
                    জামিয়া মুহাম্মদিয়া শামসুল উলূম মাদরাসা (শিশু শিক্ষা নিকেতন)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    গুয়াতলা, বাহেরচর, শিবচর, মাদারীপুর, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭২২৯১১১৯৩,</h4>
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
                    আল জামিয়াতুল ইসলামিয়া দারুল উলূম
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    দারোয়ানী টেক্সটাইল মিলস্, চৌরঙ্গী মোড়, নীলফামারী সদর,
                    নীলফামারী, রংপুর
                  </h4>
                  <h4 className="inst_title"> ০১৭৮৪৭৬৯৯৮৩, ০১৭৫৮৫১৮৬৬৬</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">দারুল উলূম ইসলামিয়া মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    উদয় সাগর (হাজীপাড়া), পলাশ বাড়ী, পলাশবাড়ী, গাইবান্ধা, রংপুর
                  </h4>
                  <h4 className="inst_title"> ০১৭৩৪৫১৭৩০৯,</h4>
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
                    মাহমুদিয়া হাফিজিয়া ও নূরানী প্রি-ক্যাডেট মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    শিপেরখাল, আশাখালী, বরগুনা সদর, বরগুনা, বরিশাল
                  </h4>
                  <h4 className="inst_title"> ০১৭১৮২০৪৪২২, ০১৬২৪৫২৫৫৩৫</h4>
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
                    ঢাকা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    কুরগাঁও (পুরাতন পূর্বপাড়া), নবীনগর, আশুলিয়া, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৩২২৮৯১০৩৫, ০১৬১২৩৬৭৭৫৬</h4>
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
                    দারুল উলূম মাবিয়া ইসলামিয়া মাদরাসা (একাডেমী শাখা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    গেরুয়া (ডেইরীফার্ম), জাহাঙ্গীরনগর, আশুলিয়া, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭১৫৮৩৭৩৬৪, ০১৭৫০১৬০০০৬</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">জামিয়া দারুল আমান সাভার</h3>
                  <h4 className="inst_title">
                    {" "}
                    আফছার নগর (রাজারবাড়ী), মজিদপুর, সাভার, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭১৭৭৬৫১৫৫,</h4>
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
                    জামিয়া মদিনাতুল উলূম (আমিন বাজার মাদরাসা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    পাঁচ গাছিয়া, আমীন বাজার, সাভার, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৮১৮৩৩৮৭৭৪, ০১৬১৪৪০৩২৩৪</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">হাফিজুল উলূম মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    মোগরাকান্দা (কবরস্থান সংলগ্ন), ভাকুর্তা, সাভার, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৮১৫৮১৬৯৩০,</h4>
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
                    জামিয়া আরাবিয়া শামসুল উলূম মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    ডাইয়ারকুম, ডাইয়া, গজারিয়া, আল আমিন বাজার, দোহার, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৯২১০৯০৫৪২, ০১৯১৮০২৯৩০৭</h4>
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
                    জামি’আ আশরাফিয়া হালীমিয়া আবেদিয়া (মক্কী নগর মাদরাসা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    মক্কীনগর (কদমপুর), আব্দুল্লাহপুর, কেরাণীগঞ্জ, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭৫৫১০৯৬৩১, ০১৭১০২৭১৩৪২</h4>
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
                    জামিয়া আশরাফিয়া ক্বওমীয়া মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    সিরাজনগর, কলাতিয়া, কেরাণীগঞ্জ, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭৩৬৭০২০৫০,</h4>
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
                    জামেয়া নূরীয়া ইসলামিয়া (রওজাতুল আতফাল কিন্ডার গার্টেন)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    হুজুরপাড়া, আশরাফাবাদ, কামরাঙ্গীরচর, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৯২৩০৩১১৫৩,</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">দারুল উলূম সরিষাবাড়ী</h3>
                  <h4 className="inst_title">
                    {" "}
                    পুরাতন মার্কায, সাতপোয়া, সরিষাবাড়ী, জামালপুর, ময়মনসিংহ
                  </h4>
                  <h4 className="inst_title"> ০১৯১৩০৩৮৪৪৮,</h4>
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
                    জামিয়া ছিদ্দিকীয়া (যাদুরচর মাদরাসা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    যাদুরচর, হেমায়েতপুর, সাভার, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭১১৬৬৪৬১৭, ০১৬১৬৯৩০৯৫০</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">কাশেমপুর মদীনাতুল উলূম মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    কাশেমপুর, সিটি কলেজ, সাতক্ষীরা সদর, সাতক্ষীরা, খুলনা
                  </h4>
                  <h4 className="inst_title"> ০১৭১৭২০৬৬০১, ০১৭১৪৬৭১৮৭০</h4>
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
                    আল-জামেয়াতুল আহলিয়া দারুল উলূম মুঈনুল ইসলাম (হাটহাজারী
                    মাদরাসা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    হাটহাজারী, চট্টগ্রাম, চট্টগ্রাম।
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
                    জামিয়া ইসলামীয়া দারুল উলূম (নুনাইচ মাদরাসা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    গোদাগাড়ী, গোদাগাড়ী, দিনাজপুর সদর, দিনাজপুর, রংপুর
                  </h4>
                  <h4 className="inst_title"> ০১৭২০২৪৫৩৩৮,</h4>
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
                    জামিয়া ইসলামিয়া দারুল উলূম সাভার
                  </h3>
                  <h4 className="inst_title"> রাজাশন, সাভার, ঢাকা, ঢাকা</h4>
                  <h4 className="inst_title"> ০১৭৩৫৮৯৮২২০,</h4>
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
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">আন-নূর ইসলামী একাডেমী</h3>
                  <h4 className="inst_title">
                    {" "}
                    মাদানীনগর (বেলদী), নরসিংদী সদর, নরসিংদী, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭৩৩৯২৯৪০৭,</h4>
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
                    তাহসিনুল কুরআন নূরানী মডেল মাদরাসা উপরাজারামপুর মোড়
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    উপরাজারামপুর, চাঁপাইনবাবগঞ্জ সদর, চাঁপাইনবাবগঞ্জ, রাজশাহী
                  </h4>
                  <h4 className="inst_title"> ০১৭২১২০৭৮৯৪,</h4>
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
                    জামিয়া ইসলামিয়া মদিনাতুল উলূম লক্ষীপুর
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    গৌরীপুর, গৌরীপুর, দাউদকান্দি, কুমিল্লা, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৮৩৫২২৪৯৮৮, ০১৭৫৫৫৯৬৬৩৮</h4>
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
                    আল জামিয়া ইসলামিয়া মদীনাতুল উলূম কেরাণীগঞ্জ
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    মধ্যেরচর, শ্যামলাপুর, কেরাণীগঞ্জ, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭৪৭১০৭২৪৭, ০১৯৭৭১০৭২৪৭</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">আল জামিয়াতুল ইমদাদিয়া কিশোরগঞ্জ</h3>
                  <h4 className="inst_title">
                    {" "}
                    কিশোরগঞ্জ সদর, কিশোরগঞ্জ, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৯১১১৩৭০৯০, ০১৭১১৬৬৭০৮১</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">মাদ্রাসাতুল উলূমিশ শারইয়্যাহ</h3>
                  <h4 className="inst_title">
                    {" "}
                    গোদারপাড়া, বগুড়া সদর, বগুড়া, রাজশাহী
                  </h4>
                  <h4 className="inst_title"> ০১৭১৬০২৮৪২৭, ০১৭১১৯৬৮৯৬৯</h4>
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
                    আল জামিয়াতুল ইসলামিয়া কাসেমুল উলূম ক্বওমী মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    বলিদাপাড়া, নলডাঙ্গা, কালীগঞ্জ, ঝিনাইদহ, খুলনা
                  </h4>
                  <h4 className="inst_title"> ১৭১১৯৬৪৮৮৬, ০১৬০৮১৪৬৮২৩</h4>
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
                    ঢাকা নয়াটোলা আনওয়ারুল উলূম নো’মানিয়া কামিল মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    নয়াটোলা (মগবাজার), শান্তিনগর, হাতিরঝিল, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭১১২০৬৫১৮, ০১৬১৫০৩২৩৮৭</h4>
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
                    মারকাযুল উলূম আলহাজ্ব নূরুল ইসলাম চৌধুরী ক্বওমী মাদরাসা ও
                    এতিমখানা
                  </h3>
                  <h4 className="inst_title"> লালমোহন, ভোলা, বরিশাল</h4>
                  <h4 className="inst_title"> ০১৭,</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">রাঙ্গামাটি দারুল উলূম</h3>
                  <h4 className="inst_title">
                    {" "}
                    আমানতবাগ (কলজ গেইট), রাঙ্গামাটি সদর, রাঙ্গামাটি সদর,
                    রাঙ্গামাটি, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৮৫৯০৪৪৭১০, ০১৮৭৭১২২৫৭৫</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">হিদায়াতুল উম্মাহ মডেল মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    পূর্ব সাপটানা (নয়ারহাট), লালমনিরহাট সদর, লালমনিরহাট, রংপুর
                  </h4>
                  <h4 className="inst_title"> ০১৭৯৮১১২০৯২, ০১৭৪০১৩৬৩৩১</h4>
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
                    জামেয়া লুৎফিয়া আনওয়ারুল উলূম হামিদনগর বরুণা মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    হামিদনগর, হামিদনগর, শ্রীমঙ্গল, মৌলভীবাজার, সিলেট
                  </h4>
                  <h4 className="inst_title"> ০১৭১৫০৮৬১২৫,</h4>
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
                    জামিয়া ইসলামিয়া মদিনাতুল উলুম লক্ষীপুর
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    লক্ষীপুর, গৌরিপুর, দাউদকান্দি, কুমিল্লা, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৭৫৫৫৯৬৬৩৮,</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">জামিয়া ইসলামিয়া এমদাদুল উলূম</h3>
                  <h4 className="inst_title">
                    {" "}
                    দয়াপুর, বাজার চৌয়ারা, সদর দক্ষিণ, কুমিল্লা, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৭১১৭৩৭২৩৪,</h4>
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
                    ইসলামপুর হাফিজুল উলূম মাদরাসা ধামরাই
                  </h3>
                  <h4 className="inst_title"> ইসলামপুর, ধামরাই, ঢাকা, ঢাকা</h4>
                  <h4 className="inst_title"> ০১৯১১০০৩৮৩০, ০১৭১৭২০৬৬০১</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">মারকাযুল উলূম মাদরাসা</h3>
                  <h4 className="inst_title">
                    {" "}
                    গোপদ, মধুপুর সদর, মধুপুর, টাঙ্গাইল, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭৪৯২৭৬৬০৮, ০১৭৫৯৬৩৫০৯৫</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">জামিয়া হোসাইনিয়া তজুমদ্দিন</h3>
                  <h4 className="inst_title">
                    {" "}
                    তজুমদ্দিন, তজুমদ্দিন, ভোলা, বরিশাল
                  </h4>
                  <h4 className="inst_title"> ০১৭১৮৬৩২৬৫৬,</h4>
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
                    জামিয়া আরাবিয়া আশরাফুল উলূম বালিয়া
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    বালিয়া, ফুলপুর, ময়মনসিংহ, ময়মনসিংহ
                  </h4>
                  <h4 className="inst_title"> ০১,</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">ইসলামিক মিশনারী সেন্টার</h3>
                  <h4 className="inst_title">
                    {" "}
                    সুখবিলাশ, উত্তর পদুয়া, রাঙ্গুনিয়া, চট্টগ্রাম, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১,</h4>
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
                    জামিয়া ছিদ্দিকীয়া (যাদুরচর মাদরাসা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    যাদুরচর, হেমায়েতপুর, সাভার, ঢাকা, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭১১৬৬৪৬১৭, ০১৬১৬৯৩০৯৫০</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 m-auto">
              <div className="our-team shadow  hvr-reveal w-100 px-2 py-3">
                <div className="icon-circle">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="team-content mt-3">
                  <h3 className="inst_name">জামিয়া তাওয়াক্কুলিয়া রেঙ্গা</h3>
                  <h4 className="inst_title">
                    {" "}
                    হাজীগঞ্জ, মোগলা বাজার, দক্ষিণ সুরমা, সিলেট, সিলেট
                  </h4>
                  <h4 className="inst_title"> ০১,</h4>
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
                    আল জামিয়াতুল আরবীয়া লিল বানাত ফাতেমা (রাজি.) মহিলা মাদরাসা,
                    চকলোকমান, বগুড়া।
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    চকলোকমান, বগুড়া সদর, বগুড়া সদর, বগুড়া, রাজশাহী
                  </h4>
                  <h4 className="inst_title"> ০১,</h4>
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
                    টাঙ্গাইল কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    বড় ইছাপুর, বংড়া, কালিহাতী, টাঙ্গাইল, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭৭১৫৫৫০০০, ০১৩২২৮৯১০৫৫</h4>
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
                    বগুড়া কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                    বাংলাদেশ
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    ১৫নং ওয়ার্ড, ছোট কুমিরা, বগুড়া সদর, বগুড়া, রাজশাহী
                  </h4>
                  <h4 className="inst_title"> ০১৩২২৮৯১০১০, ০১৭৭১৫৫৫০০০</h4>
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
                    জামিয়া শেখ মুহাম্মাদ আব্দুল্লাহ (হযরতপুর মাদরাসা)
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    হযরতপুর (গোপালপুর), শেখরনগর, সিরাজদিখান, মুন্সিগঞ্জ, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭১১১৪৮২০০, ০১৮৭৬৩১৬০৫০</h4>
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
                    জামিয়া ইসলামিয়া আরাবিয়া উমেদ নগর, হবিগঞ্জ
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    উমেদ নগর, হবিগঞ্জ সদর, হবিগঞ্জ সদর, হবিগঞ্জ, সিলেট
                  </h4>
                  <h4 className="inst_title"> ০১৭১৫০৩৯৪৮৯, ০১৭৬৫৬৫৫১৭৪</h4>
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
                    জামিয়া নিজামিয়া দারুল উলূম বেতুয়া
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    বেতুয়া, ধানগড়া, রায়গঞ্জ, সিরাজগঞ্জ, রাজশাহী
                  </h4>
                  <h4 className="inst_title"> ০১৭২৩৪৮১৬৮৮,</h4>
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
                    পিরোজপুর: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    কলেজ রোড, খুমুরিয়া, পিরোজপুর সদর, পিরোজপুর সদর, পিরোজপুর,
                    বরিশাল
                  </h4>
                  <h4 className="inst_title"> ০১৩২২৮৯১০১২, ০১৭৭১৫৫৫০০০</h4>
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
                    মলিকাডাঙ্গা মহিউস সুন্নাহ মাদরাসা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    মলিকাডাঙ্গা, মেলান্দহ, মেলান্দহ, জামালপুর, ময়মনসিংহ
                  </h4>
                  <h4 className="inst_title"> ০১,</h4>
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
                    জামিয়া ইসলামিয়া আশরাফুল উলূম মাদরাসা ও এতিমখানা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    গোয়ালচামট, ফরিদপুর সদর, ফরিদপুর, ঢাকা
                  </h4>
                  <h4 className="inst_title"> ০১৭৬৬৪৫৪৮৪১, ০১৭১৮৯১৬৬৯১</h4>
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
                    আল-জামিয়াতুল ইসলামিয়া দারুস সুন্নাহ হ্নীলা
                  </h3>
                  <h4 className="inst_title">
                    {" "}
                    হ্নীলা, হ্নীলা বাজার, টেকনাফ, কক্সবাজার, চট্টগ্রাম।
                  </h4>
                  <h4 className="inst_title"> ০১৯৭৯৪২৪১৪৪, ০১৭২০৩৫৫৪৫৪</h4>
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

export default Permanent_training_center;
