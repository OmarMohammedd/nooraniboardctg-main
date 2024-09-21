import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./admission.css";

function AdmissionRegistration() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header />

      <div className="bg-[#F8F8FF] container" style={{overflowX:"hidden"}}>
        <div className="page-header" style={{ margin: "0px 15px 0px 15px" }} />
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-sm-3 col-md-3 col-lg-3"></div>
          <div
            className="col-sm-6 col-md-6 col-lg-6"
            style={{ margin: 10, textAlign: "center" }}
          >
            <a href="">
              <h3 style={{ color: "#0d58a5", marginTop: 10 }}>
                Online Admission System
              </h3>
            </a>
            <p style={{ marginTop: 5, color: "red", fontWeight: "bold" }}>
              Helpline : 01819-498512, 01933-234575{" "}
            </p>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3" />
        </div>
        <div className="text-center">
          <a
            href="/typeNew"
            className="btn btn-primary"
            style={{ margin: "0px 0px 10px 0px" }}
          >
            Go Back
          </a>
        </div>

        
        <div
          style={{ width: "100%", overflowX: "hidden" }}
          id="formNewDiv"
          className="table-responsive"
        >
          <div
            className="frm-head grp-head"
            style={{ margin: "auto", overflowX: "hidden" }}
          >
            <p className="pageHead">
              ভর্তিচ্ছু নতুন শিক্ষার্থী : <span className="" style={{color:"#E80000"}}>ফরম - ১</span>
              <br />
              <span style={{ fontSize: 16 }}>
                নিচের ফরমটি যথাযথভাবে পূরন করে "Submit" করুন । (
                <span style={{color:"#E80000"}}>&nbsp;*&nbsp;</span>)চিহ্নিত ঘর অবশ্যই
                পুরণ করতে হবে
              </span>
            </p>
            <form
              className="grp-div frm-head"
              id="frmNew"
              encType="multipart/form-data"
              method="POST"
            >
              <div id="topDiv">
                <div
                  className="col-xs-12 col-sm-12 col-md-3 col-lg-3 pull-right"
                  style={{ width: 310, margin: "auto", textAlign: "center" }}
                >
                  {/* مكان الصورة */}
                  <div
                    id="imgPreview"
                    style={{
                      border: "1px solid #000000",
                      width: 145,
                      height: 182,
                      margin: "auto",
                      backgroundSize: "cover",
                      backgroundImage: imagePreview
                        ? `url(${imagePreview})`
                        : "none",
                    }}
                  >
                    {!imagePreview && (
                      <>
                        <br />
                        <br />
                        Picture
                        <br />
                        of
                        <br />
                        the Student
                      </>
                    )}
                  </div>

                  <label>
                    ছাত্র/ছাত্রীর ছবি সংযুক্ত করুন :
                    <span style={{color:"#E80000"}}>&nbsp;*</span>
                  </label>

                  <input
                    className="btn"
                    type="file"
                    name="img"
                    onChange={handleImageChange} // هنا التغيير
                  />

                  <p style={{color:"#E80000"}}>সর্বোচ্চ ১ মেগাবাইট, পাসপোর্ট সাইজ</p>
                  <div id="ERRimg" className="ERR" />
                </div>
                {/*/for picture*/}
                <div className="pull-left">
                  {/* float Left */}
                  <div id="ERRbranch" className="ERR" />
                  <div className="frm-ele">
                    <label>
                      ক্লাশ নির্বাচন করুন :
                      <span style={{color:"#E80000"}}>&nbsp;*</span>
                    </label>
                    <br />
                    <select
                      name="class"
                      className="form-control"
                      style={{ width: "100%" }}
                    >
                      <option value="">Select Class</option>
                      <option value={24}>হিফজ(১মবর্ষ)</option>
                      <option value={2}>শিশু</option>
                      <option value={3}>প্রথম</option>
                      <option value={4}>দ্বিতীয়</option>
                      <option value={5}>তৃতীয়</option>
                      <option value={6}>চতুর্থ</option>
                      <option value={7}>পঞ্চম</option>
                      <option value={8}>ষষ্ঠ</option>
                      <option value={9}>সপ্তম</option>
                      <option value={10}>অষ্টম</option>
                    </select>
                    <div id="ERRclass" className="ERR" />
                  </div>
                  <div className="clearfix" />
                  <div className="frm-ele">
                    <label>
                      ছাত্র/ছাত্রীর পূর্ণ নাম ( In English ):
                      <span style={{color:"#E80000"}}>&nbsp;*</span>
                    </label>
                    <br />
                    <input
                      name="s_name"
                      style={{ width: 410 }}
                      type="text"
                      className="form-control"
                    />
                    <div id="ERRs_name" className="ERR" />
                  </div>
                  <div className="frm-ele">
                    <label>
                      Blood Group :<span style={{color:"#E80000"}}>&nbsp;*</span>
                    </label>
                    <br />
                    <select name="bloodGroup" className="form-control">
                      <option value="">Select Blood Group</option>
                      <option value={1}>O+</option>
                      <option value={2}>O-</option>
                      <option value={3}>A+</option>
                      <option value={4}>A-</option>
                      <option value={5}>B+</option>
                      <option value={6}>B-</option>
                      <option value={7}>AB+</option>
                      <option value={8}>AB-</option>
                    </select>
                    <div id="ERRbloodGroup" className="ERR" />
                  </div>
                  <div className="clearfix" />
                  <div className="frm-ele">
                    <label>
                      পিতার নাম ( In English ):
                      <span style={{color:"#E80000"}}>&nbsp;*</span>
                    </label>
                    <br />
                    <input
                      name="f_name"
                      style={{ width: 410 }}
                      type="text"
                      className="form-control"
                    />
                    <div id="ERRf_name" className="ERR" />
                  </div>
                  <div className="frm-ele">
                    <label>
                      পিতার NID/Passport নাম্বার:
                      <span style={{color:"#E80000"}}>&nbsp;*</span>
                    </label>
                    <br />
                    <input name="f_NID" type="text" className="form-control" />
                    <div id="ERRf_NID" className="ERR" />
                  </div>
                  <div className="clearfix" />
                  <div className="frm-ele">
                    <label>
                      মাতার নাম ( In English ) :
                      <span style={{color:"#E80000"}}>&nbsp;*</span>
                    </label>
                    <br />
                    <input
                      name="m_name"
                      style={{ width: 410 }}
                      type="text"
                      className="form-control"
                    />
                    <div id="ERRm_name" className="ERR" />
                  </div>
                  <div className="frm-ele">
                    <label>
                      মাতার NID/Passport নাম্বার :
                      <span style={{color:"#E80000"}}>&nbsp;*</span>
                    </label>
                    <br />
                    <input name="m_NID" type="text" className="form-control" />
                    <div id="ERRm_NID" className="ERR" />
                  </div>
                  <div className="clearfix" />
                  <div className="frm-ele">
                    <label>পিতা মৃত হলে অভিভাবকের নাম ( In English ):</label>
                    <br />
                    <input
                      name="g_name"
                      style={{ width: 410 }}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="frm-ele">
                    <label>অভিভাবকের সাথে সম্পর্ক:</label>
                    <br />
                    <select name="relation" className="form-control">
                      <option value="">Select সম্পর্ক</option>
                      <option value={1}>ভাই</option>
                      <option value={2}>বোন</option>
                      <option value={3}>দাদা / নানা</option>
                      <option value={4}>দাদী / নানী</option>
                      <option value={5}>চাচা / মামা</option>
                      <option value={6}>চাচী / মামী</option>
                      <option value={7}>ফুফু / খালা</option>
                      <option value={8}>অন্যান্য</option>
                    </select>
                  </div>
                </div>
                {/* pull-left */}
                <div className="clearfix" />
              </div>
              {/* topDiv */}
              <div className="grp-head">
                {/* Date of Birth */}
                <div className="frm-ele">
                  <label style={{ paddingLeft: 5 }}>জন্ম তারিখ :</label>
                </div>
                <div className="grp-div">
                  <div className="frm-ele">
                    <label className="frm-label">
                      দিন : <span style={{color:"#E80000"}}>&nbsp;*</span>
                    </label>
                    <br />
                    <select name="b_day" className="form-control">
                      <option value="">Select দিন</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                    </select>
                    <div id="ERRb_day" className="ERR" />
                  </div>
                  <div className="frm-ele">
                    <label className="frm-label">
                      মাস : <span style={{color:"#E80000"}}>&nbsp;*</span>
                    </label>
                    <br />
                    <select name="b_month" className="form-control">
                      <option value="">Select মাস</option>
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                    <div id="ERRb_month" className="ERR" />
                  </div>
                  <div className="frm-ele">
                    <label className="frm-label">
                      বছর : <span style={{color:"#E80000"}}>&nbsp;*</span>
                    </label>
                    <br />
                    <select name="b_year" className="form-control">
                      <option value="">Select বছর</option>
                      <option value={2021}>2021</option>
                      <option value={2020}>2020</option>
                      <option value={2019}>2019</option>
                      <option value={2018}>2018</option>
                      <option value={2017}>2017</option>
                      <option value={2016}>2016</option>
                      <option value={2015}>2015</option>
                      <option value={2014}>2014</option>
                      <option value={2013}>2013</option>
                      <option value={2012}>2012</option>
                      <option value={2011}>2011</option>
                      <option value={2010}>2010</option>
                      <option value={2009}>2009</option>
                      <option value={2008}>2008</option>
                      <option value={2007}>2007</option>
                      <option value={2006}>2006</option>
                      <option value={2005}>2005</option>
                      <option value={2004}>2004</option>
                      <option value={2003}>2003</option>
                      <option value={2002}>2002</option>
                      <option value={2001}>2001</option>
                      <option value={2000}>2000</option>
                      <option value={1999}>1999</option>
                      <option value={1998}>1998</option>
                      <option value={1997}>1997</option>
                      <option value={1996}>1996</option>
                      <option value={1995}>1995</option>
                      <option value={1994}>1994</option>
                      <option value={1993}>1993</option>
                      <option value={1992}>1992</option>
                      <option value={1991}>1991</option>
                      <option value={1990}>1990</option>
                      <option value={1989}>1989</option>
                      <option value={1988}>1988</option>
                      <option value={1987}>1987</option>
                      <option value={1986}>1986</option>
                    </select>
                    <div id="ERRb_year" className="ERR" />
                  </div>
                  <div className="frm-ele">
                    <label className="frm-label">
                      জন্ম নিবন্ধন/Passport নাম্বার :{" "}
                    </label>
                    <br />
                    <input name="s_COB" className="form-control" />
                  </div>
                </div>
              </div>
              {/* Date of Birth */}
              <div className="grp-head" style={{ marginTop: 5 }}>
                {/* Parmanent Address */}
                <div className="frm-ele">
                  <label style={{ paddingLeft: 5,color:"#E80000" }} >
                    স্থায়ী ঠিকানা :
                  </label>
                </div>
                <div className="clearfix" />
                <div className="grp-div">
                  <div className="frm-ele">
                    <label className="frm-label">
                      জেলা : <span style={{color:"#E80000"}}>&nbsp;*</span>
                    </label>
                    <br />
                    <select name="district" className="form-control">
                      <option value="">Select জেলা </option>
                      <option value={126}>বাগেরহাট</option>
                      <option value={174}>বান্দরবান</option>
                      <option value={130}>বরগুনা</option>
                      <option value={134}>বরিশাল</option>
                      <option value={133}>বরিশাল মহানগরী</option>
                      <option value={132}>ভোলা</option>
                      <option value={111}>বগুড়া</option>
                      <option value={162}>ব্রাহ্মণবাড়ীয়া</option>
                      <option value={165}>চাঁদপুর</option>
                      <option value={112}>চাঁপাইনওয়াবগঞ্জ</option>
                      <option value={170}>চট্টগ্রাম</option>
                      <option value={169}>চট্টগ্রাম মহানগরী</option>
                      <option value={121}>চুয়াডাঙ্গা</option>
                      <option value={164}>কুমিল্লা</option>
                      <option value={163}>কুমিল্লা মহানগরী</option>
                      <option value={171}>কক্সবাজার</option>
                      <option value={146}>ঢাকা</option>
                      <option value={145}>ঢাকা মহানগরী</option>
                      <option value={103}>দিনাজপুর</option>
                      <option value={153}>ফরিদপুর</option>
                      <option value={166}>ফেনী</option>
                      <option value={109}>গাইবান্ধা</option>
                      <option value={148}>গাজীপুর</option>
                      <option value={147}>গাজীপুর মহানগরী</option>
                      <option value={154}>গোপালগঞ্জ</option>
                      <option value={161}>হবিগঞ্জ</option>
                      <option value={138}>জামালপুর</option>
                      <option value={123}>যশোর</option>
                      <option value={135}>ঝালকাঠি</option>
                      <option value={122}>ঝিনাইদহ</option>
                      <option value={110}>জয়পুরহাট</option>
                      <option value={172}>খাগড়াছড়ি</option>
                      <option value={128}>খুলনা</option>
                      <option value={127}>খুলনা মহানগরী</option>
                      <option value={142}>কিশোরগঞ্জ</option>
                      <option value={108}>কুড়িগ্রাম</option>
                      <option value={120}>কুষ্টিয়া</option>
                      <option value={168}>লক্ষীপুর</option>
                      <option value={105}>লালমনিরহাট</option>
                      <option value={155}>মাদারীপুর</option>
                      <option value={124}>মাগুরা</option>
                      <option value={143}>মানিকগঞ্জ</option>
                      <option value={119}>মেহেরপুর</option>
                      <option value={160}>মৌলভীবাজার</option>
                      <option value={144}>মুন্সীগঞ্জ</option>
                      <option value={140}>ময়মনসিংহ</option>
                      <option value={113}>নওগাঁ</option>
                      <option value={125}>নড়াইল</option>
                      <option value={150}>নারায়ণগঞ্জ</option>
                      <option value={149}>নারায়ণগঞ্জ মহানগরী</option>
                      <option value={151}>নরসিংদী</option>
                      <option value={116}>নাটোর</option>
                      <option value={141}>নেত্রকোনা</option>
                      <option value={104}>নীলফামারী</option>
                      <option value={167}>নোয়াখালী</option>
                      <option value={118}>পাবনা</option>
                      <option value={101}>পঞ্চগড়</option>
                      <option value={131}>পটুয়াখালী</option>
                      <option value={136}>পিরোজপুর</option>
                      <option value={152}>রাজবাড়ী</option>
                      <option value={115}>রাজশাহী</option>
                      <option value={114}>রাজশাহী মহানগরী</option>
                      <option value={173}>রাঙ্গামাটি</option>
                      <option value={107}>রংপুর</option>
                      <option value={106}>রংপুর মহানগরী</option>
                      <option value={129}>সাতক্ষিরা</option>
                      <option value={156}>শরীয়তপুর</option>
                      <option value={139}>শেরপুর</option>
                      <option value={117}>সিরাজগঞ্জ</option>
                      <option value={157}>সুনামগঞ্জ</option>
                      <option value={159}>সিলেট</option>
                      <option value={158}>সিলেট মহানগরী</option>
                      <option value={137}>টাঙ্গাইল</option>
                      <option value={102}>ঠাকুরগাঁ</option>
                    </select>
                    <div id="ERRdistrict" className="ERR" />
                  </div>
                  <div className="frm-ele">
                    <label className="frm-label">
                      থানা / উপজেলা : <span style={{color:"#E80000"}}>&nbsp;*</span>
                    </label>
                    <br />
                    <select name="thana" className="form-control">
                      {/* <option value="">Select থানা / উপজেলা</option> */}
                    </select>
                    <div id="ERRthana" className="ERR" />
                  </div>
                  <div className="frm-ele">
                    <label className="frm-label">পৌরসভা : </label>
                    <br />
                    <select name="muni" className="form-control">
                      {/* <option value="">Select পৌরসভা</option> */}
                    </select>
                  </div>
                  <div className="frm-ele">
                    <label className="frm-label">ইউনিয়ন : </label>
                    <br />
                    <select name="union" className="form-control">
                      {/* <option value="">Select ইউনিয়ন</option> */}
                    </select>
                  </div>
                  <div className="frm-ele">
                    <label className="frm-label">
                      ডাকঘর : <span style={{color:"#E80000"}}>*</span>
                    </label>
                    <br />
                    <input
                      name="post"
                      type="text"
                      className="form-control"
                      placeholder="বাংলায় লিখুন"
                    />
                    <div id="ERRpost" className="ERR" />
                  </div>
                  <div className="frm-ele">
                    <label className="frm-label">
                      গ্রাম : <span style={{color:"#E80000"}}>*</span>
                    </label>
                    <br />
                    <input
                      name="vill"
                      type="text"
                      className="form-control"
                      placeholder="বাংলায় লিখুন"
                    />
                    <div id="ERRvill" className="ERR" />
                  </div>
                </div>
              </div>
              {/* Parmanent Address */}
              <div className="frm-ele">
                <label className="frm-label">
                  বর্তমান ঠিকানা ( In English ):
                  <span style={{color:"#E80000"}}>&nbsp;*</span>
                </label>
                <br />
                <input
                  name="pre_address"
                  style={{ width: 410 }}
                  type="text"
                  className="form-control"
                />
                <div id="ERRpre_address" className="ERR" />
              </div>
              <div className="frm-ele">
                <label className="frm-label">
                  অভিভাবকের বর্তমান ঠিকানা ( In English ):{" "}
                  <span style={{color:"#E80000"}}>&nbsp;*</span>
                </label>
                <br />
                <input
                  name="GPAddress"
                  style={{ width: 410 }}
                  type="text"
                  className="form-control"
                />
                <div id="ERRGPAddress" className="ERR" />
              </div>
              <div className="clearfix" />
              {/*<div class="frm-ele">
  <label class="frm-label">স্থানীয় অভিভাবকের নাম ( In English ):<span class="error">&nbsp;*</span></label><br>
  <input name="L_gname" style="width:410px" type="text" class="form-control" />
</div>*/}
              <div className="frm-ele">
                <label className="frm-label">
                  প্রধান মোবাইল নাম্বার :<span style={{color:"#E80000"}}>&nbsp;*</span>
                </label>
                <br />
                <input
                  maxLength={11}
                  name="mobFather"
                  className="form-control"
                  placeholder="01XXXXXXXXX"
                />
                <div id="ERRmobFather" className="ERR" />
              </div>
              <div className="frm-ele">
                <label className="frm-label">
                  পিতা/মাতা/অভিভাবকের মোবাইল নাম্বার :
                  <span style={{color:"#E80000"}}>&nbsp;*</span>
                </label>
                <br />
                <input
                  maxLength={11}
                  name="mobMother"
                  className="form-control"
                  placeholder="01XXXXXXXXX"
                />
                <div id="ERRmobMother" className="ERR" />
              </div>
              <div className="frm-ele">
                <label className="frm-label">
                  জরুরী যোগাযোগের মোবাইল নাম্বার:
                  <span style={{color:"#E80000"}}>&nbsp;*</span>
                </label>
                <br />
                <input
                  maxLength={11}
                  name="mobWApp"
                  className="form-control"
                  placeholder="01XXXXXXXXX"
                />
                <div id="ERRmobWApp" className="ERR" />
              </div>
              <div className="clearfix" />
              <div className="frm-ele">
                <label className="frm-label">
                  অভিভাবকের বাৎসরিক আয় :<span style={{color:"#E80000"}}>&nbsp;*</span>
                </label>
                <br />
                <input name="g_income" type="text" className="form-control" />
                <div id="ERRg_income" className="ERR" />
              </div>
              <div className="clearfix" />
              <div className="grp-head table-responsive">
                <div className="frm-ele">
                  <label
                    className="frm-label required"
                    style={{ paddingLeft: 5 }}
                  >
                    পূর্বে যে প্রতিষ্ঠানে ছিল :{" "}
                  </label>
                </div>
                <div className="grp-div table-responsive">
                  <div className="frm-ele">
                    <label className="frm-label">
                      প্রতিষ্ঠানের নাম ( In English ):
                    </label>
                    <br />
                    <input
                      name="pre_inst"
                      style={{ width: 400 }}
                      type="text"
                      className="form-control"
                    />
                    <div id="ERRpre_inst" className="ERR" />
                  </div>
                  <div className="frm-ele">
                    <label className="frm-label">
                      পূর্বে যে শ্রেণিতে অধ্যয়ন করত :{" "}
                    </label>
                    <br />
                    <select name="pre_class" className="form-control">
                      <option value="">Select Class</option>
                      <option value={24}>হিফজ(১মবর্ষ)</option>
                      <option value={2}>শিশু</option>
                      <option value={3}>প্রথম</option>
                      <option value={4}>দ্বিতীয়</option>
                      <option value={5}>তৃতীয়</option>
                      <option value={6}>চতুর্থ</option>
                      <option value={7}>পঞ্চম</option>
                      <option value={8}>ষষ্ঠ</option>
                      <option value={9}>সপ্তম</option>
                      <option value={10}>অষ্টম</option>
                    </select>
                  </div>
                  <div className="clearfix" />
                  <div className="frm-ele">
                    <label className="frm-label">ছাড়পত্রের তারিখ :</label>
                    <br />
                    <input
                      name="d_release"
                      id="d_release"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="frm-ele">
                    <label className="frm-label">ছাড়পত্রের নম্বর :</label>
                    <br />
                    <input
                      name="n_release"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div id="preRes" />
              <div id="extraSub" />
              <div className="clearfix" />
              <div className="clearfix" style={{ marginTop: 10 }} />
              <label className="frm-label">
                ছাত্র ও অভিভাবকের জন্য অঙ্গীকারনামা : আমি এই মর্মে ওয়াদা করছি
                যে,
              </label>
              <br />
              <div
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid black",
                  padding: 5,
                }}
              >
                <table style={{ border: "0px solid black", width: "100%" }}>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          padding: 0,
                          verticalAlign: "top",
                          fontSize: 14,
                        }}
                      >
                        ক.
                      </td>
                      <td style={{ padding: 0, fontSize: 14 }}>
                        মাদরাসার যাবতীয় নিয়ম শৃঙ্খলা মেনে চলব।
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 0,
                          verticalAlign: "top",
                          fontSize: 14,
                        }}
                      >
                        খ.
                      </td>
                      <td style={{ padding: 0, fontSize: 14 }}>
                        সংগত কারণ ব্যতীত মাদরাসা হতে অনুপস্থিত থাকব না।
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 0,
                          verticalAlign: "top",
                          fontSize: 14,
                        }}
                      >
                        গ.
                      </td>
                      <td style={{ padding: 0, fontSize: 14 }}>
                        মাদরাসার যাবতীয় প্রাপ্য নির্ধারিত সময়ের মধ্যে পরিশোধ
                        করব।
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 0,
                          verticalAlign: "top",
                          fontSize: 14,
                        }}
                      >
                        ঘ.
                      </td>
                      <td style={{ padding: 0, fontSize: 14 }}>
                        মাদরাসার নিয়ম শৃঙ্খলা বিরোধী কোন কার্যকলাপে লিপ্ত হলে
                        আমার মাদরাসা কর্তৃপক্ষের সিদ্ধান্তকেই চূড়ান্ত বলে মেনে
                        নেব।
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 0,
                          verticalAlign: "top",
                          fontSize: 14,
                        }}
                      >
                        ঙ.
                      </td>
                      <td style={{ padding: 0, fontSize: 14 }}>
                        কুরাআন ও সুন্নাহ মোতাবেক চলব।
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: 0,
                          verticalAlign: "top",
                          fontSize: 14,
                        }}
                      >
                        চ.
                      </td>
                      <td style={{ padding: 0, fontSize: 14 }}>
                        ইউনিফরম পরিধান করব।
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="checkbox" style={{ marginLeft: 20,marginTop:20 }}>
                <label style={{ fontSize: 16,color:"#E80000" }} >
                  <input
                    onclick="accepted(this)"
                    id="checkbox"
                    type="checkbox"
                  />
                  &nbsp; &nbsp; আমি ওয়াদা করলাম
                </label>
              </div>
              <br />
              <label>Captcha:</label>
              <label>
                {" "}
                ( <span id="num1">2</span> + <span id="num2">6</span> = ? )
              </label>
              <br />

              <div>
                <input
                  className="form-control"
                  name="captcha"
                  placeholder="উপরের যোগফলটি লিখুন"
                />
                <div id="ERRcaptcha" className="ERR" />
              </div>
              <br />
              <br />
              <button
                id="btnSubmit"
                name="btnSubmit"
                type="button"
                className="btn btn-primary"
                onclick="frmSubmit(this)"
                disabled="disabled"
              >
                Submit
              </button>
              <a href="/application" className="btn btn-primary pull-right">
                Cancel
              </a>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AdmissionRegistration;
