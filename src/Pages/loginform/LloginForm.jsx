import React, { useEffect } from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function LloginForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
         <Header/>

             <div className="container">
             <div style={{ margin: "auto", maxWidth: 400, textAlign: "center" }}>

             <a href="">
              <h3 style={{ color: "#0d58a5", marginTop: 10 }}>
                Online Admission System
              </h3>
            </a>

            <p style={{ marginTop: 5, color: "red", fontWeight: "bold" }}>
              Helpline : 01819-498512, 01933-234575{" "}
            </p>

              
  <a
    href="/application"
    className="btn btn-primary"
    style={{ margin: "15px 0px 20px 0px" }}
  >
    Go Back
  </a>
  <form id="frmLogin">
  <div className="grp-div">
    <div style={{ paddingTop: 15, fontSize: 16 }}>
      ইতিমধ্যেই পূরণকৃত ফরম এর <span style={{color:"#E80000"}}>তথ্য পরিবর্তন</span> অথবা
      <br />
      <span style={{color:"#E80000"}}>ভর্তি সংক্রান্ত কার্যক্রম</span> করতে&nbsp;:
      <br />
      <b>Applicant Login</b>
    </div>
    <div id="login">
      <div style={{ padding: "5px 30px 5px 30px" }}>
        <input
          className="form-control myField"
          name="username"
          placeholder="Form No."
        />
        <div id="errName" className="error pull-left" />
        <input
          className="form-control myField mt-3"
          name="password"
          placeholder="Mobile No.(01XXXXXXXXX)"
        />
        <div id="errPass" className="error pull-left" />
        <button
          name="submit"
          className="btn btn-primary home_button myField  mt-3"
          style={{ marginLeft: 0 }}
        >
          Login
        </button>
        <div id="errCred" />
      </div>
      <div style={{ margin: "0px 0px 10px 0px", fontWeight: "bold" }}>
        <a style={{color: "#E80000"}} href="#" onclick="altername()">
          Cannot Remember Anything? Click Here
        </a>
      </div>
    </div>
  </div>
</form>

  <div id="errCred" />
</div>

             </div>


         <Footer/>
    </div>
  )
}

export default LloginForm