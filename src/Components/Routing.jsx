import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Individuals from '../Pages/Individuals'
import Teams from '../Pages/Teams'
import Enterprise from '../Pages/Enterprise'

function Routing() {
  return (
    <div>

        <Router>
          <Routes>
            <Route exact path='/home' element={<Home />}  />
            <Route path='/individuals' element={<Individuals />}  />
            <Route path='/teams' element={<Teams />}  />
            <Route path='/enterprise' element={<Enterprise />}  />
          </Routes>
        </Router>

       
      
    </div>
  )
}


export default Routing
