import React from 'react'
import Navbar from '../Components/Navbar'

function Enterprise() {
  return (
    <div>
        <Navbar />

        <section className="p-5 text-center">
        <div className="container">
            <h1 className="fw-bold">
                <span className="text-danger">Way more</span> than a <br />
                scheduling link
            </h1>
            <p className="text-dark lead fw-bold mt-5">
                Standardize on the #1 scheduling platform and <br />
                deliver thr power of Calendly accross your entire <br />
                organization.
            </p>
            <button type="button" className="btn btn-dark btn-lg">Contact Sales</button>
        </div>
      </section>

      <section className="p-5 text-center bg-dark text-light">
        <div className="container">
            <h2>Trusted by more than <span className="text-danger">50, 000</span> of the 
                <br />
                world's leading organizations
            </h2>

            <div className="row mt-5 ms-auto">
                <div className="col"><img className="sort" src="./imagess/db.png" alt="" /></div>
                <div className="col"> <img className="sort" src="./imagess/eba.jpg" alt="" /></div>
                <div className="col"><img className="sort" src="./imagess/visa.png" alt="" /></div>
                <div className="col"><img className="sort" src="./imagess/who.jpg" alt="" /></div>
                <div className="col"><img className="sort" src="./imagess/wb.png" alt="" /></div>
            </div>
        </div>
      </section>

      <section className="p-5">
        <div className="container">
            <div className="row">

              <div className="col-sm-4 col-md-4 p-3">
              <div className="card p-3" >
                      <h5 className="card-title text-danger fw-bold mt-4 ms-5">Sales</h5>
                      <img src="./imagess/sales.jpg" className="card-img-top reduce mt-4" alt="..." />
                      <div className="card-body">
                    
                        <p className="card-text lh-lg ms-4">Convert more leads and <br />
                        prospects into meetings <br />
                        and revenue. Easily book <br />
                        demos and customer calls <br />
                        without the back and forth.</p>
                      </div>
                    </div>
              </div>
              

              <div className="col-sm-4 col-md-4 p-3">
                <div className="card p-3">
                  <h5 className="card-title text-danger fw-bold mt-4 ms-5">Customer Success</h5>
                  <img src="./imagess/cus.png" className="card-img-top reduce mt-4" alt="..." />
                  <div className="card-body">
                    <p className="card-text lh-lg ms-4">
                      Deliver better support <br />
                      interactions and customer <br />
                      consultations. Stay <br />
                      connected with automated <br />
                      reminders and follow-ups.</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-md-4 p-3">
                <div className="card p-3">
                  <h5 className="card-title text-danger fw-bold mt-4 ms-5">Recruiting</h5>
                  <img src="./imagess/rec.jpg" className="card-img-top reduce mt-4" alt="..." />
                  <div className="card-body">
                    <p className="card-text lh-lg ms-4">
                      Fill your candidate pipeline <br />
                        and book more interviews<br />
                        and recruiter screens with  <br />
                        easy, standardized<br />
                        scheduling.</p>
                  </div>
                </div>
              </div>


            <div className="text-center mt-5">
                <button type="button" className="bg-info btn btn-outline-primary">Learn More</button>
            </div>
      
        </div>
        </div>
      </section>

      <section className="p-3">
        <div className="container">
          <div className="row justify-content-around">

            <div className="col-md-4">
                <h2>Easy
                    <br />
                    <span className="text-danger">ahead</span>
                </h2>
                <p>We take the work out of connecting with others <br />
                  so you can accomplish more.
                </p>

                <select className="form-select mt-5" aria-label="Disabled select example">
                  <option selected>English</option>
                  <option value="1">French</option>
                  <option value="2">Twi</option>
                  <option value="3">Ga</option>
                </select>
               
            </div>

            <div className="col-md ms-5 mt-4">
              <h2>About</h2>
              <p>About Calendly</p>
              <p>Contact Sales</p>
              <p>Newsroom</p>
              <p>Careers</p>
              <p>Security</p>
            </div>

            <div className="col-md ms-5 mt-4">
              <h2>Solutions</h2>
              <p>Customer Success</p>
              <p>Sales</p>
              <p>Recruiting</p>
              <p>Education</p>
              <p>Marketing</p>
            </div>

            <div className="col-md ms-5 mt-4">
              <h2>Popular Features</h2>
              <p>Embed Calendly</p>
              <p>Availability</p>
              <p>Sending Notifications</p>
              <p>Using Calendly Mobile</p>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Enterprise
