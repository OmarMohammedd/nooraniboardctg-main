/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="mainfooter" role="contentinfo">
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="footer-pad">
                <h4>কার্যালয়</h4>
                <ul class="list-unstyled">
                  <li>
                    <Link class="d-flex" to="#"></Link>
                  </li>

                  <li>
                    <Link class="d-flex" to="#">
                      <i class="fas fa-home"></i>&nbsp;&nbsp;প্রধান কার্যালয়:-
                      আল জামিয়াতুল আহলিয়া দারুল উলূম মঈনুল ইসলাম হাটহাজারী।
                    </Link>
                  </li>
                  <li>
                    <Link class="d-flex" to="#">
                      <i class="fas fa-building"></i>&nbsp;&nbsp;কেন্দ্রীয়
                      কার্যালয়: নূরানী তা'লীমুল কুরআন বোর্ড চট্টগ্রাম বাংলাদেশ
                      রেল স্টেশন রোড, হাটহাজারী-৪৩৩০, চট্টগ্রাম বাংলাদেশ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="footer-pad">
                <h4>তথ্য ও যোগাযোগ</h4>
                <div class="row">
                  <div class="col-md-4">
                    <ul class="list-unstyled">
                      <li>
                        <Link to="#">অফিস:</Link>
                      </li>
                      <li>
                        <Link to="#">সনদ ও পরীক্ষা:</Link>
                      </li>
                      <li>
                        <Link to="#">বই কেন্দ্র:</Link>
                      </li>
                      <li>
                        <Link to="#">বই অফিস:</Link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-8 p-0">
                    <ul class="list-unstyled">
                      <li>
                        <Link to="">০১৭৭১-৫৫৫০০০, ০১৩২২-৮৯১০১০,৫০</Link>
                      </li>
                      <li>
                        <Link to="">০১৩২২-৮৯১০২০, ০১৩২২-৮৯১০৪০</Link>
                      </li>
                      <li>
                        <Link to="">০১৩২২-৮৯১০০৫</Link>
                      </li>
                      <li>
                        <Link to="">০১৩২২-৮৯১০৩০</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6760.037925207063!2d91.80272103157665!3d22.50656512578452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe17ff158ed6380a9!2z4Kao4KeC4Kaw4Ka-4Kao4KeAIOCmpOCmvuCmsuCmv-CmruCngeCmsiDgppXgp4HgprDgpobgpqgg4Kas4KeL4Kaw4KeN4KahIOCmmuCmn-CnjeCmn-Cml-CnjeCmsOCmvuCmriDgprjgp43gpqXgpr7gp5_gp4Ag4Kaq4KeN4Kaw4Ka24Ka_4KaV4KeN4Ka34KajIOCmuOCnh-CmqOCnjeCmn-CmvuCmsA!5e0!3m2!1sen!2sbd!4v1619984620274!5m2!1sen!2sbd"
                width="100%"
                height="170"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 copy">
              <p class="text-center">
                © Copyright 2024 -
                <Link
                  class="text-white"
                  to="whatsapp://send?phone=+201090540382"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Omar Mohamed
                </Link>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
