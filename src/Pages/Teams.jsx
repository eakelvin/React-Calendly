import React from 'react'
import Navbar from '../Components/Navbar'

function Teams() {
  return (
    <div>
        <Navbar />

        <section className="p-5">
        <div className="container piz">
            <div className="row">

                <div className="col-md">
                  <h1 className="fw-bold"><span className="text-danger">Power up</span> your<br /> teams</h1>
                  <p className="my-4">Calendly gives you control over team scheduling with a<br /> 
                    standardized scalable process. It's secure, easy to 
                    <br /> mange, and integrates with your team's 
                    <br />favorite tools, so you can get everyone working as 
                    <br />efficiently and effectively as possible.
                </p>
                <button type="button" className="btn btn-primary btn-lg">Start for free</button>
                <button type="button" className="btn btn-secondary btn-lg">Contact Sales</button>
                  </div>
              
              <div className="col">
              <img className="img-fluid" src="./imagess/ct.jpeg" alt="" />
              </div>
              
            </div>
          </div>
      </section>

      <div className="container piz">
        <h1 className="display-4 text-center fw-bold">Streamline tasks, extend team <br /> reach</h1>

        <div className="row mt-5">
          
          <div className="col">
          <img className="img-fluid" src="./imagess/ct1.png" alt="" />
          </div>
  
          <div className="col-md ms-5">
            <p className="text-danger">AUTOMATED ASSIGNMENT</p>
            <h3>Control how your team gets <br />booked</h3>
            <p>With Calendly, you can offer sessions that are a few minutes <br />
                or a few hours, for one invitee or a group. Automated round- <br />
                robin, first-available, or geography-based assignments let <br />
                you easily divvy up meetings in any way that works for your <br />
                team members.
            </p>
          </div>
  
        </div>
      </div>

      <section className="p-5 mt-5">
        <div className="container">
            <div className="row">
                <p className="text-center text-danger">SOLUTIONS</p>
                <h3 className="text-center">The right Calendly for the work you do</h3>
                
                <div className="col mt-4">
                    <div className="card mb-3">
                        <img src="./imagess/sale.jpg" className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Sales</h5>
                          <p className="card-text">Get to your best leads faster.</p>
                          <p className="card-text">
                            <a href="#" className="card-link linkk">Learn more
                                <i className="bi bi-arrow-right-short"></i>
                              </a>
                          </p>
                        </div>
                      </div>
                </div>

                <div className="col mt-4">
                    <div className="card mb-3">
                        <img src="./imagess/re.jpg" className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Recruiting</h5>
                          <p className="card-text">Less emailing, more closing</p>
                          <p className="card-text">
                            <a href="#" className="card-link linkk">Learn more
                                <i className="bi bi-arrow-right-short"></i>
                              </a>
                          </p>
                        </div>
                      </div>
                </div>

                <div className="col mt-4">
                    <div className="card mb-3">
                        <img src="./imagess/cs.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Customer success</h5>
                          <p className="card-text">Connect with customers when it matters</p>
                          <p className="card-text">
                            <a href="#" className="card-link linkk">Learn more
                                <i className="bi bi-arrow-right-short"></i>
                              </a>
                          </p>
                        </div>
                      </div>
                </div>
                
                <div className="col mt-4">
                    <div className="card mb-3">
                        <img src="./imagess/edu.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">Education</h5>
                          <p className="card-text">Boost student success</p>
                          <p className="card-text">
                            <a href="#" className="card-link linkk">Learn more
                                <i className="bi bi-arrow-right-short"></i>
                              </a>
                          </p>
                        </div>
                      </div>
                </div>
                
            </div>
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

export default Teams
