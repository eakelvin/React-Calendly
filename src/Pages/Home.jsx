import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar />


    <section className="p-5 text-center  text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 className="fw-bold">Easy <br /> scheduling <br /> <span className="text-danger">ahead</span></h1>
              <p className="lead my-4">Calendly is your hub for scheduling meetings <br /> professionally and efficiently, eliminating the hassle of <br /> back-and-forth emails so you can get back to work</p>

              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter your email address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-dark btn-lg butt" type="button">Sign Up</button>
              </div>
              <p className="text-secondary">Create your free account. No credit card required</p>

            </div>
            <img className="img-fluid w-50 d-none d-sm-block" src="./imagess/cal1.webp" alt="" />
          </div>
        </div>
      </section>

      <section className="p-5 text-center bg-light sec">
        <div className="container">
            <h2>Simplified scheduling for more than
                <br />
                <span className="text-danger">10,000,000</span>
                users worldwide
            </h2>

            <div className="row mt-5 ms-auto">
                <div className="col">
                    <img className="sort" src="./imagess/mt.png" alt="" />
                </div>
                <div className="col">
                    <img className="sort" src="./imagess/vs.webp" alt="" />
                </div>
                <div className="col">
                    <img className="sort" src="./imagess/dn.webp" alt="" />
                </div>
                <div className="col">
                    <img className="sort" src="./imagess/mt5.jpg" alt="" />
                </div>
                <div className="col">
                    <img className="sort" src="./imagess/spot.png" alt="" />
                </div>
            </div>

        </div>
      </section>

      <section className="p-5">
        <div className="container">
          <div className="row mt-5 justify-content-around">

            <div className="col-md-3">
              <span className="badge bg-primary rounded-pill">1</span>
              <h2>Create
                    <br />
                    simple rules
                </h2>
                <p>Let Calendly know your
                    <br />
                    availability preferences and
                    <br />
                    it'll do the work for you.
                </p>
            </div>

            <div className="col-md-3">
              <span className="badge bg-primary rounded-pill">2</span>
              <h2>Share your
                <br />
                link
              </h2>
              <p>Send guests your Calendly <br />
                link or embed it on your <br />
                website
              </p>
            </div>

            <div className="col-md-3">
              <span className="badge bg-primary rounded-pill">3</span>
              <h2>Get booked</h2>
              <p>They pick a time and the <br />
                event is added to your <br />
                calender</p>
            </div>

          </div>
        </div>
      </section>

        
    </>
  )
}

export default Home
