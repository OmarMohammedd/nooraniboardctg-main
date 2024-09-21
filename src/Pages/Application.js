import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


function Application() {
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
    <>
      <Header />
      <div className="just" style={{ backgroundColor: "#e8e8e8" }}>
        <div className="d_thumb">
          <p style={{ fontSize: 20, color: "#eb2d2e" }} className="আপনার">
            আপনার উপযুক্ত ধরনটি নির্বাচন করুন :
          </p>
          <div className="clearfix" />

          <div className="d_flex">

<Link to="/typeNew">
<div className="divOptions">
              <div
                className="text-center"
                style={{ padding: "5px 0px 0px 0px" }}
              >
                <div className="stuType" style={{ paddingTop: 5 }}>
                  আপনি ইতিপূর্বে এই প্রতিষ্ঠানে অধ্যয়ন
                  <br />
                  করেন নাই :
                </div>
                <div
                  className="btn btn-primary home_button"
                  style={{ width: 220, border: 0, fontSize: 20 }}
                >
                  <p style={{ fontSize: 20, paddingTop: "0.6rem" }}>
                    ভর্তিচ্ছু
                  </p>
                  <p style={{ fontSize: 20 }}>নতুন শিক্ষার্থী</p>
                </div>
              </div>
            </div>
</Link>
            
<Link to="/login-form">
            <div className="divOptions">
              <div
                className="text-center"
                style={{ padding: "5px 0px 0px 0px" }}
              >
                <div className="stuType" style={{ paddingTop: 5 }}>
                  আপনি ইতিপূর্বে এই প্রতিষ্ঠানে অধ্যয়ন
                  <br />
                  করেছেন :
                </div>
                <div
                  className="btn btn-primary home_button"
                  style={{ width: 220, border: 0, fontSize: 20 }}
                >
                  <p style={{ fontSize: 20, paddingTop: "0.6rem" }}>
                    ভর্তিচ্ছু
                  </p>
                  <p style={{ fontSize: 20 }}>প্রাক্তন শিক্ষার্থী</p>
                </div>
              </div>
            </div>
            </Link>
          </div>

          <div className="clearfix" />
          <Link to="/login-Formm">
          <div className="divOptions divOptions3">
            <div className="text-center" style={{ padding: "5px 0px 0px 0px" }}>
              <div className="stuType" style={{ paddingTop: 5 }}>
                ইতিমধ্যেই পূরণকৃত ফরম এর
                <br />
                <span className="error" style={{ color: "Red" }}>
                  তথ্য পরিবর্তন{" "}
                </span>
                অথবা
                <br />
                <span className="error" style={{ color: "Red" }}>
                  ভর্তি সংক্রান্ত কার্যক্রম{" "}
                </span>
                করতে চান&nbsp;:
              </div>
              <div
                className="btn btn-primary home_button"
                style={{ width: 220, border: 0, fontSize: 20 }}
              >
                <p style={{ fontSize: 20, paddingTop: "0.6rem" }}>আবেদনকৃত</p>
                <p style={{ fontSize: 20 }}>শিক্ষার্থী</p>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Application;
