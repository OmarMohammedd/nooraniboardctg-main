import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function TypeNew() {
  return (
    <div>
       
        <Header/>
           <div className="container">
  <div className="page-header" style={{ margin: "0px 15px 0px 15px" }}>
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
  </div>{" "}
  {/*<div class="just" style="background-color:#2e6da4">*/}
  <div className="" style={{}}>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n      .d_thumb {\n        margin: 5px auto;\n        text-align: center;\n      }\n\n      .loginlink {\n        background-image: linear-gradient(to bottom, #337ab7 0%, #265a88 100%);\n        font-weight: bold;\n        font-size: 18px;\n        text-align: center;\n        margin-top: 10px;\n        display: inline-table;\n        padding: 5px 15px 5px 15px;\n        border: 5px solid #f0f0f0;\n        border-radius: 6px;\n      }\n\n      .loginlink:hover,\n      .loginlink:focus,\n      .loginlink.focus,\n      .loginlink:active,\n      .loginlink.active,\n      .open>.dropdown-toggle.loginlink {\n        color: #fff;\n        background-image: linear-gradient(to bottom, #265a88 0%, #337ab7 100%);\n        border-color: #204d74;\n      }\n\n      .stuType {\n        font-size: 16px;\n        color: #000000\n      }\n\n      .divOptions {\n        margin: 5px;\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n        border-radius: 10px;\n        display: inline-table;\n        width: 230px;\n        border: 0px solid #f0f0f0;\n        margin-top: 15px\n      }\n\n      .divOptions:hover {\n        border: 0px solid #337ab7;\n        margin-top: 15px\n      }\n    "
      }}
    />
    <div className="just" style={{ backgroundColor: "#e8e8e8" }}>
      <div className="d_thumb">
        <a
          href="/application"
          className="btn btn-primary"
          style={{ margin: "20px 0px 10px 0px" }}
        >
          Go Back
        </a>
        <p
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "green",
            margin: 10,
            fontWeight: "bold"
          }}
        >
          ভর্তিচ্ছু নতুন শিক্ষার্থী
        </p>
        <p className="error" style={{ margin: 0, fontSize: 18 }}>
          {" "}
          আপনার প্রয়োজনীয় ফরমটি নির্বাচন করুন :{" "}
        </p>
        <div className="divOptions">
          <a href="/admission-registration">
            <div className="text-center" style={{ padding: "0px 0px 0px 0px" }}>
              <div
                className="btn btn-primary home_button"
                style={{ width: 220, border: 0, fontSize: 20 }}
              >
                <p style={{ fontSize: 20 }}>
                  ফরম - ১<br />
                  হিফজ হতে ৮ম শ্রেনী
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="clearfix" />
        <div className="divOptions">
          <a href="/admission-registrationn">
            <div className="text-center" style={{ padding: "0px 0px 0px 0px" }}>
              <div
                className="btn btn-primary home_button"
                style={{ width: 220, border: 0, fontSize: 20 }}
              >
                <p style={{ fontSize: 20 }}>
                  ফরম - ২<br />
                  ৯ম হতে কামিল
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    #loaderContent,\n    #modalSuccessContent,\n    #modalFailContent {\n      font-weight: bold;\n      border-radius: 0px 0px 6px 6px;\n      min-height: 70px;\n    }\n  "
    }}
  />
  <div className="modal fade" role="dialog" id="Modal01">
    <div
      id="Modal01Body"
      className="modal-dialog modal-dialog-scrollable modal-lg"
      role="document"
      style={{ maxWidth: 740 }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <div
            id="Modal01Head"
            className="pull-left error"
            style={{ marginTop: "-10px", fontWeight: "bold" }}
          />
          <button
            style={{ marginTop: "-12px" }}
            type="button"
            className="close"
            data-dismiss="modal"
          >
            <img src="https://tmm.edu.bd/admission/images/close-button.png" />
          </button>
        </div>
        <div className="modal-body" id="Modal01Cont" />
      </div>
    </div>
  </div>
  <div className="modal loaderModal" id="loaderModal">
    <div className="modal-dialog" role="document" style={{ maxWidth: 400 }}>
      <div className="modal-content">
        <div className="modal-header">
          <div id="loaderHead" className="pull-left" />
          <div id="loaderClose" />
        </div>
        <div className="modal-body text-center" id="loaderContent" />
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    role="dialog"
    id="modalFail"
    style={{ maxWidth: 400 }}
  >
    <div className="modal-dialog modalCenter">
      <div className="modal-content">
        <div className="modal-header">
          <div
            id="modalFailHeader"
            className="pull-left"
            style={{ marginTop: "-10px", fontWeight: "bold" }}
          >
            Fail!
          </div>
          <button
            style={{ marginTop: "-12px" }}
            type="button"
            className="close"
            data-dismiss="modal"
          >
            <img src="https://tmm.edu.bd/admission/images/close-button.png" />
          </button>
        </div>
        <div
          className="modal-body msgFail"
          id="modalFailContent"
          style={{ fontWeight: "bold", borderRadius: "0px 0px 6px 6px" }}
        ></div>
      </div>
    </div>
  </div>
  <div className="modal fade" role="dialog" id="modalSuccess">
    <div className="modal-dialog modalCenter" style={{ maxWidth: 400 }}>
      <div className="modal-content">
        <div className="modal-header">
          <div
            id="modalSuccessHeader"
            className="pull-left"
            style={{ marginTop: "-10px", fontWeight: "bold" }}
          >
            Success!
          </div>
          <button
            style={{ marginTop: "-12px" }}
            type="button"
            className="close"
            data-dismiss="modal"
          >
            <img src="https://tmm.edu.bd/admission/images/close-button.png" />
          </button>
        </div>
        <div
          className="modal-body msgSucx"
          id="modalSuccessContent"
          style={{ fontWeight: "bold", borderRadius: "0px 0px 6px 6px" }}
        ></div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="modalConf">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-body">
          <div
            style={{ width: "100%", marginTop: 10 }}
            className="text-center"
            id="modalConfDiag"
          ></div>
          <div style={{ width: "100%", marginTop: 25 }} id="modalConfBtn"></div>
        </div>
      </div>
    </div>
  </div>

           </div>
        <Footer/>
      
    </div>
  )
}

export default TypeNew