/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import membersData from "./MembersData";

function Member() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const member = membersData.find((member) => member.memberId === id);

  if (!member) {
    return <div className="container">Member not found!</div>;
  }

  return (
    <div
      style={{ background: "url(https://nooraniboardctg.com/public/bg.jpg)" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Header />

      <div className="container">
        <section>
          <div className="filter">
            <div className="row">
              <div className="col-12">
                <h2 className="hdr-primary">
                  <span>{member.name}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 grid-margin stretch-card">
              <div className="card">
                <div className="profile-card">
                  <div className="profile-header">
                    <div className="cover-image">
                      <img
                        src="https://nooraniboardctg.com/public/assets/avatar_bg.jpg"
                        className="img img-fluid"
                      />
                    </div>
                    <div className="user-image">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="img "
                      />
                    </div>
                  </div>
                  <div className="profile-content">
                    <div className="profile-name">{member.name}</div>
                    <div className="profile-designation">{member.job}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title font-weight-bold">বিস্তারিত তথ্য </p>
                  <hr />
                  <p className="card-description">প্রাথমিক তথ্য</p>
                  <ul className="about">
                    <li className="about-items">
                      <i className="mdi mdi-account icon-sm " />
                      <span className="about-item-name">নাম :</span>
                      <span className="about-item-detail">{member.name}</span>
                    </li>
                    <li className="about-items">
                      <i className="mdi mdi-account icon-sm " />
                      <span className="about-item-name">পদবী :</span>
                      <span className="about-item-detail">{member.job}</span>
                    </li>
                    <li className="about-items">
                      <i className="mdi mdi-account icon-sm " />
                      <span className="about-item-name">মোবাইল নং :</span>
                      <span className="about-item-detail">
                        {member.phoneNumber}
                      </span>
                    </li>
                    <li className="about-items">
                      <i className="mdi mdi-account icon-sm " />
                      <span className="about-item-name">ইমেইল :</span>
                      <span className="about-item-detail">{member.email}</span>
                    </li>
                    <li className="about-items">
                      <i className="mdi mdi-format-align-left icon-sm " />
                      <span className="about-item-name">আমার সম্পর্কে:</span>
                      <span className="about-item-detail" />
                    </li>
                  </ul>
                  <p className="card-description">অন্যান্য তথ্য</p>
                  <ul className="about">
                    <li className="about-items">
                      <i className="mdi mdi-cake icon-sm " />
                      <span className="about-item-name">জন্ম তারিখ:</span>
                      <span className="about-item-detail">{member.birth}</span>
                    </li>
                    <li className="about-items">
                      <i className="mdi mdi-account icon-sm " />
                      <span className="about-item-name">রক্তের গ্রুপ:</span>
                      <span className="about-item-detail">
                        {member.bloodtype}
                      </span>
                    </li>
                    <li className="about-items">
                      <i className="mdi mdi-clipboard-account icon-sm " />
                      <span className="about-item-name">কক্ষ নং:</span>
                      <span className="about-item-detail" />
                    </li>
                  </ul>
                </div>
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
            action="https://www.nooraniboardctg.com/institute-register-online"
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

export default Member;
