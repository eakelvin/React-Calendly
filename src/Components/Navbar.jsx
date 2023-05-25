import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
            <Link to ="/home">
                <span className="navbar-brand">
                    <img src="./imagess/calend.png" alt="Logo" width="100" height="24" className="d-inline-block align-text-top" />
                </span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-5">
                <Link to = "/individuals"><span className="nav-link active" aria-current="page">Individuals</span></Link>
                <Link to="/teams"><span className="nav-link">Teams</span></Link>
                <Link to ="/enterprise"><span className="nav-link">Enterprise</span></Link>
                </div>
            </div>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar

