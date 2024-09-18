import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Result() {
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

  const [formState, setFormState] = useState({
    ayear: "2023",
    examid: "কেন্দ্রীয় সনদ পরীক্ষা",
    class: "তৃতীয়",
    section: "",
    roll: "",
    studentid: "2021-",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
    // You can perform the form submission logic here (e.g., using fetch or axios to submit the data)
  };

  return (
    <div
      style={{ background: "url(https://nooraniboardctg.com/public/bg.jpg)" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Header />

      {/* <div className="container pt-3">
    <section className="mt-4">
      <div className="row">
        <div className="col-md-6 m-auto">
          <form action="result" method="post">
            <input
              type="hidden"
              name="_token"
              defaultValue="2QTliMlpUda3yZoNuKbDM26WYybkAHyEw9P345ci"
            />{" "}
            <div
              className="inner_div shadow border rounded bg-white p-4"
              style={{ minHeight: 420 }}
            >
              <h3 className="text-center mb-4 text-danger">
                কেন্দ্রীয় সনদ পরীক্ষার ফলাফল
              </h3>
              <div className="col-12"></div>
              <input type="hidden" name="exam_type" defaultValue={1} />
              <div className="form-group">
                <label htmlFor="reg_no" className="font-weight-bold">
                  রেজিস্ট্রেশন নম্বর{" "}
                  <span className="text-danger">(ইংরেজিতে টাইপ করুন)</span>
                </label>
                <input
                  placeholder="তৃতীয় শ্রেণীর শিক্ষার্থীর রেজি: নং ইংরেজিতে প্রদান করুন"
                  data-validation="require"
                  name="reg_no"
                  id="reg_no"
                  type="text"
                  className="form-control"
                />
              </div>
              
              <div className="form-group mt-3">
                <button
                  className="btn btn-success w-100"
                  id="submit_btn"
                  type="submit"
                >
                  সাবমিট করুন
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <form action="result" method="post">
            <input
              type="hidden"
              name="_token"
              defaultValue="2QTliMlpUda3yZoNuKbDM26WYybkAHyEw9P345ci"
            />{" "}
            <div className="inner_div shadow border rounded bg-white p-4">
              <h3 className="text-center mb-4 text-danger">
                মুয়াল্লিম প্রশিক্ষণ পরীক্ষার ফলাফল
              </h3>
              <div className="col-12"></div>
              <div className="form-group">
                <label htmlFor="exam_type" className="font-weight-bold">
                  প্রশিক্ষণের ধরণ
                </label>
                <select
                  required=""
                  name="exam_type"
                  id="exam_type"
                  className="form-control"
                >
                  <option value={2}>বাংলা প্রশিক্ষণ</option>
                  <option value={3}>আরবী প্রশিক্ষণ</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="reg_no" className="font-weight-bold">
                  রেজিস্ট্রেশন নম্বর{" "}
                  <span className="text-danger">(ইংরেজিতে টাইপ করুন)</span>
                </label>
                <input
                  placeholder="প্রশিক্ষণার্থীর রেজি: নং ইংরেজিতে প্রদান করুন"
                  data-validation="require"
                  name="reg_no"
                  id="reg_no"
                  type="text"
                  className="form-control"
                />
              </div>
            
              <div className="form-group mt-3">
                <button
                  className="btn btn-success w-100"
                  id="submit_btn"
                  type="submit"
                >
                  সাবমিট করুন
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div> */}

      <div id="site_content">
        <div className="form_settings">
          <div className="content">
            <div align="center">
              <h1 className="centerH1">Find Result by Student</h1>
            </div>
          </div>

          <table
            className="ttaable"
            width="100%"
            border="0"
            cellSpacing="5"
            cellPadding="5"
          >
            <tbody>
              <tr>
                <td width="47%">
                  <form
                    id="form1"
                    name="form1"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <table
                      width="100%"
                      border="0"
                      align="center"
                      cellPadding="5"
                      cellSpacing="0"
                      className=" tbleft"
                    >
                      <tbody>
                        <tr className="d_flexxx">
                          <td>
                            <div align="right"> শিক্ষাবর্ষ </div>
                          </td>
                          <td>
                            <select
                              className="selectt"
                              name="ayear"
                              id="ayear"
                              value={formState.ayear}
                              onChange={handleChange}
                            >
                              <option>2023</option>
                              <option>2022</option>
                              <option>2021</option>
                              <option>2020</option>
                              <option>2019</option>
                              <option>2018</option>
                            </select>
                            <input
                              name="studentid2"
                              type="hidden"
                              id="studentid"
                              value="2021-"
                              maxLength="13"
                              minLength="10"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div align="right"> পরীক্ষার নাম </div>
                          </td>
                          <td>
                            <select
                              className="selectt"
                              id="examid"
                              name="examid"
                              value={formState.examid}
                              onChange={handleChange}
                            >
                              <option>কেন্দ্রীয় সনদ পরীক্ষা</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <div align="right">
                                <strong> শ্রেণি </strong>
                              </div>
                            </div>
                          </td>
                          <td>
                            <select
                              className="selectt"
                              name="class"
                              id="class"
                              value={formState.class}
                              onChange={handleChange}
                            >
                              <option>তৃতীয়</option>
                              <option>Seven</option>
                            </select>
                            <input
                              readOnly
                              type="hidden"
                              style={{ backgroundColor: "#f1f1f1" }}
                              name="cla"
                              id="cla"
                              size="2"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <div align="right">
                                <strong> এলহাক: </strong>
                              </div>
                            </div>
                          </td>
                          <td>
                            <input
                              name="section"
                              type="text"
                              id="section"
                              value={formState.section}
                              onChange={handleChange}
                              size="10"
                              minLength="1"
                              maxLength="6"
                              className="borderr"
                            />
                            <input
                              readOnly
                              style={{ backgroundColor: "#f1f1f1" }}
                              name="sec"
                              type="hidden"
                              id="sec"
                              size="2"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div align="right">
                              <strong> রেজি নং: </strong>
                            </div>
                          </td>
                          <td>
                            <input
                              className="borderr"
                              name="roll"
                              type="text"
                              id="roll"
                              value={formState.roll}
                              onChange={handleChange}
                              size="10"
                              minLength="5"
                              maxLength="5"
                            />
                            <input
                              name="studentid"
                              type="hidden"
                              id="studentid2"
                              style={{ backgroundColor: "#f1f1f1" }}
                              value="2017"
                              size="20"
                              maxLength="13"
                              readOnly
                              minLength="10"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div align="right"></div>
                          </td>
                          <td>
                            <div align="left">
                              <input
                                className="borderr borderrr"
                                type="submit"
                                name="submit"
                                id="submit"
                                value="View Result"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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

export default Result;
