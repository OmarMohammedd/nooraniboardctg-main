/* eslint-disable no-script-url */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

const convertToBengaliNumerals = (value) => {
  const numbers = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  return String(value).replace(/[0-9]/g, (match) => numbers[match]);
};

function Retail_order() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

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

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const deliveryCharge = 150;
  const onlineCharge = 2.0;

  useEffect(() => {
    const bnToEnNumbers = (input) => {
      const numbers = {
        "০": "0",
        "১": "1",
        "২": "2",
        "৩": "3",
        "৪": "4",
        "৫": "5",
        "৬": "6",
        "৭": "7",
        "৮": "8",
        "৯": "9",
      };

      return input
        .split("")
        .map((char) => (numbers[char] !== undefined ? numbers[char] : char))
        .join("");
    };

    const checkFormInfo = () => {
      let customer_phone = $("#customer_phone").val();
      $("#err_phone_no").html("");
      let cart_subtotal = parseFloat(
        $("#cart_subtotal").val().replace(/,/g, "")
      );

      if (customer_phone.length !== 11) {
        $("#err_phone_no").html("আপনার প্রদত্ত মোবাইল নম্বর সঠিক নয়।");
        setTimeout(() => $(".overlay").hide(), 800);
        return false;
      } else if (cart_subtotal < 500) {
        $("#err_min_order").html("৫০০ টাকার নিচে কোন অর্ডার করা যাবে না।");
        $("#submit_btn").prop("disabled", true);
        setTimeout(() => $(".overlay").hide(), 800);
        return false;
      } else {
        return true;
      }
    };

    const calculation = (data) => {
      $("#cart_table").load(window.location.href + " #cart_table>*", "");

      setTimeout(() => {
        $(".overlay").hide();
        let total = parseFloat($("#cart_subtotal").val().replace(/,/g, ""));
        // console.log(total);
      }, 800);

      $("#online_charge").html(`${data["online_charge"]} ৳`);
      $("#delivery_charge").html(`${data["delivery_charge"]} ৳`);
      $(".cart_total").html(`${data["cart_total"]} ৳`);
      $("#grand_total").html(`${data["grand_total"]} ৳`);
      $("#confirm_btn_total").html(`৳ ${data["grand_total"]}`);

      let cart_total_en = parseFloat(
        bnToEnNumbers(data["cart_total"]).replace(/,/g, "")
      );

      if (cart_total_en >= 500) {
        $("#submit_btn").prop("disabled", false);
      } else {
        $("#submit_btn").prop("disabled", true);
      }
    };

    $(document).on("click", ".product", function () {
      // $(".overlay").show();
      let p_id = $(this).data("id");
      $.ajax({
        url: "https://www.nooraniboardctg.com/retail-cart",
        type: "POST",
        data: {
          p_id: p_id,
          _token: "2QTliMlpUda3yZoNuKbDM26WYybkAHyEw9P345ci",
        },
        success: function (data) {
          calculation(data);
        },
      });
    });

    $(document).on("click", ".trash", function () {
      let rowid = $(this).data("id");
      // $(".overlay").show();
      $.ajax({
        url: "https://www.nooraniboardctg.com/retail-cart-remove",
        type: "POST",
        data: {
          rowid: rowid,
          _token: "2QTliMlpUda3yZoNuKbDM26WYybkAHyEw9P345ci",
        },
        success: function (data) {
          calculation(data);
        },
      });
    });

    $(document).on("change", ".qty", function () {
      // $(".overlay").show();
      let rowid = $(this).data("id");
      let qty = $(this).val();
      $.ajax({
        url: "https://www.nooraniboardctg.com/retail-cart-update",
        type: "POST",
        data: {
          rowid: rowid,
          qty: qty,
          _token: "2QTliMlpUda3yZoNuKbDM26WYybkAHyEw9P345ci",
        },
        success: function (data) {
          calculation(data);
        },
      });
    });
  }, []);

  const addToCart = (book) => {
    const updatedCart = [...cart, { ...book, quantity: 1, total: book.price }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: parseInt(quantity),
            total: parseInt(quantity) * item.price,
          }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateBookSubtotal = () => {
    return cart.reduce((total, item) => total + item.total, 0);
  };

  const calculateTotal = () => {
    const bookSubtotal = calculateBookSubtotal();
    return bookSubtotal + deliveryCharge + onlineCharge;
  };

  return (
    <div
      style={{ background: "url(https://nooraniboardctg.com/public/bg.jpg)" }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Header />

      <div className="content">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-12 text-center ">
              <h3 className="text-center font_weight700">
                বই ও ষ্টেশনারী আইটেম অনলাইন-এ অর্ডার করুন
              </h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <h4 className="alert alert-primary">
                অর্ডার শেষে কুরিয়ারে আপনার পণ্য পৌঁছানোর পর কুরিয়ার ফি প্রদান
                করে আপনার পণ্য গ্রহণ করুন।{" "}
              </h4>
            </div>
            <div className="col-12 text-center">
              <h4 className="alert alert-danger">
                ৫০০ টাকার নিচে কোন অর্ডার করা যাবে না।{" "}
              </h4>
            </div>
          </div>

          <div className="row card-body pt-0 px-0">
            <div
              className="overlay"
              style={{
                display: "none",
                position: "fixed",
                left: "0%",
                top: "0%",
                width: "100%",
                height: "100vh",
                background: "#d8d8d891",
                textAlign: "center",
                zIndex: 999,
              }}
            >
              <i
                style={{ marginTop: "16%" }}
                className="fas fa-2x fa-sync-alt fa-spin"
              />
            </div>

            <div className="col-md-4 pr-md-0">
              <div className="container mt-0 p-3 rounded cart product-details">
                <div className="font-weight-bold">
                  <i className="fas fa-list" />
                  <span className="ml-2">বই &amp; ষ্টেশনারীসমূহ</span>
                </div>
                <hr />
                <div
                  className="row"
                  style={{
                    overflowX: "hidden",
                    overflowY: "scroll",
                    maxHeight: 450,
                  }}
                >
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">প্লে আরবী শিক্ষা</h5>
                      <h6>মূল্য: ৪০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={1}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 1,
                            name: "প্লে আরবী শিক্ষা",
                            price: 40,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">প্লে বাংলা</h5>
                      <h6>মূল্য: ৪০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={2}
                        className="product"
                        onClick={() =>
                          addToCart({ id: 2, name: "প্লে বাংলা", price: 40 })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">প্লে ইংরেজি</h5>
                      <h6>মূল্য: ৪০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={4}
                        className="product"
                        onClick={() =>
                          addToCart({ id: 4, name: "প্লে ইংরেজি", price: 40 })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">প্লে সিলেবাস</h5>
                      <h6>মূল্য: ১৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={5}
                        className="product"
                        onClick={() =>
                          addToCart({ id: 5, name: "প্লে সিলেবাস", price: 15 })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">নার্সারী আরবী শিক্ষা</h5>
                      <h6>মূল্য: ৩৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={6}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 6,
                            name: "নার্সারী আরবী শিক্ষা",
                            price: 35,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">নার্সারী বাংলা</h5>
                      <h6>মূল্য: ২৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={7}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 7,
                            name: "নার্সারী বাংলা",
                            price: 25,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">নার্সারী গণিত</h5>
                      <h6>মূল্য: ২৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={8}
                        className="product"
                        onClick={() =>
                          addToCart({ id: 8, name: "নার্সারী গণিত", price: 25 })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">নার্সারী ইংরেজি</h5>
                      <h6>মূল্য: ২৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={9}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 9,
                            name: "নার্সারী ইংরেজি",
                            price: 25,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">নার্সারী সিলেবাস</h5>
                      <h6>মূল্য: ১৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={10}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 10,
                            name: "নার্সারী সিলেবাস",
                            price: 15,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">১ম শ্রেণি আরবী শিক্ষা</h5>
                      <h6>মূল্য: ৪০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={11}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 11,
                            name: "১ম শ্রেণি আরবী শিক্ষা",
                            price: 40,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">১ম শ্রেণি বাংলা</h5>
                      <h6>মূল্য: ৩০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={12}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 12,
                            name: "১ম শ্রেণি বাংলা",
                            price: 30,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">১ম শ্রেণি গণিত</h5>
                      <h6>মূল্য: ৩০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={13}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 13,
                            name: "১ম শ্রেণি গণিত",
                            price: 30,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">১ম শ্রেণি ইংরেজি</h5>
                      <h6>মূল্য: ৩০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={14}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 14,
                            name: "১ম শ্রেণি ইংরেজি",
                            price: 30,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">১ম শ্রেণি সিলেবাস</h5>
                      <h6>মূল্য: ২০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={15}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 15,
                            name: "১ম শ্রেণি সিলেবাস",
                            price: 20,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">২য় শ্রেণি ছোট কুরআন</h5>
                      <h6>মূল্য: ৩৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={16}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 16,
                            name: "২য় শ্রেণি ছোট কুরআন",
                            price: 35,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">২য় শ্রেণি আরবী শিক্ষা</h5>
                      <h6>মূল্য: ৪৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={17}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 17,
                            name: "২য় শ্রেণি আরবী শিক্ষা",
                            price: 45,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">২য় শ্রেণি বাংলা</h5>
                      <h6>মূল্য: ৩৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={18}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 18,
                            name: "২য় শ্রেণি বাংলা",
                            price: 35,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">২য় শ্রেণি গণিত</h5>
                      <h6>মূল্য: ৪৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={19}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 19,
                            name: "২য় শ্রেণি গণিত",
                            price: 45,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">২য় শ্রেণি ইংরেজি</h5>
                      <h6>মূল্য: ৩৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={20}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 20,
                            name: "২য় শ্রেণি ইংরেজি",
                            price: 35,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">২য় শ্রেণি পরিবেশ</h5>
                      <h6>মূল্য: ৩৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={21}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 21,
                            name: "২য় শ্রেণি পরিবেশ",
                            price: 35,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">২য় শ্রেণি সিলেবাস</h5>
                      <h6>মূল্য: ২০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={22}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 22,
                            name: "২য় শ্রেণি সিলেবাস",
                            price: 20,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">২য় শ্রেণি গাইড</h5>
                      <h6>মূল্য: ৫০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={23}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 23,
                            name: "২য় শ্রেণি গাইড",
                            price: 50,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">৩য় শ্রেণি আরবী শিক্ষা</h5>
                      <h6>মূল্য: ৫৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={24}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 24,
                            name: "৩য় শ্রেণি আরবী শিক্ষা",
                            price: 55,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">৩য় শ্রেণি বাংলা</h5>
                      <h6>মূল্য: ৪৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={25}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 25,
                            name: "৩য় শ্রেণি বাংলা",
                            price: 45,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">৩য় শ্রেণি গণিত</h5>
                      <h6>মূল্য: ৪০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={26}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 26,
                            name: "৩য় শ্রেণি গণিত",
                            price: 40,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">৩য় শ্রেণি ইংরেজি</h5>
                      <h6>মূল্য: ৪০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={27}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 27,
                            name: "৩য় শ্রেণি ইংরেজি",
                            price: 40,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">৩য় শ্রেণি সমাজ</h5>
                      <h6>মূল্য: ৪০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={28}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 28,
                            name: "৩য় শ্রেণি সমাজ",
                            price: 40,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">৩য় শ্রেণি বিজ্ঞান</h5>
                      <h6>মূল্য: ৪০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={29}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 29,
                            name: "৩য় শ্রেণি বিজ্ঞান",
                            price: 40,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">৩য় শ্রেণি সিলেবাস</h5>
                      <h6>মূল্য: ২০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={30}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 30,
                            name: "৩য় শ্রেণি সিলেবাস",
                            price: 20,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name">৩য় শ্রেণি গাইড</h5>
                      <h6>মূল্য: ৮০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={31}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 31,
                            name: "৩য় শ্রেণি গাইড",
                            price: 80,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name"> কু. ও ই. শিক্ষা</h5>
                      <h6>মূল্য: ৬০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={32}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 32,
                            name: " কু. ও ই. শিক্ষা",
                            price: 60,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name"> চক স্পেশাল</h5>
                      <h6>মূল্য: ১১০০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={43}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 43,
                            name: " চক স্পেশাল",
                            price: 1100,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name"> রোল শ্লেট</h5>
                      <h6>মূল্য: ৩৮</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={49}
                        className="product"
                        onClick={() =>
                          addToCart({ id: 49, name: " রোল শ্লেট", price: 38 })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name"> প্লেইন শ্লেট</h5>
                      <h6>মূল্য: ৪০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={50}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 50,
                            name: " প্লেইন শ্লেট",
                            price: 40,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name"> ডাস্টার (কাঠ)</h5>
                      <h6>মূল্য: ৭৫</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={44}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 44,
                            name: " ডাস্টার (কাঠ)",
                            price: 75,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name"> ডাস্টার (ফোম)</h5>
                      <h6>মূল্য: ৭০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={47}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 47,
                            name: " ডাস্টার (ফোম)",
                            price: 70,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name"> ব্ল্যাকবোর্ড (পাতলা)</h5>
                      <h6>মূল্য: ৮৫০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={46}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 46,
                            name: " ব্ল্যাকবোর্ড (পাতলা)",
                            price: 850,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name"> ব্ল্যাকবোর্ড (মোটা)</h5>
                      <h6>মূল্য: ১৩০০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={45}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 45,
                            name: " ব্ল্যাকবোর্ড (মোটা)",
                            price: 1300,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name"> ব্ল্যাকবোর্ড রোল</h5>
                      <h6>মূল্য: ১২০০</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={53}
                        className="product"
                        onClick={() =>
                          addToCart({
                            id: 53,
                            name: " ব্ল্যাকবোর্ড রোল",
                            price: 1200,
                          })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name"> বাংলা খাতা</h5>
                      <h6>মূল্য: ৩৬</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={48}
                        className="product"
                        onClick={() =>
                          addToCart({ id: 48, name: " বাংলা খাতা", price: 36 })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name"> অংক খাতা</h5>
                      <h6>মূল্য: ৩৬</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={51}
                        className="product"
                        onClick={() =>
                          addToCart({ id: 51, name: " অংক খাতা", price: 36 })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card mb-2 py-3 px-2 text-center d-block">
                      <i className="fas fa-book left_book_icon" />
                      <h5 className="book_name"> ইংরেজি খাতা</h5>
                      <h6>মূল্য: ৩৬</h6>
                      <Link
                        to="javascript:void(0)"
                        data-id={52}
                        className="product"
                        onClick={() =>
                          addToCart({ id: 52, name: " ইংরেজি খাতা", price: 36 })
                        }
                      >
                        <span className="p-2 badge badge-pill badge-primary w-100">
                          বিলে যুক্ত করুন
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="col-12"></div>
              <div className="container mt-0 p-3 rounded cart">
                <form
                  // onsubmit={}
                  action="/payment/nagad/pay"
                  method="post"
                >
                  <input
                    type="hidden"
                    name="_token"
                    defaultValue="2QTliMlpUda3yZoNuKbDM26WYybkAHyEw9P345ci"
                  />
                  <div className="row no-gutters">
                    <div className="col-md-8">
                      <div className="product-details mr-2">
                        <div className="d-flex flex-row align-items-center font-weight-bold">
                          <i className="fas fa-cart-arrow-down" />
                          <span className="ml-2">অর্ডারকৃত পণ্যের তথ্য</span>
                        </div>
                        <hr />
                        <h6 className="mb-0 font-weight-bold">
                          অর্ডারের হিসাব
                        </h6>

                        <div id="cart_table">
                          {cart.length === 0 ? (
                            <h4 class="mb-0 font-weight-bold text-center text-danger">
                              আপনি বিলে কোন পণ্য যুক্ত করেননি
                            </h4>
                          ) : (
                            <div
                              style={{ maxHeight: 380, overflowY: "scroll" }}
                            >
                              {cart.map((item, index) => (
                                <div
                                  key={item.id}
                                  className="d-flex justify-content-between align-items-center mt-2 p-2 items rounded"
                                >
                                  <div className="d-flex flex-row">
                                    {index + 1}.
                                    <div className="ml-2">
                                      <span className="font-weight-bold d-block">
                                        {item.name}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center">
                                    <span className="text-black font-weight-bold">
                                      মূল্য:{" "}
                                      {convertToBengaliNumerals(item.price)}৳ x{" "}
                                    </span>

                                    <input
                                      type="hidden"
                                      className="price"
                                      value={item.price}
                                    />

                                    <div className="price ml-2">
                                      <input
                                        type="number"
                                        style={{ width: 80 }}
                                        min={0}
                                        className="form-control form-control-sm credit-inputs qty"
                                        value={item.quantity}
                                        onChange={(e) =>
                                          updateQuantity(
                                            item.id,
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                    <span
                                      className="d-block ml-2 font-weight-bold"
                                      style={{ width: 100, textAlign: "right" }}
                                    >
                                      ৳{convertToBengaliNumerals(item.total)}
                                    </span>
                                    <input
                                      type="hidden"
                                      className="itemtotal"
                                      value={item.total}
                                    />
                                    <Link
                                      className="trash"
                                      to="javascript:void(0)"
                                      onClick={() => removeFromCart(item.id)}
                                    >
                                      <i className="fas fa-trash ml-3 text-danger" />
                                    </Link>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="payment-info">
                        <div className="d-flex justify-content-between align-items-center">
                          <span>বিলের সারসংক্ষেপ</span>
                          <i
                            className="fas fa-file-invoice-dollar"
                            style={{ fontSize: "1.5rem" }}
                          />
                        </div>
                        <h4 className="suggest_text">
                          সঠিক তথ্য ও ঠিকানা দিয়ে অর্ডার সম্পূর্ণ করুন
                        </h4>
                        <div className="mb-2">
                          <label className="custom-label mb-0">আপনার নাম</label>
                          <input
                            data-validation="required"
                            type="text"
                            name="customer_name"
                            className="form-control credit-inputs"
                            placeholder="আপনার সম্পূর্ণ নাম"
                          />
                        </div>
                        <div className="mb-2">
                          <label className="custom-label mb-0">
                            আপনার মোবাইল নম্বর
                          </label>
                          <input
                            data-validation="required"
                            type="number"
                            name="customer_phone"
                            id="customer_phone"
                            className="form-control credit-inputs"
                            placeholder="ইংরেজিতে পূরণ করুন"
                          />
                          <span id="err_phone_no" className="text-danger" />
                        </div>
                        <div className="mb-2">
                          <label className="custom-label mb-0">
                            আপনার নিকটস্থ কুরিয়ার-এর সম্পূর্ণ ঠিকানা
                          </label>
                          <textarea
                            data-validation="required"
                            style={{ resize: "none" }}
                            name="customer_address"
                            placeholder="কুরিয়ার-এর ঠিকানা ভুল হলে কর্তৃপক্ষ দায়ী নয়"
                            className="form-control credit-inputs"
                            rows={3}
                            defaultValue={""}
                          />
                        </div>
                        <hr className="line" />
                        <div className="d-flex justify-content-between information">
                          <span>বই ও ষ্টেশনারী মূল্য</span>
                          <span className="cart_total">
                            {convertToBengaliNumerals(calculateBookSubtotal())}{" "}
                            ৳
                          </span>
                        </div>
                        <div className="d-flex justify-content-between information">
                          <span>কুরিয়ার/ডেলিভারি চার্জ</span>
                          <span id="delivery_charge">
                            {convertToBengaliNumerals(deliveryCharge)} ৳
                          </span>
                        </div>
                        <div className="d-flex justify-content-between information">
                          <span>অনলাইন পেমেন্ট চার্জ</span>
                          <span id="online_charge">
                            {convertToBengaliNumerals(onlineCharge)} ৳
                          </span>
                        </div>
                        <input type="hidden" name="type" defaultValue={6} />
                        <input type="hidden" name="id" defaultValue="null" />
                        <input
                          type="hidden"
                          name="transaction_id"
                          defaultValue="mi22062259t6"
                        />
                        <div className="d-flex justify-content-between information">
                          <span className="font-weight-bold">সর্বমোট</span>
                          <span className="font-weight-bold" id="grand_total">
                            {convertToBengaliNumerals(calculateTotal())} ৳
                          </span>
                        </div>
                        <span id="err_min_order" className="text-danger" />
                        <button
                          id="submit_btn"
                          disabled=""
                          className="btn btn-primary btn-block mt-3 text-center"
                          type="submit"
                        >
                          অর্ডার কন্ফার্ম করুন
                          <i className="fa fa-long-arrow-right ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal fade show"
          id="order_ins_modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title text-danger font-weight-bold text-center d-block w-100">
                  অর্ডারের নিয়মাবলী
                </h3>
                <button
                  type="button"
                  className="close"
                  onClick={toggleModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <ul className="list-group pl-0">
                  <li className="list-group-item border-0 font-weight-bold py-1">
                    ১. <span className="text-danger">৫০০</span> টাকার নিচে কোন
                    অর্ডার করা যাবে না।
                  </li>
                  <li className="list-group-item border-0 font-weight-bold py-1">
                    ২. বোর্ড (মোটা/পাতলা) এর ক্ষেত্রে সর্বনিম্ন{" "}
                    <span className="text-danger">২টি</span> অর্ডার করতে হবে।
                  </li>
                  <li className="list-group-item border-0 font-weight-bold py-1">
                    ৩. শ্লেট(রোল/প্লেইন) এর ক্ষেত্রে সর্বনিম্ন{" "}
                    <span className="text-danger">১০টি</span> অর্ডার করতে হবে।
                  </li>
                  <li className="list-group-item border-0 font-weight-bold py-1">
                    ৪. ডাস্টার(ফোম/কাঠ) এর ক্ষেত্রে সর্বনিম্ন{" "}
                    <span className="text-danger">৫ডজন</span> অর্ডার করতে হবে।{" "}
                  </li>
                </ul>
                <hr />
                <h3 className="text-primary text-center">
                  ডেলিভারি/কুরিয়ার চার্জের তালিকা
                </h3>
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th className="text-center">অর্ডারের পরিমাণ</th>
                      <th className="text-center">চার্জের পরিমাণ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">৫০০৳ - ১০০০৳</td>
                      <td className="text-center">১৫০৳</td>
                    </tr>
                    <tr>
                      <td className="text-center">১০০১৳ - ২০০০৳</td>
                      <td className="text-center">২০০৳</td>
                    </tr>
                    <tr>
                      <td className="text-center">২০০১৳ - ৫০০০৳</td>
                      <td className="text-center">২৫০৳</td>
                    </tr>
                    <tr>
                      <td className="text-center">৫০০১৳ বা তার বেশি</td>
                      <td className="text-center">৩০০৳</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

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

export default Retail_order;
