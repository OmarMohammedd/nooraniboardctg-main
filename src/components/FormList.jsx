import React from "react";
import { Link } from "react-router-dom";

function FormList() {
  return (
    <div className="col-md-4">
      <div className="card">
        <h5 className="card-header custom_header">
          <i className="fas fa-file-pdf" /> অন্যান্য ফর্ম-সমূহ
        </h5>
        <div className="card-body p-0">
          <ul className="list-group event_list">
            <Link
              to="/form/madrasah-registration-form"
              className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
            >
              <div
                className="image_div"
                style={{ maxWidth: 30, height: "auto" }}
              >
                <img
                  className="mw-100"
                  src="https://nooraniboardctg.com/public/assets/notice.png"
                  alt="quixote"
                />
              </div>
              <div className="title d-inline-block">মাদরাসা নিবন্ধন ফরম</div>
            </Link>
            <Link
              to="/form/muallem-recruitment-application-form"
              className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
            >
              <div
                className="image_div"
                style={{ maxWidth: 30, height: "auto" }}
              >
                <img
                  className="mw-100"
                  src="https://nooraniboardctg.com/public/assets/notice.png"
                  alt="quixote"
                />
              </div>
              <div className="title d-inline-block">
                মুয়াল্লিম নিয়োগ আবেদন ফরম
              </div>
            </Link>
            <Link
              to="/form/muallem-registration-form"
              className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
            >
              <div
                className="image_div"
                style={{ maxWidth: 30, height: "auto" }}
              >
                <img
                  className="mw-100"
                  src="https://nooraniboardctg.com/public/assets/notice.png"
                  alt="quixote"
                />
              </div>
              <div className="title d-inline-block">মুয়াল্লিম ভর্তি ফরম</div>
            </Link>
            <Link
              to="/form/teacher-certificate-application-form-bangla"
              className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
            >
              <div
                className="image_div"
                style={{ maxWidth: 30, height: "auto" }}
              >
                <img
                  className="mw-100"
                  src="https://nooraniboardctg.com/public/assets/notice.png"
                  alt="quixote"
                />
              </div>
              <div className="title d-inline-block">
                মুয়াল্লিম সনদ আবেদন ফরম (বাংলা)
              </div>
            </Link>
            <Link
              to="/form/teacher-certificate-application-form-arabic"
              className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
            >
              <div
                className="image_div"
                style={{ maxWidth: 30, height: "auto" }}
              >
                <img
                  className="mw-100"
                  src="https://nooraniboardctg.com/public/assets/notice.png"
                  alt="quixote"
                />
              </div>
              <div className="title d-inline-block">
                মুয়াল্লিম সনদ আবেদন ফরম (আরবি)
              </div>
            </Link>
            <Link
              to="/form/kendreey-snd-preekshar-uttrptr-pun-nireekshner-abedn-frm"
              className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
            >
              <div
                className="image_div"
                style={{ maxWidth: 30, height: "auto" }}
              >
                <img
                  className="mw-100"
                  src="https://nooraniboardctg.com/public/assets/notice.png"
                  alt="quixote"
                />
              </div>
              <div className="title d-inline-block">
                কেন্দ্রীয় সনদ পরীক্ষার উত্তরপত্র পুণঃ নিরীক্ষণের আবেদন ফরম
              </div>
            </Link>
            <Link
              to="/form/admit-card"
              className="shadow-sm list-group-item list-group-item-action d-flex align-items-center"
            >
              <div
                className="image_div"
                style={{ maxWidth: 30, height: "auto" }}
              >
                <img
                  className="mw-100"
                  src="https://nooraniboardctg.com/public/assets/notice.png"
                  alt="quixote"
                />
              </div>
              <div className="title d-inline-block">প্রবেশপত্র</div>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FormList;
