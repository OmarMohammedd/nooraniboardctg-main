import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Institute_register_online() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
            নতুন প্রতিষ্ঠান নিবন্ধন ফরম (অনলাইন)
          </h3>
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="card">
                <form
                  id="form_id"
                  action="https://www.nooraniboardctg.com/payment/nagad/pay"
                  method="post"
                  encType="multipart/form-data"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="2QTliMlpUda3yZoNuKbDM26WYybkAHyEw9P345ci"
                  />{" "}
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12"></div>
                      <div className="col-md-6 border-right">
                        <div className="form-group">
                          <label className="font-weight-bold">
                            প্রতিষ্ঠানের নাম *
                          </label>
                          <input
                            type="text"
                            data-validation="required"
                            placeholder="Ex: মাদ্রাসার নাম"
                            autoComplete="off"
                            id="name"
                            name="name"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label className="font-weight-bold">
                            প্রতিষ্ঠানের নাম (ইংরেজি)
                          </label>
                          <input
                            type="text"
                            placeholder="Ex: মাদ্রাসার নাম(ইংরেজি)"
                            autoComplete="off"
                            name="en_name"
                            className="form-control"
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                className="font-weight-bold"
                                for="পাঠ্যক্রম"
                              >
                                প্রতিষ্ঠানের পাঠ্যক্রম *
                              </label>

                              <select
                                name="পাঠ্যক্রম"
                                id="পাঠ্যক্রম"
                                class="form-control"
                              >
                                <option value="পাঠ্যক্রম পছন্দ করুন">
                                  পাঠ্যক্রম পছন্দ করুন
                                </option>
                                <option value="হিজরী">হিজরী</option>
                                <option value="ইংরেজি">ইংরেজি</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label
                                for="head_typee"
                                className="font-weight-bold"
                              >
                                পরিচালনার দায়িত্বে *
                              </label>
                              <select
                                name="head_typee"
                                className="form-control"
                              >
                                <option value="" selected="" disabled="">
                                  পছন্দ করুন
                                </option>
                                <option value="পরিচালক">পরিচালক</option>
                                <option value="সভাপতি">সভাপতি</option>
                                <option value="প্রধান-শিক্ষক">
                                  প্রধান-শিক্ষক
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="font-weight-bold">
                            দায়িত্বরত ব্যক্তির নাম *
                          </label>
                          <input
                            type="text"
                            data-validation="required"
                            placeholder="Ex: মোহাম্মদ আব্দুল্লাহ"
                            autoComplete="off"
                            name="head_name"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label className="font-weight-bold">
                            দায়িত্বরত ব্যক্তির ইমেইল
                          </label>
                          <input
                            type="text"
                            placeholder="Ex: abdullah@gmail.com"
                            autoComplete="off"
                            name="email"
                            className="form-control"
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="font-weight-bold">
                                দায়িত্বরত ব্যক্তির ফোন নম্বর *{" "}
                                <small>(ইংরেজিতে প্রদান করুন।)</small>
                              </label>
                              <input
                                type="number"
                                id="phone"
                                data-validation="required"
                                placeholder="Ex: 017xxxxxxxx"
                                autoComplete="off"
                                name="phone"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="font-weight-bold">
                                দায়িত্বরত ব্যক্তির ফোন নম্বর-২{" "}
                                <small>(ইংরেজিতে প্রদান করুন।)</small>
                              </label>
                              <input
                                type="number"
                                id="phone_2"
                                placeholder="Ex: 017xxxxxxxx"
                                autoComplete="off"
                                name="phone_2"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="font-weight-bold">
                                রেজিস্ট্রেশন/আবেদনের তারিখ *
                              </label>
                              <input
                                type="text"
                                defaultValue="2024-06-22"
                                data-validation="required"
                                name="registration_date"
                                className="form-control date_picker"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="font-weight-bold">
                                বিভাগ *
                              </label>
                              <select
                                onchange="get_district(this.value)"
                                data-validation="required"
                                name="division_id"
                                className="form-control"
                              >
                                <option value="" selected="" disabled="">
                                  বিভাগ পছন্দ করুন
                                </option>
                                <option value={1}>চট্টগ্রাম। (01)</option>
                                <option value={2}>রাজশাহী (03)</option>
                                <option value={3}>খুলনা (04)</option>
                                <option value={4}>বরিশাল (05)</option>
                                <option value={5}>সিলেট (06)</option>
                                <option value={6}>ঢাকা (02)</option>
                                <option value={7}>রংপুর (07)</option>
                                <option value={8}>ময়মনসিংহ (08)</option>
                                <option value={9}>মেঘনা (09)</option>
                                <option value={10}>পদ্মা (10)</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="font-weight-bold">জেলা *</label>
                              <select
                                data-validation="required"
                                name="district_id"
                                onchange="get_area(this.value)"
                                id="district_id"
                                className="form-control"
                              >
                                <option value="" selected="" disabled="">
                                  প্রথমে বিভাগ পছন্দ করুন
                                </option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="font-weight-bold">
                                উপজেলা/থানা *
                              </label>
                              <select
                                data-validation="required"
                                name="area_id"
                                id="area_id"
                                className="form-control"
                              >
                                <option value="" selected="" disabled="">
                                  প্রথমে জেলা পছন্দ করুন
                                </option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label className="font-weight-bold">ইউনিয়ন</label>
                              <input
                                type="text"
                                placeholder="যদি থাকে"
                                autoComplete="off"
                                name="union_name"
                                className="form-control form-control-sm"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="font-weight-bold">
                                গ্রাম/এলাকার নাম
                              </label>
                              <input
                                type="text"
                                placeholder="গ্রাম"
                                autoComplete="off"
                                name="village"
                                className="form-control form-control-sm"
                              />
                            </div>
                            <div className="form-group">
                              <label className="font-weight-bold">ডাকঘর</label>
                              <input
                                type="text"
                                placeholder="ডাকঘর"
                                autoComplete="off"
                                name="post_office"
                                className="form-control form-control-sm"
                              />
                            </div>
                            <div className="form-group">
                              <label className="font-weight-bold">
                                পোস্ট কোড
                              </label>
                              <input
                                type="number"
                                step={1}
                                placeholder="ইংরেজিতে প্রদান করুন। (4330)"
                                autoComplete="off"
                                name="zip"
                                className="form-control form-control-sm"
                              />
                            </div>
                            <div className="form-group">
                              <label className="font-weight-bold">
                                ওয়ার্ড নং
                              </label>
                              <input
                                type="text"
                                placeholder="যদি থাকে"
                                autoComplete="off"
                                name="ward_name"
                                className="form-control form-control-sm"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <label className="font-weight-bold">
                                যার মারফতে রেজিস্ট্রেশন হচ্ছে
                              </label>
                              <select
                                name="member_id"
                                className="form-control"
                                data-validation="required"
                              >
                                <option value="" disabled="" selected="">
                                  মারফতের নাম সিলেক্ট করুন
                                </option>
                                <option value={88}>
                                  হাফেজ মাও. আরাফাত সরদার (NB-)
                                </option>
                                <option value={89}>
                                  মাও. মুফতি জাহিদ হাসান নাটোরী (NB-)
                                </option>
                                <option value={91}>
                                  মাওলানা শফিকুল ইসলাম সিরাজী (NB-)
                                </option>
                                <option value={92}>
                                  মাওলানা আব্দুল মান্নান রায়গঞ্জী (NB-)
                                </option>
                                <option value={93}>
                                  মোহাম্মদ জাহিদুল ইসলাম (NB-)
                                </option>
                                <option value={94}>
                                  মাও. মোঃ আবু হুরাইরা সাহেব (NB-)
                                </option>
                                <option value={1}>
                                  মাওলানা আবুল হাশেম (NB-001)
                                </option>
                                <option value={2}>
                                  মুহাম্মদ আনিছুল ইসলাম (NB-002)
                                </option>
                                <option value={3}>
                                  মাও. মাসউদুর রহমান (NB-003)
                                </option>
                                <option value={4}>
                                  মাও. জাকারিয়া আল মামুন (NB-004)
                                </option>
                                <option value={5}>
                                  মাও. মুখতার হোসাইন (NB-005)
                                </option>
                                <option value={47}>
                                  মোহাম্মদ হেলাল উদ্দীন (NB-006)
                                </option>
                                <option value={6}>
                                  মাও. সলিম উল্লাহ খাঁন (NB-007)
                                </option>
                                <option value={7}>
                                  মাস্টার শফিকুল ইসলাম (NB-007)
                                </option>
                                <option value={8}>
                                  মাও. ক্বারী আলহাজ্ব এমদাদুল্লাহ সালাম সাহেব
                                  দা. বা. (NB-008)
                                </option>
                                <option value={9}>
                                  মাও. মনজুরুল ইসলাম (NB-009)
                                </option>
                                <option value={11}>
                                  মাও. নুরুল আবছার (NB-011)
                                </option>
                                <option value={12}>
                                  মাও. নুরুল আলম (NB-012)
                                </option>
                                <option value={13}>
                                  মাও. হারুন অর রশিদ (NB-013)
                                </option>
                                <option value={14}>
                                  মাও. এনামুল হক (NB-014)
                                </option>
                                <option value={16}>
                                  মাও. আব্দুল বারী (NB-016)
                                </option>
                                <option value={17}>
                                  মাও. আবছার কামাল (NB-017)
                                </option>
                                <option value={18}>
                                  মাও. কামরুল ইসলাম (NB-018)
                                </option>
                                <option value={19}>
                                  মাও. আজিজুল হক খান (NB-019)
                                </option>
                                <option value={20}>
                                  মাও. খলিলুল গফ্ফার (NB-020)
                                </option>
                                <option value={21}>
                                  মাও. মাহমুদুল হাসান (NB-021)
                                </option>
                                <option value={22}>
                                  মাও. নুরুল্লাহ সাইফুল (NB-022)
                                </option>
                                <option value={23}>
                                  মাও. আতাউর রহমান ছগীর (NB-023)
                                </option>
                                <option value={24}>
                                  মাও. কাজী মুহাম্মদ হাসান (NB-024)
                                </option>
                                <option value={25}>
                                  মাও. নুর মুহাম্মদ (NB-025)
                                </option>
                                <option value={26}>
                                  মাও. রুহুল আমিন (NB-026)
                                </option>
                                <option value={27}>
                                  মাও. শহিদুল্লাহ (মাদার্শাহী) (NB-027)
                                </option>
                                <option value={28}>মাও. তাহের (NB-028)</option>
                                <option value={29}>
                                  মাও. জামাল উদ্দীন (NB-029)
                                </option>
                                <option value={30}>
                                  মাও. আতিক বিন হাসান (NB-030)
                                </option>
                                <option value={31}>
                                  মাও. আরিফুল ইসলাম (NB-031)
                                </option>
                                <option value={32}>
                                  মাও. মুফিজুল ইসলাম (NB-032)
                                </option>
                                <option value={33}>
                                  মাও. তাজুল ইসলাম (NB-033)
                                </option>
                                <option value={34}>মাও. ইউসুফ (NB-034)</option>
                                <option value={35}>
                                  মাও. ওমর ফারুক (NB-035)
                                </option>
                                <option value={36}>
                                  মাও. শহিদুল্লাহ (বাঁশখালী) (NB-036)
                                </option>
                                <option value={37}>
                                  মাও. মুনিরুল করিম (NB-037)
                                </option>
                                <option value={38}>
                                  মাও. ইমাম হোসাইন (NB-038)
                                </option>
                                <option value={39}>
                                  মাও. জামিল আহমদ (NB-039)
                                </option>
                                <option value={40}>মাও. নোমান (NB-040)</option>
                                <option value={41}>
                                  মাও. ইব্রাহীম মুসলিম (NB-041)
                                </option>
                                <option value={42}>
                                  মাও. কামাল উদ্দীন (NB-042)
                                </option>
                                <option value={43}>
                                  মাও. এমরান বিন মাও. জমিরউদ্দীন সাহেব (NB-043)
                                </option>
                                <option value={44}>
                                  মাও. আবদুর রহিম রাশেদ (NB-044)
                                </option>
                                <option value={45}>মাও. ফোরকান (NB-045)</option>
                                <option value={46}>
                                  মাও. যোবায়ের হাসান (NB-046)
                                </option>
                                <option value={48}>
                                  মাও. মাহফুজুর রহমান (NB-048)
                                </option>
                                <option value={49}>
                                  মাও. আশরাফ হাবিবী (NB-049)
                                </option>
                                <option value={50}>
                                  মাও. ক্বারী লোকমান (NB-050)
                                </option>
                                <option value={51}>
                                  মাও. নুরুল্লাহ বিন জামাল উদ্দীন (NB-051)
                                </option>
                                <option value={53}>
                                  মাওলানা মুফ্তী মুহাম্মদ আলী সাহেব (দা.বা.)
                                  (NB-053)
                                </option>
                                <option value={54}>
                                  মাওলানা আল্লামা খলিল আহমদ কাসেমী (দা.বা.)
                                  (NB-054)
                                </option>
                                <option value={55}>
                                  মাওলানা মুফ্তী জসিম উদ্দীন সাহেব (দা.বা.)
                                  (NB-055)
                                </option>
                                <option value={56}>
                                  হাফেজ মাওলানা ইসমাইল সাহেব (দা.বা.) (NB-056)
                                </option>
                                <option value={57}>
                                  মাওলানা জমির উদ্দীন সাহেব (দা.বা.) (NB-057)
                                </option>
                                <option value={58}>
                                  মাওলানা মীর মুহাম্মদ আনিস সাহেব (দা.বা.)
                                  (NB-058)
                                </option>
                                <option value={59}>
                                  মাওলানা মাহমুদুল হাসান সাহেব (দা.বা.) (NB-059)
                                </option>
                                <option value={60}>
                                  মুহাম্মদ শফিকুল ইসলাম (NB-060)
                                </option>
                                <option value={61}>
                                  মুহাম্মদ জিহাদ হোসেন (NB-061)
                                </option>
                                <option value={62}>
                                  মুহাম্মদ আব্দুর রহমান (সুজন) (NB-062)
                                </option>
                                <option value={63}>
                                  মুহাম্মদ মেহেদী (NB-063)
                                </option>
                                <option value={64}>
                                  মুহাম্মদ রফিকুল ইসলাম (NB-064)
                                </option>
                                <option value={67}>
                                  হযরত মাও. উসমান ফয়জী সাহেব (NB-067)
                                </option>
                                <option value={68}>
                                  মাও. মানযূরুল হক সাহেব (NB-068)
                                </option>
                                <option value={69}>
                                  মাওলানা ছলিম উল্লাহ আমিন (NB-069)
                                </option>
                                <option value={70}>
                                  মো: নাছির উদ্দীন (NB-070)
                                </option>
                                <option value={71}>
                                  মাও. ফজলে রব্বী (NB-071)
                                </option>
                                <option value={72}>
                                  মাও. মোঃ ইলিয়াছ হোসেন (NB-072)
                                </option>
                                <option value={73}>
                                  মাওলানা গিয়াস উদ্দীন (NB-073)
                                </option>
                                <option value={74}>
                                  মাও. জাহেদ হাসান হাটহাজারী (NB-074)
                                </option>
                                <option value={75}>
                                  মাও. আব্দুল আলীম (NB-075)
                                </option>
                                <option value={76}>
                                  মাও. মোঃ মনিরুল ইসলাম সিরাজী (NB-076)
                                </option>
                                <option value={77}>
                                  মাওলানা ফোরকান ফতপুরী (NB-077)
                                </option>
                                <option value={78}>
                                  মাওলানা শাহরিয়ার (NB-078)
                                </option>
                                <option value={79}>
                                  মাওলান আব্দুল হাকিম সাহেব (NB-079)
                                </option>
                                <option value={80}>
                                  মাওলানা লোকমান সাহেব গড়দুয়ারী (NB-080)
                                </option>
                                <option value={81}>
                                  মাওলানা নুরুল ইসলাম সাহেব (NB-081)
                                </option>
                                <option value={82}>
                                  মাওলানা শাফায়েত উল্লাহ নেত্রকোনা (NB-082)
                                </option>
                                <option value={83}>
                                  মাওলানা মোহাম্মদ ইউনুছ লোহাগাড়া (NB-083)
                                </option>
                                <option value={84}>
                                  মাওলানা শাহাদাত হোসাইন আরবী (NB-084)
                                </option>
                                <option value={85}>
                                  মাওলানা এনামুল হাসান সাহেব (NB-085)
                                </option>
                                <option value={90}>
                                  মাওলানা মোহাম্মদ হাবীব উল্লাহ (NB-085)
                                </option>
                                <option value={86}>
                                  মাওলানা মোহাম্মদ মুহি উদ্দিন সাহেব (NB-086)
                                </option>
                                <option value={87}>
                                  হাফেজ মাওলানা মোহাম্মদ আসেফ (NB-087)
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <label className="font-weight-bold">
                              পেমেন্ট/বোর্ড ফি পরিশোধের মাধ্যম{" "}
                            </label>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                defaultChecked=""
                                type="radio"
                                name="payment_method"
                                id="online"
                                defaultValue="online"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="online"
                              >
                                অনলাইন (নগদ){" "}
                                <img
                                  style={{ width: 50 }}
                                  src="https://nooraniboardctg.com/nooraniboardctg.com/public/payment/nagad"
                                  alt=""
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <br />
                        <div className="row" id="online_div">
                          <input
                            type="hidden"
                            defaultValue={7}
                            id="payment_type"
                            name="type"
                          />
                          <input
                            type="hidden"
                            name="transaction_id"
                            defaultValue="mi222247t7"
                          />
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <label className="font-weight-bold">
                                পরিদর্শনের জন্য যাতায়াতের বর্ণনা
                              </label>
                              <textarea
                                className="form-control resize_none"
                                name="visiting_transport"
                                rows={2}
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-12" id="err_msg_div" />
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary d-block"
                        >
                          সাবমিট করুন{" "}
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

      <div
        className="modal"
        id="scc_modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="scc_modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-primary" role="document">
          <div className="modal-content">
            <div className="modal-header bg-success">
              <h5 className="modal-title text-white">আবেদন সম্পন্ন হয়েছে</h5>
              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-3 py-5 text-center">
              <h4>আপনার মাদরাসা নিবন্ধনের আবেদনটি সফলভাবে সম্পন্ন হয়েছে। </h4>
              <h5>পরবর্তী ধাপের জন্য ফরম নম্বরটি সংরক্ষণ করুন। </h5>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal"
        id="alert_modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="scc_modal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-primary" role="document">
          <div className="modal-content">
            <div className="modal-header bg-danger">
              <h5 className="modal-title text-white">সতর্কতামূলক বার্তা</h5>
              <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-3 py-5 text-center">
              <h4>
                আপনার প্রতিষ্ঠান নিবন্ধনের আবেদন পূর্বে করা হয়ে থাকলে পুনরায় করা
                হতে বিরত থাকুন।{" "}
              </h4>
              <hr />
              <h5>
                আপনার প্রতিষ্ঠানের নিবন্ধন পূর্বে হয়েছে কিনা, প্রতিষ্ঠান কোড
                অথবা প্রতিষ্ঠান সম্পর্কিত যাবতীয় সকল তথ্যের জন্য হেল্পলাইন
                নম্বরে যোগাযোগ করুন। <br />
                ০১৩২২-৮৯১০২০, ০১৩২২-৮৯১০৪০
              </h5>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <div
        className="modal fade"
        id="phone_modal"
        tabindex="-1"
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
                  <span aria-hidden="true">&times;</span>
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

export default Institute_register_online;
