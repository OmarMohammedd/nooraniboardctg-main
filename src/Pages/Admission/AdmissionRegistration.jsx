import React, { useEffect, useState } from "react";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import "./admission.css"


function AdmissionRegistration() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [image, setImage] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUploadClick = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };



  return (
    <div>
      
      <Header />
        
      <div className="bg-[#F8F8FF] container">
  <div>
    <div className="container mx-auto">
      <div className="w-full  rounded-lg text-black my-10">
        {/* <h1 class="text-3xl lg:text-5xl font-semibold text-center mt-16 px-5 lg:px-0">বাংলাদেশ টেকনিকাল ট্রেনিং এন্ড
        ডেভেলপমেন্ট সেন্টার</h1> */}
        <h1 className="text-2xl lg:text-4xl font-medium text-center mt-2">
          নতুন ভর্তিচ্ছুক শিক্ষার্থী ফরম
        </h1>
        <p className="text-base text-center pt-4 px-5 lg:px-0">
          নিচের ফরমটি যথাযথভাবে পূরন করে জমা করুন । ({" "}
          <span className="text-red-500">* </span> )চিহ্নিত ঘর অবশ্যই পুরণ করতে
          হবে
        </p>
        <div>
          <form className="w-full bg-[#D9D9D9] mt-10 p-5 xl:p-10 rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-5 pb-4">
              <div className="md:col-span-1 flex justify-center md:justify-end items-center order-1 md:order-2">
                <div className="rounded-md flex flex-col justify-center items-center">
                  <div
                    role="presentation"
                    tabIndex={0}
                    className="flex justify-center items-center  xl:w-40 h-44 border-2 bg-white  border-dashed rounded-lg cursor-pointer"
                  >
                    <input
                      accept="image/*"
                      type="file"
                      tabIndex={-1}
                      style={{ display: "none" }}
                    />
 <div
      id="drop-area"
      className="w-full h-full border-primary rounded-lg flex justify-center items-center"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {image ? (
        <img src={image} alt="Uploaded" className="w-full h-full object-cover" />
      ) : (
        <h1 className="text-center text-sm">
<label htmlFor="file-input" className="cursor-pointer">
        <span className="">Click or drag to this area to upload</span>
      </label>        </h1>
        
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleUploadClick}
        style={{ display: 'none' }}
        id="file-input"
      />
      {/* <label htmlFor="file-input" className="cursor-pointer">
        <span className="text-blue-500">Click or drag to this area to upload</span>
      </label> */}
    </div>
                  </div>
                  <p className="text-xs text-red-500 mt-2">
                    Maximum image size 1 MB
                  </p>
                </div>
              </div>
              <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-5 order-2 md:order-1">
                <div className="flex flex-col gap-2 col-span-1">
                  <label htmlFor="studentName" className="text-base text-black">
                    ছাত্র/ছাত্রীর পূর্ণ নাম ( In English ):{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="studentName"
                    name="studentName"
                    type="text"
                    placeholder="Enter name"
                    className="border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="flex flex-col gap-2 col-span-1">
                  <label htmlFor="fatherName" className="text-base text-black">
                    পিতার নাম ( In English ):{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fatherName"
                    name="fatherName"
                    type="text"
                    placeholder="Enter father's name"
                    className="border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="flex flex-col gap-2 col-span-1">
                  <label htmlFor="motherName" className="text-base text-black">
                    মাতার নাম ( In English ):{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="motherName"
                    name="motherName"
                    type="text"
                    placeholder="Enter mother's name"
                    className="border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="flex flex-col gap-2 col-span-1">
                  <label htmlFor="nationality" className="text-base text-black">
                    জাতীয়তা( In English ):{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="nationality"
                    name="nationality"
                    type="text"
                    placeholder="Enter nationality"
                    className="border border-gray-300 p-2 rounded"
                  />
                </div>
                <div className="flex flex-col gap-2 col-span-1">
                  <label htmlFor="gender" className="text-base text-black">
                    লিঙ্গ( In English ): <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="border border-gray-300 p-2 rounded"
                  >
                    <option value="পুরুষ">পুরুষ</option>
                    <option value="মহিলা">মহিলা</option>
                    <option value="অন্যান্য">অন্যান্য</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 col-span-1">
                  <label htmlFor="religion" className="text-base text-black">
                    ধর্ম( In English ): <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="religion"
                    name="religion"
                    type="text"
                    placeholder="Enter religion"
                    className="border border-gray-300 p-2 rounded"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              <div className="flex flex-col gap-2 col-span-1">
                <label htmlFor="birthDate" className="text-base text-black">
                  জন্ম তারিখ ( In English ):{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  id="birthDate"
                  name="birthDate"
                  type="text"
                  placeholder="Enter birth date"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <label htmlFor="nidNumber" className="text-base text-black">
                  এনআইডি নম্বর ( In English ):{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  id="nidNumber"
                  name="nidNumber"
                  type="text"
                  placeholder="Enter NID number"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <label htmlFor="phoneNumber" className="text-base text-black">
                  ফোন নম্বর ( In English ):{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="Enter phone number"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <label
                  htmlFor="guardianPhoneNumber"
                  className="text-base text-black"
                >
                  অভিভাবকের ফোন নম্বর ( In English ):{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  id="guardianPhoneNumber"
                  name="guardianPhoneNumber"
                  type="text"
                  placeholder="Enter guardian's phone number"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
            </div>
            <hr className="w-full" />
            <h1 className="text-base font-semibold mt-2">বর্তমান ঠিকানা</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              <div className="flex flex-col gap-2 col-span-1">
                <label
                  htmlFor="currentVillage"
                  className="text-base text-black"
                >
                  গ্রাম ( In English ): <span className="text-red-600">*</span>
                </label>
                <input
                  id="currentVillage"
                  name="currentVillage"
                  type="text"
                  placeholder="Enter village"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <label
                  htmlFor="currentPostOffice"
                  className="text-base text-black"
                >
                  ডাকঘর ( In English ): <span className="text-red-600">*</span>
                </label>
                <input
                  id="currentPostOffice"
                  name="currentPostOffice"
                  type="text"
                  placeholder="Enter post office"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <label htmlFor="currentUnion" className="text-base text-black">
                  ইউনিয়ন ( In English ):{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  id="currentUnion"
                  name="currentUnion"
                  type="text"
                  placeholder="Enter union"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <label
                  htmlFor="currentDistrict"
                  className="text-base text-black"
                >
                  জেলা ( In English ): <span className="text-red-600">*</span>
                </label>
                <input
                  id="currentDistrict"
                  name="currentDistrict"
                  type="text"
                  placeholder="Enter district"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
            </div>
            <hr className="w-full" />
            <h1 className="text-base font-semibold mt-5">স্থায়ী ঠিকানা</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
              <div className="flex flex-col gap-2 col-span-1">
                <label
                  htmlFor="currentVillage"
                  className="text-base text-black"
                >
                  গ্রাম ( In English ): <span className="text-red-600">*</span>
                </label>
                <input
                  id="currentVillage"
                  name="currentVillage"
                  type="text"
                  placeholder="Enter village"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <label
                  htmlFor="currentPostOffice"
                  className="text-base text-black"
                >
                  ডাকঘর ( In English ): <span className="text-red-600">*</span>
                </label>
                <input
                  id="currentPostOffice"
                  name="currentPostOffice"
                  type="text"
                  placeholder="Enter post office"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <label htmlFor="currentUnion" className="text-base text-black">
                  ইউনিয়ন ( In English ):{" "}
                  <span className="text-red-600">*</span>
                </label>
                <input
                  id="currentUnion"
                  name="currentUnion"
                  type="text"
                  placeholder="Enter union"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-1">
                <label
                  htmlFor="currentDistrict"
                  className="text-base text-black"
                >
                  জেলা ( In English ): <span className="text-red-600">*</span>
                </label>
                <input
                  id="currentDistrict"
                  name="currentDistrict"
                  type="text"
                  placeholder="Enter district"
                  className="border border-gray-300 p-2 rounded"
                />
              </div>
            </div>
            <hr className="w-full " />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="col-span-1 md:col-span-2 lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="col-span-1 md:col-span-2 mt-5">
                  <p className="text-xl font-semibold ">
                    আপনি কোন বিষয়ের পরীক্ষায় অংশগ্রহণ করতে চান? নির্বাচন করুন।
                  </p>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="computerApplication"
                      name="computerApplication"
                      className="mr-2"
                    />
                    <label
                      htmlFor="computerApplication"
                      className="text-base text-black"
                    >
                      কম্পিউটার অফিস অ্যাপ্লিকেশন
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="cseDiploma"
                      name="cseDiploma"
                      className="mr-2"
                    />
                    <label
                      htmlFor="cseDiploma"
                      className="text-base text-black"
                    >
                      কম্পিউটার সায়েন্সে ডিপ্লোমা
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="webDesign"
                      name="webDesign"
                      className="mr-2"
                    />
                    <label htmlFor="webDesign" className="text-base text-black">
                      ওয়েব ডিজাইন
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="hardwareNetworking"
                      name="hardwareNetworking"
                      className="mr-2"
                    />
                    <label
                      htmlFor="hardwareNetworking"
                      className="text-base text-black"
                    >
                      হার্ডওয়্যার এবং নেটওয়ার্কিং
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="outsourcingSocialNetworking"
                      name="outsourcingSocialNetworking"
                      className="mr-2"
                    />
                    <label
                      htmlFor="outsourcingSocialNetworking"
                      className="text-base text-black"
                    >
                      আউটসোর্সিং এবং সোশ্যাল নেটওয়ার্কিং
                    </label>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="diplomaGraphicDesign"
                      name="diplomaGraphicDesign"
                      className="mr-2"
                    />
                    <label
                      htmlFor="diplomaGraphicDesign"
                      className="text-base text-black"
                    >
                      গ্রাফিক ডিজাইনে ডিপ্লোমা
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="autoCadAnimation"
                      name="autoCadAnimation"
                      className="mr-2"
                    />
                    <label
                      htmlFor="autoCadAnimation"
                      className="text-base text-black"
                    >
                      অটো ক্যাড, ২ডি, ৩ডি অ্যানিমেশন
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="landSurvey"
                      name="landSurvey"
                      className="mr-2"
                    />
                    <label
                      htmlFor="landSurvey"
                      className="text-base text-black"
                    >
                      ভূমি জরিপ
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="electricalWiring"
                      name="electricalWiring"
                      className="mr-2"
                    />
                    <label
                      htmlFor="electricalWiring"
                      className="text-base text-black"
                    >
                      বিদ্যুৎ ও বাড়ির ওয়ায়ারিং
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id="refrigerationAC"
                      name="refrigerationAC"
                      className="mr-2"
                    />
                    <label
                      htmlFor="refrigerationAC"
                      className="text-base text-black"
                    >
                      রেফ্রিজারেশন ও এয়ার কন্ডিশনিং
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <div className="col-span-1 md:col-span-1 lg:col-span-1 mt-5">
                  <p className="text-xl font-semibold mb-4">
                    আপনি কোন ব্যাচ পছন্দ করেন এবং কোন শিফট চান, নির্বাচন করুন।
                  </p>
                </div>
                <table className="table-auto w-full border">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-4 py-2">শিফট</th>
                      <th className="border px-4 py-2">সময় (Time)</th>
                      <th className="border px-4 py-2">নির্বাচন করুন</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">
                        প্রথম শিফট (First Shift)
                      </td>
                      <td className="border px-4 py-2">8:00 AM - 12:00 PM</td>
                      <td className="border px-4 py-2 text-center">
                        <input
                          type="radio"
                          name="shift"
                          id="firstShift"
                          defaultValue="firstShift"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        দ্বিতীয় শিফট (Second Shift)
                      </td>
                      <td className="border px-4 py-2">1:00 PM - 5:00 PM</td>
                      <td className="border px-4 py-2 text-center">
                        <input
                          type="radio"
                          name="shift"
                          id="secondShift"
                          defaultValue="secondShift"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        তৃতীয় শিফট (Third Shift)
                      </td>
                      <td className="border px-4 py-2">5:00 PM - 10:00 PM</td>
                      <td className="border px-4 py-2 text-center">
                        <input
                          type="radio"
                          name="shift"
                          id="thirdShift"
                          defaultValue="thirdShift"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <hr className="w-full" />
            <div className="w-full mt-5">
              <div className="w-full grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1">
                  <h3 className="font-bold">অতিরিক্ত কোর্স :</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-6" />
                </div>
                <div className="col-span-1 flex flex-col items-end gap-2">
                  <label className="text-base text-black">
                    আপনার প্রজনীয়ও কোর্সের নাম লিখুন{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="courseName"
                    name="courseName"
                    type="text"
                    placeholder="Enter your course name"
                    className="border w-64 border-gray-300 p-2 rounded"
                  />
                  <button className="w-64 bg-green-500 text-white p-2 rounded hover:bg-green-600">
                    যোগ করুন
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="bg-green-500 text-white px-20 py-2 rounded-lg"
              >
                জমা দিন
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


      <Footer />
      
    </div>
  )
}

export default AdmissionRegistration