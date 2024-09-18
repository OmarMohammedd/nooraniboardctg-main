import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Fee() {
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
      data-new-gr-c-s-check-loaded="14.1184.0"
      data-gr-ext-installed=""
      cz-shortcut-listen="true"
    >
      <Header />

      <div className="container">
        <section className="mt-4">
          <h3 className="text-center font_weight700">
            নূরানী তা'লীমুল কুরআন বোর্ড চট্টগ্রাম-এ বিভিন্ন প্রকার ফি প্রদানের
            ফরম{" "}
          </h3>
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="card">
                <form
                  id="form_id"
                  action="https://www.nooraniboardctg.com/payment/nagad/pay"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="2QTliMlpUda3yZoNuKbDM26WYybkAHyEw9P345ci"
                  />{" "}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8 py-3 m-auto">
                        <div className="row">
                          <div className="col-12">
                            <div
                              className="alert alert-danger text-center"
                              role="alert"
                            >
                              <Link
                                style={{ fontSize: 20 }}
                                to="/transaction"
                                className="text-center alert-link"
                              >
                                ফি প্রদানের পর রশিদ ডাউনলোড করতে এইখানে ক্লিক
                                করুন
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label
                                style={{ fontSize: "1.1rem" }}
                                htmlFor="fee_type"
                                className="font-weight-bold"
                              >
                                ফি'এর ধরন
                              </label>
                              <select
                                data-validation="required"
                                name="fee_type"
                                className="form-control form-control-lg"
                                id="fee_type"
                              >
                                <option value="" disabled="" selected="">
                                  ফি'এর ধরন পছন্দ করুন
                                </option>
                                <option value="board_fee">বোর্ড ফি</option>
                                <option value="exam_fee">পরীক্ষার ফি</option>
                                <option value="certificate_fee">সনদ ফি</option>
                                <option value="moallem_fee">
                                  প্রশিক্ষণ ফি
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row hide board_fee exam_fee">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label
                                htmlFor="institute_code"
                                className="font-weight-bold"
                              >
                                প্রতিষ্ঠানের কোড
                              </label>
                              <input
                                className="form-control submit_btn_show"
                                type="number"
                                placeholder="ইংরেজিতে পূরণ করুন"
                                id="institute_code"
                                name="institute_code"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row hide certificate_fee">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label
                                htmlFor="training_year"
                                className="font-weight-bold"
                              >
                                প্রশিক্ষণের সাল *
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="training_year"
                                name="session"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row hide reg_no">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label
                                htmlFor="reg_no"
                                className="font-weight-bold"
                              >
                                রেজিঃ নম্বর (আপনার রেজিঃ নম্বর প্রদান করুন)
                              </label>
                              <input
                                className="form-control submit_btn_show"
                                type="number"
                                placeholder="ইংরেজিতে পূরণ করুন"
                                id="reg_no"
                                name="reg_no"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row hide certificate_request">
                          <div className="card-body mt-4">
                            <div className="row">
                              <div className="col-12">
                                <div
                                  className="alert alert-success"
                                  role="alert"
                                >
                                  *** প্রশিক্ষণের বিষয় <strong>আরবী</strong> হলে
                                  (প্রশিক্ষণার্থীর নাম,পিতার নাম, মাতার নাম)
                                  সমূহ অবশ্যই বাংলায় পূরণ করতে হবে।
                                </div>
                                <div
                                  className="alert alert-primary"
                                  role="alert"
                                >
                                  *** প্রশিক্ষণের বিষয় <strong>বাংলা</strong>{" "}
                                  হলে (প্রশিক্ষণার্থীর নাম,পিতার নাম, মাতার নাম)
                                  সমূহ অবশ্যই ইংরেজিতে পূরণ করতে হবে।
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label for="subject" htmlFor="">
                                        প্রশিক্ষণের ধরণ *
                                      </label>
                                      <select
                                        name="subject"
                                        className="form-control"
                                      >
                                        <option
                                          value=""
                                          selected=""
                                          disabled=""
                                        >
                                          পছন্দ করুন
                                        </option>
                                        <option value="আরবী">আরবী</option>
                                        <option value="বাংলা">বাংলা</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <label
                                        for="institute_id"
                                        className="font-bold"
                                      >
                                        প্রশিক্ষণ কেন্দ্রের নাম *
                                      </label>
                                      <select
                                        name="institute_id"
                                        className="form-control"
                                      >
                                        <option value={4}>
                                          মাদরাসা-ই-তা’লীমুল কুরআন(550201061)
                                        </option>
                                        <option value={5}>
                                          দারুল কুরআন নূরীয়া মাদরাসা(0000000)
                                        </option>
                                        <option value={6}>
                                          শেরপুর কার্যালয় : নূরানী তা’লীমুল
                                          কুরআন বোর্ড চট্টগ্রাম
                                          বাংলাদেশ(310104300)
                                        </option>
                                        <option value={7}>
                                          নূরানী মডেল মাদরাসা এন্ড স্কুল
                                          শাখা(320101613)
                                        </option>
                                        <option value={8}>
                                          আল জামিয়াতুল কারীমিয়া নূরুল উলূম
                                          জুম্মাপাড়া (নূরানী বিভাগ)(410101270)
                                        </option>
                                        <option value={9}>
                                          খুলনা কার্যালয় : নূরানী তা’লীমুল কুরআন
                                          বোর্ড চট্টগ্রাম বাংলাদেশ(490102973)
                                        </option>
                                        <option value={10}>
                                          ধুমসাদ্দা রশিদিয়া ইসলামিয়া
                                          মাদরাসা(060101987)
                                        </option>
                                        <option value={34}>
                                          জামেয়া ইসলামিয়া জমিরিয়া নূরুল উলূম
                                          হরিপুর(060403817)
                                        </option>
                                        <option value={136}>
                                          আল-জামিয়াতুল আরাবিয়াতুল আহলিয়া দারুল
                                          উলূম ওয়া দারুল আইতাম (হোসাইনিয়া
                                          মাদ্রাসা ও এতিমখানা)(802)
                                        </option>
                                        <option value={190}>
                                          দক্ষিণ বালিয়া বাখরপুর হামিদিয়া মাদরাসা
                                          ও এতিমখানা(90104245)
                                        </option>
                                        <option value={381}>
                                          জামিয়া ইউনুছিয়া মাদরাসা(110100905)
                                        </option>
                                        <option value={431}>
                                          জামিআ’ মুহাম্মদিয়া হুসাইনিয়া
                                          গাজীপুর(130100976)
                                        </option>
                                        <option value={473}>
                                          জামেয়াতুস সুফফা আল-ইসলামিয়া
                                          টঙ্গী(130201013)
                                        </option>
                                        <option value={483}>
                                          ফয়জুল উলূম হামিউসসুন্নাহ নূরানী
                                          মাদরাসা(130301018)
                                        </option>
                                        <option value={730}>
                                          জামেয়া মাদানিয়া ইসলামিয়া (কাজির বাজার
                                          মাদরাসা)(250102623)
                                        </option>
                                        <option value={741}>
                                          আহমদ ইসলামিক সেন্টার(251002646)
                                        </option>
                                        <option value={1063}>
                                          কাশেমপুর নূরানী কিন্ডার গার্টেন
                                          মাদরাসা(550101046)
                                        </option>
                                        <option value={1107}>
                                          জামিয়া আরাবিয়া সিদ্দীকিয়া
                                          ক্বওমীয়া(550501072)
                                        </option>
                                        <option value={1153}>
                                          দারুল উলূম ফয়জিয়া মহিউসসুন্নাহ
                                          মাদরাসা(430205341)
                                        </option>
                                        <option value={1326}>
                                          দারুস সুন্নাহ মাদরাসা(520102872)
                                        </option>
                                        <option value={1382}>
                                          মোমতাজুল উলূম মাদরাসা(540102968)
                                        </option>
                                        <option value={1429}>
                                          আল জামিয়াতুল আরবিয়্যা কাসেমুল উলূম
                                          ক্বওমী মাদরাসা(560102894)
                                        </option>
                                        <option value={1508}>
                                          আল-জামিয়াতুল ইসলামিয়া আশরাফুল উলূম
                                          শামুকখোলা ক্বওমী মাদরাসা(570203375)
                                        </option>
                                        <option value={1602}>
                                          জামিয়া ইসলামিয়া দারুস সুন্নাহ
                                          (গোরস্থান মাদরাসা)(240101113)
                                        </option>
                                        <option value={1610}>
                                          জামিয়া আল হেরা(240101121)
                                        </option>
                                        <option value={1624}>
                                          জামিয়া কাশেফুল উলূম (হাটখোলা
                                          মাদরাসা)(240201123)
                                        </option>
                                        <option value={1836}>
                                          মাদ্রাসা বা’বুল উলূম(240601194)
                                        </option>
                                        <option value={1861}>
                                          সওতুল কুরআন নূরানী প্রি-ক্যাডেট এন্ড
                                          হিফজ মাদরাসা(240704492)
                                        </option>
                                        <option value={1940}>
                                          দারুল উলূম মুইনুস সুন্নাহ(270304588)
                                        </option>
                                        <option value={1963}>
                                          বাইতুল কুরআন হাফিজিয়া
                                          মাদরাসা(290201364)
                                        </option>
                                        <option value={2084}>
                                          নেত্রকোণা কার্যালয় : নূরানী তা’লীমুল
                                          কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ (ফয়জুল
                                          উলূম হামিউসসুন্নাহ মাদরাসা)(300101101)
                                        </option>
                                        <option value={2087}>
                                          জামিয়া মিফতাহুল উলূম
                                          মাদ্রাসা(300101104)
                                        </option>
                                        <option value={2096}>
                                          জামিয়া হোসাইনিয়া মউ মাদরাসা(300202137)
                                        </option>
                                        <option value={2387}>
                                          জামিয়া হোসাইনিয়া আরাবিয়া(320301735)
                                        </option>
                                        <option value={2605}>
                                          হামিউসসুন্নাহ রউজাতুল উলূম
                                          মাদরাসা(310101497)
                                        </option>
                                        <option value={2862}>
                                          রাজশাহী দারুল উলূম মাদরাসা(331001079)
                                        </option>
                                        <option value={2895}>
                                          চাঁন্দলাই নূরানী একাডেমী(340104439)
                                        </option>
                                        <option value={2933}>
                                          মিরপুর এমদাদিয়া হাফিজিয়া নূরানী
                                          মাদরাসা(390102186)
                                        </option>
                                        <option value={2937}>
                                          তা’লীমুস সুন্নাহ মাদরাসা (নূরানী
                                          বিভাগ)(390102190)
                                        </option>
                                        <option value={2940}>
                                          জামিয়াতুল আবরার সিরাজগঞ্জ
                                          তা’লীমুসুন্নাহ মাদ্রাসা(390102193)
                                        </option>
                                        <option value={3004}>
                                          জামিয়া হোসাইনিয়া মদীনাতুল উলূম
                                          হাফেজিয়া মাদরাসা(391102215)
                                        </option>
                                        <option value={3019}>
                                          জামেয়া আশরাফিয়া পাবনা(400102230)
                                        </option>
                                        <option value={3243}>
                                          দারুল উলূম ফারুকিয়া আল ইসলামিয়া
                                          মাদরাসা(450102438)
                                        </option>
                                        <option value={3339}>
                                          জামিয়া ইসহাকিয়া ইসলামিয়া
                                          মাদরাসা(480102313)
                                        </option>
                                        <option value={3438}>
                                          ধর্মাদী ফয়জুল উলূম ইসলামিয়া
                                          মাদরাসা(590101919)
                                        </option>
                                        <option value={3442}>
                                          জামেউল উলূম রাজ্জাকিয়া
                                          মাদরাসা(591204543)
                                        </option>
                                        <option value={3496}>
                                          রাজাপুর দারুল উলূম কওমী
                                          মাদরাসা(610303688)
                                        </option>
                                        <option value={3502}>
                                          আজিজিয়া দারুল উলূম মাদরাসা ও
                                          এতিমখানা(621)
                                        </option>
                                        <option value={3562}>
                                          মাদরাসা আজীজিয়া ক্বাছেমুল উলূম
                                          দোহাজারী(11100293)
                                        </option>
                                        <option value={3712}>
                                          আল-মাদ্রাসাতুল আরবিয়াতুল খাইরিয়া ও
                                          এতিমখানা (নূরানী বিভাগ)(011500410)
                                        </option>
                                        <option value={3720}>
                                          উমিদিয়া জামেয়া ইসলামিয়া (নূরানী
                                          বিভাগ)(20100416)
                                        </option>
                                        <option value={3809}>
                                          আল-জামিয়া আল-ইসলামীয়া দারুল উলূম
                                          চাকমারকুল (বড় মাদরাসা)(020200463)
                                        </option>
                                        <option value={4239}>
                                          মদীনাতুল উলূম মাদরাসা(12001886)
                                        </option>
                                        <option value={4278}>
                                          মদীনাতুল উলূম মাদরাসা হেফজখানা ও
                                          এতিমখানা(50104278)
                                        </option>
                                        <option value={4290}>
                                          দারুল উলূম হযরত সুমাইয়া শহীদা (রা.)
                                          বালিকা মাদ্রাসা,(5015)
                                        </option>
                                        <option value={4435}>
                                          এশায়াতুস সুন্নাহ তাহ্ফীজুল কুরআন
                                          মাদরাসা(010200037)
                                        </option>
                                        <option value={4599}>
                                          মানারুল হুদা তাহফিজুল কুরআন
                                          মাদরাসা(12105147)
                                        </option>
                                        <option value={5026}>
                                          গোপালপুর হাফেজিয়া নূরানী মাদরাসা ও
                                          এতিমখানা(180302803)
                                        </option>
                                        <option value={5030}>
                                          শিরগ্রাম আজিজুল উলূম মাদরাসা ও
                                          এতিমখানা(180302807)
                                        </option>
                                        <option value={5128}>
                                          তাহফিজুল কুরআন নূরানী
                                          মাদরাসা(190103094)
                                        </option>
                                        <option value={5166}>
                                          জামিয়া মুহাম্মদিয়া শামসুল উলূম মাদরাসা
                                          (শিশু শিক্ষা নিকেতন)(190203364)
                                        </option>
                                        <option value={5218}>
                                          আল জামিয়াতুল ইসলামিয়া দারুল
                                          উলূম(420103570)
                                        </option>
                                        <option value={5303}>
                                          দারুল উলূম ইসলামিয়া মাদরাসা(470402477)
                                        </option>
                                        <option value={5346}>
                                          মাহমুদিয়া হাফিজিয়া ও নূরানী
                                          প্রি-ক্যাডেট মাদরাসা(600101931)
                                        </option>
                                        <option value={5527}>
                                          ঢাকা কার্যালয় : নূরানী তা’লীমুল কুরআন
                                          বোর্ড চট্টগ্রাম বাংলাদেশ(124704309)
                                        </option>
                                        <option value={5563}>
                                          দারুল উলূম মাবিয়া ইসলামিয়া মাদরাসা
                                          (একাডেমী শাখা)(124704587)
                                        </option>
                                        <option value={5593}>
                                          জামিয়া দারুল আমান সাভার(1244)
                                        </option>
                                        <option value={5608}>
                                          জামিয়া মদিনাতুল উলূম (আমিন বাজার
                                          মাদরাসা)(124600924)
                                        </option>
                                        <option value={5609}>
                                          হাফিজুল উলূম মাদরাসা(124600925)
                                        </option>
                                        <option value={5664}>
                                          জামিয়া আরাবিয়া শামসুল উলূম
                                          মাদরাসা(124302487)
                                        </option>
                                        <option value={5705}>
                                          জামি’আ আশরাফিয়া হালীমিয়া আবেদিয়া
                                          (মক্কী নগর মাদরাসা)(124403529)
                                        </option>
                                        <option value={5713}>
                                          জামিয়া আশরাফিয়া ক্বওমীয়া
                                          মাদরাসা(124404384)
                                        </option>
                                        <option value={5752}>
                                          জামেয়া নূরীয়া ইসলামিয়া (রওজাতুল আতফাল
                                          কিন্ডার গার্টেন)(123504066)
                                        </option>
                                        <option value={6043}>
                                          দারুল উলূম সরিষাবাড়ী(320605862)
                                        </option>
                                        <option value={6440}>
                                          কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল
                                          কুরআন বোর্ড চট্টগ্রাম
                                          বাংলাদেশ(000000519)
                                        </option>
                                        <option value={6450}>
                                          জামিয়া ছিদ্দিকীয়া (যাদুরচর
                                          মাদরাসা)(664617)
                                        </option>
                                        <option value={6451}>
                                          কাশেমপুর মদীনাতুল উলূম মাদরাসা(206601)
                                        </option>
                                        <option value={6453}>
                                          আল-জামেয়াতুল আহলিয়া দারুল উলূম মুঈনুল
                                          ইসলাম (হাটহাজারী মাদরাসা)(891010)
                                        </option>
                                        <option value={6454}>
                                          জামিয়া ইসলামীয়া দারুল উলূম (নুনাইচ
                                          মাদরাসা)(245338)
                                        </option>
                                        <option value={6472}>
                                          জামিয়া ইসলামিয়া দারুল উলূম
                                          সাভার(124606267)
                                        </option>
                                        <option value={6481}>
                                          ঝিনাইদহ কার্যালয়: নূরানী তা’লীমুল
                                          কুরআন বোর্ড চট্টগ্রাম
                                          বাংলাদেশ(530106275)
                                        </option>
                                        <option value={6507}>
                                          আন-নূর ইসলামী একাডেমী(200106300)
                                        </option>
                                        <option value={6509}>
                                          তাহসিনুল কুরআন নূরানী মডেল মাদরাসা
                                          উপরাজারামপুর মোড়(21207894)
                                        </option>
                                        <option value={6514}>
                                          জামিয়া ইসলামিয়া মদিনাতুল উলূম
                                          লক্ষীপুর(224988)
                                        </option>
                                        <option value={6515}>
                                          আল জামিয়া ইসলামিয়া মদীনাতুল উলূম
                                          কেরাণীগঞ্জ(107247)
                                        </option>
                                        <option value={6516}>
                                          আল জামিয়াতুল ইমদাদিয়া
                                          কিশোরগঞ্জ(137090)
                                        </option>
                                        <option value={6518}>
                                          মাদ্রাসাতুল উলূমিশ
                                          শারইয়্যাহ(370106306)
                                        </option>
                                        <option value={6580}>
                                          আল জামিয়াতুল ইসলামিয়া কাসেমুল উলূম
                                          ক্বওমী মাদরাসা(530504181)
                                        </option>
                                        <option value={6632}>
                                          ঢাকা নয়াটোলা আনওয়ারুল উলূম নো’মানিয়া
                                          কামিল মাদরাসা(124906370)
                                        </option>
                                        <option value={6656}>
                                          মারকাযুল উলূম আলহাজ্ব নূরুল ইসলাম
                                          চৌধুরী ক্বওমী মাদরাসা ও
                                          এতিমখানা(620506389)
                                        </option>
                                        <option value={6657}>
                                          রাঙ্গামাটি দারুল উলূম(040106390)
                                        </option>
                                        <option value={6658}>
                                          হিদায়াতুল উম্মাহ মডেল
                                          মাদরাসা(460106391)
                                        </option>
                                        <option value={6755}>
                                          জামেয়া লুৎফিয়া আনওয়ারুল উলূম হামিদনগর
                                          বরুণা মাদরাসা(086125)
                                        </option>
                                        <option value={6803}>
                                          জামিয়া ইসলামিয়া মদিনাতুল উলুম
                                          লক্ষীপুর(101006532)
                                        </option>
                                        <option value={6909}>
                                          জামিয়া ইসলামিয়া এমদাদুল
                                          উলূম(101706636)
                                        </option>
                                        <option value={6998}>
                                          ইসলামপুর হাফিজুল উলূম মাদরাসা
                                          ধামরাই(124206723)
                                        </option>
                                        <option value={7186}>
                                          মারকাযুল উলূম মাদরাসা(240206911)
                                        </option>
                                        <option value={7210}>
                                          জামিয়া হোসাইনিয়া তজুমদ্দিন(621006305)
                                        </option>
                                        <option value={7211}>
                                          জামিয়া আরাবিয়া আশরাফুল উলূম
                                          বালিয়া(290506935)
                                        </option>
                                        <option value={7314}>
                                          ইসলামিক মিশনারী সেন্টার(010607038)
                                        </option>
                                        <option value={7350}>
                                          জামিয়া ছিদ্দিকীয়া (যাদুরচর
                                          মাদরাসা)(124607074)
                                        </option>
                                        <option value={7352}>
                                          জামিয়া তাওয়াক্কুলিয়া রেঙ্গা(251207076)
                                        </option>
                                        <option value={7373}>
                                          আল জামিয়াতুল আরবীয়া লিল বানাত ফাতেমা
                                          (রাজি.) মহিলা মাদরাসা, চকলোকমান,
                                          বগুড়া।(370107097)
                                        </option>
                                        <option value={7654}>
                                          টাঙ্গাইল কার্যালয়: নূরানী তা’লীমুল
                                          কুরআন বোর্ড চট্টগ্রাম
                                          বাংলাদেশ(240707375)
                                        </option>
                                        <option value={7998}>
                                          বগুড়া কার্যালয়: নূরানী তা’লীমুল কুরআন
                                          বোর্ড চট্টগ্রাম বাংলাদেশ(370107716)
                                        </option>
                                        <option value={7999}>
                                          জামিয়া শেখ মুহাম্মাদ আব্দুল্লাহ
                                          (হযরতপুর মাদরাসা)(160607717)
                                        </option>
                                        <option value={8281}>
                                          জামিয়া ইসলামিয়া আরাবিয়া উমেদ নগর,
                                          হবিগঞ্জ(280107998)
                                        </option>
                                        <option value={8630}>
                                          জামিয়া নিজামিয়া দারুল উলূম
                                          বেতুয়া(390308346)
                                        </option>
                                        <option value={9175}>
                                          পিরোজপুর: নূরানী তা’লীমুল কুরআন বোর্ড
                                          চট্টগ্রাম বাংলাদেশ(630108891)
                                        </option>
                                        <option value={9279}>
                                          মলিকাডাঙ্গা মহিউস সুন্নাহ
                                          মাদরাসা(320308995)
                                        </option>
                                        <option value={9627}>
                                          জামিয়া ইসলামিয়া আশরাফুল উলূম মাদরাসা ও
                                          এতিমখানা(180109335)
                                        </option>
                                        <option value={9974}>
                                          আল-জামিয়াতুল ইসলামিয়া দারুস সুন্নাহ
                                          হ্নীলা(020809681)
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="">
                                        রেজিস্ট্রেশন নং{" "}
                                        <small>
                                          (সঠিক তথ্য জানা না থাকলে প্রয়োজন নেই)
                                        </small>
                                      </label>
                                      <input
                                        type="number"
                                        name="reg_no_old"
                                        className="form-control"
                                        placeholder="ইংরেজিতে প্রদান করুন"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="">জন্মতারিখ *</label>
                                      <input
                                        type="text"
                                        name="dob"
                                        className="form-control date_picker"
                                        data-validation="required"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="">
                                        ব্যাচ নং{" "}
                                        <small>
                                          (সঠিক তথ্য জানা না থাকলে প্রয়োজন নেই)
                                        </small>
                                      </label>
                                      <input
                                        type="number"
                                        name="batch_no_old"
                                        className="form-control"
                                        placeholder="ইংরেজিতে প্রদান করুন"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="">
                                        রোল নং{" "}
                                        <small>
                                          (সঠিক তথ্য জানা না থাকলে প্রয়োজন নেই)
                                        </small>
                                      </label>
                                      <input
                                        type="number"
                                        name="roll_no"
                                        className="form-control"
                                        placeholder="ইংরেজিতে প্রদান করুন"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="">
                                        প্রশিক্ষণার্থীর নাম{" "}
                                        <span className="writing_type" />
                                      </label>
                                      <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        data-validation="required"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="">
                                        পিতার নাম{" "}
                                        <span className="writing_type" />
                                      </label>
                                      <input
                                        type="text"
                                        name="father_name"
                                        className="form-control"
                                        data-validation="required"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="">
                                        মাতার নাম{" "}
                                        <span className="writing_type" />
                                      </label>
                                      <input
                                        type="text"
                                        name="mother_name"
                                        className="form-control"
                                        data-validation="required"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <label htmlFor="">মোবাইল নম্বর *</label>
                                      <input
                                        id="phone"
                                        type="number"
                                        name="phone"
                                        className="form-control"
                                        data-validation="required"
                                        placeholder="Type in english"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <label htmlFor="">
                                        সনদপত্র পাঠানোর পূর্ণাঙ্গ ঠিকানা{" "}
                                        <small>
                                          (গ্রাম/মহল্লা, ওয়ার্ড নং,পোস্ট অফিস,
                                          থানা/উপজেলা, জেলার নামসহ)
                                        </small>
                                      </label>
                                      <textarea
                                        name="sending_address"
                                        className="form-control"
                                        rows={2}
                                        data-validation="required"
                                        placeholder="গ্রাম/রোড: রেল স্টেশন রোড, পোস্ট অফিস: হাটহাজারী, পোস্ট কোড: ৪৩৩০, থানা: হাটহাজারী, জেলা: চট্টগ্রাম। "
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  defaultValue={8}
                                  id="payment_type"
                                  name="type"
                                />
                                <input
                                  type="hidden"
                                  name="transaction_id"
                                  defaultValue="mi222258t8"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row hide moallem_fee">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label
                                for="batch_no"
                                className="font-weight-bold"
                              >
                                ব্যাচ সিলেক্ট করুন
                              </label>
                              <select name="batch_no" className="form-control">
                                <option value={396}>
                                  643- কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন
                                  বোর্ড চট্টগ্রাম বাংলাদেশ
                                </option>
                                <option value={397}>
                                  644- খুলনা কার্যালয় : নূরানী তা’লীমুল কুরআন
                                  বোর্ড চট্টগ্রাম বাংলাদেশ
                                </option>
                                <option value={398}>
                                  645- টাঙ্গাইল কার্যালয়: নূরানী তা’লীমুল কুরআন
                                  বোর্ড চট্টগ্রাম বাংলাদেশ
                                </option>
                                <option value={399}>
                                  646- বগুড়া কার্যালয়: নূরানী তা’লীমুল কুরআন
                                  বোর্ড চট্টগ্রাম বাংলাদেশ
                                </option>
                                <option value={400}>
                                  647- জামিয়া হোসাইনিয়া আরাবিয়া
                                </option>
                                <option value={401}>
                                  518- কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন
                                  বোর্ড চট্টগ্রাম বাংলাদেশ
                                </option>
                                <option value={402}>
                                  519- পিরোজপুর: নূরানী তা’লীমুল কুরআন বোর্ড
                                  চট্টগ্রাম বাংলাদেশ
                                </option>
                                <option value={403}>
                                  648- ঢাকা নয়াটোলা আনওয়ারুল উলূম নো’মানিয়া
                                  কামিল মাদরাসা
                                </option>
                                <option value={404}>
                                  649- শেরপুর কার্যালয় : নূরানী তা’লীমুল কুরআন
                                  বোর্ড চট্টগ্রাম বাংলাদেশ
                                </option>
                                <option value={405}>
                                  650- জামিয়া ইসহাকিয়া ইসলামিয়া মাদরাসা
                                </option>
                                <option value={406}>
                                  651- ফয়জুল উলূম হামিউসসুন্নাহ নূরানী মাদরাসা
                                </option>
                                <option value={407}>
                                  520- ঢাকা কার্যালয় : নূরানী তা’লীমুল কুরআন
                                  বোর্ড চট্টগ্রাম বাংলাদেশ
                                </option>
                                <option value={408}>
                                  521- ঝিনাইদহ কার্যালয়: নূরানী তা’লীমুল কুরআন
                                  বোর্ড চট্টগ্রাম বাংলাদেশ
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row hide moallem_fee">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label
                                htmlFor="form_no"
                                className="font-weight-bold"
                              >
                                ফরম নম্বর দিন
                              </label>
                              <input
                                className="form-control submit_btn_show"
                                type="number"
                                placeholder="ইংরেজিতে পূরণ করুন"
                                id="form_no"
                                name="form_no"
                              />
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary mb-2"
                          style={{ display: "none" }}
                          id="check_btn"
                          type="button"
                        >
                          সাবমিট করুন
                        </button>
                        <div id="render_div" />
                        <button
                          className="btn btn-danger"
                          style={{ display: "none" }}
                          id="submit_btn"
                          type="submit"
                        >
                          পরিশোধ করুন
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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

export default Fee;
