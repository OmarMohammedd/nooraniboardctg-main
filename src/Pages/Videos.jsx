import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Videos() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div
    >
      <Header />

    
  

      <div className='container'>
       <h4 className="title_vidos mt-4"
        style={{marginBottom:"1rem"}}
       >Videos</h4>
<div className='parent_gallary'>

    <div className=" video-container">
    <iframe
      src="https://www.youtube.com/embed/pgdwvU7Emu8?si=oYcSlcPdWiTMyoAO"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>

  <div className=" video-container">
    <iframe
      src="https://www.youtube.com/embed/Wl3-DzqcM10?si=hYBuBqplmxcNVGkt"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
  
  <div className=" mb-3 video-container">
    <iframe
      src="https://www.youtube.com/embed/nDMX6DZqw4s?si=yTpQa9CYF8r89H7m"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>

    <div className=" video-container">
    <iframe
      src="https://www.youtube.com/embed/sN6SmtIkHnU?si=7L6eS_0o0-mxGnHZ"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>

  <div className=" video-container">
    <iframe
      src="https://www.youtube.com/embed/gU3MH8hbcZs?si=XHusSfyhyv8TpNXe"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>

  <div className="mb-3 video-container">
    <iframe
      src="https://www.youtube.com/embed/omhu_KssMng?si=WTtqhVoimyYSkGNc"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>

  <div className="mb-3 video-container">
    <iframe
      src="https://www.youtube.com/embed/F7bfDkXSh_k?si=J1OYEOBoyHyzOubV"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>

  <div className="mb-3 video-container">
    <iframe
      src="https://www.youtube.com/embed/MOgGd2MIuB4?si=nVRlClYBjMqF-MBP"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
  <div className="mb-3 video-container">
    <iframe
      src="https://www.youtube.com/embed/DCbeHQ6KDUQ?si=b5E2kyOuqQQHO3Sq"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>



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
  )
}

export default Videos