import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DataMoallem from "./moallem-training/DataMoallem";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Moallem403() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { id } = useParams();

  const batch = DataMoallem.find((batch) => batch.id === id);

  if (!batch) {
    return <div>Batch not found!</div>;
  }

  return (
    <div
      style={{ background: "url(https://nooraniboardctg.com/public/bg.jpg)" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Header />

      <div className="container">
        <section className="mt-4">
          <h3 className="text-center font_weight700">মুয়াল্লিম ভর্তি ফরম</h3>
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div
                  className="card-header shadow p-4"
                  style={{ border: "3px solid #AD1F24" }}
                >
                  <div className="row">
                    <div className="col-md-9">
                      <h5 className="font_weight600">
                        প্রশিক্ষণের কেন্দ্র: {batch.center}
                      </h5>
                      <h6 className="font_weight600">
                        ঠিকানা: {batch.address}
                      </h6>
                      <h6 className="font_weight600">
                        যোগাযোগ: {batch.contact}
                      </h6>
                    </div>
                    <div className="col-md-3">
                      <h5 className="font_weight600">
                        ব্যাচ নং:: {batch.batchNumber}
                      </h5>
                      <h6 className="font_weight600">বিষয়:: {batch.subject}</h6>
                      <h6 className="font_weight600">
                        শুরুর তারিখ:: {batch.startDate}
                      </h6>
                    </div>
                  </div>
                </div>

                <form
                  action="/moallem-registration"
                  method="post"
                  className="has-validation-callback"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="9JY3NBo52RKEgpSuJ1x88xrdbDeQu0g6Z4nX27RM"
                  />{" "}
                  <div className="card-body mt-4">
                    <div className="alert alert-success" role="alert">
                      *** প্রশিক্ষণের বিষয় <strong>আরবী</strong> হলে
                      (প্রশিক্ষণার্থীর নাম,পিতার নাম, মাতার নাম) সমূহ বাংলা
                      ফিল্ড গুলো অবশ্যই পূরণ করতে হবে।
                    </div>
                    <div className="alert alert-primary" role="alert">
                      *** প্রশিক্ষণের বিষয় <strong>বাংলা</strong> হলে
                      (প্রশিক্ষণার্থীর নাম,পিতার নাম, মাতার নাম) সমূহ ইংরেজি
                      ফিল্ড গুলো অবশ্যই পূরণ করতে হবে।
                    </div>
                    <h2 className="text-center text-danger font-weight-bold">
                      আবেদনকারীর তথ্য
                    </h2>
                    <input
                      type="hidden"
                      name="moallem_training_id"
                      defaultValue={403}
                    />
                    <input type="hidden" name="batch_no" defaultValue={648} />
                    <input type="hidden" name="fee" defaultValue={7600} />
                    <input
                      type="hidden"
                      name="acc_session"
                      defaultValue={2024}
                    />
                    <div className="row">
                      <div className="col-md-8 py-3 border">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">
                                প্রশিক্ষণার্থীর নাম (বাংলা) *
                              </label>
                              <input
                                type="text"
                                name="name"
                                className="bg-sc form-control"
                                data-validation="required"
                                placeholder="ইউনিকোড ব্যবহার করুন"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">
                                প্রশিক্ষণার্থীর নাম (ইংরেজি){" "}
                              </label>
                              <input
                                type="text"
                                name="name_en"
                                className="bg-pr form-control"
                                data-validation=""
                                placeholder="Type in english"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">পিতার নাম (বাংলা) *</label>
                              <input
                                type="text"
                                name="father_name"
                                className="bg-sc form-control"
                                data-validation="required"
                                placeholder="ইউনিকোড ব্যবহার করুন"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">পিতার নাম (ইংরেজি) </label>
                              <input
                                type="text"
                                name="father_name_en"
                                className="bg-pr form-control"
                                data-validation=""
                                placeholder="Type in english"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">মাতার নাম (বাংলা) *</label>
                              <input
                                type="text"
                                name="mother_name"
                                className="bg-sc form-control"
                                data-validation="required"
                                placeholder="ইউনিকোড ব্যবহার করুন"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">মাতার নাম (ইংরেজি) </label>
                              <input
                                type="text"
                                name="mother_name_en"
                                className="bg-pr form-control"
                                data-validation=""
                                placeholder="Type in english"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">জন্মতারিখ *</label>
                              <span
                                className="Zebra_DatePicker_Icon_Wrapper"
                                style={{
                                  display: "block",
                                  position: "relative",
                                  float: "none",
                                  inset: "auto",
                                  width: "335.325px",
                                }}
                              >
                                <input
                                  type="text"
                                  name="dob"
                                  className="form-control date_picker"
                                  data-validation="required"
                                  placeholder=""
                                  readOnly="readonly"
                                  style={{
                                    position: "relative",
                                    inset: "auto",
                                  }}
                                />
                                <button
                                  type="button"
                                  className="Zebra_DatePicker_Icon Zebra_DatePicker_Icon_Inside_Right"
                                  style={{ top: "10.5188px", right: 0 }}
                                >
                                  Pick a date
                                </button>
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">মোবাইল নম্বর *</label>
                              <input
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
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">
                                এনআইডি নং/ জন্মনিবন্ধন নম্বর *
                              </label>
                              <input
                                type="text"
                                name="nid"
                                className="form-control"
                                data-validation="required"
                                placeholder=""
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">
                                রোল নম্বর <small>(ইংরেজিতে প্রদান করুন)</small>
                              </label>
                              <input
                                type="number"
                                name="roll_no"
                                className="form-control"
                                placeholder="যদি থাকে"
                              />
                            </div>
                          </div>
                        </div>
                        <hr />
                        <h5>স্থায়ী ঠিকানার তথ্য</h5>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group">
                              <label for="division_iid" className="font-bold">
                                বিভাগ *
                              </label>
                              <select
                                name="division_iid"
                                className="form-control"
                              >
                                <option
                                  value=""
                                  selected=""
                                  disabled=""
                                  data-select2-id={3}
                                >
                                  বিভাগ পছন্দ করুন
                                </option>
                                <option value={1}>চট্টগ্রাম।</option>
                                <option value={6}>ঢাকা</option>
                                <option value={2}>রাজশাহী</option>
                                <option value={3}>খুলনা</option>
                                <option value={4}>বরিশাল</option>
                                <option value={5}>সিলেট</option>
                                <option value={7}>রংপুর</option>
                                <option value={8}>ময়মনসিংহ</option>
                                <option value={9}>মেঘনা</option>
                                <option value={10}>পদ্মা</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label for="district_idd" className="font-bold">
                                জেলা *
                              </label>
                              <select
                                name="district_idd"
                                className="form-control"
                              >
                                <option
                                  value=""
                                  selected=""
                                  disabled=""
                                  data-select2-id={5}
                                >
                                  প্রথমে বিভাগ পছন্দ করুন
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label for="area_id" htmlFor="">
                                থানা/উপজেলা *
                              </label>
                              <select
                                name="area_id"
                                className="form-control"
                              ></select>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <label htmlFor="">
                                ঠিকানা(বাড়ি/পাড়া/মহল্লার পূর্ণ ঠিকানা)
                              </label>
                              <input
                                type="text"
                                name="address"
                                className="form-control"
                                placeholder="ইউনিকোড ব্যবহার করুন"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group">
                              <label htmlFor="">গ্রাম/এলাকা</label>
                              <input
                                type="text"
                                name="village"
                                className="form-control"
                                placeholder="ইউনিকোড ব্যবহার করুন"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label htmlFor="">পোস্ট অফিস</label>
                              <input
                                type="text"
                                name="post_office"
                                className="form-control"
                                placeholder="ইউনিকোড ব্যবহার করুন"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <label htmlFor="">পোস্ট কোড </label>
                              <input
                                type="number"
                                name="postal_code"
                                className="form-control"
                                placeholder="Type in english"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">ইউনিয়ন/ওয়ার্ড (যদি থাকে)</label>
                              <input
                                type="text"
                                name="union"
                                className="form-control"
                                placeholder="ইউনিকোড ব্যবহার করুন"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label htmlFor="">শিক্ষাগত যোগ্যতা</label>
                              <input
                                type="text"
                                name="education"
                                className="form-control"
                                placeholder="ইউনিকোড ব্যবহার করুন"
                              />
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-primary" type="submit">
                          সাবমিট
                        </button>
                      </div>
                      <div className="col-md-4 border shadow-lg py-3 position-sticky">
                        <h3 className="text-center text-primary border-bottom">
                          নির্দেশিকা
                        </h3>
                        <ul
                          className="instruction_ul p-0"
                          style={{ listStyleType: "none" }}
                        >
                          <li>
                            ১. সকল তথ্য বাংলায়{" "}
                            <span className="text-danger font-weight-bold">
                              ইউনিকোড
                            </span>{" "}
                            ব্যবহার করে পূরণ করতে হবে।
                          </li>
                          <li>
                            ২.{" "}
                            <span className="text-danger font-weight-bold">
                              Type in english
                            </span>{" "}
                            ঘরের তথ্য ইংরেজিতে পূরণ করতে হবে।।
                          </li>
                          <li>
                            ৩. তথ্য পূরণের সময়{" "}
                            <span className="text-danger font-weight-bold">
                              এন.আইডি/জন্মনিবন্ধন
                            </span>{" "}
                            অনুসরণ করতে হবে{" "}
                          </li>
                          <li>
                            ৪. সঠিক{" "}
                            <span className="text-danger font-weight-bold">
                              মোবাইল নম্বর
                            </span>{" "}
                            প্রদান করুন। কোন কারণে ফরম নষ্ট/হারিয়ে গেলে আপনার
                            দেওয়া মোবাইল নম্বর দিয়ে তা পুনরুদ্ধার করা যাবে।{" "}
                          </li>
                          <li>
                            ৫.কোন কারণে ফরম নষ্ট/হারিয়ে গেলে উপরের{" "}
                            <span className="text-danger font-weight-bold">
                              "প্রশিক্ষণ সংক্রান্ত"
                            </span>{" "}
                            মেন্যু হতে{" "}
                            <span className="text-danger font-weight-bold">
                              "পূরণকৃত রেজিস্ট্রেশন ফরম ডাউনলোড"
                            </span>{" "}
                            অপশনে ক্লিক করুন{" "}
                          </li>
                        </ul>{" "}
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
            action="/institute-register-online"
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
      <div className="Zebra_DatePicker dp_hidden" style={{ left: "-1000px" }}>
        <table className="dp_header" style={{ width: 245 }}>
          <tbody>
            <tr>
              <td className="dp_previous">«</td>
              <td className="dp_caption">F, Y</td>
              <td className="dp_next">»</td>
            </tr>
          </tbody>
        </table>
        <table className="dp_daypicker">
          <tbody>
            <tr>
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
              <th>Su</th>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="dp_weekend">&nbsp;</td>
              <td className="dp_weekend">&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="dp_weekend">&nbsp;</td>
              <td className="dp_weekend">&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="dp_weekend">&nbsp;</td>
              <td className="dp_weekend">&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="dp_weekend">&nbsp;</td>
              <td className="dp_weekend">&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="dp_weekend">&nbsp;</td>
              <td className="dp_weekend">&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="dp_weekend">&nbsp;</td>
              <td className="dp_weekend">&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <table
          className="dp_monthpicker"
          style={{ width: 245, height: "176.4px", display: "none" }}
        />
        <table
          className="dp_yearpicker"
          style={{ width: 245, height: "176.4px", display: "none" }}
        />
        <table className="dp_footer" style={{ width: 245 }}>
          <tbody>
            <tr>
              <td className="dp_today" style={{ width: "100%" }}>
                Today
              </td>
              <td
                className="dp_clear"
                style={{ width: "50%", display: "none" }}
              >
                Clear date
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Moallem403;
