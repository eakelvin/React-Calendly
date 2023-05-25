import React from 'react'
import Navbar from '../Components/Navbar'

function Individuals() {
  return (
    <div>
        <Navbar />

        <section className="p-5">
        <div className="container piz">
            <div className="row">

                <div className="col">
                  <h1 className="fw-bold">The genius way<br /> to work <span className="text-danger">better</span></h1>
                  <p className="lead my-4">Calendly makes it easy to work smarter when you're<br /> working solo. Meetings, sessions, and appointments <br /> become more efficient ways to achieve success and <br />accomplish goals.</p>
                  <div className="input-group">
                    <button className="btn btn-dark btn-lg butt1" type="button">Sign Up for free</button>
                  </div>
                  </div>
              
              <div className="col">
              <img className="img-fluid" src="./imagess/sw.jpg" alt="" />
              </div>
              
            </div>
          </div>
      </section>


      <section className="p-5">
        <div className="container piz">
            <div className="row">
              
              <div className="col">
              <img className="img-fluid" src="./imagess/meet.png" alt="" />
              </div>
      
              <div className="col">
                <p>A CURATED CALENDER</p>
                <h3>Book up efficiently</h3>
                <p>When invitees select a meeting slot from your schedule, they <br />
                    only see the times you're available, and only the length and <br />
                    type of meeting you want to have. Your schedule fills up <br />
                    efficiently, and everyone avoids excess email exchanges.
                </p>
              </div>
      
            </div>
          </div>
      </section>

      <section className="p-5">
        <div className="container piz">
            <div className="row">

                <div className="col">
                    <p>AUTOMATED NOTIFICATIONS & FOLLOWS-UPS</p>
                    <h3>Work like you have a <br />personal assistant</h3>
                    <p>Because Calendly automates administrative tasks like <br />
                        sending reminder emails and follow-ups, you can focus on <br />
                        the work that builds your business and brings customers<br />
                        back for more.
                    </p>
                  </div>
              
              <div className="col">
              <img className="img-fluid" src="./imagess/pa1.png" alt="" />
              </div>
              
            </div>
          </div>
      </section>

      <section className="bgc text-dark p-5">
        <div className="container">
          <h1 className="fw-bold">Find just-right plans <br /> 
            for individuals and <br /> small teams
        </h1>
        <button type="button" className="btn btn-secondary btn-lg">See our plans</button>
        </div>
      </section>

      <section className="p-3">
        <div className="container">
          <div className="row mt-5 justify-content-around">

            <div className="col-md-4">
                <h2>Easy
                    <br />
                    <span className="text-danger">ahead</span>
                </h2>
                <p>We take the work out of connecting with others <br />
                  so you can accomplish more.
                </p>

                <select className="form-select mt-5" aria-label="Disabled select example">
                  <option value="">English</option>
                  <option value="1">French</option>
                  <option value="2">Twi</option>
                  <option value="3">Ga</option>
                </select>

                {/* <Form.Select aria-label="Default select example">
                  <option>English</option>
                  <option value="1">French</option>
                  <option value="2">Twi</option>
                  <option value="3">Ga</option>
                </Form.Select> */}
               
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

export default Individuals
