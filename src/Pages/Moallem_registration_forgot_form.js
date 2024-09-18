import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Moallem_registration_forgot_form() {
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
      oncontextmenu="return false"
      cz-shortcut-listen="true"
      data-new-gr-c-s-check-loaded="14.1184.0"
      data-gr-ext-installed=""
    >
      <Header />
      <div class="container" data-select2-id="10">
        <section class="mt-4" data-select2-id="9">
          <hr />
          <div class="row">
            <div class="col-12">
              <div class="card" data-select2-id="8">
                <form
                  action="/moallem-registration-search-form"
                  method="post"
                  class="has-validation-callback"
                  data-select2-id="7"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="nhUowi07JIPjbwxYbbb28Y97iyYC4AXyCLfcClFC"
                  />{" "}
                  <div class="card-body my-4 py-5" data-select2-id="6">
                    <div class="col-md-8 m-auto">
                      <h3 class="text-center font_weight700 text-danger my-4">
                        এই ফরমটি শুধুমাত্র ঐসকল আবেদনকারীর জন্য,{" "}
                      </h3>
                      <h4>
                        যারা অনলাইনে মুয়াল্লিম প্রশিক্ষণের জন্য রেজিস্ট্রেশন
                        করেছেন। কিন্তু ফরম ডাউনলোড করতে ভুলে গেছেন অথবা ফরম
                        হারিয়ে ফেলেছেন।
                      </h4>
                    </div>
                    <hr />
                    <div class="col-md-8 m-auto"></div>
                    <div class="col-md-5 m-auto" data-select2-id="5">
                      <div class="form-group">
                        <label for="phone" class="font-weight-bold">
                          মোবাইল নম্বর{" "}
                          <small>(যেটি দিয়ে ফরম পূরণ করেছিলেন)</small>
                        </label>
                        <input
                          data-validation="required"
                          type="number"
                          name="phone"
                          class="form-control"
                          step="1"
                          id="phone"
                        />
                      </div>

                      <div class="form-group">
                        <label for="প্রশিক্ষণ" class="font-weight-bold">
                          প্রশিক্ষণ কেন্দ্র ও ব্যাচ নং
                        </label>

                        <select
                          name="প্রশিক্ষণ"
                          id="প্রশিক্ষণ"
                          class="form-control"
                        >
                          <option value="338">
                            606- ঝিনাইদহ কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="339">
                            601- কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="340">
                            602- ঢাকা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="341">
                            603- টাঙ্গাইল কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="342">
                            604- খুলনা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="343">
                            607- পিরোজপুর: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                            বাংলাদেশ
                          </option>
                          <option value="344">
                            608- নেত্রকোণা কার্যালয় : নূরানী তা’লীমুল কুরআন
                            বোর্ড চট্টগ্রাম বাংলাদেশ (ফয়জুল উলূম হামিউসসুন্নাহ
                            মাদরাসা)
                          </option>
                          <option value="345">
                            610- তা’লীমুস সুন্নাহ মাদরাসা (নূরানী বিভাগ)
                          </option>
                          <option value="346">
                            605- বগুড়া কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="347">
                            501- কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="348">
                            502- ঢাকা নয়াটোলা আনওয়ারুল উলূম নো’মানিয়া কামিল
                            মাদরাসা
                          </option>
                          <option value="349">
                            503- শেরপুর কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="350">
                            504- দারুস সুন্নাহ মাদরাসা
                          </option>
                          <option value="351">
                            505- নূরানী মডেল মাদরাসা এন্ড স্কুল শাখা
                          </option>
                          <option value="352">
                            506- নেত্রকোণা কার্যালয় : নূরানী তা’লীমুল কুরআন
                            বোর্ড চট্টগ্রাম বাংলাদেশ (ফয়জুল উলূম হামিউসসুন্নাহ
                            মাদরাসা)
                          </option>
                          <option value="353">
                            611- কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="354">
                            612- আল-জামেয়াতুল আহলিয়া দারুল উলূম মুঈনুল ইসলাম
                            (হাটহাজারী মাদরাসা)
                          </option>
                          <option value="355">
                            613- ঢাকা নয়াটোলা আনওয়ারুল উলূম নো’মানিয়া কামিল
                            মাদরাসা
                          </option>
                          <option value="356">
                            614- ঢাকা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="357">
                            615- খুলনা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="358">
                            616- শেরপুর কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="359">
                            617- টাঙ্গাইল কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="360">
                            618- বগুড়া কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="361">
                            619- পিরোজপুর: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                            বাংলাদেশ
                          </option>
                          <option value="362">
                            620- জামেয়া মাদানিয়া ইসলামিয়া (কাজির বাজার মাদরাসা)
                          </option>
                          <option value="363">
                            621- ধর্মাদী ফয়জুল উলূম ইসলামিয়া মাদরাসা
                          </option>
                          <option value="364">
                            622- জামিয়া ইসলামিয়া আরাবিয়া উমেদ নগর, হবিগঞ্জ
                          </option>
                          <option value="365">
                            623- আল জামিয়াতুল ইসলামিয়া কাসেমুল উলূম ক্বওমী
                            মাদরাসা
                          </option>
                          <option value="366">
                            624- আল জামিয়াতুল কারীমিয়া নূরুল উলূম জুম্মাপাড়া
                            (নূরানী বিভাগ)
                          </option>
                          <option value="367">
                            625- রাজশাহী দারুল উলূম মাদরাসা
                          </option>
                          <option value="368">
                            627- জামিয়া হোসাইনিয়া মদীনাতুল উলূম হাফেজিয়া মাদরাসা
                          </option>
                          <option value="369">
                            628- আল-জামিয়া আল-ইসলামীয়া দারুল উলূম চাকমারকুল (বড়
                            মাদরাসা)
                          </option>
                          <option value="370">
                            629- আল জামিয়াতুল ইমদাদিয়া কিশোরগঞ্জ
                          </option>
                          <option value="371">
                            630- জামিয়া ইউনুছিয়া মাদরাসা
                          </option>
                          <option value="372">
                            631- দারুল উলূম ফয়জিয়া মহিউসসুন্নাহ মাদরাসা
                          </option>
                          <option value="373">
                            632- জামিয়া শেখ মুহাম্মাদ আব্দুল্লাহ (হযরতপুর
                            মাদরাসা)
                          </option>
                          <option value="374">
                            633- নেত্রকোণা কার্যালয় : নূরানী তা’লীমুল কুরআন
                            বোর্ড চট্টগ্রাম বাংলাদেশ (ফয়জুল উলূম হামিউসসুন্নাহ
                            মাদরাসা)
                          </option>
                          <option value="375">
                            634- মোমতাজুল উলূম মাদরাসা
                          </option>
                          <option value="376">
                            635- আল-জামিয়াতুল ইসলামিয়া দারুস সুন্নাহ হ্নীলা
                          </option>
                          <option value="377">
                            626- বাইতুল কুরআন হাফিজিয়া মাদরাসা
                          </option>
                          <option value="378">
                            507- কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="379">
                            508- ঝিনাইদহ কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="380">
                            509- হামিউসসুন্নাহ রউজাতুল উলূম মাদরাসা
                          </option>
                          <option value="381">
                            510- জামেয়া আশরাফিয়া পাবনা
                          </option>
                          <option value="382">
                            636- কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="383">
                            637- ঢাকা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="384">
                            638- শেরপুর কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="385">
                            639- দারুল উলূম ইসলামিয়া মাদরাসা
                          </option>
                          <option value="386">
                            640- টাঙ্গাইল কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="387">
                            641- ঝিনাইদহ কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="388">
                            511- কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="389">
                            512- খুলনা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="390">
                            513- টাঙ্গাইল কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="391">
                            514- বগুড়া কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="392">
                            642- নেত্রকোণা কার্যালয় : নূরানী তা’লীমুল কুরআন
                            বোর্ড চট্টগ্রাম বাংলাদেশ (ফয়জুল উলূম হামিউসসুন্নাহ
                            মাদরাসা)
                          </option>
                          <option value="393">
                            515- আল জামিয়াতুল কারীমিয়া নূরুল উলূম জুম্মাপাড়া
                            (নূরানী বিভাগ)
                          </option>
                          <option value="394">
                            516- আল জামিয়াতুল আরবিয়্যা কাসেমুল উলূম ক্বওমী
                            মাদরাসা
                          </option>
                          <option value="395">
                            517- আন-নূর ইসলামী একাডেমী
                          </option>
                          <option value="396">
                            643- কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="397">
                            644- খুলনা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="398">
                            645- টাঙ্গাইল কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="399">
                            646- বগুড়া কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="400">
                            647- জামিয়া হোসাইনিয়া আরাবিয়া
                          </option>
                          <option value="401">
                            518- কেন্দ্রীয় কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="402">
                            519- পিরোজপুর: নূরানী তা’লীমুল কুরআন বোর্ড চট্টগ্রাম
                            বাংলাদেশ
                          </option>
                          <option value="403">
                            648- ঢাকা নয়াটোলা আনওয়ারুল উলূম নো’মানিয়া কামিল
                            মাদরাসা
                          </option>
                          <option value="404">
                            649- শেরপুর কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="405">
                            650- জামিয়া ইসহাকিয়া ইসলামিয়া মাদরাসা
                          </option>
                          <option value="406">
                            651- ফয়জুল উলূম হামিউসসুন্নাহ নূরানী মাদরাসা
                          </option>
                          <option value="407">
                            520- ঢাকা কার্যালয় : নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                          <option value="408">
                            521- ঝিনাইদহ কার্যালয়: নূরানী তা’লীমুল কুরআন বোর্ড
                            চট্টগ্রাম বাংলাদেশ
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 py-4 text-center">
                        <button
                          class="btn btn-info text-white btn-lg"
                          type="submit"
                        >
                          <i class="fa fa-search"></i>&nbsp;ফরম খুঁজুন
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

      <grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </div>
  );
}

export default Moallem_registration_forgot_form;
