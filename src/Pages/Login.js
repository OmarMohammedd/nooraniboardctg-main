import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Login() {
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

      <div class="container mt-4">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="card">
              <div class="card-header bg-danger text-white">
                লগইন ফরম-(প্রতিষ্ঠানের এডমিনের জন্য)
              </div>

              <div class="card-body ">
                <div class="text-center icon_div hvr-glow d-block">
                  <i class="fas fa-user-lock login_icon"></i>
                </div>
                <form
                  method="POST"
                  action="/login"
                  class="has-validation-callback"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="Pt7OAFgoe39xQSO7cL6yarWvaB4WVkDipQagXYc7"
                  />
                  <div class="form-group">
                    <label
                      for="email"
                      class="col-form-label text-md-right font-weight-bold"
                    >
                      {" "}
                      প্রতিষ্ঠান কোড{" "}
                      <small class="text-danger font-weight-bold">
                        (ইংরেজিতে প্রদান করুন)
                      </small>{" "}
                    </label>
                    <input
                      id="email"
                      type="number"
                      class="form-control "
                      placeholder="ইংরেজিতে লিখুন"
                      name="email"
                      value=""
                      required=""
                      autocomplete="email"
                      autofocus=""
                    />
                  </div>

                  <div class="form-group">
                    <label
                      for="password"
                      class="col-form-label text-md-right font-weight-bold"
                    >
                      পাসওয়ার্ড
                    </label>

                    <input
                      id="password"
                      type="password"
                      class="form-control "
                      name="password"
                      required=""
                      autocomplete="current-password"
                    />
                  </div>
                  <div class="form-group">
                    <Link class="" to="/password/reset">
                      পাসওয়ার্ড ভুলে গেছেন ?
                    </Link>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">
                      সাবমিট করুন
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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
  );
}

export default Login;
